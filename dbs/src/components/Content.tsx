import Table from "./Table";
import Title from "./Title";

const people = [
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  // More people...
];

export default function Content() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <Title />
      <Table people={people} />
    </div>
  );
}
