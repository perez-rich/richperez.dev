<script>
	import PageHeading from "$lib/app/components/ui/PageHeading.svelte";
</script>

<svelte:head>
	<title>Colophon - Rich Perez - Web Developer</title>
</svelte:head>

<section class="mx-auto max-w-2xl font-mono text-xl md:text-2xl text-center py-10">
	<PageHeading label="Colophon" />
	<p>Let's talk about all the great details of how this amazing website is built and the technology behind it.</p>
</section>

<section class="mx-auto max-w-2xl flex flex-col gap-2">
	<h2 class="text-2xl font-bold font-mono">Technologies & Frameworks</h2>
	<p>
		This website is built on <a href="https://kit.svelte.dev" target="_blank">SvelteKit</a> using
		<a href="https://www.typescriptlang.org" target="_blank">TypeScript</a>,
		<a href="https://tailwindcss.com" target="_blank">TailwindCSS</a>,
		<a href="https://daisyui.com" target="_blank">DaisyUI</a>
		and bundled all together with <a href="https://vitejs.dev" target="_blank">Vite</a>. I chose this stack because
		I really enjoy all of these libraries. They are not only super productive for me but also follow web standards
		very well.
	</p>
</section>

<section class="mx-auto max-w-2xl flex flex-col gap-2 mt-10">
	<h2 class="text-2xl font-bold font-mono">Web Hosting</h2>
	<p>
		I'm hosting this website on <a href="https://pages.cloudflare.com" target="_blank">Cloudflare Pages</a>. Why did
		I chose Cloudflare over Vercel? Well it's an easy setup, free and comes with a ton of features built into my
		already existing Cloudflare account. Once I realized this it was no brainer.
	</p>
</section>

<section class="mx-auto max-w-2xl flex flex-col gap-2 mt-10">
	<h2 class="text-2xl font-bold font-mono">Code, Code & Code?</h2>
	<p>
		If you're interested to see all the real behind the scenes magic you can go to this site's <a
			href="https://github.com/imperez/"
			target="_blank">Github repository</a
		>. I make all of the code public for anyone to read and maybe learn..
	</p>
</section>
