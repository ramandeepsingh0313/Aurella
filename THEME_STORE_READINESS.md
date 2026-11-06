# Theme Store readiness

Source: https://shopify.dev/docs/storefronts/themes/store/requirements

Status: **Not ready for Theme Store submission.** This file records verified repository state, not an approval or a legal opinion. Recheck the current Shopify requirements before submitting.

## Implemented in the working tree

- The project started from Shopify Skeleton and uses JSON templates and header/footer section groups.
- `templates/page.contact.json` and `sections/aurelle-contact-form.liquid` provide a contact page template.
- `sections/custom-liquid.liquid` provides a Custom Liquid section on JSON templates.
- `sections/product.liquid` now displays native variant swatches, unit prices, Shop Pay installment terms when available, accelerated checkout, gift card recipient fields, and app and Custom Liquid blocks. Its main content still needs greater block flexibility.
- `sections/cart.liquid` now displays order notes, selling plan names, line item properties, line and cart discounts, and additional checkout buttons.
- `templates/gift_card.liquid` provides a QR code and retains conditional Apple Wallet support.
- `sections/blog.liquid` uses article excerpt or content. `sections/search.liquid` identifies the result type.
- Sample press and testimonial sections are hidden by default. Enable them only after replacing samples with genuine, permitted content.

## Required work before submission

- Replace `config/settings_schema.json` Skeleton identity and placeholder Shopify documentation/support links with the final independent theme name, publisher, version, public documentation and public support contact form. A branded demo store name is not automatically the Theme Store theme name.
- Refactor the main product section so merchants can add, remove, and reorder most product information and controls as blocks. Add a featured-product section with `@app` and Custom Liquid blocks.
- Implement pickup availability and selling plan selection. Test Shop Pay installments, gift card recipient delivery, and every required product/cart state against real store data.
- Audit all sections and interactions for accessibility, keyboard and touch support, localization, and cross-browser behavior. Test desktop and mobile home, collection, product, cart, search, contact, gift card, and password pages.
- Run Lighthouse on populated home, collection, and product pages. Shopify requires average performance at least 60 and accessibility at least 90 on both desktop and mobile. No score has been verified yet.
- Verify rights for every photo, wordmark, font, quote, and other demo asset. Obtain permission for publication names, logos, and testimonials. Replace or remove unverifiable claims such as certifications, sourcing, production location, stock/delivery promises, and customer reviews throughout sections, templates, and the locked global footer before a public demo or submission.
- Configure a complete demo store with authentic products, collections, policies, images, and all required states. Create and publish merchant documentation, FAQ, and a support form. Confirm Theme Store exclusivity and no affiliate or designer-credit links.
- Complete Shopify's full submission checklist: https://shopify.dev/docs/storefronts/themes/store/test-theme/checklist

No store deployment or Theme Store submission is implied by this document.
