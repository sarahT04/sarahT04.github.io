<script lang="ts">
	export let date = '';
	export let title = '';
	export let organization = '';
	export let place = '';
	export let description: Array<string> = [];
	export let skills: Array<string> = [];
</script>

<div class="flex gap-3 lg:gap-4">
	<!-- Timeline bullet and line -->
	<div class="flex flex-col items-center">
		<div class="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-main-orange mt-1.5 flex-shrink-0"></div>
		<div class="w-0.5 h-full bg-main-orange/30 mt-1 mb-5"></div>
	</div>

	<!-- Content -->
	<div class="flex-1 pb-4">
		<p class="text-gray-400 text-xs lg:text-sm">{date}</p>
		<p class="text-lg lg:text-xl">{@html title}</p>
		<p class="text-base lg:text-lg">{@html organization}</p>
		<p class="text-xs lg:text-sm">{@html place}</p>
		{#if description?.length}
			<ul class="my-2 space-y-1 list-disc pl-4 lg:pl-5">
				{#each description as item}
					<li class="text-xs lg:text-sm">{@html item}</li>
				{/each}
			</ul>
		{/if}
		{#if skills?.length}
			<p class="text-xs lg:text-sm">
				<span class="font-semibold">Skills:</span> {skills.join(', ')}
			</p>
		{/if}
	</div>
</div>
