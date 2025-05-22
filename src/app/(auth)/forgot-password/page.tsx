'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const formSchema = z.object({
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
});

export default function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsSuccess(true);
      setIsLoading(false);
    }, 1000);
  }

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gray-50/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Reset your password</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            We'll send you instructions to reset your password
          </p>
        </div>

        <Card className="border-0 shadow-lg rounded-3xl">
          <CardHeader className="space-y-1 pb-4">
            <CardTitle className="text-2xl text-center">
              Forgot password
            </CardTitle>
            <CardDescription className="text-center">
              Enter your email address and we'll send you a reset link
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {!isSuccess ? (
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
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
                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 rounded-xl"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <svg
                        className="animate-spin h-5 w-5 mr-3"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    ) : null}
                    Send reset link
                  </Button>
                </form>
              </Form>
            ) : (
              <div className="space-y-4">
                <div className="rounded-xl bg-green-50 p-6 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-green-600"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <h3 className="mt-3 text-lg font-medium text-green-800">
                    Check your email
                  </h3>
                  <p className="mt-1 text-sm text-green-700">
                    We've sent a password reset link to{' '}
                    <span className="font-medium">
                      {form.getValues().email}
                    </span>
                  </p>
                </div>
                <Button
                  variant="outline"
                  className="w-full rounded-xl"
                  onClick={() => setIsSuccess(false)}
                >
                  Try a different email
                </Button>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex flex-col space-y-4 p-6 pt-0">
            <div className="text-sm text-center">
              <Link
                href="/signin"
                className="inline-flex items-center text-blue-600 hover:text-blue-500"
              >
                <ArrowLeft className="mr-1 h-4 w-4" />
                Back to sign in
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
