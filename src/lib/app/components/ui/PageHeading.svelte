<script lang="ts">
    interface Props {
        label: string;
    }

    let { label }: Props = $props();
</script>

<h1 class="text-3xl font-bold font-mono text-center pb-4">
    {label}
</h1>
