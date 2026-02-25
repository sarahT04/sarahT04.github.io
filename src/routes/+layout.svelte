<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';
	let sky: HTMLElement | null = null;

	const random = (range: number) => Math.floor(Math.random() * range) + 1;

	function createDiv(size: number = 20) {
		let circle = document.createElement('div');
		circle.classList.add('circle');

		let randomBlinkClassName = random(5);
		circle.classList.add(`blink-${randomBlinkClassName}`);

		let widthAndHeight = random(size) + 'px';
		circle.style.height = circle.style.width = widthAndHeight;

		circle.style.left = random(window.innerWidth) + 'px';
		circle.style.top = random(window.innerHeight) + 'px';

		sky!.appendChild(circle);
	}

	function paintStars(amount: number = 210, size: number = 3) {
		if (sky) {
			while (sky.firstChild) {
				sky.removeChild(sky.firstChild);
			}
			for (let i = 0; i < amount; i++) {
				createDiv(size);
			}
		}
	}

	onMount(() => {
		paintStars();
	});
</script>

<svelte:head>
    <title>Sarah Tan · Portfolio Website</title>
</svelte:head>

<div bind:this={sky} id="sky-blinks" class="overflow-hidden"></div>
<slot />
