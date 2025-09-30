export default function StoreTable() {
  return (
    <section>
      <h2 className="text-lg font-semibold mb-4">Lojas</h2>
      <table className="w-full bg-white border rounded-lg shadow text-sm">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="px-4 py-2">Nome</th>
            <th className="px-4 py-2">Dono</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">Loja Exemplo</td>
            <td className="px-4 py-2">João Silva</td>
            <td className="px-4 py-2 text-green-600">Ativa</td>
            <td className="px-4 py-2 space-x-2">
              <button className="text-blue-600">Editar</button>
              <button className="text-red-600">Remover</button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
