import useLessons from "@/features/lessons/useLessons";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import image from "../assets/image.png";
import Rating from "./Rating";
import { CalendarCheck2 } from "lucide-react";
import { useNavigate } from "react-router";

const MoreCourses = ({ id }) => {
  const { lessons } = useLessons();
  const otherLessons = lessons?.filter((lesson) => lesson._id !== id);
  const navigate = useNavigate();
  return (
    <div className="w-full p-6">
      <h1 className="text-2xl font-bold mb-4">More Lessons Like This:</h1>
      <div className="w-full flex justify-center">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-[90%] h-[20%]"
        >
          <CarouselContent>
            {otherLessons?.map((lesson, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                <div className="p-1">
                  <Card
                    className="p-2 cursor-pointer hover:scale-105 transition-all duration-300"
                    onClick={() => navigate(`/lessons/${lesson._id}`)}
                  >
                    <CardContent className="flex flex-col items-start justify-start p-2 gap-2 h-full">
                      <div className="rouded-lg ">
                        <img src={image} alt="image" />
                      </div>
                      <h1 className="text-lg font-semibold">{lesson.title}</h1>
                      <div className="flex items-center">
                        <Rating stars={5} />
                        <p className="text-muted-foreground text-md">
                          | By John Doe
                        </p>
                      </div>
                      <div className="flex text-muted-foreground gap-2 items-center text-sm">
                        <CalendarCheck2 size={15} />
                        {lesson?.scheduledDate?.slice(0, 10)}
                      </div>
                      <p className="text-white/80">
                        {lesson?.description?.slice(0, 50)}...
                      </p>
                      <h1 className="text-2xl font-bold">${lesson.price}</h1>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default MoreCourses;
