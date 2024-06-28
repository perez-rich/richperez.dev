<script lang="ts">
    import LinkedInButton from './buttons/LinkedInButton.svelte';
    import ResumeButton from './buttons/ResumeButton.svelte';
</script>

<header class="flex flex-col md:flex-row items-center md:justify-between px-4 py-4 md:py-0 border-b border-slate-500">
  <a href="/">
    <img src="/img/site-logo.png" alt="imperez logo" width="300" height="86" />
  </a>
  <nav class="flex gap-2 justify-center">
    <a class="btn btn-ghost -mt-2 md:my-2" href="/projects">Projects</a>
    <ResumeButton />
    <LinkedInButton />
  </nav>
</header>