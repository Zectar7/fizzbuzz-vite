import{j as l,r as u,R as d,a}from"./vendor.3cc3332c.js";const f=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}};f();const n=l.exports.jsx;function p(){const[r,o]=u.exports.useState(1);return n("div",{className:"App",children:n("div",{className:"fizzbuzz",type:"button",onClick:()=>o(s=>s+1),children:n("div",{className:"fb-text",children:m(r)})})})}const m=r=>r%3==0&&r%5==0?"Fizz Buzz":r%3==0?"Fizz":r%5==0?"Buzz":`${r}`;d.render(n(a.StrictMode,{children:n(p,{})}),document.getElementById("root"));
