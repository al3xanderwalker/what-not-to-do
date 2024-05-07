<script lang="ts">
	export const ssr = false;
	import { onMount } from 'svelte';

	let search = '';
	let displaySearch = '';

	onMount(() => {
		const searchParams = new URLSearchParams(window.location.search);
		search = searchParams.get('search') || '';
		displaySearch = search;
	});

	function loadExample() {
		search = '<img src=1 onerror=alert(1)>';
	}

	function handleSubmit(e: Event) {
		window.location.href = `/reflected?search=${search}`;
	}
</script>

<h2 class="h2">Stored XSS</h2>
<div class="space-y-2 pb-4">
	<p>This attack involves storing the payload on the target server.</p>
</div>
<div class="card p-6 bg-secondary-800 text-left" style="max-width:800px; width:100%;">
	<div class="card-body">
		<h3 class="h3">How does it work?</h3>
		<p>
			Stored XSS attacks are those where the injected script is stored on the target server, such as
			in a comment, forum post, or any other user input field that is stored on the server and
			displayed back to the user. The script is then executed by the victim's browser, which does
			not know that the script should not be trusted.
		</p>
		<p class="mt-4">An example forum is available to demonstrate this concept here:</p>
		<a class="btn btn-sm bg-secondary-700 rounded" href="/forum">Forum</a>

		<h3 class="h3 mt-2">How can it be spotted?</h3>
		<p>
			Stored XSS attacks can be spotted by looking for user input that is stored on the server and
			displayed back to the user without being sanitized. This can be in the form of a comment,
			forum post, or any other user input field that is stored on the server and displayed back to
			the user.
		</p>
		<h3 class="h3 mt-2">How can it be prevented?</h3>
		<p>
			Stored XSS attacks can be prevented by sanitizing user input before storing it on the server
			and displaying it back to the user. This can be done by encoding the input or by validating
			the input against a whitelist of allowed characters, this must be done on the server side to
			prevent the user bypassing the client side validation.
		</p>
	</div>
</div>
