<script>
	import { selected } from '../store/selected';

	let isDisabled = true;

	selected.subscribe((data) => {
		if (data) {
			isDisabled = false;
		}
	});
</script>

<div class="pb-20 bg-white flex justify-between">
	<button
		class="bg-transparent max-h-[44px] text-[#202123] text-[14px]/[1.4] py-[12px] pl-2 pr-[12px] inline-flex items-center border border-[#ECEDEF] rounded"
	>
		<svg
			class="mr-[6px]"
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M12.5 5L7.5 10L12.5 15"
				stroke="#202123"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>

		<span>Back</span>
	</button>
	<button
		disabled={isDisabled}
		class="w-[200px] px-[40px] py-[10px] border-none rounded bg-[#4253ff] text-white disabled:bg-[#ecedef] disabled:text-[#8d939a]"
		>Continue</button
	>
</div>
