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

export const LessonReviews = () => {
  return (
    <div id="Reviews" className="w-full py-7">
      <h1 className="font-extrabold text-2xl mb-3">Reviews</h1>
      <div className="flex items-start justify-between w-full gap-12">
        <div>
          <h1 className="flex items-center gap-2">
            <Rating stars={4} />
            <p className="text-muted-foreground">146,951 reviews</p>
          </h1>
        </div>
        <div className="flex flex-col gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="flex items-start justify-start gap-10">
              <div className="flex flex-row items-center justify-start gap-3">
                <div className="bg-gray-100 p-2 rounded-full text-black w-fit">
                  <User size={50} />
                </div>
                <p className="text-primary font-bold w-[50px]">{review.name}</p>
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
