export const resumeData = {
    name: "Patrick Siu",
    title: "Lead Data Engineer",
    contact: {
        phone: "(917) 705-9998",
        email: "psiu003@gmail.com",
        // Location removed
        linkedin: "https://www.linkedin.com/in/patrick-siu-65086a25/",
        portfolio: "Portfolio", // URL needed
        github: "Github" // URL needed
    },
    summary: "Lead Data Engineer architecting petabyte-scale AI platforms (4PB+, 30k+ cores) that operationalize GenAI, RAG, and Agentic workflows. Currently leading a 12-person team to deliver 270x performance optimizations and detection pipelines catching 14M+ daily threats. Expert in Python, Spark, and Kubernetes, driving secure, scalable infrastructure for high-impact security operations.",
    skills: {
        languages: ["Python (Expert)", "PySpark", "SQL", "R", "Java", "C++", "Bash/Shell"],
        ai_ml: ["GenAI Ecosystems", "Agentic Workflows", "RAG", "MCP", "NLP", "Computer Vision", "Graph Algorithms", "Neo4j"],
        infrastructure: ["AWS", "GCP", "Docker", "Kubernetes", "Hive", "HDFS", "Hadoop Ecosystem"],
        data_warehousing: ["Redshift", "PostgreSQL", "Airflow", "Automated Data Pipelines", "CI/CD"],
        visualization: ["Tableau (Advanced/Certified)", "R Shiny", "Adobe Analytics", "BI Dashboards"]
    },
    experience: [
        {
            role: "Lead Data Engineer (Financial Crimes)",
            company: "TikTok U.S. Data Security",
            period: "5/2024 – Present",
            details: [
                "Built and led a 12-person engineering team, establishing SDLC standards and code review protocols.",
                "Architected a multi-region data platform on ByteCloud managing 4PB+ of data using Dorado (Databricks/Spark) and HDFS.",
                "Delivered production-grade LLM ecosystems by integrating Agentic AI workflows, MCP, and RAG pipelines.",
                "Automated investigative operations using Dorado modular pipelines and TCE (Kubernetes).",
                "Drove data governance transformation with custom rulesets and centralized library.",
                "Delivered 20+ dashboards for risk and operations metrics using Aeolus (Tableau) and Lark integration."
            ]
        },
        {
            role: "Specialist (Data Engineer: Data Scanning)",
            company: "TikTok U.S. Data Security",
            period: "5/2023 – 5/2024",
            details: [
                "Designed massive-scale compliance scanning framework using Dorado API across 30k cores and 60TB memory.",
                "Achieved 270x increase in scanning speed by refactoring legacy scripts for HDFS, MySQL, MongoDB, Redis, and Elastic Search.",
                "Extended privacy scanning coverage to 6 exabytes of data by custom Linux bridge to Nuix scannning.",
                "Generated compliance reports used as primary evidence during Congressional hearings."
            ]
        },
        {
            role: "Specialist (Data Engineer: Bot Detection)",
            company: "Bytedance (TikTok)",
            period: "10/2021 – 5/2023",
            details: [
                "Led a team of 9 to engineer automated pipeline processing 1B user accounts to detect 14M inauthentic accounts daily.",
                "Achieved 94% incremental detection rate using behavioral velocity features.",
                "Built scraping/monitoring system using Python+Beautiful Soup and DAG Hive orchestration.",
                "Served as technical investigator for 3 P&C litigation cases.",
                "Lectured on Data Visualization architectures at George Mason University."
            ]
        },
        {
            role: "Principal Data Scientist (DataCloud)",
            company: "ADP",
            period: "11/2020 – 10/2021",
            details: [
                "Engineered automated data delivery pipelines utilizing AWS Step Functions for Data Licensing.",
                "Architected 'live' revenue and KPI dashboard suite for API monetization using Tableau."
            ]
        },
        {
            role: "Lead Data Scientist (Infrastructure & Strategy)",
            company: "ADP",
            period: "11/2018 – 11/2020",
            details: [
                "Built BI and analytics infrastructure for 'Wisely Direct' startup unit using Docker and Airflow.",
                "Consolidated 13 disparate data silos into unified Redshift/Postgres warehouse.",
                "Developed end-to-end Python ETL pipelines supporting $700M digital transformation portfolio."
            ]
        },
        {
            role: "Lead Data Scientist (NLP & Client Experience)",
            company: "ADP",
            period: "5/2014 – 11/2018",
            details: [
                "Engineered enterprise-grade NLP engine using R openNLP to classify 9M+ logs (88% precision).",
                "Delivered POC speech-to-text pipeline using Nice CX.",
                "Stood up and automated the first enterprise-wide Tableau dashboard ecosystem."
            ]
        }
    ],
    education: {
        school: "Stony Brook University",
        degree: "B.S. in Computer Science",
        year: "Class of 2003"
    },
    interests: [
        "Deep learning image recognition",
        "Long-distance motorcycle touring & engine repair",
        "Scuba diving & snowboarding",
        "Volunteer coach on Devils Youth Mites Hockey team (USA Hockey Certified CEP level 2)"
    ]
};
