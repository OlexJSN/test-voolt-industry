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
		class="bg-transparent text-gray-700 font-semibold py-2 px-4 inline-flex items-center border border-gray-200 rounded"
	>
		<svg
			class="  mr-2"
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
		class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 disabled:bg-gray-100 disabled:text-gray-400 disabled:border-0 rounded w-[200px]"
		>Continue</button
	>
</div>
