<script lang="ts">
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

<h2 class="h2">Reflected XSS</h2>
<div class="space-y-2 pb-4">
	<p>As the name suggests, reflected XSS attacks are reflected back to the user.</p>
</div>
<div class="card p-6 bg-secondary-800 text-left" style="max-width:800px; width:100%;">
	<div class="card-body">
		<h3 class="h3">How does it work?</h3>
		<p>
			Reflected XSS attacks are those where the injected script is reflected off the web server,
			such as in an error message, search result, or any other response that includes some or all of
			the input provided by the user as part of the request. The script is then executed by the
			victim's browser, which does not know that the script should not be trusted.
		</p>
		<p class="mt-4">Below is an example search bar that is vulnerable to reflected XSS:</p>
		<button on:click={loadExample} on:keypress={loadExample}>
			Try: <code class="code"> &lt;img src=1 onerror=alert(1)&gt;</code>
		</button>
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
			displayed back to the user.
		</p>
	</div>
</div>