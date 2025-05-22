# 3D Print Customer Portal

A modern, feature-rich Next.js application that serves as a customer-facing portal for a 3D printing service. This web application allows customers to browse products, request custom 3D printing services, and manage their orders.

![3D Printing Service](https://images.unsplash.com/photo-1612888262725-6b300edf916c?q=80&w=1742&auto=format&fit=crop)

## 🚀 Features

- **Modern UI/UX** - Built with Next.js 15, React 19, and Tailwind CSS 4
- **Responsive Design** - Works on all device sizes
- **Authentication** - User registration, login, and password recovery
- **Product Browsing** - Browse and filter 3D printed products by category
- **Product Details** - View detailed information and images of products
- **Custom Order Requests** - Request custom 3D printing services
- **Order Management** - Track order status and history
- **User Profile** - Manage personal information and preferences
- **Dark Mode Support** - Toggle between light and dark themes

## 📋 Pages & Components

- **Home Page** - Featuring hero section, product categories, about us, and more
- **Products Catalog** - Browse all available 3D printed products
- **Product Categories** - Browse products by category
- **Product Detail** - View detailed information about specific products
- **Authentication Pages** - Sign in, sign up, and password recovery
- **User Dashboard** - Manage profile, orders, and settings
- **Gallery** - View showcase of 3D printed items
- **About Us** - Information about the company and its services
- **Contact Us** - Get in touch with the company

## 🔧 Technology Stack

- **Frontend Framework**: Next.js 15.3.1
- **React**: v19.0.0
- **Styling**: Tailwind CSS 4
- **UI Components**: Custom components with Radix UI primitives
- **Form Handling**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Carousel**: Embla Carousel
- **TypeScript**: For type safety

## 🛠️ Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/3d-print-customer-side-frontend.git
   cd 3d-print-customer-side-frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```
src/
├── app/               # Next.js app directory
│   ├── (auth)/        # Authentication routes
│   │   ├── layout.tsx
│   │   ├── signin/
│   │   ├── signup/
│   │   └── forgot-password/
│   └── (main)/        # Main application routes
│       ├── layout.tsx
│       └── page.tsx
├── components/        # Reusable components
│   ├── common/        # Common components like buttons, headings
│   ├── layouts/       # Layout components like header and footer
│   ├── product/       # Product-related components
│   ├── sections/      # Page sections like hero, about us
│   └── ui/            # UI components like buttons, cards
└── lib/               # Utility functions and helpers
```

## 🧩 Component Hierarchy

- **Layout Components**

  - Navbar
  - Footer

- **Page Sections**

  - Hero
  - About Us
  - What We Do
  - Payment Steps
  - Why Choose Us
  - Category Carousel
  - Product Grid
  - Gallery
  - Reviews
  - FAQ

- **UI Components**
  - Buttons
  - Cards
  - Carousels
  - Navigation
  - Forms
  - Modals
  - And more...

## 🚢 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

For other deployment options, check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## 🛡️ License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact

If you have any questions or feedback, please reach out to us at [contact@email.com](mailto:contact@email.com).
