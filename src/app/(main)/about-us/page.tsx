import {
  Banner,
  TeamSection,
  ContactCTA,
  Reviews,
  FaQ,
  AboutIntro,
  OurStory,
  CoreValues,
  CompanyStats,
  WhyChooseUsModeling,
} from '@/components/sections';

const breadcrumbs = [{ label: 'Home / About Us', href: '/about-us' }];

export default function AboutUsPage() {
  return (
    <>
      <Banner
        title="About Our Company"
        breadcrumbs={breadcrumbs}
        image="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="3D Printing Technology"
      />
      <AboutIntro />
      <OurStory />
      <CoreValues />
      <CompanyStats />
      <TeamSection />
      <WhyChooseUsModeling />
      <Reviews />
      <FaQ />
      <ContactCTA />
    </>
  );
}
