import React from 'react';
import PageHeader from '../../components/PageHeader';
import BlogGrid from '../../components/BlogGrid';
import { serverFetch } from '../../utils/serverApi';

export const metadata = {
  title: "Blog | Kids Planet Bhubaneswar",
  description: "Read the latest news and blog posts from Kids Planet. Discover tips for early childhood education, play school activities, and parenting.",
  keywords: ["Kids Planet Blog", "Parenting Tips", "Play School News BBSR"],
};

export default async function BlogPage() {
  const newsData = await serverFetch('/blog.php');
  
  return (
    <>
      <PageHeader title="Blog" breadcrumbTitle="Blog" bgImage="/photo-gallery-webp/5.webp" />
      <BlogGrid posts={newsData?.posts || []} />
    </>
  );
}
