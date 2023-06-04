import fs from "fs"
import path, { basename } from "path"
import { rimraf } from "rimraf"

import { registry } from "../registry/registry"
import { registrySchema } from "../registry/schema"
import { styles } from "../registry/styles"

const REGISTRY_PATH = path.join(process.cwd(), "public/registry")

const result = registrySchema.safeParse(registry)

if (!result.success) {
  console.error(result.error)
  process.exit(1)
}

// ----------------------------------------------------------------------------
// Build __registry__/index.tsx.
// ----------------------------------------------------------------------------
let index = `// This file is autogenerated by scripts/build-registry.ts
// Do not edit this file directly.
import * as React from "react"

export const Index: Record<string, any> = {
`

for (const style of styles) {
  index += `  "${style.name}": {`

  // Build style index.
  for (const item of result.data) {
    if (item.type === "components:ui") {
      continue
    }

    const resolveFiles = item.files.map(
      (file) => `registry/${style.name}/${file}`
    )

    const type = item.type.split(":")[1]
    index += `
    "${item.name}": {
      name: "${item.name}",
      type: "${item.type}",
      registryDependencies: ${JSON.stringify(item.registryDependencies)},
      component: React.lazy(() => import("@/registry/${style.name}/${type}/${
      item.name
    }")),
      files: [${resolveFiles.map((file) => `"${file}"`)}],
    },`
  }

  index += `
  },`
}

index += `
}
`

// Write style index.
rimraf.sync(path.join(process.cwd(), "__registry__/index.tsx"))
fs.writeFileSync(path.join(process.cwd(), "__registry__/index.tsx"), index)

// ----------------------------------------------------------------------------
// Build registry/[style]/[name].json.
// ----------------------------------------------------------------------------
for (const style of styles) {
  const targetPath = path.join(REGISTRY_PATH, style.name)

  // Create directory if it doesn't exist.
  if (!fs.existsSync(targetPath)) {
    fs.mkdirSync(targetPath, { recursive: true })
  }

  for (const item of result.data) {
    // if (item.type === "components:example") {
    //   continue
    // }

    const files = item.files?.map((file) => {
      const content = fs.readFileSync(
        path.join(process.cwd(), "registry", style.name, file),
        "utf8"
      )

      return {
        name: basename(file),
        content,
      }
    })

    const payload = {
      ...item,
      files,
    }

    fs.writeFileSync(
      path.join(targetPath, `${item.name}.json`),
      JSON.stringify(payload, null, 2),
      "utf8"
    )
  }
}

// ----------------------------------------------------------------------------
// Build registry/styles.json.
// ----------------------------------------------------------------------------
const stylesJson = JSON.stringify(styles, null, 2)
fs.writeFileSync(path.join(REGISTRY_PATH, "styles.json"), stylesJson, "utf8")

// ----------------------------------------------------------------------------
// Build registry/index.json.
// ----------------------------------------------------------------------------
const names = result.data // .filter((item) => item.type === "components:ui")
const registryJson = JSON.stringify(names, null, 2)
rimraf.sync(path.join(REGISTRY_PATH, "index.json"))
fs.writeFileSync(path.join(REGISTRY_PATH, "index.json"), registryJson, "utf8")

console.log("✅ Done!")
