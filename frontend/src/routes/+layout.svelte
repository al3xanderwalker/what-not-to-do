<script lang="ts">
	import '../app.postcss';
	import {
		AppShell,
		AppBar,
		initializeStores,
		type ModalComponent,
		Toast,
		Modal
	} from '@skeletonlabs/skeleton';

	// Highlight JS
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';
	import PostModal from '$lib/components/PostModal.svelte';

	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	storeHighlightJs.set(hljs);
	initializeStores();
	const modalComponentRegistry: Record<string, ModalComponent> = {
		post: { ref: PostModal }
	};

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<Modal components={modalComponentRegistry} />
<Toast />
<AppShell>
	<svelte:fragment slot="header">
		<AppBar background="bg-secondary-800">
			<svelte:fragment slot="lead">
				<a href="/"><strong class="text-xl uppercase">XSS Guidance</strong></a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a class="btn btn-sm variant-ghost-surface rounded" href="/reflected"> Reflected </a>
				<a class="btn btn-sm variant-ghost-surface rounded" href="/stored"> Stored </a>
				<a class="btn btn-sm variant-ghost-surface rounded" href="/dom-based"> DOM-based </a>
				<a class="btn btn-sm variant-ghost-surface rounded" href="/forum"> Forum </a>
				<a class="btn btn-sm variant-ghost-surface rounded" href="/references"> References </a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<div class="container h-full mx-auto flex justify-center">
		<div class="space-y-2 text-center flex flex-col items-center mt-10">
			<slot />
		</div>
	</div>
</AppShell>
