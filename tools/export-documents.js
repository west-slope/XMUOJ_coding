const fs = require("fs");
const path = require("path");
const vm = require("vm");
const {
  AlignmentType,
  BorderStyle,
  Document,
  HeadingLevel,
  Packer,
  Paragraph,
  TextRun
} = require("docx");

const siteRoot = path.resolve(__dirname, "..");
const dataPath = path.join(siteRoot, "data.js");
const exportDir = path.join(siteRoot, "exports");

function loadData() {
  const code = fs.readFileSync(dataPath, "utf8");
  const context = { window: {} };
  vm.createContext(context);
  vm.runInContext(code, context);
  return context.window.XMUOJ_SOLUTIONS_DATA || { contests: [] };
}

function stripHtml(html) {
  return String(html || "")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/p>/gi, "\n")
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function fenced(code, language) {
  if (!code) return "_暂无答案代码_";
  return `\`\`\`${language || ""}\n${code.trimEnd()}\n\`\`\``;
}


function displayProblemId(id) {
  return String(id || "").replace(/^JD(\d+)$/i, "$1");
}

function displayProblemLabel(problem) {
  return [displayProblemId(problem.id), problem.title || ""].filter(Boolean).join(" ");
}

function buildMarkdown(data) {
  const lines = [];
  lines.push("# XMUOJ 题集与答案");
  lines.push("");
  lines.push(`导出时间：${new Date().toLocaleString("zh-CN")}`);
  lines.push(`数据更新时间：${data.generatedAt || "-"}`);
  lines.push("");

  for (const contest of data.contests || []) {
    lines.push(`## ${contest.title || `Contest ${contest.id}`}`);
    lines.push("");
    const desc = stripHtml(contest.description);
    if (desc) {
      lines.push(desc);
      lines.push("");
    }

    for (const problem of contest.problems || []) {
      lines.push(`### ${displayProblemLabel(problem)}`.trim());
      lines.push("");
      lines.push(`- 原题：${problem.url || ""}`);
      lines.push(`- 时间限制：${problem.timeLimit || "-"} ms`);
      lines.push(`- 内存限制：${problem.memoryLimit || "-"} MB`);
      if (problem.source) lines.push(`- 来源：${problem.source}`);
      lines.push("");
      appendTextSection(lines, "题面", stripHtml(problem.description));
      appendTextSection(lines, "输入", stripHtml(problem.inputDescription));
      appendTextSection(lines, "输出", stripHtml(problem.outputDescription));

      if (problem.samples && problem.samples.length) {
        lines.push("#### 样例");
        lines.push("");
        problem.samples.forEach((sample, index) => {
          lines.push(`样例 ${index + 1}`);
          lines.push("");
          lines.push("输入：");
          lines.push("```text");
          lines.push(sample.input || "");
          lines.push("```");
          lines.push("");
          lines.push("输出：");
          lines.push("```text");
          lines.push(sample.output || "");
          lines.push("```");
          lines.push("");
        });
      }

      appendTextSection(lines, "提示", stripHtml(problem.hint));
      lines.push("#### 答案代码");
      lines.push("");
      lines.push(fenced(problem.solution && problem.solution.code, problem.solution && problem.solution.language));
      lines.push("");
    }
  }

  return lines.join("\n");
}

function appendTextSection(lines, title, body) {
  if (!body) return;
  lines.push(`#### ${title}`);
  lines.push("");
  lines.push(body);
  lines.push("");
}

function textParagraph(text, options = {}) {
  return new Paragraph({
    ...options,
    children: [new TextRun({ text: text || "-", font: "Microsoft YaHei" })]
  });
}

function codeParagraph(text) {
  return new Paragraph({
    border: {
      top: { style: BorderStyle.SINGLE, size: 1, color: "DDDDDD" },
      bottom: { style: BorderStyle.SINGLE, size: 1, color: "DDDDDD" },
      left: { style: BorderStyle.SINGLE, size: 1, color: "DDDDDD" },
      right: { style: BorderStyle.SINGLE, size: 1, color: "DDDDDD" }
    },
    spacing: { before: 80, after: 80 },
    children: [new TextRun({ text: text || "", font: "Consolas", size: 18 })]
  });
}

function addSection(children, title, body) {
  if (!body) return;
  children.push(textParagraph(title, { heading: HeadingLevel.HEADING_4 }));
  for (const line of body.split(/\r?\n/)) {
    children.push(textParagraph(line));
  }
}

function buildDocx(data) {
  const children = [];
  children.push(textParagraph("XMUOJ 题集与答案", { heading: HeadingLevel.TITLE, alignment: AlignmentType.CENTER }));
  children.push(textParagraph(`导出时间：${new Date().toLocaleString("zh-CN")}`));
  children.push(textParagraph(`数据更新时间：${data.generatedAt || "-"}`));

  for (const contest of data.contests || []) {
    children.push(textParagraph(contest.title || `Contest ${contest.id}`, { heading: HeadingLevel.HEADING_1 }));
    addSection(children, "比赛说明", stripHtml(contest.description));

    for (const problem of contest.problems || []) {
      children.push(textParagraph(displayProblemLabel(problem), { heading: HeadingLevel.HEADING_2 }));
      children.push(textParagraph(`原题：${problem.url || ""}`));
      children.push(textParagraph(`时间限制：${problem.timeLimit || "-"} ms    内存限制：${problem.memoryLimit || "-"} MB`));
      if (problem.source) children.push(textParagraph(`来源：${problem.source}`));

      addSection(children, "题面", stripHtml(problem.description));
      addSection(children, "输入", stripHtml(problem.inputDescription));
      addSection(children, "输出", stripHtml(problem.outputDescription));

      if (problem.samples && problem.samples.length) {
        children.push(textParagraph("样例", { heading: HeadingLevel.HEADING_4 }));
        problem.samples.forEach((sample, index) => {
          children.push(textParagraph(`样例 ${index + 1}`));
          children.push(codeParagraph(`输入:\n${sample.input || ""}\n\n输出:\n${sample.output || ""}`));
        });
      }

      addSection(children, "提示", stripHtml(problem.hint));
      children.push(textParagraph("答案代码", { heading: HeadingLevel.HEADING_4 }));
      const solution = problem.solution || {};
      children.push(codeParagraph(solution.code || "暂无答案代码"));
    }
  }

  return new Document({
    sections: [{ properties: {}, children }]
  });
}

async function main() {
  if (!fs.existsSync(dataPath)) {
    throw new Error(`Missing data file: ${dataPath}`);
  }
  fs.mkdirSync(exportDir, { recursive: true });
  const data = loadData();
  const stamp = new Date().toISOString().replace(/[-:T]/g, "").slice(0, 12);
  const mdPath = path.join(exportDir, `xmuoj-solutions-${stamp}.md`);
  const docxPath = path.join(exportDir, `xmuoj-solutions-${stamp}.docx`);

  fs.writeFileSync(mdPath, buildMarkdown(data), "utf8");
  const buffer = await Packer.toBuffer(buildDocx(data));
  fs.writeFileSync(docxPath, buffer);

  console.log(`Markdown: ${mdPath}`);
  console.log(`Word:     ${docxPath}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
