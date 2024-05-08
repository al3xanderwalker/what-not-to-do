<script>
	import Citation from '$lib/components/Citation.svelte';
</script>

<h2 class="h2">DOM-based XSS</h2>
<div class="space-y-2 pb-4">
	<p>This attack involves injecting the payload into the DOM</p>
</div>
<div class="card p-6 bg-secondary-800 text-left" style="max-width:800px; width:100%;">
	<div class="card-body">
		<h3 class="h3">How does it work?</h3>
		<p>
			DOM-based XSS attacks are those where the injected script is stored in the DOM, such as in a
			URL parameter, a cookie, or any other input that is processed by the client-side script. The
			script is then executed by the victim's browser, which does not know that the script should
			not be trusted
			<Citation id={8} />.
		</p>
		<h3 class="h3 mt-2">How can it be spotted?</h3>
		<p>
			DOM-based XSS attacks can be spotted by looking for user input that is processed by the
			client-side script without being sanitized. This can be in the form of a URL parameter, a
			cookie, or any other input that is processed by the client-side script.
		</p>
		<h3 class="h3 mt-2">How can it be prevented?</h3>
		<p>
			DOM-based XSS attacks can be prevented by sanitizing user input before processing it in the
			client-side script. This can be done by encoding the input or by validating the input against
			a whitelist of allowed characters, this must be done on the client side to prevent the user
			bypassing the server side validation.
		</p>
	</div>
</div>
