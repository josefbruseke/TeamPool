import Button from "./Button";

export default function PoolCard() {
    return (
        <div className="relative bg-[#1971B4]  rounded-xl mt-10 shadow-lg transition-transform transform hover:scale-105">
            <span className="flex bg-green-400  justify-center text-white text-x font-semibold px-2.5 py-0.5 rounded-t-xl">Futebol</span>
            <div className="p-2">
                <div className="p-8 pt-4">
                    <div className="flex flex-col justify-start text-white space-y-2">

                        <p className="font-semibold">🗓️ 07/08 | 22:30-23:30</p>
                        <p> 📍Paula Ramos</p>
                        <p className="">👤 Josef</p>


                    </div>
                    <div className="flex justify-center items-end mt-4">
                        <Button className="bg-white text-[#1971B4] px-4 py-2 rounded-lg shadow-md transition-colors hover:bg-gray-200">
                            Juntar-se
                        </Button>
                    </div>
                </div >
                <div className="flex justify-between">
                    <p className="text-white">R$ 8,30</p>
                    <p className="text-white">9/16</p>
                </div>
            </div>
        </div>

    )
}
