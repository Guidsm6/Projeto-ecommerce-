type CardProps = {
  title: string;
  value: string | number;
};

export default function Card({ title, value }: CardProps) {
  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h3 className="text-sm text-gray-500">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}
