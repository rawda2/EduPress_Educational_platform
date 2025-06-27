import { Button } from "@/components/ui/button";

export default function Mentor() {
  return (
    <div className="flex my-10 gap-x-20 justify-between col-span-2">
      {/* mentor info */}
      <div className="md:w-[60%] space-y-12 [&>div]:space-y-3 md:[&_h1]:text-2xl [&_h1]:text-xl [&_h1]:font-bold [&_h1]:text-foreground [&_p]:text-gray-600 [&_li]:text-gray-600">
        {/* the gray color on the p and li i couldnt make it work from the colors in the index file */}
        <div className="[&_p]:!text-sm">
          <p>{data.instructor.section}</p>
          <h1>{data.instructor.name}</h1>
          <p>{data.instructor.title}</p>
          <div className="flex w-fit gap-x-10 justify-between items-center">
            <div>
              <p>Total Students</p>
              <h1>{data.instructor.students}</h1>
            </div>
            <div>
              <p>Reviews</p>
              <h1>{data.instructor.reviews}</h1>
            </div>
          </div>
        </div>
        {/* more details and shit */}
        {data.details.map(({ section, content }, i) => (
          <div key={i}>
            <h1>
              {section} {data.instructor.name}
            </h1>
            {Array.isArray(content) ? (
              <ul className="list-disc pl-6">
                {content.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>{content}</p>
            )}
          </div>
        ))}
      </div>
      {/* avatar and contacts links */}
      <div className="flex flex-col gap-y-10 max-md:hidden items-start">
        <img
          src={data.instructor.avatar}
          alt={data.instructor.name}
          className="size-52 rounded-full object-cover object-top"
        />
        <div className="flex flex-col items-center w-full gap-y-2">
          {data.contact.map(({ label }) => (
            <Button
              variant="outline"
              className="w-full border-foreground hover:border-muted"
              key={label}
            >
              {label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}

const data = {
  instructor: {
    section: "Instructor",
    name: "Ronald Richards",
    title: "Web developer, UX/UI Designer, and Teacher",
    students: 1000,
    reviews: 154,
    avatar: "/mentor.png",
  },
  details: [
    {
      setion: "About",
      content:
        "Ronald Richard is a highly skilled UX/UI Designer with over a decade of experience in crafting user-centric digital solutions. With a background in graphic design and a keen eye for detail, Ronald specializes in creating intuitive interfaces that delight users and drive business results.",
    },
    {
      section: "Areas of Expertise",
      content: [
        "User Experience (UX) Design",
        "User Interface (UI) Design",
        "Information Architecture",
        "Interaction Design",
        "Visual Design",
        "Usability Testing",
        "Wireframing and Prototyping",
        "Design Thinking",
      ],
    },
    {
      section: "Professional Experience",
      content:
        "Ronald Richard has an extensive professional background in UX/UI design, having worked with renowned companies such as [Company Name] and [Company Name]. His portfolio includes a diverse range of projects spanning web applications, mobile apps, and e-commerce platforms.",
    },
  ],
  contact: [
    { label: "Website", link: "" },
    { label: "Twitter", link: "" },
    { label: "Youtube", link: "" },
  ],
};
