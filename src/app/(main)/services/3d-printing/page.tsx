import Banner from '@/components/sections/banner';
import UploadForm from '@/components/sections/uploadForm';
import ModelingProcessSteps from '@/components/sections/modelingProcessSteps';
import WhyChooseUsModeling from '@/components/sections/whyChooseUsModeling';
import SectionContainer from '@/components/common/sectionContainer';
import Heading from '@/components/common/heading';
import { Check } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Gallery from '@/components/sections/gallary';
import Reviews from '@/components/sections/reviews';
import FaQ from '@/components/sections/faq';

const breadcrumbs = [
  { label: 'Services / 3D Printing', href: '/services/3d-printing' },
];

const features = [
  '3D Printing Services',
  'Multiple Materials',
  'Custom Part Production',
  'Rapid Prototyping',
  'Quality Guaranteed',
  'Fast Turnaround',
];

export default function ThreeD_PrintingPage() {
  return (
    <>
      {/* Banner Section */}
      <Banner
        title="3D Printing"
        breadcrumbs={breadcrumbs}
        image="https://plus.unsplash.com/premium_photo-1714978603309-0c55e9f75a5c?q=80&w=1828&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="3D Printing Services Banner"
      />

      {/* Service Description */}
      <SectionContainer>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative order-1 lg:order-0">
            <Card className="border border-zinc-100 rounded-3xl overflow-hidden shadow-lg relative h-[400px] lg:h-[500px]">
              <CardContent className="p-0 ">
                <Image
                  src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?q=80&w=1000&auto=format&fit=crop"
                  alt="3D Modeling Service"
                  fill
                  className="object-cover"
                />
              </CardContent>
            </Card>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-blue-500 text-white px-6 py-4 rounded-2xl shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm opacity-90">Models Printed</div>
              </div>
            </div>
          </div>
          {/* Content Side */}
          <div className="space-y-6">
            <Heading
              pillText="3D Printing Service"
              title="Professional"
              titleBold="3D Printing Solutions"
              description="This page showcases our 3D modeling services, including custom designs, prototyping, and more. Whether you need a detailed model for visualization or a prototype for testing, we have the expertise to bring your ideas to life."
              className="items-start text-left"
            />

            <p className="text-muted-foreground text-base leading-relaxed">
              Contact us to learn more about how we can assist with your 3D
              modeling needs. Our team of experienced designers and engineers
              will work with you to create precise, high-quality models that
              meet your specifications.
            </p>

            {/* Features Grid */}
            <div className="flex flex-wrap gap-4 pt-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full"
                >
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                    <Check
                      width={14}
                      height={14}
                      className="text-blue-600"
                      strokeWidth={3}
                    />
                  </div>
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionContainer>
      {/* Upload Form  */}
      <UploadForm />
      <ModelingProcessSteps />
      <WhyChooseUsModeling />
      <Gallery />
      <Reviews />
      <FaQ />
    </>
  );
}
