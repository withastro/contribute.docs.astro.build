import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator';

/* https://docs.netlify.com/configure-builds/environment-variables/#read-only-variables */
const NETLIFY_PREVIEW_SITE = process.env.CONTEXT !== 'production' && process.env.DEPLOY_PRIME_URL;

const site = NETLIFY_PREVIEW_SITE || 'https://contribute.docs.astro.build/';

// https://astro.build/config
export default defineConfig({
	site,
	integrations: [
		starlight({
			plugins: [starlightLinksValidator()],
			title: 'Astro Docs Docs (AD²)',
			social: {
				github: 'https://github.com/withastro/contribute.docs.astro.build'
			},
			editLink: {
				baseUrl: 'https://github.com/withastro/contribute.docs.astro.build/edit/main/'
			},
			customCss: ["./src/styles/theme.css"],
			components: {
				Head: './src/starlight-overrides/Head.astro',
			},
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
					autogenerate: { directory: 'first-time' },
				},
				{
					label: 'Documenting Code Changes',
					items: [
						{ label: 'About documenting changes', link: '/docs-for-code-changes/about-documenting-code-changes/' },
						{ label: 'Patch changes', link: '/docs-for-code-changes/patch-changes/' },
						{ label: 'New or updated features', link: '/docs-for-code-changes/new-feature-docs/' },
						{ label: 'Experimental features', link: '/docs-for-code-changes/experimental-feature-docs/' },
						{ label: 'Pull requests', link: '/docs-for-code-changes/pull-requests/' },
					],
				},
				{
					label: 'Contributing Guides',
					items: [
						{ label: 'Writing and Style Guide', link: '/guides/writing-style/' },
						{ label: 'Adding a new Astro + X Guide', link: '/guides/new-third-party-stub/' },
						{ label: 'Contributing a Recipe', link: '/guides/recipe-writing/' },
						{ label: 'Translating Astro docs', link: '/guides/i18n/' },	
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
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
