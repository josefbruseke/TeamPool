'use client';

import React, { useState } from 'react';
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai';

interface DropdownCheckboxProps {
    options: Array<{ label: string; value: string }>;
    selectedOptions: string[];
    title: string;
    isOpen: boolean;
    onChange: (selected: string[]) => void;
    onToggle: () => void;
}

export default function DropdownCheckbox({ options, selectedOptions, title, isOpen, onChange, onToggle }: DropdownCheckboxProps) {
    const handleToggleDropdown = () => {
        onToggle(); // Chama a função para alternar o dropdown
    };

    const handleCheckboxChange = (value: string) => {
        let newSelectedOptions;
        if (selectedOptions.includes(value)) {
            newSelectedOptions = selectedOptions.filter(option => option !== value);
        } else {
            newSelectedOptions = [...selectedOptions, value];
        }
        onChange(newSelectedOptions);
    };

    return (
        <div className="relative flex flex-col items-center text-left">
            <button
                className="inline-flex justify-center w-22 px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                onClick={handleToggleDropdown}
            >
                {title} {!isOpen ? (<AiOutlineCaretDown className='h-6' />) : <AiOutlineCaretUp className='h-6' />}
            </button>
            {isOpen && (
                <div className="absolute top-14 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                    <div className="py-1">
                        {options.map(option => (
                            <label key={option.value} className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer ">
                                <input
                                    type="checkbox"
                                    value={option.value}
                                    checked={selectedOptions.includes(option.value)}
                                    onChange={() => handleCheckboxChange(option.value)}
                                    className="form-checkbox h-4 w-4 text-blue-600"
                                />
                                <span className="ml-2">{option.label}</span>
                            </label>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};
