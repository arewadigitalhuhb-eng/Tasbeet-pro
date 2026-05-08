/* ============================================
   TASBEEH PRO - Application Logic
   ============================================ */

const DHIKR_PRESETS = [
    { id: 'subhanallah', name: 'Subhanallah', arabic: 'سُبْحَانَ ٱللَّٰهِ', transliteration: 'Subhanallah', meaning: 'Glory be to Allah', target: 33, category: 'tasbih' },
    { id: 'subhanallah_wabihamdihi', name: 'Subhanallahi wa bihamdihi', arabic: 'سُبْحَانَ ٱللَّٰهِ وَبِحَمْدِهِ', transliteration: 'Subhanallahi wa bihamdihi', meaning: 'Glory be to Allah and praise Him', target: 100, category: 'tasbih' },
    { id: 'alhamdulillah', name: 'Alhamdulillah', arabic: 'ٱلْحَمْدُ لِلَّٰهِ', transliteration: 'Alhamdulillah', meaning: 'Praise be to Allah', target: 33, category: 'tahmid' },
    { id: 'alhamdulillah_rabbil', name: 'Alhamdulillahi Rabbil Alamin', arabic: 'ٱلْحَمْدُ لِلَّٰهِ رَبِّ ٱلْعَالَمِينَ', transliteration: 'Alhamdulillahi Rabbil Alamin', meaning: 'Praise be to Allah, Lord of the Worlds', target: 100, category: 'tahmid' },
    { id: 'allahu_akbar', name: 'Allahu Akbar', arabic: 'ٱللَّٰهُ أَكْبَرُ', transliteration: 'Allahu Akbar', meaning: 'Allah is the Greatest', target: 33, category: 'takbir' },
    { id: 'allahu_akbar_kabiran', name: 'Allahu Akbar Kabiran', arabic: 'ٱللَّٰهُ أَكْبَرُ كَبِيرًا', transliteration: 'Allahu Akbar Kabiran', meaning: 'Allah is the Greatest, greatly', target: 100, category: 'takbir' },
    { id: 'astaghfirullah', name: 'Astaghfirullah', arabic: 'أَسْتَغْفِرُ ٱللَّٰهَ', transliteration: 'Astaghfirullah', meaning: 'I seek forgiveness from Allah', target: 100, category: 'istighfar' },
    { id: 'astaghfirullah_atubu', name: 'Astaghfirullah wa atubu ilayh', arabic: 'أَسْتَغْفِرُ ٱللَّٰهَ وَأَتُوبُ إِلَيْهِ', transliteration: 'Astaghfirullah wa atubu ilayh', meaning: 'I seek forgiveness and turn to Him', target: 100, category: 'istighfar' },
    { id: 'la_ilaha', name: 'La ilaha illallah', arabic: 'لَا إِلَٰهَ إِلَّا ٱللَّٰهُ', transliteration: 'La ilaha illallah', meaning: 'There is no god but Allah', target: 100, category: 'tawhid' },
    { id: 'la_hawla', name: 'La hawla wa la quwwata illa billah', arabic: 'لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِٱللَّٰهِ', transliteration: 'La hawla wa la quwwata illa billah', meaning: 'No power except through Allah', target: 100, category: 'tawhid' },
    { id: 'salawat', name: 'Salawat on Prophet', arabic: 'ٱللَّٰهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ', transliteration: 'Allahumma salli ala Muhammad', meaning: 'O Allah, bless Muhammad', target: 100, category: 'salawat' },
    { id: 'hasbunallah', name: 'Hasbunallahu wa ni\'mal wakeel', arabic: 'حَسْبُنَا ٱللَّٰهُ وَنِعْمَ ٱلْوَكِيلُ', transliteration: 'Hasbunallahu wa ni\'mal wakeel', meaning: 'Allah is sufficient for us', target: 100, category: 'general' },
    { id: 'bismillah', name: 'Bismillah', arabic: 'بِسْمِ ٱللَّٰهِ', transliteration: 'Bismillah', meaning: 'In the name of Allah', target: 100, category: 'general' },
];

