import React from "react";
import { ToggleGroupDemo } from "./ToggleGroupDemo";
import { AwardIcon, GraduationCap, PlayIcon, User } from "lucide-react";
import { AccordionDemo } from "./AccordionDemo";

const courseDescription =
  "This interactive e-learning course will introduce you to User Experience (UX) design, the art of creating products and services that are intuitive, enjoyable, and user-friendly. Gain a solid foundation in UX principles and learn to apply them in real-world scenarios through engaging modules and interactive exercises.";

const certificationText =
  "At Byway, we understand the significance of formal recognition for your hard work and dedication to continuous learning. Upon successful completion of our courses, you will earn a prestigious certification that not only validates your expertise but also opens doors to new opportunities in your chosen field.";

const instructor = {
  name: "John Doe",
  title: "UI/UX",
  reviews: "40,440 reviews",
  students: "500 students",
  lessons: "12 lessons",
  bio: "With over a decade of industry experience, Ronald brings a wealth of practical knowledge to the classroom. He has played a pivotal role in designing user-centric interfaces for renowned tech companies, ensuring seamless and engaging user experiences.",
};

const LessonDetails = () => {
  return (
    <div className="w-full my-14">
      <ToggleGroupDemo />
      <div className="flex items-start justify-between w-full gap-10 flex-col mt-4">
        <div
          id="description"
          className="flex flex-col items-start justify-start gap-4"
        >
          <div>
            <h1 className="font-bold text-lg mb-2">Course Description</h1>
            <p className="text-muted-foreground">{courseDescription}</p>
          </div>
          <div>
            <h1 className="font-bold text-lg mb-2">Certification</h1>
            <p className="text-muted-foreground">{certificationText}</p>
          </div>
        </div>
        <div>
          <h1 className="font-extrabold text-2xl mb-3">Instructor</h1>
          <p className="text-primary font-bold text-lg">{instructor.name}</p>
          <p>{instructor.title}</p>
          <div className="flex items-center justify-start gap-3 my-4">
            <div className="bg-gray-100 p-2 rounded-full text-black w-fit">
              <User size={50} />
            </div>
            <div>
              <span className="flex items-center gap-1">
                <AwardIcon /> {instructor.reviews}
              </span>
              <span className="flex items-center gap-1">
                <GraduationCap /> {instructor.students}
              </span>
              <span className="flex items-center gap-1">
                <PlayIcon /> {instructor.lessons}
              </span>
            </div>
          </div>
          <p className="text-muted-foreground">{instructor.bio}</p>
        </div>
        <div id="Syllabus" className="w-full">
          <h1 className="font-extrabold text-2xl mb-3">Syllabus</h1>
          <AccordionDemo />
        </div>
      </div>
    </div>
  );
};

export default LessonDetails;
