import axios from "axios";

import { axiosErrorHandler } from "@/lib/utils";

export async function getAllLessons() {
  try {
    const res = await axios.get("https://edu-master-delta.vercel.app/lesson", {
      headers: {
        "Content-Type": "application/json",
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlYW0yQGdtYWlsLmNvbSIsIl9pZCI6IjY4NTk5MjM0YzMwMmU2MTk5YmQzMjE0NiIsImlhdCI6MTc1MDk5OTcwOSwiZXhwIjoxNzUxMDg2MTA5fQ.c0amp6qm6PKDdWZF29DMVFHEAzNtv187V-S0OZD6eEs",
      },
    });

    if (!res.data.success) {
      throw new Error("Failed to fetch lessons");
    }

    return res.data.data;
  } catch (error) {
    console.error("Error fetching lessons: ", error);
    // throw new Error("Failed to fetch lessons");
    throw new Error(axiosErrorHandler(error, "Failed to fetch lessons"));
  }
}
