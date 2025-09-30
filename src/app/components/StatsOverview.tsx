import Card from "./Card";

export default function StatsOverview() {
  return (
    <section>
      <h2 className="text-lg font-semibold mb-4">Visão Geral</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card title="Lojas cadastradas" value="12" />
        <Card title="Produtos ativos" value="340" />
        <Card title="Usuários" value="1.250" />
      </div>
    </section>
  );
}
