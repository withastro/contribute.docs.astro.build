import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

/* https://vercel.com/docs/projects/environment-variables/system-environment-variables#system-environment-variables */
const VERCEL_PREVIEW_SITE =
	process.env.VERCEL_ENV !== 'production' &&
	process.env.VERCEL_URL &&
	`https://${process.env.VERCEL_URL}`;

const site = VERCEL_PREVIEW_SITE || 'https://contribute.docs.astro.build/';

// https://astro.build/config
export default defineConfig({
	site,
	integrations: [
		starlight({
			title: 'Astro Docs Docs (AD²)',
			social: {
				github: 'https://github.com/withastro/contribute.docs.astro.build'
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
					label: 'Contributing Guides',
					items: [
						{ label: 'Writing and Style Guide', link: '/guides/writing-style/' },
						{ label: 'Adding docs for a new feature', link: '/guides/new-feature-docs/' },
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
