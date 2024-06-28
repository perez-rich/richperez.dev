<script>
    import "../app.css";
    import SiteHeader from "$lib/components/SiteHeader.svelte";
    import SiteFooter from "$lib/components/SiteFooter.svelte";
</script>

<main class="px-4 pb-10">
    <SiteHeader></SiteHeader>
    <slot></slot>
    <SiteFooter></SiteFooter>
</main>
