import HeroSlider from '../components/HeroSlider';
import EventsNotices from '../components/EventsNotices';
import AboutUs from '../components/AboutUs';
import StatsCounter from '../components/StatsCounter';
import CoreValues from '../components/CoreValues';
import PopularClasses from '../components/PopularClasses';
import Gallery from '../components/Gallery';
import AgeGroups from '../components/AgeGroups';
import Testimonials from '../components/Testimonials';
import SlidingText from '../components/SlidingText';
import AdmissionProcess from '../components/AdmissionProcess';
import LatestNews from '../components/LatestNews';
import LeadForm from '../components/LeadForm';
import { serverFetch } from '../utils/serverApi';

export default async function Home() {
  const [
    bannerData, eventsData, aboutData, statsData, 
    valuesData, classesData, galleryData, testimonialsData, newsData
  ] = await Promise.all([
    serverFetch('/banner.php'),
    serverFetch('/events.php?type=notices'),
    serverFetch('/who_we_are.php'),
    serverFetch('/fun_facts.php'),
    serverFetch('/choose_us.php'),
    serverFetch('/classes.php'),
    serverFetch('/gallery.php'),
    serverFetch('/testimonials.php'),
    serverFetch('/blog.php?limit=3')
  ]);

  return (
    <>
      <HeroSlider slides={bannerData?.slides?.filter(s => s.enabled) || []} />
      <EventsNotices notices={eventsData?.notices || []} />
      <AboutUs content={aboutData?.content || {}} />
      <StatsCounter facts={statsData?.facts || []} settings={statsData?.settings || null} />
      <CoreValues features={valuesData?.features || []} settings={valuesData?.settings || null} />
      <PopularClasses classes={classesData?.classes || []} settings={classesData?.settings || null} />
      <Gallery photos={galleryData?.images?.slice(0, 6) || []} settings={galleryData?.settings || null} />
      <AgeGroups />
      <Testimonials testimonials={testimonialsData?.testimonials || []} settings={testimonialsData?.settings || null} />
      <SlidingText />
      <AdmissionProcess />
      <LatestNews posts={newsData?.posts || []} />
      <LeadForm />
    </>
  );
}
