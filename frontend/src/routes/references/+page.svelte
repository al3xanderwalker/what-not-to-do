<script>
	import Reference from '$lib/components/Reference.svelte';

	let references = [
		{
			title: "K. Sitnick, 'Cross Site Scripting (XSS) | OWASP Foundation', Nov. 12, 2019.",
			url: 'https://owasp.org/www-community/attacks/xss/'
		},
		{
			title: "A. Dizdar, 'What is XSS? Impact, Types, and Prevention', Apr. 04, 2022.",
			url: 'https://brightsec.com/blog/xss/#xss-impact'
		},
		{
			title:
				'What is reflected XSS (cross-site scripting)? Tutorial & Examples | Web Security Academy.',
			url: 'https://portswigger.net/web-security/cross-site-scripting/reflected',
			route: 'reflected'
		},
		{
			title: "Swissky, 'Payloads All The Things', Oct 18, 2016.",
			url: 'https://  github.com/swisskyrepo/PayloadsAllTheThings',
			route: 'reflected'
		},
		{
			title: "O. Moradov, 'Reflected XSS: Examples, Testing, and Prevention', Mar. 16, 2022.",
			url: 'https://brightsec.com/blog/reflected-xss/#sanitizing-inputs',
			route: 'reflected'
		},
		{
			title: 'What is XSS | Stored Cross Site Scripting Example | Imperva',
			url: 'https://www.imperva.com/learn/application-security/cross-site-scripting-xss-attacks/',
			route: 'stored'
		},
		{
			title: 'How to Prevent Cross-Site Scripting (XSS) in JavaScript',
			url: 'https://www.telerik.com/blogs/how-to-prevent-cross-site-scripting-xss-javascript',
			route: 'stored'
		},
		{
			title: 'DOM Based XSS | OWASP Foundation',
			url: 'https://owasp.org/www-community/attacks/DOM_Based_XSS',
			route: 'dom-based'
		}
	];
</script>

<h2 class="h2">References</h2>
<div class="space-y-2 pb-4">
	<p>References used when creating this project.</p>
</div>
<div class="card p-6 bg-secondary-800 text-left" style="max-width:800px; width:100vw;">
	<div class="card-body">
		<p>
			{#each references as reference, i}
				<Reference
					id={i + 1}
					title={reference.title}
					url={reference.url}
					route={reference.route}
					accessed=" May 8, 2024"
				/>
			{/each}
		</p>
	</div>
</div>
