import React from "react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function ViewStudentDetails({ student }) {
  if (!student) return null;

  return (
    <div className="space-y-4 text-sm text-gray-700 dark:text-gray-200">
      <h2 className="text-lg font-semibold">Student Details</h2>
      <Separator />

      <div className="grid grid-cols-2 gap-4">
        <div>
          <span className="font-medium">ID:</span>{" "}
          <span className="text-muted-foreground">{student._id}</span>
        </div>

        <div>
          <span className="font-medium">Full Name:</span> {student.fullName}
        </div>

        <div>
          <span className="font-medium">Email:</span> {student.email}
        </div>

        <div>
          <span className="font-medium">Phone:</span> {student.phoneNumber}
        </div>

        <div>
          <span className="font-medium">Class Level:</span> {student.classLevel}
        </div>

        <div>
          <span className="font-medium">Role:</span> {student.role}
        </div>

        <div>
          <span className="font-medium">Status:</span>{" "}
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
