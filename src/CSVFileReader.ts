import fs from 'fs'

export abstract class CSVFileReader<Row> {
  data: Row[] = []

  abstract filename: string
  abstract mapRow(row: string[]): Row

  read(): void {
    try {
      const csvFile = fs.readFileSync(this.filename, {encoding: 'utf-8'})
      this.data = csvFile
        .split('\n')
        .map((row: string): string[] => row.split(','))
        .map(this.mapRow)
    } catch (error) {
      console.error(error.message)
      process.exit(1)
    }
  }
}
