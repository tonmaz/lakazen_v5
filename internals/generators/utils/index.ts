/**
 * componentExists
 *
 * Check whether the given component exist in either the components or blocks directory
 */

import fs from "fs";
import path from "path";

export function componentExists(component: string) {
  const components = fs.readdirSync(
    path.join(__dirname, "../../../src/common/components")
  );
  return components.indexOf(component) >= 0;
}

export function containerExists(container: string) {
  const containers = fs.readdirSync(
    path.join(__dirname, "../../../src/blocks")
  );
  return containers.indexOf(container) >= 0;
}

function walkDir(directory: string) {
  let dirList: string[] = [];

  const files = fs.readdirSync(directory);
  for (const file of files) {
    const p = path.join(directory, file);
    if (fs.statSync(p).isDirectory()) {
      dirList.push(p);
      dirList = [...dirList, ...walkDir(p)];
    }
  }
  return dirList;
}

export function listComponentsDirectories() {
  // Not using path.join(__dirname,) as it give really long name when listed
  const sourceDir = "src/common/components";
  return walkDir(sourceDir).filter(
    (dirPath) => dirPath.match(/elements$/) || dirPath.match(/blocks$/)
  );
}
