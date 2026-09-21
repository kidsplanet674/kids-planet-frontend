# Photo albums

Edit `gallery-albums.json` to add an album or photograph. Each photo entry contains its source filename without `.webp` and a descriptive caption. Add source WebP photos in `assets/images/`.

Run `node scripts/build-gallery.mjs .` from the repository root. It copies album photos into `assets/images/gallery/<album>/`, rebuilds the gallery and album HTML pages, and adds new album URLs to the production sitemap. Commit the generated pages, photos, sitemap and manifest together.

The Pages workflow publishes these generated pages with demo-only noindex metadata. Hostinger uses the original HTML pages with normal indexing. All gallery links and text work without JavaScript. Select any thumbnail to open its original image; browser Back returns to the album.
