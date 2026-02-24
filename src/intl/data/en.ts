import type { DataBundle, Experience } from './types';
import { hrefify } from '$lib/utils/hrefify';

export const sidebarExperiences: Experience[] = [
	{
		date: '09/2023 - 06/2027',
		title: 'Bachelor of Computer Science',
		organization: 'China University of Geosciences',
		place: 'Wuhan, Hubei, China',
		description: [
			'Chinese Government Scholarship Awardee',
			'Classes conducted in Chinese (Simplified)',
			'See all of my <a href="#" class="underline on-hover-animation hover:ml-1">classwork projects</a>'
		]
	},
	{
		date: '09/2023 - Present',
		title: 'Software Engineer',
		organization: 'Beneran Indonesia (NGO)',
		place: 'Jakarta, Indonesia, Online',
		description: [
			'Full Stack Developer for their LMS Website<br />pusakawan.id and their back-office<br />website for the LMS',
			'Current maintainer of their Android<br />application: Pusakawan'
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
			`Sole full stack developer for their Learning Management System (LMS) Website: 
			${hrefify({
				child: 'pusakawan.id',
				link: 'https://pusakawan.id/',
				title: 'Pusakawan',
				className: 'hover:mx-1'
			})}
			 with Django, Next.js (TypeScript), MaterialUI, PostgreSQL, AWS EB & S3. <br />
			 Features: authentication, payment gateway (Xendit), and Articulate Storyline embed`,
			'Current developer for their LMS back-office website with React (TypeScript + Vite), Refine.js & shadcn',
			'Current maintainer of their Android application: Pusakawan, an app that xx using Flutter.',
			'Creates internal automation scripts for company purposes using Python and JavaScript.'
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
			'Translated key business documents (e.g., contracts, proposals, ppt) from Indonesian to Chinese and English, and vice versa, ensuring accuracy and maintaining the original professional tone.',
			'Wrote e-mails and creating business documents in both English and Indonesian towards the Indonesian stakeholders, facilitating clear communication and supporting successful negotiations.',
			'Involved in making digital posters, making cooperation with polytechnics, and becoming an HR for a Job Fair in multiple polytechnics in Indonesia'
		],
		skills: [
			'Translation',
			'Personal Assistant',
			'Partnership',
			'HR',
			'Communication and Teamwork'
		]
	},

	{
		date: '07/2025 - 08/2025',
		title: 'AI Trainer',
		organization: 'Generation Girl Indonesia (NGO)',
		place: 'Indonesia · Remote',
		description: [
			'Facilitated hundreds of Indonesian participants of all age and background about AI. Collaborated with other facilitator to create engaging classes of 2 hours duration each.'
		],
		skills: ['Mentoring', 'Artificial Intelligence']
	},

	{
		date: '09/2024 - 12/2024',
		title: 'International Office Assistant',
		organization: 'International Education College, China University of Geosciences',
		place: 'Wuhan, Hubei, China',
		description: [
			'Facilitated communication between international students and staff by providing real-time interpretation from English to Chinese, ensuring clear understanding of student inquiries.',
			'Processed and maintained essential student paperwork.',
			'Managed and organized a high volume of student record.'
		],
		skills: ['Translation', 'Communication and Teamwork', 'Administration']
	},

	{
		date: '06/2023 - 07/2023',
		title: 'Coding Community Mentor',
		organization: 'Stanford University: Code In Place',
		place: 'Worldwide · Remote',
		description: [
			'Taught foundational Computer Science concepts to a global group of 10 learners over 6 weeks',
			'Designed engaging weekly sessions, contributing to an 85% course completion rate.'
		],
		skills: ['Mentoring', 'Computer Science', 'Global Community']
	},

	{
		date: '12/2022',
		title: 'Build a Website Mentor',
		organization: 'Generation Girl Indonesia (NGO)',
		place: 'Indonesia · Remote',
		description: [
			"English mentor for GenG's Build a Website Winter Club. Within 5 days, taught aspiring female teenagers how to create their own website using  HTML, CSS, and Javascript."
		],
		skills: ['Mentoring', 'Web Development']
	},

	{
		date: '11/2021 - 01/2022',
		title: 'Joomla 4.0 Website Intern',
		organization: 'PT. Autory Muda Indonesia',
		place: 'Jakarta, Indonesia · Remote',
		description: [
			'A 3-month internship at a UMKM company. Using Joomla 4.0, I am able to create a website from the ground up to satisfy my employers\' needs and specifications.'
		],
		skills: ['Communication and Teamwork', 'Business Management']
	}
];

