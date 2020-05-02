import {Summary} from './src/Summary'
import {MatchReader} from './src/MatchReader'

const {data} = MatchReader.fromCSV('data.csv')

const summaryConsole = Summary.winsAnalysisWithConsoleReport('Newcastle')
summaryConsole.makeAnalysisWithReport(data)

const summaryHtml = Summary.winsAnalysisWithHTMLReport('Newcastle')
summaryHtml.makeAnalysisWithReport(data)
