import {CSVFileReader} from './CSVFileReader'
import {Result} from './Result'
import {convertDateStringToDate} from './utils'

export type MatchRow = [Date, string, string, number, number, Result, string]

export class MatchReader extends CSVFileReader<MatchRow> {
  data: MatchRow[] = []

  constructor(public filename: string) {
    super()
  }

  mapRow(row: string[]): MatchRow {
    return [
      convertDateStringToDate(row[0]),
      row[1],
      row[2],
      Number.parseInt(row[3]),
      Number.parseInt(row[4]),
      row[5] as Result,
      //     ^^^^^^^^^ type assertion
      row[6],
    ]
  }
}
