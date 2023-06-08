<script lang="ts">
	import { industry } from '../store/industry';
	import { selected } from '../store/selected';
	let tags: { name: string; services: string[] }[] = [];

	industry.subscribe((data) => {
		//I simulate popularity based on existing services in each industry
		//and limit the quantity to 17 according to the design.
		tags = data.filter((el) => el.services.length > 20).slice(0, 17);
	});

	const select = (value: string) => {
		$selected = value;
	};
</script>

<p class="mb-5 font-medium text-[14px] leading-[20px] text-themed-black">
	Or select from the most popular:
</p>
<div class="flex flex-wrap gap-2">
	{#each tags as tag}
		<button
			on:click={() => select(tag.name)}
			class:bg-blue-100={$selected === tag.name}
			class:bg-gray-100={$selected !== tag.name}
			class="px-4 py-1 border border-[#ecedef] rounded text-[14px]/[1.4] text-[#202123] bg-white hover:bg-[#ebf1ff] hover:text-[#4253ff] hover:border-[#4253ff]"
		>
			<span class="text-[14px] whitespace-nowrap font-normal break-keep max-w-full flex-initial">
				{tag.name}
			</span>
		</button>
	{/each}
</div>