const CATEGORIES = {
    all: { en: 'All', ar: 'الكل', ha: 'Duka' },
    tasbih: { en: 'Tasbih', ar: 'تسبيح', ha: 'Tasbih' },
    tahmid: { en: 'Tahmid', ar: 'تحميد', ha: 'Tahmid' },
    takbir: { en: 'Takbir', ar: 'تكبير', ha: 'Takbir' },
    istighfar: { en: 'Istighfar', ar: 'استغفار', ha: 'Neman Gafara' },
    tawhid: { en: 'Tawhid', ar: 'توحيد', ha: 'Tawhid' },
    salawat: { en: 'Salawat', ar: 'صلوات', ha: 'Addu\'a ga Annabi' },
    general: { en: 'General', ar: 'عام', ha: 'Gaba ɗaya' }
};

const TRANSLATIONS = {
    en: {
        appTitle: 'Tasbeeh Pro', splashSubtitle: 'Digital Dhikr Companion', selectDhikr: 'Select Dhikr',
        tapToStart: 'Tap the button below to start', tapToCount: 'TAP TO COUNT',
        undo: 'Undo', reset: 'Reset', save: 'Save',
        dhikrLibrary: 'Dhikr Library', chooseDhikr: 'Choose a dhikr to begin your session',
        statistics: 'Statistics', trackProgress: 'Track your spiritual progress',
        today: 'Today', thisWeek: 'This Week', streak: 'Streak', total: 'Total',
        weeklyActivity: 'Weekly Activity', recentSessions: 'Recent Sessions', exportData: 'Export Data',
        settings: 'Settings', customize: 'Customize your experience',
        appearance: 'Appearance', theme: 'Theme', themeDesc: 'Choose your preferred look',
        dark: 'Dark', light: 'Light', system: 'System',
        language: 'Language', languageDesc: 'Select interface language',
        counter: 'Counter', sound: 'Sound', soundDesc: 'Audio feedback on count',
        digital: 'Digital', beads: 'Beads', none: 'None',
        vibration: 'Vibration', vibrationDesc: 'Haptic feedback',
        keepAwake: 'Keep Screen On', keepAwakeDesc: 'Prevent screen from sleeping',
        autoReset: 'Auto-reset on Target', autoResetDesc: 'Reset when target is reached',
        data: 'Data', importData: 'Import Data', importDataDesc: 'Restore from JSON file',
        clearAllData: 'Clear All Data', clearDataDesc: 'Delete all history and settings',
        aboutText: 'Made with care for the Ummah. May Allah accept your dhikr.',
        navCounter: 'Counter', navDhikr: 'Dhikr', navStats: 'Stats', navSettings: 'Settings',
        setTarget: 'Set Target', apply: 'Apply', cancel: 'Cancel',
        targetReached: 'Target reached! 🎯', autoResetToast: 'Auto-reset applied',
        sessionSaved: 'Session saved', counterReset: 'Counter reset',
        nothingToSave: 'Nothing to save', dataExported: 'Data exported',
        dataImported: 'Data imported', dataCleared: 'All data cleared',
        confirmClear: 'Are you sure? This will delete all your data.',
        confirmReset: 'Reset counter to 0?', noSessions: 'No sessions yet',
        noSessionsDesc: 'Start counting to see your history'
    },
    ar: {
        appTitle: 'مسبحة برو', splashSubtitle: 'رفيق الأذكار الرقمي', selectDhikr: 'اختر الذكر',
        tapToStart: 'اضغط الزر أدناه للبدء', tapToCount: 'اضغط للعد',
        undo: 'تراجع', reset: 'إعادة', save: 'حفظ',
        dhikrLibrary: 'مكتبة الأذكار', chooseDhikr: 'اختر ذكراً لبدء جلستك',
        statistics: 'الإحصائيات', trackProgress: 'تتبع تقدمك الروحي',
        today: 'اليوم', thisWeek: 'هذا الأسبوع', streak: 'السلسلة', total: 'المجموع',
        weeklyActivity: 'النشاط الأسبوعي', recentSessions: 'الجلسات الأخيرة', exportData: 'تصدير البيانات',
        settings: 'الإعدادات', customize: 'خصص تجربتك',
        appearance: 'المظهر', theme: 'السمة', themeDesc: 'اختر المظهر المفضل',
        dark: 'داكن', light: 'فاتح', system: 'النظام',
        language: 'اللغة', languageDesc: 'اختر لغة الواجهة',
        counter: 'المسبحة', sound: 'الصوت', soundDesc: 'التغذية الراجعة الصوتية',
        digital: 'رقمي', beads: 'خرز', none: 'بدون',
        vibration: 'الاهتزاز', vibrationDesc: 'التغذية الراجعة اللمسية',
        keepAwake: 'إبقاء الشاشة مفتوحة', keepAwakeDesc: 'منع الشاشة من الإغلاق',
        autoReset: 'إعادة ضبط تلقائي', autoResetDesc: 'إعادة الضبط عند الوصول للهدف',
        data: 'البيانات', importData: 'استيراد البيانات', importDataDesc: 'استعادة من ملف JSON',
        clearAllData: 'مسح جميع البيانات', clearDataDesc: 'حذف السجل والإعدادات',
        aboutText: 'صُنع بعناية للأمة. تقبل الله أذكارك.',
        navCounter: 'المسبحة', navDhikr: 'الأذكار', navStats: 'الإحصائيات', navSettings: 'الإعدادات',
        setTarget: 'تحديد الهدف', apply: 'تطبيق', cancel: 'إلغاء',
        targetReached: 'تم الوصول للهدف! 🎯', autoResetToast: 'تمت إعادة الضبط',
        sessionSaved: 'تم حفظ الجلسة', counterReset: 'تم إعادة الضبط',
        nothingToSave: 'لا يوجد شيء للحفظ', dataExported: 'تم تصدير البيانات',
        dataImported: 'تم استيراد البيانات', dataCleared: 'تم مسح جميع البيانات',
        confirmClear: 'هل أنت متأكد؟ سيتم حذف جميع بياناتك.',
        confirmReset: 'إعادة ضبط العداد إلى صفر؟', noSessions: 'لا توجد جلسات بعد',
        noSessionsDesc: 'ابدأ العد لرؤية سجلك'
    },
    ha: {
        appTitle: 'Tasbeeh Pro', splashSubtitle: 'Abokin Dhikr na Dijital', selectDhikr: 'Zaabi Dhikr',
        tapToStart: 'Danna maɓallin don farawa', tapToCount: 'DANNA DON ƘIDDA',
        undo: 'Juya baya', reset: 'Sake saita', save: 'Ajiye',
        dhikrLibrary: 'Laburaren Dhikr', chooseDhikr: 'Zaabi dhikr don fara zamananka',
        statistics: 'Tashe', trackProgress: 'Bi tashen ruhaninka',
        today: 'Yau', thisWeek: 'Wannan Makon', streak: 'Tsawon Lokaci', total: 'Jimla',
        weeklyActivity: 'Ayyukan Makonni', recentSessions: 'Zamaman Kwanan nan', exportData: 'Fitar da Bayanai',
        settings: 'Saituna', customize: 'Saita yadda kake so',
        appearance: 'Fuska', theme: 'Jigo', themeDesc: 'Zaabi yanayin da kake so',
        dark: 'Duhu', light: 'Haske', system: 'Na tsarin',
        language: 'Harshe', languageDesc: 'Zaabi harshen da kake so',
        counter: 'Lissafi', sound: 'Sauti', soundDesc: 'Sautin martani',
        digital: 'Na dijital', beads: 'Zubin', none: 'Babu',
        vibration: 'Girgiza', vibrationDesc: 'Martani na taɓawa',
        keepAwake: 'Bar Allon a Buɗe', keepAwakeDesc: 'Hana allon ya yi barci',
        autoReset: 'Sake Saita Kai-tsaye', autoResetDesc: 'Sake saita idan aka kai burin',
        data: 'Bayanai', importData: 'Shigo da Bayanai', importDataDesc: 'Dawo da bayanai daga fayil',
        clearAllData: 'Share Duk Bayanai', clearDataDesc: 'Share tarihi da saituna',
        aboutText: 'An yi shi da ƙauna ga al\'umma. Allah ya karɓi addu\'o\'inku.',
        navCounter: 'Lissafi', navDhikr: 'Dhikr', navStats: 'Tashe', navSettings: 'Saituna',
        setTarget: 'Saita Burin', apply: 'Aiwatar', cancel: 'Soke',
        targetReached: 'An kai burin! 🎯', autoResetToast: 'An sake saita kai-tsaye',
        sessionSaved: 'An ajiye zaman', counterReset: 'An sake saita lissafi',
        nothingToSave: 'Babu abin da za a ajiye', dataExported: 'An fitar da bayanai',
        dataImported: 'An shigo da bayanai', dataCleared: 'An share duk bayanai',
        confirmClear: 'Ka tabbata? Wannan zai share duk bayananka.',
        confirmReset: 'Sake saita lissafi zuwa sifili?', noSessions: 'Babu zamani tukuna',
        noSessionsDesc: 'Fara ƙididdiga don ganin tarihinku'
    }
};

