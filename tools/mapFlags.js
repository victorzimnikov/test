const fs = require('fs')
const path = require('path')

const FLAGS_PATH = path.resolve(__dirname, '..', 'src', 'assets', 'flags')
const FLAGS_CONSTANTS_FILE_PATH = path.resolve(__dirname, '..', 'src', 'constants', 'Flags.ts')

const flags = fs.readdirSync(FLAGS_PATH)

const mapFlags = () => {
  let result = `import type { ImageURISource } from "react-native";\n\nexport const Flags: Record<string, ImageURISource> = {\n`

  flags.forEach((flag) => {
    const flagPath = path.join(FLAGS_PATH, flag)

    if (fs.statSync(flagPath).isFile) {
      const name = flag.split('.')[0]

      result += `  ${name.toUpperCase()}: require('../assets/flags/${name}.png'),\n`
    }
  })

  result += '}'

  fs.writeFileSync(FLAGS_CONSTANTS_FILE_PATH, result)
}

mapFlags()
