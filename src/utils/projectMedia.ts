import { useState, useEffect } from 'react';
import type { Project } from '../types';

// In-memory cache for probed image existence checks
const imageExistenceCache = new Map<string, boolean>();

/**
 * Tests whether an image URL actually resolves and can be loaded.
 */
export const checkImageExists = (url: string): Promise<boolean> => {
  if (imageExistenceCache.has(url)) {
    return Promise.resolve(imageExistenceCache.get(url)!);
  }

  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      imageExistenceCache.set(url, true);
      resolve(true);
    };
    img.onerror = () => {
      imageExistenceCache.set(url, false);
      resolve(false);
    };
    img.src = url;
  });
};

/**
 * Extracts the base filename prefix for a project's images.
 * e.g., '/images/projects/wms-kia-1.jpg' -> 'wms-kia'
 * e.g., 'kanto-digital-canteen' -> 'kanto'
 */
export function getProjectImagePrefix(projectId: string, firstImagePath?: string): string {
  if (firstImagePath) {
    const match = firstImagePath.match(/\/images\/projects\/([a-zA-Z0-9_-]+?)-\d+\.[a-zA-Z0-9]+/);
    if (match && match[1]) {
      return match[1];
    }
  }

  const prefixMap: Record<string, string> = {
    'wms-pt-kia': 'wms-kia',
    'kia-attendance-system': 'wms-kia',
    'mbb-financial-system': 'mbb-finance',
    'presensi-school-app': 'presensi',
    'kanto-digital-canteen': 'kanto',
    'batik-sweety-mobile': 'batik-sweety',
    'laundry-management-system': 'laundry',
    'equipment-borrowing-system': 'borrowing',
  };

  return prefixMap[projectId] || projectId.replace(/-app|-system|-mobile|-platform/g, '').split('-')[0];
}

/**
 * Auto-detects all existing sequential photos (1, 2, 3, 4... etc.) for a project.
 * Checks .jpg, .png, .webp, .jpeg, and .svg formats.
 */
export async function detectProjectImages(
  projectId: string,
  initialImages: string[] = [],
  initialFallbacks: string[] = []
): Promise<{ images: string[]; fallbacks: string[] }> {
  const prefix = getProjectImagePrefix(projectId, initialImages[0]);
  const detectedImages: string[] = [];
  const detectedFallbacks: string[] = [];
  const extensions = ['.jpg', '.png', '.webp', '.jpeg'];

  // Check up to 12 sequential images
  let consecutiveMisses = 0;
  for (let i = 1; i <= 12; i++) {
    let foundPhotoUrl: string | null = null;

    // Check primary photo extensions (.jpg, .png, .webp, .jpeg)
    for (const ext of extensions) {
      const candidateUrl = `/images/projects/${prefix}-${i}${ext}`;
      const exists = await checkImageExists(candidateUrl);
      if (exists) {
        foundPhotoUrl = candidateUrl;
        break;
      }
    }

    // Check SVG fallback
    const svgCandidate = `/images/projects/${prefix}-${i}.svg`;
    const svgExists = await checkImageExists(svgCandidate);

    if (foundPhotoUrl) {
      detectedImages.push(foundPhotoUrl);
      detectedFallbacks.push(svgExists ? svgCandidate : foundPhotoUrl);
      consecutiveMisses = 0;
    } else if (svgExists) {
      // SVG placeholder exists
      detectedImages.push(svgCandidate);
      detectedFallbacks.push(svgCandidate);
      consecutiveMisses = 0;
    } else {
      consecutiveMisses++;
      // Stop scanning if we encounter consecutive missing slots after finding at least one
      if (detectedImages.length > 0 && consecutiveMisses >= 1) {
        break;
      }
    }
  }

  // If detected at least 1 image, return the detected list
  if (detectedImages.length > 0) {
    return {
      images: detectedImages,
      fallbacks: detectedFallbacks,
    };
  }

  // Fallback to initial images if nothing probed successfully
  return {
    images: initialImages.length > 0 ? initialImages : [`/images/projects/${prefix}-1.jpg`],
    fallbacks: initialFallbacks.length > 0 ? initialFallbacks : [`/images/projects/${prefix}-1.svg`],
  };
}

/**
 * React hook that auto-detects and returns all available images for a project.
 * Starts with initial project images, then seamlessly updates when auto-detected images finish probing.
 */
export function useProjectMedia(project: Project | null) {
  const [images, setImages] = useState<string[]>(project ? project.images : []);
  const [fallbacks, setFallbacks] = useState<string[]>(project ? project.fallbackImages : []);
  const [isDetecting, setIsDetecting] = useState<boolean>(true);

  useEffect(() => {
    if (!project) {
      setImages([]);
      setFallbacks([]);
      setIsDetecting(false);
      return;
    }

    let isMounted = true;
    setIsDetecting(true);
    setImages(project.images);
    setFallbacks(project.fallbackImages);

    detectProjectImages(project.id, project.images, project.fallbackImages).then((result) => {
      if (isMounted) {
        if (result.images.length > 0) {
          setImages(result.images);
          setFallbacks(result.fallbacks);
        }
        setIsDetecting(false);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [project?.id]);

  return { images, fallbacks, isDetecting };
}
