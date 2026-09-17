USE kidsplanet_cms;
UPDATE banner_slides SET image_url = REPLACE(image_url, 'http://localhost/my-project/kptschhol/backend-cms/', 'http://localhost/backend-cms/');
UPDATE classes SET image_url = REPLACE(image_url, 'http://localhost/my-project/kptschhol/backend-cms/', 'http://localhost/backend-cms/');
UPDATE gallery_images SET image_url = REPLACE(image_url, 'http://localhost/my-project/kptschhol/backend-cms/', 'http://localhost/backend-cms/');
UPDATE testimonials_items SET image_url = REPLACE(image_url, 'http://localhost/my-project/kptschhol/backend-cms/', 'http://localhost/backend-cms/');
UPDATE who_we_are SET image_url = REPLACE(image_url, 'http://localhost/my-project/kptschhol/backend-cms/', 'http://localhost/backend-cms/');
UPDATE choose_us_settings SET main_image_url = REPLACE(main_image_url, 'http://localhost/my-project/kptschhol/backend-cms/', 'http://localhost/backend-cms/');
UPDATE events SET url = REPLACE(url, 'http://localhost/my-project/kptschhol/backend-cms/', 'http://localhost/backend-cms/');
