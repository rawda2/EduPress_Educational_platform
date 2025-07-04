import { Facebook, Instagram, Mail, Phone, Youtube } from "lucide-react";

import { Button } from "./ui/button";

const links = [
  { icon: Facebook, href: "https://www.facebook.com" },
  { icon: Instagram, href: "https://www.instagram.com" },
  { icon: Youtube, href: "https://www.youtube.com" },
  { icon: Mail, href: "mailto:contact@edupress.com" },
  { icon: Phone, href: "tel:+201234567890" },
];

export default function SocialMediaLinks() {
  return (
    <ul className="flex items-center gap-4">
      {links.map(({ icon, href }) => {
        const Icon = icon;
        return (
          <li key={href}>
            <Button
              asChild
              variant="outline"
              className="size-12 hover:text-primary"
            >
              <a href={href} title={href}>
                <Icon className="size-6" />
              </a>
            </Button>
          </li>
        );
      })}
    </ul>
  );
}
