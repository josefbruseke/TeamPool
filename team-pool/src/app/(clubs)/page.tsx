import ClubCard from "../components/ReserveCard";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-4 gap-8 w-full max-w-4xl items-center justify-between font-mono text-sm lg:flex">
        {/* Conteúdo da célula 1 */}
        <ClubCard/>        
      </div>
    </main>
  );
}
