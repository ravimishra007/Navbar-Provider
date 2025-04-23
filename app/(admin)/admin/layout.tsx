import AdminNavbar from "@/components/AdminNavbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <AdminNavbar />

      <div className="flex-1 flex bg-white dark:bg-gray-900 text-black dark:text-white">
        <div className="flex flex-col w-full h-full">       
        <div className=" h-[calc(100vh-3.5rem)] flex-1 overflow-x-auto">
          {children}
        </div>
        </div>
      </div>
    </div>
  );
}
