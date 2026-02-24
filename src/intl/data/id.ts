import type { DataBundle, Experience } from './types';
import { hrefify, hrefifyProjects } from '$lib/utils/hrefify';

export const sidebarExperiences: Experience[] = [
	{
		date: '09/2023 - 06/2027',
		title: 'Sarjana Ilmu Komputer',
		organization: 'China University of Geosciences',
		place: 'Wuhan, Hubei, China',
		description: [
			'Penerima Beasiswa Pemerintah Tiongkok',
			'Perkuliahan menggunakan bahasa Mandarin (Simplified)',
			'Lihat <a href="#" class="underline on-hover-animation hover:ml-1">proyek kelas</a> saya'
		]
	},
	{
		date: '09/2023 - Present',
		title: 'Software Engineer',
		organization: 'Beneran Indonesia (NGO)',
		place: 'Jakarta, Indonesia, Online',
		description: [
			'Full stack developer untuk website LMS<br />pusakawan.id dan website<br />back-office LMS',
			'Maintainer aplikasi Android mereka: Pusakawan'
		]
	}
];

export const experiences: Experience[] = [
	{
		date: '09/2023 - Present',
		title: 'Software Engineer',
		organization: 'Beneran Indonesia (NGO)',
		place: 'Jakarta, Indonesia · Remote',
		description: [
			`Sole full stack developer untuk website Learning Management System (LMS):
			${hrefify({
				child: 'pusakawan.id',
				link: 'https://pusakawan.id/',
				title: 'Pusakawan',
				className: 'hover:mx-1'
			})}
			menggunakan Django, Next.js (TypeScript), MaterialUI, PostgreSQL, AWS EB & S3. <br />
			Fitur: autentikasi, payment gateway (Xendit), dan embed Articulate Storyline`,
			'Developer untuk website back-office LMS (React (TypeScript + Vite), Refine.js & shadcn)',
			'Maintainer aplikasi Android: Pusakawan (Flutter)',
			'Membuat script automasi internal menggunakan Python dan JavaScript'
		],
		skills: [
			'TypeScript',
			'Next.js',
			'React',
			'Material UI',
			'Tailwind',
			'Refine.js',
			'Python',
			'Django',
			'AWS S3',
			'AWS Elastic Beanstalk',
			'PostgreSQL',
			'Flutter'
		]
	},

	{
		date: '05/2025 - 07/2025',
		title: 'International Relations Officer',
		organization: 'HOPE International 厚溥国际',
		place: 'Wuhan, Hubei, China',
		description: [
			'Menerjemahkan dokumen bisnis penting (kontrak, proposal, PPT, dll) dari Indonesia ke Mandarin dan Inggris, dan sebaliknya, dengan menjaga akurasi dan nada profesional.',
			'Menulis email dan dokumen bisnis dalam bahasa Inggris dan Indonesia untuk stakeholder Indonesia, mempermudah komunikasi dan negosiasi.',
			'Terlibat dalam pembuatan poster, kerja sama dengan politeknik, serta menjadi HR untuk job fair di beberapa politeknik di Indonesia'
		],
		skills: ['Translation', 'Personal Assistant', 'Partnership', 'HR', 'Communication and Teamwork']
	},

	{
		date: '07/2025 - 08/2025',
		title: 'AI Trainer',
		organization: 'Generation Girl Indonesia (NGO)',
		place: 'Indonesia · Remote',
		description: [
			'Memfasilitasi ratusan peserta Indonesia dari berbagai usia dan latar belakang tentang AI. Berkolaborasi dengan fasilitator lain untuk membuat kelas berdurasi 2 jam.'
		],
		skills: ['Mentoring', 'Artificial Intelligence']
	},

	{
		date: '09/2024 - 12/2024',
		title: 'International Office Assistant',
		organization: 'International Education College, China University of Geosciences',
		place: 'Wuhan, Hubei, China',
		description: [
			'Memfasilitasi komunikasi antara mahasiswa internasional dan staf dengan interpretasi real-time dari bahasa Inggris ke Mandarin.',
			'Mengurus dan menjaga dokumen penting mahasiswa.',
			'Mengelola dan merapikan banyak dokumen mahasiswa.'
		],
		skills: ['Translation', 'Communication and Teamwork', 'Administration']
	},

	{
		date: '06/2023 - 07/2023',
		title: 'Coding Community Mentor',
		organization: 'Stanford University: Code In Place',
		place: 'Worldwide · Remote',
		description: [
			'Mengajar dasar-dasar Ilmu Komputer ke 10 peserta dari seluruh dunia selama 6 minggu',
			'Mendesain sesi mingguan yang engaging hingga mencapai 85% completion rate'
		],
		skills: ['Mentoring', 'Computer Science', 'Global Community']
	},

	{
		date: '12/2022',
		title: 'Build a Website Mentor',
		organization: 'Generation Girl Indonesia (NGO)',
		place: 'Indonesia · Remote',
		description: [
			"Mentor bahasa Inggris untuk GenG's Build a Website Winter Club. Dalam 5 hari, mengajar remaja perempuan membuat website dengan HTML, CSS, dan JavaScript."
		],
		skills: ['Mentoring', 'Web Development']
	},

	{
		date: '11/2021 - 01/2022',
		title: 'Joomla 4.0 Website Intern',
		organization: 'PT. Autory Muda Indonesia',
		place: 'Jakarta, Indonesia · Remote',
		description: [
			"Internship 3 bulan di perusahaan UMKM. Menggunakan Joomla 4.0, saya membuat website dari nol untuk memenuhi kebutuhan perusahaan."
		],
		skills: ['Communication and Teamwork', 'Business Management']
	},
	{
		date: '07/2019 - 09/2023',
		title: 'Inline Skates Coach',
		organization: 'Rollerskool · PT. Autory Muda Indonesia',
		place: 'Jakarta, Indonesia',
		description: [
			'Melatih ratusan anak dan dewasa dari berbagai usia di ruang publik, gedung olahraga, dan sekolah internasional sesuai kurikulum inline skating'
		],
		skills: ['Communication and Teamwork', 'Global Community', 'Inline Skates', 'Coaching']
	}
];

