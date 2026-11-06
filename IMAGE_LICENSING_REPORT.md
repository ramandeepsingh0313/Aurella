# AURELLE image licensing report

Audit date: 2026-11-06

## Decision standard

An image is safe for a commercial Shopify Theme Store release only when its source, creator, applicable license, and commercial redistribution rights are supported by documentary evidence. A local ZIP filename, file metadata, or possession of an image does not establish redistribution rights.

## Findings

The two local source archives were inspected for filenames containing `license`, `licence`, `readme`, `credit`, `attribution`, `copyright`, `source`, or `terms`. Neither archive contains such documentation. Repository searches also found no creator attribution or licensing evidence for these photographs. Consequently, every added or modified photograph below is marked **UNVERIFIED** and must not be staged or committed until adequate rights evidence is obtained.

| Filename | Repository state / usage | Source | Creator | Applicable license | Commercial redistribution rights | Evidence |
| --- | --- | --- | --- | --- | --- | --- |
| `assets/aurelle-category-bridal.jpg` | Modified tracked; runtime dependency removed | Local archive `html___body_images_2026-11-06.zip` | Unknown | Not documented | **UNVERIFIED** | Windows download-zone metadata points to the local archive; archive has no licensing or attribution document. |
| `assets/aurelle-category-necklaces.jpg` | Modified tracked; runtime dependency removed | Local archive `html___body_images_2026-11-06.zip` | Unknown | Not documented | **UNVERIFIED** | Windows download-zone metadata points to the local archive; archive has no licensing or attribution document. |
| `assets/aurelle-craftsmanship.jpg` | Added; runtime dependency removed | Local archive `html___body_images_2026-11-06.zip` | Unknown | Not documented | **UNVERIFIED** | Windows download-zone metadata points to the local archive; archive has no licensing or attribution document. |
| `assets/aurelle-featured-diamonds.jpg` | Added; runtime dependency removed | Local archive `html___body_images_2026-11-06.zip` | Unknown | Not documented | **UNVERIFIED** | Windows download-zone metadata points to the local archive; archive has no licensing or attribution document. |
| `assets/aurelle-featured-gold.jpg` | Added; runtime dependency removed | Local archive `html___body_images_2026-11-06.zip` | Unknown | Not documented | **UNVERIFIED** | Windows download-zone metadata points to the local archive; archive has no licensing or attribution document. |
| `assets/aurelle-occasion-bridal.jpg` | Added; runtime dependency removed | Local archive `html___body_images_2026-11-06.zip` | Unknown | Not documented | **UNVERIFIED** | Windows download-zone metadata points to the local archive; archive has no licensing or attribution document. |
| `assets/aurelle-occasion-everyday.jpg` | Added; runtime dependency removed | Local archive `html___body_images_2026-11-06.zip` | Unknown | Not documented | **UNVERIFIED** | Windows download-zone metadata points to the local archive; archive has no licensing or attribution document. |
| `assets/aurelle-occasion-gala.jpg` | Added; runtime dependency removed | Local archive `html___body_images_2026-11-06.zip` | Unknown | Not documented | **UNVERIFIED** | Windows download-zone metadata points to the local archive; archive has no licensing or attribution document. |
| `assets/aurelle-occasion-milestones.jpg` | Added; runtime dependency removed | Local archive `html___body_images_2026-11-06.zip` | Unknown | Not documented | **UNVERIFIED** | Windows download-zone metadata points to the local archive; archive has no licensing or attribution document. |
| `assets/atelier-workshop.jpg` | Added; unreferenced | Local archive `aur_le____toile_product_detail_images_2026-11-05.zip` | Unknown | Not documented | **UNVERIFIED** | Windows download-zone metadata points to the local archive; archive has no licensing or attribution document. |
| `assets/diamond-stud-earrings.jpg` | Added; unreferenced | Local archive `aur_le____toile_product_detail_images_2026-11-05.zip` | Unknown | Not documented | **UNVERIFIED** | Windows download-zone metadata points to the local archive; archive has no licensing or attribution document. |
| `assets/etoile-ring-angle.jpg` | Added; unreferenced | Local archive `aur_le____toile_product_detail_images_2026-11-05.zip` | Unknown | Not documented | **UNVERIFIED** | Windows download-zone metadata points to the local archive; archive has no licensing or attribution document. |
| `assets/etoile-ring-detail.jpg` | Added; unreferenced | Local archive `aur_le____toile_product_detail_images_2026-11-05.zip` | Unknown | Not documented | **UNVERIFIED** | Windows download-zone metadata points to the local archive; archive has no licensing or attribution document. |
| `assets/etoile-ring-front.jpg` | Added; unreferenced | Local archive `aur_le____toile_product_detail_images_2026-11-05.zip` | Unknown | Not documented | **UNVERIFIED** | Windows download-zone metadata points to the local archive; archive has no licensing or attribution document. |
| `assets/pave-bangle.jpg` | Added; unreferenced | Local archive `aur_le____toile_product_detail_images_2026-11-05.zip` | Unknown | Not documented | **UNVERIFIED** | Windows download-zone metadata points to the local archive; archive has no licensing or attribution document. |
| `assets/ring-lifestyle-hand.jpg` | Added; unreferenced | Local archive `aur_le____toile_product_detail_images_2026-11-05.zip` | Unknown | Not documented | **UNVERIFIED** | Windows download-zone metadata points to the local archive; archive has no licensing or attribution document. |
| `assets/sculptural-ear-cuff.jpg` | Added; unreferenced | Local archive `aur_le____toile_product_detail_images_2026-11-05.zip` | Unknown | Not documented | **UNVERIFIED** | Windows download-zone metadata points to the local archive; archive has no licensing or attribution document. |
| `assets/tennis-necklace.jpg` | Added; unreferenced | Local archive `aur_le____toile_product_detail_images_2026-11-05.zip` | Unknown | Not documented | **UNVERIFIED** | Windows download-zone metadata points to the local archive; archive has no licensing or attribution document. |

## Commit and preview impact

- All 18 photographs can remain local and unstaged without affecting current Liquid references.
- The two modified tracked category images must remain unstaged; the newly modified files are still unverified even though their runtime dependencies have been removed.
- On 2026-11-06, hard asset fallbacks were replaced with merchant-controlled `image_picker` settings, Shopify collection/product media where appropriate, and neutral CSS placeholders.
- A repository-wide filename scan found no remaining Liquid, JSON template, snippet, CSS, or JavaScript references to these 18 files outside this report.

## Evidence required to clear an image

Retain a dated copy of the original source page or agreement identifying the creator/rightsholder and explicitly granting commercial use, modification, and redistribution within a downloadable theme. A general statement permitting use on one storefront is not sufficient for redistribution through the Shopify Theme Store.
