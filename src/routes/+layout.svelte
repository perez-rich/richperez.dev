<script lang="ts">
    import "$lib/css/app.css";
    import SiteHeader from "$lib/app/components/SiteHeader.svelte";
    import SiteFooter from "$lib/app/components/SiteFooter.svelte";
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
