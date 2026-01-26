import { readdirSync, statSync, readFileSync } from "fs";
import path from "path";
import { saveFileWithDirectories } from "../util/file-handler.js";

function findFileRecursive(dir, fileName) {
  const entries = readdirSync(dir);

  for (const entry of entries) {
    const fullPath = path.join(dir, entry);
    const stat = statSync(fullPath);

    if (stat.isDirectory()) {
      const found = findFileRecursive(fullPath, fileName);
      if (found) return found;
    } else if (entry === fileName) {
      return fullPath;
    }
  }

  return null;
}

export function sluggify(label) {
  return label
    .replace(/([a-z])([A-Z])\B/g, "$1-$2")
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim()
    .replace(/[-\s]+/g, "-");
}


const pf2RepoPath = process.argv[2];

const redirects = JSON.parse(readFileSync(`${pf2RepoPath}/build/uuid-redirects/pf2e.json`, "utf-8"));

const ACTOR_REDIRECTS = [];

for (const [oldLink, newLink] of Object.entries(redirects)) {
    const oldLinkParts = oldLink.split(".");
    const newLinkParts = newLink.split(".");

    if (oldLinkParts[3] === "Actor") {
        const filePath = findFileRecursive(`${pf2RepoPath}/packs/pf2e/${newLinkParts[2]}`,`${sluggify(newLinkParts[4])}.json`);
        const actorData = JSON.parse(readFileSync(filePath,"utf-8"));

        const actor = {name: newLinkParts[4], linkOld: oldLink, linkNew: [...newLinkParts.slice(0, 4), actorData._id].join(".")};

        ACTOR_REDIRECTS.push(actor);

        saveFileWithDirectories("uuid-redirects.json", JSON.stringify(ACTOR_REDIRECTS,null, 2));
    }
}