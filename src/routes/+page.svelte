<script lang="ts">
    import { all } from "$lib/app/repositories/projects";
    import Project from "$lib/app/components/Project.svelte";
</script>

<svelte:head>
    <title>Rich Perez - Web Developer</title>
</svelte:head>

<div class="flex flex-col gap-20">
    <section
        class="mx-auto max-w-2xl font-mono text-xl md:text-2xl text-center"
    >
        <img
            class="rounded-full mx-auto my-6 md:my-10"
            src="/img/rich.jpg"
            alt="rich perez"
            width="150"
            height="150"
        />
        <p>
            👋🏽 My name is <a href="/about">Rich Perez</a> and welcome to my
            space on the internet. I'm a dad,
            <a href="/wrestling">wrestling</a> fan and I enjoy creating web products
            for people to use.
        </p>
    </section>
    <section class="flex flex-col gap-4">
        <h2
            class="text-3xl font-bold font-mono text-center border-b border-slate-500 pb-4"
        >
            My Work
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-2">
            {#each all() as project (project.title)}
                <Project {project} />
            {/each}
        </div>
    </section>
</div>
