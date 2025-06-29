import {
  Award,
  Globe,
  BookOpen,
  Lightbulb,
  ClipboardCheck,
  LayoutDashboard,
} from "lucide-react";

import SectionHeading from "./SectionHeading";

const features = [
  {
    icon: Globe,
    title: "Anytime, Anywhere Learning",
    description:
      "All you need is an internet connection. Our responsive platform works perfectly on desktops, tablets, and smartphones. so, you can learn from your home, on the bus, or even during your break at work.",
  },
  {
    icon: BookOpen,
    title: "Structured Online Courses",
    description:
      "Explore a wide variety of subjects taught by experienced educators. Each course is divided into modules and lessons that build progressively, helping students grasp core concepts with ease.",
  },
  {
    icon: Lightbulb,
    title: "Interactive & Engaging Lessons",
    description:
      "Each lesson on EduPress is designed not just to teach, but to inspire. Our expert instructors use visuals, storytelling, real-life examples, and interactive quizzes to make even the most complex topics simple and enjoyable.",
  },
  {
    icon: ClipboardCheck,
    title: "Exam Preparation Programs",
    description:
      "Whether you’re preparing for national exams like Thanaweya Amma or international ones like IGCSE or SAT, EduSphere provides dedicated exam-focused content, practice tests, and revision tools to boost your confidence.",
  },
  {
    icon: LayoutDashboard,
    title: "Teacher Dashboard",
    description:
      "If you're an educator, EduPress gives you the tools to create, upload, and manage your own courses, track student engagement, and receive feedback — all in one place.",
  },
  {
    icon: Award,
    title: "Real Certification",
    description:
      "After completing a course or program, you’ll receive an official certificate you can add to your resume, share on LinkedIn, or print proudly. Show the world what you've accomplished.",
  },
];

export default function FeaturesSection() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-24">
      <SectionHeading>What We Offer</SectionHeading>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-12">
        {features.map(({ icon, title, description }) => {
          const Icon = icon;
          return (
            <div key={title} className="flex">
              <Icon className="flex-shrink-0 mt-2 size-8" />
              <div className="ms-5 sm:ms-8">
                <h3 className="text-base sm:text-lg font-semibold">{title}</h3>
                <p className="mt-1 text-muted-foreground">{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
