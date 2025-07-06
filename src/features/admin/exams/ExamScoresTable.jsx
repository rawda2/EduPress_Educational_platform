import dayjs from "dayjs";
import { Loader2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";

import { useExamScores } from "@/hooks/admin/exams/useExamScores";

export default function ExamScoresTable({ examId }) {
  const { data, isLoading, isError } = useExamScores(examId);
  const scores = data?.scores || [];

  if (isLoading)
    return <Loader2 className="animate-spin size-8 mx-auto my-20" />;

  if (isError) return <p className="text-red-500">Failed to load scores.</p>;

  if (scores.length === 0)
    return (
      <p className="text-muted-foreground">
        No students have taken this exam yet.
      </p>
    );

  return (
    <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
      <thead className="">
        <tr>
          <th className="p-2 text-left">Student Name</th>
          <th className="p-2 text-left">Score</th>
          <th className="p-2 text-left">Submitted</th>
          <th className="p-2 text-left">Start Time</th>
        </tr>
      </thead>
      <tbody>
        {scores.map((item) => (
          <tr key={item._id} className="border-t border-border">
            <td className="p-2">{item.student?.fullName || "Unknown"}</td>
            <td className="p-2">{item.score}</td>
            <td className="p-2">
              <Badge variant={item.isSubmitted ? "success" : "destructive"}>
                {item.isSubmitted ? "Submitted" : "Not Submitted"}
              </Badge>
            </td>
            <td className="p-2">
              {dayjs(item.startTime).format("MMM D, YYYY HH:mm")}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
