import React from 'react';
import PageHeader from '../../components/PageHeader';
import PrincipalMessage from '../../components/PrincipalMessage';
import MissionVision from '../../components/MissionVision';
import CoreValues from '../../components/CoreValues';
import StatsCounter from '../../components/StatsCounter';
import AgeGroups from '../../components/AgeGroups';
import { serverFetch } from '../../utils/serverApi';

export const metadata = {
  title: "About Us | Kids Planet Bhubaneswar",
  description: "Learn about Kids Planet, the best play school and day care in Bhubaneswar. Discover our core values, experienced educators, and safe learning environment.",
  keywords: ["About Kids Planet", "Best Play School BBSR", "Core Values", "Experienced Educators", "best creche in old town"],
};

export default async function AboutPage() {
  const [valuesData, statsData] = await Promise.all([
    serverFetch('/choose_us.php'),
    serverFetch('/fun_facts.php')
  ]);
  
  return (
    <>
      <PageHeader title="About" breadcrumbTitle="About" bgImage="/photo-gallery-webp/14.webp" />
      <PrincipalMessage />
      <MissionVision />
      <div style={{ paddingTop: '50px' }}>
        <CoreValues features={valuesData?.features || []} settings={valuesData?.settings || null} />
      </div>
      <StatsCounter facts={statsData?.facts || []} settings={statsData?.settings || null} />
      <div style={{ paddingBottom: '50px' }}>
        <AgeGroups />
      </div>
    </>
  );
}
