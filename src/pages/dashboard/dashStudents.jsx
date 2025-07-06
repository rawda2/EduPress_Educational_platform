import { useState } from "react";
import { Loader2 } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import StudentsTable from "@/features/admin/StudentsTable";

import { useAllUsers } from "@/hooks/admin/useAllUsers";

export default function DashStudents() {
  const { data, isLoading, isError } = useAllUsers();
  const [searchType, setSearchType] = useState("name");
  const [searchTerm, setSearchTerm] = useState("");

  const users = data || [];

  const filteredUsers = users.filter((u) => {
    if (searchType === "name")
      return u.fullName.toLowerCase().includes(searchTerm.toLowerCase());

    if (searchType === "email")
      return u.email.toLowerCase().includes(searchTerm.toLowerCase());

    if (searchType === "phone") return u.phoneNumber.includes(searchTerm);

    return true;
  });

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Students</h1>

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

      {/* Table */}
      {isLoading ? (
        <Loader2 className="animate-spin size-20 mx-auto my-10" />
      ) : isError ? (
        <p className="text-destructive">Error loading students</p>
      ) : (
        <StudentsTable data={filteredUsers} />
      )}
    </div>
  );
}
