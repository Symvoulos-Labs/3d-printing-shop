import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Authentication | 3D Print Service',
  description: 'Login or register to access your 3D printing account',
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
