(function () {
  const data = window.XMUOJ_SOLUTIONS_DATA || { contests: [] };
  const bundledSolutions = window.XMUOJ_SOLUTIONS_CODE || { solutions: {} };
  const state = {
    query: "",
    filter: "all",
    activeKey: null,
    activeContestId: localStorage.getItem("xmuoj.activeContestId") || "359",
    sidebarCollapsed: localStorage.getItem("xmuoj.sidebarCollapsed") === "1"
  };

  const els = {
    generatedAt: document.getElementById("generatedAt"),
    contestList: document.getElementById("contestList"),
    searchInput: document.getElementById("searchInput"),
    clearSearch: document.getElementById("clearSearch"),
    filters: Array.from(document.querySelectorAll(".filter")),
    emptyState: document.getElementById("emptyState"),
    problemView: document.getElementById("problemView"),
    contestLabel: document.getElementById("contestLabel"),
    contestTitle: document.getElementById("contestTitle"),
    problemTitle: document.getElementById("problemTitle"),
    layout: document.getElementById("layout"),
    toggleSidebar: document.getElementById("toggleSidebar"),
    homePage: document.getElementById("homePage"),
    archiveApp: document.getElementById("archiveApp"),
    homeContestCards: document.getElementById("homeContestCards"),
    homeContribute: document.getElementById("homeContribute"),
    contestSwitch: document.getElementById("contestSwitch"),
    contributeButton: document.getElementById("contributeButton"),
    contributeModal: document.getElementById("contributeModal"),
    closeContribute: document.getElementById("closeContribute"),
    contributeHint: document.getElementById("contributeHint"),
    contributeProblem: document.getElementById("contributeProblem"),
    repoLink: document.getElementById("repoLink"),
    backHome: document.getElementById("backHome"),
    homeProblemCount: document.getElementById("homeProblemCount"),
    homeSolvedCount: document.getElementById("homeSolvedCount"),
    homeUpdatedAt: document.getElementById("homeUpdatedAt"),
    problemId: document.getElementById("problemId"),
    timeLimit: document.getElementById("timeLimit"),
    memoryLimit: document.getElementById("memoryLimit"),
    solutionLanguage: document.getElementById("solutionLanguage"),
    sourceLink: document.getElementById("sourceLink"),
    sourceInlineLink: document.getElementById("sourceInlineLink"),
    description: document.getElementById("description"),
    inputDescription: document.getElementById("inputDescription"),
    outputDescription: document.getElementById("outputDescription"),
    samplesSection: document.getElementById("samplesSection"),
    samples: document.getElementById("samples"),
    hintSection: document.getElementById("hintSection"),
    hint: document.getElementById("hint"),
    solutionList: document.getElementById("solutionList"),
    content: document.querySelector(".content")
  };

  function flattenProblems() {
    return (data.contests || []).flatMap((contest) =>
      (contest.problems || []).map((problem) => ({ contest, problem, key: contest.id + "/" + problem.id }))
    );
  }

  function getContest(contestId) {
    return (data.contests || []).find((contest) => String(contest.id) === String(contestId));
  }

  function getActiveContest() {
    return getContest(state.activeContestId) || (data.contests || [])[0];
  }

  function contestShortTitle(contest) {
    const title = contest && contest.title ? contest.title : "";
    if (String(contest && contest.id) === "359") return "剑道试炼";
    if (String(contest && contest.id) === "362") return "程序设计实践";
    return title.replace(/^2026年/, "").replace(/\(.+\)$/, "") || ("Contest " + contest.id);
  }

  function contestClassLabel(contest) {
    const title = contest && contest.title ? contest.title : "";
    const match = title.match(/\(([^)]+)\)/);
    return match ? match[1] : "XMUOJ";
  }

  function contestDescription(contest) {
    if (String(contest && contest.id) === "359") return "校外实训一题库，包含剑道试炼题面与西坡整理的参考代码。";
    if (String(contest && contest.id) === "362") return "程序设计实践例题题库，适合按算法专题继续练习。";
    return "题面、样例和参考代码归档。";
  }

  function textOf(value) {
    const div = document.createElement("div");
    div.innerHTML = value || "";
    return div.textContent || div.innerText || "";
  }

  function displayProblemId(id) {
    return String(id || "").replace(/^JD(\d+)$/i, "$1");
  }

  function displayProblemLabel(problem) {
    return [displayProblemId(problem.id), problem.title || "Untitled"].filter(Boolean).join(" ");
  }

  function normalizeSolutionPath(path) {
    return String(path || "").replace(/\\/g, "/").replace(/^\.\//, "");
  }

  function languageFromPath(path) {
    const ext = (String(path || "").match(/\.([a-z0-9]+)$/i) || [])[1] || "";
    const map = { cc: "cpp", cxx: "cpp", hpp: "cpp", py: "python" };
    return map[ext.toLowerCase()] || ext.toLowerCase();
  }

  function solutionCandidates(contest, problem) {
    const solution = problem.solution || {};
    const seen = new Set();
    const candidates = [];
    const add = (path) => {
      const normalized = normalizeSolutionPath(path);
      if (!normalized || seen.has(normalized)) return;
      seen.add(normalized);
      candidates.push(normalized);
    };
    const contestId = String(contest && contest.id || "");
    const problemId = String(problem && problem.id || "");
    const displayId = displayProblemId(problemId);
    const bases = [problemId, displayId].filter(Boolean);
    const exts = ["cpp", "cc", "cxx", "c", "py", "java", "js", "ts", "go", "rs", "kt"];
    bases.forEach((base) => exts.forEach((ext) => add("solutions/" + contestId + "/" + base + "." + ext)));
    add(solution.path);
    return candidates;
  }

  function hasUsableCode(code) {
    const normalized = String(code || "").trim();
    return normalized !== "" && normalized !== "// TODO";
  }

  function hydrateBundledSolutions() {
    for (const contest of data.contests || []) {
      const contestSolutions = bundledSolutions.solutions && bundledSolutions.solutions[String(contest.id)] || {};
      for (const problem of contest.problems || []) {
        const problemId = String(problem.id || "");
        const displayId = displayProblemId(problemId);
        const value = contestSolutions[problemId] || contestSolutions[displayId];
        const bundled = (Array.isArray(value) ? value : [value]).find((item) => item && hasUsableCode(item.code));
        if (!bundled) continue;
        problem.solutionStatus = "loaded";
        problem.solution = {
          path: normalizeSolutionPath(bundled.path || (problem.solution && problem.solution.path)),
          language: languageFromPath(bundled.path) || bundled.language || (problem.solution && problem.solution.language),
          code: bundled.code
        };
      }
    }
  }
  function findBundledSolutions(contest, problem) {
    const contestSolutions = bundledSolutions.solutions && bundledSolutions.solutions[String(contest && contest.id)] || {};
    const problemId = String(problem && problem.id || "");
    const value = contestSolutions[problemId] || contestSolutions[displayProblemId(problemId)] || [];
    return (Array.isArray(value) ? value : [value]).filter((item) => item && hasUsableCode(item.code)).sort((a, b) => (a.variant || 1) - (b.variant || 1));
  }
  function loadSolutionCodes(contest, problem) {
    const bundled = findBundledSolutions(contest, problem);
    if (bundled.length) {
      problem.solutionStatus = "loaded";
      problem.solution = bundled[0];
      return bundled;
    }

    const solution = problem.solution || {};
    if (hasUsableCode(solution.code)) {
      problem.solutionStatus = "loaded";
      return [solution];
    }

    problem.solutionStatus = "missing";
    return [];
  }

  function hasKnownSolution(problem) {
    return Boolean(problem.solution && hasUsableCode(problem.solution.code));
  }

  function refreshSolutionStatuses() {
    const items = flattenProblems();
    items.forEach(({ contest, problem }) => {
      const solutions = loadSolutionCodes(contest, problem);
      problem.solutionStatus = solutions.length ? "loaded" : "missing";
    });
    renderHomeStats();
    renderHomeCards();
    renderNav();
    if (state.activeKey) showProblem(state.activeKey, false);
  }
  function displaySolutionExt(solution) {
    if (!solution || !solution.path) return "";
    const match = String(solution.path).match(/(\.[a-z0-9]+)$/i);
    return match ? match[1] : "";
  }

  function matches(item) {
    if (String(item.contest.id) !== String(state.activeContestId)) return false;
    const hasSolution = hasKnownSolution(item.problem);
    if (state.filter === "solved" && !hasSolution) return false;
    if (state.filter === "missing" && hasSolution) return false;
    if (!state.query) return true;
    const haystack = [
      item.contest.title,
      item.problem.id,
      item.problem.title,
      textOf(item.problem.description),
      item.problem.solution && item.problem.solution.code
    ].filter(Boolean).join("\n").toLowerCase();
    return haystack.includes(state.query.toLowerCase());
  }

  function renderNav() {
    const items = flattenProblems().filter(matches);
    const byContest = new Map();
    items.forEach((item) => {
      if (!byContest.has(item.contest.id)) byContest.set(item.contest.id, []);
      byContest.get(item.contest.id).push(item);
    });

    els.contestList.innerHTML = "";
    byContest.forEach((contestItems) => {
      const contest = contestItems[0].contest;
      const group = document.createElement("section");
      group.className = "contest-group";

      const title = document.createElement("div");
      title.className = "contest-title";
      title.innerHTML = '<span>' + escapeHtml(contest.title || ('Contest ' + contest.id)) + '</span><span>' + contestItems.length + '</span>';
      group.appendChild(title);

      const nav = document.createElement("div");
      nav.className = "problem-nav";
      contestItems.forEach((item) => {
        const button = document.createElement("button");
        button.type = "button";
        button.dataset.key = item.key;
        const hasSolution = hasKnownSolution(item.problem);
        button.className = "problem-link" + (item.key === state.activeKey ? " is-active" : "") + (hasSolution ? " has-solution" : " is-missing");
        button.innerHTML = '<span>' + escapeHtml(displayProblemLabel(item.problem)) + '</span><small>' + (hasSolution ? "有" : "缺") + '</small>';
        button.addEventListener("click", () => showProblem(item.key));
        nav.appendChild(button);
      });
      group.appendChild(nav);
      els.contestList.appendChild(group);
    });

    if (!state.activeKey && items.length) showProblem(items[0].key, false);
    if (state.activeKey && !items.some((item) => item.key === state.activeKey) && items.length) showProblem(items[0].key, false);
  }

  function showProblem(key, rerenderNav = true) {
    const item = flattenProblems().find((entry) => entry.key === key);
    if (!item) return;
    state.activeKey = key;
    state.activeContestId = String(item.contest.id);
    localStorage.setItem("xmuoj.activeContestId", state.activeContestId);

    const { contest, problem } = item;
    const solutions = loadSolutionCodes(contest, problem);
    const solution = solutions[0] || {};
    els.emptyState.hidden = true;
    els.problemView.hidden = false;
    els.contestLabel.textContent = 'Contest ' + contest.id;
    els.contestTitle.textContent = contest.title || ('Contest ' + contest.id);
    els.problemTitle.textContent = displayProblemLabel(problem);
    els.problemId.textContent = displayProblemId(problem.id) || "-";
    els.timeLimit.textContent = formatLimit(problem.timeLimit, "ms");
    els.memoryLimit.textContent = formatLimit(problem.memoryLimit, "MB");
    els.solutionLanguage.textContent = [...new Set(solutions.map((item) => item.language).filter(Boolean))].join(" / ") || "-";
    const sourceUrl = problem.url || ('http://www.xmuoj.com/contest/' + contest.id + '/problem/' + problem.id + '/');
    els.sourceLink.href = sourceUrl;
    els.sourceInlineLink.href = sourceUrl;
    els.sourceInlineLink.textContent = 'XMUOJ Contest ' + contest.id + ' / ' + (problem.id || displayProblemId(problem.id) || "-");
    setHtml(els.description, problem.description);
    setHtml(els.inputDescription, problem.inputDescription);
    setHtml(els.outputDescription, problem.outputDescription);
    setHtml(els.hint, problem.hint);
    els.hintSection.hidden = !textOf(problem.hint);
    renderSamples(problem.samples || []);
    try {
      renderSolutions(solutions);
    } catch (error) {
      console.error("参考代码渲染失败", error);
      if (els.solutionList) {
        els.solutionList.innerHTML = '<pre class="code-block missing-code">参考代码暂时无法显示，请刷新页面。</pre>';
      }
    }
    els.contributeHint.hidden = false;
    els.contributeHint.classList.toggle("has-code", solutions.length > 0);
    els.contributeHint.querySelector("span").textContent = solutions.length ? "若有更好的解法，欢迎投稿本题。" : "还没有参考代码,欢迎投稿!";
    els.contributeProblem.dataset.problemId = problem.id || "";
    els.contributeProblem.dataset.contestId = contest.id || "";
    if (els.content) els.content.scrollTop = 0;
    els.problemView.classList.remove("is-refreshing");
    window.requestAnimationFrame(() => {
      els.problemView.classList.add("is-refreshing");
    });

    if (rerenderNav) {
      document.querySelectorAll(".problem-link").forEach((button) => {
        button.classList.toggle("is-active", button.dataset.key === state.activeKey);
      });
    }
  }

  function setHtml(el, html) {
    el.innerHTML = html || '<span class="missing">暂无内容</span>';
  }

  function renderSamples(samples) {
    els.samples.innerHTML = "";
    els.samplesSection.hidden = samples.length === 0;
    samples.forEach((sample, index) => {
      const wrap = document.createElement("div");
      wrap.className = "sample-grid";
      wrap.innerHTML = '<div><div class="sample-title"><h4>输入样例 ' + (index + 1) + '</h4></div><pre class="sample-box"><code>' + escapeHtml(sample.input || "") + '</code></pre></div><div><div class="sample-title"><h4>输出样例 ' + (index + 1) + '</h4></div><pre class="sample-box"><code>' + escapeHtml(sample.output || "") + '</code></pre></div>';
      els.samples.appendChild(wrap);
    });
  }

  function formatLimit(value, unit) {
    if (value === null || value === undefined || value === "") return "-";
    return value + " " + unit;
  }

  function escapeHtml(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function highlightCode(code, language) {
    const escaped = escapeHtml(code || "");
    const normalizedLanguage = String(language || "").toLowerCase();
    const parts = [];
    const stash = (className) => (match) => {
      const token = "@@HL" + parts.length + "@@";
      parts.push('<span class="tok-' + className + '">' + match + '</span>');
      return token;
    };

    if (/^(py|python|python3)$/.test(normalizedLanguage)) {
      let html = escaped
        .replace(/&quot;&quot;&quot;[\s\S]*?&quot;&quot;&quot;/g, stash("string"))
        .replace(/&#039;&#039;&#039;[\s\S]*?&#039;&#039;&#039;/g, stash("string"))
        .replace(/&quot;(?:\\.|[^&])*?&quot;/g, stash("string"))
        .replace(/&#039;(?:\\.|[^&])*?&#039;/g, stash("string"))
        .replace(/#[^\n]*/g, stash("comment"));
      html = html
        .replace(/\b(False|None|True|and|as|assert|async|await|break|class|continue|def|del|elif|else|except|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|raise|return|try|while|with|yield|match|case)\b/g, '<span class="tok-keyword">$1</span>')
        .replace(/\b(abs|all|any|bin|bool|bytearray|bytes|callable|chr|classmethod|compile|complex|dict|dir|divmod|enumerate|eval|exec|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|isinstance|issubclass|iter|len|list|locals|map|max|memoryview|min|next|object|oct|open|ord|pow|print|property|range|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|vars|zip|__name__)\b/g, '<span class="tok-builtin">$1</span>')
        .replace(/\b(?:0[xX][0-9a-fA-F]+|0[bB][01]+|0[oO][0-7]+|\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)\b/g, '<span class="tok-number">$&</span>');
      return html.replace(/@@HL(\d+)@@/g, (_, index) => parts[Number(index)]);
    }

    if (!/^(c|cc|cpp|cxx)$/.test(normalizedLanguage)) return escaped;
    let html = escaped
      .replace(/\/\/[^\n]*/g, stash("comment"))
      .replace(/\/\*[\s\S]*?\*\//g, stash("comment"))
      .replace(/&quot;(?:\\.|[^&])*?&quot;/g, stash("string"))
      .replace(/&#039;(?:\\.|[^&])*?&#039;/g, stash("string"));
    html = html
      .replace(/^\s*#\s*\w+.*/gm, stash("preprocessor"))
      .replace(/\b(alignas|alignof|and|asm|auto|bool|break|case|catch|char|class|const|constexpr|continue|default|delete|do|double|else|enum|explicit|extern|false|float|for|friend|goto|if|inline|int|long|namespace|new|nullptr|operator|private|protected|public|return|short|signed|sizeof|static|struct|switch|template|this|throw|true|try|typedef|typename|union|unsigned|using|virtual|void|volatile|while)\b/g, '<span class="tok-keyword">$1</span>')
      .replace(/\b(std|cin|cout|cerr|endl|string|vector|map|set|queue|stack|priority_queue|pair|sort|max|min|swap|sqrt|pow|printf|scanf)\b/g, '<span class="tok-builtin">$1</span>')
      .replace(/\b\d+(?:\.\d+)?\b/g, '<span class="tok-number">$&</span>');
    return html.replace(/@@HL(\d+)@@/g, (_, index) => parts[Number(index)]);
  }

  function applySidebarState() {
    els.layout.classList.toggle("sidebar-collapsed", state.sidebarCollapsed);
    els.toggleSidebar.textContent = state.sidebarCollapsed ? "›" : "‹";
    els.toggleSidebar.title = state.sidebarCollapsed ? "展开侧栏" : "收起侧栏";
  }

  function renderHomeStats() {
    const contests = data.contests || [];
    const problemCount = contests.reduce((total, contest) => total + ((contest.problems || []).length), 0);
    const solvedCount = contests.reduce((total, contest) => total + (contest.problems || []).filter(hasKnownSolution).length, 0);
    els.homeProblemCount.textContent = '共 ' + problemCount + ' 道题';
    els.homeSolvedCount.textContent = '已整理 ' + solvedCount + ' 份答案';
    els.homeUpdatedAt.textContent = data.generatedAt ? '更新于 ' + data.generatedAt : '未导入';
  }

  function renderHomeCards() {
    els.homeContestCards.innerHTML = "";
    (data.contests || []).forEach((contest) => {
      const problems = contest.problems || [];
      const solved = problems.filter(hasKnownSolution).length;
      const button = document.createElement("button");
      button.type = "button";
      button.className = "home-contest-card";
      button.innerHTML =
        '<small>CONTEST ' + escapeHtml(contest.id) + '</small>' +
        '<strong>' + escapeHtml(contestShortTitle(contest)) + '</strong>' +
        '<p>' + escapeHtml(contestDescription(contest)) + '</p>' +
        '<div class="home-card-meta"><span>' + problems.length + ' 道题</span><span>' + solved + ' 份答案</span><span>' + escapeHtml(contestClassLabel(contest)) + '</span></div>';
      button.addEventListener("click", () => selectContest(contest.id, true));
      els.homeContestCards.appendChild(button);
    });
  }

  function renderContestSwitch() {
    els.contestSwitch.innerHTML = "";
    (data.contests || []).forEach((contest) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = String(contest.id) === String(state.activeContestId) ? "is-active" : "";
      button.textContent = contestShortTitle(contest);
      button.addEventListener("click", () => selectContest(contest.id, false));
      els.contestSwitch.appendChild(button);
    });
  }

  function selectContest(contestId, enterArchive) {
    const contest = getContest(contestId) || getActiveContest();
    if (!contest) return;
    state.activeContestId = String(contest.id);
    state.activeKey = null;
    localStorage.setItem("xmuoj.activeContestId", state.activeContestId);
    state.query = "";
    els.searchInput.value = "";
    renderContestSwitch();
    renderNav();
    if (enterArchive) showArchive();
  }

  function showArchive() {
    els.homePage.hidden = true;
    els.archiveApp.hidden = false;
    document.body.classList.add("is-archive");
  }

  function showHome() {
    els.archiveApp.hidden = true;
    els.homePage.hidden = false;
    document.body.classList.remove("is-archive");
  }

  function showContribute() {
    els.contributeModal.hidden = false;
  }

  function hideContribute() {
    els.contributeModal.hidden = true;
  }

  function init() {
    renderHomeStats();
    renderHomeCards();
    if (!getContest(state.activeContestId) && (data.contests || [])[0]) {
      state.activeContestId = String(data.contests[0].id);
    }
    renderContestSwitch();
    applySidebarState();
    els.homeContribute.addEventListener("click", showContribute);
    els.contributeButton.addEventListener("click", showContribute);
    els.contributeProblem.addEventListener("click", showContribute);
    els.closeContribute.addEventListener("click", hideContribute);
    els.contributeModal.addEventListener("click", (event) => {
      if (event.target === els.contributeModal) hideContribute();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !els.contributeModal.hidden) hideContribute();
    });
    els.backHome.addEventListener("click", showHome);
    els.toggleSidebar.addEventListener("click", () => {
      state.sidebarCollapsed = !state.sidebarCollapsed;
      localStorage.setItem("xmuoj.sidebarCollapsed", state.sidebarCollapsed ? "1" : "0");
      applySidebarState();
    });
    els.generatedAt.textContent = data.generatedAt ? '更新于 ' + data.generatedAt : "未导入";
    els.searchInput.addEventListener("input", (event) => {
      state.query = event.target.value.trim();
      renderNav();
    });
    els.clearSearch.addEventListener("click", () => {
      state.query = "";
      els.searchInput.value = "";
      renderNav();
    });
    els.filters.forEach((button) => {
      button.addEventListener("click", () => {
        state.filter = button.dataset.filter;
        els.filters.forEach((item) => item.classList.toggle("is-active", item === button));
        renderNav();
      });
    });

    if (flattenProblems().length === 0) {
      els.emptyState.hidden = false;
      els.problemView.hidden = true;
      return;
    }
    hydrateBundledSolutions();
    renderHomeStats();
    renderHomeCards();
    renderNav();

    // --- Announcement panel ---
    initAnnouncement();
  }

  function initAnnouncement() {
    const toggle = document.getElementById("announcementToggle");
    const body = document.getElementById("announcementBody");
    const content = document.getElementById("announcementContent");
    if (!toggle || !body || !content) return;

    fetch("./assets/announcement.md?v=20260712-1")
      .then(function (r) {
        if (!r.ok) throw new Error("Not found");
        return r.text();
      })
      .then(function (md) {
        content.innerHTML = renderMarkdown(md);
      })
      .catch(function () {
        var panel = document.getElementById("announcementPanel");
        if (panel) panel.style.display = "none";
      });

    toggle.addEventListener("click", function () {
      var isOpen = body.classList.toggle("is-open");
      toggle.classList.toggle("is-open", isOpen);
      toggle.title = isOpen ? "收起公告" : "公告";
      if (isOpen) {
        toggle.querySelector(".toggle-label").textContent = "收起";
      } else {
        toggle.querySelector(".toggle-label").textContent = "公告";
      }
    });
  }

  function renderMarkdown(text) {
    var html = text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/^### (.+)$/gm, "<h3>$1</h3>")
      .replace(/^## (.+)$/gm, "<h2>$1</h2>")
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/`([^`]+)`/g, "<code>$1</code>")
      .replace(/^- (.+)$/gm, "<li>$1</li>");
    html = html.replace(/(<li>.*<\/li>\n?)+/g, function (m) { return "<ul>" + m.replace(/\n$/, "") + "</ul>"; });
    html = html.replace(/\n\n/g, "</p><p>");
    return "<p>" + html + "</p>";
  }

  init();
})();



