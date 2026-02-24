<script lang="ts">
	import Sarah from '$lib/images/2 sarah pfp.jpg';
	import Github from '$lib/svg/Github.svelte';
	import Linkedin from '$lib/svg/Linkedin.svelte';
	import ExperiencesCard from '$components/ExperiencesCard.svelte';
	import { fade } from 'svelte/transition';
	import { locale, setLocale, t } from '$lib/i18n';

	import { dataByLocale } from '../data';

	const labels = ['experiences', 'projects', 'organizations', 'certificates'] as const;
	type SectionKey = (typeof labels)[number];
	let currentNav: SectionKey = labels[0];
	$: data = dataByLocale[$locale];

	$: isChinese = $locale === 'cn';
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
				<h3 class="mt-2 mb-2 text-center italic">{$t('header.tagline')}</h3>
				<div class="flex items-center gap-2 mb-3">
					<button
						type="button"
						class={`on-hover-animation text-xs lg:text-sm ${$locale === 'en' ? 'text-main-orange' : ''}`}
						on:click={() => setLocale('en')}
					>
						{isChinese ? '英' : 'EN'}
					</button>
					<button
						type="button"
						class={`on-hover-animation text-xs lg:text-sm ${$locale === 'cn' ? 'text-main-orange' : ''}`}
						on:click={() => setLocale('cn')}
					>
						{isChinese ? '中' : 'CN'}
					</button>
					<button
						type="button"
						class={`on-hover-animation text-xs lg:text-sm ${$locale === 'id' ? 'text-main-orange' : ''}`}
						on:click={() => setLocale('id')}
					>
						{isChinese ? '印' : 'ID'}
					</button>
				</div>
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
			{#each data.sidebarExperiences as experience}
				<ExperiencesCard {...experience} />
			{/each}
		</section>
	</header>

	<main class="parent-class items-center flex-col mt-5 w-full lg:w-2/3 px-6 lg:px-0">
		<section class="section glassmorphism w-full lg:w-3/4">
			<p class="text-main-orange font-semibold">{$t('about.title')}</p>
			<h1 class="text-sm lg:text-base">
				{@html $t('about.body')}
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
						{$t(`nav.${label}`)}
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
