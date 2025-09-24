export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r h-full p-4">
      <nav className="space-y-2">
        <a href="#" className="block px-3 py-2 rounded hover:bg-gray-100">
          Dashboard
        </a>
        <a href="#" className="block px-3 py-2 rounded hover:bg-gray-100">
          Lojas
        </a>
        <a href="#" className="block px-3 py-2 rounded hover:bg-gray-100">
          Produtos
        </a>
        <a href="#" className="block px-3 py-2 rounded hover:bg-gray-100">
          Usuários
        </a>
        <a href="#" className="block px-3 py-2 rounded hover:bg-gray-100">
          Configurações
        </a>
      </nav>
    </aside>
  );
}
