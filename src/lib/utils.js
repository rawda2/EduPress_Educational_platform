import { clsx } from "clsx";
import { isAxiosError } from "axios";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function formatDate(date) {
  const d = new Date(date);
  if (isNaN(d.getTime())) {
    return null;
  }

  return d.toLocaleString("en-US");
  // return `${d.getDate()} ${d.toLocaleString("en-US", { month: "short" })}`;
}

export function formatPrice(price) {
  if (price === undefined || price === null || price === 0) {
    return "Free";
  }

  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "EGP",
  }).format(price);
}

export function axiosErrorHandler(error, message) {
  if (isAxiosError(error)) return error.response?.data.message || error.message;

  return message;
}
