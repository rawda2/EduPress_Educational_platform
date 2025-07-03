import { AlertCircleIcon, FolderX, Loader2 } from "lucide-react";

import LessonCard from "./LessonCard";
import useLessons from "./useLessons";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function LessonsList() {
  const { isLoading, error, lessons } = useLessons();

  if (isLoading)
    return <Loader2 className="animate-spin size-8 mx-auto mt-28" />;

  if (error)
    return (
      <Alert className="mt-8" variant="destructive">
        <AlertCircleIcon />
        <AlertDescription>
          Something went wrong, please try again
        </AlertDescription>
      </Alert>
    );

  if (!lessons || lessons.length === 0)
    return (
      <div className="container text-center mx-auto px-4 py-28">
        <FolderX className="mx-auto size-24 text-muted-foreground/80 stroke-1" />
        <h1 className="mb-2 text-2xl font-bold">No Lessons Available</h1>
        <p className="text-muted-foreground">
          Currently, there are no lessons available in this grade. Please check
          back later.
        </p>
      </div>
    );

  return (
    <section className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {lessons.map((lesson) => (
        <LessonCard lesson={lesson} key={lesson._id} />
      ))}
    </section>
  );
}
