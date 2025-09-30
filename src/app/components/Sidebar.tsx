export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white border-r border-gray-800 pt-16 h-full fixed left-0 top-0">
      <nav className="space-y-2 p-4">
        <a href="#" className="block px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-800 hover:text-gray-100">
          Dashboard
        </a>
        <a href="#" className="block px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-800 hover:text-gray-100">
          Lojas
        </a>
        <a href="#" className="block px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-800 hover:text-gray-100">
          Produtos
        </a>
        <a href="#" className="block px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-800 hover:text-gray-100">
          Usuários
        </a>
        <a href="#" className="block px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-800 hover:text-gray-100">
          Configurações
        </a>
      </nav>
    </aside>
  );
}
