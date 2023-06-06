<script lang="ts">
	import { industry } from '../store/industry';
	import { selected } from '../store/selected';
	import { chunk } from '../utils';
	let tags: string[][] = [];

	industry.subscribe((data) => {
		tags = chunk(
			data.slice(0, 17).map((item) => item.name),
			3
		);
	});

	const select = (value: string) => {
		$selected = value;
	};
</script>

<p class="mb-5 font-medium text-[14px] leading-[20px] text-themed-black">
	Or select from the most popular:
</p>
<div>
	{#each tags as row}
		<div class="flex">
			{#each row as tag}
				<button
					on:click={() => select(tag)}
					class:bg-blue-100={$selected === tag}
					class:bg-gray-100={$selected !== tag}
					class="m-1 font-medium py-1 px-2 bg-white rounded text-gray-700 border hover:bg-blue-100 hover:text-blue-500 hover:outline-none hover:border-blue-300 cursor-pointer"
				>
					<span
						class="text-[14px] leading-[20px] whitespace-nowrap font-normal break-keep leading-none max-w-full flex-initial"
					>
						{tag}
					</span>
				</button>
			{/each}
		</div>
	{/each}
</div>
