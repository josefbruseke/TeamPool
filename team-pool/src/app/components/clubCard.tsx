import Link from "next/link";

export default function ClubCard() {
    return (
        <Link href="/club">
            <div className="flex bg-[#1971B4] p-4 rounded-xl gap-4">
                <div className="w-1/3">
                    <p>imagem</p>
                </div>
                <div className="text-white">
                    <p className="mb-2">Paula Ramos Esporte Clube </p>
                    <p>Total de Reservas: 20</p>
                </div>
            </div>
        </Link>
    )
}