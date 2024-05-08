<script lang="ts">
	import Citation from '$lib/components/Citation.svelte';
	import { onMount } from 'svelte';

	let search = '',
		displaySearch = '';

	onMount(() => {
		search = displaySearch = new URLSearchParams(window.location.search).get('search') || '';
	});

	let loadExample = () => (search = '<img src=1 onerror=alert(1)>');

	let handleSubmit = () => (window.location.href = `/reflected?search=${search}`);
</script>

<h2 class="h2">Reflected XSS</h2>
<div class="space-y-2 pb-4">
	<p>As the name suggests, reflected XSS attacks are reflected back to the user.</p>
</div>
<div class="card p-6 bg-secondary-800 text-left" style="max-width:800px; width:100%;">
	<div class="card-body">
		<h3 class="h3">How does it work?</h3>
		<p>
			These attacks involve the injected script being reflected offf the web server, such as an
			error message, search result, or other content that includes user input as part of the
			request. The victim's browser then executes the script, unaware that it should not be trusted
			<Citation id={3} />.
		</p>
		<p class="mt-4">Below is an example search bar that is vulnerable to reflected XSS:</p>
		<button on:click={loadExample} on:keypress={loadExample}>
			Try: <code class="code"> &lt;img src=1 onerror=alert(1)&gt;</code>
		</button>
		or some from existing lists such as PayloadAllTheThings
		<Citation id={4} />.
		<div class="flex items-center mt-2">
			<form on:submit={handleSubmit} style="width:100%;" action="/reflected">
				<input
					class="input rounded w-100"
					type="text"
					placeholder="Search..."
					bind:value={search}
				/>
			</form>
			<button class="btn bg-secondary-700 rounded ml-2" on:click={handleSubmit}>Search</button>
		</div>
		<div>
			<!-- This is using @html to make it vulnerable to XSS -->
			You searched for: {@html displaySearch} 
		</div>

		<h3 class="h3 mt-2">How can it be spotted?</h3>
		<p>
			Reflected XSS attacks can be spotted by looking for user input that is reflected back to the
			user without being sanitized. This can be in the form of a search bar, a URL parameter, or any
			other input field that is displayed back to the user. In this case, the search bar text is not
			being sanitized before being displayed back to the user.
		</p>
		<h3 class="h3 mt-2">How can it be prevented?</h3>
		<p>
			To prevent reflected XSS attacks, user input should be sanitized before being displayed back
			to the user. This can be done by encoding the input, which will prevent the browser from
			executing the script. In this case, the search bar text should be encoded before being
			displayed back to the users
			<Citation id={5} />.
		</p>
	</div>
</div>