export const projects: Experience[] = [
	{
		date: '02/2026',
		title: "Sarah's Snaps",
		organization: 'My photography portofolio',
		place: hrefify({
			title: "Go to Sarah's Snaps",
			link: 'https://sarahs-snaps.vercel.app/',
			child: 'https://sarahs-snaps.vercel.app/'
		}),
		description: ['See how I see different countries. All shot from Xiaomi 14 Ultra'],
		skills: ['Astro', 'MDX', 'ImageKit', 'Photography']
	},
	{
		date: '09/2023 - Present',
		title: 'Classworks',
		organization: 'My homework and notes from university classes and projects that I find interesting',
		place: hrefify({
			title: 'Go to see my classworks',
			link: 'https://sarahs-classwork.vercel.app/',
			child: 'https://sarahs-classwork.vercel.app/'
		}),
		description: ['My classworks. Mostly accomplishing projects using C++ and Python'],
		skills: ['C++', 'Python', 'Notetaking']
	},
	{
		date: '',
		title: 'Advent of Code',
		organization: 'Solutions for Advent of Code using Python',
		place: hrefify({
			title: 'Go to Github repository',
			link: 'https://github.com/sarahT04/advent-of-code',
			child: 'https://github.com/sarahT04/advent-of-code'
		}),
		description: ['Currently available: Year 2015'],
		skills: ['Python', 'Puzzle Solving']
	},

	{
		date: '04/2023',
		title: 'META Front-End Capstone',
		organization: "Front-End Capstone project for META's Front-End Developer Certification",
		place: hrefify({
			title: 'Go to Github repository',
			link: 'https://github.com/sarahT04/meta-capstone',
			child: 'https://github.com/sarahT04/meta-capstone'
		}),
		description: [
			'Little Lemon is a fictional restaraurant that integrates their business into the online platform.',
			"A mockup website of restaurant's background and table reservation"
		],
		skills: ['React', 'Figma']
	},

	{
		date: '03/2023',
		title: 'Reports',
		organization: "A simple CRUD website for teacher's reports of a student's inline skates performance.",
		place: hrefify({
			title: 'Go to Github repository',
			link: 'https://github.com/sarahT04/reports',
			child: 'https://github.com/sarahT04/reports'
		}),
		description: [
			"Was made to create printable reports of each of my students performance for my inline skates coaching job"
		],
		skills: ['React', 'MongoDB', 'ChakraUI']
	},

	{
		date: '07/2022',
		title: 'Random Quote Generator',
		organization: 'A react app that has an API to call a random quote and generating it.',
		place: hrefify({
			title: 'Go to Github repository',
			link: 'https://github.com/sarahT04/random-quote-generator',
			child: 'https://github.com/sarahT04/random-quote-generator'
		}),
		description: [],
		skills: ['React']
	},

	{
		date: '09/2021',
		title: 'Number Rain',
		organization: "It is just printing a bunch of numbers as if it's raining :) ",
		place: hrefify({
			title: 'Go to Github repository',
			link: 'https://github.com/sarahT04/NumberRain',
			child: 'https://github.com/sarahT04/NumberRain'
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
			"South Region of Indonesian Students' Association in China is a grouping of the association branches that geographically orientates itself towards the southern part of China. It consists of 12 branches.",
			'Writes important documents, coordinate meetings inter-branches and make key decisions',
			"Assists secretary works in all south region of China's branches",
			'The Public Relations person for 2 (two) branches: Wuhan and Changsha'
		],
		skills: ['Secretary work', 'Documents writing', 'Public Relations']
	},

	{
		date: '07/2025 - Present',
		title: "Head of People's Development Department",
		organization: "Wuhan Branch of Indonesian Students' Association in China",
		place: 'Wuhan, Hubei, China',
		description: [
			'The People Development Department focuses on capacity building, well-being, and connectivity for Indonesian students in Wuhan.',
			'Coordinates several work programmes in Wuhan with 5 committees members. Work programmes includes:',
			"<span class='font-semibold'>[08/25] Freshmen Preparation Camp</span>: Coordinated a webinar for freshmen to prepare their pre-coming to Wuhan, becomes the primary contact person in WhatsApp group, and published a guidebook to be shared to the freshmen",
			"<span class='font-semibold'>[09/25] Student Census</span>: Coordinated the census, made several videos and posters for call to action.",
			"<span class='font-semibold'>[10/25] Welcoming Party</span>: Coordinated an outdoor event to welcome the freshmen. Event consists of: playing sports together to bond with each other",
			"<span class='font-semibold'>[11/25] Explore Huangshi - Hiking & Bonding</span>: Coordinated a hiking event to another city.",
			"<span class='font-semibold'>[10-12/25] Culture Festival</span>: Assisted coordination in 8 different universities holding culture festivals.",
			"<span class='font-semibold'>[12/25] Christmas Party</span>: Bonding lunch to celebrate Christmas and New Years.",
			"<span class='font-semibold'>[02/26] Mandarin Camp</span>: Partnered with an online mandarin camp to create 5 days of learning Mandarin camp."
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
			'Basic Leadership Skills Traning 2026 aims to produce Gen Z leaders who are not only intelligent and competent, but also mentally strong, resilient in facing challenges, and able to bring positive change to their respective environments.',
			'Writes key documents such as proposal, partnership letters, and sponsorship letters'
		],
		skills: ['Secretary work', 'Documents writing']
	},

	{
		date: '11/2025 - 04/2026',
		title: 'Tech Division Committee',
		organization: 'Asian Scholars International Conference',
		place: 'Nanjing, Jiangsu, China',
		description: [
			"Asian Scholars’ International Conference (ASIC), hosted for the first time by Perluni Tiongkok in collaboration with PPI Tiongkok and PPIT Nanjing, is a flagship international forum designed to strengthen research partnerships and innovation across the Asia-Pacific.",
			'Helped to develop and manage the official conference website, handled online registration system and database (forms, QR code)',
			"Became the moderator for one of their forum titled: 'AI Optimization in Scientific Research and Publication"
		],
		skills: ['Public Speaking', 'Teamwork', 'General IT Skills']
	},

	{
		date: '11/2025',
		title: 'Event Coordinator',
		organization: "The Organizer's Class: ",
		place: 'China · Remote',
		description: [
			"Organizer's Class is a webinar featuring six speakers from various cities. This webinar is aimed to equip participants with professional competencies in event management. This activity combines theoretical material with practical experience sharing to ensure participants are able to execute their organization's work programs systematically and impactfully.",
			"Helped with the event's ideation, invited the speakers, and coordinated the MC & Moderator"
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
			'Basic Leadership Skills Traning 2026 aims to produce Gen Z leaders who are not only intelligent and competent, but also mentally strong, resilient in facing challenges, and able to bring positive change to their respective environments.',
			'Managed and led all aspects of event execution, ensuring successful outcomes and efficient cross-divisional task distribution. Responsibilities included concept development, content planning, title creation, and strategic goal alignment for all stakeholders.',
			'Served as the primary Point of Contact, effectively managing internal and external communication'
		],
		skills: ['Event Coordinating & Ideation', 'Public Relations', 'Partnership', 'Procurement']
	},
	{
		date: '09/2024 - 05/2025',
		title: 'Social Media Officer',
		organization: "South Region of Indonesian Students' Association in China",
		place: 'China · Remote',
		description: [
			'Main designer and manager of the Instagram account',
			'Made all of the designs including Virtual Background, Story Template, and Instagram Post / Reels needs.'
		],
		skills: ['Social Media Managing', 'Content Creating', 'Graphic Designing']
	},
	{
		date: '07/2024 - 05/2025',
		title: 'Media and Publication Committee',
		organization: "Wuhan Branch of Indonesian Students' Association in China",
		place: 'Wuhan, Hubei, China',
		description: [
			'Created video recaps with Instagram Reels format for multiple work programme',
			"Prepared initial ideation of the organization's Instagram account concepts"
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
			"As an international student ambassador, representing my country, I was tasked to create video, graphic design, and copywriting content for the university's WeChat account",
			`Main Social Media Manager for the university's Instagram account
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
			'Organized a culture festival day with 32 countries participating and attracted thousands of people',
			'Made the ideation of the festival, helped with the execution by being a liaison officer to help communication between the Chinese organizations and the International students.'
		],
		skills: ['Event Coordination', 'Global Community']
	},

	{
		date: '03/2023',
		title: 'Front-End Developer Capstone',
		organization: 'META - Coursera',
		place: 'Online',
		description: [
			'Completed 3 Full Stack projects (React) and 6 classes with Coursera peer-reviewed.',
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
			'Completed 6 Full Stack projects (Django + Javascript) with Harvard peer-reviewed.',
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
			"Won the highest title with a group of 5 with a project pitch: 'Speed Bumper as Electricity Generator'"
		],
		skills: ['Creative Thinking', 'Global Community']
	}
];

const dataEn: DataBundle = {
	sidebarExperiences,
	experiences,
	projects,
	organizations,
	certificates
};

export const data: DataBundle = dataEn;

export default dataEn;
