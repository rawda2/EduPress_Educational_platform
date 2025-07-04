import React from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export default function ConfirmDialog({ title, message, onConfirm, onCancel }) {
  return (
    <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center p-4">
      <div className="relative bg-white dark:bg-[#1f2937] p-6 rounded-xl shadow-lg w-full max-w-md border border-border">
        <button
          onClick={onCancel}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
        >
          <X size={20} />
        </button>
        <h2 className="text-lg font-semibold mb-4">{title}</h2>
        <p className="text-sm mb-6 text-gray-700 dark:text-gray-300">{message}</p>
        <div className="flex justify-end gap-4">
          <Button variant="outline" onClick={onCancel}>Cancel</Button>
          <Button variant="destructive" onClick={onConfirm}>Confirm</Button>
        </div>
      </div>
    </div>
  );
}