class Storage {
    static KEY = 'tasbeeh_pro_v2';
    static VERSION = 2;

    static getDefaults() {
        return {
            version: this.VERSION,
            settings: {
                theme: 'dark', language: 'en', sound: 'digital',
                vibration: true, keepAwake: true, autoReset: false, defaultTarget: 33
            },
            currentSession: { dhikrId: 'subhanallah', count: 0, target: 33 },
            sessions: [], history: {},
            stats: { totalCounts: 0, currentStreak: 0, longestStreak: 0, lastUsedDate: null },
            customDhikr: []
        };
    }

    static load() {
        try {
            const raw = localStorage.getItem(this.KEY);
            if (!raw) return this.getDefaults();
            const data = JSON.parse(raw);
            return this.migrate(data);
        } catch (e) {
            return this.getDefaults();
        }
    }

    static save(data) {
        try { localStorage.setItem(this.KEY, JSON.stringify(data)); } catch (e) {}
    }

    static migrate(data) {
        if (!data.version || data.version < this.VERSION) {
            const defaults = this.getDefaults();
            return { ...defaults, ...data, version: this.VERSION };
        }
        return data;
    }

    static export() {
        const data = this.load();
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `tasbeeh-pro-backup-${new Date().toISOString().split('T')[0]}.json`;
        a.click();
        URL.revokeObjectURL(url);
    }

