import Navbar from "@/components/navigation/navbar/Navbar";
import Sidebar from "@/components/Sidebar"

export default function Home() {
  return (
    <main className="bg-stone-400 grid grid-cols-[0.5fr_1fr] min-h-screen font-[family-name:var(--font-geist-sans)]">
      <section className="col-start-1 w-full h-full">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 text-5xl">Welcome</h1>
        <Sidebar />
        {/* <Button></Button> */}
        </section>
      <section className="col-start-2">
        <Navbar />
      </section>
    </main>
  );
}
