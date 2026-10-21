"use strict";
(() => {
  document.documentElement.classList.add("has-js");

  // Enhancements only: cards and native details remain readable with JS disabled.
  const cards = [...document.querySelectorAll("[data-project-category]")];
  const filters = [...document.querySelectorAll("[data-project-filter]")];
  const status = document.getElementById("fieldnotes-result");
  if (cards.length && filters.length && status) {
    const applyFilter = (category) => {
      let visible = 0;
      for (const card of cards) {
        const show = category === "all" || card.dataset.projectCategory === category;
        card.hidden = !show;
        if (show) visible++;
      }
      for (const button of filters) {
        button.setAttribute("aria-pressed", String(button.dataset.projectFilter === category));
      }
      status.textContent = visible + "件の制作メモを表示";
    };
    for (const button of filters) {
      button.addEventListener("click", () => applyFilter(button.dataset.projectFilter));
    }
  }

  // Teaching model ONLY: this is NOT a PBFT quorum or authentication simulator.
  const lab = document.querySelector("[data-fault-lab]");
  if (!lab) return;
  const nodes = [...lab.querySelectorAll("[data-node]")];
  const count = document.getElementById("demo-online-count");
  const result = document.getElementById("demo-result");
  const explanation = document.getElementById("demo-explanation");
  if (nodes.length !== 7 || !count || !result || !explanation) return;

  const setNode = (node, isOnline) => {
    node.dataset.online = String(isOnline);
    node.classList.toggle("is-offline", !isOnline);
    node.setAttribute("aria-pressed", String(isOnline));
    node.setAttribute("aria-label", "サーバー" + node.dataset.node + (isOnline ? " 稼働中" : " 停止中"));
    const small = node.querySelector("small");
    if (small) small.textContent = isOnline ? "稼働中" : "停止中";
  };
  const update = () => {
    const online = nodes.filter((node) => node.dataset.online === "true").length;
    const canContinue = online >= 4;
    count.textContent = online + " / 7 ONLINE";
    result.textContent = canContinue ? "継続できる状態です" : "継続条件を満たしません";
    result.classList.toggle("is-unavailable", !canContinue);
    explanation.textContent = canContinue
      ? online + "台が稼働。あと" + (online - 4) + "台が停止しても、この単純な条件を満たします。"
      : online + "台が稼働。あと" + (4 - online) + "台の復旧が必要です。";
  };
  for (const node of nodes) {
    setNode(node, true);
    node.addEventListener("click", () => {
      setNode(node, node.dataset.online !== "true");
      update();
    });
  }
  document.getElementById("demo-fail-three")?.addEventListener("click", () => {
    nodes.forEach((node, i) => setNode(node, i >= 3));
    update();
  });
  document.getElementById("demo-reset")?.addEventListener("click", () => {
    nodes.forEach((node) => setNode(node, true));
    update();
  });
  update();
})();
