<script>
	import PageHeading from "$lib/app/components/ui/PageHeading.svelte";
	import GithubPreview from "$lib/app/components/ui/GithubPreview.svelte";
</script>

<svelte:head>
	<title>On SvelteKit - Thoughts - Rich Perez - Web Developer</title>
</svelte:head>

<section class="mx-auto max-w-2xl font-mono text-xl md:text-2xl text-center py-10">
	<PageHeading label="On SvelteKit"/>
	<p>After many SvelteKit projects I've come up with a proper directory structure that works for me.</p>
</section>

<section class="mx-auto max-w-2xl flex flex-col gap-4 items-start">
	<p>This is a template repository for any future Sveltekit projects that I work on. After working on past projects I've come to terms with specific components and directorie that help me organize my code.</p>
	
	<GithubPreview repo="imperez/sveltekit-template" />
	<p>Here are the high level details.</p>
	<ul class="list-disc p-4 flex flex-col gap-2">
		<li><strong>TypeScript included!</strong> Until Javascript has it's own types feature this is a must have.</li>
		<li>The <code>lib</code> folder has most of project files. Let's talk about a few keys details that are important to me.</li>
	  	<li>The <code>app</code> directory contains most of my project logic. Under this directory I like to keep UI components, enums, services modules, Svelte stores and any action modules.</li>
	  	<li>Next up I like to have directories for various assets such as <code>css</code> and <code>images</code>.</li>
	  	<li>Since I'm using TypeScript I always like to organize all of my type definitions in a <code>types</code> directory.</li>
	  	<li>Finally, for helper methods I need across my codebase placing those in a <code>utils</code> directory helps a ton.</li>
		<li>I always include <code>.env.*</code> files so I can keep track of any important configuration details.</li>
	</ul>
	
	<p>That's all the details so far! I like to keep this simple and only add to here what I feel works across multiple projects.</p>
</section>