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
import ViewStudentModal from "./students/ViewStudentModal";

const ITEMS_PER_PAGE = 10;

export default function StudentsTable({ data }) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  const paginatedStudents = data.slice(
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
              <TableHead>Id</TableHead>
              <TableHead>Full Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Class Level</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedStudents.map((s) => (
              <TableRow key={s._id}>
                <TableCell className="text-xs text-muted-foreground">
                  {s._id.slice(0, 6)}...
                </TableCell>
                <TableCell>{s.fullName}</TableCell>
                <TableCell>{s.email}</TableCell>
                <TableCell>{s.classLevel}</TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      s.isVerified
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {s.isVerified ? "Active" : "Inactive"}
                  </span>
                </TableCell>
                <TableCell className="space-x-2">
                  <ViewStudentModal student={s} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
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

// const studentsHeader = [
//   "id",
//   "full name",
//   "email",
//   "phone",
//   "class level",
//   "role",
//   "status",
//   "actions",
// ];

// const adminsHeader = ["id", "full name", "email", "phone", "role", "actions"];
