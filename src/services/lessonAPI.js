import axios from "axios";

import { axiosErrorHandler } from "@/lib/utils";

export async function getLessonById(id) {
  const token = localStorage.getItem("token");
  try {
    const res = await axios.get(
      `https://edu-master-delta.vercel.app/lesson/${id}`,
      {
        headers: {
          token,
          "Content-Type": "application/json",
        },
      }
    );

    return res.data.data;
  } catch (error) {
    if (error.status === 403) {
      return null;
    }
    console.error("Error fetching lesson: ", error);
    throw new Error(axiosErrorHandler(error, "Failed to fetch lesson"));
  }
}

export async function payLesson(id) {
  const token = localStorage.getItem("token");

  try {
    const res = await axios.post(
      `https://edu-master-delta.vercel.app/lesson/pay/${id}`,
      {}, // empty body
      {
        headers: {
          "Content-Type": "application/json",
          token,
        },
      }
    );

    if (!res.data.success) {
      throw new Error("Failed to fetch lesson");
    }
    return res.data;
  } catch (error) {
    console.error(error);
  }
}


export async function createLesson(data) {
  const token = localStorage.getItem("token");

  try {
    const res = await axios.post(
      `https://edu-master-delta.vercel.app/lesson`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
          token,
        },
      }
    );

    if (!res.data.success) {
      throw new Error("Failed to create lesson");
    }
    return res.data;
  } catch (error) {
    console.error(error);
  }
}

export async function updateLesson(id, data) {
  const token = localStorage.getItem("token");

  try {
    const res = await axios.put(
      `https://edu-master-delta.vercel.app/lesson/${id}`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
          token,
        },
      }
    );

    if (!res.data.success) {
      throw new Error("Failed to update lesson");
    }
    return res.data;
  } catch (error) {
    console.error(error);
  }
}