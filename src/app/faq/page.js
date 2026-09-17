import React from 'react';
import PageHeader from '../../components/PageHeader';
import FaqSection from '../../components/FaqSection';
import { serverFetch } from '../../utils/serverApi';

export const metadata = {
  title: "Frequently Asked Questions | Kids Planet Bhubaneswar",
  description: "Find answers to common questions about Kids Planet play school, our programs, curriculum, and admissions process.",
  keywords: ["Kids Planet FAQ", "Play School Questions", "Day Care Information BBSR"],
};

export default async function FaqPage() {
  const faqData = await serverFetch('/faq.php');
  return (
    <>
      <PageHeader title="FAQ" breadcrumbTitle="FAQ" bgImage="/assets-images/backgrounds/page-header-bg-1-1.jpg" />
      <FaqSection items={faqData?.items || []} settings={faqData?.settings || null} ctaSettings={faqData?.cta_settings || null} />
    </>
  );
}
