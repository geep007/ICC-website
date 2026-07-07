import { createClient } from '@sanity/client';
import { defaults, type SiteContent } from '../content/defaults';

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.PUBLIC_SANITY_DATASET ?? 'production';

const client = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion: '2025-01-01',
      useCdn: true,
    })
  : null;

/** Strip null/undefined/empty values so defaults survive the merge. */
function clean<T>(value: T): T | undefined {
  if (value === null || value === undefined) return undefined;
  if (Array.isArray(value)) return value.length ? value : undefined;
  if (typeof value === 'object') {
    const entries = Object.entries(value as Record<string, unknown>)
      .map(([k, v]) => [k, clean(v)] as const)
      .filter(([, v]) => v !== undefined);
    return entries.length ? (Object.fromEntries(entries) as T) : undefined;
  }
  return value;
}

function merge<T>(base: T, override: Partial<T> | undefined): T {
  if (!override) return base;
  const out: Record<string, unknown> = { ...(base as Record<string, unknown>) };
  for (const [key, value] of Object.entries(override)) {
    const baseValue = out[key];
    if (
      value &&
      typeof value === 'object' &&
      !Array.isArray(value) &&
      baseValue &&
      typeof baseValue === 'object' &&
      !Array.isArray(baseValue)
    ) {
      out[key] = merge(baseValue, value);
    } else {
      out[key] = value;
    }
  }
  return out as T;
}

const query = `*[_type == "homepage"][0]{
  hero,
  ticker1,
  ticker2,
  ticker3,
  about1,
  about2,
  services{
    heading,
    ctaText,
    items,
    "caseStudyImage": caseStudyImage.asset->url,
    "projects": projects[]{
      name,
      category,
      "logo": logo.asset->url,
      "caseStudyImage": caseStudyImage.asset->url
    }
  },
  ecosystem,
  roster{
    heading,
    "logos": logos[]{
      "src": asset->url,
      "alt": coalesce(alt, ""),
      "width": asset->metadata.dimensions.width,
      "height": asset->metadata.dimensions.height
    }
  },
  contact,
  "marqueePhotos": marqueePhotos[].asset->url,
  footer
}`;

/**
 * Site content: Sanity when configured, Figma defaults otherwise.
 * Every field falls back individually, so a partially filled CMS still renders.
 */
export async function getContent(): Promise<SiteContent> {
  if (!client) return defaults;
  try {
    const data = await client.fetch(query);
    return merge(defaults, clean(data));
  } catch (err) {
    console.error('[sanity] fetch failed, using defaults:', err);
    return defaults;
  }
}
