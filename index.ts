import {MatchReader, MatchRow} from './src/MatchReader'
import {Result} from './src/Result'

const matchReader = new MatchReader('data.csv')
matchReader.read()

const manUnitedWins = matchReader.data.reduce((wins: number, row: MatchRow): number => {
  const index = row.findIndex(column => column === 'Man United')

  return (index === 1 && row[5] === Result.HomeWin) || (index === 2 && row[5] === Result.AwayWin)
    ? wins + 1
    : wins
}, 0)

console.info(`Man united wins ${manUnitedWins} games.`)
