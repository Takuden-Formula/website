/* ============================================================
   TAKUDEN — Sponsors（ご支援企業・スポンサー募集）本体
   GitHub Pages 配信・Jimdoローダーが読み込む単一ソース。
   Jimdo側:
     <div id="sponsors-root"></div>
     <script>(function(){var s=document.createElement('script');
       s.src='https://takuden-formula.github.io/website/sponsors/sponsors.js?v='+Date.now();
       document.head.appendChild(s);})();</script>
   企業を足す・直すときは SPONSORS 配列だけ編集（50音順）。
   ============================================================ */
(function () {
  "use strict";
  var IMG = location.hostname === "localhost" ? "/sponsors/logos/" : "https://takuden-formula.github.io/website/sponsors/logos/";

  /* name: 表示名 / what: ご支援内容 / url: 関連サイト / logo: sponsors/logos/ のファイル名（無ければ社名を文字で表示） */
  var SPONSORS = [
    { name: "株式会社アイシン", what: "電動ウォーターポンプをご提供いただき、冷却系の技術指導もいただいています。", url: "https://www.aisin.com/jp/", logo: "aisin.png" },
    { name: "アンシス・ジャパン株式会社", what: "解析ソフト Ansys のライセンスをご提供いただいています。", url: "https://ansys.synopsys.com/ja-jp", logo: "ansys.png" },
    { name: "Olds Motors", what: "タイヤとホイールをご提供いただきました。", url: "", logo: "" },
    { name: "三和電気計器株式会社", what: "絶縁抵抗計 MG102 とデジタルマルチメータ CD5002 をご寄贈いただき、高電圧の安全管理についてご指導いただきました。", url: "https://www.sanwa-meter.co.jp/japan/index.html", logo: "sanwa.png" },
    { name: "ダッソー・システムズ株式会社", what: "3D CAD「SOLIDWORKS」のライセンスをご支援いただいています。", url: "https://www.3ds.com/ja/", logo: "solidworks.png" },
    { name: "株式会社デンソー", what: "車両に使うモーター・インバータをご貸与いただき、技術的なご支援もいただいています。", url: "https://www.denso.com/jp/ja/", logo: "denso.png" },
    { name: "トヨタ自動車株式会社", what: "2027年大会に向けた電池モジュールをご貸与いただき、バッテリー安全講習会など技術的なご支援もいただいています。", url: "https://global.toyota/", logo: "toyota.png" },
    { name: "ワイズトレーディング株式会社", what: "3D CAD「NX」の体験の機会をいただいています。", url: "https://wise-staff.com/", logo: "wise.jpg" },
    { name: "ZONe", what: "エナジードリンクをご提供いただきました。", url: "https://zone-energy.jp/", logo: "zone.jpg" }
  ];

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  function card(sp) {
    var logo = sp.logo
      ? '<img loading="lazy" decoding="async" alt="' + esc(sp.name) + ' ロゴ" src="' + IMG + sp.logo + '">'
      : '<span class="s-wordmark">' + esc(sp.name) + '</span>';
    var inner = '<div class="s-logo">' + logo + '</div>' +
      '<div class="s-body"><h4>' + esc(sp.name) + '</h4><p>' + esc(sp.what) + '</p>' +
      (sp.url ? '<span class="s-more">公式サイト<span aria-hidden="true"> →</span></span>' : "") + '</div>';
    return sp.url
      ? '<li class="s-card s-reveal"><a href="' + esc(sp.url) + '" target="_blank" rel="noopener" aria-label="' + esc(sp.name) + '（新しいタブで開く）">' + inner + '</a></li>'
      : '<li class="s-card s-reveal"><div>' + inner + '</div></li>';
  }

  function html() {
    return '<div id="sponsors-wrapper">' +
    '<section class="s-hero"><div class="s-wrap s-reveal">' +
      '<p class="s-label">Sponsors</p>' +
      '<h2 class="s-display">ご支援いただいている<br class="s-br">皆様</h2>' +
      '<p class="s-lead">私たちの活動は、多くの企業・団体の皆様のご理解とご支援に支えられています。心より御礼申し上げます。<span class="s-note">（50音順・カードから各社のサイトへ移動します）</span></p>' +
    '</div></section>' +
    '<section class="s-list"><div class="s-wrap"><ul class="s-grid">' + SPONSORS.map(card).join("") + '</ul></div></section>' +
    '<section class="s-cta"><div class="s-wrap"><div class="s-cta-box s-reveal">' +
      '<p class="s-label">Become a Sponsor</p>' +
      '<h3 class="s-display s-cta-h">スポンサーを募集しています</h3>' +
      '<p>学生フォーミュラ日本大会への出場に向けて、企業様・個人様からのご支援を募集しております。部品・材料・ソフトウェア・技術的なご助言など、形を問わずお気軽にご相談ください。</p>' +
      '<ul class="s-merit"><li><b>車体へのロゴ掲出</b>大会出場車両へのステッカー掲出（予定）</li><li><b>Web・SNSでのご紹介</b>当サイトのスポンサーページ・SNSでご紹介</li><li><b>活動報告書のお届け</b>活動の進捗を定期的にご報告</li></ul>' +
      '<a class="s-btn" href="mailto:takushokudaidennkijidousha@gmail.com">メールで問い合わせる<span aria-hidden="true"> →</span></a>' +
      '<p class="s-mail">takushokudaidennkijidousha@gmail.com</p>' +
    '</div></div></section></div>';
  }

  var CSS = [
"#sponsors-wrapper{--s-orange:#FF6B00;--s-orange-deep:#c2410c;--s-ink:#0f172a;--s-slate:#475569;--s-border:#e2e8f0;--s-bg-alt:#f6f7f9;font-family:\"Noto Sans JP\",system-ui,-apple-system,\"Segoe UI\",sans-serif;color:var(--s-ink);line-height:1.7;-webkit-font-smoothing:antialiased;width:100vw;max-width:100vw;margin-left:calc(50% - 50vw);overflow-x:hidden;}",
"#sponsors-wrapper *{box-sizing:border-box;}",
"#sponsors-wrapper h2,#sponsors-wrapper h3,#sponsors-wrapper h4{color:var(--s-ink);font-family:inherit;text-transform:none;text-align:inherit;background:none;border:0;}",
"#sponsors-wrapper h2,#sponsors-wrapper h3,#sponsors-wrapper h4,#sponsors-wrapper p,#sponsors-wrapper ul{margin:0;padding:0;}",
"#sponsors-wrapper ul{list-style:none;}",
"#sponsors-wrapper a{text-decoration:none;color:inherit;}",
"#sponsors-wrapper img{display:block;max-width:100%;}",
"#sponsors-wrapper .s-wrap{max-width:1160px;margin:0 auto;padding:0 clamp(16px,5vw,40px);}",
"#sponsors-wrapper .s-label{font-size:.8rem;font-weight:900;letter-spacing:.4em;text-transform:uppercase;color:var(--s-orange-deep);}",
"#sponsors-wrapper .s-display{font-weight:900;font-style:italic;letter-spacing:-.03em;line-height:1.15;}",
"#sponsors-wrapper .s-hero{padding:clamp(56px,9vw,110px) 0 clamp(28px,4vw,44px);text-align:center;}",
"#sponsors-wrapper .s-hero .s-display{font-size:clamp(2rem,5.6vw,4rem);margin:14px 0 22px;}",
"#sponsors-wrapper .s-lead{max-width:720px;margin:0 auto;color:var(--s-slate);font-size:clamp(1rem,1.6vw,1.12rem);}",
"#sponsors-wrapper .s-note{display:block;margin-top:6px;font-size:.88em;color:#64748b;}",
"#sponsors-wrapper .s-br{display:none;}",
"#sponsors-wrapper .s-list{padding:clamp(20px,3vw,32px) 0 clamp(56px,8vw,96px);}",
"#sponsors-wrapper .s-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:clamp(16px,2vw,24px);}",
"#sponsors-wrapper .s-card>a,#sponsors-wrapper .s-card>div{display:flex;flex-direction:column;height:100%;background:#fff;border:1px solid var(--s-border);border-radius:22px;overflow:hidden;transition:transform .35s cubic-bezier(.16,1,.3,1),box-shadow .35s,border-color .35s;}",
"#sponsors-wrapper .s-card>a:hover,#sponsors-wrapper .s-card>a:focus-visible{transform:translateY(-6px);box-shadow:0 18px 40px rgba(15,23,42,.12);border-color:rgba(255,107,0,.5);}",
"#sponsors-wrapper .s-card>a:focus-visible{outline:3px solid var(--s-orange);outline-offset:3px;}",
"#sponsors-wrapper .s-logo{height:140px;display:flex;align-items:center;justify-content:center;padding:22px 28px;background:#fff;border-bottom:1px solid var(--s-border);}",
"#sponsors-wrapper .s-logo img{max-height:84px;max-width:100%;width:auto;object-fit:contain;}",
"#sponsors-wrapper .s-wordmark{font-size:1.5rem;font-weight:900;font-style:italic;letter-spacing:-.02em;color:var(--s-ink);text-align:center;}",
"#sponsors-wrapper .s-body{padding:18px 22px 22px;display:flex;flex-direction:column;gap:8px;flex:1;background:var(--s-bg-alt);}",
"#sponsors-wrapper .s-body h4{font-size:1.08rem;font-weight:900;}",
"#sponsors-wrapper .s-body p{font-size:.95rem;color:var(--s-slate);flex:1;}",
"#sponsors-wrapper .s-more{font-size:.8rem;font-weight:700;letter-spacing:.08em;color:var(--s-orange-deep);}",
"#sponsors-wrapper .s-cta{padding:0 0 clamp(64px,9vw,110px);}",
"#sponsors-wrapper .s-cta-box{background:#0f172a;color:#fff;border-radius:32px;padding:clamp(28px,5vw,60px);text-align:center;}",
"#sponsors-wrapper .s-cta-box .s-label{color:#ff8a3d;}",
"#sponsors-wrapper .s-cta-h{font-size:clamp(1.6rem,4vw,2.6rem);margin:12px 0 18px;color:#fff;}",
"#sponsors-wrapper .s-cta-box>p{max-width:700px;margin:0 auto;color:#cbd5e1;}",
"#sponsors-wrapper .s-merit{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin:28px auto 30px;max-width:900px;text-align:left;}",
"#sponsors-wrapper .s-merit li{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:16px;padding:16px 18px;font-size:.92rem;color:#cbd5e1;}",
"#sponsors-wrapper .s-merit b{display:block;color:#fff;font-size:1rem;margin-bottom:4px;}",
"#sponsors-wrapper .s-btn{display:inline-block;background:var(--s-orange);color:#fff;font-weight:900;padding:14px 30px;border-radius:999px;transition:background .3s,transform .3s;}",
"#sponsors-wrapper .s-btn:hover,#sponsors-wrapper .s-btn:focus-visible{background:#ea580c;transform:translateY(-2px);}",
"#sponsors-wrapper .s-mail{margin-top:12px;font-size:.85rem;color:#94a3b8;word-break:break-all;}",
"#sponsors-wrapper.s-js .s-reveal{opacity:0;transform:translateY(30px);transition:opacity .8s cubic-bezier(.16,1,.3,1),transform .9s cubic-bezier(.16,1,.3,1);}",
"#sponsors-wrapper.s-js .s-reveal.s-in{opacity:1;transform:none;}",
"@media (max-width:760px){#sponsors-wrapper .s-merit{grid-template-columns:1fr;}#sponsors-wrapper .s-br{display:inline;}}",
"@media (prefers-reduced-motion:reduce){#sponsors-wrapper.s-js .s-reveal{opacity:1;transform:none;transition:none;}}"
  ].join("\n");

  function build() {
    var mount = document.getElementById("sponsors-root");
    if (!mount) return;
    if (!document.querySelector("style[data-sponsors]")) {
      var st = document.createElement("style"); st.setAttribute("data-sponsors", "1"); st.textContent = CSS; document.head.appendChild(st);
    }
    if (!mount.querySelector("#sponsors-wrapper")) mount.innerHTML = html();
    reveal(document.getElementById("sponsors-wrapper"), "s-");
  }

  function reveal(root, p) {
    if (!root) return;
    var els = root.querySelectorAll("." + p + "reveal");
    var show = function () { els.forEach(function (el) { el.classList.add(p + "in"); }); };
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) { show(); return; }
    root.classList.add(p + "js");
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add(p + "in"); io.unobserve(e.target); } }); }, { threshold: 0.1 });
    els.forEach(function (el, i) { el.style.transitionDelay = Math.min((i % 4) * 0.08, 0.3) + "s"; io.observe(el); });
    setTimeout(function () { if (!root.querySelector("." + p + "in")) show(); }, 2500);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", build); else build();
})();
