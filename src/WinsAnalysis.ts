import {Analyser} from './Summary'
import {MatchRow} from './MatchRow'
import {Result} from './Result'

export class WinsAnalysis implements Analyser {
  constructor(public teamName: string) {}

  run(data: MatchRow[]) {
    const count = String(data.reduce((count: number, row: MatchRow): number => {
      const index = row.findIndex(column => column === this.teamName)

      return (index === 1 && row[5] === Result.HomeWin) ||
        (index === 2 && row[5] === Result.AwayWin) ? count + 1 : count
    }, 0))

    return `Team ${this.teamName} won ${count} games.`
  }
}
