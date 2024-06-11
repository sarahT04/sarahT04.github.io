<script lang="ts">
	import { onMount } from 'svelte';
	import { onAuthStateChanged } from 'firebase/auth';
	import '../app.css';
	import { session } from '$lib/session';
	import { PUBLIC_ADMIN_EMAIL } from '$env/static/public';
	import { auth } from '$lib/firebase';
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
		if (auth) {
			onAuthStateChanged(auth, (user) => {
				if (!user) {
					session.update(() => {
						return {
							user: null,
							loggedIn: false,
							isAdmin: false
						};
					});
					return false;
				}
				const loggedIn = !!user && user?.emailVerified;
				const isAdmin = loggedIn ?? user.email === PUBLIC_ADMIN_EMAIL;
				session.update(() => {
					return {
						user,
						loggedIn,
						isAdmin
					};
				});
				return true;
			});
		} else {
			new Error('Firebase Auth not initialized');
		}
	});
</script>

<div bind:this={sky} id="sky-blinks" class="overflow-hidden"></div>
<slot />
