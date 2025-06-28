import LessonsList from "@/features/lessons/LessonsList";

export default function Lessons() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-2 text-3xl font-bold">Lessons</h1>
      <p className="text-muted-foreground">
        Explore our wide range of courses designed to help you learn and grow.
      </p>

      {/* <div className="flex gap-6 mt-8"> */}
      {/* <aside></aside> */}
      <LessonsList />
      {/* </div> */}
    </div>
  );
}
