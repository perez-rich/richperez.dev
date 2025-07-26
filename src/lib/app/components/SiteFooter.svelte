<script lang="ts">
    import threads from "$lib/images/threads.png";
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
        <a class="py-2" href="https://www.threads.com/@imperez5" target="_blank">
            <img src={threads} alt="Rich's Threads Profile" class="w-6 h-6" />
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
