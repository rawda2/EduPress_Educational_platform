import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function ViewLessonDetails({ lesson }) {
  if (!lesson) {
    return <p className="text-muted-foreground">No lesson data available</p>;
  }

  return (
    <Card className="p-0 border-0 bg-transparent max-w-3xl mx-auto space-y-4 transition-colors duration-300 w-full">
      <CardHeader className="px-0 m-0">
        <CardTitle className="text-2xl font-bold transition-colors duration-300">
          {lesson.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="px-0">
        <p className="text-muted-foreground mb-4 transition-colors duration-300">
          {lesson.description || "No description provided."}
        </p>

        <div className="grid grid-cols-2 gap-4 text-sm mb-4 transition-colors duration-300">
          <p>
            <strong>Class Level:</strong> {lesson.classLevel || "N/A"}
          </p>
          <p>
            <strong>Price:</strong>{" "}
            {lesson.isPaid ? (
              <Badge
                variant="secondary"
                className="dark:bg-green-700 dark:text-green-100"
              >
                {lesson.price} EGP
              </Badge>
            ) : (
              <Badge
                variant="outline"
                className="dark:border-gray-500 dark:text-gray-400"
              >
                Free
              </Badge>
            )}
          </p>
        </div>

        <div>
          <strong>Video:</strong>{" "}
          {lesson.video ? (
            <Button
              variant="link"
              as="a"
              href={lesson.video}
              target="_blank"
              rel="noopener noreferrer"
              className="p-0 text-blue-600 dark:text-blue-400 hover:underline transition-colors duration-300"
            >
              View Video
            </Button>
          ) : (
            <span className="text-muted-foreground dark:text-gray-400">
              No video available
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
