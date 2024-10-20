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
      <th colSpan={2}>{category}</th>
    </tr>
  );
};

const ResumeRow = ({ item }: ResumeRowProps) => {
  return (
    <tr>
      <td>{item.title}</td>
      <td>
        <p>{item.description}</p>
        <p>{item.details}</p>
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
    <table>
      <tbody>{rows}</tbody>
    </table>
  );
}
