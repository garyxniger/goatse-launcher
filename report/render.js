#!/usr/bin/env node
var markdownpdf = require("markdown-pdf"), fs = require("fs")

// Markdown rendering options:
options = {
  remarkable: { breaks: false },
  paperFormat: 'Letter',
}

fs.createReadStream("goatse_jelly.md")
  .pipe(markdownpdf(options))
  .pipe(fs.createWriteStream("goatse_jelly.pdf"))

