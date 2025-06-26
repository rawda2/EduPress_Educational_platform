import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import StudentsTable from "@/components/dashboard/StudentsTable";

export default function Students() {
  const fakeStudents = [
    {
      _id: "1",
      fullName: "Ali Ahmed",
      email: "ali.ahmed@example.com",
      phoneNumber: "01012345678",
      classLevel: "Grade 10",
      role: "user",
      isVerified: true,
    },
    {
      _id: "2",
      fullName: "Sara Youssef",
      email: "sara.youssef@example.com",
      phoneNumber: "01098765432",
      classLevel: "Grade 11",
      role: "user",
      isVerified: false,
    },
    {
      _id: "3",
      fullName: "Mohamed Samir",
      email: "mohamed.samir@example.com",
      phoneNumber: "01011223344",
      classLevel: "Grade 12",
      role: "admin",
      isVerified: true,
    },
  ];

  const [searchType, setSearchType] = useState("name"); // name | email | phone
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStudents = fakeStudents.filter((student) => {
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
      <StudentsTable students={filteredStudents} />
    </div>
  );
}
