<script>
    import Project from "$lib/components/Project.svelte";
    import PageHeading from "$lib/components/ui/PageHeading.svelte";
    import { all } from "$lib/repositories/projects";
</script>

<svelte:head>
    <title>Rich Perez - Projects - Web Developer</title>
</svelte:head>

<section class="flex flex-col gap-4">
    <div class="py-10">
      <PageHeading label="Projects" />
    </div>
    <ol class="grid grid-cols-1 md:grid-cols-4 gap-4">
      {#each all() as project (project.title)}
        <li>
          <Project project={project} />
        </li>
      {/each}
    </ol>
</section>
