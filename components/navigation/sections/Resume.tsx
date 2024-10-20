import { resumeData } from "@/components/navigation/userData";

type ResumeItem = {
  category: string;
  title: string;
  description: string;
  details: string;
};

type ResumeCategoryProps = {
  category: string;
};

type ResumeRowProps = {
  item: ResumeItem;
};

const ResumeCategory = ({ category }: ResumeCategoryProps) => {
  return (
    <tr>
      <th className="p-6 text-4xl text-left" colSpan={2}>
        {category}
      </th>
    </tr>
  );
};

const ResumeRow = ({ item }: ResumeRowProps) => {
  return (
    <tr>
      <td className="flex flex-col p-6">
        <div className="flex justify-between">
          <strong>{item.title}</strong>
          <span className="text-right text-xs italic">{item.details}</span>
        </div>
        <p className="mt-2">{item.description}</p>
      </td>
    </tr>
  );
};

export default function Resume() {
  let lastCategory = "";
  const rows: JSX.Element[] = [];

  resumeData.forEach((item, index) => {
    if (item.category !== lastCategory) {
      rows.push(
        <ResumeCategory category={item.category} key={`category-${index}`} />
      );
      lastCategory = item.category;
    }
    rows.push(<ResumeRow item={item} key={`row-${index}`} />);
  });

  return (
    <div className="mt-40">
      <div className="text-8xl italic pb-12">Resume</div>
      <table>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}
