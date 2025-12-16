"use strict";
console.log("script.js loaded ✅");

// Part 1 — Main content
const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
mainEl.classList.add("flex-ctr");
// NOTE: styles.css doesn't include .flex-ctr in this workspace,
// so we apply the equivalent centering styles here (static only).
mainEl.style.display = "flex";
mainEl.style.justifyContent = "center";
mainEl.style.alignItems = "center";
