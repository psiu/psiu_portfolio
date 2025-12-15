import React from 'react';
import { motion } from 'framer-motion';

const Layout = ({ children }) => {
    return (
        <div className="layout-container" style={{
            maxWidth: 'var(--max-width)',
            margin: '0 auto',
            padding: '0 var(--spacing-md)',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <header style={{
                height: 'var(--header-height)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                position: 'sticky',
                top: 0,
                background: 'rgba(10, 10, 10, 0.8)',
                backdropFilter: 'blur(10px)',
                zIndex: 100,
                marginBottom: 'var(--spacing-lg)'
            }}>
                <div className="logo" style={{ fontWeight: 'bold', fontSize: '1.5rem', background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    PS
                </div>
                <nav>
                    {/* Navigation links will go here */}
                </nav>
            </header>

            <main style={{ flex: 1 }}>
                {children}
            </main>

            <footer style={{
                marginTop: 'var(--spacing-xl)',
                padding: 'var(--spacing-lg) 0',
                borderTop: '1px solid var(--border-color)',
                textAlign: 'center',
                color: 'var(--text-muted)'
            }}>
                <p>© {new Date().getFullYear()} Patrick Siu. Built with React & Vite.</p>
            </footer>
        </div>
    );
};

export default Layout;
