import React from 'react';
import PageHeader from '../../components/PageHeader';
import GalleryGrid from '../../components/GalleryGrid';
import { serverFetch } from '../../utils/serverApi';

export const metadata = {
  title: "Photo Gallery | Kids Planet Bhubaneswar",
  description: "Browse our photo gallery to see the vibrant, fun, and educational activities at Kids Planet play school in Bhubaneswar.",
  keywords: ["Kids Planet Gallery", "Play School Photos", "Day Care Images BBSR"],
};

export default async function GalleryPage() {
  const galleryData = await serverFetch('/gallery.php');
  return (
    <>
      <PageHeader title="Gallery" breadcrumbTitle="Gallery" bgImage="/photo-gallery-webp/6.webp" />
      <GalleryGrid images={galleryData?.images || []} settings={galleryData?.settings || null} />
    </>
  );
}
