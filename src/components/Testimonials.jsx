import {
  Carousel,
  CarouselItem,
  CarouselNext,
  CarouselContent,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import SectionHeading from "./SectionHeading";

const testimonials = [
  {
    content:
      "I love how I can access my courses from anywhere. I study during my commute and review at night. The progress tracking keeps me motivated.",
    avatar: "https://i.pravatar.cc/150?img=1",
    username: "John Doe",
    role: "student",
  },
  {
    content:
      "EduPress gives me the tools to upload lessons, manage my students, and track their progress easily. It’s modern, intuitive, and saves me a lot of time.",
    avatar: "https://i.pravatar.cc/150?img=5",
    username: "Jane Smith",
    role: "instructor",
  },
  {
    content:
      "I was struggling with math and physics, but the way the instructors explain concepts here is just brilliant. The quizzes and feedback really made me confident.",
    avatar: "https://i.pravatar.cc/150?img=4",
    username: "Alex Johnson",
    role: "student",
  },
  {
    content:
      "I used to teach locally, but now I can reach students across Egypt and the Middle East. The platform supports videos, assignments, and even live sessions.",
    avatar: "https://i.pravatar.cc/150?img=3",
    username: "Emily Davis",
    role: "instructor",
  },
  {
    content:
      "The revision courses and exam simulations helped me prepare efficiently. I highly recommend this platform to any high schooler aiming for high scores.",
    avatar: "https://i.pravatar.cc/150?img=2",
    username: "Michael Brown",
    role: "student",
  },
];

export default function Testimonials() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-24">
      <SectionHeading>
        Trusted by Thousands of Students & Teachers
      </SectionHeading>

      <Carousel className="max-w-[80%] lg:max-w-[90%] mx-auto">
        <CarouselContent className="-ml-1 items-stretch">
          {testimonials.map(({ content, avatar, username, role }) => (
            <CarouselItem
              key={username}
              className="pl-1 md:basis-1/2 lg:basis-1/3 self-stretch"
            >
              <Card className="h-full mx-2">
                <CardContent className="p-6 h-full flex flex-col justify-between">
                  <p className="text-lg mb-6 italic">"{content}"</p>
                  <div className="flex gap-4 items-center">
                    <img
                      src={avatar}
                      alt="user avatar"
                      className="size-12 rounded-full overflow-hidden"
                    />
                    <div className="-space-y-1">
                      <h4 className="font-semibold">{username}</h4>
                      <span className="text-sm text-muted-foreground">
                        {role}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
