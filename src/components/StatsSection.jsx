import { BookOpenText, CalendarRange, UserCheck, Users } from "lucide-react";

const stats = [
  {
    title: "Student",
    icon: Users,
    value: "2,000+",
  },
  {
    title: "Instructor",
    icon: UserCheck,
    value: "30+",
  },
  {
    title: "Lessons",
    icon: BookOpenText,
    value: "100+",
  },
  {
    title: "Years of Experience",
    icon: CalendarRange,
    value: "10",
  },
];

export default function StatsSection() {
  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="border rounded-xl">
        <div className="p-4 lg:p-8 rounded-xl">
          <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-y-20 gap-x-12">
            {stats.map(({ title, icon, value }) => {
              const Icon = icon;
              return (
                <div
                  key={title}
                  className="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-border before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0"
                >
                  <Icon className="shrink-0 size-6 sm:size-8 mx-auto" />
                  <div className="mt-3 sm:mt-5">
                    <h3 className="text-lg sm:text-3xl font-semibold text-primary">
                      {value}
                    </h3>
                    <p className="mt-1 text-sm sm:text-base text-muted-foreground">
                      {title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
