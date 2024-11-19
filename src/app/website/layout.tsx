import NavBar from "@/components/navbar/navbar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
        <>
        <div className="container-fluid">
            <NavBar />
        </div>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-6">
          {children}
        </div>
    </>
  );
}
