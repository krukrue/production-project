type Mods = Record<string, boolean | string>

export function classNames (cls: string, mods: undefined | Mods = {}, additionals: (string | undefined)[] = []): string {
  return [cls, ...additionals, Object.entries(mods ?? {}).filter(([_, value]) => Boolean(value)).map(([key, _]) => key)].join(' ')
}
