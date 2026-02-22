type Experience = {
    date: string;
    title: string;
    organization: string;
    place: string;
    description: Array<string>;
    skills?: Array<string>;
};

export const experiences: Experience[] = [
    {
        // TODO
        date: '09/2023 - Present',
        title: 'Software Engineer',
        organization: 'Beneran Indonesia (NGO)',
        place: 'Jakarta, Indonesia · Remote',
        description: [
            "Sole full stack developer for their Learning Management System (LMS) Website: pusakawan.id with Django, Next.js (TypeScript), MaterialUI, PostgreSQL, AWS EB & S3. Features: authentication, payment gateway (Xendit), and Articulate Storyline embed",
            "Current developer for their LMS back-office website with React (TypeScript + Vite), Refine.js, shadcn",
            "Current maintainer of their Android application: Pusakawan, an app that xx using Flutter.",
            "Creates internal automation scripts for company purposes using Python and JavaScript."
        ],
        skills: [
            "TypeScript",
            "Next.js",
            "React",
            "Material UI",
            "Tailwind",
            "Refine.js",
            "Python",
            "Django",
            "AWS S3",
            "AWS Elastic Beanstalk",
            "PostgreSQL",
            "Flutter"
        ]
    },

    {
        date: "05/2025 - 07/2025",
        title: "International Relations Officer",
        organization: "HOPE International 厚溥国际",
        place: "Wuhan, Hubei, China",
        description: [
            "Translated key business documents (e.g., contracts, proposals, ppt) from Indonesian to Chinese and English, and vice versa, ensuring accuracy and maintaining the original professional tone.",
            "Wrote e-mails and creating business documents in both English and Indonesian towards the Indonesian stakeholders, facilitating clear communication and supporting successful negotiations.",
            "Involved in making digital posters, making cooperation with polytechnics, and becoming an HR for a Job Fair for Indonesian students"
        ],
        skills: [
            "Translation",
            "Personal Assistant",
            "Partnership",
            "HR",
            "Communication and Teamwork"
        ]
    },

    {
        date: "07/2025 - 08/2025",
        title: "AI Trainer",
        organization: "Generation Girl Indonesia (NGO)",
        place: "Indonesia · Remote",
        description: [
            "Facilitated hundreds of Indonesian participants of all age and background about AI. Collaborated with other facilitator to create engaging classes of 2 hours duration each."
        ],
        skills: [
            "Mentoring",
            "Artificial Intelligence"
        ]
    },

    {
        date: "09/2024 - 12/2024",
        title: "International Office Assistant",
        organization: "International Education College, China University of Geosciences",
        place: "Wuhan, Hubei, China",
        description: [
            "Facilitated communication between international students and staff by providing real-time interpretation from English to Chinese, ensuring clear understanding of student inquiries.",
            "Processed and maintained essential student paperwork.",
            "Managed and organized a high volume of student record."
        ],
        skills: [
            "Translation",
            "Communication and Teamwork",
            "Administration"
        ]
    },

    {
        date: "06/2023 - 07/2023",
        title: "Coding Community Mentor",
        organization: "Stanford University: Code In Place",
        place: "Worldwide · Remote",
        description: [
            "Taught foundational Computer Science concepts to a global group of 10 learners over 6 weeks",
            "Designed engaging weekly sessions, contributing to an 85% course completion rate."
        ],
        skills: [
            "Mentoring",
            "Computer Science",
            "Global Community"
        ]
    },

    {
        date: "12/2022",
        title: "Build a Website Mentor",
        organization: "Generation Girl Indonesia (NGO)",
        place: "Indonesia · Remote",
        description: [
            "English mentor for GenG's Build a Website Winter Club. Within 5 days, taught aspiring female teenagers how to create their own website using  HTML, CSS, and Javascript."
        ],
        skills: [
            "Mentoring",
            "Web Development"
        ]
    },

    {
        date: "11/2021 - 01/2022",
        title: "Joomla 4.0 Website Intern",
        organization: "PT. Autory Muda Indonesia",
        place: "Jakarta, Indonesia · Remote",
        description: [
            "A 3-month internship at a UMKM company. Using Joomla 4.0, I am able to create a website from the ground up to satisfy my employers' needs and specifications."
        ],
        skills: [
            "Communication and Teamwork",
            "Business Management"
        ]
    },

];

