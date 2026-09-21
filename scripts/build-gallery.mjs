import fs from 'node:fs';
import path from 'node:path';
const root = path.resolve(process.argv[2] || 'site');
const albums = JSON.parse(fs.readFileSync('gallery-albums.json', 'utf8'));
const template = fs.readFileSync(path.join(root, 'gallery.html'), 'utf8');
const esc = s => s.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');
const imagePath = (album, id) => `assets/images/gallery/${album.slug}/${id}.webp`;
function page(title, description, filename, main) {
  const url = `https://www.kidsplanetbbsr.in/${filename}`;
  return template.replace(/<title>.*?<\/title>/, `<title>${esc(title)} | Kids Planet Old Town</title>`)
    .replace(/(<meta name="description" content=")[^"]*/, `$1${esc(description)}`)
    .replace(/(<link rel="canonical" href=")[^"]*/, `$1${url}`)
    .replace(/(<meta property="og:title" content=")[^"]*/, `$1${esc(title)} | Kids Planet Old Town`)
    .replace(/(<meta property="og:description" content=")[^"]*/, `$1${esc(description)}`)
    .replace(/(<meta property="og:url" content=")[^"]*/, `$1${url}`)
    .replace(/<main id="main">[\s\S]*?<\/main>/, `<main id="main">${main}</main>`);
}
const banner = title => `<section class="tp-breadcrumb-area tp-breadcrumb-bg p-relative"><div class="container"><h1 class="tp-breadcrumb-title text-center">${esc(title)}</h1><p class="text-center"><a href="gallery.html">Gallery</a></p></div></section>`;
for (const album of albums) {
  fs.mkdirSync(path.join(root, 'assets/images/gallery', album.slug), {recursive:true});
  for (const [id] of album.photos) fs.copyFileSync(path.join(root, `assets/images/${id}.webp`), path.join(root, imagePath(album,id)));
  const photos = album.photos.map(([id, caption]) => `<div class="col-lg-4 col-md-6"><figure class="tp-gallery-thumb mb-30"><a href="${imagePath(album,id)}" class="kp-gallery-link" aria-label="View photo: ${esc(caption)}"><img src="${imagePath(album,id)}" alt="${esc(caption)}" loading="lazy" decoding="async" width="1200" height="900"></a><figcaption class="mt-15">${esc(caption)}</figcaption></figure></div>`).join('');
  const main = banner(album.title)+`<section class="pt-100 pb-70"><div class="container"><div class="kp-album-intro">${album.paragraphs.map(p=>`<p>${esc(p)}</p>`).join('')}<p><a href="contact.html">Enquire about Kids Planet</a> · <a href="daycare-facility.html">Explore daycare facilities</a></p></div><p>${album.photos.length} photographs · Select a photo to view it full size.</p><div class="row">${photos}</div><a class="tp-btn" href="gallery.html">Back to all albums</a></div></section>`;
  fs.writeFileSync(path.join(root,`${album.slug}.html`),page(album.title,album.description,`${album.slug}.html`,main));
}
const cards = albums.map(a=>`<div class="col-lg-4 col-md-6"><article class="kp-album-card"><a href="${a.slug}.html"><img src="${imagePath(a,a.photos[0][0])}" alt="${esc(a.photos[0][1])}" width="1200" height="900" loading="lazy"><div><p>${a.photos.length} photographs</p><h2>${esc(a.title)}</h2><span>View album &rarr;</span></div></a></article></div>`).join('');
fs.writeFileSync(path.join(root,'gallery.html'),page('School Photo Albums','Explore outdoor activities, cultural celebrations and classroom photos at Kids Planet Play School & Day Care in Old Town, Bhubaneswar.','gallery.html',banner('Little moments, happy memories')+`<section class="pt-100 pb-70"><div class="container"><div class="tp-section-title-wrap text-center mb-50"><span class="tp-section-subtitle">Life at Kids Planet</span><h2 class="tp-section-title">Explore our photo albums</h2><p>Outdoor adventures, cultural celebrations and everyday learning in Old Town, Bhubaneswar.</p></div><div class="row">${cards}</div></div></section>`));
let sitemap=fs.readFileSync(path.join(root,'sitemap.xml'),'utf8');
for(const a of albums) if(!sitemap.includes(`/${a.slug}.html`)) sitemap=sitemap.replace('</urlset>',`  <url><loc>https://www.kidsplanetbbsr.in/${a.slug}.html</loc></url>\n</urlset>`);
fs.writeFileSync(path.join(root,'sitemap.xml'),sitemap);
console.log(albums.map(a=>`${a.title}: ${a.photos.length} photos, ${a.paragraphs.join(' ').split(/\s+/).length} words`).join('\n'));
