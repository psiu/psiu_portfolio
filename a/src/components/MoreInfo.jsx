import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { GraduationCap, Heart } from 'lucide-react';

const MoreInfo = () => {
    return (
        <section id="more-info" style={{ padding: 'var(--spacing-xl) 0', display: 'grid', gap: 'var(--spacing-xl)', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>

            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <h2 style={{ marginBottom: 'var(--spacing-md)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <GraduationCap style={{ color: 'var(--accent-primary)' }} />
                    Education
                </h2>
                <div style={{
                    background: 'var(--bg-card)',
                    padding: 'var(--spacing-md)',
                    borderRadius: '8px',
                    border: '1px solid var(--border-color)'
                }}>
                    <h3 style={{ margin: 0 }}>{resumeData.education.school}</h3>
                    <p style={{ color: 'var(--text-secondary)', margin: '4px 0' }}>{resumeData.education.degree}</p>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>{resumeData.education.year}</p>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <h2 style={{ marginBottom: 'var(--spacing-md)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Heart style={{ color: 'var(--accent-secondary)' }} />
                    Interests
                </h2>
                <div style={{
                    background: 'var(--bg-card)',
                    padding: 'var(--spacing-md)',
                    borderRadius: '8px',
                    border: '1px solid var(--border-color)'
                }}>
                    <ul style={{ margin: 0, paddingLeft: '20px', color: 'var(--text-secondary)' }}>
                        {resumeData.interests.map((interest, index) => (
                            <li key={index} style={{ marginBottom: '4px' }}>{interest}</li>
                        ))}
                    </ul>
                </div>
            </motion.div>

        </section>
    );
};

export default MoreInfo;
