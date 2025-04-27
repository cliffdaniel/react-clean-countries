import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

interface CustomSelectProps {
    id: string;
    label: string;
    placeholder: string;
    options: string[];
    value: string;
    onValueChange: (value: string) => void;
    ariaLabel: string;
}

export const CustomSelect = ({
    id,
    label,
    placeholder,
    options,
    value,
    onValueChange,
    ariaLabel,
}: CustomSelectProps) => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="flex flex-col w-full md:w-48">
            <label htmlFor={id} className="text-sm font-medium mb-1">
                {label}
            </label>
            <Select value={value} onValueChange={onValueChange}>
                <SelectTrigger id={id} aria-label={ariaLabel}>
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent className="max-h-72 overflow-y-auto">
                    <div className="px-2 py-2 sticky top-0 bg-white z-10">
                        <Input
                            id={`${id}-search`}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder={`Buscar ${label.toLowerCase()}...`}
                            aria-label={`Buscar ${label.toLowerCase()}`}
                        />
                    </div>
                    <SelectItem value="all">Todos</SelectItem>
                    {options.map((option) => (
                        <SelectItem
                            key={option}
                            value={option}
                            className={
                                searchTerm &&
                                !option.toLowerCase().includes(searchTerm.toLowerCase())
                                    ? 'hidden'
                                    : ''
                            }
                        >
                            {option}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
};
