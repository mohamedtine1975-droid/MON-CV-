let currentLang = 'fr';

        const translations = {
            fr: {
                jobTitle: "Développeur Backend • Designer",
                location: "Rufisque, Sénégal",
                downloadText: "Télécharger PDF",
                downloadingText: "Génération en cours...",
                objectiveTitle: "<i class='fa-solid fa-bullseye' style='color:var(--primary); margin-right:8px;'></i> Objectif de Carrière",
                objectiveText: "Étudiant en L2 Génie Logiciel, je recherche activement des stages en développement backend, alternances, et missions freelance. Passionné par les technologies web modernes et membre actif de la startup AMBOTECH, je souhaite contribuer à des projets innovants tout en continuant à développer mes compétences techniques.",
                objectiveTags: ["Stage Backend", "Alternance", "Freelance", "Startup AMBOTECH"],
                skillsTitle: "Compétences Techniques",
                frontendTitle: "Frontend",
                backendTitle: "Backend",
                databaseTitle: "Bases de données",
                toolsTitle: "Outils & Design",
                languagesTitle: "Langues",
                frenchText: "Français",
                englishText: "Anglais",
                fluentText: "Courant",
                linksTitle: "Liens Professionnels",
                profileTitle: "Profil Professionnel",
                experienceTitle: "Expérience Professionnelle",
                projectsTitle: "Projets Réalisés",
                educationTitle: "Formation",
                profileText: "Étudiant en 2ème année de Licence en Génie Logiciel à l'Institut Supérieur d'Informatique, passionné par le développement backend et le design. Fort de 2+ années d'expérience en développement web, je crée des expériences numériques modernes, fonctionnelles et centrées sur l'utilisateur. Membre actif de la startup AMBOTECH, j'ai participé au développement de solutions web innovantes pour des clients prestigieux.",
                present: "Présent"
            },
            en: {
                jobTitle: "Backend Developer • Designer",
                location: "Rufisque, Senegal",
                downloadText: "Download PDF",
                downloadingText: "Generating...",
                objectiveTitle: "<i class='fa-solid fa-bullseye' style='color:var(--primary); margin-right:8px;'></i> Career Objective",
                objectiveText: "2nd year Software Engineering student, actively seeking backend development internships, work-study programs, and freelance missions. Passionate about modern web technologies and active member of AMBOTECH startup, I want to contribute to innovative projects while continuing to develop my technical skills.",
                objectiveTags: ["Backend Internship", "Work-Study", "Freelance", "AMBOTECH Startup"],
                skillsTitle: "Technical Skills",
                frontendTitle: "Frontend",
                backendTitle: "Backend",
                databaseTitle: "Databases",
                toolsTitle: "Tools & Design",
                languagesTitle: "Languages",
                frenchText: "French",
                englishText: "English",
                fluentText: "Fluent",
                linksTitle: "Professional Links",
                profileTitle: "Professional Profile",
                experienceTitle: "Professional Experience",
                projectsTitle: "Completed Projects",
                educationTitle: "Education",
                profileText: "2nd year Software Engineering student at Institut Supérieur d'Informatique, passionate about backend development and design. With 2+ years of experience in web development, I create modern, functional, and user-centered digital experiences. Active member of AMBOTECH startup, I participated in developing innovative web solutions for prestigious clients.",
                present: "Present"
            }
        };

        const skills = {
            frontend: [
                { name: "HTML / CSS", level: 75 },
                { name: "JavaScript", level: 60 },
                { name: "Tailwind CSS", level: 75 },
                { name: "BootStrap", level: 75}
            ],
            backend: [
                { name: "Python", level: 80 },
                { name: "C / C++", level: 80 },
                { name: "PHP", level: 65 },
                { name: "Node.js", level: 50 },
                { name: "Java", level: 50}
            ],
            database: [
                { name: "MySQL", level: 75 },
                { name: "PostgreSQL", level: 75 },
                { name: "MongoDB", level: 60 }
            ]
        };

        const experiences = {
            fr: [
                {
                    title: "Développeur Backend",
                    company: "AMBOTECH (Startup)",
                    period: "Octobre 2024 - Présent",
                    location: "Sénégal",
                    description: "Membre actif d'une startup technologique spécialisée dans le développement de solutions web innovantes. Participation au développement backend de projets d'envergure pour des institutions culturelles et clients divers.",
                    achievements: [
                        "Développement du <strong>site web du Musée des Civilisations Noires</strong>, valorisant le patrimoine culturel africain",
                        "Conception et implémentation d'APIs RESTful performantes",
                        "Collaboration en équipe agile pour la livraison de projets dans les délais",
                        "Participation à l'architecture technique des projets"
                    ],
                    tech: "Technologies : HTML, CSS, JavaScript, PHP, MySQL, PostgreSQL"
                }
            ],
            en: [
                {
                    title: "Backend Developer",
                    company: "AMBOTECH (Startup)",
                    period: "October 2024 - Present",
                    location: "Senegal",
                    description: "Active member of a technology startup specializing in developing innovative web solutions. Participation in backend development of large-scale projects for cultural institutions and various clients.",
                    achievements: [
                        "Development of the <strong>Museum of Black Civilizations website</strong>, showcasing African cultural heritage",
                        "Design and implementation of high-performance RESTful APIs",
                        "Agile team collaboration for on-time project delivery",
                        "Participation in technical architecture of projects"
                    ],
                    tech: "Technologies: HTML, CSS, JavaScript, PHP, MySQL, PostgreSQL"
                }
            ]
        };

        const projects = {
            fr: [
                {
                    title: "Musée des Civilisations Noires",
                    period: "Novembre 2025 - Janvier 2025",
                    description: "Plateforme web culturelle présentant les collections et expositions du Musée des Civilisations Noires de Dakar. Interface moderne et responsive valorisant le patrimoine africain.",
                    tech: "Technologies : HTML, CSS, JavaScript, Backend API",
                    links: [
                        { text: "🌐 Site", url: "https://musee-des-civilisations-noires.vercel.app" },
                        { text: "💼 AMBOTECH", url: "https://ambo-tech.vercel.app" }
                    ]
                },
                {
                    title: "Python Quiz Interactif",
                    period: "Décembre 2025",
                    description: "Application web de quiz interactif permettant aux utilisateurs de tester leurs connaissances en Python. Interface intuitive avec système de scoring en temps réel.",
                    tech: "Technologies : Python, HTML, CSS, JavaScript",
                    links: [
                        { text: "🌐 Demo", url: "https://python-quizz.vercel.app/" },
                        { text: "💻 GitHub", url: "https://github.com/mohamedtine1975-droid" }
                    ]
                },
                {
                    title: "Portfolio Personnel",
                    period: "Janvier 2025",
                    description: "Portfolio professionnel moderne présentant mes projets, compétences et services. Design épuré avec animations fluides et interface multilingue (FR/EN).",
                    tech: "Technologies : HTML, CSS, JavaScript, Responsive Design",
                    links: [
                        { text: "🌐 Portfolio", url: "https://mohamedtine.vercel.app" },
                        { text: "💻 GitHub", url: "https://github.com/mohamedtine1975-droid" }
                    ]
                },
                {
                    title: "Site Annonces Mariage",
                    period: "Février 2026",
                    description: "Plateforme web de publication d'annonces de mariage. Interface utilisateur intuitive avec système de recherche et filtrage.",
                    tech: "Technologies : HTML, CSS, JavaScript, PHP, MySQL",
                    links: [
                        { text: "🌐 Site", url: "https://site-de-mariage.vercel.app/" },
                        { text: "💻 GitHub", url: "https://github.com/mohamedtine1975-droid/Site-de-Mariage" }
                    ]
                },
                {
                    title: "Site Agri-Senegal",
                    period: "Février 2026",
                    description: "Site web de présentation de l'agriculture sénégalaise. Contenu riche avec sections sur les cultures, techniques agricoles et initiatives durables. Design moderne et responsive.",
                    tech: "Technologies : HTML, CSS, JavaScript, PHP, MySQL",
                    links: [
                        { text: "🌐 Site", url: "http://agri-senegal.gt.tc/" },
                        { text: "💻 GitHub", url: "https://github.com/mohamedtine1975-droid/agrisenegal-admin" }
                    ]
                },
                {
                    title: "Site QCM Islamique",
                    period: "February 2026",
                    description: "Application web de quiz interactif sur les connaissances islamiques. Interface conviviale avec système de scoring et classement.",
                    tech: "Technologies : HTML, CSS, JavaScript, PHP, MySQL",
                    links: [
                        { text: "🌐 Site", url: "https://quizizlamique.great-site.net/qcm_islamique" },
                        { text: "💻 GitHub", url: "https://github.com/mohamedtine1975-droid/quiz-islamique" }
                    ]
                },
                {
                    title: "Talisman Coiffure",
                    period: "Mars 2026",
                    description: "Application web pour un salon de coiffure , gestion des réservations en ligne et suivi des clients.",
                    tech: "Technologies : React, Node.js, Express, MongoDB",
                    links: [
                        { text: "🌐 Site", url: "https://taslima-eight.vercel.app/" },
                        { text: "💻 GitHub", url: "https://github.com/mohamedtine1975-droid/talisman" }
                    ]
                }
            ],
            en: [
                {
                    title: "Museum of Black Civilizations",
                    period: "November 2025 - January 2025",
                    description: "Cultural web platform showcasing collections and exhibitions of the Museum of Black Civilizations in Dakar. Modern and responsive interface highlighting African heritage.",
                    tech: "Technologies: HTML, CSS, JavaScript, Backend API",
                    links: [
                        { text: "🌐 Website", url: "https://musee-des-civilisations-noires.vercel.app" },
                        { text: "💼 AMBOTECH", url: "https://ambo-tech.vercel.app" }
                    ]
                },
                {
                    title: "Interactive Python Quiz",
                    period: "December 2025",
                    description: "Interactive quiz web application allowing users to test their Python knowledge. Intuitive interface with real-time scoring system.",
                    tech: "Technologies: Python, HTML, CSS, JavaScript",
                    links: [
                        { text: "🌐 Demo", url: "https://python-quizz.vercel.app/" },
                        { text: "💻 GitHub", url: "https://github.com/mohamedtine1975-droid" }
                    ]
                },
                {
                    title: "Personal Portfolio",
                    period: "November 2025",
                    description: "Modern professional portfolio showcasing my projects, skills and services. Clean design with smooth animations and multilingual interface (FR/EN).",
                    tech: "Technologies: HTML, CSS, JavaScript, Responsive Design",
                    links: [
                        { text: "🌐 Portfolio", url: "https://mohamedtine.vercel.app" },
                        { text: "💻 GitHub", url: "https://github.com/mohamedtine1975-droid" }
                    ]
                },
                {
                    title: "Wedding Announcement Site",
                    period: "February 2026",
                    description: "Web platform for publishing wedding announcements. Intuitive user interface with search and filtering system.",
                    tech: "Technologies: HTML, CSS, JavaScript, PHP, MySQL",
                    links: [
                        { text: "🌐 Website", url: "https://site-de-mariage.vercel.app/" },
                        { text: "💻 GitHub", url: "https://github.com/mohamedtine1975-droid/Site-de-Mariage" }
                    ]
                },
                {
                    title: "Agri-Senegal Site",
                    period: "February 2026",
                    description: "Website presenting Senegalese agriculture. Rich content with sections on crops, agricultural techniques and sustainable initiatives. Modern and responsive design.",
                    tech: "Technologies: HTML, CSS, JavaScript, PHP, MySQL",
                    links: [
                        { text: "🌐 Website", url: "http://agri-senegal.gt.tc/" },
                        { text: "💻 GitHub", url: "https://github.com/mohamedtine1975-droid/agrisenegal-admin" }
                    ]
                },
                {
                    title: "Islamic Quiz Site",
                    period: "February 2026",
                    description: "Interactive quiz web application on Islamic knowledge. User-friendly interface with scoring and ranking system.",
                    tech: "Technologies: HTML, CSS, JavaScript, PHP, MySQL",
                    links: [
                        { text: "🌐 Website", url: "https://quizizlamique.great-site.net/qcm_islamique" },
                        { text: "💻 GitHub", url: "https://github.com/mohamedtine1975-droid/quiz-islamique" }
                    ]
                },
                {
                    title:"Talisman Hair Salon",
                    period: "March 2026",
                    description: "Web application for a hair salon, managing online reservations and client follow-up.",
                    tech: "Technologies : React, Node.js, Express, MongoDB",
                    links: [
                        { text: "🌐 Site", url: "https://taslima-eight.vercel.app/" },
                        { text: "💻 GitHub", url: "https://github.com/mohamedtine1975-droid/talisman" }
                    ]

                }
            ]
        };

        const education = {
            fr: [
                {
                    title: "Licence en Génie Logiciel (L2 en cours)",
                    school: "Institut Supérieur d'Informatique (ISI)",
                    period: "Novembre 2024 - Juillet 2025",
                    location: "Dakar, Sénégal"
                },
                {
                    title: "Baccalauréat Série S2",
                    school: "Lycée Seydina Limamou Laye",
                    period: "2022 - 2023",
                    location: "Sénégal"
                }
            ],
            en: [
                {
                    title: "Bachelor's Degree in Software Engineering (2nd year ongoing)",
                    school: "Institut Supérieur d'Informatique (ISI)",
                    period: "November 2024 - July 2025",
                    location: "Dakar, Senegal"
                },
                {
                    title: "High School Diploma (Science)",
                    school: "Lycée Seydina Limamou Laye",
                    period: "2022 - 2023",
                    location: "Senegal"
                }
            ]
        };

        
        function toggleTheme() {
            document.body.classList.toggle('dark-theme');
            const isDark = document.body.classList.contains('dark-theme');
            localStorage.setItem('cv-theme', isDark ? 'dark' : 'light');
            document.getElementById('theme-icon').innerHTML = isDark ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
        }

        function initTheme() {
            if (localStorage.getItem('cv-theme') === 'dark') {
                document.body.classList.add('dark-theme');
            }
        }

        function initScrollReveal() {
            if(!window.IntersectionObserver) return;
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, { threshold: 0.1 });
            
            document.querySelectorAll('.section').forEach(sec => {
                sec.classList.add('reveal');
                observer.observe(sec);
            });
        }

        function renderContent(lang) {
            const t = translations[lang];
            const mainContent = document.getElementById('mainContent');

            let html = `
                <section class="section">
                    <div class="career-objective">
                        <h3>${t.objectiveTitle}</h3>
                        <p>${t.objectiveText}</p>
                        <div class="career-tags">
                            ${t.objectiveTags.map(tag => `<span class="career-tag">${tag}</span>`).join('')}
                        </div>
                    </div>
                </section>

                <section class="section">
                    <h2 class="section-title">${t.profileTitle}</h2>
                    <p class="profile-text">${t.profileText}</p>
                </section>

                <section class="section">
                    <h2 class="section-title">${t.skillsTitle}</h2>
                    <div class="skills-grid">
                        <div>
                            <h3 class="skills-category-title">${t.frontendTitle}</h3>
                            ${skills.frontend.map(skill => `
                                <div class="skill-item">
                                    <div class="skill-name">
                                        <span>${skill.name}</span>
                                        <span class="skill-percentage">${skill.level}%</span>
                                    </div>
                                    <div class="skill-bar-container">
                                        <div class="skill-bar" style="width: ${skill.level}%"></div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>

                        <div>
                            <h3 class="skills-category-title">${t.backendTitle}</h3>
                            ${skills.backend.map(skill => `
                                <div class="skill-item">
                                    <div class="skill-name">
                                        <span>${skill.name}</span>
                                        <span class="skill-percentage">${skill.level}%</span>
                                    </div>
                                    <div class="skill-bar-container">
                                        <div class="skill-bar" style="width: ${skill.level}%"></div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <div style="margin-top: 25px;">
                        <h3 class="skills-category-title">${t.databaseTitle}</h3>
                        <div class="skills-grid">
                            ${skills.database.map(skill => `
                                <div class="skill-item">
                                    <div class="skill-name">
                                        <span>${skill.name}</span>
                                        <span class="skill-percentage">${skill.level}%</span>
                                    </div>
                                    <div class="skill-bar-container">
                                        <div class="skill-bar" style="width: ${skill.level}%"></div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </section>

                <section class="section">
                    <h2 class="section-title">${t.experienceTitle}</h2>
            `;

            experiences[lang].forEach(exp => {
                html += `
                    <div class="experience-item">
                        <div class="job-title">${exp.title}</div>
                        <div class="company">${exp.company}</div>
                        <div class="period">${exp.period}</div>
                        <div class="location">${exp.location}</div>
                        <div class="description">${exp.description}</div>
                `;

                if (exp.achievements && exp.achievements.length > 0) {
                    html += `<ul style="margin-top: 10px; padding-left: 20px; line-height: 1.8;">`;
                    exp.achievements.forEach(achievement => {
                        html += `<li>${achievement}</li>`;
                    });
                    html += `</ul>`;
                }

                if (exp.tech) {
                    html += `<div class="tech-stack">${exp.tech}</div>`;
                }

                html += `</div>`;
            });

            html += `
                </section>

                <section class="section">
                    <h2 class="section-title">${t.projectsTitle}</h2>
            `;

            projects[lang].forEach(project => {
                html += `
                    <div class="project-item">
                        <div class="job-title">${project.title}</div>
                        <div class="period">${project.period}</div>
                        <div class="description">${project.description}</div>
                        <div class="tech-stack">${project.tech}</div>
                `;

                if (project.links && project.links.length > 0) {
                    html += `<div style="margin-top: 8px;">`;
                    project.links.forEach((link, index) => {
                        html += `<a href="${link.url}" target="_blank" style="color: var(--primary); text-decoration: none; margin-right: 15px;">${link.text}</a>`;
                    });
                    html += `</div>`;
                }

                html += `</div>`;
            });

            html += `
                </section>

                <section class="section">
                    <h2 class="section-title">${t.educationTitle}</h2>
            `;

            education[lang].forEach(edu => {
                html += `
                    <div class="formation-item">
                        <strong>${edu.title}</strong> | ${edu.school} | ${edu.period} | ${edu.location}
                    </div>
                `;
            });

            html += `
                </section>

                <section class="section">
                    <h2 class="section-title">${t.languagesTitle}</h2>
                    <div class="languages">
                        <div>
                            <span>${t.frenchText}</span>
                            <span><strong>${t.fluentText}</strong></span>
                        </div>
                        <div>
                            <span>${t.englishText}</span>
                            <span><strong>${t.fluentText}</strong></span>
                        </div>
                    </div>
                </section>

                <section class="section">
                    <h2 class="section-title">${t.linksTitle}</h2>
                    <div class="links-section-compact">
                        <a href="https://www.linkedin.com/in/mohamed-dieye-tine-81b509395" target="_blank">🔗 LinkedIn</a> |
                        <a href="https://mohamedtine.vercel.app" target="_blank">🌐 Portfolio</a> |
                        <a href="https://github.com/mohamedtine1975-droid" target="_blank">💻 GitHub</a> |
                        <a href="https://ambo-tech.vercel.app" target="_blank">🚀 AMBOTECH</a>
                    </div>
                </section>
            `;

            mainContent.innerHTML = html;
        }

        function changeLanguage(lang) {
            currentLang = lang;
            document.documentElement.lang = lang; // Met à jour l'accessibilité racine
            const t = translations[lang];

            // Met à jour la balise titre (SEO Dynamique)
            document.title = (lang === 'en') ? "Resume - Mohamed Dieye TINE" : "CV - Mohamed Dieye TINE";

            document.querySelectorAll('.lang-btn').forEach(btn => {
                btn.classList.remove('active');
                if (btn.dataset.lang === lang) {
                    btn.classList.add('active');
                }
            });

            document.getElementById('jobTitle').textContent = t.jobTitle;
            document.getElementById('location').textContent = t.location;
            document.getElementById('downloadText').textContent = t.downloadText;

            renderContent(lang);
            setTimeout(initScrollReveal, 100);
        }

        function generatePDF() {
            const button = document.getElementById('downloadBtn');
            const buttonText = document.getElementById('downloadText');
            const t = translations[currentLang];
            const originalText = buttonText.textContent;
            
            button.disabled = true;
            buttonText.textContent = t.downloadingText;
            
            const element = document.getElementById('cv-content');
            const wasDark = document.body.classList.contains('dark-theme');
            document.body.classList.remove('dark-theme');
            
            const date = new Date();
            const months = {
                fr: ['JANVIER', 'FEVRIER', 'MARS', 'AVRIL', 'MAI', 'JUIN', 
                     'JUILLET', 'AOUT', 'SEPTEMBRE', 'OCTOBRE', 'NOVEMBRE', 'DECEMBRE'],
                en: ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 
                     'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER']
            };
            const month = months[currentLang][date.getMonth()];
            const year = date.getFullYear();
            const fileName = `CV_Mohamed_Dieye_TINE_${month}_${year}.pdf`;

            const opt = {
                margin: [10, 10, 10, 10],
                filename: fileName,
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { 
                    scale: 2,
                    useCORS: true,
                    letterRendering: true
                },
                jsPDF: { 
                    unit: 'mm', 
                    format: 'a4', 
                    orientation: 'portrait'
                },
                pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
            };
            
            // Exécution de la génération
            html2pdf().set(opt).from(element).save().then(() => {
                button.disabled = false;
                buttonText.textContent = originalText;
                if(wasDark) document.body.classList.add('dark-theme');
            }).catch(err => {
                console.error('Erreur PDF:', err);
                button.disabled = false;
                buttonText.textContent = "Erreur !";
                if(wasDark) document.body.classList.add('dark-theme');
            });
        }

        // Initialisation au chargement de la page (DOMContentLoaded plus rapide que onload)
        document.addEventListener('DOMContentLoaded', () => {
            renderContent(currentLang);
            initTheme();
            initScrollReveal();
            const isDark = document.body.classList.contains('dark-theme');
            const themeBtn = document.getElementById('theme-icon');
            if(themeBtn) themeBtn.innerHTML = isDark ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
        });