import { Link } from "react-router";

import { Button } from "./ui/button";

import dotsImg from "@/assets/dots.svg";
import heroImg from "@/assets/hero-img.svg";

export default function HeroSection() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-32 text-center lg:text-start flex justify-between items-center gap-14">
      <div className="flex-1">
        <h1 className="max-w-2xl scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Learn at Your Own Pace, from Anywhere in the World
        </h1>

        <p className="mx-auto mt-5 max-w-3xl text-muted-foreground md:text-lg">
          Welcome to EduSphere, your digital learning companion designed for
          students and lifelong learners alike. Our platform offers expertly
          crafted video lessons, live classes, and personalized progress
          tracking to make education accessible and affordable. Join thousands
          of global learners and transform the way you learn today.
        </p>

        <div className="mt-8 flex justify-center lg:justify-start gap-3">
          <Button size="lg" asChild>
            <Link to="lessons">Get started</Link>
          </Button>
          <Button size="lg" variant={"outline"} asChild>
            <Link to="about">Learn more</Link>
          </Button>
        </div>
      </div>

      <div className="relative hidden lg:block flex-1 max-w-full">
        <img
          src={dotsImg}
          alt="dots-icon"
          className="absolute -top-4 right-14 -z-10 dark:opacity-40"
        />
        <img src={heroImg} alt="hero image" className="w-full" />
        <img
          src={dotsImg}
          alt="dots-icon"
          className="absolute -bottom-12 -left-12 -z-10 dark:opacity-40"
        />
      </div>
    </div>
  );
}
