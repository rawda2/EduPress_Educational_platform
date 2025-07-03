import { Button } from "@/components/ui/button";

export default function AnswerOption({ 
  option, 
  index, 
  isSelected, 
  onSelect 
}) {
  return (
    <Button
      variant={isSelected ? "default" : "outline"}
      className={`w-full justify-start text-left h-auto p-4 ${
        isSelected 
          ? "bg-primary text-primary-foreground" 
          : "bg-card hover:bg-accent hover:text-accent-foreground"
      }`}
      onClick={() => onSelect(option)}
    >
      <span className="flex items-center gap-3">
        <span className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-medium ${
          isSelected
            ? "bg-primary-foreground text-primary border-primary-foreground"
            : "border-border"
        }`}>
          {String.fromCharCode(65 + index)}
        </span>
        <span className="flex-1">{option}</span>
      </span>
    </Button>
  );
}