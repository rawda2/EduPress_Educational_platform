import React from "react";
import Rating from "./Rating";
import { User } from "lucide-react";

const reviews = [
  {
    name: "John Doe",
    stars: 4,
    date: "22nd March, 2024",
    text: "I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.",
  },
  {
    name: "Jane Smith",
    stars: 5,
    date: "10th April, 2024",
    text: "Fantastic course! The lessons were clear and concise. I especially loved the interactive assignments that helped reinforce the concepts.",
  },
  {
    name: "Alex Johnson",
    stars: 3,
    date: "5th May, 2024",
    text: "Good content overall, but I wish there were more real-world projects. The instructor was knowledgeable and helpful.",
  },
  {
    name: "Emily Brown",
    stars: 4,
    date: "18th May, 2024",
    text: "Great pacing and easy to follow. The community support was a big plus for me. Highly recommend for beginners.",
  },
  {
    name: "Michael Lee",
    stars: 5,
    date: "1st June, 2024",
    text: "This course exceeded my expectations. The resources provided were top-notch and the instructor was very engaging.",
  },
];

const starsRating = [
  { num: 5, percent: 60 },
  { num: 4, percent: 20 },
  { num: 3, percent: 10 },
  { num: 2, percent: 5 },
  { num: 1, percent: 5 },
];

export const LessonReviews = () => {
  return (
    <div id="Reviews" className="w-full py-7">
      <div className="flex items-start justify-between w-full gap-12 max-md:flex-col">
        <div className="w-[70%]">
          <h1 className="flex items-center gap-2 mb-5">
            <Rating stars={4} />
            <p className="text-muted-foreground">146,951 reviews</p>
          </h1>
          <div>
            {starsRating.map((rating) => (
              <div key={rating.num} className="flex items-center justify-start gap-5">
                <Rating stars={rating.num} />
                <p className="text-muted-foreground">{rating.percent}%</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-8 max-md:gap-10">
          {reviews.map((review, idx) => (
            <div key={idx} className="flex items-start justify-start max-md:gap-5 md:gap-10 max-md:flex-col">
              <div className="flex flex-row items-center justify-start gap-3">
                <div className="bg-gray-100 p-2 rounded-full text-black w-fit">
                  <User size={40} />
                </div>
                <p className="text-primary font-bold md:w-[50px]">{review.name}</p>
              </div>
              <div className="flex flex-col items-start justify-start gap-2">
                <h1 className="flex items-center gap-2 text-gray-300">
                  <Rating stars={review.stars} />
                  Reviewed on {review.date}
                </h1>
                <p className="text-muted-foreground max-w-[90%]">
                  {review.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
