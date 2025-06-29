import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { examApi } from '@/services/ExamAPI';
import { toast } from 'sonner';

export function useExamSubmission(examId, onSuccess) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const mutation = useMutation({
    mutationFn: (answers) => examApi.submitExam(examId, answers),
    onMutate: () => setIsSubmitting(true),
    onSuccess: (data) => {
      setIsSubmitting(false);
      toast.success('Exam submitted successfully!');
      onSuccess?.(data);
    },
    onError: (error) => {
      setIsSubmitting(false);
      toast.error('Failed to submit exam. Please try again.');
      console.error('Submission error:', error);
    },
  });

  const submitExam = (answers) => {
    // Format answers for API
    const formattedAnswers = Object.entries(answers).map(([questionId, selectedAnswer]) => ({
      questionId,
      selectedAnswer
    }));

    mutation.mutate(formattedAnswers);
  };

  return {
    submitExam,
    isSubmitting,
    error: mutation.error
  };
}