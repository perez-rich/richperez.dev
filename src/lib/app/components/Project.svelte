<script lang="ts">
    import Badge from './ui/Badge.svelte';
    import Heading from './ui/Heading.svelte';

    interface Props {
        project: ProjectItem;
    }

    let { project }: Props = $props();
</script>

<div class="flex flex-col md:flex-row justify-start gap-2 max-w-6xl mx-auto">
    <div class="flex flex-col gap-2">
        <Heading label={project.title} />
        <a href={project.url} target="_blank">
            <img class="aspect-auto rounded-sm shadow-xl border-1 border-stone-100" src={project.image} alt={`Screenshot of ${project.title} project`} width="400" height="150" />
        </a>
        <div class="flex justify-between items-start">
            <Badge label={project.type}></Badge>
            <a class="px-2 py-1 uppercase text-xs text-white" target="_blank" href={project.url}>View Project</a>
        </div>
    </div>
    <div class="flex flex-col md:w-1/2 gap-2 md:p-2">
        <div class="flex flex-col gap-1 mb-4">
            <strong>Overview</strong>
            <p>{project.description}</p>
        </div>
        <div class="flex flex-col gap-1">
            <strong>Skills</strong>
            <div class="flex flex-wrap gap-2">
                {#each project.skills as skill (skill)}
                    <span class="uppercase text-sm"><span class="text-stone-400">#</span>{skill}</span>
                {/each}
            </div>
        </div>
        <div class="flex flex-col gap-1">
            <strong>Areas</strong>
            <div class="flex flex-wrap gap-2">
                {#each project.areas as area (area)}
                    <span class="uppercase text-sm"><span class="text-stone-400">#</span>{area}</span>
                {/each}
            </div>
        </div>
    </div>
</div>