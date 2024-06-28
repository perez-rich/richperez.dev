<script>
    import "../app.css";
    import SiteHeader from "$lib/components/SiteHeader.svelte";
</script>

<svelte:head>
    <title>Rich Perez - Web Developer</title>
</svelte:head>

<main class="px-4 pb-10">
    <SiteHeader></SiteHeader>
    <slot></slot>
</main>