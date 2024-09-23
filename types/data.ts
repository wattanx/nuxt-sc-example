export type Kind =
  | 'standalone-server-components'
  | 'client-interactivity'
  | 'nuxt-island'
  | 'client-components';

export type Meta = {
  kind?: Kind;
  path: string;
  title: string;
  description: string;
};
