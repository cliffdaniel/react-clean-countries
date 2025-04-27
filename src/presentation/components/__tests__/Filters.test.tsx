import { render, screen } from '@testing-library/react';
import { Filters } from '../Filters';
import { describe, it, expect } from 'vitest';
import { mockCountries } from '@/__mocks__/countries';

describe('Filters', () => {
    it('renders all filter inputs correctly', () => {
        render(
            <Filters
                countries={mockCountries}
                search=""
                setSearch={() => {}}
                continent="all"
                setContinent={() => {}}
                currency="all"
                setCurrency={() => {}}
            />
        );

        expect(screen.getByLabelText('Buscar país')).toBeInTheDocument();
        expect(screen.getByLabelText('Filtrar por continente')).toBeInTheDocument();
        expect(screen.getByLabelText('Filtrar por moneda')).toBeInTheDocument();
    });
});
