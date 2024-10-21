const servicesIt = {
  leadConversionAndCustomerAcquisition: {
    title: "Conversione di Lead e Acquisizione Clienti",
    subServices: [
      {
        title: "Automazione del Lead Nurturing",
        text: "Implementazione di workflow email automatizzati per coinvolgere i lead con contenuti personalizzati e follow-up tempestivi.",
      },
      {
        title: "Ottimizzazione del Tasso di Conversione",
        text: "Miglioramento delle landing page e dei funnel di vendita per ottimizzare l'esperienza utente e aumentare le conversioni.",
      },
      {
        title: "Test A/B e Ottimizzazione",
        text: "Test di diverse versioni delle pagine chiave e delle offerte per identificare gli elementi più efficaci.",
      },
      {
        title: "Mappatura del Customer Journey",
        text: "Analisi e ottimizzazione dell'intero percorso dal lead al cliente per transizioni più fluide.",
      },
    ],
  },
  marketingStrategyDevelopment: {
    title: "Sviluppo della Strategia di Marketing",
    subServices: [
      {
        title: "Workshop di Pianificazione Strategica",
        text: "Sviluppo di una strategia di marketing completa con obiettivi chiari e piani d'azione.",
      },
      {
        title: "Ricerca di Mercato e Analisi Competitiva",
        text: "Ricerca approfondita per identificare opportunità di mercato, insight sul pubblico e posizionamento competitivo.",
      },
      {
        title: "Definizione degli Obiettivi e Sviluppo KPI",
        text: "Definizione e impostazione di obiettivi specifici e misurabili e di indicatori chiave di prestazione per monitorare i progressi.",
      },
      {
        title: "Creazione della Roadmap di Marketing",
        text: "Creazione di una roadmap dettagliata che delinei iniziative, tempistiche e allocazione delle risorse.",
      },
    ],
  },
  socialMediaEngagement: {
    title: "Coinvolgimento sui Social Media",
    subServices: [
      {
        title: "Gestione dei Social Media",
        text: "Sviluppo e implementazione di un calendario editoriale con post coinvolgenti su misura per il tuo pubblico.",
      },
      {
        title: "Strategie di Coinvolgimento della Comunità",
        text: "Promozione di interazioni e costruzione di relazioni attraverso strategie di coinvolgimento attivo e risposta.",
      },
      {
        title: "Pubblicità sui Social Media",
        text: "Gestione di campagne pubblicitarie mirate per aumentare la visibilità e il coinvolgimento.",
      },
      {
        title: "Analisi delle Prestazioni e Reportistica",
        text: "Monitoraggio delle metriche sui social media e regolazione delle strategie basate su insight dei dati.",
      },
    ],
  },
  analyticsAndPerformanceMeasurement: {
    title: "Analisi e Misurazione delle Prestazioni",
    subServices: [
      {
        title: "Configurazione Avanzata delle Analisi",
        text: "Implementazione di strumenti di analisi avanzati per raccogliere e analizzare dati su tutti i canali di marketing.",
      },
      {
        title: "Dashboard di Reportistica Personalizzati",
        text: "Sviluppo di dashboard in tempo reale per visualizzare le metriche chiave e monitorare le prestazioni.",
      },
      {
        title: "Integrazione e Centralizzazione dei Dati",
        text: "Aggregazione dei dati da diverse fonti in un sistema unificato per un'analisi completa.",
      },
      {
        title: "Revisione delle Prestazioni e Ottimizzazione",
        text: "Revisione periodica delle analisi per identificare tendenze, valutare l'efficacia e perfezionare le strategie.",
      },
    ],
  },
  audienceUnderstandingAndTargeting: {
    title: "Comprensione e Targeting del Pubblico",
    subServices: [
      {
        title: "Ricerca e Segmentazione del Pubblico",
        text: "Ricerca approfondita per comprendere demografia, comportamenti e preferenze.",
      },
      {
        title: "Sviluppo delle Personas del Cliente",
        text: "Creazione di personas dettagliate per guidare gli sforzi di marketing mirati e il messaggio.",
      },
      {
        title: "Raccolta di Sondaggi e Feedback",
        text: "Implementazione di strumenti per raccogliere feedback diretto dal tuo pubblico per perfezionare la comprensione.",
      },
      {
        title: "Analisi delle Tendenze di Mercato",
        text: "Analisi delle tendenze e dei cambiamenti del settore per restare allineati con le esigenze in evoluzione dei clienti.",
      },
    ],
  },
  customerRetention: {
    title: "Fidelizzazione del Cliente",
    subServices: [
      {
        title: "Progettazione di Programmi di Fedeltà",
        text: "Sviluppo e lancio di programmi di fedeltà per incentivare il ritorno dei clienti e premiare l'engagement.",
      },
      {
        title: "Strategie di Comunicazione Personalizzata",
        text: "Sviluppo di comunicazioni personalizzate basate sui dati per mantenere il coinvolgimento dei clienti.",
      },
      {
        title: "Feedback dei Clienti e Miglioramenti",
        text: "Implementazione di sistemi di feedback per migliorare continuamente prodotti e servizi.",
      },
      {
        title: "Analisi della Fidelizzazione",
        text: "Monitoraggio delle metriche di fidelizzazione e del comportamento dei clienti per identificare opportunità di miglioramento.",
      },
    ],
  },
  uniqueSellingPropositionDevelopment: {
    title: "Sviluppo della Proposta di Valore Unica (USP)",
    subServices: [
      {
        title: "Workshop di Scoperta della USP",
        text: "Identificazione della tua proposta di valore unica.",
      },
      {
        title: "Analisi del Posizionamento Competitivo",
        text: "Valutazione dei concorrenti per definire come ti differenzi sul mercato.",
      },
      {
        title: "Affinamento del Messaggio",
        text: "Sviluppo di messaggi chiari e convincenti che evidenzino la tua USP in tutti i materiali di marketing.",
      },
      {
        title: "Strategia di Posizionamento del Brand",
        text: "Creazione di una strategia per posizionare efficacemente il tuo brand basata sulla tua USP.",
      },
    ],
  },
  contentQualityEnhancement: {
    title: "Miglioramento della Qualità dei Contenuti",
    subServices: [
      {
        title: "Servizi di Creazione di Contenuti",
        text: "Produzione di contenuti di alta qualità e coinvolgenti su misura per le esigenze e gli interessi del tuo pubblico.",
      },
      {
        title: "Sviluppo della Strategia di Contenuti",
        text: "Sviluppo di un piano strategico per la creazione, distribuzione e promozione dei contenuti.",
      },
      {
        title: "Ottimizzazione dei Contenuti",
        text: "Miglioramento dei contenuti esistenti per migliori prestazioni e allineamento con le aspettative del pubblico.",
      },
      {
        title: "Gestione del Calendario Editoriale",
        text: "Pianificazione e programmazione della produzione di contenuti per garantire una consegna costante e tempestiva.",
      },
    ],
  },
  websiteDesignAndOptimization: {
    title: "Design e Ottimizzazione del Sito Web",
    subServices: [
      {
        title: "Riprogettazione e Ottimizzazione del Sito Web",
        text: "Riprogettazione del sito web per garantire che sia reattivo e funzioni bene su tutti i dispositivi.",
      },
      {
        title: "Test di Esperienza Utente",
        text: "Test di usabilità per identificare e risolvere i problemi di navigazione e design.",
      },
      {
        title: "Ottimizzazione per Dispositivi Mobili",
        text: "Ottimizzazione per gli utenti mobili con tempi di caricamento rapidi e design intuitivo.",
      },
      {
        title: "Monitoraggio e Miglioramento delle Prestazioni",
        text: "Monitoraggio regolare delle prestazioni del sito e regolazioni necessarie per un'esperienza utente ottimale.",
      },
    ],
  },
  onlineReputationManagement: {
    title: "Gestione della Reputazione Online",
    subServices: [
      {
        title: "Monitoraggio della Reputazione",
        text: "Analisi e implementazione di strumenti per monitorare continuamente menzioni online, recensioni e feedback.",
      },
      {
        title: "Pianificazione della Gestione delle Crisi",
        text: "Sviluppo di strategie per affrontare la pubblicità negativa e proteggere la reputazione del tuo brand.",
      },
      {
        title: "Gestione delle Recensioni",
        text: "Implementazione di processi per rispondere alle recensioni e interagire con i clienti.",
      },
      {
        title: "Campagne di Miglioramento della Reputazione",
        text: "Promozione di storie e testimonianze positive per rafforzare la tua immagine online.",
      },
    ],
  },
  emailMarketing: {
    title: "Email Marketing",
    subServices: [
      {
        title: "Progettazione di Campagne Email",
        text: "Creazione e realizzazione di campagne email mirate con contenuti coinvolgenti e call to action chiari.",
      },
      {
        title: "Segmentazione delle Liste e Personalizzazione",
        text: "Segmentazione delle liste email e personalizzazione dei messaggi per aumentare la rilevanza e il coinvolgimento.",
      },
      {
        title: "Campagne Drip Automatizzate",
        text: "Impostazione di sequenze automatizzate per coltivare lead e riconquistare clienti esistenti.",
      },
      {
        title: "Monitoraggio delle Prestazioni e Ottimizzazione",
        text: "Analisi delle metriche delle prestazioni delle email per affinare le strategie e migliorare i risultati.",
      },
    ],
  },
  marketingProcessAutomation: {
    title: "Automazione dei Processi di Marketing",
    subServices: [
      {
        title: "Implementazione dell'Automazione del Marketing",
        text: "Implementazione di strumenti di automazione avanzati per semplificare i processi di marketing e aumentare l'efficienza.",
      },
      {
        title: "Design e Integrazione dei Workflow",
        text: "Sviluppo di workflow automatizzati per la coltivazione dei lead, follow-up dei clienti e gestione delle campagne.",
      },
      {
        title: "Ottimizzazione dei Processi",
        text: "Valutazione e ottimizzazione continua dei processi di automazione per migliorare le prestazioni.",
      },
      {
        title: "Formazione e Supporto",
        text: "Sessioni di formazione e supporto per garantire che il tuo team utilizzi efficacemente gli strumenti di automazione.",
      },
    ],
  },
  integratedMarketingChannels: {
    title: "Integrazione dei Canali di Marketing",
    subServices: [
      {
        title: "Sviluppo di una Strategia Omni-Channel",
        text: "Creazione di una strategia coerente che integri tutti i canali di marketing per un'esperienza cliente unificata.",
      },
      {
        title: "Integrazione dei Dati Cross-Channel",
        text: "Implementazione di sistemi per raccogliere e analizzare dati su più canali.",
      },
      {
        title: "Coordinamento delle Campagne",
        text: "Coordinamento delle campagne di marketing su vari canali per massimizzare l'impatto.",
      },
      {
        title: "Monitoraggio delle Prestazioni e Regolazione",
        text: "Monitoraggio delle prestazioni cross-channel e regolazione delle strategie in base ai dati integrati.",
      },
    ],
  },
  competitivePricingAndOffers: {
    title: "Prezzi Competitivi e Offerte",
    subServices: [
      {
        title: "Analisi della Strategia di Prezzo",
        text: "Valutazione e regolazione della tua strategia di prezzo per allinearla agli standard di mercato e alle aspettative dei clienti.",
      },
      {
        title: "Benchmarking Competitivo",
        text: "Analisi comparativa delle tue offerte rispetto ai concorrenti per identificare opportunità di differenziazione.",
      },
      {
        title: "Ottimizzazione della Proposta di Valore",
        text: "Miglioramento delle tue offerte per comunicare meglio il valore e giustificare i prezzi.",
      },
      {
        title: "Campagne Promozionali",
        text: "Sviluppo e realizzazione di campagne promozionali per aumentare l'attrattiva e stimolare le vendite.",
      },
    ],
  },
  innovativeMarketingCampaigns: {
    title: "Campagne di Marketing Innovative",
    subServices: [
      {
        title: "Sviluppo di Campagne Creative",
        text: "Progettazione e lancio di campagne di marketing innovative che catturano l'attenzione.",
      },
      {
        title: "Analisi delle Tendenze e Adozione",
        text: "Analisi complessa delle tendenze del settore e integrazione di nuove idee nelle tue campagne.",
      },
      {
        title: "Workshop Creativi",
        text: "Sviluppo di concetti innovativi per campagne pubblicitarie fresche.",
      },
      {
        title: "Revisione delle Prestazioni e Iterazione",
        text: "Analisi delle prestazioni delle campagne e iterazione degli elementi di successo per miglioramenti continui.",
      },
    ],
  },
  designServices: {
    title: "Servizi di Design",
    subServices: [
      {
        title: "Design Creativo",
        text: "Sviluppo di grafiche e contenuti visivi accattivanti per campagne pubblicitarie digitali.",
      },
      {
        title: "Materiali Pubblicitari",
        text: "Progettazione di annunci pubblicitari convincenti per vari formati digitali, inclusi banner, annunci sui social media e altro.",
      },
      {
        title: "Design del Branding",
        text: "Creazione di materiali di branding coerenti che rappresentano l'identità e i valori del tuo marchio.",
      },
      {
        title: "Contenuti Multimediali",
        text: "Produzione di contenuti multimediali coinvolgenti come video, infografiche e animazioni per il marketing digitale.",
      },
    ],
  },
};

export default servicesIt;
