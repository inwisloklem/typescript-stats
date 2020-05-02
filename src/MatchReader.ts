import {CSVFileReader} from './CSVFileReader'
import {MatchRow} from './MatchRow'
import {Result} from './Result'
import {convertDateStringToDate} from './utils'

export interface DataReader {
  data: string[][]
  read(): void
}

export class MatchReader {
  public data: MatchRow[] = []

  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read()
    this.data = this.reader.data.map((row: string[]): MatchRow => [
      convertDateStringToDate(row[0]),
      row[1],
      row[2],
      Number.parseInt(row[3]),
      Number.parseInt(row[4]),
      row[5] as Result,
      //     ^^^^^^^^^ type assertion
      row[6],
    ])
  }

  static fromCSV(filename: string): MatchReader {
    const matchReader = new MatchReader(new CSVFileReader(filename))
    matchReader.load()

    return matchReader
  }
}
