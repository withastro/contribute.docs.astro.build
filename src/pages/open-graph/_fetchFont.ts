import { writeFile } from 'node:fs/promises';
import path from 'node:path';

/**
 * Download the Astro brand font for OpenGraph Image generation.
 * Returns the path the font was downloaded to if successful, otherwise `undefined`.
 */
export async function fetchBrandFont() {
  try {
    if (!import.meta.env.FONT_CREDENTIALS) {
      throw new Error(
        'FONT_CREDENTIALS environment variable not defined. Please set it to download Astro’s brand font.'
      );
    }

    console.log('Downloading brand font');
    const fontArrayBuffer = await fetch(
      'https://fonts-cdn.astro.build/Obviously/Obviously Normal/Desktop/Obviously-Medium.otf',
      JSON.parse(import.meta.env.FONT_CREDENTIALS)
    ).then((res) => res.arrayBuffer());

    const fontFile = path.resolve('./src/pages/open-graph/_assets/brand-500-normal.otf');
    console.log('Saving file', fontFile);
    await writeFile(fontFile, Buffer.from(fontArrayBuffer));
    return fontFile;
  } catch (error) {
    // When running locally, if anything goes wrong, we can safely return
    // nothing and continue with the default local fonts.
    if (!import.meta.env.NETLIFY) return undefined;
    // But in production builds we want to error if we failed to download fonts.
    throw error;
  }
}
