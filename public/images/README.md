# Asset & Photo Replacement Directory

This directory is structured to make asset replacement effortless. All paths in the portfolio are pre-wired. Simply drop your real photos and screenshots here with the matching filenames:

## 1. Profile Photo
- **File:** `public/images/profile-febri.jpg` (or `.png` / `.webp`)
- **Recommended Ratio:** 1:1 square (e.g., 800x800 or 1000x1000)
- **Fallback:** `profile-febri.svg` (active until a `.jpg` is dropped in)

## 2. Project Screenshots (`public/images/projects/`)
All project thumbnails and case-study modal galleries automatically load from this folder:

| Project | File 1 (Thumbnail & Slide 1) | File 2 (Slide 2) |
|---|---|---|
| **Warehouse Management System (WMS - PT. KIA)** | `wms-kia-1.jpg` | `wms-kia-2.jpg` |
| **Corporate Financial System (PT. MBB)** | `mbb-finance-1.jpg` | `mbb-finance-2.jpg` |
| **Presensi - School Attendance Web App** | `presensi-1.jpg` | `presensi-2.jpg` |
| **KantO - Digital School Canteen** | `kanto-1.jpg` | — |
| **Batik Sweety - Cultural Heritage App** | `batik-sweety-1.jpg` | — |
| **Laundry Management System** | `laundry-1.jpg` | — |
| **Equipment Borrowing System** | `borrowing-1.jpg` | — |

- **Recommended Aspect Ratio:** 16:9 (e.g., 1920x1080 or 1280x720)
- **Automatic Fallback:** If any `.jpg` file is missing, the application automatically falls back to the high-craft SVG graphic (`.svg`) without breaking the layout or displaying broken image icons.

## 3. Certificates & Credentials (`public/images/certificates/`)
Certificate thumbnails and high-resolution lightbox views load from this folder:

| Certificate | Primary Image | Fallback File |
|---|---|---|
| **Software Engineering Competency Certification** | `cert-ukk-rpl.jpg` | `cert-ukk-rpl.svg` |

- **Recommended Aspect Ratio:** 4:3 (e.g., 1600x1200 or 1200x900)
- **Automatic Fallback:** If `cert-ukk-rpl.jpg` is not added yet, the site gracefully displays the built-in SVG credential preview and enables full-screen lightbox inspection.
