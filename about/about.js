/* ============================================================
   TAKUDEN — About us 本体
   GitHub Pages 配信・Jimdoローダーが読み込む単一ソース。
   Jimdo側:
     <div id="about-root"></div>
     <script>(function(){var s=document.createElement('script');
       s.src='https://takuden-formula.github.io/website/about/about.js?v='+Date.now();
       document.head.appendChild(s);})();</script>
   ============================================================ */
(function () {
  "use strict";

  var ABOUT = {
    lead: "拓殖大学電気自動車同好会（TAKUDEN FORMULA）は、八王子国際キャンパスを拠点に、電気で走るフォーミュラカーを自分たちの手で設計・製作しているチームです。学生フォーミュラ日本大会2027への初参戦を目指し、企業の皆様のご支援をいただきながら、設計・解析・加工・電子回路・制御まで一台のマシンに取り組んでいます。",
    facts: [["活動開始", "1994"], ["部員", "約15名"], ["活動日", "水・金"], ["目標", "2027"]],
    machineLead: "トヨタ東京自動車大学校様から譲り受けたスチールパイプフレームを土台に、2027年の大会規則に合わせて設計を進めています。3Dモデルは設計中のフレーム（V4）と足回りです。",
    machine: [
      ["FRAME", "スチールパイプ・スペースフレーム（設計中 V4）"],
      ["MOTOR / INVERTER", "株式会社デンソー様からご貸与の車載用モーター・インバータ"],
      ["BATTERY", "トヨタ自動車様からご貸与のリチウムイオン電池モジュール8台を直列"],
      ["COOLING", "アイシン様の電動ウォーターポンプによる水冷（設計中）"],
      ["CONTROL", "車両制御装置（VCU）と電池監視装置（AMS）を自作し、CANで通信"],
      ["TIRE", "14インチ"]
    ],
    teams: [
      ["機械", "フレーム・足回り・駆動系の設計。CADと強度解析で形を決め、溶接や加工まで自分たちで行います。"],
      ["電気・制御", "高電圧回路、電池の監視、車両の制御プログラム、CAN通信を担当します。"],
      ["広報・運営", "SNS・活動報告書・スポンサー対応・イベント出展など、チームの活動を社会へ伝えます。"]
    ],
    road: [
      ["2025", "フレームの入手、モーター・インバータのご貸与", false],
      ["2026", "高電圧システムの構築、モーター回転試験", true],
      ["2027 春", "車両の完成と初走行（シェイクダウン）が目標", false],
      ["2027.08", "学生フォーミュラ日本大会2027 初参戦", false]
    ]
  };

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  function html() {
    return '<div id="about-wrapper">' +
    '<section class="a-hero"><div class="a-wrap a-reveal">' +
      '<p class="a-label">About us</p>' +
      '<h2 class="a-display">挑戦した分だけ、<br><span class="a-accent">強くなる。</span></h2>' +
      '<p class="a-lead">' + esc(ABOUT.lead) + '</p>' +
      '<ul class="a-facts">' + ABOUT.facts.map(function (f) { return '<li><b>' + esc(f[1]) + '</b><span>' + esc(f[0]) + '</span></li>'; }).join("") + '</ul>' +
    '</div></section>' +

    '<section class="a-sec a-alt"><div class="a-wrap">' +
      '<div class="a-head a-reveal"><p class="a-label">Machine</p><h3 class="a-display a-h">2027年大会に向けたマシン</h3><p class="a-sub">' + esc(ABOUT.machineLead) + '</p></div>' +
      '<div class="a-machine">' +
        '<div class="a-viewer a-reveal"><iframe src="https://takuden-formula.github.io/website/viewer/" loading="lazy" allowfullscreen title="TAKUDEN 2027 車両フレームV4 3Dビューアー"></iframe></div>' +
        '<ul class="a-spec a-reveal">' + ABOUT.machine.map(function (m) { return '<li><span>' + esc(m[0]) + '</span><b>' + esc(m[1]) + '</b></li>'; }).join("") + '</ul>' +
      '</div>' +
    '</div></section>' +

    '<section class="a-sec"><div class="a-wrap">' +
      '<div class="a-head a-reveal"><p class="a-label">Team</p><h3 class="a-display a-h">チームの体制</h3></div>' +
      '<ul class="a-teams">' + ABOUT.teams.map(function (t, i) { return '<li class="a-reveal"><span class="a-num">0' + (i + 1) + '</span><h4>' + esc(t[0]) + '</h4><p>' + esc(t[1]) + '</p></li>'; }).join("") + '</ul>' +
    '</div></section>' +

    '<section class="a-sec a-alt"><div class="a-wrap">' +
      '<div class="a-head a-reveal"><p class="a-label">Roadmap</p><h3 class="a-display a-h">大会出場までの道のり</h3></div>' +
      '<ol class="a-road">' + ABOUT.road.map(function (r) { return '<li class="a-reveal' + (r[2] ? " a-cur" : "") + '"><p class="a-yr">' + esc(r[0]) + '</p><p>' + esc(r[1]) + '</p></li>'; }).join("") + '</ol>' +
    '</div></section>' +

    '<section class="a-sec"><div class="a-wrap"><div class="a-cta a-reveal">' +
      '<h3 class="a-display">一緒にマシンをつくろう。</h3>' +
      '<p>学部・学年・経験は問いません。見学はいつでも歓迎です。</p>' +
      '<div class="a-btns"><a class="a-btn" href="https://takuden.jimdofree.com/join-us/">Join Us<span aria-hidden="true"> →</span></a><a class="a-btn a-btn-ghost" href="https://takuden.jimdofree.com/sponsors/">ご支援企業の皆様<span aria-hidden="true"> →</span></a></div>' +
    '</div></div></section>' +
    '</div>';
  }

  var CSS = [
"#about-wrapper{--a-orange:#FF6B00;--a-orange-deep:#c2410c;--a-ink:#0f172a;--a-slate:#475569;--a-border:#e2e8f0;--a-bg-alt:#f6f7f9;font-family:\"Noto Sans JP\",system-ui,-apple-system,\"Segoe UI\",sans-serif;color:var(--a-ink);line-height:1.75;-webkit-font-smoothing:antialiased;width:100vw;max-width:100vw;margin-left:calc(50% - 50vw);overflow-x:hidden;}",
"#about-wrapper *{box-sizing:border-box;}",
"#about-wrapper h2,#about-wrapper h3,#about-wrapper h4{color:var(--a-ink);font-family:inherit;text-transform:none;text-align:inherit;background:none;border:0;}",
"#about-wrapper h2,#about-wrapper h3,#about-wrapper h4,#about-wrapper p,#about-wrapper ul,#about-wrapper ol{margin:0;padding:0;}",
"#about-wrapper ul,#about-wrapper ol{list-style:none;}",
"#about-wrapper a{text-decoration:none;color:inherit;}",
"#about-wrapper .a-wrap{max-width:1160px;margin:0 auto;padding:0 clamp(16px,5vw,40px);}",
"#about-wrapper .a-label{font-size:.8rem;font-weight:900;letter-spacing:.4em;text-transform:uppercase;color:var(--a-orange-deep);}",
"#about-wrapper .a-display{font-weight:900;font-style:italic;letter-spacing:-.03em;line-height:1.12;}",
"#about-wrapper .a-accent{color:var(--a-orange);}",
"#about-wrapper .a-hero{padding:clamp(64px,10vw,120px) 0 clamp(48px,7vw,80px);text-align:center;}",
"#about-wrapper .a-hero .a-display{font-size:clamp(2.4rem,7vw,5rem);margin:14px 0 24px;}",
"#about-wrapper .a-lead{max-width:760px;margin:0 auto;color:var(--a-slate);font-size:clamp(1rem,1.7vw,1.15rem);}",
"#about-wrapper .a-facts{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;max-width:900px;margin:clamp(32px,5vw,48px) auto 0;}",
"#about-wrapper .a-facts li{background:var(--a-bg-alt);border:1px solid var(--a-border);border-radius:18px;padding:18px 10px;display:flex;flex-direction:column;gap:2px;}",
"#about-wrapper .a-facts b{font-size:clamp(1.4rem,3vw,2rem);font-weight:900;font-style:italic;color:var(--a-orange-deep);line-height:1.2;}",
"#about-wrapper .a-facts span{font-size:.85rem;color:var(--a-slate);}",
"#about-wrapper .a-sec{padding:clamp(56px,8vw,100px) 0;}",
"#about-wrapper .a-alt{background:var(--a-bg-alt);}",
"#about-wrapper .a-head{margin-bottom:clamp(28px,4vw,44px);}",
"#about-wrapper .a-h{font-size:clamp(1.8rem,4.4vw,3rem);margin-top:10px;}",
"#about-wrapper .a-sub{margin-top:12px;color:var(--a-slate);max-width:760px;}",
"#about-wrapper .a-machine{display:grid;grid-template-columns:1.6fr 1fr;gap:clamp(20px,3vw,36px);align-items:start;}",
"#about-wrapper .a-viewer{position:relative;aspect-ratio:16/11;border-radius:24px;overflow:hidden;border:1px solid var(--a-border);box-shadow:0 18px 44px rgba(15,23,42,.12);background:#eef1f4;}",
"#about-wrapper .a-viewer iframe{position:absolute;inset:0;width:100%;height:100%;border:0;}",
"#about-wrapper .a-spec{background:#fff;border:1px solid var(--a-border);border-radius:24px;padding:8px 22px;}",
"#about-wrapper .a-spec li{display:flex;flex-direction:column;padding:14px 0;border-bottom:1px solid var(--a-border);}",
"#about-wrapper .a-spec li:last-child{border-bottom:0;}",
"#about-wrapper .a-spec span{font-size:.78rem;font-weight:700;letter-spacing:.12em;color:var(--a-orange-deep);}",
"#about-wrapper .a-spec b{font-size:1rem;font-weight:700;}",
"#about-wrapper .a-teams{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:18px;}",
"#about-wrapper .a-teams li{border:1px solid var(--a-border);border-radius:22px;padding:22px 24px;background:#fff;}",
"#about-wrapper .a-num{font-size:.85rem;font-weight:900;color:var(--a-orange);letter-spacing:.1em;}",
"#about-wrapper .a-teams h4{font-size:1.2rem;font-weight:900;margin:6px 0 6px;}",
"#about-wrapper .a-teams p{color:var(--a-slate);font-size:.96rem;}",
"#about-wrapper .a-road{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:16px;}",
"#about-wrapper .a-road li{background:#fff;border:1px solid var(--a-border);border-top:4px solid #cbd5e1;border-radius:18px;padding:18px 20px;}",
"#about-wrapper .a-road li.a-cur{border-top-color:var(--a-orange);box-shadow:0 12px 30px rgba(255,107,0,.12);}",
"#about-wrapper .a-yr{font-size:1.4rem;font-weight:900;font-style:italic;margin-bottom:6px;}",
"#about-wrapper .a-road li p:last-child{color:var(--a-slate);font-size:.95rem;}",
"#about-wrapper .a-cta{background:#0f172a;color:#fff;border-radius:32px;padding:clamp(32px,6vw,64px);text-align:center;}",
"#about-wrapper .a-cta .a-display{font-size:clamp(1.8rem,4.5vw,3rem);color:#fff;}",
"#about-wrapper .a-cta>p{margin:14px 0 26px;color:#cbd5e1;}",
"#about-wrapper .a-btns{display:flex;gap:12px;justify-content:center;flex-wrap:wrap;}",
"#about-wrapper .a-btn{display:inline-block;background:var(--a-orange);color:#fff;font-weight:900;padding:14px 28px;border-radius:999px;transition:background .3s,transform .3s;}",
"#about-wrapper .a-btn:hover,#about-wrapper .a-btn:focus-visible{background:#ea580c;transform:translateY(-2px);}",
"#about-wrapper .a-btn-ghost{background:transparent;border:2px solid rgba(255,255,255,.4);}",
"#about-wrapper .a-btn-ghost:hover,#about-wrapper .a-btn-ghost:focus-visible{background:rgba(255,255,255,.1);}",
"#about-wrapper a:focus-visible{outline:3px solid var(--a-orange);outline-offset:3px;}",
"#about-wrapper.a-js .a-reveal{opacity:0;transform:translateY(28px);transition:opacity .8s cubic-bezier(.16,1,.3,1),transform .9s cubic-bezier(.16,1,.3,1);}",
"#about-wrapper.a-js .a-reveal.a-in{opacity:1;transform:none;}",
"@media (max-width:860px){#about-wrapper .a-machine{grid-template-columns:1fr;}#about-wrapper .a-facts{grid-template-columns:repeat(2,1fr);}#about-wrapper .a-viewer{aspect-ratio:4/3;}}",
"@media (prefers-reduced-motion:reduce){#about-wrapper.a-js .a-reveal{opacity:1;transform:none;transition:none;}}"
  ].join("\n");

  function build() {
    var mount = document.getElementById("about-root");
    if (!mount) return;
    if (!document.querySelector("style[data-about]")) {
      var st = document.createElement("style"); st.setAttribute("data-about", "1"); st.textContent = CSS; document.head.appendChild(st);
    }
    if (!mount.querySelector("#about-wrapper")) mount.innerHTML = html();
    var root = document.getElementById("about-wrapper");
    var els = root.querySelectorAll(".a-reveal");
    var show = function () { els.forEach(function (el) { el.classList.add("a-in"); }); };
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) { show(); return; }
    root.classList.add("a-js");
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("a-in"); io.unobserve(e.target); } }); }, { threshold: 0.1 });
    els.forEach(function (el) { io.observe(el); });
    setTimeout(function () { if (!root.querySelector(".a-in")) show(); }, 2500);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", build); else build();
})();
