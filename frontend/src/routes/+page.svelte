<script>
	import Citation from '$lib/components/Citation.svelte';
</script>

<h2 class="h2">XSS Attacks</h2>
<div class="space-y-2 pb-4">
	<p>How they work, how to spot them and how to prevent them.</p>
</div>
<div class="card p-6 bg-secondary-800 text-left" style="max-width:800px; width:100%;">
	<div class="card-body">
		<h3 class="h3">What is XSS?</h3>
		<p>
			XSS, or Cross-Site Scripting is a vulnerability that allows attackers to inject malicous
			scripts into web pages that are viewed by other users. These attacks occur when an attacker
			sends malicous code in the form of a browser script to another user, through a web
			application. The flaws that enable these atttacks are generally widespread and can occur
			anywhere a users input is used to generate output which is not properly validated or encoded
			<Citation id={1} />.
		</p>
		<p class="mt-4">There are three main types of XSS attacks, click on one to learn more:</p>
		<ul class="flex mt-2 gap-2">
			<li>
				<a class="btn btn bg-secondary-700 rounded" href="/reflected"> Reflected </a>
			</li>
			<li>
				<a class="btn btn bg-secondary-700 rounded" href="/stored"> Stored </a>
			</li>
			<li>
				<a class="btn btn bg-secondary-700 rounded" href="/dom-based"> DOM-based </a>
			</li>
		</ul>
		<h3 class="h3 mt-4">What are the impacts?</h3>
		<p>
			An attacker can use XSS to send a malicious script to an unsuspecting user. The end user's
			browser has no way to know that the script should not be trusted, and will execute the script.
			Because it thinks the script came from a trusted source, the malicious script can access any
			cookies, session tokens, or other sensitive information retained by the browser and used with
			that site. These scripts can even rewrite the content of the HTML page
			<Citation id={2} />.
		</p>
	</div>
</div>

<style lang="postcss">
</style>
