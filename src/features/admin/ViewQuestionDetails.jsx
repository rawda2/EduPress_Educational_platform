import { Badge } from "@/components/ui/badge";

import { formatDate } from "@/lib/utils";

export default function ViewQuestionDetails({ question }) {
  if (!question)
    return <p className="text-muted-foreground">No question data available.</p>;

  return (
    <div className="w-full space-y-2">
      <p>
        <strong>Question:</strong> {question.text}
      </p>
      <p>
        <strong>Type:</strong>{" "}
        <Badge variant="outline" className="capitalize">
          {question.type}
        </Badge>
      </p>
      <p>
        <strong>Points:</strong> {question.points}
      </p>

      {question.type === "multiple-choice" && (
        <div>
          <strong>Options:</strong>
          <ul className="list-disc list-inside pl-4 mt-1 space-y-1">
            {question.options.map((opt, idx) => (
              <li
                key={idx}
                className={`${
                  opt === question.correctAnswer
                    ? "font-semibold text-green-600"
                    : ""
                }`}
              >
                {opt}
              </li>
            ))}
          </ul>
        </div>
      )}

      {(question.type === "true-false" || question.type === "short-answer") && (
        <p>
          <strong>Answer:</strong>{" "}
          <span className="text-green-600 dark:text-green-400 font-semibold">
            {question.correctAnswer}
          </span>
        </p>
      )}

      <div className="pt-4 space-y-1 text-sm text-muted-foreground">
        <p>
          <strong>Created At:</strong>{" "}
          {/* {new Date(question.createdAt).toLocaleString()} */}
          {formatDate(question.createdAt)}
        </p>
        <p>
          <strong>Updated At:</strong>{" "}
          {/* {new Date(question.updatedAt).toLocaleString()} */}
          {formatDate(question.updatedAt)}
        </p>
      </div>
    </div>
  );
}
