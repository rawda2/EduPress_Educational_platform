import axios from "axios";

import { axiosErrorHandler } from "@/lib/utils";

export async function getLessonById(id) {
  try {
    const res = await axios.get(
      `https://edu-master-delta.vercel.app/lesson/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1obXdkYmhqdDMwN0BnbWFpbC5jb20iLCJfaWQiOiI2ODUzMDNkYWNhZTIyN2VkMjM0MWQ3ZGQiLCJpYXQiOjE3NTE0NjQ0ODksImV4cCI6MTc1MTU1MDg4OX0.x2RuausRJ9aYLBXIbeVhrpU1UhoQ2c-6D7JRJ26cKmM",
        },
      }
    );

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

export async function payLesson(id) {
  try {
    const res = await axios.post(
      `https://edu-master-delta.vercel.app/lesson/pay/${id}`,
      {}, // empty body
      {
        headers: {
          "Content-Type": "application/json",
          token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1obXdkYmhqdDMwN0BnbWFpbC5jb20iLCJfaWQiOiI2ODUzMDNkYWNhZTIyN2VkMjM0MWQ3ZGQiLCJpYXQiOjE3NTE0NjQ0ODksImV4cCI6MTc1MTU1MDg4OX0.x2RuausRJ9aYLBXIbeVhrpU1UhoQ2c-6D7JRJ26cKmM",
        },
      }
    );

    if (!res.data.success) {
      throw new Error("Failed to fetch lessons");
    }
    return res.data;
  } catch (error) {
    console.error(error);
  }
}
