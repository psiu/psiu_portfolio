import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';

const Skills = () => {
    const categories = Object.keys(resumeData.skills).map(key => ({
        key,
        title: key.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase()),
        items: resumeData.skills[key]
    }));

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section id="skills" style={{ padding: 'var(--spacing-xl) 0' }}>
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                style={{ marginBottom: 'var(--spacing-lg)', borderLeft: '4px solid var(--accent-primary)', paddingLeft: 'var(--spacing-md)' }}
            >
                Technical Skills
            </motion.h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-lg)' }}>
                {categories.map((category, index) => (
                    <motion.div
                        key={category.key}
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        style={{
                            background: 'var(--bg-card)',
                            padding: 'var(--spacing-md)',
                            borderRadius: '8px',
                            border: '1px solid var(--border-color)'
                        }}
                    >
                        <h3 style={{ marginTop: 0, marginBottom: 'var(--spacing-md)', color: 'var(--accent-secondary)' }}>
                            {category.title}
                        </h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                            {category.items.map(skill => (
                                <motion.span
                                    key={skill}
                                    variants={item}
                                    style={{
                                        fontSize: '0.9rem',
                                        padding: '4px 12px',
                                        background: 'rgba(255,255,255,0.05)',
                                        borderRadius: '16px',
                                        border: '1px solid rgba(255,255,255,0.1)'
                                    }}
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
