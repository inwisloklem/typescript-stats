export function convertDateStringToDate(date: string): Date {
  const [day, month, year] = date.split('/').map(Number.parseInt)
  return new Date(year, month - 1, day)
}
