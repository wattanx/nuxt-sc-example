export type Kind =
  | 'standalone-server-components'
  | 'client-interactivity'
  | 'nuxt-island'
  | 'client-components'
  | 'lazy-server-components'
  | 'non-lazy-server-components'
  | 'partial-hydration'
  | 'server-only-page';

export type Meta = {
  kind?: Kind;
  path: string;
  title: string;
  description: string;
};
