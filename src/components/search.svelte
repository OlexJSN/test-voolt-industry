<script lang="ts">
	import { industry } from '../store/industry';
	import { selected } from '../store/selected';
	let items: string[] = [];
	let search = '';
	let onSelect = (item: string) => {
		$selected = item;
		search = item;
		closeList();
	};
	industry.subscribe((data) => {
		items = data.map((item) => item.name);
	});
	let popupShown = false;
	const openList = () => {
		popupShown = true;
		document.body.addEventListener('click', closeList);
	};
	const closeList = () => {
		popupShown = false;
		document.body.removeEventListener('click', closeList);
	};
	const toggleList = () => {
		if (popupShown) {
			closeList();
		} else {
			openList();
		}
	};
	selected.subscribe((data) => {
		if (data) search = data;
	});
	$: {
		if (search.length > 0 && !($selected === search)) {
			industry.subscribe((data) => {
				items = data
					.map((item) => item.name)
					.filter((item) => item.toLowerCase().includes(search.toLocaleLowerCase()));
			});
		} else {
			industry.subscribe((data) => {
				items = data.map((item) => item.name);
			});
		}
	}
</script>

<div
	class="relative mb-[40px] text-gray-600 focus-within:text-gray-400 border border-[#D8DBDE] rounded focus-within:border-[#4253FF] focus-within:shadow-[0px_0px_0px_2px_#E2EBFD]"
>
	<span class="absolute inset-y-0 left-0 flex items-center pl-[16px]">
		<button type="submit" class="focus:outline-none focus:shadow-outline">
			<svg
				width="20"
				height="20"
				viewBox="0 0 20 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M14.1667 14.1667L17.5 17.5"
					stroke="#565B61"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333C11.0108 15.8333 12.6801 15.0846 13.887 13.8744C15.0897 12.6685 15.8333 11.0044 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667Z"
					stroke="#565B61"
					stroke-width="1.4"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</button>
	</span>
	<input
		type="search"
		name="q"
		bind:value={search}
		class="py-[10px] text-[16px] leading-[24px] font-normal rounded-md pl-[48px] pr-12 focus:outline-none w-full focus:bg-white focus:text-gray-900"
		on:click|preventDefault|stopPropagation={openList}
		placeholder="Search for your industry"
		autocomplete="off"
	/>
	<span class="absolute inset-y-0 right-[22px] text-[#202123] flex items-center pl-2">
		<button
			type="submit"
			on:click|preventDefault|stopPropagation={toggleList}
			class="focus:outline-none focus:shadow-outline"
		>
			<svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M1 1L7 7L13 1"
					stroke="currentColor"
					stroke-width="1.4"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</button>
	</span>

	{#if popupShown}
		<div
			class="shadow-[-10px_4px_24px_0px_rgba(0,0,0,0.08)] px-2 py-1 rounded overflow-y-auto max-h-[258px] absolute z-50 bg-white w-full mt-2 text-themed-black"
		>
			{#each items as i}
				<button
					on:click|preventDefault|stopPropagation={() => onSelect(i)}
					class="w-full text-left hover:bg-[#F9FAFA] text-[#202123] px-3 py-[10px] mb-[2px] rounded cursor-pointer text-[14px]/[20px]"
					class:font-bold={$selected === i}
				>
					{i}
				</button>
			{/each}
			{#if items.length === 0}
				<div class="grid grid-rows-2 grid-flow-col gap-4 p-[30px]">
					<svg
						style="margin-left: auto; margin-right: auto;"
						width="48"
						height="48"
						viewBox="0 0 48 48"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<circle cx="24" cy="24" r="24" fill="#F4F4F5" />
						<g clip-path="url(#clip0_2_189)">
							<path
								d="M21.6667 15.7692C17.1727 16.4538 14.0846 20.6519 14.7692 25.1459C15.4538 29.6399 19.6519 32.728 24.1459 32.0434C28.1683 31.4306 31.1394 27.9708 31.1373 23.902"
								stroke="#8D939A"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M25.1667 15.6667H31.7549"
								stroke="#8D939A"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M29.5588 19.1667H25.1667"
								stroke="#8D939A"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M27.3628 22.6667H25.1667"
								stroke="#8D939A"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M33.3333 34.3333L28.725 29.725"
								stroke="#8D939A"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</g>
						<defs>
							<clipPath id="clip0_2_189">
								<rect width="28" height="28" fill="white" transform="translate(10 10)" />
							</clipPath>
						</defs>
					</svg>
					<div class="text-center">
						Oops... We can’t find similar service in our list. <br />
						Try another keyword to search
					</div>
				</div>
			{/if}
		</div>
	{/if}
</div>
