        // Global State & Language Initialization (Hoisted at Top)
        // The language comes from the URL: / is Spanish, /en/ is English (prerendered by tools/tailwind/build-en.mjs)
        const LANG_PATHS = { es: '/', en: '/en/' };
        let currentPerimeterLang = /^\/en(\/|$)/.test(window.location.pathname) ? 'en' : 'es';
        // Old ?lang=en links keep working
        if (currentPerimeterLang === 'es' && new URLSearchParams(window.location.search).get('lang') === 'en') {
            window.location.replace(LANG_PATHS.en + window.location.hash);
        }

        function goToLang(lang) {
            if (lang !== currentPerimeterLang && LANG_PATHS[lang]) window.location.href = LANG_PATHS[lang] + window.location.hash;
        }
        let currentHeroMode = 'web';

        // Comprehensive Bilingual Language Logic (ES / EN) for Both Services
        const perimeterDict = {
            es: {
                title: "Synertalk | Protección DMARC/NIS2 y Peritaje Informático Cripto",
                cta: "Auditoría Gratis",
                badge: "PRIMERA RESPUESTA: < 2H | NORMATIVAS: UNE 197001 & ISO 27037",
                h1: 'Tu dominio corporativo puede ser suplantado ahora mismo.<br><span class="italic text-warmGold">Tu evidencia pericial debe sostenerse en juicio.</span>',
                desc: 'Muchos despachos y empresas carecen de DMARC <code class="text-cyan-400 font-mono text-sm px-1.5 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30">p=reject</code>, exponiéndose a facturas falsas y sanciones NIS2. En Synertalk emitimos <strong>Dictámenes Periciales con sellado SHA-256</strong> e <strong>interdicción de fondos cripto en horas doradas (0-72h)</strong>.',
                tabWeb: "🛡️ Blindaje Perimetral NIS2",
                tabCrypto: "🚨 Interdicción Cripto (0-72h)",
                scanBtnWeb: "Escanear en Vivo",
                scanBtnCrypto: "Triage Forense en Vivo",
                
                // Top Banner
                tickerEngineLbl: "MOTOR DE AUDITORÍA PASIVA:",
                tickerEngineMode: "DNS · SPF · DMARC en vivo",
                tickerDesc: "Auditorías Perimetrales bajo <strong>Directiva Europea NIS2</strong> y <strong>RGPD</strong>",
                tickerCta: "Probar en Vivo &rarr;",

                // Navbar
                navS1: "Escáner Perimetral",
                navS2Txt: "Peritaje Blockchain",
                navS3: "Comparativa 360°",
                navS4: "Sectores",
                navS5: "Metodología 48h",
                navCc: "Command Center",

                // Trust Badges
                trustP1: "100% Pasivo & No Invasivo",
                trustP2: "Sin tocar tu operativa",
                trustP3: "Garantía de Score ≥ 90 Pts",

                // Split Slider
                compTag: "Demostración Visual de Transformación",
                compH2: "Antes y después",
                compP: "Compara la web típica de un negocio (fricción, lenta y desprotegida) frente a la dirección editorial y blindaje perimetral de Synertalk.",
                compBBadge: "EJEMPLO ILUSTRATIVO · ANTES",
                compBScore: "SCORE: 37/100 | CARGA: 4.2s",
                compBCat: "Fricción & Fuga de Clientes",
                compBTitle: "«Bienvenido a nuestra empresa de servicios líderes en el sector»",
                compBDesc: "Oferta genérica enterrada en el slider. Formulario de 7 campos sin llamada a la acción clara. Cero autenticación DMARC.",
                compBWarn: "Suplantación de identidad activa",
                compBF1: "Formulario de 7 campos",
                compBF2: "Sin cumplimiento NIS2",
                compABadge: "EJEMPLO ILUSTRATIVO · DESPUÉS",
                compAScore: "SCORE: 98/100 | CARGA: 0.5s",
                compACat: "Dirección Editorial Entregable",
                compATitle: 'Tu problema resuelto en 48 horas.<br><span class="italic text-warmGold">Sin romper tu operativa.</span>',
                compADesc: 'Propuesta dominante desde el primer scroll. Ruta de contacto en 1 toque en mobile y blindaje perimetral DMARC <code class="text-cyan-400">p=reject</code>.',
                compANis2: "✓ Alineado con NIS2 (Art. 21) & RGPD",
                compAF1: "Contacto en 1 toque",
                compAF2: "Informe técnico firmado",

                // Forensic Section
                fBadge: "UNIDAD DE INTELIGENCIA FORENSE BLOCKCHAIN & INTERDICCIÓN",
                fH2: "Peritaje Judicial y Bloqueo de Fondos Cripto",
                fDesc: 'Emitimos <strong>Dictámenes Periciales con sellado SHA-256</strong> (UNE 197001 / ISO 27037) para sustentar querellas penales por estafa cripto y requerimientos de <strong>Preservation Letters de Emergencia</strong> ante los departamentos de Compliance de Binance, Bybit, OKX y Coinbase.',
                fC1Badge: "VENTANA CRÍTICA 0 - 72H",
                fC1Title: "Interdicción en Horas Doradas",
                fC1Desc: "Respuesta inmediata para incidentes recientes. Rastreo determinista de la fuga on-chain y requerimientos formales de bloqueo a exchanges antes de la salida a fiat.",
                fC1F1: "Triage de salida en < 60 minutos",
                fC1F2: "Localización de cuenta de depósito (CEX Sink)",
                fC1F3: "Preservation Letter a Binance/OKX/Coinbase",
                fC1Sub: "Tarifa fija de movilización de emergencia",
                fC1Btn: "Activar Interdicción",
                fC2Tag: "Especial Bufetes Penalistas",
                fC2Title: "Dictamen Pericial Judicial",
                fC2Desc: "Informe pericial técnico para los Juzgados de Instrucción que sirve de soporte a la solicitud de medidas cautelares y comisiones rogatorias.",
                fC2F1: "Cadena de custodia sellada con Hash SHA-256",
                fC2F2: "Diagrama topológico de mulas y desvíos",
                fC2F3: "Identificación de VASPs / CEXs responsables",
                fC2F4: "Ratificación en sede judicial incluida",
                fC2Sub: "Por expediente (asumible en provisión de fondos)",
                fC2Btn: "Encargar Dictamen Pericial",
                fC3Badge: "CASOS > 100.000 € / DEFI HACKS",
                fC3Title: "Recuperación & Bounty Intelligence",
                fC3Desc: "Para fraudes a grandes patrimonios, DAOs o fondos de inversión. Monitorización 24/7 con centinelas dedicados y asistencia para denunciar ante agencias internacionales.",
                fC3F1: "Asistencia para denunciar ante FBI IC3 / SEC",
                fC3F2: "Monitorización 24/7 en Contabo Sentinel",
                fC3F3: "Negociación on-chain whitehat bounty",
                fC3Sub: "Sobre capital efectivamente recuperado",
                fC3Btn: "Contactar Unidad Estratégica",
                fLawTag: "Canal Exclusivo para Despachos de Abogados Penalistas",
                fLawH4: "¿Lleváis causas abiertas por estafas en criptomonedas?",
                fLawP: "Ofrecemos a su bufete una <strong>auditoría preliminar de viabilidad técnica sin coste</strong>: analizamos los hashes iniciales del cliente para determinar a partir de la evidencia on-chain si los fondos son trazables hacia exchanges bancarizables antes de que su cliente incurra en costes periciales.",
                fLawBtn: "Contactar Unidad Forense &rarr;",

                // Sectors Section
                secTag: "Especialización Sectorial",
                secH2: "El método se adapta al sector. El rigor no cambia.",
                secP: "No aplicamos una plantilla para todo el mundo. Auditamos dónde pierde autoridad o clientes cada nicho específico.",
                tabSecClinicas: "Clínicas y Salud",
                tabSecDespachos: "Despachos y Legal",
                tabSecInmobiliarias: "Inmobiliarias",
                tabSecRestauracion: "Restauración Selecta",
                tabSecOcio: "Ocio y Eventos",

                // Methodology
                methTag: "Protocolo Operativo",
                methH2: "Auditamos primero. Modernizamos después.",
                methP: "Diseñado para negocios que no pueden detenerse ni un solo segundo.",
                methF1Ph: "FASE 01 / 48H",
                methF1Title: "Lectura Inicial",
                methF1Desc: "Inspeccionamos de forma pasiva tu dominio (DNS, DMARC, SPF, TLS) y tu embudo web. Entregamos una infografía visual de 1 página con datos verificables.",
                methF2Ph: "FASE 02 / PREVIEW",
                methF2Title: "Concepto Visual",
                methF2Desc: "Te mostramos cómo se verá tu web modernizada y la arquitectura de blindaje antes de comprometer un solo euro. Sin riesgos.",
                methF3Ph: "FASE 03 / SPRINT",
                methF3Title: "Blindaje en 24h",
                methF3Desc: "Configuramos la política DMARC antisuplantación, SPF, cabeceras HTTP perimetrales y reordenamos la capa de captación.",
                methF4Ph: "FASE 04 / CERTIFICADO",
                methF4Title: "Garantía ≥ 90 Pts",
                methF4Desc: "Al terminar, re-escaneamos tu dominio en directo con este mismo escáner público. Si no alcanza 90 puntos, no abonas el servicio de blindaje.",

                // FAQs
                faqTag: "Resolución de Dudas",
                faqH2: "Preguntas frecuentes antes de auditar",
                faqQ1: "¿Tocáis mi CRM, reservas o bases de datos de clientes?",
                faqA1: "No se toca ninguna base de datos ni herramienta interna. La intervención opera estrictamente sobre la capa perimetral DNS (Cloudflare/Registrador) y la capa visual de captación.",
                faqQ2: "¿Cuánto cuesta el servicio completo de blindaje?",
                faqA2: "La auditoría previa de 1 página es 100% gratuita. El paquete <strong>Blindaje Perimetral Express tiene una tarifa plana única de 490 €</strong> (entrega en 24-48h). Para empresas con necesidades complejas NIS2 disponemos del plan Integral por 1.250 €.",
                faqQ3: "¿Por qué las empresas matrices nos exigen DMARC y NIS2?",
                faqA3: "La Directiva Europea NIS2 obliga a las grandes entidades a auditar la seguridad de toda su cadena de proveedores. Si una PYME carece de política DMARC, puede ser utilizada para estafar a la empresa matriz, y poner en riesgo su continuidad como proveedor.",

                // Footer
                footH2: "Comprueba el estado de tu negocio hoy",
                footP: "Recibe la infografía visual ejecutiva en menos de 48 horas sin coste ni compromiso de contratación.",
                footBtnTxt: "Auditar Mi Empresa Ahora",
                footCopy: "© 2026 Synertalk Cyber Defense Unit",
                footArch: "Auditoría pasiva y no invasiva",
                footContactLbl: "Contacto:",
                footSvc1: "Configuración DMARC y NIS2",
                footSvc2: "Peritaje de estafas cripto",
                footSvc3: "Para despachos de abogados",
                footLegal: "Aviso legal",
                footPrivacy: "Privacidad y cookies"
            },
            en: {
                title: "Synertalk | DMARC/NIS2 Email Protection & Crypto Forensics",
                cta: "Free Audit",
                badge: "FIRST RESPONSE: < 2H | STANDARDS: ISO/IEC 27037 & UNE 197001",
                h1: 'Your corporate domain can be spoofed right now.<br><span class="italic text-warmGold">Your forensic evidence must stand in court.</span>',
                desc: 'Many organizations lack DMARC <code class="text-cyan-400 font-mono text-sm px-1.5 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30">p=reject</code>, exposing themselves to invoice fraud and NIS2 penalties. At Synertalk we produce <strong>Expert Witness Reports with SHA-256 integrity seals</strong> and <strong>golden hours crypto asset freezing (0-72h)</strong>.',
                tabWeb: "🛡️ NIS2 Perimeter Defense",
                tabCrypto: "🚨 Crypto Interdiction (0-72h)",
                scanBtnWeb: "Scan Live Now",
                scanBtnCrypto: "Live Forensic Triage",

                // Top Banner
                tickerEngineLbl: "PASSIVE AUDIT ENGINE:",
                tickerEngineMode: "Live DNS · SPF · DMARC",
                tickerDesc: "Perimeter Audits under <strong>European NIS2 Directive</strong> & <strong>GDPR</strong>",
                tickerCta: "Test Live Now &rarr;",

                // Navbar
                navS1: "Perimeter Scanner",
                navS2Txt: "Blockchain Forensics",
                navS3: "360° Comparison",
                navS4: "Sectors",
                navS5: "48h Methodology",
                navCc: "Command Center",

                // Trust Badges
                trustP1: "100% Passive & Non-Invasive",
                trustP2: "Zero operational friction",
                trustP3: "Score Guarantee ≥ 90 Pts",

                // Split Slider
                compTag: "Visual Transformation Showcase",
                compH2: "Before and after",
                compP: "Compare a typical business website (friction, slow and unprotected) against Synertalk editorial direction and perimeter shielding.",
                compBBadge: "ILLUSTRATIVE EXAMPLE · BEFORE",
                compBScore: "SCORE: 37/100 | LOAD: 4.2s",
                compBCat: "Friction & Customer Drop-off",
                compBTitle: "“Welcome to our industry-leading service firm”",
                compBDesc: "Generic offer buried in slider. 7-field form with no clear CTA. Zero DMARC email authentication.",
                compBWarn: "Active identity spoofing vulnerability",
                compBF1: "7-field contact form",
                compBF2: "No NIS2 compliance",
                compABadge: "ILLUSTRATIVE EXAMPLE · AFTER",
                compAScore: "SCORE: 98/100 | LOAD: 0.5s",
                compACat: "Deliverable Editorial Direction",
                compATitle: 'Your problem solved in 48 hours.<br><span class="italic text-warmGold">Without breaking operations.</span>',
                compADesc: 'Dominant value proposition from first scroll. 1-touch mobile contact path and DMARC perimeter shield <code class="text-cyan-400">p=reject</code>.',
                compANis2: "✓ Aligned with NIS2 (Art. 21) & GDPR",
                compAF1: "1-tap contact",
                compAF2: "Signed technical report",

                // Forensic Section
                fBadge: "BLOCKCHAIN FORENSIC INTELLIGENCE & ASSET INTERDICTION",
                fH2: "Court-Ready Expert Witness & Crypto Asset Recovery",
                fDesc: 'We deliver <strong>Forensic Expert Reports with SHA-256 integrity seals</strong> (ISO/IEC 27037 / Daubert Standard) to substantiate criminal fraud lawsuits and dispatch <strong>Emergency Preservation Letters</strong> to Binance, Bybit, OKX and Coinbase compliance desks.',
                fC1Badge: "CRITICAL WINDOW 0 - 72H",
                fC1Title: "Golden Hours Interdiction",
                fC1Desc: "Immediate response for recent crypto thefts. Real-time escape tracing and formal administrative freeze filings before fiat exit.",
                fC1F1: "Exit triage in < 60 minutes",
                fC1F2: "Deposit account identification (CEX Sink)",
                fC1F3: "Preservation Letter to Binance/OKX/Coinbase",
                fC1Sub: "Fixed emergency mobilization fee",
                fC1Btn: "Activate Interdiction",
                fC2Tag: "Recommended for Litigation Law Firms",
                fC2Title: "Court-Ready Expert Witness Report",
                fC2Desc: "A technical expert report for investigating courts to support requests for precautionary measures and international freezing orders.",
                fC2F1: "Chain of custody sealed with SHA-256 hash",
                fC2F2: "Topological flow map of money mules and layering",
                fC2F3: "Identified responsible VASPs / CEX deposit accounts",
                fC2F4: "Courtroom expert testimony included",
                fC2Sub: "Per lawsuit file (standard retainer item)",
                fC2Btn: "Commission Expert Witness Report",
                fC3Badge: "CASES > $100,000 / DEFI HACKS",
                fC3Title: "Asset Recovery & Bounty Intelligence",
                fC3Desc: "Advanced forensic interdiction for HNWIs, DAOs and investment funds. 24/7 dedicated Sentinel monitoring and assistance filing reports with international agencies.",
                fC3F1: "Assistance filing reports with FBI IC3 / SEC TCR",
                fC3F2: "24/7 autonomous monitoring on Contabo VPS",
                fC3F3: "On-chain whitehat bounty negotiation",
                fC3Sub: "On capital successfully recovered/frozen",
                fC3Btn: "Contact Strategic Unit",
                fLawTag: "B2B Alliance for Criminal Defense Law Firms",
                fLawH4: "Do you represent victims of crypto investment fraud?",
                fLawP: "We offer your firm a <strong>complimentary technical feasibility audit</strong>: we analyze your client's initial hashes to determine from on-chain evidence whether funds reached identifiable CEX exit ramps before your client incurs expert witness expenses.",
                fLawBtn: "Contact Forensic Directorate &rarr;",

                // Sectors Section
                secTag: "Sector Specialization",
                secH2: "The method adapts to your sector. The rigor remains absolute.",
                secP: "We do not use a one-size-fits-all template. We audit where each specific niche loses authority or revenue.",
                tabSecClinicas: "Clinics & Healthcare",
                tabSecDespachos: "Law Firms & Legal",
                tabSecInmobiliarias: "Real Estate",
                tabSecRestauracion: "Hospitality & Dining",
                tabSecOcio: "Leisure & Events",

                // Methodology
                methTag: "Operational Protocol",
                methH2: "We audit first. We modernize after.",
                methP: "Engineered for businesses that cannot stop for a single second.",
                methF1Ph: "PHASE 01 / 48H",
                methF1Title: "Initial Read",
                methF1Desc: "We passively inspect your domain (DNS, DMARC, SPF, TLS) and your web funnel. We deliver an executive 1-page visual infographic with verifiable metrics.",
                methF2Ph: "PHASE 02 / PREVIEW",
                methF2Title: "Visual Concept",
                methF2Desc: "We showcase how your modernized website and perimeter architecture look before committing a single euro. Risk-free.",
                methF3Ph: "PHASE 03 / SPRINT",
                methF3Title: "24h Shielding Sprint",
                methF3Desc: "We configure anti-spoofing DMARC policy, SPF, perimeter HTTP security headers and restructure conversion flow.",
                methF4Ph: "PHASE 04 / CERTIFIED",
                methF4Title: "Score Guarantee ≥ 90 Pts",
                methF4Desc: "When we finish, we re-scan your domain live with this same public scanner. If it does not reach 90 points, you do not pay for the hardening service.",

                // FAQs
                faqTag: "Frequently Asked Questions",
                faqH2: "Common questions before auditing",
                faqQ1: "Do you touch our CRM, booking systems or customer databases?",
                faqA1: "We never touch any internal database or tools. Our deployment operates strictly on the perimeter DNS layer (Cloudflare/Registrar) and the front-facing conversion layer.",
                faqQ2: "How much does the complete perimeter shielding service cost?",
                faqA2: "The initial 1-page audit is 100% free. The <strong>Express Perimeter Shield has a fixed flat fee of €490</strong> (24-48h turnaround). For organizations with comprehensive NIS2 requirements, our Full Scope plan is €1,250.",
                faqQ3: "Why are enterprise clients requiring DMARC and NIS2 compliance?",
                faqA3: "The European NIS2 Directive mandates that enterprises audit security across their entire supply chain. If an SMB lacks DMARC authentication, it can be leveraged for vendor invoice fraud against prime contractors, putting its vendor status at risk.",

                // Footer
                footH2: "Check your business security posture today",
                footP: "Receive the 1-page executive visual infographic in under 48 hours at zero cost and zero hiring commitment.",
                footBtnTxt: "Audit My Organization Now",
                footCopy: "© 2026 Synertalk Cyber Defense Unit",
                footArch: "Passive, non-invasive auditing",
                footContactLbl: "Contact:",
                footSvc1: "DMARC & NIS2 setup (Spanish)",
                footSvc2: "Crypto fraud forensics (Spanish)",
                footSvc3: "For law firms (Spanish)",
                footLegal: "Legal notice (Spanish)",
                footPrivacy: "Privacy & cookies (Spanish)"
            }
        };

        

        function setPerimeterLang(lang) {
            currentPerimeterLang = lang;
            const d = perimeterDict[lang];
            if (!d) return;

            document.title = d.title;
            const btnEs = document.getElementById('btn-land-es');
            const btnEn = document.getElementById('btn-land-en');

            if (lang === 'en') {
                if (btnEn) btnEn.className = 'flex items-center gap-1.5 rounded-lg px-2.5 py-1 font-bold transition-all bg-cyan-400 text-slate-950 shadow-md cursor-pointer';
                if (btnEs) btnEs.className = 'flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-slate-400 hover:text-white transition-all cursor-pointer';
                if (document.documentElement) document.documentElement.lang = 'en';
            } else {
                if (btnEs) btnEs.className = 'flex items-center gap-1.5 rounded-lg px-2.5 py-1 font-bold transition-all bg-cyan-400 text-slate-950 shadow-md cursor-pointer';
                if (btnEn) btnEn.className = 'flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-slate-400 hover:text-white transition-all cursor-pointer';
                if (document.documentElement) document.documentElement.lang = 'es';
            }

            const setTxt = (id, val, isHtml) => {
                const el = document.getElementById(id);
                if (el) {
                    if (isHtml) el.innerHTML = val;
                    else el.innerText = val;
                }
            };

            setTxt('land-cta-txt', d.cta);
            setTxt('hero-p-badge', d.badge);
            setTxt('hero-p-title', d.h1, true);
            setTxt('hero-p-desc', d.desc, true);
            setTxt('tab-web-txt', d.tabWeb);
            setTxt('tab-crypto-txt', d.tabCrypto);
            setTxt('scan-btn-txt', currentHeroMode === 'web' ? d.scanBtnWeb : d.scanBtnCrypto);

            // Top Banner
            setTxt('ticker-engine-lbl', d.tickerEngineLbl);
            setTxt('ticker-engine-mode', d.tickerEngineMode);
            setTxt('ticker-desc', d.tickerDesc, true);
            setTxt('ticker-cta', d.tickerCta, true);

            // Navbar
            setTxt('nav-s1', d.navS1);
            setTxt('nav-s2-txt', d.navS2Txt);
            setTxt('nav-s3', d.navS3);
            setTxt('nav-s4', d.navS4);
            setTxt('nav-s5', d.navS5);
            setTxt('nav-cc', d.navCc);

            // Trust Micro-Badges
            setTxt('trust-p1', d.trustP1);
            setTxt('trust-p2', d.trustP2);
            setTxt('trust-p3', d.trustP3);

            // Split Slider
            setTxt('comp-tag', d.compTag);
            setTxt('comp-h2', d.compH2);
            setTxt('comp-p', d.compP);
            setTxt('comp-b-badge', d.compBBadge);
            setTxt('comp-b-score', d.compBScore);
            setTxt('comp-b-cat', d.compBCat);
            setTxt('comp-b-title', d.compBTitle);
            setTxt('comp-b-desc', d.compBDesc);
            setTxt('comp-b-warn', d.compBWarn);
            setTxt('comp-b-f1', d.compBF1);
            setTxt('comp-b-f2', d.compBF2);
            setTxt('comp-a-badge', d.compABadge);
            setTxt('comp-a-score', d.compAScore);
            setTxt('comp-a-cat', d.compACat);
            setTxt('comp-a-title', d.compATitle, true);
            setTxt('comp-a-desc', d.compADesc, true);
            setTxt('comp-a-nis2', d.compANis2);
            setTxt('comp-a-f1', d.compAF1);
            setTxt('comp-a-f2', d.compAF2);

            // Forensic Section Translations
            setTxt('f-badge', d.fBadge);
            setTxt('f-h2', d.fH2);
            setTxt('f-desc', d.fDesc, true);
            setTxt('f-c1-badge', d.fC1Badge);
            setTxt('f-c1-title', d.fC1Title);
            setTxt('f-c1-desc', d.fC1Desc);
            setTxt('f-c1-f1', d.fC1F1);
            setTxt('f-c1-f2', d.fC1F2);
            setTxt('f-c1-f3', d.fC1F3);
            setTxt('f-c1-sub', d.fC1Sub);
            setTxt('f-c1-btn', d.fC1Btn);
            setTxt('f-c2-tag', d.fC2Tag);
            setTxt('f-c2-title', d.fC2Title);
            setTxt('f-c2-desc', d.fC2Desc);
            setTxt('f-c2-f1', d.fC2F1);
            setTxt('f-c2-f2', d.fC2F2);
            setTxt('f-c2-f3', d.fC2F3);
            setTxt('f-c2-f4', d.fC2F4);
            setTxt('f-c2-sub', d.fC2Sub);
            setTxt('f-c2-btn', d.fC2Btn);
            setTxt('f-c3-badge', d.fC3Badge);
            setTxt('f-c3-title', d.fC3Title);
            setTxt('f-c3-desc', d.fC3Desc);
            setTxt('f-c3-f1', d.fC3F1);
            setTxt('f-c3-f2', d.fC3F2);
            setTxt('f-c3-f3', d.fC3F3);
            setTxt('f-c3-sub', d.fC3Sub);
            setTxt('f-c3-btn', d.fC3Btn);
            setTxt('f-law-tag', d.fLawTag);
            setTxt('f-law-h4', d.fLawH4);
            setTxt('f-law-p', d.fLawP, true);
            setTxt('f-law-btn', d.fLawBtn, true);

            // Sectors Section
            setTxt('sec-tag', d.secTag);
            setTxt('sec-h2', d.secH2);
            setTxt('sec-p', d.secP);
            setTxt('tab-sec-clinicas', d.tabSecClinicas);
            setTxt('tab-sec-despachos', d.tabSecDespachos);
            setTxt('tab-sec-inmobiliarias', d.tabSecInmobiliarias);
            setTxt('tab-sec-restauracion', d.tabSecRestauracion);
            setTxt('tab-sec-ocio', d.tabSecOcio);

            // Methodology
            setTxt('meth-tag', d.methTag);
            setTxt('meth-h2', d.methH2);
            setTxt('meth-p', d.methP);
            setTxt('meth-f1-ph', d.methF1Ph);
            setTxt('meth-f1-title', d.methF1Title);
            setTxt('meth-f1-desc', d.methF1Desc);
            setTxt('meth-f2-ph', d.methF2Ph);
            setTxt('meth-f2-title', d.methF2Title);
            setTxt('meth-f2-desc', d.methF2Desc);
            setTxt('meth-f3-ph', d.methF3Ph);
            setTxt('meth-f3-title', d.methF3Title);
            setTxt('meth-f3-desc', d.methF3Desc);
            setTxt('meth-f4-ph', d.methF4Ph);
            setTxt('meth-f4-title', d.methF4Title);
            setTxt('meth-f4-desc', d.methF4Desc);

            // FAQs
            setTxt('faq-tag', d.faqTag);
            setTxt('faq-h2', d.faqH2);
            setTxt('faq-q1', d.faqQ1);
            setTxt('faq-a1', d.faqA1);
            setTxt('faq-q2', d.faqQ2);
            setTxt('faq-a2', d.faqA2, true);
            setTxt('faq-q3', d.faqQ3);
            setTxt('faq-a3', d.faqA3);

            // Footer
            setTxt('foot-h2', d.footH2);
            setTxt('foot-p', d.footP);
            setTxt('foot-btn-txt', d.footBtnTxt);
            setTxt('foot-copy', d.footCopy);
            setTxt('foot-arch', d.footArch);
            setTxt('foot-contact-lbl', d.footContactLbl);
            setTxt('foot-svc1', d.footSvc1);
            setTxt('foot-svc2', d.footSvc2);
            setTxt('foot-svc3', d.footSvc3);
            setTxt('foot-legal', d.footLegal);
            setTxt('foot-privacy', d.footPrivacy);

            // Refresh currently displayed sector in the selected language
            if (typeof selectSector === 'function') {
                selectSector(currentSelectedSector);
            }
        }

        // Spotlight mouse tracking and UI interactions
        // Spotlight mouse tracking on cards
        document.querySelectorAll('.spotlight-card').forEach(card => {
            card.addEventListener('mousemove', e => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
        });

        // Bilingual Sector Tabs Data (ES / EN)
        let currentSelectedSector = 'clinicas';
        const sectorData = {
            es: {
                clinicas: {
                    title: "Clínicas Privadas y Centros Médicos",
                    problem: "La web transmite menos rigor que las instalaciones físicas. El correo no cuenta con política DMARC (exposición crítica a filtración de citas y datos de salud) y el botón de cita previa compite con menús confusos.",
                    modernize: [
                        "Hero médico editorial de máxima autoridad con reserva en 1 clic",
                        "Blindaje perimetral RGPD / Datos Médicos Sensibles",
                        "Velocidad de carga en móvil inferior a 0.6 segundos"
                    ],
                    preserve: [
                        "Software actual de gestión de citas médicas (Doctoralia, etc.)",
                        "Bases de datos de pacientes existentes",
                        "Líneas telefónicas y operativa de recepción"
                    ]
                },
                despachos: {
                    title: "Despachos Profesionales y Bufetes Legales",
                    problem: "Falta de autoridad digital visible frente a grandes firmas. Ausencia total de DMARC, lo que permite a terceros suplantar al socio director para enviar números de cuenta falsos a clientes en operaciones críticas (fraude del CEO).",
                    modernize: [
                        "Dirección editorial de prestigio con tipografía Instrument Serif",
                        "Autenticación criptográfica DMARC p=reject contra suplantación",
                        "Canal de consulta prioritario y confidencial"
                    ],
                    preserve: [
                        "Servidores de correo actuales de la firma",
                        "Plataformas de gestión documental y expedientes",
                        "Cumplimiento deontológico previo"
                    ]
                },
                inmobiliarias: {
                    title: "Inmobiliarias y Gestión de Patrimonio",
                    problem: "La propuesta de valor se diluye entre listados masivos. La web tarda en cargar en mobile y el cliente potencial de alto valor rebota antes de solicitar visita.",
                    modernize: [
                        "Hero de captación exclusiva y selección de activos premium",
                        "Captura rápida con WhatsApp o llamada en 1 toque",
                        "Blindaje contra suplantación en envío de contratos de arras"
                    ],
                    preserve: [
                        "Conexión XML con Idealista / Fotocasa / CRM inmobiliario",
                        "Motor de búsqueda de inmuebles actual",
                        "Canales comerciales del equipo"
                    ]
                },
                restauracion: {
                    title: "Restauración Selecta y Hostelería",
                    problem: "La carta en PDF no es legible en smartphones. Las fotos no hacen justicia a la experiencia y el motor de reservas queda enterrado tras varios clics.",
                    modernize: [
                        "Carta interactiva mobile-first de carga instantánea",
                        "Acceso directo a reserva con confirmación inmediata",
                        "Atmósfera fotográfica y ritmo visual envolvente"
                    ],
                    preserve: [
                        "Software TPV y motor de reservas actual (CoverManager / OpenTable)",
                        "Canales de proveedores",
                        "Horarios y operativa de sala"
                    ]
                },
                ocio: {
                    title: "Ocio, Parques Temáticos y Eventos",
                    problem: "La experiencia se vende peor de lo que es en realidad: tarifas poco claras, compra con demasiados pasos y fricción mobile.",
                    modernize: [
                        "Experiencia visual inmersiva con paquetes destacados",
                        "Tarifas visibles y llamada a la acción dominante",
                        "Certificado de seguridad en pasarela de compra"
                    ],
                    preserve: [
                        "Plataforma actual de venta de tickets o TPV virtual",
                        "Canales de soporte al visitante",
                        "Hosting existente"
                    ]
                }
            },
            en: {
                clinicas: {
                    title: "Private Clinics & Healthcare Centers",
                    problem: "The website projects less credibility than physical facilities. Email lacks DMARC enforcement (critical exposure to medical appointment & health data spoofing) and appointment booking buttons clash with confusing navigation.",
                    modernize: [
                        "Authoritative editorial medical hero with 1-click appointment booking",
                        "Perimeter GDPR / Sensitive Health Data Shielding",
                        "Mobile loading speed under 0.6 seconds"
                    ],
                    preserve: [
                        "Existing appointment scheduling software (Doctoralia, etc.)",
                        "Current patient databases & records",
                        "Phone lines and front desk operational workflows"
                    ]
                },
                despachos: {
                    title: "Law Firms & Professional Practices",
                    problem: "Lacking digital gravitas against elite global firms. Zero DMARC protection allows cybercriminals to impersonate managing partners and send fraudulent escrow bank accounts during settlements (CEO fraud).",
                    modernize: [
                        "Prestige editorial direction with Instrument Serif typography",
                        "Cryptographic DMARC p=reject anti-impersonation shield",
                        "Confidential priority consultation pathway"
                    ],
                    preserve: [
                        "Current firm email servers & suites",
                        "Existing case management & document platforms",
                        "Pre-established legal compliance frameworks"
                    ]
                },
                inmobiliarias: {
                    title: "Real Estate & Wealth Asset Management",
                    problem: "Core value proposition is diluted by generic portal listings. Mobile load speed causes high-net-worth buyers to bounce before scheduling a private property viewing.",
                    modernize: [
                        "Exclusive acquisition hero showcasing premium asset portfolios",
                        "Fast conversion via 1-tap WhatsApp or private concierge line",
                        "Anti-spoofing defense on earnest money contract dispatches"
                    ],
                    preserve: [
                        "XML feeds with Idealista, Fotocasa & real estate CRMs",
                        "Existing property search engine architecture",
                        "Sales team commercial routing channels"
                    ]
                },
                restauracion: {
                    title: "Fine Dining & Premium Hospitality",
                    problem: "PDF menus are illegible on mobile devices. Low-resolution photos fail to reflect the dining experience, and booking widgets are hidden beneath multiple clicks.",
                    modernize: [
                        "Instant-loading mobile-first interactive dining menu",
                        "Direct table reservation with instant confirmation",
                        "Cinematic culinary photography and engaging visual rhythm"
                    ],
                    preserve: [
                        "Current POS & booking engine (CoverManager / OpenTable)",
                        "Supplier and supply chain ordering channels",
                        "Dining room schedules and front-of-house operations"
                    ]
                },
                ocio: {
                    title: "Leisure, Theme Parks & Live Events",
                    problem: "The actual experience is undermined by digital friction: opaque pricing structures, cumbersome checkout funnels, and high mobile abandon rates.",
                    modernize: [
                        "Immersive visual experience showcasing premier event passes",
                        "Transparent tiered pricing and dominant call to action",
                        "Security compliance certification badge on checkout gateway"
                    ],
                    preserve: [
                        "Existing ticketing platform & virtual payment gateway",
                        "Customer visitor support channels",
                        "Current hosting infrastructure"
                    ]
                }
            }
        };

        function selectSector(key, btn) {
            currentSelectedSector = key;
            const targetBtn = btn || document.querySelector(`.sector-tab-btn[data-sector="${key}"]`) || document.querySelector('.sector-tab-btn');
            document.querySelectorAll('.sector-tab-btn').forEach(b => {
                b.classList.remove('active', 'bg-cyan-500', 'text-slate-950', 'shadow-lg', 'shadow-cyan-500/20');
                b.classList.add('bg-slate-900', 'text-slate-400', 'border', 'border-white/5');
            });
            if (targetBtn) {
                targetBtn.classList.add('active', 'bg-cyan-500', 'text-slate-950', 'shadow-lg', 'shadow-cyan-500/20');
                targetBtn.classList.remove('bg-slate-900', 'text-slate-400', 'border', 'border-white/5');
            }

            const lang = currentPerimeterLang || 'es';
            const s = (sectorData[lang] && sectorData[lang][key]) ? sectorData[lang][key] : sectorData['es'][key];
            const box = document.getElementById('sector-display-box');
            if (!box) return;

            const lblDiagnostic = lang === 'en' ? 'Sector-Specific Diagnostic' : 'Diagnóstico Específico del Sector';
            const lblModernize = lang === 'en' ? 'What we modernize' : 'Lo que modernizamos';
            const lblPreserve = lang === 'en' ? 'What we preserve intact' : 'Lo que preservamos intacto';
            const lblUntouched = lang === 'en' ? 'Without touching your existing operations:' : 'Sin tocar tu operativa existente:';
            const lblCta = lang === 'en' ? 'Request audit for this sector &rarr;' : 'Solicitar auditoría de este sector &rarr;';

            box.innerHTML = `
                <div class="flex flex-col lg:flex-row justify-between gap-10">
                    <div class="flex-1">
                        <span class="font-mono text-xs font-bold text-cyan-400 uppercase tracking-widest">${lblDiagnostic}</span>
                        <h3 class="mt-2 text-2xl sm:text-3xl font-bold text-white">${s.title}</h3>
                        <p class="mt-3 text-sm text-slate-300 leading-relaxed">${s.problem}</p>
                        
                        <div class="mt-8">
                            <h4 class="font-mono text-xs uppercase tracking-wider text-emerald-400 font-bold">${lblModernize}</h4>
                            <ul class="mt-3 space-y-2 text-xs sm:text-sm text-slate-300">
                                ${s.modernize.map(m => `<li class="flex items-center gap-2.5"><svg class="h-4 w-4 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg> ${m}</li>`).join('')}
                            </ul>
                        </div>
                    </div>

                    <div class="lg:w-96 rounded-2xl bg-slate-950/80 p-7 border border-white/10 shadow-inner">
                        <h4 class="font-mono text-xs uppercase tracking-wider text-warmGold font-bold">${lblPreserve}</h4>
                        <p class="mt-1 text-xs text-slate-400">${lblUntouched}</p>
                        <ul class="mt-4 space-y-2.5 text-sm text-slate-300">
                            ${s.preserve.map(p => `<li class="flex items-center gap-2"><span class="text-warmGold font-bold">✓</span> ${p}</li>`).join('')}
                        </ul>

                        <div class="mt-8 pt-5 border-t border-white/10 text-center">
                            <a href="#scanner" class="block w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3 text-xs font-extrabold text-slate-950 hover:brightness-110 transition-all shadow-lg shadow-cyan-500/20">
                                ${lblCta}
                            </a>
                        </div>
                    </div>
                </div>
            `;
        }

        // Live Scanner State & Logic (real, passive DNS checks via DNS-over-HTTPS)
        let lastScanDomain = "";
        let lastScanScore = null;
        const CONTACT_EMAIL = 'auditorias@synertalk.com';

        function escapeHtml(str) {
            return String(str).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
        }

        function normalizeDomain(raw) {
            let value = String(raw || '').trim();
            if (!value) return null;
            if (!/^[a-z][a-z0-9+.-]*:\/\//i.test(value)) value = 'http://' + value;
            let host;
            try { host = new URL(value).hostname.toLowerCase().replace(/\.$/, ''); } catch (e) { return null; }
            if (host.startsWith('www.')) host = host.slice(4);
            return /^(?=.{1,253}$)(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9-]{2,63}$/.test(host) ? host : null;
        }

        async function dohQuery(name, type) {
            const resolvers = [
                { url: `https://dns.google/resolve?name=${encodeURIComponent(name)}&type=${type}&do=1`, headers: {} },
                { url: `https://cloudflare-dns.com/dns-query?name=${encodeURIComponent(name)}&type=${type}&do=1`, headers: { accept: 'application/dns-json' } }
            ];
            for (const r of resolvers) {
                try {
                    const ctrl = new AbortController();
                    const timer = setTimeout(() => ctrl.abort(), 6000);
                    const res = await fetch(r.url, { headers: r.headers, signal: ctrl.signal });
                    clearTimeout(timer);
                    if (res.ok) return await res.json();
                } catch (e) { /* try next resolver */ }
            }
            throw new Error('DNS resolvers unreachable');
        }

        async function txtRecords(name) {
            const data = await dohQuery(name, 'TXT');
            return (data.Answer || [])
                .filter(a => a.type === 16)
                .map(a => String(a.data).replace(/"\s+"/g, '').replace(/^"|"$/g, ''));
        }

        // Common DKIM selectors: Google Workspace (google), Microsoft 365 (selector1/2), Proton Mail (protonmail),
        // Fastmail (fm1), Mailchimp/Mandrill (k1, mandrill), SendGrid (s1/s2), Zoho, cPanel/Plesk (default, dkim, mail, mxvault)
        const DKIM_SELECTORS = ['google', 'selector1', 'selector2', 'protonmail', 'fm1', 'default', 'k1', 'mandrill', 's1', 's2', 'dkim', 'mail', 'mxvault', 'zoho'];

        async function findDkimSelector(domain) {
            const results = await Promise.all(DKIM_SELECTORS.map(sel =>
                txtRecords(`${sel}._domainkey.${domain}`)
                    .then(txts => txts.some(t => /(^|;)\s*v=DKIM1/i.test(t) || /(^|;)\s*p=[A-Za-z0-9+/]{20,}/.test(t)) ? sel : null)
                    .catch(() => null)
            ));
            return results.find(Boolean) || null;
        }

        async function runPassiveAudit(domain) {
            const [base, aRec, dmarcTxt, mx, caa, mtaSts, tlsRpt, dkimSelector] = await Promise.all([
                txtRecords(domain),
                dohQuery(domain, 'A'),
                txtRecords('_dmarc.' + domain),
                dohQuery(domain, 'MX'),
                dohQuery(domain, 'CAA'),
                txtRecords('_mta-sts.' + domain),
                txtRecords('_smtp._tls.' + domain),
                findDkimSelector(domain)
            ]);
            if (aRec.Status === 3) return { exists: false };

            const findings = [];
            let score = 0;
            const add = (key, points, status) => { score += points; findings.push({ key, status }); };

            const spf = base.filter(t => /^v=spf1(\s|$)/i.test(t));
            if (spf.length === 0) add('spf', 0, 'bad');
            else if (spf.length > 1) add('spfMulti', 5, 'bad');
            else if (/\s-all\b/i.test(spf[0])) add('spfHard', 25, 'good');
            else if (/\s~all\b/i.test(spf[0])) add('spfSoft', 18, 'warn');
            else add('spfWeak', 5, 'bad');

            const dmarc = dmarcTxt.filter(t => /^v=DMARC1/i.test(t));
            const policy = dmarc.length === 1 ? ((dmarc[0].match(/(?:^|;)\s*p\s*=\s*(\w+)/i) || [])[1] || '').toLowerCase() : '';
            if (dmarc.length === 0) add('dmarc', 0, 'bad');
            else if (dmarc.length > 1) add('dmarcMulti', 5, 'bad');
            else if (policy === 'reject') add('dmarcReject', 45, 'good');
            else if (policy === 'quarantine') add('dmarcQuarantine', 30, 'warn');
            else add('dmarcNone', 10, 'bad');

            // DKIM is informational: without the real selector its absence cannot be proven, so it does not change the score
            if (dkimSelector) findings.push({ key: 'dkim', status: 'good', detail: dkimSelector });
            else findings.push({ key: 'dkimUnknown', status: 'info' });

            if (aRec.AD === true) add('dnssec', 10, 'good'); else add('dnssecNo', 0, 'warn');
            if ((caa.Answer || []).some(a => a.type === 257)) add('caa', 10, 'good'); else add('caaNo', 0, 'warn');

            const hasMx = (mx.Answer || []).some(a => a.type === 15 && !/^0\s+\.?$/.test(String(a.data).trim()));
            if (mtaSts.some(t => /^v=STSv1/i.test(t))) add('mtaSts', 5, 'good'); else add('mtaStsNo', 0, hasMx ? 'warn' : 'info');
            if (tlsRpt.some(t => /^v=TLSRPTv1/i.test(t))) add('tlsRpt', 5, 'good'); else add('tlsRptNo', 0, hasMx ? 'warn' : 'info');

            return { exists: true, score, findings, hasMx };
        }

        const findingText = {
            es: {
                spf: ['SPF ausente', 'No hay registro SPF: cualquier servidor puede enviar correo en nombre de tu dominio.'],
                spfMulti: ['Varios registros SPF', 'Hay más de un registro SPF; los receptores lo tratan como error (permerror).'],
                spfHard: ['SPF estricto (-all)', 'Solo los servidores autorizados pueden enviar correo con tu dominio.'],
                spfSoft: ['SPF permisivo (~all)', 'El SPF existe pero solo marca como sospechoso el correo no autorizado.'],
                spfWeak: ['SPF sin política de rechazo', 'El SPF termina en ?all, +all o sin "all": no protege frente a suplantación.'],
                dmarc: ['DMARC ausente', 'Sin DMARC, los receptores no saben qué hacer con correos que suplantan tu dominio (fraude de facturas).'],
                dmarcMulti: ['Varios registros DMARC', 'Hay más de un registro DMARC; los receptores lo ignoran.'],
                dmarcReject: ['DMARC p=reject', 'Los correos que suplantan tu dominio se rechazan.'],
                dmarcQuarantine: ['DMARC p=quarantine', 'Los correos suplantados van a spam, pero no se rechazan.'],
                dmarcNone: ['DMARC en modo monitorización (p=none)', 'DMARC existe pero no bloquea la suplantación.'],
                dnssec: ['DNSSEC activo', 'Las respuestas DNS de tu dominio están firmadas.'],
                dnssecNo: ['DNSSEC no validado', 'Las respuestas DNS no están firmadas: posible envenenamiento de caché.'],
                caa: ['Registro CAA presente', 'Solo las autoridades autorizadas pueden emitir certificados TLS para tu dominio.'],
                caaNo: ['Sin registro CAA', 'Cualquier autoridad de certificación puede emitir certificados para tu dominio.'],
                mtaSts: ['MTA-STS activo', 'El correo entrante exige TLS.'],
                mtaStsNo: ['Sin MTA-STS', 'El correo entrante no exige cifrado TLS entre servidores.'],
                tlsRpt: ['TLS-RPT activo', 'Recibes informes de fallos de cifrado en el correo.'],
                tlsRptNo: ['Sin TLS-RPT', 'No recibes informes de fallos de cifrado en el correo.'],
                dkim: ['DKIM detectado', 'Hay una clave DKIM publicada (selector: {detail}); los correos se pueden firmar.'],
                dkimUnknown: ['DKIM no detectado', 'No hay clave DKIM en los selectores habituales. Puede existir con otro selector: lo verificamos en la auditoría.']
            },
            en: {
                spf: ['SPF missing', 'No SPF record: any server can send email on behalf of your domain.'],
                spfMulti: ['Multiple SPF records', 'More than one SPF record; receivers treat this as an error (permerror).'],
                spfHard: ['Strict SPF (-all)', 'Only authorized servers can send email using your domain.'],
                spfSoft: ['Lenient SPF (~all)', 'SPF exists but only flags unauthorized email as suspicious.'],
                spfWeak: ['SPF without rejection policy', 'SPF ends in ?all, +all or has no "all": no spoofing protection.'],
                dmarc: ['DMARC missing', 'Without DMARC, receivers do not know what to do with emails spoofing your domain (invoice fraud).'],
                dmarcMulti: ['Multiple DMARC records', 'More than one DMARC record; receivers ignore it.'],
                dmarcReject: ['DMARC p=reject', 'Emails spoofing your domain are rejected.'],
                dmarcQuarantine: ['DMARC p=quarantine', 'Spoofed emails go to spam but are not rejected.'],
                dmarcNone: ['DMARC in monitoring mode (p=none)', 'DMARC exists but does not block spoofing.'],
                dnssec: ['DNSSEC active', 'Your domain DNS answers are signed.'],
                dnssecNo: ['DNSSEC not validated', 'DNS answers are unsigned: cache poisoning is possible.'],
                caa: ['CAA record present', 'Only authorized CAs can issue TLS certificates for your domain.'],
                caaNo: ['No CAA record', 'Any certificate authority can issue certificates for your domain.'],
                mtaSts: ['MTA-STS active', 'Inbound email requires TLS.'],
                mtaStsNo: ['No MTA-STS', 'Inbound email does not require TLS between servers.'],
                tlsRpt: ['TLS-RPT active', 'You receive reports about email encryption failures.'],
                tlsRptNo: ['No TLS-RPT', 'You do not receive reports about email encryption failures.'],
                dkim: ['DKIM detected', 'A DKIM key is published (selector: {detail}); emails can be signed.'],
                dkimUnknown: ['DKIM not detected', 'No DKIM key under common selectors. It may exist under another selector: we verify it in the audit.']
            }
        };

        function renderFindings(findings) {
            const box = document.getElementById('res-findings');
            if (!box) return;
            const t = findingText[currentPerimeterLang] || findingText.es;
            const styles = {
                bad: ['border-red-500/20', 'text-red-300', '✕'],
                warn: ['border-amber-500/20', 'text-amber-300', '!'],
                good: ['border-emerald-500/20', 'text-emerald-300', '✓'],
                info: ['border-white/10', 'text-slate-300', 'i']
            };
            const order = { bad: 0, warn: 1, info: 2, good: 3 };
            box.innerHTML = findings.slice().sort((a, b) => order[a.status] - order[b.status]).map(f => {
                const [border, color, icon] = styles[f.status];
                const [title, rawDesc] = t[f.key];
                const desc = rawDesc.replace('{detail}', f.detail || '');
                return `<div class="rounded-xl bg-slate-950/70 p-4 border ${border}">
                    <div class="text-xs font-bold ${color} flex items-center gap-2 font-mono"><span aria-hidden="true">${icon}</span><span>${escapeHtml(title)}</span></div>
                    <p class="mt-1 text-xs text-slate-400 leading-relaxed">${escapeHtml(desc)}</p>
                </div>`;
            }).join('');
        }

        function setTerminalHeader(title, sub) {
            const t = document.getElementById('scan-term-title');
            const s = document.getElementById('scan-term-sub');
            if (t) t.textContent = title;
            if (s) s.textContent = sub;
        }

        function scanLog(logs, text, cls) {
            const div = document.createElement('div');
            if (cls) div.className = cls;
            div.textContent = '> ' + text;
            logs.appendChild(div);
        }

        function resetScanButton(btn) {
            btn.disabled = false;
            btn.innerHTML = `<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg> <span id="scan-btn-txt">${currentPerimeterLang === 'en' ? 'Scan Again' : 'Escanear de Nuevo'}</span>`;
        }

        async function triggerLiveScan() {
            const input = document.getElementById('target-input');
            const btn = document.getElementById('scan-btn');
            const terminal = document.getElementById('scan-terminal');
            const logs = document.getElementById('scan-logs');
            const pct = document.getElementById('scan-pct');
            const resultCard = document.getElementById('scan-result-card');
            const en = currentPerimeterLang === 'en';

            const domain = normalizeDomain(input.value);
            resultCard.classList.add('hidden');
            terminal.classList.remove('hidden');
            logs.textContent = '';
            pct.innerText = '0%';
            if (!domain) {
                scanLog(logs, en ? 'Invalid domain. Example: yourcompany.com' : 'Dominio no válido. Ejemplo: tuempresa.com', 'text-red-400');
                return;
            }

            setTerminalHeader(en ? 'PASSIVE AUDIT IN PROGRESS' : 'AUDITORÍA PASIVA EN CURSO',
                en ? 'Querying public DNS records (DNS-over-HTTPS)...' : 'Consultando registros DNS públicos (DNS-over-HTTPS)...');
            lastScanDomain = domain;
            btn.disabled = true;
            btn.innerHTML = `<span class="h-4 w-4 rounded-full border-2 border-slate-950 border-t-transparent animate-spin inline-block mr-1"></span> ${en ? 'Scanning...' : 'Escaneando...'}`;

            scanLog(logs, (en ? 'Querying public DNS records for ' : 'Consultando registros DNS públicos de ') + domain + '...', 'text-slate-300');
            pct.innerText = '30%';

            let result;
            try {
                result = await runPassiveAudit(domain);
            } catch (e) {
                scanLog(logs, en ? 'Could not reach the DNS resolvers. Check your connection and try again.' : 'No se pudo contactar con los resolvedores DNS. Revisa tu conexión e inténtalo de nuevo.', 'text-red-400');
                resetScanButton(btn);
                return;
            }
            if (!result.exists) {
                scanLog(logs, en ? 'The domain does not exist (NXDOMAIN).' : 'El dominio no existe (NXDOMAIN).', 'text-red-400');
                resetScanButton(btn);
                return;
            }
            pct.innerText = '100%';

            const score = result.score;
            lastScanScore = score;
            document.getElementById('res-domain').innerText = domain;
            document.getElementById('res-score-num').innerText = score;
            renderFindings(result.findings);

            const circle = document.getElementById('gauge-circle-elem');
            const circumference = 251.2;
            circle.style.strokeDashoffset = circumference - (score / 100) * circumference;

            const tag = document.getElementById('res-level-tag');
            if (score >= 80) {
                circle.setAttribute('stroke', '#00E599');
                tag.innerText = en ? 'STRONG' : 'ROBUSTO';
                tag.className = "font-mono text-xs font-bold text-emerald-400";
            } else if (score >= 50) {
                circle.setAttribute('stroke', '#F59E0B');
                tag.innerText = en ? 'MEDIUM RISK' : 'RIESGO MEDIO';
                tag.className = "font-mono text-xs font-bold text-amber-400";
            } else {
                circle.setAttribute('stroke', '#FF3366');
                tag.innerText = en ? 'HIGH RISK / SPOOFABLE' : 'RIESGO ALTO / SUPLANTABLE';
                tag.className = "font-mono text-xs font-bold text-red-400";
            }

            terminal.classList.add('hidden');
            resultCard.classList.remove('hidden');
            resetScanButton(btn);
        }

        function buildMailto(subject, body) {
            return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        }

        function submitLeadUnlock() {
            const emailInput = document.getElementById('res-email');
            const email = emailInput ? emailInput.value.trim() : '';
            const domain = lastScanDomain;
            const en = currentPerimeterLang === 'en';
            if (!email || !domain || (emailInput && !emailInput.checkValidity())) return;

            const mailto = buildMailto(
                en ? `Infographic request: ${domain}` : `Solicitud de infografía: ${domain}`,
                en ? `Domain: ${domain}\nPassive score: ${lastScanScore}/100\nContact email: ${email}\n`
                   : `Dominio: ${domain}\nPuntuación pasiva: ${lastScanScore}/100\nEmail de contacto: ${email}\n`
            );
            const safeDomain = escapeHtml(domain);
            const safeEmail = escapeHtml(email);
            const container = document.getElementById('lead-unlock-container');

            const message = en
                ? `To receive the infographic for <strong class="text-cyan-400">${safeDomain}</strong>, send us the pre-filled email below.`
                : `Para recibir la infografía de <strong class="text-cyan-400">${safeDomain}</strong>, envíanos el email que hemos preparado.`;
            const button = `
                    <div class="mt-5 flex flex-wrap items-center justify-center gap-3">
                        <a href="${escapeHtml(mailto)}" class="inline-flex items-center gap-2 rounded-xl bg-emerald-400 px-5 py-3 text-xs font-black text-slate-950 hover:bg-emerald-300 transition-all shadow-lg shadow-emerald-500/25 active:scale-95">
                            <span>${en ? 'Send request by email' : 'Enviar solicitud por email'}</span>
                        </a>
                    </div>`;

            container.innerHTML = `
                <div class="rounded-xl bg-emerald-950/40 border border-emerald-500/30 p-6 text-center shadow-2xl">
                    <h4 class="text-base font-bold text-white">${en ? 'One last step' : 'Último paso'}</h4>
                    <p class="text-xs text-slate-300 mt-1 max-w-md mx-auto">${message}</p>${button}
                </div>
            `;
        }

        // Initialize default sector
        selectSector('clinicas', document.querySelector('.sector-tab-btn'));

        // Dual Service Cockpit Logic (Web vs Crypto)
        currentHeroMode = 'web';

        function switchHeroMode(mode) {
            currentHeroMode = mode;
            if (typeof set4DMode === 'function') {
                set4DMode(mode);
            }
            const btnWeb = document.getElementById('tab-mode-web');
            const btnCrypto = document.getElementById('tab-mode-crypto');
            const prefix = document.getElementById('hero-input-prefix');
            const input = document.getElementById('target-input');
            const scanBtnTxt = document.getElementById('scan-btn-txt');
            const terminal = document.getElementById('scan-terminal');
            const resultCard = document.getElementById('scan-result-card');

            if (terminal) terminal.classList.add('hidden');
            if (resultCard) resultCard.classList.add('hidden');

            if (mode === 'web') {
                if (btnWeb) btnWeb.className = 'rounded-xl border border-cyan-500/40 bg-cyan-500/20 px-3.5 py-1.5 text-xs font-mono font-bold text-cyan-300 transition-all flex items-center gap-1.5';
                if (btnCrypto) btnCrypto.className = 'rounded-xl border border-white/10 bg-slate-900/80 px-3.5 py-1.5 text-xs font-mono font-bold text-slate-400 hover:text-purple-300 hover:border-purple-500/30 transition-all flex items-center gap-1.5';
                if (prefix) {
                    prefix.innerText = 'https://';
                    prefix.className = 'pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 font-mono text-sm text-cyan-400';
                }
                if (input) {
                    input.placeholder = currentPerimeterLang === 'en' ? 'yourcompany.com' : 'tuempresa.com';
                    input.value = '';
                }
                if (scanBtnTxt) scanBtnTxt.innerText = currentPerimeterLang === 'en' ? 'Scan Live Now' : 'Escanear en Vivo';
            } else {
                if (btnCrypto) btnCrypto.className = 'rounded-xl border border-purple-500/40 bg-purple-500/20 px-3.5 py-1.5 text-xs font-mono font-bold text-purple-300 transition-all flex items-center gap-1.5';
                if (btnWeb) btnWeb.className = 'rounded-xl border border-white/10 bg-slate-900/80 px-3.5 py-1.5 text-xs font-mono font-bold text-slate-400 hover:text-cyan-300 hover:border-cyan-500/30 transition-all flex items-center gap-1.5';
                if (prefix) {
                    prefix.innerText = '0x/TxID';
                    prefix.className = 'pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 font-mono text-sm text-purple-400';
                }
                if (input) {
                    input.placeholder = currentPerimeterLang === 'en' ? '0x... or TxID (ETH, TRON, BTC, SOL)' : '0x... o TxID (ETH, TRON, BTC, SOL)';
                    input.value = '';
                }
                if (scanBtnTxt) scanBtnTxt.innerText = currentPerimeterLang === 'en' ? 'Live Forensic Triage' : 'Triage Forense en Vivo';
            }
        }

        async function handleHeroSubmit() {
            if (typeof trigger4DBoost === 'function') {
                trigger4DBoost();
            }
            if (currentHeroMode === 'web') {
                triggerLiveScan();
            } else {
                executeCryptoTriage();
            }
        }

        function detectChainInput(value) {
            const v = value.trim();
            if (/^0x[0-9a-fA-F]{40}$/.test(v)) return { kind: 'evmAddress', explorer: `https://etherscan.io/address/${v}` };
            if (/^0x[0-9a-fA-F]{64}$/.test(v)) return { kind: 'evmTx', explorer: `https://etherscan.io/tx/${v}` };
            if (/^T[1-9A-HJ-NP-Za-km-z]{33}$/.test(v)) return { kind: 'tronAddress', explorer: `https://tronscan.org/#/address/${v}` };
            if (/^(bc1[02-9ac-hj-np-z]{11,71}|[13][1-9A-HJ-NP-Za-km-z]{25,34})$/.test(v)) return { kind: 'btcAddress', explorer: `https://mempool.space/address/${v}` };
            if (/^[0-9a-fA-F]{64}$/.test(v)) return { kind: 'hexTx', explorer: null };
            if (/^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(v)) return { kind: 'solAddress', explorer: `https://solscan.io/account/${v}` };
            if (/^[1-9A-HJ-NP-Za-km-z]{86,88}$/.test(v)) return { kind: 'solTx', explorer: `https://solscan.io/tx/${v}` };
            return null;
        }

        async function executeCryptoTriage() {
            const input = document.getElementById('target-input').value.trim();
            if (!input) return;

            const terminal = document.getElementById('scan-terminal');
            const logs = document.getElementById('scan-logs');
            const pct = document.getElementById('scan-pct');
            const resultCard = document.getElementById('scan-result-card');
            const en = currentPerimeterLang === 'en';

            if (resultCard) resultCard.classList.add('hidden');
            if (terminal) terminal.classList.remove('hidden');
            if (pct) pct.innerText = '';
            if (!logs) return;
            logs.textContent = '';

            setTerminalHeader(en ? 'CRYPTO CASE INTAKE' : 'RECEPCIÓN DE CASO CRIPTO',
                en ? 'Format check only: no automatic tracing' : 'Solo se comprueba el formato: sin rastreo automático');
            const detected = detectChainInput(input);
            if (!detected) {
                scanLog(logs, en ? 'Unrecognized format. Paste a wallet address or transaction hash (ETH/EVM, TRON, BTC or Solana).'
                                 : 'Formato no reconocido. Pega una dirección o un hash de transacción (ETH/EVM, TRON, BTC o Solana).', 'text-red-400');
                return;
            }

            const labels = {
                es: { evmAddress: 'dirección EVM (Ethereum, BSC, Polygon…)', evmTx: 'hash de transacción EVM', tronAddress: 'dirección TRON', btcAddress: 'dirección Bitcoin', hexTx: 'hash de transacción (Bitcoin u otra red)', solAddress: 'dirección Solana', solTx: 'firma de transacción Solana' },
                en: { evmAddress: 'EVM address (Ethereum, BSC, Polygon…)', evmTx: 'EVM transaction hash', tronAddress: 'TRON address', btcAddress: 'Bitcoin address', hexTx: 'transaction hash (Bitcoin or other network)', solAddress: 'Solana address', solTx: 'Solana transaction signature' }
            };
            const kindLabel = labels[en ? 'en' : 'es'][detected.kind];
            const mailto = buildMailto(
                en ? 'Crypto fraud case review request' : 'Solicitud de revisión de caso cripto',
                en ? `Identifier (${kindLabel}): ${input}\nDate of the loss:\nAmount and asset:\nShort description:\n`
                   : `Identificador (${kindLabel}): ${input}\nFecha de la pérdida:\nImporte y activo:\nBreve descripción:\n`
            );
            const explorerLink = detected.explorer
                ? `<a href="${escapeHtml(detected.explorer)}" target="_blank" rel="noopener noreferrer" class="text-purple-400 underline">${en ? 'View on public block explorer' : 'Ver en el explorador público'}</a>`
                : '';

            logs.innerHTML = `
                <div class="pt-1 text-white font-sans">
                    <div class="font-bold text-sm text-purple-300 mb-1">${en ? 'Format recognized' : 'Formato reconocido'}: ${escapeHtml(kindLabel)}</div>
                    <p class="text-xs text-slate-300">${en
                        ? 'This page does not trace funds automatically and has not analyzed this identifier yet. On-chain tracing is performed manually by an analyst; we will tell you whether the funds are traceable before you commit to any paid service.'
                        : 'Esta página no rastrea fondos de forma automática y todavía no ha analizado este identificador. El rastreo on-chain lo realiza manualmente un analista; te diremos si los fondos son rastreables antes de que contrates ningún servicio de pago.'}</p>
                    <p class="text-xs text-amber-300 mt-2">${en
                        ? 'Warning: no one can guarantee recovery of stolen crypto. Be wary of anyone who asks for upfront payment promising to recover your funds.'
                        : 'Aviso: nadie puede garantizar la recuperación de criptoactivos robados. Desconfía de quien pida pagos por adelantado prometiendo recuperar tus fondos.'}</p>
                    <div class="mt-3 flex flex-wrap items-center gap-4 text-xs">
                        <a href="${escapeHtml(mailto)}" class="rounded-lg bg-purple-500 px-4 py-2 font-bold text-white hover:bg-purple-400">${en ? 'Request a case review' : 'Solicitar revisión del caso'}</a>
                        ${explorerLink}
                    </div>
                </div>
            `;
        }

        // Run initial translation on page load
        if (typeof setPerimeterLang === 'function') {
            setPerimeterLang(currentPerimeterLang);
        }


        // ==========================================
        // TACTICAL COCKPIT STATE ENGINE (LIGHTWEIGHT & ACCESSIBLE)
        // ==========================================
        function set4DMode(mode) {
            // Dual-mode state helper
        }
        function trigger4DBoost() {
            // Subtle pulse state helper
        }

        if (typeof navigator !== 'undefined' && navigator.modelContext && typeof navigator.modelContext.provideContext === 'function') {
            try {
                navigator.modelContext.provideContext({
                    tools: [
                        {
                            name: "audit_domain_nis2",
                            description: "Audita la seguridad perimetral y política DMARC bajo la directiva NIS2",
                            inputSchema: {
                                type: "object",
                                properties: {
                                    domain: { type: "string", description: "Dominio corporativo a auditar" }
                                },
                                required: ["domain"]
                            },
                            execute: async ({ domain }) => {
                                const host = normalizeDomain(domain);
                                if (!host) return { error: "invalid_domain" };
                                const result = await runPassiveAudit(host);
                                if (!result.exists) return { domain: host, error: "nxdomain" };
                                return {
                                    domain: host,
                                    passive_score: result.score,
                                    findings: result.findings.map(f => ({ check: f.key, status: f.status })),
                                    note: "Passive DNS checks only (SPF, DMARC, DNSSEC, CAA, MTA-STS, TLS-RPT).",
                                    service_url: "https://web.synertalk.com/#sectores"
                                };
                            }
                        }
                    ]
                });
            } catch(e) {
                console.log("WebMCP initialized");
            }
        }

        // Event wiring (replaces inline on* handlers so the CSP can forbid inline scripts)
        document.querySelectorAll('[data-lang]').forEach(btn => btn.addEventListener('click', () => goToLang(btn.dataset.lang)));
        document.querySelectorAll('[data-hero-mode]').forEach(btn => btn.addEventListener('click', () => switchHeroMode(btn.dataset.heroMode)));
        document.querySelectorAll('.sector-tab-btn[data-sector]').forEach(btn => btn.addEventListener('click', () => selectSector(btn.dataset.sector, btn)));
        document.getElementById('hero-scan-form').addEventListener('submit', e => { e.preventDefault(); handleHeroSubmit(); });
        document.getElementById('lead-unlock-form').addEventListener('submit', e => { e.preventDefault(); submitLeadUnlock(); });
