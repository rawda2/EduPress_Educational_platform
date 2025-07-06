import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ViewLessonDetails({ lesson }) {
  if (!lesson) {
    return <p className="text-muted-foreground">No lesson data available</p>;
  }

  return (
    <Card className="max-w-3xl mx-auto space-y-4 p-6 shadow-md border border-border dark:border-gray-700 bg-white dark:bg-[#1f2937] rounded-xl transition-colors duration-300">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-900 dark:text-gray-100 transition-colors duration-300">
          {lesson.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4 dark:text-gray-300 transition-colors duration-300">
          {lesson.description || "No description provided."}
        </p>

        <div className="grid grid-cols-2 gap-4 text-sm text-gray-700 dark:text-gray-300 mb-4 transition-colors duration-300">
          <p>
            <strong>Class Level:</strong> {lesson.classLevel || "N/A"}
          </p>
          <p>
            <strong>Price:</strong>{" "}
            {lesson.isPaid ? (
              <Badge variant="secondary" className="dark:bg-green-700 dark:text-green-100">
                {lesson.price} EGP
              </Badge>
            ) : (
              <Badge variant="outline" className="dark:border-gray-500 dark:text-gray-400">
                Free
              </Badge>
            )}
          </p>
        </div>

        <div>
          <strong className="text-gray-800 dark:text-gray-200">Video:</strong>{" "}
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
            <span className="text-muted-foreground dark:text-gray-400">No video available</span>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
