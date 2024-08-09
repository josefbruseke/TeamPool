'use client';

import { ChangeEvent, FormEvent, useState } from "react";

interface SearchBarProps {
    placeholder?: string;
    onSearch: (query: string) => void;
}

export default function SearchBar({ placeholder, onSearch }: SearchBarProps) {
    const [query, setQuery] = useState<string>("");

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    const handleSearch = (event: FormEvent) => {
        event.preventDefault();
        onSearch(query);
    };

    return (
        <form onSubmit={handleSearch} className="flex  w-full max-w-md  bg-white rounded-full shadow-md">
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder={placeholder || "Search..."}
                className="flex-grow px-4 py-2 rounded-l-full focus:outline-none"
            />
            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-r-full hover:bg-blue-600 focus:outline-none"
            >
                Search
            </button>
        </form>
    );
};
