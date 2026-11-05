/* ============================================================
   TAKUDEN — Report（活動報告書）本体
   GitHub Pages 配信・Jimdoローダーが読み込む単一ソース。
   Jimdo側:
     <div id="report-root"></div>
     <script>(function(){var s=document.createElement('script');
       s.src='https://takuden-formula.github.io/website/report/report.js?v='+Date.now();
       document.head.appendChild(s);})();</script>
   新しい号を載せるとき:
     1) report/files/ に report-NN.pdf と cover-NN.jpg（1ページ目, 幅640px）を置く
     2) 下の REPORTS の先頭に1件足す
   ============================================================ */
(function () {
  "use strict";

  var BASE = window.TAKUDEN_REPORT_BASE || "https://takuden-formula.github.io/website/report/files/";

  // 新しい号ほど上に
  var REPORTS = [
    {
      no: 5, period: "2026年5〜8月", file: "05",
      title: "新入部員の技術教育とインバータのCAN通信",
      points: ["新入部員向けの技術講習（ESP32 の電子工作・3D CAD）", "日本サーモエナー株式会社様へ活動報告", "トヨタ自動車株式会社様によるバッテリー安全講習会", "インバータとのCAN通信でモーターの回転数・温度を取得"]
    },
    {
      no: 4, period: "2026年春", file: "04",
      title: "新歓・試乗会と駆動系・バッテリーの調達",
      points: ["三和電気計器株式会社様より測定機器をご寄贈", "新歓ロードで車両「X-01」を展示", "新入生向け EV カート試乗会を開催", "リアホーシング・副変速機の調達、バッテリーユニットのご支援"]
    },
    {
      no: 3, period: "2025年10・11月", file: "03",
      title: "紅陵祭と車両のCAD化",
      points: ["紅陵祭でブルドーザー型ロボットの「お菓子取り」企画", "フレーム・モーター・インバータ・ラジエーターの CAD 化", "株式会社アイシン様のご訪問"]
    },
    {
      no: 2, period: "2025年8・9月", file: "02",
      title: "モーター・インバータの受け取りと大会スタッフ",
      points: ["株式会社デンソー様よりインバータとモーターを受け取り", "学生フォーミュラ日本大会2025に学生スタッフとして参加", "いただいたフレームの CAD 化と CAN の学習"]
    },
    {
      no: 1, period: "2025年6・7月", file: "01",
      title: "シャシーの受け取りと模擬車検会",
      points: ["高尾祭でたこ焼き販売・バイク展示", "トヨタ東京自動車大学校様よりフォーミュラシャシーをいただく", "関東支部 EV 模擬車検会に参加"]
    }
  ];

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  function card(r, i) {
    var pdf = BASE + "report-" + r.file + ".pdf";
    var img = BASE + "cover-" + r.file + ".jpg";
    var lis = r.points.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("");
    return '<article class="r-card r-reveal' + (i === 0 ? " r-latest" : "") + '">' +
      '<a class="r-cover" href="' + pdf + '" target="_blank" rel="noopener" aria-label="第' + r.no + '回活動報告書のPDFを開く（新しいタブ）">' +
        '<img loading="lazy" decoding="async" src="' + img + '" alt="第' + r.no + '回活動報告書の1ページ目">' +
      "</a>" +
      '<div class="r-body">' +
        '<p class="r-meta"><span class="r-no">No.' + (r.no < 10 ? "0" : "") + r.no + "</span>" + (i === 0 ? '<span class="r-new">LATEST</span>' : "") + "</p>" +
        '<h4 class="r-title">第' + r.no + "回 活動報告書</h4>" +
        '<p class="r-period">' + esc(r.period) + "</p>" +
        '<p class="r-sub">' + esc(r.title) + "</p>" +
        '<ul class="r-points">' + lis + "</ul>" +
        '<a class="r-btn" href="' + pdf + '" target="_blank" rel="noopener">PDFで読む<span aria-hidden="true">→</span></a>' +
      "</div>" +
    "</article>";
  }

  var HTML =
'<div id="report-wrapper">' +
  '<section class="r-section">' +
    '<div class="r-wrap">' +
      '<div class="r-head r-reveal">' +
        '<p class="r-label">Activity Report</p>' +
        '<h3 class="r-h">活動報告書</h3>' +
        '<p class="r-lead">ご支援いただいている企業の皆様へお送りしている活動報告書です。<br class="r-br">表紙を押すと PDF で全文をご覧いただけます。</p>' +
      "</div>" +
      '<div class="r-list">' + REPORTS.map(card).join("") + "</div>" +
    "</div>" +
  "</section>" +
"</div>";

  var CSS = `
html,body{overflow-x:hidden;max-width:100%;}
#report-wrapper{--r-orange:#FF5A00;--r-ink:#0f172a;--r-slate:#475569;--r-soft:#64748b;--r-border:#e2e8f0;--r-alt:#f6f7f9;font-family:"Noto Sans JP",system-ui,-apple-system,"Segoe UI",sans-serif;color:var(--r-ink);line-height:1.6;-webkit-font-smoothing:antialiased;width:100vw;max-width:100vw;margin-left:calc(50% - 50vw);overflow-x:hidden;background:#fff;}
#report-wrapper *{box-sizing:border-box;}
#report-wrapper h3,#report-wrapper h4,#report-wrapper p,#report-wrapper ul{margin:0;padding:0;}
#report-wrapper a{text-decoration:none;color:inherit;}
#report-wrapper img{display:block;max-width:100%;}
#report-wrapper .r-section{padding:clamp(56px,9vw,110px) clamp(18px,4vw,40px);}
#report-wrapper .r-wrap{max-width:1100px;margin:0 auto;}
#report-wrapper .r-head{text-align:center;margin-bottom:clamp(40px,6vw,72px);}
#report-wrapper .r-label{font-size:.8rem;font-weight:900;letter-spacing:.4em;text-transform:uppercase;color:var(--r-orange);}
#report-wrapper .r-h{font-size:clamp(2.4rem,6.5vw,5rem);font-weight:900;font-style:italic;letter-spacing:-.03em;line-height:1.05;margin:14px 0 18px;color:var(--r-ink);}
#report-wrapper .r-lead{color:var(--r-slate);font-size:clamp(.95rem,1.5vw,1.08rem);line-height:1.9;}
#report-wrapper .r-list{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:clamp(20px,3vw,32px);}
#report-wrapper .r-card{display:grid;grid-template-columns:minmax(0,150px) minmax(0,1fr);gap:clamp(16px,2.4vw,26px);align-items:start;padding:clamp(18px,2.6vw,28px);border:1px solid var(--r-border);border-radius:24px;background:#fff;box-shadow:0 10px 28px rgba(15,23,42,.05);transition:border-color .35s,box-shadow .35s,transform .35s;}
#report-wrapper .r-card:hover{border-color:var(--r-orange);box-shadow:0 18px 40px rgba(15,23,42,.1);transform:translateY(-4px);}
#report-wrapper .r-latest{grid-column:1/-1;grid-template-columns:minmax(0,260px) minmax(0,1fr);border-width:2px;border-color:var(--r-orange);background:linear-gradient(135deg,#fff 60%,#fff6ef);}
#report-wrapper .r-cover{display:block;border-radius:10px;overflow:hidden;border:1px solid var(--r-border);box-shadow:0 8px 20px rgba(15,23,42,.12);background:var(--r-alt);transition:transform .35s;}
#report-wrapper .r-cover:hover{transform:scale(1.03);}
#report-wrapper .r-cover img{width:100%;height:auto;}
#report-wrapper .r-meta{display:flex;align-items:center;gap:10px;margin-bottom:4px;}
#report-wrapper .r-no{font-size:.78rem;font-weight:900;letter-spacing:.25em;color:var(--r-orange);}
#report-wrapper .r-new{font-size:.62rem;font-weight:900;letter-spacing:.18em;padding:3px 9px;border-radius:999px;background:var(--r-orange);color:#fff;}
#report-wrapper .r-title{font-size:clamp(1.25rem,2.2vw,1.6rem);font-weight:900;font-style:italic;letter-spacing:-.01em;line-height:1.3;color:var(--r-ink);}
#report-wrapper .r-latest .r-title{font-size:clamp(1.5rem,3vw,2.2rem);}
#report-wrapper .r-period{font-weight:800;color:var(--r-ink);font-size:.95rem;margin-top:2px;}
#report-wrapper .r-sub{color:var(--r-slate);font-size:.95rem;margin-top:10px;font-weight:700;}
#report-wrapper .r-points{list-style:none;margin-top:8px;}
#report-wrapper .r-points li{position:relative;padding-left:16px;color:var(--r-slate);font-size:.9rem;line-height:1.75;}
#report-wrapper .r-points li::before{content:"";position:absolute;left:2px;top:.72em;width:6px;height:6px;border-radius:50%;background:var(--r-orange);}
#report-wrapper .r-latest .r-points li{font-size:1rem;}
#report-wrapper .r-btn{display:inline-flex;align-items:center;gap:8px;margin-top:16px;padding:9px 20px;border:2px solid var(--r-ink);border-radius:999px;font-size:.82rem;font-weight:900;letter-spacing:.1em;color:var(--r-ink);transition:.3s;}
#report-wrapper .r-btn:hover,#report-wrapper .r-btn:focus-visible{background:var(--r-ink);color:#fff;}
#report-wrapper .r-latest .r-btn{background:var(--r-orange);border-color:var(--r-orange);color:#fff;}
#report-wrapper .r-latest .r-btn:hover,#report-wrapper .r-latest .r-btn:focus-visible{background:transparent;color:var(--r-orange);}
#report-wrapper a:focus-visible{outline:3px solid var(--r-orange);outline-offset:3px;}
#report-wrapper.r-js .r-reveal{opacity:0;transform:translateY(36px);transition:opacity .8s cubic-bezier(.16,1,.3,1),transform .9s cubic-bezier(.16,1,.3,1),border-color .35s,box-shadow .35s;}
#report-wrapper.r-js .r-reveal.r-in{opacity:1;transform:none;}
@media (max-width:860px){
  #report-wrapper .r-list{grid-template-columns:1fr;}
  #report-wrapper .r-latest{grid-template-columns:minmax(0,150px) minmax(0,1fr);}
}
@media (max-width:520px){
  #report-wrapper .r-card,#report-wrapper .r-latest{grid-template-columns:1fr;}
  #report-wrapper .r-cover{max-width:220px;}
  #report-wrapper .r-br{display:none;}
}
@media (prefers-reduced-motion:reduce){#report-wrapper.r-js .r-reveal{opacity:1;transform:none;transition:none;}}`;

  function build() {
    var mount = document.getElementById("report-root") || document.getElementById("report-wrapper");
    if (!mount) return;
    if (!document.querySelector("style[data-report]")) {
      var st = document.createElement("style");
      st.setAttribute("data-report", "1");
      st.textContent = CSS;
      document.head.appendChild(st);
    }
    if (!mount.querySelector("#report-wrapper")) { mount.innerHTML = HTML; }
    var root = document.getElementById("report-wrapper");
    if (root) behavior(root);
  }

  function behavior(root) {
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var reveals = root.querySelectorAll(".r-reveal");
    root.classList.add("r-js");
    var showAll = function () { reveals.forEach(function (el) { el.classList.add("r-in"); }); };
    if (reduce || !("IntersectionObserver" in window)) { showAll(); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("r-in"); io.unobserve(e.target); } });
    }, { threshold: 0.1 });
    reveals.forEach(function (el) { io.observe(el); });
    setTimeout(function () { if (!root.querySelector(".r-reveal.r-in")) { io.disconnect(); showAll(); } }, 2500);
  }

  if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded", build); } else { build(); }
})();
