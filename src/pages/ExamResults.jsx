import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Trophy, 
  CheckCircle, 
  XCircle, 
  Clock, 
  FileText, 
  Home,
  Loader2,
  AlertTriangle 
} from "lucide-react";
import { examApi } from '@/services/ExamAPI';

export default function ExamResults() {
  const { examId } = useParams();
  const navigate = useNavigate();
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchResults();
  }, [examId]);

  const fetchResults = async () => {
    try {
      const data = await examApi.getExamScore(examId);
      setResults(data);
      setError(null);
    } catch (err) {
      setError('Failed to load exam results');
      console.error('Error fetching results:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const getScoreColor = (percentage) => {
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getGrade = (percentage) => {
    if (percentage >= 90) return 'A+';
    if (percentage >= 85) return 'A';
    if (percentage >= 80) return 'B+';
    if (percentage >= 75) return 'B';
    if (percentage >= 70) return 'C+';
    if (percentage >= 65) return 'C';
    if (percentage >= 60) return 'D';
    return 'F';
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center min-h-[400px]">
          <Loader2 className="animate-spin h-8 w-8" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Alert className="max-w-2xl mx-auto">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      </div>
    );
  }

  const score = results?.score || 0;
  const totalQuestions = results?.totalQuestions || results?.total || 1;
  const correctAnswers = results?.correctAnswers || Math.round((score / 100) * totalQuestions);
  const percentage = Math.round((correctAnswers / totalQuestions) * 100);
  const grade = getGrade(percentage);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="flex justify-center">
            <Trophy className={`h-16 w-16 ${getScoreColor(percentage)}`} />
          </div>
          <h1 className="text-3xl font-bold">Exam Results</h1>
          <p className="text-muted-foreground">
            {results?.examTitle || 'Your exam has been completed'}
          </p>
        </div>

        {/* Score Overview */}
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Your Score</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center space-y-2">
              <div className={`text-6xl font-bold ${getScoreColor(percentage)}`}>
                {percentage}%
              </div>
              <Badge 
                variant={percentage >= 60 ? "default" : "destructive"}
                className="text-lg px-4 py-2"
              >
                Grade: {grade}
              </Badge>
            </div>
            
            <Progress value={percentage} className="h-3" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="space-y-1">
                <div className="text-2xl font-semibold text-green-600">
                  {correctAnswers}
                </div>
                <div className="text-sm text-muted-foreground">Correct</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-semibold text-red-600">
                  {totalQuestions - correctAnswers}
                </div>
                <div className="text-sm text-muted-foreground">Incorrect</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-semibold">
                  {totalQuestions}
                </div>
                <div className="text-sm text-muted-foreground">Total</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Performance Analysis */}
        <Card>
          <CardHeader>
            <CardTitle>Performance Analysis</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
              <div className="flex items-center gap-3">
                {percentage >= 60 ? (
                  <CheckCircle className="h-6 w-6 text-green-600" />
                ) : (
                  <XCircle className="h-6 w-6 text-red-600" />
                )}
                <div>
                  <p className="font-medium">
                    {percentage >= 60 ? 'Passed' : 'Failed'}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {percentage >= 60 
                      ? 'Congratulations! You have passed the exam.' 
                      : 'You need at least 60% to pass this exam.'
                    }
                  </p>
                </div>
              </div>
            </div>

            {results?.submittedAt && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>Submitted on {new Date(results.submittedAt).toLocaleString()}</span>
              </div>
            )}

            {results?.timeTaken && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <FileText className="h-4 w-4" />
                <span>Time taken: {results.timeTaken} minutes</span>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Detailed Results */}
        {results?.answers && (
          <Card>
            <CardHeader>
              <CardTitle>Question Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {results.answers.map((answer, index) => (
                  <div 
                    key={answer.questionId || index}
                    className="flex items-center justify-between p-3 border rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      {answer.isCorrect ? (
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-600" />
                      )}
                      <span className="font-medium">Question {index + 1}</span>
                    </div>
                    <Badge variant={answer.isCorrect ? "default" : "destructive"}>
                      {answer.isCorrect ? 'Correct' : 'Incorrect'}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Actions */}
        <div className="flex justify-center gap-4">
          <Button variant="outline" onClick={() => navigate('/dashboard')}>
            <Home className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
          <Button onClick={() => window.print()}>
            <FileText className="h-4 w-4 mr-2" />
            Print Results
          </Button>
        </div>
      </div>
    </div>
  );
}