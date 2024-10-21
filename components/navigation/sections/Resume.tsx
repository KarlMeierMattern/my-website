import { resumeData } from "@/components/navigation/userData";

type ResumeItem = {
  category: string;
  title: string;
  description: string;
  details: string;
};

type ResumeProps = {
  item: ResumeItem;
};

const ResumeCategory = ({ item }: ResumeProps) => {
  return (
    <tr>
      <th className="p-6 text-4xl text-left" colSpan={2}>
        {item.category}
      </th>
    </tr>
  );
};

const ResumeRow = ({ item }: ResumeProps) => {
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
      rows.push(<ResumeCategory item={item} key={`category-${index}`} />);
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
