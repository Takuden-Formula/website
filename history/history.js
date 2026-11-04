/* ============================================================
   TAKUDEN — History（沿革）本体
   GitHub Pages 配信・Jimdoローダーが読み込む単一ソース。
   Jimdo側:
     <div id="history-root"></div>
     <script>(function(){var s=document.createElement('script');
       s.src='https://takuden-formula.github.io/website/history/history.js?v='+Date.now();
       document.head.appendChild(s);})();</script>
   出来事を足すときは TIMELINE 配列の末尾に1件足す（古い→新しい）。
   ============================================================ */
(function () {
  "use strict";

  /* y: 年 / t: 見出し / d: 説明 / now: 現在の取り組みなら true */
  var TIMELINE = [
    { y: "1994", t: "愛好会として発足", d: "電気自動車づくりを楽しむ愛好会としてスタートしました。" },
    { y: "これまで", t: "電動カー・電動バイクの製作、EVラリーへの出場", d: "四国EVラリーへの出場や、電動カー・電動バイクの製作など、数多くのプロジェクトに取り組みました。" },
    { y: "2023", t: "学生フォーミュラ日本大会への出場を目標に", d: "次の挑戦として、学生フォーミュラ日本大会（EVクラス）への出場を目標に掲げました。" },
    { y: "2024", t: "活動30周年・参戦計画が始動", d: "活動開始から30年の節目。フレーム・回路・広報会計・イベントの部門をつくり、参戦に向けた体制を整えました。日本EVフェスティバルなどのイベントでもスタッフとして活動しています。" },
    { y: "2025", t: "チーム「Takuden Formula」発足", d: "株式会社デンソー様からモーター・インバータを、トヨタ東京自動車大学校様からフォーミュラのシャシーをお譲りいただきました。学生フォーミュラ日本大会2025には学生スタッフとして参加。年末にはトヨタ自動車様から電池モジュールのご支援が決まり、自動車技術会のEV技術交流会で活動を発表しました。" },
    { y: "2026", t: "車両の心臓部が動き出す", d: "学内でEV試乗体験会を開催。三和電気計器様・アイシン様・トヨタ自動車様から技術指導や講習をいただきました。8月にインバータとのCAN通信、10月にモーターの無負荷回転試験に成功。新しいチームロゴも制定しました。" },
    { y: "2026.11–", t: "新体制で2027年大会へ", d: "新しい執行部のもと、高電圧回路の追加とフレームの設計・溶接を進めています。", now: true },
    { y: "2027.08", t: "学生フォーミュラ日本大会2027 初参戦へ", d: "第25回大会（Aichi Sky Expo、8月23日〜28日）への初参戦を目指しています。", now: true }
  ];

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  function item(e) {
    return '<li class="h-item h-reveal' + (e.now ? " h-now" : "") + '"><span class="h-dot" aria-hidden="true"></span>' +
      '<p class="h-year">' + esc(e.y) + '</p><div class="h-card"><h4>' + esc(e.t) + '</h4>' + (e.d ? '<p>' + esc(e.d) + '</p>' : "") + '</div></li>';
  }

  function html() {
    return '<div id="history-wrapper">' +
      '<section class="h-hero"><div class="h-wrap h-reveal">' +
        '<p class="h-label">History</p>' +
        '<h2 class="h-display">30年のものづくりを、<br class="h-br">次のフォーミュラへ。</h2>' +
        '<p class="h-lead">拓殖大学電気自動車同好会は1994年に愛好会として発足し、2024年に活動30年を迎えました。電動カーや電動バイクの製作、EVラリーへの出場を経て、現在は学生フォーミュラ日本大会への出場を目標に活動しています。</p>' +
      '</div></section>' +
      '<section class="h-line"><div class="h-wrap"><ol class="h-list">' + TIMELINE.map(item).join("") + '</ol></div></section>' +
    '</div>';
  }

  var CSS = [
"#history-wrapper{--h-orange:#FF6B00;--h-orange-deep:#c2410c;--h-ink:#0f172a;--h-slate:#475569;--h-border:#e2e8f0;--h-bg-alt:#f6f7f9;font-family:\"Noto Sans JP\",system-ui,-apple-system,\"Segoe UI\",sans-serif;color:var(--h-ink);line-height:1.75;-webkit-font-smoothing:antialiased;width:100vw;max-width:100vw;margin-left:calc(50% - 50vw);overflow-x:hidden;}",
"#history-wrapper *{box-sizing:border-box;}",
"#history-wrapper h2,#history-wrapper h3,#history-wrapper h4{color:var(--h-ink);font-family:inherit;text-transform:none;text-align:inherit;background:none;border:0;}",
"#history-wrapper h2,#history-wrapper h4,#history-wrapper p,#history-wrapper ol{margin:0;padding:0;}",
"#history-wrapper ol{list-style:none;}",
"#history-wrapper .h-wrap{max-width:980px;margin:0 auto;padding:0 clamp(16px,5vw,40px);}",
"#history-wrapper .h-label{font-size:.8rem;font-weight:900;letter-spacing:.4em;text-transform:uppercase;color:var(--h-orange-deep);}",
"#history-wrapper .h-display{font-weight:900;font-style:italic;letter-spacing:-.03em;line-height:1.15;font-size:clamp(1.9rem,5vw,3.6rem);margin:14px 0 22px;}",
"#history-wrapper .h-hero{padding:clamp(56px,9vw,110px) 0 clamp(24px,4vw,40px);text-align:center;}",
"#history-wrapper .h-lead{max-width:720px;margin:0 auto;color:var(--h-slate);font-size:clamp(1rem,1.6vw,1.12rem);}",
"#history-wrapper .h-br{display:inline;}",
"#history-wrapper .h-line{padding:clamp(24px,4vw,40px) 0 clamp(64px,9vw,110px);}",
"#history-wrapper .h-list{position:relative;padding-left:40px;}",
"#history-wrapper .h-list::before{content:\"\";position:absolute;left:11px;top:6px;bottom:6px;width:2px;background:linear-gradient(var(--h-border),var(--h-orange));}",
"#history-wrapper .h-item{position:relative;padding-bottom:clamp(22px,3vw,30px);}",
"#history-wrapper .h-dot{position:absolute;left:-36px;top:6px;width:16px;height:16px;border-radius:50%;background:#fff;border:3px solid #cbd5e1;}",
"#history-wrapper .h-now .h-dot{border-color:var(--h-orange);background:var(--h-orange);box-shadow:0 0 0 6px rgba(255,107,0,.18);}",
"#history-wrapper .h-year{font-size:.95rem;font-weight:900;letter-spacing:.12em;color:var(--h-orange-deep);margin-bottom:6px;}",
"#history-wrapper .h-card{background:var(--h-bg-alt);border:1px solid var(--h-border);border-radius:18px;padding:16px 20px;}",
"#history-wrapper .h-now .h-card{background:#fff7ed;border-color:rgba(255,107,0,.4);}",
"#history-wrapper .h-card h4{font-size:1.08rem;font-weight:900;}",
"#history-wrapper .h-card p{margin-top:4px;color:var(--h-slate);font-size:.97rem;}",
"#history-wrapper.h-js .h-reveal{opacity:0;transform:translateY(26px);transition:opacity .8s cubic-bezier(.16,1,.3,1),transform .9s cubic-bezier(.16,1,.3,1);}",
"#history-wrapper.h-js .h-reveal.h-in{opacity:1;transform:none;}",

"@media (prefers-reduced-motion:reduce){#history-wrapper.h-js .h-reveal{opacity:1;transform:none;transition:none;}}"
  ].join("\n");

  function build() {
    var mount = document.getElementById("history-root");
    if (!mount) return;
    if (!document.querySelector("style[data-history]")) {
      var st = document.createElement("style"); st.setAttribute("data-history", "1"); st.textContent = CSS; document.head.appendChild(st);
    }
    if (!mount.querySelector("#history-wrapper")) mount.innerHTML = html();
    var root = document.getElementById("history-wrapper");
    var els = root.querySelectorAll(".h-reveal");
    var show = function () { els.forEach(function (el) { el.classList.add("h-in"); }); };
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) { show(); return; }
    root.classList.add("h-js");
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("h-in"); io.unobserve(e.target); } }); }, { threshold: 0.1 });
    els.forEach(function (el) { io.observe(el); });
    setTimeout(function () { if (!root.querySelector(".h-in")) show(); }, 2500);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", build); else build();
})();
