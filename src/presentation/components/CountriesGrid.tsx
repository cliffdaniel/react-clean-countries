import React, { useEffect, useRef, useState, useTransition } from 'react';
import { Country } from '@/domain/entities/Country';
import { CountryItem } from '@/presentation/components/CountryItem';

interface CountriesGridProps {
    countries: Country[];
}

export const CountriesGrid = ({ countries }: CountriesGridProps) => {
    const [visibleCount, setVisibleCount] = useState(20);
    const loadMoreRef = useRef<HTMLDivElement | null>(null);
    const [isPending, startTransition] = useTransition();

    useEffect(() => {
        if (!loadMoreRef.current) return;

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                startTransition(() => {
                    setVisibleCount((prev) => Math.min(prev + 20, countries.length));
                });
            }
        });

        observer.observe(loadMoreRef.current);

        return () => observer.disconnect();
    }, [countries.length, startTransition]);

    return (
        <>
            <section className="w-fit mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center justify-center gap-y-10 gap-x-8 mt-10 mb-5">
                {countries.slice(0, visibleCount).map((country) => (
                    <CountryItem key={country.code} country={country} />
                ))}
            </section>

            {isPending && (
                <div className="text-center py-10 text-gray-500 text-sm">
                    Cargando más países...
                </div>
            )}

            {visibleCount < countries.length && <div ref={loadMoreRef} className="h-10" />}

            {countries.length === 0 && (
                <div className="text-center py-20 px-10">
                    <h2 className="font-bold text-2xl md:text-4xl mb-4">
                        No se encontraron países.
                    </h2>
                </div>
            )}
        </>
    );
};
