import { defineField, defineType } from 'sanity';

export const homepage = defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Hero' },
    { name: 'about', title: 'About' },
    { name: 'services', title: 'Services' },
    { name: 'roster', title: 'Roster' },
    { name: 'contact', title: 'Contact' },
    { name: 'footer', title: 'Footer' },
  ],
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      group: 'hero',
      fields: [
        { name: 'titleLine1', title: 'Title line 1', type: 'string' },
        { name: 'titleLine2', title: 'Title line 2', type: 'string' },
        { name: 'tagline', title: 'Tagline', type: 'text', rows: 3 },
        { name: 'ctaText', title: 'Button text', type: 'string' },
        { name: 'ctaHref', title: 'Button link', type: 'string' },
      ],
    }),
    defineField({ name: 'ticker1', title: 'Ticker 1 (after hero)', type: 'string', group: 'hero' }),
    defineField({ name: 'ticker2', title: 'Ticker 2 (before services)', type: 'string', group: 'services' }),
    defineField({ name: 'ticker3', title: 'Ticker 3 (before roster)', type: 'string', group: 'roster' }),
    defineField({
      name: 'about1',
      title: 'About — statement',
      type: 'object',
      group: 'about',
      fields: [
        { name: 'lead', title: 'Lead-in', type: 'string' },
        { name: 'headline', title: 'Big headline', type: 'text', rows: 4 },
        { name: 'floats', title: 'Floating words', type: 'array', of: [{ type: 'string' }], validation: (r) => r.max(3) },
        { name: 'outroPlain', title: 'Outro (white part)', type: 'string' },
        { name: 'outroAccent', title: 'Outro (yellow part)', type: 'string' },
      ],
    }),
    defineField({
      name: 'about2',
      title: 'About — you can call us',
      type: 'object',
      group: 'about',
      fields: [
        { name: 'labels', title: 'Labels', type: 'array', of: [{ type: 'string' }], validation: (r) => r.max(3) },
        { name: 'callLine', title: 'Call line', type: 'string' },
        { name: 'theWord', title: 'Word before logo', type: 'string' },
        { name: 'scribble', title: 'Handwritten note', type: 'text', rows: 2 },
      ],
    }),
    defineField({
      name: 'services',
      title: 'Services',
      type: 'object',
      group: 'services',
      fields: [
        { name: 'heading', title: 'Heading', type: 'string' },
        { name: 'ctaText', title: 'Button text', type: 'string' },
        { name: 'items', title: 'Service names', type: 'array', of: [{ type: 'string' }] },
        { name: 'caseStudyImage', title: 'Default case study image', type: 'image' },
        {
          name: 'projects',
          title: 'Projects',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'name', title: 'Project name', type: 'string' },
                { name: 'category', title: 'Category', type: 'string' },
                { name: 'logo', title: 'Brand logo', type: 'image' },
                { name: 'caseStudyImage', title: 'Case study image', type: 'image' },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'ecosystem',
      title: 'Ecosystem',
      type: 'object',
      group: 'services',
      fields: [
        { name: 'headingPre', title: 'Heading (before logo)', type: 'string' },
        { name: 'headingPost', title: 'Heading (after logo)', type: 'string' },
        { name: 'ctaText', title: 'Button text', type: 'string' },
      ],
    }),
    defineField({
      name: 'roster',
      title: 'Brand roster',
      type: 'object',
      group: 'roster',
      fields: [
        { name: 'heading', title: 'Heading', type: 'string' },
        {
          name: 'logos',
          title: 'Logos',
          type: 'array',
          of: [
            {
              type: 'image',
              fields: [{ name: 'alt', title: 'Brand name', type: 'string' }],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'contact',
      title: 'Contact',
      type: 'object',
      group: 'contact',
      fields: [
        { name: 'headingLine1', title: 'Heading line 1', type: 'string' },
        { name: 'headingLine2', title: 'Heading line 2', type: 'string' },
        { name: 'body', title: 'Body', type: 'text', rows: 4 },
        { name: 'submitText', title: 'Submit button text', type: 'string' },
        { name: 'serviceOptions', title: 'Service dropdown options', type: 'array', of: [{ type: 'string' }] },
      ],
    }),
    defineField({
      name: 'marqueePhotos',
      title: 'Photo marquee',
      type: 'array',
      group: 'footer',
      of: [{ type: 'image' }],
    }),
    defineField({
      name: 'footer',
      title: 'Footer',
      type: 'object',
      group: 'footer',
      fields: [
        { name: 'heading', title: 'Heading', type: 'string' },
        {
          name: 'methods',
          title: 'Contact methods',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'icon', title: 'Icon path', type: 'string' },
                { name: 'label', title: 'Label', type: 'string' },
                { name: 'href', title: 'Link', type: 'string' },
              ],
            },
          ],
        },
        { name: 'creditLine', title: 'Credit line', type: 'string' },
        { name: 'navLinks', title: 'Footer links', type: 'array', of: [{ type: 'string' }] },
      ],
    }),
  ],
});
