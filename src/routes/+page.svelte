<script lang="ts">
    import { all } from '$lib/app/repositories/projects';
    import Project from '$lib/app/components/Project.svelte';
</script>

<svelte:head>
    <title>Rich Perez - Web Developer</title>
</svelte:head>

<div class="flex flex-col gap-20">
  <section class="mx-auto max-w-2xl font-mono text-xl md:text-2xl text-center">
    <img class="rounded-full mx-auto my-6 md:my-10" src="/img/rich.jpg" alt="rich perez" width="100" height="100" />
    <p>
      👋🏽 My name is <a href="/about">Rich Perez</a> and welcome to my space on the internet. I'm a dad, <a href="/wrestling">wrestling</a> fan and I enjoy creating web products for clients and my own side projects.
    </p>
  </section>
  <section class="flex flex-col gap-4 bg-slate-900 p-4 rounded-sm justify-center items-center">
    <div class="flex flex-col md:flex-row items-center gap-4">
      <h2 class="text-2xl font-bold font-mono">My Thoughts</h2>
      <nav class="flex flex-col gap-2 items-start text-left">
        <a href="/thoughts/on-working-from-home">On Working From Home</a>
        <a href="/thoughts/on-sveltekit">On SvelteKit</a>
      </nav>
    </div>
    <div class="flex flex-col md:flex-row items-center gap-4">
      <h3 class="text-2xl font-bold font-mono">
        Upcoming Thoughts
        <span class="block text-xs font-normal text-center text-slate-500">(still processing)</span>
      </h3>
      <div class="flex flex-col items-start text-left">
        <span>On Writing a Task</span>
        <span>On Semantic HTML Tags</span>
        <span>On Breaking Down a Task</span>
        <span>On How I Remote Work</span>
      </div>
    </div>
  </section>
  <section class="flex flex-col gap-4">
    <h2 class="text-3xl font-bold font-mono text-center border-b border-slate-500 pb-4">My Work</h2>
    <div class="flex flex-col gap-10">
      {#each all() as project (project.title)}
          <Project project={project} />
      {/each}
    </div>
  </section>
</div>
