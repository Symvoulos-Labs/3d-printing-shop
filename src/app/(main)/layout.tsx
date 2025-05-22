import { Metadata } from 'next';
import { Navbar } from '@/components/layouts/header/navbar'; // Adjust path if necessary
import Footer from '@/components/layouts/footer/footer'; // Adjust path if necessary

export const metadata: Metadata = {
  title: '3D Print Service | Custom 3D Printing Solutions',
  description:
    'Your one-stop shop for high-quality 3D printing services, custom models, and 3D design solutions',
  keywords: '3d printing, custom models, 3d design, rapid prototyping',
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {/* It's good practice to wrap page content in <main> */}
      <main>{children}</main> <Footer />
    </>
  );
}
