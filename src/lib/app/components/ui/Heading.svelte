<script lang="ts">
    interface Props {
        label: string;
    }

    let { label }: Props = $props();
</script>

<h3 class="text-2xl font-bold">{label}</h3>