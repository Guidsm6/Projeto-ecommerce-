import Sidebar from "../../components/Sidebar";
import Header from "@/app/components/header";
import StatsOverview from "../../components/StatsOverview";
import StoreTable from "../../components/StoreTable";

export default function AdminDashboard() {
    return (
    <>
    <Header/>
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
        <Sidebar/>

      {/* Main content */}
      <div className="flex flex-col flex-1">
        
        <main className="flex-1 p-6 space-y-6 overflow-y-auto">
          <StatsOverview />
          <StoreTable />
        </main>
      </div>
    </div>
    </>
  );
}