export const projects: Experience[] = [
    {
        date: "02/2026",
        title: "Sarah's Snaps",
        organization: "My photography portofolio",
        place: "https://sarahs-snaps.vercel.app/",
        description: [
            "My photography portofolio"
        ]
    },
    {
        date: "09/2023 - Present",
        title: "Classworks",
        organization: "My homework and notes from university class projects that I find interesting",
        place: "https://sarahs-classwork.vercel.app/",
        description: [
            "My classworks"
        ]
    },
    {
        date: "",
        title: "Advent of Code",
        organization: "Solutions for Advent of Code using Python",
        place: "https://github.com/sarahT04/advent-of-code",
        description: []
    },

    {
        date: "04/2023",
        title: "META Front-End Capstone",
        organization: "Front-End Capstone project for META's Front-End Developer Certification",
        place: "https://github.com/sarahT04/meta-capstone",
        description: []
    },

    {
        date: "03/2023",
        title: "Reports",
        organization: "A simple CRUD website for teacher's reports of a student's performance.",
        place: "https://github.com/sarahT04/reports",
        description: []
    },

    {
        date: "07/2022",
        title: "Random Quote Generator",
        organization: "A react app that has an API to call a random quote and generating it.",
        place: "https://github.com/sarahT04/random-quote-generator",
        description: []
    },

    {
        date: "09/2021",
        title: "Number Rain",
        organization: "It is just printing a bunch of numbers as if it's raining :) ",
        place: "https://github.com/sarahT04/NumberRain",
        description: []
    },

];

export const organizations: Experience[] = [
    {
        date: "08/2025 - Present",
        title: "Secretary",
        organization: "South Region of Indonesian Students' Association in China",
        place: "China · Remote",
        description: []
    },

    {
        date: "07/2025 - Present",
        title: "Head of People's Development Department",
        organization: "Wuhan Branch of Indonesian Students' Association in China",
        place: "Wuhan, Hubei, China",
        description: []
    },

    {
        date: "12/2025 - 03/2026",
        title: "Secretary 2",
        organization: "Basic Leadership Skills Training 2026, <br />South Region of Indonesian Students' Association in China",
        place: "Xiamen, Fujian, China",
        description: []
    },

    {
        date: "11/2025 - 04/2026",
        title: "Tech Division Committee",
        organization: "Asian Scholars International Conference",
        place: "Nanjing, Jiangsu, China",
        description: []
    },

    {
        date: "11/2025",
        title: "Event Coordinator",
        organization: "The Organizer's Class: ",
        place: "China · Remote",
        description: [
            "Coordinated the event's ideation, guest talk, and",
            // "Planning script etc"
        ]
    },

    {
        date: "12/2024 - 03/2025",
        title: "Event Coordinator",
        organization: "Basic Leadership Skills Training 2025, <br />South Region of Indonesian Students' Association in China",
        place: "Wuhan, Hubei, China",
        description: []
    },
    {
        date: "09/2024 - 05/2025",
        title: "Social Media Officer",
        organization: "South Region of Indonesian Students' Association in China",
        place: "China · Remote",
        description: []
    },
    {
        date: "07/2024 - 05/2025",
        title: "Media and Publication Committee",
        organization: "Wuhan Branch of Indonesian Students' Association in China",
        place: "Wuhan, Hubei, China",
        description: []
    },

];

export const certificates: Experience[] = [
    {
        date: "09/2024 - 07/2026",
        title: "International Student Ambassador",
        organization: "China University of Geosciences",
        place: "Wuhan, Hubei, China",
        description: [
            "As an international student ambassador, representing my country, I was tasked to create video, graphic design, and copywriting content for the university's WeChat account",
            "Main Social Media Manager for the university's Instagram account (@studyatcug)"
        ]
    },

    {
        date: "10/2025",
        title: "Culture Festival Organizer",
        organization: "China University of Geosciences",
        place: "Wuhan, Hubei, China",
        description: [
            "Organized a culture festival day with 32 countries participating and attracted thousands of comers",
            "Made the ideation of the festival, helped with the execution by being a liaison officer to help communication between the Chinese organizations and the International students."
        ]
    },

    {
        date: "03/2023",
        title: "Front-End Developer Capstone",
        organization: "META - Coursera",
        place: "Online",
        description: [
            "Skills acquired: Responsive Web Design, React.js, Figma"
        ]
    },

    {
        date: "06/2022",
        title: "CS50's Web Programming with Python and Javascript",
        organization: "Harvard CS50",
        place: "Online",
        description: [
            "Skills acquired: Web Programming, Django, Javascript"
        ]
    },

    {
        date: "07/2022",
        title: "Most Feasible, Creative, and Innovative Project",
        organization: "National Tsing Hua University IBP Summer Camp",
        place: "Online Camp",
        description: [
            "Won the highest title with a group of 5 with a project pitch: 'Speed Bumper as Electricity Generator'"
        ]
    },
]; 