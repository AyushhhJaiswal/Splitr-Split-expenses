"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FEATURES, STEPS, TESTIMONIALS } from "@/lib/landing";
import BlurText from "./BlurText";
import Threads from "./Threads/Threads";

const IMG_PADDING = 12;

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{ opacity }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      ref={targetRef}
      style={{ y, opacity }}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">{subheading}</p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => (
  <div style={{ paddingLeft: IMG_PADDING, paddingRight: IMG_PADDING }}>
    <div className="relative h-[150vh]">
      <StickyImage imgUrl={imgUrl} />
      <OverlayCopy heading={heading} subheading={subheading} />
    </div>
    {children}
  </div>
);

export default function LandingPage() {
  return (
    <div className="flex flex-col pt-16">
      <div className="absolute inset-0 -z-10 -top-14">
        <Threads amplitude={1} distance={0} enableMouseInteraction />
      </div>

      {/* Hero */}
      <section className="mt-20 pb-12 space-y-10 md:space-y-15 px-5">
        <div className="container mx-auto text-center space-y-6">
          <Badge variant="outline" className="bg-green-100 text-green-700">
            Split expenses. Simplify life.
          </Badge>
          <div className="flex justify-center px-4">
            <h1 className="text-center max-w-6xl">
              <BlurText
                text="The smartest way to split expenses with friends"
                delay={150}
                animateBy="words"
                direction="top"
                className="gradient-title text-emerald-700 text-4xl font-bold md:text-8xl"
              />
            </h1>
          </div>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
            Track shared expenses, split bills effortlessly, and settle up quickly. Never worry about who owes who again.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row justify-center">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <Link href="/dashboard">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-green-600 text-green-600 hover:bg-green-50">
              <Link href="#how-it-works">See How It Works</Link>
            </Button>
          </div>
        </div>

        {/* Hero image */}
        <div className="container mx-auto max-w-5xl overflow-hidden rounded-xl shadow-xl">
          <div className="gradient p-1 aspect-[16/9]">
            <Image
              src="/hero.png"
              width={1280}
              height={720}
              alt="Banner"
              className="rounded-lg mx-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* Parallax Block 1 */}
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop"
        subheading="Effortless Splitting"
        heading="Track and share with ease"
      >
        <div className="mx-auto max-w-5xl px-4 py-12 text-center">
          <p className="text-xl md:text-2xl text-neutral-600">
            Whether it’s dinner, rent, or a road trip—Splitr makes it seamless to keep track and split costs with friends.
          </p>
        </div>
      </TextParallaxContent>

      {/* Features */}
      <section id="features" className="bg-gray-50 py-20">
        <div className="container mx-auto text-center">
          <Badge variant="outline" className="bg-green-100 text-green-700">Features</Badge>
          <h2 className="gradient-title mt-2 text-3xl md:text-4xl">
            Everything you need to split expenses
          </h2>
          <p className="mx-auto mt-3 max-w-[700px] text-gray-500 md:text-xl/relaxed">
            Our platform provides all the tools you need to handle shared expenses with ease.
          </p>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map(({ title, Icon, bg, color, description }) => (
              <Card key={title} className="flex flex-col items-center space-y-4 p-6 text-center  transition-transform transform hover:scale-105">
                <div className={`rounded-full p-3 ${bg}`}>
                  <Icon className={`h-6 w-6 ${color}`} />
                </div>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-gray-500">{description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax Block 2 */}
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?q=80&w=2564&auto=format&fit=crop"
        subheading="Peace of Mind"
        heading="Never forget who paid"
      >
        <div className="mx-auto max-w-5xl px-4 py-12 text-center">
          <p className="text-xl md:text-2xl text-neutral-600">
            Your group expenses stay organized and transparent—so no one’s stuck footing the bill.
          </p>
        </div>
      </TextParallaxContent>

      {/* How It Works */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto text-center">
          <Badge variant="outline" className="bg-green-100 text-green-700">How It Works</Badge>
          <h2 className="gradient-title mt-2 text-3xl md:text-4xl">
            Splitting expenses has never been easier
          </h2>
          <p className="mx-auto mt-3 max-w-[700px] text-gray-500 md:text-xl/relaxed">
            Follow these simple steps to start tracking and splitting expenses with friends.
          </p>
          <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-3">
            {STEPS.map(({ label, title, description }) => (
              <div key={label} className="flex flex-col items-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-xl font-bold text-green-600">
                  {label}
                </div>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-gray-500 text-center">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax Block 3 */}
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1504610926078-a1611febcad3?q=80&w=2416&auto=format&fit=crop"
        subheading="Built for Groups"
        heading="Perfect for friends and roommates"
      >
        <div className="mx-auto max-w-5xl px-4 py-12 text-center">
          <p className="text-xl md:text-2xl text-neutral-600">
            Keep your living and travel costs fair with Splitr. Everyone sees what’s shared.
          </p>
        </div>
      </TextParallaxContent>

      {/* Testimonials */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto text-center">
          <Badge variant="outline" className="bg-green-100 text-green-700">Testimonials</Badge>
          <h2 className="gradient-title mt-2 text-3xl md:text-4xl">
            What our users are saying
          </h2>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map(({ quote, name, role, image }) => (
              <Card key={name} className="flex flex-col justify-between transition-transform transform hover:scale-105">
                <CardContent className="space-y-4 p-6">
                  <p className="text-gray-500">{quote}</p>
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage src={image} alt={name} />
                      <AvatarFallback className="uppercase">
                        {name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-left">
                      <p className="text-sm font-medium">{name}</p>
                      <p className="text-sm text-muted-foreground">{role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient">
        <div className="container mx-auto text-center space-y-6">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl text-white">
            Ready to simplify expense sharing?
          </h2>
          <p className="mx-auto max-w-[600px] text-green-100 md:text-xl/relaxed">
            Join thousands of users who have made splitting expenses stress‑free.
          </p>
          <Button asChild size="lg" className="bg-green-800 hover:opacity-90">
            <Link href="/dashboard">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-gray-50 py-12 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Splitr. All rights reserved.
      </footer>
    </div>
  );
}
