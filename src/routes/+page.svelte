<script lang="ts">
	import Navbar from '$components/Navbar.svelte';
	import Header from '$components/Header.svelte';

	const languagesData = [
		{
			href: 'https://github.com/sarahT04?tab=repositories&q=&type=public&language=javascript&sort=',
			name: 'JS'
		},
		{
			href: 'https://github.com/sarahT04?tab=repositories&q=&type=public&language=svelte&sort=',
			name: 'Svelte'
		},
		{
			href: 'https://github.com/sarahT04?tab=repositories&q=&type=public&language=python&sort=',
			name: 'Python'
		},
		{
			href: 'https://github.com/sarahT04?tab=repositories&q=&type=public&language=typescript&sort=',
			name: 'TS'
		}
	];

	const firstDivide = languagesData.slice(0, languagesData.length / 2);
	const lastDivide = languagesData.slice(languagesData.length / 2, languagesData.length);
</script>

<Header />
<Navbar />

<main class="parent-class items-center flex-col mt-5">
	<section class="section glassmorphism rounded-sm">
		<h1>
			I'm a software developer working as a full-stack. <br /><br/>I have a general knowledge in everything: JS
			or TS, Next or Svelte, Django or Serverless, MySQL or NoSQL, Scripting, Flutter, AI <br />You name
			it.
		</h1>
	</section>
	<section class="section glassmorphism rounded-sm">
		<table>
			<tr>
				<td class="text-main-orange">2023 - 2027</td>
				<td class="whitespace-pre"
					>: CSC Scholarship awardee, CS degree, <a
						href="https://www.instagram.com/studyatcug/"
						title="Check CUG's Instagram">CUG (Wuhan)</a
					></td
				>
			</tr>
			<tr>
				<td class="text-main-orange">2023 - present</td>
				<td class="whitespace-pre"
					>: Part-time software developer, <a
						href="https://www.instagram.com/beneran.indonesia/"
						title="Check Beneran Indonesia's instagram">Beneran Indonesia</a
					></td
				>
			</tr>
		</table>
		<br />
		<h3>Looking forward into getting new experiences!</h3>
	</section>
	<section class="section glassmorphism rounded-sm">
		<h3>Find some of my projects in Github:</h3>
		<br />
		<div class="flex justify-evenly">
			<div>
				{#each firstDivide as languageData}
					<li>
						<a href={languageData.href}>{languageData.name}</a>
					</li>
				{/each}
			</div>
			<div>
				{#each lastDivide as languageData}
					<li>
						<a href={languageData.href}>{languageData.name}</a>
					</li>
				{/each}
			</div>
		</div>
	</section>
</main>

<style>
	td {
		padding-right: 0.3rem;
	}
</style>
