import React from 'react';
import PageHeader from '../../components/PageHeader';
import PrivacyPolicyContent from '../../components/PrivacyPolicyContent';
import { serverFetch } from '../../utils/serverApi';

export const metadata = {
  title: "Privacy Policy | Kids Planet Bhubaneswar",
  description: "Read our privacy policy to understand how Kids Planet play school collects, uses, and protects your personal data.",
  keywords: ["Privacy Policy", "Kids Planet Privacy", "Data Protection"],
};

export default async function PrivacyPolicyPage() {
  const privacyData = await serverFetch('/privacy_policy.php');
  return (
    <>
      <PageHeader title="Privacy Policy" breadcrumbTitle="Privacy Policy" bgImage="/assets-images/backgrounds/page-header-bg-1-1.jpg" />
      <PrivacyPolicyContent sections={privacyData?.sections || []} settings={privacyData?.settings || null} />
    </>
  );
}
