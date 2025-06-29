import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ExamNavigation({ 
  currentQuestion, 
  totalQuestions, 
  onPrevious, 
  onNext, 
  progress 
}) {
  const isFirstQuestion = currentQuestion === 1;
  const isLastQuestion = currentQuestion === totalQuestions;

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          {/* Previous Button */}
          <Button
            variant="outline"
            disabled={isFirstQuestion}
            onClick={onPrevious}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </Button>

          {/* Progress Info */}
          <div className="flex items-center gap-4">
            <div className="text-sm text-muted-foreground">
              Question {currentQuestion} of {totalQuestions}
            </div>
            <Badge variant="secondary">
              {progress.answered}/{progress.total} Answered
            </Badge>
          </div>

          {/* Next Button */}
          <Button
            variant="outline"
            disabled={isLastQuestion}
            onClick={onNext}
            className="flex items-center gap-2"
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}