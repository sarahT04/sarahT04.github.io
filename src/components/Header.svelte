<script lang="ts">
	import Sarah from '$lib/images/sarah pfp.jpg';
	import Github from '$lib/svg/Github.svelte';
	import Linkedin from '$lib/svg/Linkedin.svelte';
	import Wordpress from '$lib/svg/Wordpress.svelte';
</script>

<header class="parent-class">
	<section class="child-class glassmorphism rounded-2xl border border-main-light">
		<img src={Sarah} alt="A back shot of Sarah looking at faraway" class="w-48 rounded-xl" />
		<div class="mt-4 flex flex-col">
			<h1 class="text-4xl">
				Hi! I'm <span class="text-main-orange font-semibold">Sarah Tan</span> :)
			</h1>
			<h3 class="mt-2">Carefree overthinker who loves living life.</h3>
			<div class="flex gap-3 mt-auto mb-5">
				<a href="https://github.com/sarahT04" title="sarahT04 on Github"><Github /></a>
				<a
					href="https://www.linkedin.com/in/sarah-tanujaya-b9495a1b4/"
					title="Sarah Tanujaya on Linkedin"
				>
					<Linkedin />
				</a>
				<a href="https://sarahsradio.wordpress.com/" title="sarahsradio on Wordpress">
					<Wordpress />
				</a>
			</div>
		</div>
	</section>
</header>
