import { Link } from "react-router";
import { ArrowRightIcon, CalendarIcon, Lock } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

import { formatDate, formatPrice } from "@/lib/utils";

export default function LessonCard({ lesson }) {
  const {
    title,
    price,
    isPaid,
    // classLevel,
    description,
    scheduledDate,
    _id: lessonId,
  } = lesson;
  const formattedScheduledDate = formatDate(scheduledDate);

  return (
    <Card className="flex flex-col shadow-sm transition-shadow hover:shadow-md">
      <CardContent className="flex-grow">
        <div className="text-muted-foreground mb-2 flex items-center text-xs sm:mb-3 sm:text-sm">
          <CalendarIcon className="size-4 me-2" />
          <span>
            {formattedScheduledDate
              ? `Scheduled ${formattedScheduledDate}`
              : "Coming Soon"}
          </span>
        </div>
        <div className="mb-2 space-y-0.5">
          <Link
            to={`/lessons/${lessonId}`}
            className="hover:underline hover:text-primary"
          >
            <h3 className="line-clamp-2 text-base font-semibold capitalize sm:text-lg">
              {title}
            </h3>{" "}
          </Link>
          <span className="text-sm">
            By{" "}
            <Link to={"#"} className="hover:underline hover:text-primary">
              John Doe
            </Link>
          </span>
        </div>
        <p className="text-muted-foreground line-clamp-2 text-xs sm:line-clamp-3 sm:text-sm">
          {description}
        </p>
      </CardContent>
      <CardFooter className="flex items-center justify-between flex-wrap gap-4">
        {isPaid ? (
          <>
            <span className="font-semibold">{formatPrice(price)}</span>
            <Button variant="secondary" size="sm" asChild>
              <Link href="#" className="flex items-center justify-center">
                <Lock className="me-1 size-4" />
                Enroll Now
                <ArrowRightIcon className="ms-1 size-4" />
              </Link>
            </Button>
          </>
        ) : (
          <Button size="sm" asChild>
            <Link
              to={`/lessons/${lessonId}`}
              className="ms-auto flex items-center justify-center"
            >
              Start Lesson
              <ArrowRightIcon className="ms-1 size-4" />
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );

  // return (
  //   <article className="border p-4 rounded-md bg-card">
  //     <div className="flex flex-col gap-0.5 mb-2">
  //       <Link
  //         to={`/lessons/${lessonId}`}
  //         className="hover:underline hover:text-primary"
  //       >
  //         <h2 className="text-lg font-semibold">{title}</h2>
  //       </Link>
  //       <span className="text-sm">
  //         By{" "}
  //         <Link to={"#"} className="hover:underline hover:text-primary">
  //           John Doe
  //         </Link>
  //       </span>
  //       <span className="text-sm text-muted-foreground">{classLevel}</span>
  //     </div>

  //     <div className="mt-2 mb-4 text-muted-foreground space-y-1.5">
  //       <p>{description}</p>
  //       <p>
  //         {formattedScheduledDate
  //           ? `Scheduled ${formattedScheduledDate}`
  //           : "Coming Soon"}
  //       </p>
  //     </div>

  //     {isPaid ? (
  //       <div className="flex items-center justify-between">
  //         <Button asChild>
  //           <Link to={`#`}>Enroll Now</Link>
  //         </Button>
  //         <span className="font-semibold">{formatPrice(price)}</span>
  //       </div>
  //     ) : (
  //       <Button asChild>
  //         <Link to={`/lessons/${lessonId}`}>Start Lesson</Link>
  //       </Button>
  //     )}
  //   </article>
  // );
}
