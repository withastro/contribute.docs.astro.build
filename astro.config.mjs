import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator';

// In CI, only the `main` branch is production. Any other build (a PR, or a
// push to some other branch) is deployed as a Cloudflare Worker preview at
// "<branch>.previews.contribute.docs.astro.build" (see .github/workflows/deploy.yml).
const branch = process.env.GITHUB_HEAD_REF || process.env.GITHUB_REF_NAME;
const isMain = branch === 'main';

const site = !isMain && branch
	? `https://${branch}.previews.contribute.docs.astro.build/`
	: 'https://contribute.docs.astro.build/';

// https://astro.build/config
export default defineConfig({
	site,
	integrations: [
		starlight({
			plugins: [starlightLinksValidator()],
			title: 'Astro Docs Docs (AD²)',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/contribute.docs.astro.build' },
			],
			editLink: {
				baseUrl: 'https://github.com/withastro/contribute.docs.astro.build/edit/main/'
			},
			customCss: ["./src/styles/theme.css"],
			routeMiddleware: './src/routeData.ts',
			logo: {
				dark: './src/assets/logo-dark.svg',
				light: './src/assets/logo-light.svg',
				replacesTitle: true,
			},
			  head: [
			    {
			      tag: 'script',
			      attrs: {
				src: 'https://cdn.usefathom.com/script.js',
				'data-site': 'EZBHTSIG',
				defer: true,
			       },
			    },
			  ],
			sidebar: [
				{ label: 'Welcome', link: '/welcome/' },
				{
					label: "About Doc'ing",
					items: [
						{ label: 'Why we write docs', link: '/about-docs/why-we-doc/' },
						{ label: 'How we write docs', link: '/about-docs/how-we-doc/' },
					],
				},
				{
					label: 'First-time Contributors',
					items: [ 
						'first-time/about',
						'first-time/good-first-contributions',
						'first-time/file-an-issue',
						'first-time/edit-single-page',
						'first-time/larger-contributions',
						'first-time/source-content',
						'first-time/creating-pull-requests',
						'first-time/pr-review-process',

					],
				},
				{
					label: 'Docs Syntax Reference',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Documenting Code Changes',
					items: [
						{ label: 'About documenting changes', link: '/docs-for-code-changes/about-documenting-code-changes/' },
						{ label: 'Patch changes', link: '/docs-for-code-changes/patch-changes/' },
						{ label: 'New or updated features', link: '/docs-for-code-changes/new-feature-docs/' },
						{ label: 'Experimental features', link: '/docs-for-code-changes/experimental-feature-docs/' },
						{ label: 'Error messages', link: '/docs-for-code-changes/error-reference/' },
						{ label: 'Changesets', link: '/docs-for-code-changes/changesets/' },
					],
				},
				{
					label: 'Contributing Guides',
					items: [
						{ label: 'Writing and Style Guide', link: '/guides/writing-style/' },
						{ label: 'Adding a new Astro + X Guide', link: '/guides/new-third-party-guide/' },
						{ label: 'Contributing a Recipe', link: '/guides/recipe-writing/' },
						{ label: 'Translating Astro docs', link: '/guides/i18n/' },	
						{ label: 'Contributing for Hacktoberfest', link: '/guides/hacktoberfest/' },
					],
				},
				{
					label: 'Major Upgrade guides',
					items: [
						{ label: 'About Astro upgrade guides', link: '/upgrade-guides/about/' },
						{ label: 'Breaking changes', link: '/upgrade-guides/breaking-changes/' },
					],
				},
				{
					label: 'Roles',
					autogenerate: { directory: 'roles' },
				},
				{
					label: 'Reviewers',
					autogenerate: { directory: 'reviewers' },
				},

			],
		}),
	],
});