export const projects: Experience[] = [
	{
		date: '02/2026',
		title: "Sarah's Snaps",
		organization: 'Portofolio fotografi saya',
		place: hrefifyProjects({
			website: {
				title: "Lihat website Sarah's Snaps",
				link: 'https://sarahs-snaps.vercel.app/',
				child: 'https://sarahs-snaps.vercel.app/'
			},
			github: {
				title: "Lihat Github Sarah's Snaps",
				link: 'https://github.com/sarahT04/sarahs-snaps',
				child: 'https://github.com/sarahT04/sarahs-snaps'
			}
		}),
		description: ['Kumpulan foto dari berbagai negara. Semua diambil dengan Xiaomi 14 Ultra'],
		skills: ['Astro', 'MDX', 'ImageKit', 'Photography']
	},
	{
		date: '09/2023 - Present',
		title: 'Classworks',
		organization: 'Kumpulan tugas dan catatan kelas yang menurut saya menarik',
		place: hrefifyProjects({
			website: {
				title: 'Lihat classworks saya',
				link: 'https://sarahs-classwork.vercel.app/',
				child: 'https://sarahs-classwork.vercel.app/'
			}
		}),
		description: ['Sebagian besar proyek menggunakan C++ dan Python'],
		skills: ['C++', 'Python', 'Notetaking']
	},
	{
		date: '',
		title: 'Advent of Code',
		organization: 'Solusi Advent of Code menggunakan Python',
		place: hrefifyProjects({
			github: {
				title: 'Lihat repositori Github',
				link: 'https://github.com/sarahT04/advent-of-code',
				child: 'https://github.com/sarahT04/advent-of-code'
			}
		}),
		description: ['Saat ini tersedia: Tahun 2015'],
		skills: ['Python', 'Puzzle Solving']
	},

	{
		date: '04/2023',
		title: 'META Front-End Capstone',
		organization: 'Proyek akhir untuk Sertifikasi Front-End Developer META',
		place: hrefifyProjects({
			website: {
				title: 'Lihat website',
				link: 'https://little-lemon-saraht04.vercel.app/',
				child: 'https://little-lemon-saraht04.vercel.app/'
			},
			github: {
				title: 'Lihat repositori Github',
				link: 'https://github.com/sarahT04/meta-capstone',
				child: 'https://github.com/sarahT04/meta-capstone'
			}
		}),
		description: [
			'Little Lemon adalah restoran fiktif yang mengintegrasikan bisnisnya ke platform online.',
			'Mockup website berisi latar belakang restoran dan reservasi meja'
		],
		skills: ['React', 'Figma']
	},

	{
		date: '03/2023',
		title: 'Reports',
		organization: 'Website CRUD sederhana untuk laporan performa siswa inline skates',
		place: hrefifyProjects({
			website: {
				title: 'Lihat website',
				link: 'https://reports-saraht04.vercel.app/',
				child: 'https://reports-saraht04.vercel.app/'
			},
			github: {
				title: 'Lihat repositori Github',
				link: 'https://github.com/sarahT04/reports',
				child: 'https://github.com/sarahT04/reports'
			}
		}),
		description: ['Dibuat untuk mencetak laporan performa setiap siswa latihan inline skates'],
		skills: ['React', 'MongoDB', 'ChakraUI']
	},

	{
		date: '07/2022',
		title: 'Random Quote Generator',
		organization: 'Aplikasi React yang memanggil API untuk menampilkan quote acak.',
		place: hrefifyProjects({
			github: {
				title: 'Lihat repositori Github',
				link: 'https://github.com/sarahT04/random-quote-generator',
				child: 'https://github.com/sarahT04/random-quote-generator'
			}
		}),
		description: [],
		skills: ['React']
	},

	{
		date: '09/2021',
		title: 'Number Rain',
		organization: 'Mencetak angka-angka seperti sedang hujan :)',
		place: hrefifyProjects({
			github: {
				title: 'Lihat repositori Github',
				link: 'https://github.com/sarahT04/NumberRain',
				child: 'https://github.com/sarahT04/NumberRain'
			}
		}),
		description: [],
		skills: ['Python']
	}
];

