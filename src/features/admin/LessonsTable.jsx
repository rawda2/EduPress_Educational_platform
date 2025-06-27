import React, { useState } from "react";
import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationLink,
} from "@/components/ui/pagination";
import { Eye, Pencil, Trash } from "lucide-react";

const ITEMS_PER_PAGE = 5;

export default function LessonsTable({ lessons, onShow, onEdit, onDelete }) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(lessons.length / ITEMS_PER_PAGE);

  const paginatedLessons = lessons.slice(
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
          List of available lessons
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Video URL</TableHead>
            <TableHead>Class Level</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedLessons.map((lesson) => (
            <TableRow key={lesson._id}>
              <TableCell>{lesson.title}</TableCell>
              <TableCell className="max-w-[200px] truncate">{lesson.description}</TableCell>
              <TableCell>
                <a
                  href={lesson.videoUrl}
                  className="text-blue-500 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Video
                </a>
              </TableCell>
              <TableCell>{lesson.classLevel}</TableCell>
              <TableCell>{lesson.price ? `${lesson.price} EGP` : "Free"}</TableCell>
             <TableCell className="space-x-2">
                <Button size="sm" variant="ghost" onClick={() => onShow(lesson)}>
                    <Eye size={16} />
                </Button>
                <Button size="sm" variant="ghost" onClick={() => onEdit(lesson)}>
                    <Pencil size={16} />
                </Button>
                <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => {
                    if (confirm("Are you sure you want to delete this lesson?")) {
                        onDelete(lesson._id);
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
