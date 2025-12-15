import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { FileDown, Terminal, MapPin } from 'lucide-react';

const Hero = () => {
    return (
        <section style={{
            minHeight: '80vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
            padding: '0 var(--spacing-md)'
        }}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <span style={{
                    color: 'var(--accent-primary)',
                    fontFamily: 'var(--font-mono)',
                    marginBottom: 'var(--spacing-md)',
                    display: 'block'
                }}>
                    Hi, my name is
                </span>

                <h1 style={{
                    fontSize: 'clamp(3rem, 8vw, 5rem)',
                    fontWeight: 800,
                    lineHeight: 1.1,
                    margin: 0,
                    background: 'linear-gradient(to right, #ffffff, #a1a1aa)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>
                    {resumeData.name}.
                </h1>

                <h2 style={{
                    fontSize: 'clamp(2rem, 5vw, 4rem)',
                    fontWeight: 700,
                    color: 'var(--text-muted)',
                    marginTop: 'var(--spacing-xs)',
                    marginBottom: 'var(--spacing-lg)'
                }}>
                    {resumeData.title}.
                </h2>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{ maxWidth: '600px' }}
            >
                <p style={{
                    fontSize: '1.1rem',
                    lineHeight: 1.6,
                    color: 'var(--text-secondary)',
                    marginBottom: 'var(--spacing-lg)'
                }}>
                    {resumeData.summary}
                </p>

                <div style={{ display: 'flex', gap: 'var(--spacing-md)', flexWrap: 'wrap' }}>
                    <a
                        href="/src/assets/docs/Patrick_Siu_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 'var(--spacing-sm)',
                            padding: '12px 24px',
                            borderRadius: '4px',
                            background: 'var(--accent-gradient)',
                            color: 'white',
                            textDecoration: 'none',
                            fontWeight: 600,
                            transition: 'var(--transition-fast)'
                        }}
                    >
                        <FileDown size={20} />
                        Download Resume
                    </a>

                    {/* Location removed */}
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