export const organizations: Experience[] = [
	{
		date: '08/2025 - Present',
		title: 'Secretary',
		organization: "South Region of Indonesian Students' Association in China",
		place: 'China · Remote',
		description: [
			'PPI Tiongkok wilayah selatan adalah gabungan cabang-cabang PPI yang berada di bagian selatan Tiongkok. Terdiri dari 12 cabang.',
			'Menulis dokumen penting, mengoordinasikan rapat antar-cabang, dan ikut mengambil keputusan',
			'Membantu pekerjaan sekretaris di seluruh cabang wilayah selatan',
			'Public Relations untuk 2 cabang: Wuhan dan Changsha'
		],
		skills: ['Secretary work', 'Documents writing', 'Public Relations']
	},

	{
		date: '07/2025 - Present',
		title: "Head of People's Development Department",
		organization: "Wuhan Branch of Indonesian Students' Association in China",
		place: 'Wuhan, Hubei, China',
		description: [
			'Divisi People Development fokus pada capacity building, well-being, dan konektivitas mahasiswa Indonesia di Wuhan.',
			'Koordinasi beberapa program kerja di Wuhan dengan 5 orang anggota. Program kerja meliputi:',
			"<span class='font-semibold'>[08/25] Freshmen Preparation Camp</span>: Webinar untuk persiapan sebelum ke Wuhan, menjadi contact person utama di grup WhatsApp, dan menerbitkan guidebook",
			"<span class='font-semibold'>[09/25] Student Census</span>: Koordinasi sensus, membuat video dan poster untuk call to action",
			"<span class='font-semibold'>[10/25] Welcoming Party</span>: Koordinasi acara outdoor untuk menyambut freshmen dengan kegiatan olahraga",
			"<span class='font-semibold'>[11/25] Explore Huangshi - Hiking & Bonding</span>: Koordinasi acara hiking ke kota lain",
			"<span class='font-semibold'>[10-12/25] Culture Festival</span>: Membantu koordinasi di 8 universitas yang mengadakan culture festival",
			"<span class='font-semibold'>[12/25] Christmas Party</span>: Makan siang bonding untuk merayakan Natal dan Tahun Baru",
			"<span class='font-semibold'>[02/26] Mandarin Camp</span>: Kerja sama dengan mandarin camp online untuk program belajar 5 hari"
		],
		skills: ['Leadership', 'Teamwork', 'HR', 'Event Coordination', 'Partnership']
	},

	{
		date: '12/2025 - 03/2026',
		title: 'Secretary 2',
		organization:
			"Basic Leadership Skills Training 2026, <br />South Region of Indonesian Students' Association in China",
		place: 'Xiamen, Fujian, China',
		description: [
			'Basic Leadership Skills Training 2026 bertujuan mencetak pemimpin Gen Z yang cerdas, kompeten, dan resilient dalam menghadapi tantangan.',
			'Menulis dokumen penting seperti proposal, surat kerja sama, dan surat sponsor'
		],
		skills: ['Secretary work', 'Documents writing']
	},

	{
		date: '11/2025 - 04/2026',
		title: 'Tech Division Committee',
		organization: 'Asian Scholars International Conference',
		place: 'Nanjing, Jiangsu, China',
		description: [
			'Asian Scholars’ International Conference (ASIC) diselenggarakan pertama kali oleh Perluni Tiongkok bekerja sama dengan PPI Tiongkok dan PPIT Nanjing, sebagai forum internasional untuk memperkuat kolaborasi riset dan inovasi di Asia-Pasifik.',
			'Membantu pengembangan dan pengelolaan website resmi konferensi, menangani sistem registrasi online dan database (forms, QR code)',
			"Menjadi moderator untuk salah satu forum berjudul: 'AI Optimization in Scientific Research and Publication'"
		],
		skills: ['Public Speaking', 'Teamwork', 'General IT Skills']
	},

	{
		date: '11/2025',
		title: 'Event Coordinator',
		organization: "The Organizer's Class: ",
		place: 'China · Remote',
		description: [
			"Organizer's Class adalah webinar yang menghadirkan enam pembicara dari berbagai kota. Webinar ini bertujuan membekali peserta dengan kompetensi profesional dalam event management. Kegiatan ini menggabungkan materi teoritis dan sharing pengalaman praktis agar peserta mampu mengeksekusi program kerja organisasi secara sistematis dan berdampak.",
			'Membantu ideasi acara, mengundang pembicara, dan koordinasi MC & Moderator'
		],
		skills: ['Event Coordinating', 'Public Relations', 'Webinar Coordination']
	},

	{
		date: '12/2024 - 03/2025',
		title: 'Event Coordinator',
		organization:
			"Basic Leadership Skills Training 2025, <br />South Region of Indonesian Students' Association in China",
		place: 'Wuhan, Hubei, China',
		description: [
			'Basic Leadership Skills Training 2026 bertujuan mencetak pemimpin Gen Z yang cerdas, kompeten, dan resilient dalam menghadapi tantangan.',
			'Mengelola dan memimpin seluruh aspek eksekusi acara, memastikan hasil yang sukses dan distribusi tugas lintas divisi. Termasuk pengembangan konsep, perencanaan konten, pembuatan judul, dan penyelarasan tujuan.',
			'Menjadi Point of Contact utama, menangani komunikasi internal dan eksternal'
		],
		skills: ['Event Coordinating & Ideation', 'Public Relations', 'Partnership', 'Procurement']
	},
	{
		date: '09/2024 - 05/2025',
		title: 'Social Media Officer',
		organization: "South Region of Indonesian Students' Association in China",
		place: 'China · Remote',
		description: [
			'Designer dan manager utama akun Instagram',
			'Membuat seluruh desain seperti Virtual Background, Story Template, dan kebutuhan Instagram Post / Reels'
		],
		skills: ['Social Media Managing', 'Content Creating', 'Graphic Designing']
	},
	{
		date: '07/2024 - 05/2025',
		title: 'Media and Publication Committee',
		organization: "Wuhan Branch of Indonesian Students' Association in China",
		place: 'Wuhan, Hubei, China',
		description: [
			'Membuat video recap dengan format Instagram Reels untuk beberapa program kerja',
			'Menyusun ide awal konsep Instagram organisasi'
		],
		skills: ['Content Creating', 'Video Making']
	}
];