    static async import(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const data = JSON.parse(e.target.result);
                    if (data.version && data.settings) {
                        this.save(this.migrate(data));
                        resolve(true);
                    } else {
                        reject(new Error('Invalid file format'));
                    }
                } catch (err) { reject(err); }
            };
            reader.readAsText(file);
        });
    }

    static clear() { localStorage.removeItem(this.KEY); }
}

class AudioEngine {
    constructor() { this.ctx = null; this.initialized = false; }

    init() {
        if (this.initialized) return;
        try {
            this.ctx = new (window.AudioContext || window.webkitAudioContext)();
            this.initialized = true;
        } catch (e) {}
    }

    play(type) {
        if (!this.initialized) this.init();
        if (!this.ctx) return;
        if (this.ctx.state === 'suspended') this.ctx.resume();
        if (type === 'digital') this.playDigital();
        else if (type === 'beads') this.playBeads();
    }

    playDigital() {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.connect(gain); gain.connect(this.ctx.destination);
        osc.frequency.value = 880; osc.type = 'sine';
        gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.06);
        osc.start(this.ctx.currentTime); osc.stop(this.ctx.currentTime + 0.06);
    }

    playBeads() {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const filter = this.ctx.createBiquadFilter();
        osc.connect(filter); filter.connect(gain); gain.connect(this.ctx.destination);
        osc.frequency.value = 400; osc.type = 'triangle';
        filter.type = 'lowpass'; filter.frequency.value = 800;
        gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.1);
        osc.start(this.ctx.currentTime); osc.stop(this.ctx.currentTime + 0.1);
    }

    playTarget() {
        if (!this.initialized) this.init();
        if (!this.ctx) return;
        if (this.ctx.state === 'suspended') this.ctx.resume();
        [523.25, 659.25, 783.99].forEach((freq, i) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.connect(gain); gain.connect(this.ctx.destination);
            osc.frequency.value = freq; osc.type = 'sine';
            gain.gain.setValueAtTime(0.1, this.ctx.currentTime + i * 0.1);
            gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + i * 0.1 + 0.2);
            osc.start(this.ctx.currentTime + i * 0.1);
            osc.stop(this.ctx.currentTime + i * 0.1 + 0.2);
        });
    }
}

class I18n {
    static t(key) {
        const lang = app?.data?.settings?.language || 'en';
        return TRANSLATIONS[lang]?.[key] || TRANSLATIONS['en'][key] || key;
    }

