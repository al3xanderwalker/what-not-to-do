<script lang="ts">
	import { posts } from '$lib/stores/stores';
	import { getModalStore, getToastStore, type ModalSettings } from '@skeletonlabs/skeleton';

	const modalStore = getModalStore();
	let toastStore = getToastStore();
	let title = '';
	let content = '';

	async function createPost() {
		let res = await fetch('/api', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ title, content })
		});
		let data = await res.json();
		toastStore.trigger({
			message: 'Your post has been created successfully'
		});
		modalStore.close();
		posts.set([...$posts, data]);
	}
</script>

{#if $modalStore[0]}
	<div
		class="modal block overflow-y-auto w-modal h-auto p-4 space-y-4 rounded-container-token shadow-xl deleteBg"
		style="background: #492850;"
	>
		<div class="title">Create Post</div>
		<div class="info">Create a new post for the forum</div>
		<input type="text" class="input rounded" placeholder="Title" bind:value={title} />
		<textarea class="input rounded" placeholder="Content" bind:value={content}></textarea>

		<div class="flex justify-end space-x-4">
			<button class="btn saveBtn rounded" on:click={createPost}> Save </button>
			<button
				class="btn bg-secondary-700 rounded"
				on:click={() => {
					modalStore.close();
				}}
			>
				Cancel
			</button>
		</div>
	</div>
{/if}

<style>
	:global(.createdBg) {
		background-color: #0d0e14;
	}
	.title {
		font-size: 2rem;
		line-height: 2rem;
	}
	.info {
		margin-top: 4px !important;
		color: rgb(194, 208, 234);
		font-size: 0.9rem;
		line-height: 0.9rem;
	}
	.saveBtn {
		background-color: #443dc6;
	}
</style>
