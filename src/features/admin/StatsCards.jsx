import { Users, BookOpen, FileQuestion, ListChecks } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function StatsCards({ stats }) {
  const cards = [
    {
      title: "Students",
      icon: <Users className="text-blue-500 dark:text-blue-400" />,
      value: stats?.students ?? 0,
      bgLight: "bg-white",
      bgDark: "dark:bg-gray-800",
      borderDark: "dark:border-gray-700",
    },
    {
      title: "Lessons",
      icon: <BookOpen className="text-green-500 dark:text-green-400" />,
      value: stats?.lessons ?? 0,
      bgLight: "bg-white",
      bgDark: "dark:bg-gray-800",
      borderDark: "dark:border-gray-700",
    },
    {
      title: "Exams",
      icon: <ListChecks className="text-purple-500 dark:text-purple-400" />,
      value: stats?.exams ?? 0,
      bgLight: "bg-white",
      bgDark: "dark:bg-gray-800",
      borderDark: "dark:border-gray-700",
    },
    {
      title: "Questions",
      icon: <FileQuestion className="text-yellow-500 dark:text-yellow-400" />,
      value: stats?.questions ?? 0,
      bgLight: "bg-white",
      bgDark: "dark:bg-gray-800",
      borderDark: "dark:border-gray-700",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {cards.map((card) => (
        <Card
          key={card.title}
          className={`shadow-sm border border-border ${card.bgLight} ${card.bgDark} ${card.borderDark} text-card-foreground`}
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
            {card.icon}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{card.value}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
