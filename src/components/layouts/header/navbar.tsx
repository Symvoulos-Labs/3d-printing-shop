'use client';

import * as React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Menu, ShoppingCart, User } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

const NavigationLinks: { title: string; href: string; description: string }[] =
  [
    {
      title: '3D Printing',
      href: '/services/3d-printing',
      description: '3D printing services for custom designs and prototypes.',
    },
    {
      title: '3D Modeling',
      href: '/services/3d-modeling',
      description:
        '3D modeling services for creating detailed and accurate designs.',
    },
  ];

export function Navbar() {
  // Simulated auth state (replace with real logic)
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white dark:bg-gray-950 shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          MySite
        </Link>

        {/* Desktop Nav */}
        <NavigationMenu className="hidden md:flex gap-6 items-center">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/docs" passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/docs" passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Products
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {NavigationLinks.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/docs" passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Gallery
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/docs" passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/docs" passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          {/* Cart Icon */}
          <Link href="/cart">
            <ShoppingCart className="w-5 h-5" />
          </Link>

          {/* Auth / User */}
          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="h-8 w-8 cursor-pointer">
                  <AvatarImage src="/avatar.png" alt="User" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href="/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setIsAuthenticated(false)}>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Link href="/login">
                <Button variant="ghost">Login</Button>
              </Link>
              <Link href="/signup">
                <Button>Sign Up</Button>
              </Link>
            </>
          )}

          {/* Mobile Menu Button */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" xIconSize="size-6">
              <div className="flex flex-col gap-4 px-7 py-5">
                <Link href="/products" className="font-semibold text-lg">
                  Home
                </Link>
                <Link href="/gallery" className="font-semibold text-lg">
                  Products
                </Link>

                {/* Services Dropdown for Mobile (static links) */}
                <div className="flex flex-col gap-3">
                  <span className="font-semibold text-lg">Services</span>
                  {NavigationLinks.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      className="pl-4 text-lg text-muted-foreground"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>

                <Link href="/about" className="font-semibold text-lg">
                  About Us
                </Link>
                <Link href="/contact" className="font-semibold text-lg">
                  Contact Us
                </Link>

                <div className="border-t pt-4 mt-4 flex flex-col gap-2">
                  {isAuthenticated ? (
                    <>
                      <Link href="/profile">Profile</Link>
                      <Button
                        variant="ghost"
                        onClick={() => setIsAuthenticated(false)}
                      >
                        Logout
                      </Button>
                    </>
                  ) : (
                    <>
                      <Link href="/login">
                        <Button variant="ghost">Login</Button>
                      </Link>
                      <Link href="/signup">
                        <Button>Sign Up</Button>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
