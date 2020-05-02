import fs from 'fs'
import {Reporter} from './Summary'

export class HTMLReport implements Reporter {
  print(report: string) {
    const html =
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Analysis</title>
</head>
<body>
  <h1>Analysis Output</h2>
  <p>${report}</p>
</body>
</html>`

    fs.writeFileSync('./report.html', html)
  }
}
