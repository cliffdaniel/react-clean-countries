import { render, screen } from '@testing-library/react';
import { ContinentCombobox } from '../ui/ContinentCombobox';
import { describe, it, expect } from 'vitest';
import { mockCountries } from '@/__mocks__/countries';

describe('ContinentCombobox', () => {
    it('renders continent combobox with options', () => {
        render(
            <ContinentCombobox countries={mockCountries} continent="all" setContinent={() => {}} />
        );

        expect(screen.getByLabelText('Filtrar por continente')).toBeInTheDocument();
        expect(screen.getByText('Todos')).toBeInTheDocument();
    });
});
