<script lang="ts">
    import bluesky from "$lib/images/bluesky-logo.png";
    import github from "$lib/images/github-mark-white.png";
    import apple from "$lib/images/apple-music.png";
</script>

<footer
    class="flex flex-col md:flex-row md:justify-between gap-2 border-t border-t-stone-700 p-4 mt-10"
>
    <div class="py-2">
        <p>
            Made by Rich with <a href="https://kit.svelte.dev" target="_blank"
                >SvelteKit</a
            >
            &
            <a href="https://daisyui.com" target="_blank">DaisyUI</a>.
        </p>
    </div>
    <nav class="flex gap-4">
        <a href="https://bsky.app/profile/richperez.dev" target="_blank">
            <img src={bluesky} alt="Rich's Bluesky Profile" class="w-10 h-10" />
        </a>
        <a class="py-2" href="https://github.com/perez-rich" target="_blank">
            <img src={github} alt="Rich's Github Profile" class="w-6 h-6" />
        </a>
        <a
            class="py-2"
            href="https://music.apple.com/profile/imperez"
            target="_blank"
        >
            <img src={apple} alt="Rich's Apple Music Profile" class="w-6 h-6" />
        </a>
    </nav>
</footer>
