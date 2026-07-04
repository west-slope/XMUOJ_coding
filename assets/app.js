(function () {
  const data = window.XMUOJ_SOLUTIONS_DATA || { contests: [] };
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
    contestSwitch: document.getElementById("contestSwitch"),
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
    copyCode: document.getElementById("copyCode"),
    description: document.getElementById("description"),
    inputDescription: document.getElementById("inputDescription"),
    outputDescription: document.getElementById("outputDescription"),
    samplesSection: document.getElementById("samplesSection"),
    samples: document.getElementById("samples"),
    hintSection: document.getElementById("hintSection"),
    hint: document.getElementById("hint"),
    solutionPath: document.getElementById("solutionPath"),
    solutionCode: document.getElementById("solutionCode"),
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

  function displaySolutionExt(solution) {
    if (!solution || !solution.path) return "";
    const match = String(solution.path).match(/(\.[a-z0-9]+)$/i);
    return match ? match[1] : "";
  }

  function matches(item) {
    if (String(item.contest.id) !== String(state.activeContestId)) return false;
    const hasSolution = Boolean(item.problem.solution && item.problem.solution.code);
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
        const hasSolution = Boolean(item.problem.solution && item.problem.solution.code);
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
    const solution = problem.solution || {};
    els.emptyState.hidden = true;
    els.problemView.hidden = false;
    els.contestLabel.textContent = 'Contest ' + contest.id;
    els.contestTitle.textContent = contest.title || ('Contest ' + contest.id);
    els.problemTitle.textContent = displayProblemLabel(problem);
    els.problemId.textContent = displayProblemId(problem.id) || "-";
    els.timeLimit.textContent = formatLimit(problem.timeLimit, "ms");
    els.memoryLimit.textContent = formatLimit(problem.memoryLimit, "MB");
    els.solutionLanguage.textContent = solution.language || "-";
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
    els.solutionPath.textContent = displaySolutionExt(solution);
    els.solutionPath.className = solution.code ? "" : "missing";
    const fallbackCode = "还没有参考代码,欢迎投稿!";
    els.solutionCode.innerHTML = highlightCode(solution.code || fallbackCode, solution.language);
    els.copyCode.disabled = !solution.code;
    if (els.content) els.content.scrollTop = 0;
    els.problemView.classList.remove("is-refreshing");
    window.requestAnimationFrame(() => {
      els.problemView.classList.add("is-refreshing");
    });

    if (rerenderNav) renderNav();
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
    if (!/^(c|cc|cpp|cxx)$/i.test(language || "")) return escaped;
    const parts = [];
    const stash = (className) => (match) => {
      const token = "@@HL" + parts.length + "@@";
      parts.push('<span class="tok-' + className + '">' + match + '</span>');
      return token;
    };
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
    const solvedCount = contests.reduce((total, contest) => total + (contest.problems || []).filter((problem) => problem.solution && problem.solution.code).length, 0);
    els.homeProblemCount.textContent = '共 ' + problemCount + ' 道题';
    els.homeSolvedCount.textContent = '已整理 ' + solvedCount + ' 份答案';
    els.homeUpdatedAt.textContent = data.generatedAt ? '更新于 ' + data.generatedAt : '未导入';
  }

  function renderHomeCards() {
    els.homeContestCards.innerHTML = "";
    (data.contests || []).forEach((contest) => {
      const problems = contest.problems || [];
      const solved = problems.filter((problem) => problem.solution && problem.solution.code).length;
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

  function init() {
    renderHomeStats();
    renderHomeCards();
    if (!getContest(state.activeContestId) && (data.contests || [])[0]) {
      state.activeContestId = String(data.contests[0].id);
    }
    renderContestSwitch();
    applySidebarState();
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
    els.copyCode.addEventListener("click", async () => {
      await navigator.clipboard.writeText(els.solutionCode.textContent);
      els.copyCode.textContent = "已复制";
      window.setTimeout(() => { els.copyCode.textContent = "复制代码"; }, 1200);
    });

    if (flattenProblems().length === 0) {
      els.emptyState.hidden = false;
      els.problemView.hidden = true;
      return;
    }
    renderNav();
  }

  init();
})();

