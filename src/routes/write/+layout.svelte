<script lang="ts">
	import { session } from '$lib/session';
	import { logOut, loginWithGoogle } from '$lib/index';

	$: loggedIn = $session && $session.isAdmin;
</script>

{#if loggedIn}
	<nav class="sticky z-10 inline-flex justify-between px-6 items-center bg-main-orange h-8 w-full">
		<div class="flex gap-10">
			<button on:click={logOut}>Logout</button>
			<button>Back</button>
		</div>
		<p>Welcome, Sarah</p>
		<div class="flex gap-10">
			<button>Preview</button>
			<button>Submit</button>
			<!-- <button>Save</button> -->
		</div>
	</nav>
	<slot />
{:else}
	<main class="grid place-items-center text-center">
		<section class="w-30 h-30">
			<h1 class="text-xl">Hi! You are not logged in.</h1>
			<button class="button-main" on:click={loginWithGoogle}>Login</button>
		</section>
	</main>
{/if}
