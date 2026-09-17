import React from 'react';
import PageHeader from '../../components/PageHeader';
import ContactSection from '../../components/ContactSection';
import { serverFetch } from '../../utils/serverApi';

export const metadata = {
  title: "Contact Us | Kids Planet Bhubaneswar",
  description: "Get in touch with Kids Planet play school in Bhubaneswar. Find our phone number, email address, location map, and contact form.",
  keywords: ["Contact Kids Planet", "Play School BBSR Address", "Day Care Phone Number"],
};

export default async function ContactPage() {
  const settingsData = await serverFetch('/settings.php');
  
  return (
    <>
      <PageHeader title="Contact Us" breadcrumbTitle="Contact" bgImage="/photo-gallery-webp/7.webp" />
      <ContactSection contactSettings={settingsData?.settings || {}} />
    </>
  );
}
