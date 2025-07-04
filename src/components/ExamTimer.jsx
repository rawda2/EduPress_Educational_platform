import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, AlertTriangle, RefreshCw, Wifi, WifiOff } from "lucide-react";
import { useExamTimer } from "@/hooks/useExamTimer";

export default function ExamTimer({ examId }) {
  const { 
    formattedTime, 
    isExpired, 
    isWarning, 
    error, 
    isLoading, 
    retry 
  } = useExamTimer(examId);

  // Show error state
  if (error) {
    return (
      <Card className="bg-destructive/10 border-destructive">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-destructive">
              <WifiOff className="w-5 h-5" />
              <div>
                <span className="font-medium block">Connection Error</span>
                <span className="text-sm">{error}</span>
              </div>
            </div>
            <Button 
              variant="outline" 
              size="sm"
              onClick={retry}
              className="text-destructive border-destructive hover:bg-destructive/10"
            >
              <RefreshCw className="w-4 h-4 mr-1" />
              Retry
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Show loading state
  if (isLoading) {
    return (
      <Card className="bg-card">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-muted-foreground animate-pulse" />
              <span className="text-sm font-medium">Loading time...</span>
            </div>
            <Badge variant="secondary" className="text-lg font-mono">
              --:--
            </Badge>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Show expired state
  if (isExpired) {
    return (
      <Card className="bg-destructive/10 border-destructive">
        <CardContent className="p-4">
          <div className="flex items-center gap-2 text-destructive">
            <AlertTriangle className="w-5 h-5" />
            <span className="font-medium">Time Expired</span>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Show normal timer state
  return (
    <Card className={isWarning ? "bg-destructive/10 border-destructive" : "bg-card"}>
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <Clock className={`w-5 h-5 ${isWarning ? "text-destructive" : "text-muted-foreground"}`} />
              <Wifi className="w-3 h-3 text-green-500" />
            </div>
            <span className="text-sm font-medium">Time Remaining</span>
          </div>
          <Badge 
            variant={isWarning ? "destructive" : "secondary"}
            className={`text-lg font-mono ${isWarning ? "animate-pulse" : ""}`}
          >
            {formattedTime}
          </Badge>
        </div>
        {isWarning && (
          <div className="mt-2 text-xs text-destructive">
            ⚠️ Less than 5 minutes remaining
          </div>
        )}
      </CardContent>
    </Card>
  );
}