import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { homepage } from './schemas/homepage';

export default defineConfig({
  name: 'icc',
  title: 'Independent Creators Co.',
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'your-project-id',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  plugins: [
    structureTool({
      // Homepage is a singleton — no create/delete, just edit.
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Homepage')
              .child(S.document().schemaType('homepage').documentId('homepage')),
          ]),
    }),
  ],
  schema: {
    types: [homepage],
  },
});
