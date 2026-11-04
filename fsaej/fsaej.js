/* ============================================================
   TAKUDEN — What's FSAEJ?（学生フォーミュラ紹介ページ）本体 [v3 洗練＋活動カレンダー]
   GitHub Pages 配信・Jimdoローダーが読み込む単一ソース。
   Jimdo側:
     <div id="fsaej-root"></div>
     <script>(function(){var s=document.createElement('script');
       s.src='https://takuden-formula.github.io/website/fsaej/fsaej.js?v='+Date.now();
       document.head.appendChild(s);})();</script>
   2027大会情報の出典: JSAE Competition News INFO2026005 (2026/07/27)
   第25回 / 2027.8.23-28 / Aichi Sky Expo
   ============================================================ */
(function () {
  "use strict";

  /* ------------------------------------------------------------
     活動カレンダーの予定（ここに足すだけでカレンダーに出る）
     1件の書き方:
       { date: "2026-11-12",          // 必須 YYYY-MM-DD
         end:  "2026-11-13",          // 任意 複数日のとき最終日
         type: "activity",            // activity=活動日 / test=走行・試験 / event=イベント / other=その他
         title: "定例活動",            // 必須
         time: "16:30〜19:00",        // 任意
         place: "学生交流会館 422",    // 任意
         note: "" }                   // 任意
     ------------------------------------------------------------ */
  var EVENTS = [];

  var TYPES = {
    activity: { label: "活動日", color: "#C2410C" },
    test:     { label: "走行・試験", color: "#2563EB" },
    event:    { label: "イベント", color: "#15803D" },
    other:    { label: "その他", color: "#64748B" }
  };

  var ICON = {
    doc:    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h6"/></svg>',
    flag:   '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 21V4M5 4h11l-2 4 2 4H5"/></svg>',
    wrench: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-.6-.6-2.4z"/></svg>',
    bolt:   '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/></svg>',
    shield: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 4 6v6c0 5 3.4 8.3 8 9 4.6-.7 8-4 8-9V6z"/><path d="m9 12 2 2 4-4"/></svg>',
    battery:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="7" width="16" height="10" rx="2"/><path d="M21 11v2M7 10v4M11 10v4"/></svg>',
    scope:  '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4M11 8v6M8 11h6"/></svg>',
    left:   '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 6-6 6 6 6"/></svg>',
    right:  '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 6 6 6-6 6"/></svg>',
    cal:    '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>'
  };

  var HTML = `
<div id="fsaej-wrapper">

  <!-- ===== ヒーロー ===== -->
  <section class="f-hero">
    <div class="f-wrap f-reveal">
      <span class="f-eyebrow">What&rsquo;s FSAEJ?</span>
      <h1 class="f-hero-title">学生が、<br><span class="f-accent">&ldquo;自動車メーカー&rdquo;</span>になる。</h1>
      <p class="f-hero-sub">学生フォーミュラ日本大会（FSAEJ）は、公益社団法人自動車技術会が主催する国際的なエンジニアリングコンペティション。学生が架空の自動車メーカーの開発チームとなり、小型レーシングカーを企画・設計・製作。技術・創造・チームワークの<strong>総合力</strong>を競います。</p>
      <dl class="f-facts">
        <div><dt>主催</dt><dd>自動車技術会</dd></div>
        <div><dt>審査</dt><dd>1000点満点</dd></div>
        <div><dt>2027大会</dt><dd>第25回</dd></div>
      </dl>
    </div>
  </section>

  <!-- ===== 2027大会 ===== -->
  <section class="f-event">
    <span class="f-event-glow" aria-hidden="true"></span>
    <div class="f-wrap f-reveal">
      <span class="f-event-label">Formula SAE Japan 2027 ・ 第25回</span>
      <div class="f-event-grid">
        <div class="f-event-date">
          <span class="f-event-year">2027</span>
          <span class="f-event-range">8.23 <span class="f-event-arrow">→</span> 8.28</span>
        </div>
        <div class="f-event-meta">
          <div class="f-event-item"><span class="f-event-k">会場</span><span class="f-event-v">Aichi Sky Expo<small>愛知県国際展示場</small></span></div>
          <div class="f-event-item"><span class="f-event-k">会期</span><span class="f-event-v">6日間<small>月曜 〜 土曜</small></span></div>
        </div>
      </div>
      <p class="f-event-note">※ 詳細の大会規則・ローカルルールは 2026年12月 発行予定。<span>出典: JSAE Competition News INFO2026005</span></p>
    </div>
  </section>

  <!-- ===== スコアの全体像 ===== -->
  <section class="f-section">
    <div class="f-wrap">
      <div class="f-head f-reveal"><span class="f-num">01</span><span class="f-eyebrow-ink">Scoring</span><h2 class="f-h2">1000点で競う、総合力。</h2></div>
      <div class="f-score f-reveal">
        <div class="f-score-legend">
          <span><i class="f-dot f-dot-static"></i>静的審査 <b class="f-count">325</b></span>
          <span><i class="f-dot f-dot-dynamic"></i>動的審査 <b class="f-count">675</b></span>
        </div>
        <div class="f-score-bar" role="img" aria-label="静的審査325点、動的審査675点">
          <div class="f-seg f-seg-static" style="flex:325"></div>
          <div class="f-seg f-seg-dynamic" style="flex:675"></div>
        </div>
        <p class="f-score-note"><strong>合計1000点満点。</strong>さらに <b>車検（Technical Inspection）</b> の合格が、すべての走行審査に進むための前提条件です。</p>
      </div>
    </div>
  </section>

  <!-- ===== 審査の詳細 ===== -->
  <section class="f-section f-section-alt">
    <div class="f-wrap">
      <div class="f-head f-reveal"><span class="f-num">02</span><span class="f-eyebrow-ink">Competition</span><h2 class="f-h2">3つの審査で、実力を証明</h2></div>
      <div class="f-panels">
        <div class="f-panel f-reveal">
          <div class="f-panel-head"><div class="f-icon">${ICON.doc}</div><h3 class="f-panel-title">静的審査</h3><span class="f-panel-total"><span class="f-count">325</span><small>pt</small></span></div>
          <div class="f-rows">
            <div class="f-row"><span class="f-row-name">デザイン審査<small>設計の論理性を現役エンジニアと議論</small></span><b class="f-row-pt">150</b></div>
            <div class="f-row"><span class="f-row-name">コスト審査<small>ネジ一本まで。量産を想定した製造性</small></span><b class="f-row-pt">100</b></div>
            <div class="f-row"><span class="f-row-name">プレゼンテーション<small>仮想投資家へ市場性とビジネスを提案</small></span><b class="f-row-pt">75</b></div>
          </div>
        </div>
        <div class="f-panel f-reveal">
          <div class="f-panel-head"><div class="f-icon">${ICON.flag}</div><h3 class="f-panel-title">動的審査</h3><span class="f-panel-total"><span class="f-count">675</span><small>pt</small></span></div>
          <div class="f-rows">
            <div class="f-row"><span class="f-row-name">アクセラレーション<small>75m 加速</small></span><b class="f-row-pt">100</b></div>
            <div class="f-row"><span class="f-row-name">スキッドパッド<small>定常円旋回</small></span><b class="f-row-pt">75</b></div>
            <div class="f-row"><span class="f-row-name">オートクロス<small>1周の走行タイム</small></span><b class="f-row-pt">125</b></div>
            <div class="f-row"><span class="f-row-name">エンデュランス<small>約22kmの耐久走行</small></span><b class="f-row-pt">275</b></div>
            <div class="f-row"><span class="f-row-name">効率（エフィシエンシー）<small>エネルギー効率</small></span><b class="f-row-pt">100</b></div>
          </div>
        </div>
      </div>
      <div class="f-gate f-reveal">
        <div class="f-icon f-icon-solid">${ICON.wrench}</div>
        <div class="f-gate-body">
          <h3 class="f-gate-title">車検 — すべての前提条件</h3>
          <p>どんなに速い車両でも、車検を通らなければ走れません。EVクラスでは、絶縁監視・遮断回路・チルト試験・レインテストなど、電気安全に関する全項目を徹底検査します。</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== 1年間の流れ ===== -->
  <section class="f-section">
    <div class="f-wrap">
      <div class="f-head f-reveal"><span class="f-num">03</span><span class="f-eyebrow-ink">Our Year</span><h2 class="f-h2">1年をかけて、1台を。</h2></div>
      <ol class="f-timeline">
        <li class="f-step f-reveal"><span class="f-step-num">STEP 1</span><h4>企画・設計</h4><p>ターゲット市場を分析して車両コンセプトを決定。CADを駆使した詳細設計と解析を行います。</p></li>
        <li class="f-step f-reveal"><span class="f-step-num">STEP 2</span><h4>製作・組み立て</h4><p>部品の調達から加工、組み立てまで。チーム全員で協力し、設計を形にしていきます。</p></li>
        <li class="f-step f-reveal"><span class="f-step-num">STEP 3</span><h4>テスト・改良</h4><p>実走行テストを重ねてデータを分析。問題点を洗い出し、大会に向けて最終調整します。</p></li>
        <li class="f-step f-reveal"><span class="f-step-num">STEP 4</span><h4>大会本番（8月）</h4><p>静的審査・車検・動的審査。すべての審査で実力を証明し、1年間の成果を発揮します。</p></li>
      </ol>
    </div>
  </section>

  <!-- ===== EVで挑む ===== -->
  <section class="f-ev">
    <span class="f-event-glow" aria-hidden="true"></span>
    <div class="f-wrap">
      <div class="f-head f-reveal"><span class="f-num f-num-light">04</span><span class="f-eyebrow">Our Challenge</span><h2 class="f-h2 f-h2-light">EV（電気自動車）で挑む</h2></div>
      <div class="f-features">
        <div class="f-feature f-reveal"><div class="f-icon f-icon-dark">${ICON.bolt}</div><div><h4>高電圧システム</h4><p>ルールで上限600Vと定められた高電圧システムに、車載用モーター・インバータと電池モジュールで挑みます。ガソリン車に負けない加速を目指します。</p></div></div>
        <div class="f-feature f-reveal"><div class="f-icon f-icon-dark">${ICON.shield}</div><div><h4>安全設計</h4><p>絶縁監視装置（IMD）や遮断回路を備え、電池の監視装置（AMS）は自作。異常時には高電圧を確実に遮断する多重の安全設計です。</p></div></div>
        <div class="f-feature f-reveal"><div class="f-icon f-icon-dark">${ICON.battery}</div><div><h4>エネルギーマネジメント</h4><p>BMSでセルの電圧・温度を常時監視。限られた電力で最大の性能を引き出します。</p></div></div>
        <div class="f-feature f-reveal"><div class="f-icon f-icon-dark">${ICON.scope}</div><div><h4>最先端基準への対応</h4><p>年々更新される安全基準に対応。産業界と同等の高い水準で開発を進めています。</p></div></div>
      </div>
    </div>
  </section>

  <!-- ===== 活動カレンダー ===== -->
  <section class="f-section" id="fsaej-calendar">
    <div class="f-wrap">
      <div class="f-head f-reveal"><span class="f-num">05</span><span class="f-eyebrow-ink">Schedule</span><h2 class="f-h2">活動カレンダー</h2>
        <p class="f-lead">活動日・走行試験・イベントの予定をお知らせします。</p></div>
      <div class="f-cal f-reveal">
        <div class="f-cal-card">
          <div class="f-cal-bar">
            <button type="button" class="f-cal-nav" data-cal="prev" aria-label="前の月">${ICON.left}</button>
            <h3 class="f-cal-title" aria-live="polite"></h3>
            <button type="button" class="f-cal-nav" data-cal="next" aria-label="次の月">${ICON.right}</button>
            <button type="button" class="f-cal-today" data-cal="today">今月</button>
          </div>
          <div class="f-cal-week" aria-hidden="true"><span class="f-sun">日</span><span>月</span><span>火</span><span>水</span><span>木</span><span>金</span><span class="f-sat">土</span></div>
          <div class="f-cal-grid"></div>
          <div class="f-cal-legend"></div>
        </div>
        <aside class="f-cal-side">
          <h3 class="f-cal-side-title"></h3>
          <ul class="f-cal-list"></ul>
        </aside>
      </div>
    </div>
  </section>

  <!-- ===== CTA ===== -->
  <section class="f-cta">
    <div class="f-wrap f-reveal">
      <h2 class="f-cta-title">2027、Aichi Sky Expoで会おう。</h2>
      <p class="f-cta-sub">TAKUDENは、この舞台で世界と競うマシンを、学生の手で創り上げます。</p>
      <a class="f-cta-btn" href="https://www.jsae.or.jp/formula/" target="_blank" rel="noopener">大会公式サイトを見る <span aria-hidden="true">→</span></a>
    </div>
  </section>

</div>`;

  var CSS = `
html,body{overflow-x:hidden;max-width:100%;}
#fsaej-wrapper{--f-orange:#FF6B00;--f-orange-deep:#E65A00;--f-orange-ink:#C2410C;--f-ink:#111418;--f-text:#4b5563;--f-mute:#8a909a;--f-bg:#fff;--f-bg-alt:#f7f7f5;--f-border:#e7e7e4;--f-radius:14px;font-family:"Noto Sans JP",system-ui,-apple-system,"Segoe UI",sans-serif;color:var(--f-ink);line-height:1.8;-webkit-font-smoothing:antialiased;width:100vw;max-width:100vw;margin-left:calc(50% - 50vw);overflow-x:hidden;font-feature-settings:"palt";}
#fsaej-wrapper *{box-sizing:border-box;}
#fsaej-wrapper{text-align:left;font-size:16px;}
#fsaej-wrapper h1,#fsaej-wrapper h2,#fsaej-wrapper h3,#fsaej-wrapper h4{font-family:inherit;color:inherit;text-align:inherit;text-transform:none;letter-spacing:normal;font-style:normal;background:none;border:0;}
#fsaej-wrapper p,#fsaej-wrapper li,#fsaej-wrapper dd,#fsaej-wrapper dt{font-family:inherit;}
#fsaej-wrapper h1,#fsaej-wrapper h2,#fsaej-wrapper h3,#fsaej-wrapper h4,#fsaej-wrapper p,#fsaej-wrapper ol,#fsaej-wrapper ul,#fsaej-wrapper dl,#fsaej-wrapper dd{margin:0;padding:0;}
#fsaej-wrapper ol,#fsaej-wrapper ul{list-style:none;}
#fsaej-wrapper svg{width:22px;height:22px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;display:block;}
#fsaej-wrapper .f-wrap{max-width:1120px;margin:0 auto;padding:0 clamp(20px,5vw,48px);}
#fsaej-wrapper .f-accent{color:var(--f-orange);}
#fsaej-wrapper .f-eyebrow,#fsaej-wrapper .f-eyebrow-ink{display:block;font-size:12.8px;font-weight:700;letter-spacing:.28em;text-transform:uppercase;margin-bottom:14px;}
#fsaej-wrapper .f-eyebrow{color:var(--f-orange);}
#fsaej-wrapper .f-eyebrow-ink{color:var(--f-orange-ink);}
#fsaej-wrapper .f-h2{font-size:clamp(30.4px,4vw,46.4px);font-weight:800;line-height:1.25;letter-spacing:-.01em;}
#fsaej-wrapper .f-h2-light{color:#fff;}
#fsaej-wrapper .f-head{position:relative;padding-top:22px;border-top:1px solid var(--f-ink);}
#fsaej-wrapper .f-ev .f-head{border-top-color:rgba(255,255,255,.35);}
#fsaej-wrapper .f-num{position:absolute;top:22px;right:0;font-size:13.6px;font-weight:700;letter-spacing:.12em;color:var(--f-mute);font-variant-numeric:tabular-nums;}
#fsaej-wrapper .f-num-light{color:rgba(255,255,255,.45);}
#fsaej-wrapper .f-lead{margin-top:14px;font-size:clamp(16px,1.4vw,17.6px);color:var(--f-text);}

/* icons */
#fsaej-wrapper .f-icon{width:46px;height:46px;flex:none;border-radius:12px;border:1px solid var(--f-border);background:#fff;color:var(--f-orange-ink);display:flex;align-items:center;justify-content:center;}
#fsaej-wrapper .f-icon-solid{background:var(--f-orange);border-color:var(--f-orange);color:#fff;}
#fsaej-wrapper .f-icon-dark{background:rgba(255,255,255,.06);border-color:rgba(255,255,255,.16);color:var(--f-orange);}

/* hero */
#fsaej-wrapper .f-hero{background:var(--f-bg);padding:clamp(72px,11vw,140px) 0 clamp(56px,8vw,96px);}
#fsaej-wrapper .f-hero-title{font-size:clamp(30px,6.4vw,76.8px);font-weight:900;line-height:1.15;letter-spacing:-.02em;margin-bottom:28px;}
#fsaej-wrapper .f-hero-sub{font-size:clamp(16.8px,1.6vw,20px);color:var(--f-text);line-height:2;max-width:760px;}
#fsaej-wrapper .f-hero-sub strong{color:var(--f-ink);font-weight:700;}
#fsaej-wrapper .f-facts{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));max-width:760px;margin-top:clamp(36px,5vw,56px);border-top:1px solid var(--f-border);}
#fsaej-wrapper .f-facts div{padding:18px 18px 0 0;}
#fsaej-wrapper .f-facts div+div{padding-left:18px;border-left:1px solid var(--f-border);}
#fsaej-wrapper .f-facts dt{font-size:12px;font-weight:700;letter-spacing:.14em;color:var(--f-mute);}
#fsaej-wrapper .f-facts dd{font-size:clamp(16.8px,1.8vw,20.8px);font-weight:800;margin-top:4px;}

/* 2027 event */
#fsaej-wrapper .f-event{position:relative;overflow:hidden;background:#111418;color:#fff;padding:clamp(56px,8vw,96px) 0;}
#fsaej-wrapper .f-event-glow{position:absolute;top:-45%;right:-12%;width:min(640px,80vw);height:min(640px,80vw);background:radial-gradient(circle,var(--f-orange) 0%,transparent 70%);opacity:.13;pointer-events:none;}
#fsaej-wrapper .f-event .f-wrap{position:relative;z-index:1;}
#fsaej-wrapper .f-event-label{display:block;font-size:12.8px;font-weight:700;letter-spacing:.24em;text-transform:uppercase;color:var(--f-orange);margin-bottom:26px;}
#fsaej-wrapper .f-event-grid{display:grid;grid-template-columns:auto 1fr;gap:clamp(30px,6vw,80px);align-items:center;}
#fsaej-wrapper .f-event-date{display:flex;flex-direction:column;}
#fsaej-wrapper .f-event-year{font-size:clamp(16px,1.8vw,20.8px);font-weight:700;color:rgba(255,255,255,.5);letter-spacing:.16em;}
#fsaej-wrapper .f-event-range{font-size:clamp(40px,8.5vw,99.2px);font-weight:800;line-height:1;letter-spacing:-.03em;color:#fff;font-variant-numeric:tabular-nums;}
#fsaej-wrapper .f-event-arrow{color:var(--f-orange);margin:0 .08em;font-weight:400;}
#fsaej-wrapper .f-event-meta{display:grid;gap:0;}
#fsaej-wrapper .f-event-item{display:flex;align-items:baseline;gap:24px;padding:16px 0;border-bottom:1px solid rgba(255,255,255,.14);}
#fsaej-wrapper .f-event-item:first-child{border-top:1px solid rgba(255,255,255,.14);}
#fsaej-wrapper .f-event-k{flex:none;width:3em;font-size:12.8px;font-weight:700;color:rgba(255,255,255,.5);letter-spacing:.14em;}
#fsaej-wrapper .f-event-v{font-size:clamp(20px,2.2vw,26.4px);font-weight:800;color:#fff;line-height:1.3;}
#fsaej-wrapper .f-event-v small{display:block;font-size:12.8px;font-weight:500;color:rgba(255,255,255,.55);margin-top:2px;letter-spacing:.04em;}
#fsaej-wrapper .f-event-note{margin-top:clamp(28px,4vw,44px);font-size:14.4px;color:rgba(255,255,255,.6);}
#fsaej-wrapper .f-event-note span{display:block;margin-top:4px;font-size:12.5px;color:rgba(255,255,255,.38);letter-spacing:.04em;}

/* sections */
#fsaej-wrapper .f-section{background:var(--f-bg);padding:clamp(64px,9vw,120px) 0;}
#fsaej-wrapper .f-section-alt{background:var(--f-bg-alt);}

/* score */
#fsaej-wrapper .f-score{margin-top:clamp(32px,4.5vw,52px);}
#fsaej-wrapper .f-score-legend{display:flex;flex-wrap:wrap;gap:8px 32px;margin-bottom:14px;font-size:15.2px;font-weight:700;color:var(--f-text);}
#fsaej-wrapper .f-score-legend b{font-size:24px;font-weight:800;color:var(--f-ink);margin-left:6px;font-variant-numeric:tabular-nums;}
#fsaej-wrapper .f-dot{display:inline-block;width:10px;height:10px;border-radius:50%;margin-right:8px;vertical-align:middle;}
#fsaej-wrapper .f-dot-static,#fsaej-wrapper .f-seg-static{background:#3b3f46;}
#fsaej-wrapper .f-dot-dynamic,#fsaej-wrapper .f-seg-dynamic{background:var(--f-orange);}
#fsaej-wrapper .f-score-bar{display:flex;gap:4px;height:14px;border-radius:999px;overflow:hidden;}
#fsaej-wrapper .f-score-note{margin-top:22px;font-size:clamp(16px,1.4vw,17.6px);color:var(--f-text);line-height:1.9;}
#fsaej-wrapper .f-score-note strong{color:var(--f-ink);font-weight:700;}
#fsaej-wrapper .f-score-note b{color:var(--f-orange-ink);font-weight:700;}

/* judging panels */
#fsaej-wrapper .f-panels{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-top:clamp(32px,5vw,52px);}
#fsaej-wrapper .f-panel{background:#fff;border:1px solid var(--f-border);border-radius:var(--f-radius);padding:clamp(24px,3vw,36px);}
#fsaej-wrapper .f-panel-head{display:flex;align-items:center;gap:14px;padding-bottom:18px;margin-bottom:6px;border-bottom:1px solid var(--f-ink);}
#fsaej-wrapper .f-panel-title{font-size:clamp(20px,2vw,24px);font-weight:800;flex:1;}
#fsaej-wrapper .f-panel-total{font-size:clamp(25.6px,2.6vw,33.6px);font-weight:800;color:var(--f-orange-ink);line-height:1;font-variant-numeric:tabular-nums;}
#fsaej-wrapper .f-panel-total small{font-size:.45em;font-weight:700;margin-left:3px;color:var(--f-mute);}
#fsaej-wrapper .f-row{display:flex;align-items:center;gap:18px;justify-content:space-between;padding:15px 0;border-bottom:1px solid var(--f-border);}
#fsaej-wrapper .f-row:last-child{border-bottom:0;}
#fsaej-wrapper .f-row-name{font-size:clamp(16px,1.4vw,17.6px);font-weight:700;color:var(--f-ink);line-height:1.4;}
#fsaej-wrapper .f-row-name small{display:block;font-size:.82em;font-weight:400;color:var(--f-text);margin-top:2px;}
#fsaej-wrapper .f-row-pt{flex:none;font-size:clamp(19.2px,1.8vw,22.4px);font-weight:800;color:var(--f-ink);font-variant-numeric:tabular-nums;}

/* gate */
#fsaej-wrapper .f-gate{display:flex;align-items:flex-start;gap:clamp(18px,3vw,28px);margin-top:20px;background:#fff;border:1px solid var(--f-border);border-left:4px solid var(--f-orange);border-radius:var(--f-radius);padding:clamp(24px,3vw,36px);}
#fsaej-wrapper .f-gate-title{font-size:clamp(19.2px,1.9vw,23.2px);font-weight:800;margin-bottom:6px;}
#fsaej-wrapper .f-gate-body p{font-size:clamp(16px,1.4vw,17.3px);color:var(--f-text);line-height:1.9;}

/* timeline */
#fsaej-wrapper .f-timeline{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:0;margin-top:clamp(32px,5vw,52px);counter-reset:s;}
#fsaej-wrapper .f-step{position:relative;padding:26px 24px 0 0;border-top:2px solid var(--f-border);}
#fsaej-wrapper .f-step::before{content:"";position:absolute;top:-6px;left:0;width:10px;height:10px;border-radius:50%;background:var(--f-orange);box-shadow:0 0 0 4px #fff;}
#fsaej-wrapper .f-step-num{display:block;font-size:12px;font-weight:700;letter-spacing:.18em;color:var(--f-orange-ink);margin-bottom:8px;}
#fsaej-wrapper .f-step h4{font-size:clamp(18.4px,1.7vw,20.8px);font-weight:800;margin-bottom:8px;}
#fsaej-wrapper .f-step p{font-size:15.7px;color:var(--f-text);line-height:1.9;}

/* EV dark */
#fsaej-wrapper .f-ev{position:relative;overflow:hidden;background:#111418;color:#fff;padding:clamp(64px,9vw,120px) 0;}
#fsaej-wrapper .f-ev .f-wrap{position:relative;z-index:1;}
#fsaej-wrapper .f-features{display:grid;grid-template-columns:repeat(2,1fr);gap:clamp(28px,4vw,48px) clamp(28px,5vw,64px);margin-top:clamp(36px,5vw,56px);}
#fsaej-wrapper .f-feature{display:grid;grid-template-columns:46px 1fr;gap:18px;align-items:start;}
#fsaej-wrapper .f-feature h4{font-size:clamp(18.4px,1.8vw,21.6px);font-weight:800;margin-bottom:6px;color:#fff;}
#fsaej-wrapper .f-feature p{font-size:clamp(15.7px,1.3vw,16.8px);color:rgba(255,255,255,.7);line-height:1.9;}

/* calendar */
#fsaej-wrapper .f-cal{display:grid;grid-template-columns:minmax(0,1.6fr) minmax(0,1fr);gap:20px;margin-top:clamp(32px,5vw,52px);align-items:start;}
#fsaej-wrapper .f-cal-card,#fsaej-wrapper .f-cal-side{background:#fff;border:1px solid var(--f-border);border-radius:var(--f-radius);padding:clamp(18px,2.6vw,28px);}
#fsaej-wrapper .f-cal-bar{display:flex;align-items:center;gap:8px;margin-bottom:18px;}
#fsaej-wrapper .f-cal-title{flex:1;text-align:center;font-size:clamp(18.4px,1.8vw,21.6px);font-weight:800;font-variant-numeric:tabular-nums;order:2;}
#fsaej-wrapper .f-cal-nav[data-cal=prev]{order:1;}
#fsaej-wrapper .f-cal-nav[data-cal=next]{order:3;}
#fsaej-wrapper .f-cal-today{order:4;}
#fsaej-wrapper .f-cal-nav,#fsaej-wrapper .f-cal-today{font:inherit;cursor:pointer;height:36px;border:1px solid var(--f-border);background:#fff;color:var(--f-ink);border-radius:999px;display:inline-flex;align-items:center;justify-content:center;transition:border-color .2s,background .2s;}
#fsaej-wrapper .f-cal-nav{width:36px;padding:0;}
#fsaej-wrapper .f-cal-nav svg{width:18px;height:18px;}
#fsaej-wrapper .f-cal-today{padding:0 14px;font-size:13.6px;font-weight:700;}
#fsaej-wrapper .f-cal-nav:hover,#fsaej-wrapper .f-cal-today:hover{border-color:var(--f-ink);}
#fsaej-wrapper .f-cal-week,#fsaej-wrapper .f-cal-grid{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));}
#fsaej-wrapper .f-cal-week span{text-align:center;font-size:12px;font-weight:700;color:var(--f-mute);padding-bottom:8px;letter-spacing:.08em;}
#fsaej-wrapper .f-sun{color:#c2410c !important;}
#fsaej-wrapper .f-sat{color:#2563eb !important;}
#fsaej-wrapper .f-cal-grid{border-top:1px solid var(--f-border);border-left:1px solid var(--f-border);}
#fsaej-wrapper .f-day{font:inherit;position:relative;min-height:clamp(52px,7vw,84px);padding:6px 6px 8px;border:0;border-right:1px solid var(--f-border);border-bottom:1px solid var(--f-border);background:#fff;text-align:left;color:var(--f-ink);display:flex;flex-direction:column;gap:4px;cursor:default;min-width:0;}
#fsaej-wrapper .f-day.f-out{background:#fafaf9;color:#c4c6ca;}
#fsaej-wrapper .f-day.f-has{cursor:pointer;}
#fsaej-wrapper .f-day.f-has:hover{background:#fff7f0;}
#fsaej-wrapper .f-day.f-sel{box-shadow:inset 0 0 0 2px var(--f-ink);}
#fsaej-wrapper .f-day:focus-visible{outline:2px solid var(--f-orange);outline-offset:-2px;}
#fsaej-wrapper .f-d{font-size:13.6px;font-weight:700;line-height:1;width:24px;height:24px;display:inline-flex;align-items:center;justify-content:center;border-radius:50%;font-variant-numeric:tabular-nums;}
#fsaej-wrapper .f-day.f-today .f-d{background:var(--f-orange-ink);color:#fff;}
#fsaej-wrapper .f-chips{display:flex;flex-direction:column;gap:2px;min-width:0;}
#fsaej-wrapper .f-chip{font-size:10.9px;font-weight:700;line-height:1.35;padding:1px 6px;border-radius:4px;color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
#fsaej-wrapper .f-more{font-size:10.9px;font-weight:700;color:var(--f-mute);}
#fsaej-wrapper .f-cal-legend{display:flex;flex-wrap:wrap;gap:6px 18px;margin-top:16px;font-size:12.8px;color:var(--f-text);}
#fsaej-wrapper .f-cal-legend span{display:inline-flex;align-items:center;gap:6px;}
#fsaej-wrapper .f-cal-legend i{width:10px;height:10px;border-radius:3px;display:inline-block;}
#fsaej-wrapper .f-cal-side-title{font-size:16px;font-weight:800;padding-bottom:12px;border-bottom:1px solid var(--f-ink);}
#fsaej-wrapper .f-cal-list li{display:grid;grid-template-columns:auto 1fr;gap:14px;padding:14px 0;border-bottom:1px solid var(--f-border);}
#fsaej-wrapper .f-cal-list li:last-child{border-bottom:0;}
#fsaej-wrapper .f-li-date{width:52px;text-align:center;border-radius:10px;padding:6px 0;background:var(--f-bg-alt);line-height:1.15;}
#fsaej-wrapper .f-li-date b{display:block;font-size:20px;font-weight:800;font-variant-numeric:tabular-nums;}
#fsaej-wrapper .f-li-date small{font-size:11.2px;font-weight:700;color:var(--f-mute);}
#fsaej-wrapper .f-li-tag{display:inline-block;font-size:10.9px;font-weight:700;color:#fff;border-radius:4px;padding:1px 6px;margin-bottom:4px;}
#fsaej-wrapper .f-li-title{display:block;font-weight:800;font-size:16px;line-height:1.45;}
#fsaej-wrapper .f-li-meta{display:block;font-size:13.6px;color:var(--f-text);line-height:1.6;margin-top:2px;}
#fsaej-wrapper .f-empty{display:flex;flex-direction:column;align-items:center;text-align:center;gap:10px;padding:32px 8px 18px;color:var(--f-mute);font-size:14.7px;line-height:1.8;grid-template-columns:none !important;border:0 !important;}
#fsaej-wrapper .f-empty svg{width:30px;height:30px;color:#c4c6ca;}

/* cta */
#fsaej-wrapper .f-cta{background:var(--f-orange);color:#fff;text-align:center;padding:clamp(64px,9vw,112px) 0;}
#fsaej-wrapper .f-cta-title{font-size:clamp(28.8px,4vw,44.8px);font-weight:900;line-height:1.3;margin-bottom:14px;}
#fsaej-wrapper .f-cta-sub{font-size:clamp(16px,1.5vw,18.4px);color:rgba(255,255,255,.92);line-height:1.9;margin-bottom:32px;}
#fsaej-wrapper .f-cta-btn{display:inline-flex;align-items:center;gap:10px;background:#111418;color:#fff;padding:16px 36px;border-radius:999px;font-weight:700;font-size:16px;text-decoration:none;transition:transform .25s ease,background .25s ease;}
#fsaej-wrapper .f-cta-btn:hover,#fsaej-wrapper .f-cta-btn:focus-visible{transform:translateY(-2px);background:#000;}

/* reveal */
#fsaej-wrapper.f-js .f-reveal{opacity:0;transform:translateY(28px);transition:opacity .8s cubic-bezier(.16,1,.3,1),transform .9s cubic-bezier(.16,1,.3,1);}
#fsaej-wrapper.f-js .f-reveal.f-in{opacity:1;transform:none;}
#fsaej-wrapper a:focus-visible{outline:3px solid #fff;outline-offset:3px;border-radius:8px;}

/* responsive */
@media (max-width:900px){
  #fsaej-wrapper .f-cal{grid-template-columns:1fr;}
  #fsaej-wrapper .f-timeline{grid-template-columns:1fr 1fr;row-gap:36px;}
}
@media (max-width:820px){
  #fsaej-wrapper .f-panels{grid-template-columns:1fr;}
  #fsaej-wrapper .f-features{grid-template-columns:1fr;}
  #fsaej-wrapper .f-event-grid{grid-template-columns:1fr;gap:28px;}
}
@media (max-width:560px){
  #fsaej-wrapper .f-timeline{grid-template-columns:1fr;row-gap:30px;}
  #fsaej-wrapper .f-facts{grid-template-columns:1fr;}
  #fsaej-wrapper .f-facts div+div{padding-left:0;border-left:0;border-top:1px solid var(--f-border);}
  #fsaej-wrapper .f-facts div{padding:12px 0;}
  #fsaej-wrapper .f-chip{display:none;}
  #fsaej-wrapper .f-day.f-has::after{content:"";position:absolute;left:50%;bottom:7px;width:6px;height:6px;margin-left:-3px;border-radius:50%;background:var(--f-orange);}
  #fsaej-wrapper .f-more{display:none;}
  #fsaej-wrapper .f-d{width:22px;height:22px;font-size:12.8px;}
  #fsaej-wrapper .f-gate{flex-direction:column;}
}
@media (prefers-reduced-motion:reduce){
  #fsaej-wrapper.f-js .f-reveal{opacity:1;transform:none;transition:none;}
  #fsaej-wrapper .f-cta-btn{transition:none;}
}`;

  function build() {
    var mount = document.getElementById("fsaej-root") || document.getElementById("fsaej-wrapper");
    if (!mount) return;
    var old = document.querySelector("style[data-fsaej]");
    if (old) old.parentNode.removeChild(old);
    var st = document.createElement("style");
    st.setAttribute("data-fsaej", "3");
    st.textContent = CSS;
    document.head.appendChild(st);
    if (!mount.querySelector("#fsaej-wrapper")) { mount.innerHTML = HTML; }
    var root = document.getElementById("fsaej-wrapper");
    if (!root || root.__fsaejInit) return;
    root.__fsaejInit = true;
    calendar(root);
    behavior(root);
  }

  /* ---------------- 活動カレンダー ---------------- */
  function pad(n) { return (n < 10 ? "0" : "") + n; }
  function key(d) { return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate()); }
  function parse(s) {
    var m = /^(\d{4})-(\d{1,2})-(\d{1,2})$/.exec(String(s || "").trim());
    if (!m) return null;
    var d = new Date(+m[1], +m[2] - 1, +m[3]);
    return d.getMonth() === +m[2] - 1 && d.getDate() === +m[3] ? d : null;
  }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  var WD = ["日", "月", "火", "水", "木", "金", "土"];

  function calendar(root) {
    var box = root.querySelector("#fsaej-calendar");
    if (!box) return;
    var grid = box.querySelector(".f-cal-grid");
    var title = box.querySelector(".f-cal-title");
    var list = box.querySelector(".f-cal-list");
    var sideTitle = box.querySelector(".f-cal-side-title");
    var legend = box.querySelector(".f-cal-legend");

    // 予定を正規化し、日付ごとに展開（複数日は最大62日まで）
    var items = [], byDay = {};
    EVENTS.forEach(function (e) {
      var s = parse(e && e.date); if (!s || !e.title) return;
      var en = parse(e.end) || s; if (en < s) en = s;
      var t = TYPES[e.type] ? e.type : "other";
      var it = { s: s, e: en, type: t, title: e.title, time: e.time, place: e.place, note: e.note };
      items.push(it);
      for (var d = new Date(s), n = 0; d <= en && n < 62; d.setDate(d.getDate() + 1), n++) {
        (byDay[key(d)] = byDay[key(d)] || []).push(it);
      }
    });
    items.sort(function (a, b) { return a.s - b.s; });

    legend.innerHTML = Object.keys(TYPES).map(function (k) {
      return '<span><i style="background:' + TYPES[k].color + '"></i>' + TYPES[k].label + "</span>";
    }).join("");

    var today = new Date(); today.setHours(0, 0, 0, 0);
    var view = new Date(today.getFullYear(), today.getMonth(), 1);
    var selected = null;

    function fmtRange(it) {
      var a = (it.s.getMonth() + 1) + "/" + it.s.getDate() + "（" + WD[it.s.getDay()] + "）";
      if (+it.e === +it.s) return a;
      return a + " 〜 " + (it.e.getMonth() + 1) + "/" + it.e.getDate() + "（" + WD[it.e.getDay()] + "）";
    }
    function li(it) {
      var c = TYPES[it.type];
      var meta = [fmtRange(it), it.time, it.place].filter(Boolean).map(esc).join("　");
      return '<li><span class="f-li-date"><b>' + it.s.getDate() + "</b><small>" + (it.s.getMonth() + 1) + "月・" + WD[it.s.getDay()] + "</small></span>" +
        '<span><span class="f-li-tag" style="background:' + c.color + '">' + c.label + "</span>" +
        '<span class="f-li-title">' + esc(it.title) + "</span>" +
        '<span class="f-li-meta">' + meta + "</span>" +
        (it.note ? '<span class="f-li-meta">' + esc(it.note) + "</span>" : "") + "</span></li>";
    }
    function empty(msg) {
      return '<li class="f-empty">' + ICON.cal + "<span>" + msg + "</span></li>";
    }

    function renderSide() {
      if (selected) {
        var d = parse(selected), evs = byDay[selected] || [];
        sideTitle.textContent = (d.getMonth() + 1) + "月" + d.getDate() + "日（" + WD[d.getDay()] + "）の予定";
        list.innerHTML = evs.length ? evs.map(li).join("") : empty("この日の予定はありません。");
        return;
      }
      var y = view.getFullYear(), m = view.getMonth();
      var start = new Date(y, m, 1), end = new Date(y, m + 1, 0);
      var isCur = y === today.getFullYear() && m === today.getMonth();
      var from = isCur ? today : start;
      var up = items.filter(function (it) { return it.e >= from && (isCur || it.s <= end); });
      sideTitle.textContent = isCur ? "今後の予定" : (m + 1) + "月の予定";
      list.innerHTML = up.length ? up.slice(0, 8).map(li).join("")
        : empty("現在、公開している予定はありません。<br>決まり次第こちらでお知らせします。");
    }

    function render() {
      var y = view.getFullYear(), m = view.getMonth();
      title.textContent = y + "年 " + (m + 1) + "月";
      var first = new Date(y, m, 1);
      var cur = new Date(y, m, 1 - first.getDay());
      var weeks = Math.ceil((first.getDay() + new Date(y, m + 1, 0).getDate()) / 7);
      var html = "";
      for (var i = 0; i < weeks * 7; i++, cur.setDate(cur.getDate() + 1)) {
        var k = key(cur), evs = byDay[k] || [];
        var cls = "f-day" + (cur.getMonth() !== m ? " f-out" : "") + (+cur === +today ? " f-today" : "") +
          (evs.length ? " f-has" : "") + (k === selected ? " f-sel" : "");
        var label = (cur.getMonth() + 1) + "月" + cur.getDate() + "日" + WD[cur.getDay()] + "曜日" +
          (evs.length ? "、予定" + evs.length + "件" : "");
        if (cur.getMonth() === m) cls += cur.getDay() === 0 ? " f-sun" : cur.getDay() === 6 ? " f-sat" : "";
        var chips = evs.slice(0, 2).map(function (it) {
          return '<span class="f-chip" style="background:' + TYPES[it.type].color + '">' + esc(it.title) + "</span>";
        }).join("") + (evs.length > 2 ? '<span class="f-more">+' + (evs.length - 2) + "</span>" : "");
        html += '<button type="button" class="' + cls + '" data-day="' + k + '" aria-label="' + label + '"' +
          (evs.length ? ' aria-pressed="' + (k === selected) + '"' : ' tabindex="-1" aria-disabled="true"') + '><span class="f-d">' +
          cur.getDate() + '</span><span class="f-chips">' + chips + "</span></button>";
      }
      grid.innerHTML = html;
      renderSide();
    }

    box.addEventListener("click", function (ev) {
      var b = ev.target.closest ? ev.target.closest("[data-cal],[data-day]") : null;
      if (!b || !box.contains(b)) return;
      var a = b.getAttribute("data-cal");
      if (a === "prev") { view.setMonth(view.getMonth() - 1); selected = null; }
      else if (a === "next") { view.setMonth(view.getMonth() + 1); selected = null; }
      else if (a === "today") { today = new Date(); today.setHours(0, 0, 0, 0); view = new Date(today.getFullYear(), today.getMonth(), 1); selected = null; }
      else {
        var k = b.getAttribute("data-day");
        if (!byDay[k]) return;
        selected = selected === k ? null : k;
        render();
        var again = grid.querySelector('[data-day="' + k + '"]');
        if (again) again.focus();
        return;
      }
      render();
    });
    render();
  }

  /* ---------------- 演出 ---------------- */
  function behavior(root) {
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var reveals = root.querySelectorAll(".f-reveal");
    root.classList.add("f-js");

    var countUp = function (el) {
      if (el.__done) return; el.__done = true;
      var to = parseInt(el.getAttribute("data-to"), 10) || 0;
      if (reduce) { el.textContent = to.toLocaleString(); return; }
      var start = null, dur = 1100;
      var fallback = setTimeout(function () { el.textContent = to.toLocaleString(); }, dur + 500);
      var tick = function (now) {
        if (start === null) start = now;
        var p = Math.min((now - start) / dur, 1);
        var e = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(to * e).toLocaleString();
        if (p < 1) requestAnimationFrame(tick);
        else clearTimeout(fallback);
      };
      requestAnimationFrame(tick);
    };
    var counts = root.querySelectorAll(".f-count");
    counts.forEach(function (el) { el.setAttribute("data-to", el.textContent.replace(/[^0-9]/g, "")); if (!reduce) el.textContent = "0"; });

    if (!reduce) {
      reveals.forEach(function (el) {
        var i = 0, s = el.previousElementSibling;
        while (s) { if (s.classList && s.classList.contains("f-reveal")) i++; s = s.previousElementSibling; }
        if (i) el.style.transitionDelay = Math.min(i * 0.08, 0.32) + "s";
      });
    }

    var reveal = function (el) { el.classList.add("f-in"); el.querySelectorAll(".f-count").forEach(countUp); };
    var showAll = function () { reveals.forEach(reveal); };
    if (reduce) {
      showAll();
    } else if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { if (e.isIntersecting) { reveal(e.target); io.unobserve(e.target); } });
      }, { threshold: 0.12 });
      reveals.forEach(function (el) { io.observe(el); });
      setTimeout(function () { if (!root.querySelector(".f-reveal.f-in")) { if (io.disconnect) io.disconnect(); showAll(); } }, 2500);
    } else {
      showAll();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", build);
  } else {
    build();
  }
})();
