import { Suspense } from "react";
import LoaderFullScreen from "./LoaderFullScreen";

export default function SuspenseFallback({ children }) {
  return <Suspense fallback={<LoaderFullScreen />}>{children}</Suspense>;
}
