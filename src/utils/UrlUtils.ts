import QueryString from 'qs'

type Options = Parameters<typeof QueryString.stringify>[1]

export const stringify = <T extends Record<string, unknown>>(data: T, options?: Options): string =>
  QueryString.stringify(data, options)
