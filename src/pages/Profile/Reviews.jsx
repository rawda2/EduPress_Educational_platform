import React from "react";
import { MoreHorizontal, Star } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const reviews = [
  {
    id: 1,
    course: "Mastering Frontend Development",
    rating: 4,
    review:
      "This course provided a solid foundation in modern frontend tools. I appreciated the practical projects and the clear explanation of React and Tailwind. Could use more deep-dives on advanced topics, though.",
  },
  {
    id: 2,
    course: "Intro to Data Structures",
    rating: 5,
    review:
      "Absolutely loved this course! The instructor broke down abstract concepts like trees and graphs into real-life examples. The animations and interactive challenges were a great bonus.",
  },
  {
    id: 3,
    course: "Python for Data Science",
    rating: 3,
    review:
      "The content was okay for beginners, but a bit slow-paced for someone with prior experience. The real-world datasets were interesting, but I would’ve liked more advanced projects.",
  },
  {
    id: 4,
    course: "UI/UX Essentials",
    rating: 5,
    review:
      "This course completely changed how I approach design. From color theory to wireframing, everything was practical and insightful. Great for both developers and designers!",
  },
  {
    id: 5,
    course: "Cybersecurity Basics",
    rating: 4,
    review:
      "A strong introduction to cybersecurity principles. The hands-on labs and real-life attack simulations were engaging. Would’ve loved more depth on encryption techniques.",
  },
];


export default function ReviewsSection() {
  return (
    <div className="px-4 sm:px-6 md:px-10 py-6 max-w-5xl mx-auto">
      <h2 className="text-xl font-semibold mb-6">
        Reviews <span className="text-gray-500">(12)</span>
      </h2>

      <div className="space-y-6">
        {reviews.map((r) => (
          <div
            key={r.id}
            className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm relative"
          >
            {/* Dots */}
            <div className="absolute top-4 right-4 text-gray-400 cursor-pointer">
              <MoreHorizontal className="w-5 h-5" />
            </div>

            {/* Course Name */}
            <p className="text-sm font-medium text-gray-600">
              Course Name:{" "}
              <span className="text-black font-semibold">{r.course}</span>
            </p>

            {/* Rating */}
            <div className="flex items-center gap-1 my-2">
              <span className="text-sm font-medium text-gray-600">Rating:</span>
              <div className="flex gap-0.5">
                {[...Array(r.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
            </div>

            {/* Review */}
            <p className="text-sm text-gray-700 leading-relaxed">{r.review}</p>
          </div>
        ))}
      </div>
        {/* Pagination */}
            <div className="flex justify-center mt-5">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
    </div>
  );
}
