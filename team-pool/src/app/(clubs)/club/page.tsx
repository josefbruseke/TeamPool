"use client"

import Button from "@/app/components/Button";
import EventCalender from "@/app/components/EventCalender";
import { addDays } from "date-fns";
import { useState } from "react";

 
export default function Page() {
	const [active, setActive] = useState<'descricao' | 'horarios'>('descricao')


  return (	
	<div className="h-screen flex flex-col items-center">
		<div className='flex flex-col md:flex-row gap-4 md:gap-20 p-4 pl-4 md:pl-20 mb-10'>
			<Button color={active === 'descricao' ? 'bg-[#1B1B1B] text-white' : 'bg-[#EFEDED]'} onClick={() => setActive('descricao')} className="hover:bg-[#1B1B1B] hover:text-white">Descrição</Button>
			<Button color={active === 'horarios' ? 'bg-[#1B1B1B] text-white' : 'bg-[#EFEDED]'} onClick={() => setActive('horarios')} className="hover:bg-[#1B1B1B] hover:text-white">Horários</Button>
		</div>
		{active === 'descricao' && (
			<>
			<div className="bg-blue-100 h-80 w-1/2 rounded-xl">
				  {/* Conteúdo da descrição */}
			  </div>
			  <div className="flex m-10 gap-10 w-1/2 h-1/3">
					<div className="bg-blue-100 w-full rounded-xl">
						  {/* Conteúdo do primeiro bloco */}
					  </div>
					  <div className="bg-blue-100 w-full rounded-xl">
						  {/* Conteúdo do segundo bloco */}
					  </div>
				  </div>
				  <EventCalender events={[
					{date: addDays(new Date(), 6), title: "Futebol"}
				  	]}
				  />
			</>
		)}

		{active === 'horarios' && (
			<div className="bg-blue-100 h-80 w-1/2 rounded-xl">
			<EventCalender events={[]}/>
			</div>
		)}
		</div>
  )
}