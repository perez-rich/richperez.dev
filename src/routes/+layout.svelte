<script>
    import "$lib/css/app.css";
    import SiteHeader from "$lib/app/components/SiteHeader.svelte";
    import SiteFooter from "$lib/app/components/SiteFooter.svelte";
</script>

<main class="px-4 pb-10">
    <SiteHeader></SiteHeader>
    <slot></slot>
    <SiteFooter></SiteFooter>
</main>
