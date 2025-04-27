'use client';

import React, { useState, useMemo, useDeferredValue, useTransition } from 'react';
import { useCountries } from '@/application/use-cases/useCountries';
import { MainLayout } from '@/presentation/layouts/MainLayout';
import { Filters } from '@/presentation/components/Filters';
import { CountriesGrid } from '@/presentation/components/CountriesGrid';
import { Loader } from '@/components/ui/loader';
import { PageHeader } from '../components/PageHeader';

export const ListPage = () => {
    const { countries, loading, error } = useCountries();

    const [search, setSearch] = useState('');
    const [continent, setContinent] = useState('all');
    const [currency, setCurrency] = useState('all');

    const deferredSearch = useDeferredValue(search);

    const filteredCountries = useMemo(() => {
        return countries.filter((country) => {
            const matchSearch = country.name.toLowerCase().includes(deferredSearch.toLowerCase());
            const matchContinent = continent === 'all' || country.continent?.name === continent;
            const matchCurrency = currency === 'all' || country.currency === currency;
            return matchSearch && matchContinent && matchCurrency;
        });
    }, [countries, deferredSearch, continent, currency]);

    return (
        <MainLayout>
            <div className="space-y-4">
                <PageHeader
                    title="🌍 Listado de Países"
                    subtitle="Explora el mundo con Tailwind CSS"
                />

                <Filters
                    countries={countries}
                    search={search}
                    setSearch={setSearch}
                    continent={continent}
                    setContinent={setContinent}
                    currency={currency}
                    setCurrency={setCurrency}
                />
                {loading ? (
                    <div className="flex justify-center items-center min-h-[200px]">
                        <Loader className="h-10 w-10" />
                    </div>
                ) : (
                    <CountriesGrid countries={filteredCountries} />
                )}
            </div>
        </MainLayout>
    );
};
