<script lang="ts">
    interface Props {
        label: string;
    }

    let { label }: Props = $props();
</script>

<span class="rounded-sm uppercase bg-slate-300 text-black font-bold text-xs px-2 py-1">
    {label}
</span>
