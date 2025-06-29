import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AnswerOption from "./AnswerOption";

export default function QuestionCard({ 
  question, 
  questionNumber, 
  totalQuestions, 
  selectedAnswer, 
  onAnswerSelect 
}) {
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Question {questionNumber}</CardTitle>
          <Badge variant="secondary">
            {questionNumber} of {totalQuestions}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Question Text */}
        <div className="text-foreground text-base leading-relaxed">
          {question.text}
        </div>
        
        {/* Answer Options */}
        <div className="space-y-3">
          {question.options?.map((option, index) => (
            <AnswerOption
              key={index}
              option={option}
              index={index}
              isSelected={selectedAnswer === option}
              onSelect={onAnswerSelect}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}