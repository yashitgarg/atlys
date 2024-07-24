import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-h-screen w-full bg-[#131517] text-white">
      <main className="container mx-auto px-4 py-8 h-full">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
