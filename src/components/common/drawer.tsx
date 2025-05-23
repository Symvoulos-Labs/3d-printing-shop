'use client';

import * as React from 'react';
import {
  Drawer as DrawerPrimitive,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';

interface DrawerProps {
  trigger: React.ReactNode;
  title?: string;
  description?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export function Drawer({
  trigger,
  title,
  description,
  children,
  footer,
}: DrawerProps) {
  return (
    <DrawerPrimitive>
      <DrawerTrigger asChild>{trigger}</DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          {(title || description) && (
            <DrawerHeader>
              {title && <DrawerTitle>{title}</DrawerTitle>}
              {description && (
                <DrawerDescription>{description}</DrawerDescription>
              )}
            </DrawerHeader>
          )}
          <div className="p-4">{children}</div>
          {footer && <DrawerFooter>{footer}</DrawerFooter>}
        </div>
      </DrawerContent>
    </DrawerPrimitive>
  );
}

// Simple wrapper for DrawerClose to make it easier to use
export function DrawerCloseButton({
  children,
  ...props
}: React.ComponentProps<typeof DrawerClose>) {
  return (
    <DrawerClose asChild {...props}>
      {children}
    </DrawerClose>
  );
}
