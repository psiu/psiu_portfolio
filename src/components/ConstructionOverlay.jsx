import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Construction } from 'lucide-react';
import { resumeData } from '../data/resume';

const ConstructionOverlay = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 9999,
                background: 'rgba(5, 5, 5, 0.85)',
                backdropFilter: 'blur(12px)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem',
                textAlign: 'center'
            }}
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
                style={{
                    background: 'rgba(30, 30, 30, 0.6)',
                    padding: '3rem',
                    borderRadius: '16px',
                    border: '1px solid var(--border-color)',
                    maxWidth: '500px',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
                }}
            >
                <Construction size={48} style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem' }} />

                <h1 style={{
                    fontSize: '2rem',
                    marginBottom: '1rem',
                    background: 'var(--accent-gradient)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>
                    Under Construction
                </h1>

                <p style={{
                    color: 'var(--text-secondary)',
                    fontSize: '1.1rem',
                    marginBottom: '2rem',
                    lineHeight: 1.6
                }}>
                    We are currently refining the portfolio experience.
                    <br />
                    Please use my LinkedIn profile for now.
                </p>

                <a
                    href={resumeData.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '10px',
                        background: '#0077b5', // LinkedIn Blue
                        color: 'white',
                        padding: '12px 24px',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        fontWeight: 600,
                        transition: 'transform 0.2s',
                        boxShadow: '0 4px 12px rgba(0, 119, 181, 0.3)'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                    <Linkedin size={20} />
                    Visit LinkedIn Profile
                </a>
            </motion.div>
        </motion.div>
    );
};

export default ConstructionOverlay;
