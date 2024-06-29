<script lang="ts">
    import { all } from '$lib/repositories/projects';
    import Project from '$lib/components/Project.svelte';
</script>

<svelte:head>
    <title>Rich Perez - Web Developer</title>
</svelte:head>

<div class="flex flex-col gap-20">
  <section class="mx-auto max-w-2xl font-mono text-xl md:text-2xl text-center">
    <img class="rounded-full mx-auto my-6 md:my-10" src="/img/rich.jpg" alt="rich perez" width="100" height="100" />
    <p>
      👋🏽 My name is <a class="font-black text-stone-200" href="/about">Rich Perez</a> and welcome to my space on the internet. I'm a dad, <a href="/wrestling">wrestling</a> fan and I enjoy creating web products for clients and my own side projects.
    </p>
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
