import Button from "./Button";


export default function ReserveCard() {
    return (
        <div className="bg-[#1971B4] w-80 p-2 rounded-xl text-white">
            <p>Status: Aberto</p>
            <p>Data: 11/05/2024</p>
            <p>Horário: 20:00-21:00</p>
            <p>Passes máximos: 16</p>
            <p>Passes disponíveis: 3</p>
            <Button className="h-5 m-2">Reservar</Button>
        </div>
    )
}