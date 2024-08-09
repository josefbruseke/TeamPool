'use client';

import React, { useState } from 'react';
import DropdownCheckbox from "../components/dropdown"; // Corrija o caminho do componente se necessário
import PoolCard from "../components/PoolCard";
import Searchbar from "../components/Searchbar";

const sportsOptions = [
    { label: 'Futebol', value: 'soccer' },
    { label: 'Basquete', value: 'basketball' },
    { label: 'Vôlei', value: 'volei' },
    { label: 'Futsal', value: 'futsal' },
];

const priceRangeOptions = [
    { label: 'R$ >5,00', value: 'range-1' },
    { label: 'R$ 5,00-10,00', value: 'range-2' },
    { label: 'R$ 10,00-15,00', value: 'range-3' },
    { label: 'R$ <15,00', value: 'range-4' },
]

export default function Pools() {
    const [selectedSports, setSelectedSports] = useState<string[]>([]);
    const [selectedPriceRange, setSelectedPriceRange] = useState<string[]>([]);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    const handleSportChange = (selected: string[]) => {
        setSelectedSports(selected);
    };

    const handleselectedPriceRangeChange = (selected: string[]) => {
        setSelectedPriceRange(selected);
    };

    const handleToggleDropdown = (dropdown: string) => {
        setOpenDropdown(prev => (prev === dropdown ? null : dropdown));
    };

    return (
        <main className="flex min-h-screen flex-col ">
            <div className='flex flex-col items-center gap-y-4'>
                <div className='flex flex-row gap-x-2'>
                    <DropdownCheckbox
                        options={sportsOptions}
                        title='Esportes'
                        selectedOptions={selectedSports}
                        onChange={handleSportChange}
                        isOpen={openDropdown === 'sports'}
                        onToggle={() => handleToggleDropdown('sports')}
                    />
                    <DropdownCheckbox
                        options={priceRangeOptions}
                        title='Preços'
                        selectedOptions={selectedPriceRange}
                        onChange={handleselectedPriceRangeChange}
                        isOpen={openDropdown === 'priceRange'}
                        onToggle={() => handleToggleDropdown('priceRange')}
                    />
                    <DropdownCheckbox
                        options={sportsOptions}
                        title='Vagas Disponíveis'
                        selectedOptions={selectedSports}
                        onChange={handleSportChange}
                        isOpen={openDropdown === 'availability'}
                        onToggle={() => handleToggleDropdown('availability')}
                    />
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-4 gap-8 w-full max-w-4xl items-center text-sm lg:flex">
                <PoolCard />
                <PoolCard />
            </div>
        </main>
    );
}
