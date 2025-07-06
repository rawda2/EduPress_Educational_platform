import axios from "axios";

import { axiosErrorHandler } from "@/lib/utils";

export async function getAllLessons() {
  const token = localStorage.getItem("token");

  try {
    const res = await axios.get("https://edu-master-delta.vercel.app/lesson", {
      headers: {
        token,
        "Content-Type": "application/json",
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
