import React from "react";
import { useExamScores } from "@/hooks/admin/exams/useExamScores";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";

export default function ExamScoresTable({ exams }) {
  if (!exams || exams.length === 0) return null;

  return (
    <Card className="mt-8 bg-white dark:bg-gray-800 border border-border dark:border-gray-700 shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          Exams Average Scores
        </CardTitle>
      </CardHeader>

      <CardContent className="overflow-x-auto">
        <Table className="bg-transparent">
          <TableHeader>
            <TableRow>
              <TableHead>Exam Title</TableHead>
              <TableHead>Average (All)</TableHead>
              <TableHead>Average (Submitted)</TableHead>
              <TableHead>Average (Score &gt; 0)</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {exams.map((exam) => (
              <ExamScoresRow key={exam._id} exam={exam} />
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

function ExamScoresRow({ exam }) {
  const { data: response = {}, isLoading, isError } = useExamScores(exam._id);
  const scores = response?.scores || [];

  if (isLoading) {
    return (
      <TableRow>
        <TableCell colSpan={4}>
          <Skeleton className="h-4 w-full" />
        </TableCell>
      </TableRow>
    );
  }

  if (isError) {
    return (
      <TableRow>
        <TableCell colSpan={4} className="text-red-500 text-sm">
          Failed to load scores
        </TableCell>
      </TableRow>
    );
  }

  const averageAll = scores.length
    ? Math.round(scores.reduce((sum, item) => sum + item.score, 0) / scores.length)
    : 0;

  const submittedScores = scores.filter((item) => item.isSubmitted);
  const averageSubmitted = submittedScores.length
    ? Math.round(
        submittedScores.reduce((sum, item) => sum + item.score, 0) / submittedScores.length
      )
    : 0;

  const positiveScores = scores.filter((item) => item.score > 0);
  const averagePositive = positiveScores.length
    ? Math.round(
        positiveScores.reduce((sum, item) => sum + item.score, 0) / positiveScores.length
      )
    : 0;

  return (
    <TableRow className="dark:hover:bg-gray-700 hover:bg-gray-100 transition-colors">
      <TableCell className="font-medium text-gray-900 dark:text-gray-100">{exam.title}</TableCell>
      <TableCell>
        <Badge variant="outline" className="text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-600">
          {averageAll}
        </Badge>
      </TableCell>
      <TableCell>
        <Badge variant="outline" className="text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-600">
          {averageSubmitted}
        </Badge>
      </TableCell>
      <TableCell>
        <Badge variant="outline" className="text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-600">
          {averagePositive}
        </Badge>
      </TableCell>
    </TableRow>
  );
}
