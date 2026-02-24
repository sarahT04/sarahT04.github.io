import { derived, writable } from 'svelte/store';

export type Locale = 'en' | 'cn' | 'id';

const messages: Record<Locale, Record<string, string>> = {
	en: {
		'nav.experiences': 'Experiences',
		'nav.projects': 'Projects',
		'nav.organizations': 'Organizations',
		'nav.certificates': 'Certificates',
		'about.title': 'About me',
		'about.body':
			"My name is Sarah Tan. I hold an Indonesian passport and Chinese Student Visa. <br />I am a polygot, globalized and multi-disciplinary person. I work with a lot of stuff that ranges from humanities to technology. Discuss with me about multiple topics!<br /><br />I speak 3 languages: Indonesian (Native), English (C1), Chinese Simplified (HSK4)<br /><br />Currently an international student in Wuhan, China, a student committee in Indonesian Students' Association in China, and a Software Engineer in Beneran Indonesia (NGO) whose focus is in building their LMS website and their application that does gamification for ethics education.",
		'header.tagline': 'A polygot, globalized and carefree thinking addict'
	},
	cn: {
		'nav.experiences': '工作经历',
		'nav.projects': '编程项目',
		'nav.organizations': '学生协会工作',
		'nav.certificates': '证书',
		'about.title': '关于我',
		'about.body':
			"我叫Sarah Tan（陈惠英），持有印度尼西亚护照和中国学生签证。<br />我是一位多语言、全球化且多学科的人，涉猎人文与科技，欢迎和我聊各种话题。<br /><br />我会三种语言：印尼语（母语）、英语（C1）、中文（HSK4）。<br /><br />目前我在湖北武汉读书，同时担任在华印尼学生协会干部，并在印尼Beneran Indonesia（印尼非政府组织）担任软件工程师，专注于他们的学习管理系网站及伦理教育游戏化应用的开发。",
		'header.tagline': '多语言、全球化、和爱思考的我'
	},
	id: {
		'nav.experiences': 'Pengalaman',
		'nav.projects': 'Project',
		'nav.organizations': 'Organisasi',
		'nav.certificates': 'Sertifikat',
		'about.title': 'Tentang saya',
		'about.body':
        "Namaku Sarah Tan. Aku adalah pemegang paspor hijau dan visa pelajar Tiongkok. <br />Aku mempunyai kepribadian multibahasa, berwawasan global, dan multidisiplin. Aku suka mengerjakan banyak hal yang mencakup semua segi keahlian. Ajak aku berdiskusi tentang berbagai topik mulai dari humaniora hingga teknologi!<br /><br />Aku bisa berbicara 3 bahasa: Indonesia (Native), Inggris (C1), Mandarin (HSK4)<br /><br />Saat ini aku adalah seorang mahasiswa internasional di Wuhan, Tiongkok, seorang anggota kepengurusan Perhimpunan Pelajar Indonesia di Tiongkok (PPIT), sekaligus seorang Software Engineer di Beneran Indonesia (NGO) yang fokus membangun website LMS dan aplikasi gamifikasi untuk pendidikan etika dan pancasila.",
		'header.tagline': 'Poliglot, berwawasan global, dan pemikir santai'
	}
};

export const locale = writable<Locale>('en');

export function setLocale(next: Locale) {
	locale.set(next);
}

export const t = derived(locale, ($locale) => {
	return (key: string) => messages[$locale][key] ?? key;
});
