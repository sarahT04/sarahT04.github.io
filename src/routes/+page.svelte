<script lang="ts">
	import Sarah from '$lib/images/2 sarah pfp.jpg';
	import Github from '$lib/svg/Github.svelte';
	import Linkedin from '$lib/svg/Linkedin.svelte';
	import ExperiencesCard from '$components/ExperiencesCard.svelte';
	import { fade } from 'svelte/transition';

	import { experiences, projects, organizations, certificates } from '../data';

	const labels = ['experiences', 'projects', 'organizations', 'certificates'] as const;
	const data = { experiences, projects, organizations, certificates };
	let currentNav: keyof typeof data = labels[0];

	function capitalize(str: string) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}
</script>

<div class="flex flex-col lg:flex-row overflow-hidden">
<header class="parent-class pt-5 pb-2 lg:pb-36 px-6 lg:pl-16 w-full lg:w-1/3 justify-center">
		<section class="flex flex-col gap-2 rounded-2xl">
			<img
				src={Sarah}
				alt="A back shot of Sarah looking at faraway"
				class="w-36 lg:w-48 rounded-xl self-center"
			/>
			<div class="mt-4 flex flex-col items-center justify-center">
				<h1 class="text-3xl lg:text-4xl text-center">
					Hi! I'm <span class="text-main-orange font-semibold">Sarah Tan</span> :)
				</h1>
				<h3 class="mt-2 mb-3 text-center italic">A polygot, globalized and carefree thinking addict</h3>
				<div class="flex items-center text-center gap-3 mt-auto mb-5">
					<a href="https://github.com/sarahT04" title="sarahT04 on Github" class="on-hover-animation"
						><Github /></a
					>
					<a
						class="on-hover-animation"
						href="https://www.linkedin.com/in/sarah-tanujaya-b9495a1b4/"
						title="Sarah Tanujaya on Linkedin"
					>
						<Linkedin />
					</a>
				</div>
			</div>
			<ExperiencesCard
				date="09/2023 - 06/2027"
				title="Bachelor of Computer Science"
				organization="China University of Geosciences"
				place="Wuhan, Hubei, China"
				description={[
					'Chinese Government Scholarship Awardee',
					'Classes conducted in Chinese (Simplified)',
					'See all of my <a href="#" class="underline on-hover-animation hover:ml-1">classwork projects</a>'
				]}
			/>
			<ExperiencesCard
				date="09/2023 - Present"
				title="Software Engineer"
				organization="Beneran Indonesia (NGO)"
				place="Jakarta, Indonesia, Online"
				description={[
					'Full Stack Developer for their LMS Website<br />pusakawan.id and their back-office<br />website for the LMS',
					'Current maintainer of their Android<br />application: Pusakawan'
				]}
			/>
		</section>
	</header>

	<main class="parent-class items-center flex-col mt-5 w-full lg:w-2/3 px-6 lg:px-0">
		<section class="section glassmorphism w-full lg:w-3/4">
			<p class="text-main-orange font-semibold">About me</p>
			<h1 class="text-sm lg:text-base">
				My name is Sarah Tan. I hold an Indonesian passport and Chinese Student Visa. <br />I am
				a polygot, globalized and multi-disciplinary person. I work with a lot of stuff that ranges
				from humanities to technology. Discuss with me about multiple topics!
				<br /><br />
				I speak 3 languages: Indonesian (Native), English (C1), Chinese Simplified (HSK4)
				<br /><br />
				Currently an international student in Wuhan, China, a student committee in Indonesian Students' Association in China,
				and a Software Engineer in Beneran Indonesia (NGO) whose focus is in building their LMS website and their application 
				that does gamification for ethics education.
			</h1>
		</section>

		<nav class="section glassmorphism w-full lg:w-3/4 py-4 px-2">
			<div class="flex flex-wrap justify-around gap-2 lg:gap-0">
				{#each labels as label}
					<button
						type="button"
						class={`on-hover-animation text-sm lg:text-base ${
							currentNav === label ? 'text-main-orange' : ''
						}`}
						on:click={() => (currentNav = label)}
					>
						{capitalize(label)}
					</button>
				{/each}
			</div>
		</nav>

		<section class="section glassmorphism w-full lg:w-3/4">
			{#key currentNav}
				<div transition:fade={{ duration: 200 }}>
					{#each data[currentNav] as experience}
						<ExperiencesCard {...experience} />
					{/each}
				</div>
			{/key}
		</section>
	</main>
</div>
