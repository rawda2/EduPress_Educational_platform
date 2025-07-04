import { useForm } from "react-hook-form";
import { Clock, Mail, MapPin, MessageCircle } from "lucide-react";

import {
  Form,
  FormItem,
  FormField,
  FormLabel,
  FormMessage,
  FormControl,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import SectionHeading from "@/components/SectionHeading";
import SocialMediaLinks from "@/components/SocialMediaLinks";

const contactData = [
  {
    icon: Mail,
    title: "Email",
    value: "support@edupress.com",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+20 123 456 7890",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "6th October, Cairo, Egypt",
  },
  {
    icon: Clock,
    title: "Support hours",
    value: "9:00 AM – 9:00 PM, All Days",
  },
];

export default function About() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <AboutSection />
      <section className="flex flex-col-reverse lg:flex-row justify-between items-start gap-8 *:flex-1">
        <ContactDataSection />
        <div>
          <SectionHeading className="mb-4 text-start !text-2xl">
            We’d Love to Hear From You
          </SectionHeading>
          <p className="mb-6 text-muted-foreground">
            Whether you have a question, a suggestion, or just want to say
            hello, we’re here for you. Our support team is available every day
            to ensure your experience on EduSphere is smooth and enjoyable. Fill
            out the form below, or reach us directly through any of our contact
            channels.
          </p>
          <ContactFormSection />
        </div>
      </section>
    </div>
  );
}

function AboutSection() {
  return (
    <section className="mb-14 max-w-6xl mx-auto text-center">
      <SectionHeading className="mb-6">
        Our Mission is to Empower Every Learner
      </SectionHeading>
      <p className="text-center text-lg text-muted-foreground">
        At EduPress, we believe education should be a right, not a privilege.
        Our mission is to close the gap between learners and high-quality
        education by offering a platform where anyone can access reliable,
        up-to-date, and engaging learning materials — anytime, anywhere. Our
        team consists of educators, designers, developers, and passionate
        thinkers who are committed to building a world where knowledge is
        borderless. From high school math and science to soft skills and
        professional development, EduPress offers something for every stage of
        life and learning.
      </p>
    </section>
  );
}

function ContactDataSection() {
  return (
    <div className="space-y-8">
      <SectionHeading className="mb-4 text-start !text-2xl">
        Additional Info
      </SectionHeading>
      <ul className="mt-6 space-y-4">
        {contactData.map(({ icon, title, value }) => {
          const Icon = icon;
          return (
            <li key={title} className="flex items-center gap-3">
              <div className="size-12 rounded-full flex justify-center items-center bg-primary text-white/80">
                <Icon className="size-6" />
              </div>
              <div className="-space-y-0.5">
                <h5 className="font-semibold ">{title}</h5>
                <span className="text-muted-foreground">{value}</span>
              </div>
            </li>
          );
        })}
      </ul>

      <SectionHeading className="mb-4 text-start !text-2xl">
        Social Media Links
      </SectionHeading>
      <SocialMediaLinks />
    </div>
  );
}

function ContactFormSection() {
  const form = useForm();

  function submitForm(data) {
    console.log("Form submitted with data:", data);
    form.reset();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(submitForm)}
        className="w-full space-y-4"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Enter your message title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter your message body"
                  className="h-40"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="block ms-auto">
          Send Message
        </Button>
      </form>
    </Form>
  );
}
