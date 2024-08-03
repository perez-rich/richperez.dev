<script lang="ts">
	import GithubLogo from "$lib/images/github-logo.png";
	import GithubMark from "$lib/images/github-mark.png";

	export let repo: string;
	
	const url = `https://www.github.com/${repo}`;
</script>
<a
	class="flex gap-4 p-4 bg-white text-black shadow-lg border-stone-300 border rounded-lg mx-auto items-stretch items-center"
	href={url}
	target="_blank"
>
	<img src={GithubLogo} alt="The Github Logo" height="41" width="100" />
	<span class="flex items-center rounded-r-lg -my-4 -mr-4 p-4 gap-2 bg-stone-200 border-l-stone-300 border">
		<img src={GithubMark} alt="The Github Mark" width="20" />
		{repo}
	</span>
</a>
