<script lang="ts">
    import Badge from "./ui/Badge.svelte";
    import Heading from "./ui/Heading.svelte";

    interface Props {
        project: ProjectItem;
    }

    let { project }: Props = $props();
</script>

<div class="flex flex-col justify-start gap-2 max-w-6xl mx-auto">
    <div class="flex flex-col gap-2 text-center">
        <a href={project.url} target="_blank">
            <img
                class="aspect-auto rounded-sm shadow-xl border-1 border-stone-100"
                src={project.image}
                alt={`Screenshot of ${project.title} project`}
                width="400"
                height="150"
            />
        </a>
        <Heading label={project.title} />
    </div>
</div>
