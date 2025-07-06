import React from "react";

import { Badge } from "@/components/ui/badge";

export default function ViewStudentDetails({ student }) {
  if (!student)
    return <p className="text-muted-foreground">No student data available</p>;

  return (
    <div className="space-y-4 text-sm">
      <div className="border-t pt-8 grid grid-cols-1 gap-4 [&>div>span]:first:font-medium [&>div>span]:first:inline-block [&>div>span]:first:min-w-[120px]">
        <div>
          <span>ID</span>{" "}
          <span className="text-muted-foreground">{student._id}</span>
        </div>

        <div>
          <span>Full Name</span> {student.fullName}
        </div>

        <div>
          <span>Email</span> {student.email}
        </div>

        <div>
          <span>Phone</span> {student.phoneNumber}
        </div>

        <div>
          <span>Class Level</span> {student.classLevel}
        </div>

        <div>
          <span>Role</span> {student.role}
        </div>

        <div>
          <span>Status</span>{" "}
          <Badge
            variant={student.isVerified ? "success" : "destructive"}
            className="text-xs"
          >
            {student.isVerified ? "Active" : "Inactive"}
          </Badge>
        </div>
      </div>
    </div>
  );
}
