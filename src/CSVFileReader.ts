import fs from 'fs'

export class CSVFileReader {
  public data: string[][] = []
  constructor(public filename: string) {}

  read(): void {
    try {
      const csvFile = fs.readFileSync(this.filename, {encoding: 'utf-8'})
      this.data = csvFile
        .split('\n')
        .map((row: string): string[] => row.split(','))
    } catch (error) {
      console.error(error.message)
      process.exit(1)
    }
  }
}
