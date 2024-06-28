<script lang="ts">
    import { featured } from '$lib/repositories/projects';
    import Project from '$lib/components/Project.svelte';
</script>

<svelte:head>
    <title>Rich Perez - Web Developer</title>
</svelte:head>

<div class="flex flex-col gap-20">
  <section class="mx-auto max-w-2xl font-mono text-xl md:text-2xl text-center">
    <img class="rounded-full mx-auto my-10" src="/img/rich.jpg" alt="picture of rich perez" width="100" height="100" />
    <p>
      Hello 👋🏽 my name is <strong class="font-black text-white">Rich Perez</strong> and I am a Full-Stack Developer. I have built websites, CMS, and REST APIs for large and small companies.
    </p>
  </section>
  <section class="flex flex-col gap-4">
    <h2 class="text-3xl font-bold font-mono text-center border-b border-slate-500 pb-4">What I&apos;ve worked on</h2>
    <ol class="grid grid-cols-1 md:grid-cols-4 gap-1">
      {#each featured() as project (project.title)}
        <li>
          <Project project={project} />
        </li>
      {/each}
    </ol>
    <div class="flex justify-center">
      <a class="btn btn-error text-white" href="/projects">
        View More Projects <i class="las la-chevron-right"></i>
      </a>
    </div>
  </section>
</div>