export const certificates: Experience[] = [
	{
		date: '09/2024 - 07/2026',
		title: 'International Student Ambassador',
		organization: 'China University of Geosciences',
		place: 'Wuhan, Hubei, China',
		description: [
			"Sebagai international student ambassador, saya mewakili negara dan bertugas membuat konten video, desain grafis, dan copywriting untuk akun WeChat universitas",
			`Main Social Media Manager untuk akun Instagram universitas
			${hrefify({
				title: 'See the account',
				child: '(@studyatcug)',
				link: 'https://www.instagram.com/studyatcug'
			})}
			`
		],
		skills: ['Social Media Manager', 'Content Creating', 'Global Community']
	},

	{
		date: '10/2025',
		title: 'Culture Festival Organizer',
		organization: 'China University of Geosciences',
		place: 'Wuhan, Hubei, China',
		description: [
			'Mengorganisir culture festival yang diikuti 32 negara dan menarik ribuan pengunjung',
			'Membantu ideasi festival dan eksekusi, serta menjadi liaison officer untuk komunikasi antar organisasi Tiongkok dan mahasiswa internasional'
		],
		skills: ['Event Coordination', 'Global Community']
	},

	{
		date: '03/2023',
		title: 'Front-End Developer Capstone',
		organization: 'META - Coursera',
		place: 'Online',
		description: [
			'Menyelesaikan 3 proyek Full Stack (React) dan 6 kelas dengan peer review dari Coursera.',
			`Certificate:
			${hrefify({
				title: 'See the certificate',
				child: 'https://www.coursera.org/account/accomplishments/certificate/TXU2LBRUESMA',
				link: 'https://www.coursera.org/account/accomplishments/certificate/TXU2LBRUESMA',
				className: 'hover:ml-2'
			})}
			`
		],
		skills: ['Responsive Web Design', 'React.js', 'Figma']
	},

	{
		date: '06/2022',
		title: "CS50's Web Programming with Python and Javascript",
		organization: 'Harvard CS50',
		place: 'Online',
		description: [
			'Menyelesaikan 6 proyek Full Stack (Django + Javascript) dengan peer review dari Harvard.',
			`Certificate:
			${hrefify({
				title: 'See the certificate',
				child: 'https://cs50.harvard.edu/certificates/de7180a5-278f-486d-a49e-485f0bfe0776',
				link: 'https://cs50.harvard.edu/certificates/de7180a5-278f-486d-a49e-485f0bfe0776',
				className: 'hover:ml-2'
			})}
			`
		],
		skills: ['Web Programming', 'Django', 'Javascript']
	},

	{
		date: '07/2022',
		title: 'Most Feasible, Creative, and Innovative Project',
		organization: 'National Tsing Hua University IBP Summer Camp',
		place: 'Online Camp',
		description: [
			"Memenangkan penghargaan tertinggi dengan proyek pitching: 'Speed Bumper as Electricity Generator' (tim 5 orang)"
		],
		skills: ['Creative Thinking', 'Global Community']
	}
];

const dataId: DataBundle = {
	sidebarExperiences,
	experiences,
	projects,
	organizations,
	certificates
};

export const data: DataBundle = dataId;

export default dataId;
