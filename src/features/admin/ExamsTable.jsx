import React, { useState } from "react";
import {
  Table, TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Eye, Pencil, Trash } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationLink,
} from "@/components/ui/pagination";

const ITEMS_PER_PAGE = 5;

export default function ExamsTable({ exams, onShow, onEdit, onDelete }) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(exams.length / ITEMS_PER_PAGE);

  const paginatedExams = exams.slice(
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
      <Table className="bg-white dark:bg-gray-900 border rounded-md shadow-sm">
        <TableCaption className="text-sm text-muted-foreground">
          List of available exams
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Class Level</TableHead>
            <TableHead>Duration</TableHead>
            <TableHead>Questions</TableHead>
            <TableHead>Start</TableHead>
            <TableHead>End</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedExams.map((exam) => (
            <TableRow key={exam._id}>
              <TableCell>{exam.title}</TableCell>
              <TableCell className="max-w-[200px] truncate">{exam.description}</TableCell>
              <TableCell>{exam.classLevel}</TableCell>
              <TableCell>{exam.duration} min</TableCell>
              <TableCell>{exam.questions?.length ?? 0}</TableCell>
              <TableCell>{new Date(exam.startDate).toLocaleDateString()}</TableCell>
              <TableCell>{new Date(exam.endDate).toLocaleDateString()}</TableCell>
              <TableCell className="space-x-2">
                <Button size="sm" variant="ghost" onClick={() => onShow(exam)}>
                  <Eye size={16} />
                </Button>
                <Button size="sm" variant="ghost" onClick={() => onEdit(exam)}>
                  <Pencil size={16} />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => {
                    if (confirm("Are you sure you want to delete this exam?")) {
                      onDelete(exam._id);
                    }
                  }}
                >
                  <Trash size={16} className="text-red-500" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => handlePageChange(currentPage - 1)}
                className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
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
                className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
}
