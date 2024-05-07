<h2 class="h2">XSS Attacks</h2>
<div class="space-y-2 pb-4">
	<p>How they work, how to spot them and how to prevent them.</p>
</div>
<div class="card p-6 bg-secondary-800 text-left" style="max-width:800px; width:100%;">
	<div class="card-body">
		<h3 class="h3">What is XSS?</h3>
		<p>
			Cross-Site Scripting (XSS) attacks are a type of injection, in which malicious scripts are
			injected into otherwise benign and trusted websites. XSS attacks occur when an attacker uses a
			web application to send malicious code, generally in the form of a browser side script, to a
			different end user. Flaws that allow these attacks to succeed are quite widespread and occur
			anywhere a web application uses input from a user within the output it generates without
			validating or encoding it.
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
	</div>
</div>

<style lang="postcss">
</style>
