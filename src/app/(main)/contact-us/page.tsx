'use client';

import Banner from '@/components/sections/banner';
import SectionContainer from '@/components/common/sectionContainer';
import Heading from '@/components/common/heading';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Users,
  Award,
  CheckCircle,
} from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import LinkedButton from '@/components/common/linkedButton';
import FaQ from '@/components/sections/faq';

const breadcrumbs = [{ label: 'Home / Contact Us', href: '/contact-us' }];

// Form schema
const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number.' }),
  subject: z
    .string()
    .min(5, { message: 'Subject must be at least 5 characters.' }),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters.' }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

// Contact info data
const contactInfo = [
  {
    icon: <Phone className="w-6 h-6 text-blue-600" />,
    title: 'Call Us',
    primary: '+1 (555) 123-4567',
    secondary: 'Mon-Fri 9AM-6PM EST',
    bgColor: 'bg-blue-50',
  },
  {
    icon: <Mail className="w-6 h-6 text-green-600" />,
    title: 'Email Us',
    primary: 'hello@3dprint.com',
    secondary: '24/7 Support Available',
    bgColor: 'bg-green-50',
  },
  {
    icon: <MapPin className="w-6 h-6 text-purple-600" />,
    title: 'Visit Us',
    primary: '123 Innovation Street',
    secondary: 'Tech City, TC 12345',
    bgColor: 'bg-purple-50',
  },
  {
    icon: <Clock className="w-6 h-6 text-orange-600" />,
    title: 'Business Hours',
    primary: 'Mon-Fri: 9AM-6PM',
    secondary: 'Saturday: 10AM-4PM',
    bgColor: 'bg-orange-50',
  },
];

// Quick stats data
const quickStats = [
  {
    icon: <Users className="w-8 h-8 text-blue-600" />,
    number: '1000+',
    label: 'Happy Customers',
  },
  {
    icon: <Award className="w-8 h-8 text-green-600" />,
    number: '99%',
    label: 'Satisfaction Rate',
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-purple-600" />,
    number: '5000+',
    label: 'Projects Completed',
  },
];

export default function ContactUsPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log('Contact form submitted:', data);
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <>
      {/* Banner Section */}
      <Banner
        title="Contact Us"
        breadcrumbs={breadcrumbs}
        image="https://images.unsplash.com/photo-1740560051533-3acef26ace95?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Contact Us Banner"
      />

      {/* Hero Contact Section */}
      <SectionContainer>
        <Heading
          pillText="Get In Touch"
          title="Let's Bring Your"
          titleBold="Ideas to Life"
          description="Have a 3D printing project in mind? We're here to help you every step of the way. From consultation to delivery, our expert team is ready to assist you."
          className="items-center text-center"
        />

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {quickStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="relative group">
                <div className="relative bg-white dark:bg-gray-800 p-8 rounded-3xl border border-border hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Main Contact Form & Info Section */}
      <SectionContainer sectionClassName="bg-gray-50">
        <Heading
          pillText="Get In Touch"
          title=" Get in Touch"
          titleBold="Ideas to Life"
          description="Have a 3D printing project in mind? We're here to help you every step of the way. From consultation to delivery, our expert team is ready to assist you."
          className="items-center text-center"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div>
            <Card className="border border-zinc-100 rounded-3xl overflow-hidden shadow-lg">
              <CardContent className="p-8">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Send us a Message
                  </h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and we will get back to you within 24
                    hours.
                  </p>
                </div>

                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="John Doe"
                                className="rounded-xl"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="+1 (555) 123-4567"
                                className="rounded-xl"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="name@example.com"
                              type="email"
                              className="rounded-xl"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="3D Printing Project Inquiry"
                              className="rounded-xl"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <textarea
                              placeholder="Tell us about your 3D printing project, requirements, timeline, and any specific details..."
                              rows={6}
                              className="w-full px-4 py-3 border border-input rounded-xl focus:ring-2 focus:ring-ring focus:border-ring resize-none text-sm"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-12 rounded-xl bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending...
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </div>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-1">
            <div className="grid grid-cols-1 gap-3">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="border border-zinc-100 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="px-8 py-2">
                    <div className="flex items-start space-x-4">
                      <div
                        className={`w-12 h-12 rounded-full ${info.bgColor} flex items-center justify-center flex-shrink-0`}
                      >
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {info.title}
                        </h3>
                        <p className="text-gray-900 font-medium">
                          {info.primary}
                        </p>
                        <p className="text-sm text-gray-600 mt-1">
                          {info.secondary}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Location & Map Section */}
      <SectionContainer>
        <div className="text-center mb-12">
          <Heading
            pillText="Visit Our Facility"
            title="Our"
            titleBold="Location"
            description="Come visit our state-of-the-art 3D printing facility and see how we bring ideas to life."
            className="items-center text-center"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map Placeholder */}
          <div className="relative">
            <Card className="border border-zinc-100 rounded-3xl overflow-hidden shadow-lg h-[400px]">
              <CardContent className="p-0 h-full">
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center relative">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Interactive Map
                    </h3>
                    <p className="text-gray-600">
                      Map integration would go here
                    </p>
                  </div>

                  {/* Floating Address Card */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">
                          123 Innovation Street
                        </div>
                        <div className="text-sm text-gray-600">
                          Tech City, TC 12345
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Location Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Visit Our Facility
              </h3>
              <p className="text-muted-foreground text-lg mb-6">
                Our modern facility is equipped with the latest 3D printing
                technology and staffed by experienced professionals ready to
                help with your projects.
              </p>
            </div>

            {/* Facility Features */}
            <div className="space-y-4">
              {[
                'State-of-the-art 3D printing equipment',
                'Material testing and consultation area',
                'Client meeting and collaboration space',
                'Quality assurance laboratory',
                'Free parking available',
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <LinkedButton
                text="Schedule a Visit"
                link="/contact-us"
                className="w-fit"
                icon={<MapPin className="w-4 h-4" />}
              />
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* FAQ Section */}
      <FaQ />
    </>
  );
}
