(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[332],{7276:(e,s,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(6993)}])},6993:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>n});var l=t(4848),r=t(6540);function n(){let[e,s]=(0,r.useState)(""),[t,n]=(0,r.useState)([]),[a,i]=(0,r.useState)(!0),[o,c]=(0,r.useState)("");return(0,r.useEffect)(()=>{chrome.storage.local.get(["lastSuggestions"],e=>{chrome.runtime.lastError?c("Failed to load suggestions."):e.lastSuggestions&&n(e.lastSuggestions),i(!1)});let e=(e,s,t)=>{"suggestions-updated"===e.type&&(console.log("Received suggestions in popup:",e.suggestions),n(e.suggestions||[]),i(!1),t({success:!0}))};return chrome.runtime.onMessage.addListener(e),()=>{chrome.runtime.onMessage.removeListener(e)}},[]),(0,l.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,l.jsx)("img",{src:"/icon.png",alt:"Extension Logo",className:"w-12 mb-2"}),(0,l.jsx)("h1",{children:"Welcome Back!"}),(0,l.jsx)("p",{className:"subtitle",children:"Error References at Your Fingertips"}),(0,l.jsxs)("div",{className:"input-container w-full",children:[(0,l.jsx)("label",{htmlFor:"error",className:"mb-1 text-sm",children:"Error Message:"}),(0,l.jsx)("textarea",{id:"error",value:e,disabled:!0,className:"w-full p-2 border rounded"})]}),(0,l.jsx)("div",{className:"p-4",children:a?(0,l.jsx)("p",{children:"Loading suggestions..."}):(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{className:"font-bold mb-2",children:"Suggestions"}),t.length>0?(0,l.jsx)("ul",{className:"list-disc pl-5",children:t.map((e,s)=>(0,l.jsx)("li",{className:"mb-2",children:e},s))}):(0,l.jsx)("p",{children:"No suggestions available."}),o&&(0,l.jsx)("p",{className:"text-red-500",children:o})]})})]})}}},e=>{var s=s=>e(e.s=s);e.O(0,[636,593,792],()=>s(7276)),_N_E=e.O()}]);