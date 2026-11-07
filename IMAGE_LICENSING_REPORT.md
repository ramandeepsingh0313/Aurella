# AURELLE visual-asset licensing report

Audit updated: 2026-11-07

## Decision standard

An asset is **VERIFIED** only when documentary evidence identifies its source or author and explicitly permits the intended commercial redistribution. An asset is **UNVERIFIED** when that evidence is absent. An asset is **RESTRICTED** only when known terms prohibit the intended use. Possession, public availability, prior Git commits, or an assumed AI origin do not establish redistribution rights.

## Current distributable visual assets

| Asset | Source / author | License and evidence | Status | Runtime use |
| --- | --- | --- | --- | --- |
| `assets/icon-account.svg` | Shopify Skeleton Theme / Shopify Inc. | Introduced with the unmodified Skeleton baseline; repository `LICENSE.md` permits use and distribution through the Shopify Theme Store when its notice is retained. | **VERIFIED for Theme Store use** | Header account action. |
| `assets/icon-cart.svg` | Shopify Skeleton Theme / Shopify Inc. | Same Skeleton baseline and repository license evidence. | **VERIFIED for Theme Store use** | Header cart action. |
| `assets/shoppy-x-ray.svg` | Shopify Skeleton Theme / Shopify Inc. | Same Skeleton baseline and repository license evidence. | **VERIFIED for Theme Store use** | Skeleton README and optional `hello-world` section. |
| CSS arrow in `sections/aurelle-categories.liquid` | Authored in the AURELLE source on 2026-11-07 | Simple CSS borders and pseudo-elements authored as part of this remediation; no third-party asset incorporated. | **VERIFIED as project-authored source** | Category cards and “view all” link. |

No bundled raster photograph is required by current runtime code. Merchant imagery is supplied through Shopify `image_picker`, collection images, and product media. Neutral CSS placeholders preserve layouts when imagery is absent.

## Removed from Git tracking and future theme packages

These committed visual assets have no source URL, identified creator, receipt, generation record, license, attribution record, or written redistribution permission. Runtime references were removed before the files were removed from tracking. Local copies are retained and quarantined through `.gitignore`.

| Asset | Prior Git blob | Evidence | Status | Required action |
| --- | --- | --- | --- | --- |
| `assets/aurelle-category-bangles.jpg` | `be1f80874b77337853dd98c8dd55c3cc4984fe4f` | No provenance or redistribution grant found. | **UNVERIFIED** | Obtain written redistribution permission or keep out of every release. |
| `assets/aurelle-category-bridal.jpg` | `f5aaaa72ea517830b1cb1ea80b4a6bdf8d015e16` | No evidence for the committed blob. A later local replacement came from an archive with no license documents. | **UNVERIFIED** | Same. |
| `assets/aurelle-category-earrings.jpg` | `59d167767c671986d2fca76e63edd08f0604bbe5` | No provenance or redistribution grant found. | **UNVERIFIED** | Same. |
| `assets/aurelle-category-necklaces.jpg` | `59aab841f9b8ff88350549077a68585032911196` | No evidence for the committed blob. A later local replacement came from an archive with no license documents. | **UNVERIFIED** | Same. |
| `assets/aurelle-category-rings.jpg` | `5abcf9d8a92c9a5fbabd19f15bb1f9666b6fdbb2` | No provenance or redistribution grant found. | **UNVERIFIED** | Same. |
| `assets/aurelle-hero-detail.jpeg` | `fcca71bc89e5541236430776d04b6ef37d2c2e68` | No provenance or redistribution grant found. | **UNVERIFIED** | Same. |
| `assets/aurelle-hero-main.jpeg` | `3ab8b1abab8f94f0f085ead21ca53230f46dd3e2` | No provenance or redistribution grant found. | **UNVERIFIED** | Same. |
| `assets/aurelle-arrow-right.svg` | `777751c3e740c5ab387293b4e6840cc3da3a6616` | No documentary authorship record was available. Its runtime use was replaced with newly authored CSS. | **UNVERIFIED** | Keep out of releases unless authorship is documented. |

## Unverified local photographs retained outside Git

The following 18 local photographs remain untouched. The two source archives previously inspected contain no license, credit, source, terms, or attribution documents. All remain **UNVERIFIED**, ignored by Git, and excluded from the distributable theme:

- `assets/aurelle-category-bridal.jpg` (local modified replacement)
- `assets/aurelle-category-necklaces.jpg` (local modified replacement)
- `assets/aurelle-craftsmanship.jpg`
- `assets/aurelle-featured-diamonds.jpg`
- `assets/aurelle-featured-gold.jpg`
- `assets/aurelle-occasion-bridal.jpg`
- `assets/aurelle-occasion-everyday.jpg`
- `assets/aurelle-occasion-gala.jpg`
- `assets/aurelle-occasion-milestones.jpg`
- `assets/atelier-workshop.jpg`
- `assets/diamond-stud-earrings.jpg`
- `assets/etoile-ring-angle.jpg`
- `assets/etoile-ring-detail.jpg`
- `assets/etoile-ring-front.jpg`
- `assets/pave-bangle.jpg`
- `assets/ring-lifestyle-hand.jpg`
- `assets/sculptural-ear-cuff.jpg`
- `assets/tennis-necklace.jpg`

## Git-history exposure

Removing an asset from the current index prevents it from entering future theme archives after the deletion is committed, but does not erase earlier Git objects. The seven photographs and prior arrow SVG remain reachable in existing repository history. If this repository is or was public, they may remain publicly retrievable. A history rewrite is not part of this remediation and should be considered separately only after legal review, backups, and coordination with every clone and deployment consumer.

## Marketing, trademark, and branding checks

- Default press names and logos were replaced with neutral editable placeholders. Merchants must enable the press section only after confirming the mention and permission to use each name or logo.
- Default RJC, GIA, recycled-gold, conflict-free, Place Vendôme/Paris manufacturing, worldwide insured-delivery, complimentary-service, and lifetime-care claims were removed or neutralized. Merchants remain responsible for substantiating any claims they add.
- Default testimonials were replaced with neutral placeholders and the section remains disabled until genuine, authorized reviews are supplied.
- The AURELLE name and wordmark still require independent trademark clearance before commercial release.
- No custom font files are bundled. Shopify-hosted font settings and local system fallbacks do not redistribute font binaries.
- Swiper 12.0.3 is distributed under its included MIT license notice in `assets/swiper-12.0.3.LICENSE.txt`; retain that notice.

## Evidence required to clear an unverified asset

Retain a dated source page, purchase record, generation record, or signed agreement identifying the creator or rightsholder and explicitly granting commercial use, modification, and redistribution inside a downloadable or resold theme. Permission limited to a single storefront is insufficient for Shopify Theme Store redistribution.
