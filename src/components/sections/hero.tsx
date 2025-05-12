'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="relative w-full py-16 md:py-32 overflow-hidden">
      {/* Modern Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-slate-50 via-background to-background dark:from-slate-900/20 dark:via-background/80 dark:to-background"></div>
        <div className="absolute top-0 right-0 h-96 w-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 h-64 w-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Subtle Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.015]"></div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center px-4 py-1.5 mb-5 bg-primary/10 text-primary text-sm font-medium rounded-full">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Advanced Manufacturing Technology
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
              <span className="text-foreground">Bring Your </span>
              <span className="relative inline-block">
                <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
                  Ideas to Life
                </span>
                <span className="absolute -bottom-1.5 left-0 right-0 h-3 bg-primary/10 rounded-md -rotate-1"></span>
              </span>
            </h1>

            <p className="max-w-2xl mx-auto text-muted-foreground text-lg mb-8">
              Professional 3D printing solutions with premium materials and
              precision engineering. From prototypes to production runs, we
              deliver excellence in every layer.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Side: CTA and Stats */}
            <div className="space-y-10">
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="h-14 px-8 rounded-xl shadow-lg shadow-primary/20 bg-primary hover:bg-primary/90 transition-all duration-300"
                >
                  <span className="flex items-center">
                    Get Started
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-14 px-8 rounded-xl border-primary/20 hover:bg-primary/5"
                >
                  <span className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                    Watch Demo
                  </span>
                </Button>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-3 gap-6">
                {/* Stat 1 */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800/50 rounded-3xl rotate-3 transition-transform group-hover:rotate-1 duration-300"></div>
                  <div className="relative bg-white dark:bg-gray-800 p-6 rounded-3xl border border-border shadow-sm h-full flex flex-col items-center justify-center text-center">
                    <span className="text-3xl font-bold text-primary">99%</span>
                    <span className="text-sm text-muted-foreground mt-2">
                      Satisfaction
                    </span>
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800/50 rounded-3xl -rotate-2 transition-transform group-hover:rotate-0 duration-300"></div>
                  <div className="relative bg-white dark:bg-gray-800 p-6 rounded-3xl border border-border shadow-sm h-full flex flex-col items-center justify-center text-center">
                    <span className="text-3xl font-bold text-primary">
                      24/7
                    </span>
                    <span className="text-sm text-muted-foreground mt-2">
                      Production
                    </span>
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800/50 rounded-3xl rotate-1 transition-transform group-hover:-rotate-1 duration-300"></div>
                  <div className="relative bg-white dark:bg-gray-800 p-6 rounded-3xl border border-border shadow-sm h-full flex flex-col items-center justify-center text-center">
                    <span className="text-3xl font-bold text-primary">48h</span>
                    <span className="text-sm text-muted-foreground mt-2">
                      Fast Delivery
                    </span>
                  </div>
                </div>
              </div>

              {/* Testimonials/Clients */}
              <div className="flex flex-col space-y-4">
                <div className="flex items-center">
                  <div className="flex -space-x-3 mr-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="h-10 w-10 rounded-full border-2 border-background overflow-hidden bg-gray-200"
                      >
                        <Image
                          src={`https://i.pravatar.cc/100?img=${i + 10}`}
                          alt="Client"
                          height={40}
                          width={40}
                        />
                      </div>
                    ))}
                    <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs border-2 border-background">
                      +24
                    </div>
                  </div>
                  <div className="text-sm">
                    <div className="text-foreground font-medium">
                      Trusted by companies worldwide
                    </div>
                    <div className="text-muted-foreground">
                      Join our growing customer base
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: 3D Image */}
            <div className="relative h-full">
              {/* 3D Effect Container */}
              <div className="relative aspect-[4/3] w-full perspective-1000">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-500/5 rounded-3xl transform rotate-x-12 rotate-y-6"></div>

                {/* Main Image */}
                <div className="relative h-full w-full transform transition-all duration-500 hover:rotate-y-12 preserve-3d">
                  {/* Card Front */}
                  <div className="absolute inset-0 backface-hidden">
                    <div className="h-full overflow-hidden rounded-3xl border border-border/40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-2xl">
                      <div className="relative h-full">
                        <Image
                          src="https://images.unsplash.com/photo-1651876360196-a8c378bfca7f?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt="3D Printing Technology"
                          fill
                          className="object-cover"
                          priority
                        />

                        {/* Feature Overlays */}
                        <div className="absolute -bottom-6 right-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg border border-border/50 max-w-[200px]">
                          <div className="flex items-center space-x-3">
                            <div className="p-2 bg-primary/10 rounded-full">
                              <svg
                                className="w-5 h-5 text-primary"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
                                />
                              </svg>
                            </div>
                            <div>
                              <div className="text-sm font-medium">
                                3D Precision
                              </div>
                              <div className="text-xs text-muted-foreground">
                                0.01mm accuracy
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="absolute top-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg border border-border/50">
                          <div className="flex items-center space-x-3">
                            <div className="p-2 bg-green-500/10 rounded-full">
                              <svg
                                className="w-5 h-5 text-green-500"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
                                />
                              </svg>
                            </div>
                            <div>
                              <div className="text-sm font-medium">
                                Eco-friendly
                              </div>
                              <div className="text-xs text-muted-foreground">
                                100% recyclable
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
