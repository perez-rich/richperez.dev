<script>
	import PageHeading from "$lib/app/components/ui/PageHeading.svelte";
</script>

<svelte:head>
	<title>About - Rich Perez - Web Developer</title>
</svelte:head>

<section class="mx-auto max-w-2xl font-mono text-xl md:text-2xl text-center py-10">
	<PageHeading label="About" />
	<p>
		My name is <strong class="font-black text-white">Rich Perez</strong> and I am a Full-Stack Developer. I have built
		websites, CMS, and REST APIs for large and small companies.
	</p>
</section>

<section class="mx-auto max-w-2xl flex flex-col gap-2">
	<h2 class="text-2xl font-bold font-mono">Connect with Me</h2>
	<ul class="px-4 list-disc flex flex-col gap-2">
		<li>Follow me on <a href="https://bsky.app/profile/imperez.com" target="_blank">Bluesky</a>.</li>
		<li>Network with me on <a href="https://www.linkedin.com/in/imperez/" target="_blank">LinkedIn</a></li>
		<li>
			Listen to music with me on <a href="https://music.apple.com/profile/imperez" target="_blank">Apple Music</a>
		</li>
	</ul>
</section>

<section class="mx-auto max-w-2xl flex flex-col gap-2 mt-10">
	<h2 class="text-2xl font-bold font-mono">Newsletters I Read</h2>
	<ul class="px-4 list-disc flex flex-col gap-2">
		<li class="list-none uppercase font-bold">Backend</li>
		<li><a href="https://www.phpweekly.com" target="_blank">PHP Weekly</a></li>
		<li><a href="https://laravel-news.com" target="_blank">Laravel News</a></li>
	</ul>
	<ul class="px-4 list-disc flex flex-col gap-2 mt-4">
		<li class="list-none uppercase font-bold">Frontend</li>
		<li><a href="https://nodeweekly.com" target="_blank">Node Weekly</a></li>
		<li><a href="https://frontendfoc.us" target="_blank">Frontend Focus</a></li>
		<li><a href="https://css-weekly.com" target="_blank">CSS Weekly</a></li>
	</ul>
	<ul class="px-4 list-disc flex flex-col gap-2 mt-4">
		<li class="list-none uppercase font-bold">Accessibility</li>
		<li><a href="https://a11yweekly.com" target="_blank">A11y Weekly</a></li>
	</ul>
</section>
