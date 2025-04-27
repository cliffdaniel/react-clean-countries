import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ListPage } from '@/presentation/pages/ListPage';
import { CountryDetailPage } from '@/presentation/pages/CountryDetailPage';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<ListPage />} />
            <Route path="/country/:code" element={<CountryDetailPage />} />
        </Routes>
    );
};
