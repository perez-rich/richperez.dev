<script lang="ts">
    import Badge from './ui/Badge.svelte';
    import Heading from './ui/Heading.svelte';

    export let project: ProjectItem;
</script>

<Heading label={project.title} />
<a href={project.url} target="_blank">
    <img class="aspect-auto rounded-t-sm" src={project.image} alt={`Screenshot of ${project.title} project`} width="400" height="150" />
</a>
<div class="flex flex-col gap-2 bg-black p-2 rounded-b-sm">
    <div class="flex flex-col gap-1">
        <strong class="text-sm">Skills</strong>
        <div class="flex flex-wrap gap-2">
            {#each project.skills as skill (skill)}
                <Badge label={skill} />
            {/each}
        </div>
    </div>
    <div class="flex flex-col gap-1">
        <strong class="text-sm">Areas</strong>
        <div class="flex flex-wrap gap-2">
            {#each project.areas as area (area)}
                <Badge label={area} />
            {/each}
        </div>
    </div>
    <a class="btn btn-link text-white" target="_blank" href={project.url}>View Project</a>
</div>
