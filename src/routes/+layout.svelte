<script lang="ts">
    import SiteHeader from "$lib/app/components/SiteHeader.svelte";
    import SiteFooter from "$lib/app/components/SiteFooter.svelte";
    import "$lib/css/app.css";

    interface Props {
        children?: import('svelte').Snippet;
    }

    let { children }: Props = $props();
</script>

<main class="px-4 pb-10">
    <SiteHeader></SiteHeader>
    {@render children?.()}
    <SiteFooter></SiteFooter>
</main>
