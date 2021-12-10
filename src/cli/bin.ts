import { mkdir, writeFile } from 'fs/promises'
import { basename, dirname, extname, join, resolve } from 'path'
import { component, styles } from './strings'

const args = process.argv.splice(2) || []
if (args.length === 0) process.exit(0)

const main = async () => {
  // create component
  if (args.length === 2 && ['c', 'component'].includes(args[0]) && /\.[jt]sx?$/.test(args[1])) {
    const path = args[1]
    const isTS = /\.tsx?$/.test(path)

    const NAME = basename(path, extname(path))
    const absolutePath = join(resolve(), join(path))
    const dir = dirname(absolutePath)

    let Name: string | string[] = [...NAME]
    Name[0] = Name[0].toUpperCase()
    Name = Name.join('')

    let name = NAME.toLowerCase()

    const replacePlaceholders = (str: string) => {
      return str
        .replace(/NAME/gm, NAME)
        .replace(/Name/gm, Name as string)
        .replace(/name/gm, name)
    }

    await mkdir(dir, { recursive: true })
    await writeFile(join(dir, `${NAME}${isTS ? '.tsx' : '.jsx'}`), replacePlaceholders(component))
    await writeFile(join(dir, `${NAME}${isTS ? '.styles.ts' : '.styles.js'}`), replacePlaceholders(styles))
  }
}
main()
