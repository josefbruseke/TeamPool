
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        {/* Conteúdo da célula 1 */}
        <div className="bg-gray-200 p-4">
          Conteúdo da célula 1
        </div>
        
        {/* Conteúdo da célula 2 */}
        <div className="bg-gray-200 p-4">
          Conteúdo da célula 2
        </div>
        
        {/* Conteúdo da célula 3 */}
        <div className="bg-gray-200 p-4">
          Conteúdo da célula 3
        </div>
        
        {/* Conteúdo da célula 4 */}
        <div className="bg-gray-200 p-4">
          Conteúdo da célula 4
        </div>
      </div>
    </main>
  );
}
