import React from "react";
import Button from "./Button";
import { AlertCircle } from "lucide-react";

interface ErrorStateProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
  resetText?: string;
}

export default function ErrorState({
  title = "Something went wrong",
  message = "An unexpected error occurred while loading this section. Please try again or return to the main pathway.",
  onRetry,
  resetText = "Try Again",
}: ErrorStateProps) {
  return (
    <div
      role="alert"
      className="p-8 md:p-12 border border-[#B3261E]/30 bg-[#FFFFFF] rounded-[2px] max-w-2xl mx-auto my-12 text-center"
    >
      <div className="w-10 h-10 rounded-full bg-[#B3261E]/10 text-[#B3261E] flex items-center justify-center mx-auto mb-4">
        <AlertCircle className="w-5 h-5" />
      </div>
      <h3 className="font-serif text-2xl text-[#092948] mb-2">{title}</h3>
      <p className="text-sm text-[#000000]/70 mb-6 max-w-md mx-auto">{message}</p>
      <div className="flex items-center justify-center gap-4">
        {onRetry && (
          <button
            type="button"
            onClick={onRetry}
            className="rounded-full bg-[#092948] text-[#FEEED7] px-6 py-2 text-sm font-medium hover:bg-[#316A7E] transition-colors focus-ring-light"
          >
            {resetText}
          </button>
        )}
        <Button variant="pill-dark" href="/">
          Return Home
        </Button>
      </div>
    </div>
  );
}
