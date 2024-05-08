<script lang="ts">
	export let id: number;
	export let title: string;
	export let route: string = '';
	export let url: string;
	export let accessed: string;

	$: href = `/${route}${route == '' ? '' : '/'}#citation-${id}`;
</script>

<a id="ref-{id}" {href} class="text-primary-500">[{id}]</a>
{title}
<br />
<a href={url} class="text-primary-500">{url}</a>
(Accessed {accessed}).
<br />
