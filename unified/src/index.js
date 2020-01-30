import unified from 'unified'
import stream from 'unified-stream'
import markdown from 'remark-parse'
import slug from 'remark-slug'
import toc from 'remark-toc'
import remark2rehype from 'remark-rehype'
import html from 'rehype-stringify'
import doc from 'rehype-document'

const processor = unified()
  .use(markdown)
  .use(slug)
  .use(toc)
  .use(remark2rehype)
  .use(doc, { title: 'Contents' })
  .use(html)

process.stdin.pipe(stream(processor)).pipe(process.stdout)
