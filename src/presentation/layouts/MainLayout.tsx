import React from 'react';

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="min-h-screen flex flex-col items-center  p-4">
            <div className="w-full max-w-[1400px] px-4">{children}</div>
        </main>
    );
};
