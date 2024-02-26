type Mods = Record<string, boolean | string>

export function classNames (cls: string, mods: undefined | Mods = {}, additionals: (string | undefined)[] = []): string {
  const modClasses = Object.entries(mods)
    .filter(([_, value]) => Boolean(value))
    .map(([key]) => key)
    .join(' ')

  const additionalClasses = additionals.filter(Boolean).join(' ')

  return `${cls} ${modClasses} ${additionalClasses}`.replace(/\s+/g, ' ').trim()
}
