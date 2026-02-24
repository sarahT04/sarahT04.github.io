import type { DataBundle, Experience } from './types';
import { hrefify, hrefifyProjects } from '$lib/utils/hrefify';

export const sidebarExperiences: Experience[] = [
	{
		date: '2023/09 - 2027/06',
		title: '计算机科学学士',
		organization: '中国地质大学',
		place: '中国 湖北 武汉',
		description: [
			'中国政府奖学金获得者',
			'课程为中文授课（简体）',
			'看看我的 <a href="#" class="underline on-hover-animation hover:ml-1">课堂项目</a>'
		]
	},
	{
		date: '2023/09 - 至今',
		title: '软件工程师',
		organization: 'Beneran Indonesia（印尼非政府组织）',
		place: '印度尼西亚 雅加达 · 远程',
		description: [
			'负责他们的 LMS 主站<br />pusakawan.id 以及 LMS 后台<br />网站的全栈开发',
			'维护他们的 Android 应用：Pusakawan'
		]
	}
];

export const experiences: Experience[] = [
	{
		date: '2023/09 - 至今',
		title: '软件工程师',
		organization: 'Beneran Indonesia（印尼非政府组织）',
		place: '印度尼西亚 雅加达 · 远程',
		description: [
			`独立负责他们的学习管理系统（LMS）网站：
			${hrefify({
				child: 'pusakawan.id',
				link: 'https://pusakawan.id/',
				title: 'Pusakawan',
				className: 'hover:mx-1'
			})}
			使用 Django、Next.js（TypeScript）、MaterialUI、PostgreSQL、AWS EB 和 S3。<br />
			功能包括：登录认证、支付网关（Xendit）和 Articulate Storyline 嵌入`,
			'负责 LMS 后台网站开发（React（TypeScript + Vite）、Refine.js 和 shadcn）',
			'维护 Android 应用：Pusakawan（Flutter）',
			'用 Python 和 JavaScript 写内部自动化脚本'
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
		date: '2025/05 - 2025/07',
		title: '国际事务专员',
		organization: 'HOPE International 厚溥国际',
		place: '中国 湖北 武汉',
		description: [
			'在印尼语、中文、英语之间翻译关键商务文件（合同、提案、PPT 等），保证准确并保持专业语气。',
			'用英文和印尼文写邮件与商务文件，对接印尼方伙伴，推动沟通和谈判。',
			'参与海报设计、对接多所印尼理工院校合作，并在多校招聘会担任 HR'
		],
		skills: ['翻译', '个人助理', '合作拓展', '人力资源', '沟通与团队合作']
	},

	{
		date: '2025/07 - 2025/08',
		title: 'AI 讲师',
		organization: 'Generation Girl Indonesia（印尼非政府组织）',
		place: '印度尼西亚 · 远程',
		description: [
			'为不同年龄和背景的数百名印尼学员讲 AI，并与其他讲师一起设计每次 2 小时的课程。'
		],
		skills: ['导师辅导', '人工智能']
	},

	{
		date: '2024/09 - 2024/12',
		title: '国际处助理',
		organization: '中国地质大学 国际教育学院',
		place: '中国 湖北 武汉',
		description: [
			'为国际学生和教职工提供英中口译，保证沟通顺畅。',
			'处理并维护学生重要材料',
			'整理并管理大量学生档案'
		],
		skills: ['翻译', '沟通与团队合作', '行政管理']
	},

	{
		date: '2023/06 - 2023/07',
		title: '编程社区导师',
		organization: '斯坦福大学：Code In Place',
		place: '全球 · 远程',
		description: [
			'6 周内为全球 10 名学习者讲授计算机科学基础',
			'设计每周课程，结课率达到 85%'
		],
		skills: ['导师辅导', '计算机科学', '全球社群']
	},

	{
		date: '2022/12',
		title: '建站冬令营导师',
		organization: 'Generation Girl Indonesia（印尼非政府组织）',
		place: '印度尼西亚 · 远程',
		description: [
			'担任 GenG 建站冬令营英文导师，5 天内教女生用 HTML、CSS、JavaScript 搭建网站'
		],
		skills: ['导师辅导', '网页开发']
	},

	{
		date: '2021/11 - 2022/01',
		title: 'Joomla 4.0 网站实习生',
		organization: 'PT. Autory Muda Indonesia',
		place: '印度尼西亚 雅加达 · 远程',
		description: [
			'在一家 UMKM 公司完成 3 个月实习，用 Joomla 4.0 从零搭建网站，满足业务需求'
		],
		skills: ['沟通与团队合作', '商业管理']
	},
	{
		date: '2019/07 - 2023/09',
		title: '轮滑教练',
		organization: 'Rollerskool · PT. Autory Muda Indonesia',
		place: '印度尼西亚 雅加达',
		description: [
			'按轮滑课程体系，在公共场地、体育馆和国际学校指导不同年龄段的学员，累计带教数百人'
		],
		skills: ['沟通与团队合作', '全球社群', '轮滑', '教学辅导']
	}
];

export const projects: Experience[] = [
	{
		date: '2026/02',
		title: 'Sarah\'s Snaps',
		organization: '我的摄影作品集',
		place: hrefifyProjects({
			website: {
				title: '前往 Sarah\'s Snaps 网站',
				link: 'https://sarahs-snaps.vercel.app/',
				child: 'https://sarahs-snaps.vercel.app/'
			},
			github: {
				title: '前往 Sarah\'s Snaps Github',
				link: 'https://github.com/sarahT04/sarahs-snaps',
				child: 'https://github.com/sarahT04/sarahs-snaps'
			}
		}),
		description: ['用小米 14 Ultra 记录我看过的不同国家'],
		skills: ['Astro', 'MDX', 'ImageKit', '摄影']
	},
	{
		date: '2023/09 - 至今',
		title: '课业作品',
		organization: '我感兴趣的课程作业与项目笔记',
		place: hrefifyProjects({
			website: {
				title: '查看课业作品',
				link: 'https://sarahs-classwork.vercel.app/',
				child: 'https://sarahs-classwork.vercel.app/'
			}
		}),
		description: ['主要用 C++ 和 Python 完成项目'],
		skills: ['C++', 'Python', '学习笔记']
	},
	{
		date: '',
		title: 'Advent of Code',
		organization: 'Advent of Code（Python 解题）',
		place: hrefifyProjects({
			github: {
				title: '前往 Github 仓库',
				link: 'https://github.com/sarahT04/advent-of-code',
				child: 'https://github.com/sarahT04/advent-of-code'
			}
		}),
		description: ['目前整理了 2015 年'],
		skills: ['Python', '解谜能力']
	},

	{
		date: '2023/04',
		title: 'META 前端结业项目',
		organization: 'META 前端开发认证结业项目',
		place: hrefifyProjects({
			website: {
				title: '查看网站',
				link: 'https://little-lemon-saraht04.vercel.app/',
				child: 'https://little-lemon-saraht04.vercel.app/'
			},
			github: {
				title: '前往 Github 仓库',
				link: 'https://github.com/sarahT04/meta-capstone',
				child: 'https://github.com/sarahT04/meta-capstone'
			}
		}),
		description: [
			'Little Lemon 是一个把业务搬到线上平台的虚构餐厅',
			'包含餐厅介绍与订座页面的模拟网站'
		],
		skills: ['React', 'Figma']
	},

	{
		date: '2023/03',
		title: 'Reports',
		organization: '用于记录学生轮滑表现的 CRUD 网站',
		place: hrefifyProjects({
			website: {
				title: '查看网站',
				link: 'https://reports-saraht04.vercel.app/',
				child: 'https://reports-saraht04.vercel.app/'
			},
			github: {
				title: '前往 Github 仓库',
				link: 'https://github.com/sarahT04/reports',
				child: 'https://github.com/sarahT04/reports'
			}
		}),
		description: ['用于生成学生轮滑训练表现的可打印报告'],
		skills: ['React', 'MongoDB', 'ChakraUI']
	},

	{
		date: '2022/07',
		title: '随机名言生成器',
		organization: '调用 API 获取并展示随机名言的 React 应用',
		place: hrefifyProjects({
			github: {
				title: '前往 Github 仓库',
				link: 'https://github.com/sarahT04/random-quote-generator',
				child: 'https://github.com/sarahT04/random-quote-generator'
			}
		}),
		description: [],
		skills: ['React']
	},

	{
		date: '2021/09',
		title: 'Number Rain',
		organization: '模拟数字下雨效果的小程序 :)',
		place: hrefifyProjects({
			github: {
				title: '前往 Github 仓库',
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
		date: '2025/08 - 至今',
		title: '秘书',
		organization: '在华印尼学生协会 · 南部区域',
		place: '中国 · 远程',
		description: [
			'南部区域由 12 个分会组成，覆盖中国南方地区',
			'撰写重要文件，协调分会会议并参与决策',
			'协助南部区域各分会秘书工作',
			'担任武汉与长沙分会的公关负责人'
		],
		skills: ['秘书工作', '文件撰写', '公共关系']
	},

	{
		date: '2025/07 - 至今',
		title: '人才发展部部长',
		organization: '武汉市 · 在华印尼学生协会',
		place: '中国 湖北 武汉',
		description: [
			'人才发展部主要做能力建设、身心支持和社群连接',
			'带领 5 名委员协调武汉地区多项项目，包括：',
			"<span class='font-semibold'>[08/25] 新生准备营</span>：办线上说明会，做微信群主要联系人，发布新生指南",
			"<span class='font-semibold'>[09/25] 学生普查</span>：组织普查，制作视频和海报做宣传",
			"<span class='font-semibold'>[10/25] 迎新派对</span>：组织户外迎新活动，用运动促进交流",
			"<span class='font-semibold'>[11/25] 黄石探索 - 徒步与联谊</span>：组织跨城徒步活动",
			"<span class='font-semibold'>[10-12/25] 文化节</span>：协助 8 所高校文化节",
			"<span class='font-semibold'>[12/25] 圣诞聚会</span>：年末联谊午餐",
			"<span class='font-semibold'>[02/26] 中文营</span>：和线上中文营合作做 5 天学习营"
		],
		skills: ['领导力', '团队协作', '人力资源', '活动统筹', '合作伙伴关系']
	},

	{
		date: '2025/12 - 2026/03',
		title: '秘书二',
		organization: '2026 基础领导力培训<br />在华印尼学生协会 · 南部区域',
		place: '中国 福建 厦门',
		description: [
			'基础领导力培训旨在培养有能力、有韧性的 Z 世代领导者',
			'撰写提案、合作函与赞助函等关键文件'
		],
		skills: ['秘书工作', '文件撰写']
	},

	{
		date: '2025/11 - 2026/04',
		title: '技术组委员',
		organization: '亚洲学者国际会议',
		place: '中国 江苏 南京',
		description: [
			'ASIC 由 Perluni Tiongkok、PPI Tiongkok 和 PPIT Nanjing 联合举办，旨在推动亚太地区科研合作与创新',
			'参与官网建设和维护，负责在线报名系统与数据库（表单、二维码）',
			"担任论坛 'AI Optimization in Scientific Research and Publication' 主持人"
		],
		skills: ['公众演讲', '团队协作', '通用 IT 技能']
	},

	{
		date: '2025/11',
		title: '活动协调',
		organization: 'The Organizer\'s Class',
		place: '中国 · 远程',
		description: [
			'面向多城市的线上讲座活动，邀请 6 位讲者分享活动管理经验，帮助参与者提升执行力',
			'参与活动策划、讲者邀请与主持/嘉宾协调'
		],
		skills: ['活动统筹', '公共关系', '线上活动协调']
	},

	{
		date: '2024/12 - 2025/03',
		title: '活动协调',
		organization: '2025 基础领导力培训<br />在华印尼学生协会 · 南部区域',
		place: '中国 湖北 武汉',
		description: [
			'基础领导力培训旨在培养有能力、有韧性的 Z 世代领导者',
			'统筹活动执行，涵盖概念制定、内容规划、命名与目标对齐，确保跨部门协作',
			'担任主要对接人，负责内外部沟通协调'
		],
		skills: ['活动策划与统筹', '公共关系', '合作伙伴关系', '采购']
	},
	{
		date: '2024/09 - 2025/05',
		title: '社媒专员',
		organization: '在华印尼学生协会 · 南部区域',
		place: '中国 · 远程',
		description: [
			'负责 Instagram 账号的设计与管理',
			'制作虚拟背景、Story 模板与帖子/短视频等视觉素材'
		],
		skills: ['社媒运营', '内容创作', '平面设计']
	},
	{
		date: '2024/07 - 2025/05',
		title: '媒体与出版委员',
		organization: '武汉市 · 在华印尼学生协会',
		place: '中国 湖北 武汉',
		description: [
			'为多个项目制作 Instagram Reels 风格的视频回顾',
			'参与筹备组织账号的初步内容方向'
		],
		skills: ['内容创作', '视频制作']
	}
];

export const certificates: Experience[] = [
	{
		date: '2024/09 - 2026/07',
		title: '国际学生大使',
		organization: '中国地质大学',
		place: '中国 湖北 武汉',
		description: [
			'代表学校为微信公众号制作视频、平面设计与文案内容',
			`担任学校 Instagram 账号负责人
			${hrefify({
				title: '查看账号',
				child: '(@studyatcug)',
				link: 'https://www.instagram.com/studyatcug'
			})}
			`
		],
		skills: ['社媒管理', '内容创作', '全球社群']
	},

	{
		date: '2025/10',
		title: '文化节组织者',
		organization: '中国地质大学',
		place: '中国 湖北 武汉',
		description: [
			'组织 32 个国家参与的文化节，吸引上千人到场',
			'参与活动创意策划与执行，担任中外组织沟通联络人'
		],
		skills: ['活动统筹', '全球社群']
	},

	{
		date: '2023/03',
		title: '前端开发结业项目',
		organization: 'META - Coursera',
		place: '线上',
		description: [
			'完成 3 个 React 全栈项目与 6 门同行评审课程',
			`证书：
			${hrefify({
				title: '查看证书',
				child: 'https://www.coursera.org/account/accomplishments/certificate/TXU2LBRUESMA',
				link: 'https://www.coursera.org/account/accomplishments/certificate/TXU2LBRUESMA',
				className: 'hover:ml-2'
			})}
			`
		],
		skills: ['响应式网页设计', 'React.js', 'Figma']
	},

	{
		date: '2022/06',
		title: "CS50 的 Python 与 JavaScript Web 编程",
		organization: 'Harvard CS50',
		place: '线上',
		description: [
			'完成 6 个 Django + JavaScript 全栈项目并通过同行评审',
			`证书：
			${hrefify({
				title: '查看证书',
				child: 'https://cs50.harvard.edu/certificates/de7180a5-278f-486d-a49e-485f0bfe0776',
				link: 'https://cs50.harvard.edu/certificates/de7180a5-278f-486d-a49e-485f0bfe0776',
				className: 'hover:ml-2'
			})}
			`
		],
		skills: ['Web 编程', 'Django', 'JavaScript']
	},

	{
		date: '2022/07',
		title: '最具可行性、创意与创新项目',
		organization: '国立清华大学 IBP 夏令营',
		place: '线上营',
		description: [
			"以『减速带发电』项目获得最高奖项（5 人团队）"
		],
		skills: ['创造性思维', '全球社群']
	}
];

const dataCn: DataBundle = {
	sidebarExperiences,
	experiences,
	projects,
	organizations,
	certificates
};

export const data: DataBundle = dataCn;

export default dataCn;
