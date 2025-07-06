import { useState } from "react";

import {
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  TableHeader,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationItem,
  PaginationNext,
  PaginationLink,
  PaginationContent,
  PaginationPrevious,
} from "@/components/ui/pagination";
import ViewQuestionModal from "./questions/ViewQuestionModal";
import UpdateQuestionModal from "./questions/UpdateQuestionModal";
import DeleteQuestionModal from "./questions/DeleteQuestionModal";

const ITEMS_PER_PAGE = 5;

export default function QuestionsTable({ questions }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(questions.length / ITEMS_PER_PAGE);

  const paginatedQuestions = questions.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="space-y-4">
      <div className="border rounded-md shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Text</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Points</TableHead>
              <TableHead>Correct Answer</TableHead>
              <TableHead>Exam Title</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedQuestions.map((q) => (
              <TableRow key={q._id}>
                <TableCell className="max-w-[200px] truncate">
                  {q.text}
                </TableCell>
                <TableCell>{q.type}</TableCell>
                <TableCell>{q.points}</TableCell>
                <TableCell className="font-medium">{q.correctAnswer}</TableCell>
                <TableCell>
                  {q.exam?.title || "—"} {/* لو exam فيه title */}
                </TableCell>
                <TableCell className="space-x-2">
                  <ViewQuestionModal question={q} />
                  <UpdateQuestionModal question={q} />
                  <DeleteQuestionModal questionId={q?._id} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {totalPages > 1 && (
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => handlePageChange(currentPage - 1)}
                className={
                  currentPage === 1 ? "pointer-events-none opacity-50" : ""
                }
              />
            </PaginationItem>

            {Array.from({ length: totalPages }, (_, i) => (
              <PaginationItem key={i}>
                <PaginationLink
                  isActive={currentPage === i + 1}
                  onClick={() => handlePageChange(i + 1)}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationNext
                onClick={() => handlePageChange(currentPage + 1)}
                className={
                  currentPage === totalPages
                    ? "pointer-events-none opacity-50"
                    : ""
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
}
