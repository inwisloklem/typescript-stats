import fs from 'fs'
import {Result} from './Result'
import {convertDateStringToDate} from './utils'

export type Row = [Date, string, string, number, number, Result, string]

export class CSVFileReader {
  public data: Row[] = []
  constructor(public filename: string) {}

  read(): void {
    try {
      const csvFile = fs.readFileSync(this.filename, {encoding: 'utf-8'})
      this.data = csvFile
        .split('\n')
        .map((row: string): string[] => row.split(','))
        .map((row: string[]): Row => [
          convertDateStringToDate(row[0]),
          row[1],
          row[2],
          Number.parseInt(row[3]),
          Number.parseInt(row[4]),
          row[5] as Result,
          //     ^^^^^^^^^ type assertion
          row[6],
        ])
    } catch (error) {
      console.error(error.message)
      process.exit(1)
    }
  }
}
