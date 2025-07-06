import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import LoadingButton from "@/components/LoadingButton";
import { Select, SelectItem, SelectTrigger, SelectValue, SelectContent } from "@/components/ui/select";
import { useUpdateQuestion } from "@/hooks/admin/questions/UseUpdateQuestion";

export default function UpdateQuestionForm({ question, onSuccess }) {
  const { isPending: isLoading, mutate: updateQuestion } = useUpdateQuestion();

  const [formData, setFormData] = useState({
    text: question?.text || "",
    type: question?.type || "multiple-choice",
    options: question?.options?.length ? question.options : ["", "", "", ""],
    correctAnswer: question?.correctAnswer || "",
    points: question?.points || 1,
  });

  useEffect(() => {
    if (formData.type === "true-false") {
      setFormData((prev) => ({
        ...prev,
        options: ["True", "False"],
        correctAnswer: prev.correctAnswer === "True" || prev.correctAnswer === "False" ? prev.correctAnswer : "True",
      }));
    } else if (formData.type === "short-answer") {
      setFormData((prev) => ({ ...prev, options: [], correctAnswer: "" }));
    } else if (formData.type === "multiple-choice") {
      setFormData((prev) => ({
        ...prev,
        options: prev.options.length ? prev.options : ["", "", "", ""],
      }));
    }
  }, [formData.type]);

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "number" ? parseInt(value) : value,
    }));
  };

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...formData.options];
    updatedOptions[index] = value;
    setFormData((prev) => ({ ...prev, options: updatedOptions }));
  };
const handleSubmit = (e) => {
  e.preventDefault();

  const payload = {
    text: formData.text,
    type: formData.type,
    correctAnswer: formData.correctAnswer,
    points: formData.points,
  };

  if (formData.type === "multiple-choice") {
    payload.options = formData.options;
  }

  updateQuestion(
    { id: question._id, data: payload },
    {
      onSuccess: () => {
        onSuccess?.();
      },
    }
  );
};

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block font-medium mb-1">Question Text</label>
        <Textarea name="text" value={formData.text} onChange={handleInputChange} required />
      </div>

      <div>
        <label className="block font-medium mb-1">Type</label>
        <Select
          value={formData.type}
          onValueChange={(value) => setFormData((prev) => ({ ...prev, type: value }))}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="multiple-choice">Multiple Choice</SelectItem>
            <SelectItem value="true-false">True / False</SelectItem>
            <SelectItem value="short-answer">Short Answer</SelectItem>
          </SelectContent>
        </Select>
      </div>

    {formData.type === "multiple-choice" && (
  <div className="space-y-2">
    <label className="block font-medium mb-1">Options</label>
    {formData.options.map((opt, idx) => (
      <Input
        key={idx}
        value={opt}
        onChange={(e) => handleOptionChange(idx, e.target.value)}
        placeholder={`Option ${idx + 1}`}
        required
      />
    ))}

    <div>
      <label className="block font-medium mb-1 mt-3">Correct Answer</label>
      <Select
        value={formData.correctAnswer}
        onValueChange={(val) => setFormData((prev) => ({ ...prev, correctAnswer: val }))}
      >
        <SelectTrigger>
          <SelectValue placeholder="Select correct answer" />
        </SelectTrigger>
        <SelectContent>
  {formData.options
    .filter((opt) => opt.trim() !== "") 
    .map((opt, idx) => (
      <SelectItem key={idx} value={opt}>
        {opt}
      </SelectItem>
    ))}
</SelectContent>

      </Select>
    </div>
  </div>
)}


      {formData.type === "true-false" && (
        <div>
          <label className="block font-medium mb-1">Correct Answer</label>
          <Select
            value={formData.correctAnswer}
            onValueChange={(val) => setFormData((prev) => ({ ...prev, correctAnswer: val }))}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select correct answer" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="True">True</SelectItem>
              <SelectItem value="False">False</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}

      {formData.type === "short-answer" && (
        <div>
          <label className="block font-medium mb-1">Expected Answer</label>
          <Input
            name="correctAnswer"
            value={formData.correctAnswer}
            onChange={handleInputChange}
            required
          />
        </div>
      )}

      <div>
        <label className="block font-medium mb-1">Points</label>
        <Input type="number" name="points" value={formData.points} onChange={handleInputChange} required />
      </div>

      <LoadingButton type="submit" className="w-full" loading={isLoading}>
        Save Changes
      </LoadingButton>
    </form>
  );
}  
