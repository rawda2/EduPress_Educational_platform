import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import StudentsTable from "@/features/admin/StudentsTable";
import { fetchAllUsersAPI } from "@/features/admin/fetchAllUsersAPI";

export default function Students() {
  const [students, setStudents] = useState([]);
  const [searchType, setSearchType] = useState("name"); // name | email | phone
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStudents() {
      const result = await fetchAllUsersAPI();
      if (result.success) {
        // فقط الطلاب اللي role بتاعهم "user"
        const onlyUsers = result.users.filter((u) => u.role === "user");
        setStudents(onlyUsers);
      } else {
        console.error(result.message);
      }
      setLoading(false);
    }

    fetchStudents();
  }, []);

  const filteredStudents = students.filter((student) => {
    if (searchType === "name") {
      return student.fullName.toLowerCase().includes(searchTerm.toLowerCase());
    }
    if (searchType === "email") {
      return student.email.toLowerCase().includes(searchTerm.toLowerCase());
    }
    if (searchType === "phone") {
      return student.phoneNumber.includes(searchTerm);
    }
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <h1 className="text-2xl font-semibold">Students</h1>

      {/* Search bar with filter */}
      <div className="flex flex-wrap items-center gap-3">
        <Select value={searchType} onValueChange={setSearchType}>
          <SelectTrigger className="w-[120px]">
            <SelectValue placeholder="Search by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="name">Name</SelectItem>
            <SelectItem value="email">Email</SelectItem>
            <SelectItem value="phone">Phone</SelectItem>
          </SelectContent>
        </Select>

        <Input
          type="text"
          placeholder={`Search by ${searchType}`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-[200px]"
        />
      </div>

      {/* Students Table */}
      {loading ? (
        <p className="text-muted-foreground">Loading students...</p>
      ) : (
        <StudentsTable students={filteredStudents} />
      )}
    </div>
  );
}
