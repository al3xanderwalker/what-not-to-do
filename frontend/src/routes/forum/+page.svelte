<script lang="ts">
	import { posts } from '$lib/stores/stores';
	import { getModalStore } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';

	onMount(() => {
		fetchPosts();
	});

	let modalStore = getModalStore();

	async function fetchPosts() {
		var data = await fetch('/api').then((res) => res.json());
		posts.set(data);
	}

	function createPost() {
		modalStore.trigger({
			type: 'component',
			component: 'post'
		});
	}

	async function deletePost(id: number) {
		await fetch(`/api/${id}`, {
			method: 'DELETE'
		});
		fetchPosts();
	}
</script>

<h2 class="h2">Example Forum</h2>
<div class="space-y-2 pb-4">
	<p>This forum is vulnerable to stored XSS attacks.</p>
</div>
<div class="card p-6 bg-secondary-800 text-left" style="max-width:800px; width:90vw;">
	<div class="card-body">
		<div class="flex justify-between">
			<div class="h3">Posts</div>
			<div class="flex justify-end">
				<button class="btn bg-secondary-700 rounded" on:click={createPost}>New Post</button>
			</div>
		</div>

		{#each $posts as post}
			<div class="card mt-4 p-4 bg-secondary-700 rounded">
				<div class="flex justify-between">
					<div class="h4">{@html post.title}</div>
					<div class="text-xs">{new Date(post.date).toDateString()}</div>
				</div>
				<div class="mt-2">{@html post.content}</div>
				<div class="flex justify-end">
					<button class="btn btn-sm bg-error-700 rounded mt-2" on:click={() => deletePost(post.id)}
						>Delete</button
					>
				</div>
			</div>
		{/each}
	</div>
</div>
