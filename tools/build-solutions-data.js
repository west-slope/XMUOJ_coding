const fs = require("fs");
const path = require("path");
const siteRoot = path.resolve(__dirname, "..");
const solutionsRoot = path.join(siteRoot, "solutions");
const exts = [".cpp", ".cc", ".cxx", ".c", ".py", ".java", ".js", ".ts", ".go", ".rs", ".kt"];
const payload = { generatedAt: new Date().toLocaleString("zh-CN", { hour12: false }), solutions: {} };

function languageFromExt(ext) {
  const lang = ext.slice(1).toLowerCase();
  return lang === "cc" || lang === "cxx" ? "cpp" : lang;
}

if (fs.existsSync(solutionsRoot)) {
  for (const contest of fs.readdirSync(solutionsRoot)) {
    const contestDir = path.join(solutionsRoot, contest);
    if (!fs.statSync(contestDir).isDirectory()) continue;
    payload.solutions[contest] = {};
    const canonicalIds = new Map();
    for (const name of fs.readdirSync(contestDir).sort((a, b) => {
      const av = /-\d+\.[^.]+$/.test(a) ? 1 : 0;
      const bv = /-\d+\.[^.]+$/.test(b) ? 1 : 0;
      return av - bv || a.localeCompare(b);
    })) {
      const ext = path.extname(name);
      if (!exts.includes(ext.toLowerCase())) continue;
      const stem = path.basename(name, ext);
      const match = stem.match(/^(.*?)(?:-(\d+))?$/);
      const rawId = match[1];
      const idKey = rawId.toLowerCase();
      const id = canonicalIds.get(idKey) || rawId;
      canonicalIds.set(idKey, id);
      const variant = match[2] ? Number(match[2]) : 1;
      const rel = `solutions/${contest}/${name}`;
      const item = {
        variant,
        path: rel,
        language: languageFromExt(ext),
        code: fs.readFileSync(path.join(contestDir, name), "utf8")
      };
      if (!payload.solutions[contest][id]) payload.solutions[contest][id] = [];
      payload.solutions[contest][id].push(item);
    }
    for (const [id, items] of Object.entries(payload.solutions[contest])) {
      const unique = [];
      for (const item of items) {
        const duplicateIndex = unique.findIndex((saved) => saved.code === item.code);
        if (duplicateIndex < 0) {
          unique.push(item);
          continue;
        }
        const codeLooksPython = /(^|\n)\s*(from\s+\w+\s+import|import\s+\w+|def\s+\w+\s*\()/m.test(item.code);
        if (codeLooksPython && item.language === "py") unique[duplicateIndex] = item;
      }
      unique.sort((a, b) => a.variant - b.variant || a.path.localeCompare(b.path));
      payload.solutions[contest][id] = unique;
    }
  }
}

const outPath = path.join(siteRoot, "solutions-data.js");
fs.writeFileSync(outPath, "window.XMUOJ_SOLUTIONS_CODE = " + JSON.stringify(payload, null, 2) + ";\n", "utf8");
for (const [contest, items] of Object.entries(payload.solutions)) {
  console.log(`${contest}: ${Object.keys(items).length} solutions`);
}
console.log(`Done: ${outPath}`);
