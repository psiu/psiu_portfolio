import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { Briefcase } from 'lucide-react';

const Experience = () => {
    return (
        <section id="experience" style={{ padding: 'var(--spacing-xl) 0' }}>
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                style={{ marginBottom: 'var(--spacing-lg)', borderLeft: '4px solid var(--accent-secondary)', paddingLeft: 'var(--spacing-md)' }}
            >
                Experience
            </motion.h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
                {resumeData.experience.map((job, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        style={{
                            background: 'var(--bg-secondary)',
                            padding: 'var(--spacing-lg)',
                            borderRadius: '8px',
                            borderLeft: '2px solid var(--border-color)',
                            position: 'relative'
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: 'var(--spacing-md)' }}>
                            <div>
                                <h3 style={{ margin: 0, fontSize: '1.25rem' }}>{job.role}</h3>
                                <div style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>{job.company}</div>
                            </div>
                            <div style={{
                                fontFamily: 'var(--font-mono)',
                                color: 'var(--text-muted)',
                                fontSize: '0.9rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '6px'
                            }}>
                                <Briefcase size={14} />
                                {job.period}
                            </div>
                        </div>

                        <ul style={{ paddingLeft: '20px', margin: 0, color: 'var(--text-secondary)' }}>
                            {job.details.map((point, i) => (
                                <li key={i} style={{ marginBottom: '8px' }}>{point}</li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
