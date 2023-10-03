import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Astro Docs Docs (AD²)',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{ label: 'Welcome', link: '/guides/welcome/' },

				{
					label: 'Guides',
					items: [
						{ label: 'Why we write docs', link: '/guides/why-we-doc/' },
						{ label: 'Writing and Style Guide', link: '/guides/writing-style/' },
						{ label: 'Adding docs for a new feature', link: '/guides/new-feature-docs/' },
						{ label: 'How to write code samples', link: '/guides/code-samples/' },
						{ label: 'Translating Astro docs', link: '/guides/i18n/' },
						{ label: 'Contributing a Recipe', link: '/guides/recipe-writing/' },
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
