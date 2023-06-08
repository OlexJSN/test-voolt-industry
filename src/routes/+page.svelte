<script>
	import { onMount } from 'svelte';
	import Footer from '../components/footer.svelte';
	import Header from '../components/header.svelte';
	import Search from '../components/search.svelte';
	import Tags from '../components/tags.svelte';
	import { industry } from '../store/industry';

	onMount(async () => {
		const res = await fetch(`https://dev-api.voolt.com/api/flowdata/industry`);
		industry.set(await res.json());
	});
</script>

<div class="min-h-screen grid lg:grid-cols-2 grid-cols-1">
	<div class="bg-cover bg-no-repeat" style="background-image: url(../left-side.webp)" />
	<div class="lg:col-start-2 bg-white col-start-1">
		<div class="grid grid-rows-3 h-screen grid-flow-col gap-4 container mx-auto px-[100px]">
			<div class="col-span-3 row-span-2">
				<Header />
				<h1 class="mb-[40px] font-semibold text-themed-black text-[32px] leading-[42px] max-w-[420px]">
					What type of business is the website for?
				</h1>
				<Search />
				<Tags />
			</div>
			<div class="col-span-3 self-end">
				<Footer />
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
