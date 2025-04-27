import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MainLayout } from '../MainLayout';

describe('MainLayout', () => {
    it('renders children correctly', () => {
        render(
            <MainLayout>
                <h1>Test Content</h1>
            </MainLayout>
        );

        expect(screen.getByText('Test Content')).toBeInTheDocument();
    });

    it('has the correct layout structure', () => {
        render(
            <MainLayout>
                <div>Child</div>
            </MainLayout>
        );

        const main = screen.getByRole('main');
        expect(main).toHaveClass('min-h-screen', 'flex', 'flex-col', 'items-center', 'p-4');
    });
});