    static updateUI() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            el.textContent = this.t(key);
        });
        const lang = app?.data?.settings?.language || 'en';
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    }
}

class StatsManager {
    static getTodayKey() { return new Date().toISOString().split('T')[0]; }

    static getWeekKeys() {
        const keys = [];
        const today = new Date();
        for (let i = 6; i >= 0; i--) {
            const d = new Date(today); d.setDate(d.getDate() - i);
            keys.push(d.toISOString().split('T')[0]);
        }
        return keys;
    }

    static addCount(data, amount = 1) {
        const today = this.getTodayKey();
        data.history[today] = (data.history[today] || 0) + amount;
        data.stats.totalCounts += amount;
        const lastDate = data.stats.lastUsedDate;
        const yesterday = new Date(); yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayKey = yesterday.toISOString().split('T')[0];
        if (lastDate === today) {
            // same day
        } else if (lastDate === yesterdayKey) {
            data.stats.currentStreak += 1;
        } else {
            data.stats.currentStreak = 1;
        }
        if (data.stats.currentStreak > data.stats.longestStreak) {
            data.stats.longestStreak = data.stats.currentStreak;
        }
        data.stats.lastUsedDate = today;
    }

    static getTodayCount(data) { return data.history[this.getTodayKey()] || 0; }

    static getWeekCount(data) {
        return this.getWeekKeys().reduce((sum, key) => sum + (data.history[key] || 0), 0);
    }

    static getWeeklyData(data) {
        const keys = this.getWeekKeys();
        const labels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        return keys.map((key, i) => ({
            label: labels[new Date(key).getDay()],
            value: data.history[key] || 0,
            date: key
        }));
    }
}

class TasbeehApp {
    constructor() {
        this.data = Storage.load();
        this.audio = new AudioEngine();
        this.wakeLock = null;
        this.currentCategory = 'all';
        this.undoStack = [];
        this.init();
    }

    init() {
        this.applyTheme();
        this.applyLanguage();
        this.setupEventListeners();
        this.renderCounter();
        this.renderDhikrCategories();
        this.renderDhikrGrid();
        this.renderStats();
        this.updateSettingsUI();
        this.setupWakeLock();
        setTimeout(() => {
            document.getElementById('splash').classList.add('hidden');
            document.getElementById('app').classList.remove('hidden');
        }, 1800);
    }

    applyTheme() {
        const theme = this.data.settings.theme;
        if (theme === 'system') {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
        } else {
            document.documentElement.setAttribute('data-theme', theme);
        }
    }

    applyLanguage() { I18n.updateUI(); }

