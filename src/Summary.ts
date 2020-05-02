import {ConsoleReport} from './ConsoleReport'
import {HTMLReport} from './HTMLReport'
import {MatchRow} from './MatchRow'
import {WinsAnalysis} from './WinsAnalysis'

export interface Analyser {
  run(data: MatchRow[]): string
}

export interface Reporter {
  print(report: string): void
}

export class Summary {
  constructor(public analyser: Analyser, public reporter: Reporter) {}

  makeAnalysisWithReport(data: MatchRow[]): void {
    const analysis = this.analyser.run(data)
    this.reporter.print(analysis)
  }

  static winsAnalysisWithConsoleReport(teamName: string) {
    return new Summary(new WinsAnalysis(teamName), new ConsoleReport())
  }

  static winsAnalysisWithHTMLReport(teamName: string) {
    return new Summary(new WinsAnalysis(teamName), new HTMLReport())
  }
}