    setupEventListeners() {
        document.querySelectorAll('.nav-item').forEach(btn => {
            btn.addEventListener('click', () => {
                const target = btn.dataset.target;
                this.switchView(target);
                document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });

        const countBtn = document.getElementById('btnCount');
        countBtn.addEventListener('click', (e) => this.handleCount(e));
        countBtn.addEventListener('touchstart', (e) => { e.preventDefault(); this.handleCount(e); }, { passive: false });
        countBtn.addEventListener('mousedown', (e) => this.setRipplePosition(e, countBtn));
        countBtn.addEventListener('touchstart', (e) => this.setRipplePosition(e.touches[0], countBtn));

        document.getElementById('btnUndo').addEventListener('click', () => this.handleUndo());
        document.getElementById('btnReset').addEventListener('click', () => this.handleReset());
        document.getElementById('btnSaveSession').addEventListener('click', () => this.handleSaveSession());
        document.getElementById('counterTarget').addEventListener('click', () => this.openTargetModal());

        document.getElementById('btnConfirmTarget').addEventListener('click', () => this.applyTarget());
        document.querySelectorAll('.target-btn').forEach(btn => {
            btn.addEventListener('click', () => this.adjustTarget(btn.dataset.action));
        });
        document.querySelectorAll('.target-preset').forEach(btn => {
            btn.addEventListener('click', () => { document.getElementById('targetInput').value = btn.dataset.value; });
        });

        document.querySelectorAll('.modal-close').forEach(btn => {
            btn.addEventListener('click', () => {
                const modalId = btn.dataset.modal;
                if (modalId) document.getElementById(modalId).classList.remove('active');
            });
        });

        document.querySelectorAll('.modal').forEach(modal => {
            modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('active'); });
        });

        document.getElementById('settingTheme').addEventListener('change', (e) => this.updateSetting('theme', e.target.value));
        document.getElementById('settingLanguage').addEventListener('change', (e) => this.updateSetting('language', e.target.value));
        document.getElementById('settingSound').addEventListener('change', (e) => this.updateSetting('sound', e.target.value));
        document.getElementById('settingVibration').addEventListener('change', (e) => this.updateSetting('vibration', e.target.checked));
        document.getElementById('settingKeepAwake').addEventListener('change', (e) => this.updateSetting('keepAwake', e.target.checked));
        document.getElementById('settingAutoReset').addEventListener('change', (e) => this.updateSetting('autoReset', e.target.checked));

        document.getElementById('btnExport').addEventListener('click', () => this.exportData());
        document.getElementById('btnImport').addEventListener('click', () => document.getElementById('fileInput').click());
        document.getElementById('fileInput').addEventListener('change', (e) => this.importData(e.target.files[0]));
        document.getElementById('btnClearData').addEventListener('click', () => this.clearData());
        document.getElementById('btnFullscreen').addEventListener('click', () => this.toggleFullscreen());

        document.addEventListener('keydown', (e) => this.handleKeyboard(e));
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
            if (this.data.settings.theme === 'system') this.applyTheme();
        });
        document.addEventListener('visibilitychange', () => {
            if (!document.hidden && this.data.settings.keepAwake) this.setupWakeLock();
        });
    }

    setRipplePosition(e, btn) {
        const rect = btn.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        btn.querySelector('.count-btn-ripple').style.setProperty('--x', x + '%');
        btn.querySelector('.count-btn-ripple').style.setProperty('--y', y + '%');
    }

    switchView(viewName) {
        document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
        document.getElementById(`view-${viewName}`).classList.add('active');
        if (viewName === 'stats') this.renderStats();
        if (viewName === 'dhikr') this.renderDhikrGrid();
        document.querySelector('.app-main').scrollTop = 0;
    }

    handleCount(e) {
        e.preventDefault?.();
        const session = this.data.currentSession;
        this.undoStack.push(session.count);
        if (this.undoStack.length > 10) this.undoStack.shift();
        session.count++;
        StatsManager.addCount(this.data, 1);
        this.audio.play(this.data.settings.sound);
        if (this.data.settings.vibration && navigator.vibrate) navigator.vibrate(15);
        this.renderCounter();
        Storage.save(this.data);

        if (session.count === session.target) {
            this.audio.playTarget();
            if (this.data.settings.vibration && navigator.vibrate) navigator.vibrate([50, 100, 50]);
            this.showToast(I18n.t('targetReached'));
            if (this.data.settings.autoReset) {
                setTimeout(() => {
                    session.count = 0;
                    this.renderCounter();
                    this.showToast(I18n.t('autoResetToast'));
                    Storage.save(this.data);
                }, 1500);
            }
        }
    }

    handleUndo() {
        if (this.undoStack.length === 0) return;
        const prev = this.undoStack.pop();
        const diff = this.data.currentSession.count - prev;
        this.data.currentSession.count = prev;
        const today = StatsManager.getTodayKey();
        this.data.history[today] = Math.max(0, (this.data.history[today] || 0) - diff);
        this.data.stats.totalCounts = Math.max(0, this.data.stats.totalCounts - diff);
        this.renderCounter();
        Storage.save(this.data);
    }

    handleReset() {
        if (this.data.currentSession.count === 0) return;
        if (confirm(I18n.t('confirmReset'))) {
            this.data.currentSession.count = 0;
            this.undoStack = [];
            this.renderCounter();
            Storage.save(this.data);
            this.showToast(I18n.t('counterReset'));
        }
    }

    handleSaveSession() {
        const session = this.data.currentSession;
        if (session.count === 0) { this.showToast(I18n.t('nothingToSave')); return; }
        const dhikr = this.getDhikrById(session.dhikrId);
        this.data.sessions.unshift({
            id: Date.now(), name: dhikr?.name || 'Custom',
            count: session.count, target: session.target,
            date: new Date().toLocaleString()
        });
        if (this.data.sessions.length > 50) this.data.sessions = this.data.sessions.slice(0, 50);
        Storage.save(this.data);
        this.showToast(I18n.t('sessionSaved'));
    }

    openTargetModal() {
        document.getElementById('targetInput').value = this.data.currentSession.target;
        document.getElementById('targetModal').classList.add('active');
    }

    adjustTarget(action) {
        const input = document.getElementById('targetInput');
        let val = parseInt(input.value) || 33;
        val = action === 'increase' ? val + 1 : Math.max(1, val - 1);
        input.value = val;
    }

    applyTarget() {
        const val = parseInt(document.getElementById('targetInput').value) || 33;
        this.data.currentSession.target = Math.max(1, val);
        this.renderCounter();
        Storage.save(this.data);
        document.getElementById('targetModal').classList.remove('active');
    }

    renderCounter() {
        const session = this.data.currentSession;
        const dhikr = this.getDhikrById(session.dhikrId);
        const valueEl = document.getElementById('counterValue');
        valueEl.textContent = session.count;
        valueEl.classList.remove('pulse');
        void valueEl.offsetWidth;
        valueEl.classList.add('pulse');
        document.getElementById('counterTarget').textContent = `/ ${session.target}`;
        const circumference = 2 * Math.PI * 120;
        const progress = Math.min(session.count / session.target, 1);
        const offset = circumference - (progress * circumference);
        document.querySelector('.progress-ring-fill').style.strokeDashoffset = offset;
        document.getElementById('currentDhikrName').textContent = dhikr?.name || I18n.t('selectDhikr');
        document.getElementById('dhikrArabic').textContent = dhikr?.arabic || '';
        document.getElementById('dhikrMeaning').textContent = dhikr?.meaning || I18n.t('tapToStart');
        const ringContainer = document.querySelector('.progress-ring-container');
        if (session.count >= session.target) ringContainer.classList.add('target-reached');
        else ringContainer.classList.remove('target-reached');
    }

    renderDhikrCategories() {
        const container = document.getElementById('dhikrCategories');
        const lang = this.data.settings.language;
        container.innerHTML = Object.entries(CATEGORIES).map(([key, labels]) => `
            <button class="dhikr-category ${key === this.currentCategory ? 'active' : ''}" data-category="${key}">
                ${labels[lang] || labels.en}
            </button>
        `).join('');
        container.querySelectorAll('.dhikr-category').forEach(btn => {
            btn.addEventListener('click', () => {
                this.currentCategory = btn.dataset.category;
                this.renderDhikrCategories();
                this.renderDhikrGrid();
            });
        });
    }

    renderDhikrGrid() {
        const container = document.getElementById('dhikrGrid');
        const filtered = this.currentCategory === 'all'
            ? DHIKR_PRESETS
            : DHIKR_PRESETS.filter(d => d.category === this.currentCategory);
        container.innerHTML = filtered.map(dhikr => `
            <div class="dhikr-card" data-id="${dhikr.id}">
                <div class="dhikr-card-header">
                    <span class="dhikr-card-name">${dhikr.name}</span>
                    <span class="dhikr-card-target">${dhikr.target}</span>
                </div>
                <div class="dhikr-card-arabic">${dhikr.arabic}</div>
                <div class="dhikr-card-meaning">${dhikr.meaning}</div>
            </div>
        `).join('');
        container.querySelectorAll('.dhikr-card').forEach(card => {
            card.addEventListener('click', () => this.selectDhikr(card.dataset.id));
        });
    }

    selectDhikr(id) {
        const dhikr = this.getDhikrById(id);
        if (!dhikr) return;
        this.data.currentSession = { dhikrId: id, count: 0, target: dhikr.target };
        this.undoStack = [];
        Storage.save(this.data);
        this.renderCounter();
        this.switchView('counter');
        document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
        document.querySelector('[data-target="counter"]').classList.add('active');
        this.showToast(`${dhikr.name} — ${dhikr.target}`);
    }

    getDhikrById(id) {
        return DHIKR_PRESETS.find(d => d.id === id) || this.data.customDhikr.find(d => d.id === id);
    }

    renderStats() {
        document.getElementById('statToday').textContent = StatsManager.getTodayCount(this.data);
        document.getElementById('statWeek').textContent = StatsManager.getWeekCount(this.data);
        document.getElementById('statStreak').textContent = this.data.stats.currentStreak;
        document.getElementById('statTotal').textContent = this.data.stats.totalCounts;

        const weeklyData = StatsManager.getWeeklyData(this.data);
        const maxValue = Math.max(...weeklyData.map(d => d.value), 1);
        const chartContainer = document.getElementById('statsChart');
        chartContainer.innerHTML = weeklyData.map(d => {
            const height = (d.value / maxValue) * 100;
            const isToday = d.date === StatsManager.getTodayKey();
            return `
                <div class="chart-bar-wrapper">
                    <div class="chart-bar-value">${d.value}</div>
                    <div class="chart-bar" style="height: ${height}%; ${isToday ? 'opacity: 1;' : 'opacity: 0.7;'}"></div>
                    <div class="chart-label">${d.label}</div>
                </div>
            `;
        }).join('');

        const sessionsList = document.getElementById('sessionsList');
        if (this.data.sessions.length === 0) {
            sessionsList.innerHTML = `
                <div class="empty-state">
                    <div class="empty-state-icon">📿</div>
                    <div class="empty-state-text">${I18n.t('noSessions')}</div>
                </div>
            `;
        } else {
            sessionsList.innerHTML = this.data.sessions.slice(0, 10).map(s => `
                <div class="session-item">
                    <div class="session-info">
                        <span class="session-name">${s.name}</span>
                        <span class="session-date">${s.date}</span>
                    </div>
                    <span class="session-count">${s.count}</span>
                </div>
            `).join('');
        }
    }

    updateSetting(key, value) {
        this.data.settings[key] = value;
        Storage.save(this.data);
        if (key === 'theme') this.applyTheme();
        if (key === 'language') { this.applyLanguage(); this.renderDhikrCategories(); }
        if (key === 'keepAwake') { if (value) this.setupWakeLock(); else this.releaseWakeLock(); }
    }

    updateSettingsUI() {
        const s = this.data.settings;
        document.getElementById('settingTheme').value = s.theme;
        document.getElementById('settingLanguage').value = s.language;
        document.getElementById('settingSound').value = s.sound;
        document.getElementById('settingVibration').checked = s.vibration;
        document.getElementById('settingKeepAwake').checked = s.keepAwake;
        document.getElementById('settingAutoReset').checked = s.autoReset;
    }

    exportData() { Storage.export(); this.showToast(I18n.t('dataExported')); }

    async importData(file) {
        if (!file) return;
        try {
            await Storage.import(file);
            this.data = Storage.load();
            this.applyTheme(); this.applyLanguage();
            this.renderCounter(); this.renderStats(); this.updateSettingsUI();
            this.showToast(I18n.t('dataImported'));
        } catch (e) { this.showToast('Error: Invalid file'); }
        document.getElementById('fileInput').value = '';
    }

    clearData() {
        if (confirm(I18n.t('confirmClear'))) {
            Storage.clear();
            this.data = Storage.getDefaults();
            this.applyTheme(); this.renderCounter(); this.renderStats(); this.updateSettingsUI();
            this.showToast(I18n.t('dataCleared'));
        }
    }

    showToast(message) {
        const container = document.getElementById('toastContainer');
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        container.appendChild(toast);
        setTimeout(() => toast.remove(), 2800);
    }

    handleKeyboard(e) {
        if (document.querySelector('.modal.active')) return;
        if (e.code === 'Space' || e.code === 'Enter') { e.preventDefault(); this.handleCount(e); }
        if (e.code === 'KeyR' && !e.ctrlKey && !e.metaKey) this.handleReset();
        if (e.code === 'KeyU' && !e.ctrlKey && !e.metaKey) this.handleUndo();
    }

    async setupWakeLock() {
        if (!this.data.settings.keepAwake) return;
        if ('wakeLock' in navigator) {
            try { this.wakeLock = await navigator.wakeLock.request('screen'); } catch (e) {}
        }
    }

    async releaseWakeLock() {
        if (this.wakeLock) {
            try { await this.wakeLock.release(); this.wakeLock = null; } catch (e) {}
        }
    }

    toggleFullscreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(() => {});
        } else {
            document.exitFullscreen().catch(() => {});
        }
    }
}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
}

let app;
document.addEventListener('DOMContentLoaded', () => { app = new TasbeehApp(); });
