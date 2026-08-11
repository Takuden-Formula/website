/* ============================================================
   TAKUDEN — What's FSAEJ?（学生フォーミュラ紹介ページ）本体 [v2 全面刷新]
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

  var HTML = `
<div id="fsaej-wrapper">

  <!-- ===== ヒーロー ===== -->
  <section class="f-hero">
    <div class="f-wrap f-reveal">
      <span class="f-eyebrow">What&rsquo;s FSAEJ?</span>
      <h1 class="f-hero-title">学生が、<br><span class="f-accent">&ldquo;自動車メーカー&rdquo;</span>になる。</h1>
      <p class="f-hero-sub">学生フォーミュラ日本大会（FSAEJ）は、公益社団法人自動車技術会が主催する国際的なエンジニアリングコンペティション。学生が架空の自動車メーカーの開発チームとなり、小型レーシングカーを企画・設計・製作。技術・創造・チームワークの<strong>総合力</strong>を競います。</p>
    </div>
  </section>

  <!-- ===== 2027大会（ダーク帯・主役） ===== -->
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
      <div class="f-reveal"><span class="f-eyebrow-ink">Scoring</span><h2 class="f-h2">1000点で競う、総合力。</h2></div>
      <div class="f-score f-reveal">
        <div class="f-score-bar">
          <div class="f-seg f-seg-static" style="flex:325"><span>静的審査</span><b class="f-count">325</b></div>
          <div class="f-seg f-seg-dynamic" style="flex:675"><span>動的審査</span><b class="f-count">675</b></div>
        </div>
        <p class="f-score-note"><strong>合計1000点満点。</strong>さらに <b>車検（Technical Inspection）</b> の合格が、すべての走行審査に進むための前提条件です。</p>
      </div>
    </div>
  </section>

  <!-- ===== 審査の詳細 ===== -->
  <section class="f-section f-section-alt">
    <div class="f-wrap">
      <div class="f-reveal"><span class="f-eyebrow-ink">Competition</span><h2 class="f-h2">3つの審査で、実力を証明</h2></div>
      <div class="f-panels">
        <div class="f-panel f-reveal">
          <div class="f-panel-head"><div class="f-panel-icon">📋</div><h3 class="f-panel-title">静的審査</h3><span class="f-panel-total"><span class="f-count">325</span><small>pt</small></span></div>
          <div class="f-rows">
            <div class="f-row"><span class="f-row-name">デザイン審査<small>設計の論理性を現役エンジニアと議論</small></span><b class="f-row-pt">150</b></div>
            <div class="f-row"><span class="f-row-name">コスト審査<small>ネジ一本まで。量産を想定した製造性</small></span><b class="f-row-pt">100</b></div>
            <div class="f-row"><span class="f-row-name">プレゼンテーション<small>仮想投資家へ市場性とビジネスを提案</small></span><b class="f-row-pt">75</b></div>
          </div>
        </div>
        <div class="f-panel f-reveal">
          <div class="f-panel-head"><div class="f-panel-icon">🏁</div><h3 class="f-panel-title">動的審査</h3><span class="f-panel-total"><span class="f-count">675</span><small>pt</small></span></div>
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
        <div class="f-gate-icon">🔧</div>
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
      <div class="f-reveal"><span class="f-eyebrow-ink">Our Year</span><h2 class="f-h2">1年をかけて、1台を。</h2></div>
      <div class="f-timeline">
        <div class="f-step f-reveal"><div class="f-step-num">1</div><div class="f-step-card"><h4>企画・設計</h4><p>ターゲット市場を分析して車両コンセプトを決定。CADを駆使した詳細設計と解析を行います。</p></div></div>
        <div class="f-step f-reveal"><div class="f-step-num">2</div><div class="f-step-card"><h4>製作・組み立て</h4><p>部品の調達から加工、組み立てまで。チーム全員で協力し、設計を形にしていきます。</p></div></div>
        <div class="f-step f-reveal"><div class="f-step-num">3</div><div class="f-step-card"><h4>テスト・改良</h4><p>実走行テストを重ねてデータを分析。問題点を洗い出し、大会に向けて最終調整します。</p></div></div>
        <div class="f-step f-reveal"><div class="f-step-num">4</div><div class="f-step-card"><h4>大会本番（8月）</h4><p>静的審査・車検・動的審査。すべての審査で実力を証明し、1年間の成果を発揮します。</p></div></div>
      </div>
    </div>
  </section>

  <!-- ===== EVで挑む（ダーク） ===== -->
  <section class="f-ev">
    <span class="f-event-glow" aria-hidden="true"></span>
    <div class="f-wrap">
      <div class="f-reveal"><span class="f-eyebrow">Our Challenge</span><h2 class="f-h2 f-h2-light">EV（電気自動車）で挑む</h2></div>
      <div class="f-features">
        <div class="f-feature f-reveal"><div class="f-feature-icon">⚡</div><div><h4>高電圧システム</h4><p>最大600V級のバッテリーを搭載。強力なモーターで、ガソリン車を凌ぐ加速性能を実現します。</p></div></div>
        <div class="f-feature f-reveal"><div class="f-feature-icon">🛡️</div><div><h4>安全設計</h4><p>絶縁監視装置（IMD）や遮断回路を自作。異常時に即座に高電圧を遮断する多重安全システム。</p></div></div>
        <div class="f-feature f-reveal"><div class="f-feature-icon">🔋</div><div><h4>エネルギーマネジメント</h4><p>BMSでセルの電圧・温度を常時監視。限られた電力で最大の性能を引き出します。</p></div></div>
        <div class="f-feature f-reveal"><div class="f-feature-icon">🔬</div><div><h4>最先端基準への対応</h4><p>年々更新される安全基準に対応。産業界と同等の高い水準で開発を進めています。</p></div></div>
      </div>
    </div>
  </section>

  <!-- ===== CTA ===== -->
  <section class="f-cta">
    <span class="f-cta-c1" aria-hidden="true"></span>
    <span class="f-cta-c2" aria-hidden="true"></span>
    <div class="f-wrap f-reveal">
      <h2 class="f-cta-title">2027、Aichi Sky Expoで会おう。</h2>
      <p class="f-cta-sub">TAKUDENは、この舞台で世界と競うマシンを、学生の手で創り上げます。</p>
      <a class="f-cta-btn" href="https://www.jsae.or.jp/formula/" target="_blank" rel="noopener">大会公式サイトを見る →</a>
    </div>
  </section>

</div>`;

  var CSS = `
html,body{overflow-x:hidden;max-width:100%;}
#fsaej-wrapper{--f-orange:#FF6B00;--f-orange-deep:#E65A00;--f-orange-ink:#C2410C;--f-ink:#161616;--f-ink2:#242424;--f-bg:#fff;--f-bg-alt:#f6f7f9;--f-text:#484848;--f-border:#e6e6ea;--f-radius:24px;font-family:"Noto Sans JP",system-ui,-apple-system,"Segoe UI",sans-serif;color:var(--f-ink);line-height:1.75;-webkit-font-smoothing:antialiased;width:100vw;max-width:100vw;margin-left:calc(50% - 50vw);overflow-x:hidden;}
#fsaej-wrapper *{box-sizing:border-box;}
#fsaej-wrapper h1,#fsaej-wrapper h2,#fsaej-wrapper h3,#fsaej-wrapper h4,#fsaej-wrapper p{margin:0;padding:0;}
#fsaej-wrapper .f-wrap{max-width:1200px;margin:0 auto;padding:0 clamp(22px,5vw,48px);}
#fsaej-wrapper .f-accent{color:var(--f-orange);}
#fsaej-wrapper .f-eyebrow,#fsaej-wrapper .f-eyebrow-ink{display:block;font-size:clamp(.95rem,1.5vw,1.15rem);font-weight:900;letter-spacing:.32em;text-transform:uppercase;margin-bottom:16px;}
#fsaej-wrapper .f-eyebrow{color:var(--f-orange);}
#fsaej-wrapper .f-eyebrow-ink{color:var(--f-orange-ink);}
#fsaej-wrapper .f-h2{font-size:clamp(2.4rem,5.5vw,4.2rem);font-weight:900;line-height:1.18;letter-spacing:-.02em;}
#fsaej-wrapper .f-h2-light{color:#fff;}

/* hero */
#fsaej-wrapper .f-hero{background:var(--f-bg);background-image:radial-gradient(circle at 1px 1px,rgba(20,20,20,.06) 1px,transparent 0);background-size:40px 40px;padding:clamp(96px,15vw,190px) 0 clamp(70px,10vw,120px);}
#fsaej-wrapper .f-hero-title{font-size:clamp(2.9rem,8vw,6.2rem);font-weight:900;line-height:1.1;letter-spacing:-.03em;margin-bottom:30px;}
#fsaej-wrapper .f-hero-sub{font-size:clamp(1.3rem,2.2vw,1.8rem);color:var(--f-text);line-height:1.9;max-width:960px;}
#fsaej-wrapper .f-hero-sub strong{color:var(--f-ink);font-weight:900;}

/* 2027 event dark band */
#fsaej-wrapper .f-event{position:relative;overflow:hidden;background:linear-gradient(135deg,#141414,#2a2a2a);color:#fff;padding:clamp(60px,9vw,110px) 0;}
#fsaej-wrapper .f-event-glow{position:absolute;top:-40%;right:-10%;width:min(700px,80vw);height:min(700px,80vw);background:radial-gradient(circle,var(--f-orange) 0%,transparent 70%);opacity:.16;pointer-events:none;}
#fsaej-wrapper .f-event .f-wrap{position:relative;z-index:1;}
#fsaej-wrapper .f-event-label{display:block;font-size:clamp(.95rem,1.6vw,1.2rem);font-weight:900;letter-spacing:.2em;text-transform:uppercase;color:var(--f-orange);margin-bottom:28px;}
#fsaej-wrapper .f-event-grid{display:grid;grid-template-columns:auto 1fr;gap:clamp(30px,5vw,72px);align-items:center;}
#fsaej-wrapper .f-event-date{display:flex;flex-direction:column;}
#fsaej-wrapper .f-event-year{font-size:clamp(1.4rem,2.4vw,1.9rem);font-weight:800;color:rgba(255,255,255,.55);letter-spacing:.1em;}
#fsaej-wrapper .f-event-range{font-size:clamp(3.4rem,10vw,7.5rem);font-weight:900;line-height:1;letter-spacing:-.03em;color:#fff;}
#fsaej-wrapper .f-event-arrow{color:var(--f-orange);margin:0 .1em;}
#fsaej-wrapper .f-event-meta{display:grid;gap:18px;}
#fsaej-wrapper .f-event-item{display:flex;align-items:baseline;gap:18px;border-left:4px solid var(--f-orange);padding-left:20px;}
#fsaej-wrapper .f-event-k{flex:none;font-size:1rem;font-weight:900;color:rgba(255,255,255,.55);letter-spacing:.1em;}
#fsaej-wrapper .f-event-v{font-size:clamp(1.5rem,2.6vw,2.1rem);font-weight:900;color:#fff;line-height:1.2;}
#fsaej-wrapper .f-event-v small{display:block;font-size:.9rem;font-weight:700;color:rgba(255,255,255,.5);margin-top:2px;letter-spacing:.05em;}
#fsaej-wrapper .f-event-note{margin-top:clamp(30px,4vw,48px);font-size:clamp(.95rem,1.4vw,1.15rem);color:rgba(255,255,255,.6);font-weight:700;}
#fsaej-wrapper .f-event-note span{display:block;margin-top:6px;font-size:.85rem;color:rgba(255,255,255,.38);font-weight:600;letter-spacing:.04em;}

/* sections */
#fsaej-wrapper .f-section{background:var(--f-bg);padding:clamp(70px,11vw,140px) 0;}
#fsaej-wrapper .f-section-alt{background:var(--f-bg-alt);}
#fsaej-wrapper .f-section .f-eyebrow-ink{text-align:left;}

/* score */
#fsaej-wrapper .f-score{margin-top:clamp(36px,5vw,60px);}
#fsaej-wrapper .f-score-bar{display:flex;gap:10px;height:clamp(72px,9vw,96px);}
#fsaej-wrapper .f-seg{display:flex;flex-direction:column;align-items:center;justify-content:center;border-radius:16px;color:#fff;line-height:1.1;}
#fsaej-wrapper .f-seg span{font-size:clamp(.95rem,1.4vw,1.15rem);font-weight:800;opacity:.92;}
#fsaej-wrapper .f-seg b{font-size:clamp(1.6rem,3.4vw,2.6rem);font-weight:900;}
#fsaej-wrapper .f-seg-static{background:linear-gradient(135deg,#3a3a3a,#565656);}
#fsaej-wrapper .f-seg-dynamic{background:linear-gradient(135deg,var(--f-orange),var(--f-orange-deep));}
#fsaej-wrapper .f-score-note{margin-top:20px;font-size:clamp(1.15rem,1.8vw,1.5rem);color:var(--f-text);line-height:1.8;}
#fsaej-wrapper .f-score-note strong{color:var(--f-ink);font-weight:900;}
#fsaej-wrapper .f-score-note b{color:var(--f-orange-ink);font-weight:900;}

/* judging panels */
#fsaej-wrapper .f-panels{display:grid;grid-template-columns:1fr 1fr;gap:28px;margin-top:clamp(40px,6vw,64px);}
#fsaej-wrapper .f-panel{background:#fff;border:1px solid var(--f-border);border-radius:var(--f-radius);padding:clamp(28px,3vw,44px);box-shadow:0 10px 30px rgba(20,20,20,.05);}
#fsaej-wrapper .f-panel-head{display:flex;align-items:center;gap:16px;padding-bottom:22px;margin-bottom:12px;border-bottom:2px solid var(--f-border);}
#fsaej-wrapper .f-panel-icon{width:56px;height:56px;flex:none;border-radius:16px;background:linear-gradient(135deg,var(--f-orange),#ff8a3d);display:flex;align-items:center;justify-content:center;font-size:1.7rem;}
#fsaej-wrapper .f-panel-title{font-size:clamp(1.7rem,2.6vw,2.2rem);font-weight:900;flex:1;}
#fsaej-wrapper .f-panel-total{font-size:clamp(2rem,3vw,2.8rem);font-weight:900;color:var(--f-orange-ink);line-height:1;}
#fsaej-wrapper .f-panel-total small{font-size:.4em;font-weight:800;margin-left:2px;color:var(--f-slate,#8a8a8a);}
#fsaej-wrapper .f-rows{display:flex;flex-direction:column;}
#fsaej-wrapper .f-row{display:flex;align-items:center;gap:18px;justify-content:space-between;padding:18px 0;border-bottom:1px dashed var(--f-border);}
#fsaej-wrapper .f-row:last-child{border-bottom:0;}
#fsaej-wrapper .f-row-name{font-size:clamp(1.2rem,1.7vw,1.5rem);font-weight:800;color:var(--f-ink);line-height:1.3;}
#fsaej-wrapper .f-row-name small{display:block;font-size:.72em;font-weight:600;color:var(--f-text);margin-top:3px;line-height:1.4;}
#fsaej-wrapper .f-row-pt{flex:none;font-size:clamp(1.6rem,2.4vw,2.1rem);font-weight:900;color:var(--f-ink);}

/* gate */
#fsaej-wrapper .f-gate{display:flex;align-items:center;gap:clamp(20px,3vw,36px);margin-top:28px;background:var(--f-ink);color:#fff;border-radius:var(--f-radius);padding:clamp(28px,3.5vw,48px);}
#fsaej-wrapper .f-gate-icon{width:64px;height:64px;flex:none;border-radius:18px;background:var(--f-orange);display:flex;align-items:center;justify-content:center;font-size:1.9rem;}
#fsaej-wrapper .f-gate-title{font-size:clamp(1.5rem,2.4vw,2rem);font-weight:900;margin-bottom:8px;color:#fff;}
#fsaej-wrapper .f-gate-body p{font-size:clamp(1.1rem,1.6vw,1.35rem);color:rgba(255,255,255,.78);line-height:1.8;}

/* timeline (light) */
#fsaej-wrapper .f-timeline{display:flex;flex-direction:column;margin-top:clamp(40px,6vw,60px);}
#fsaej-wrapper .f-step{position:relative;display:grid;grid-template-columns:64px 1fr;gap:22px;padding-bottom:26px;}
#fsaej-wrapper .f-step:not(:last-child)::before{content:"";position:absolute;left:31px;top:66px;bottom:-4px;width:2px;background:var(--f-border);}
#fsaej-wrapper .f-step-num{width:64px;height:64px;border-radius:50%;background:var(--f-orange);display:flex;align-items:center;justify-content:center;font-size:1.6rem;font-weight:900;color:#fff;box-shadow:0 10px 26px rgba(255,107,0,.35);}
#fsaej-wrapper .f-step-card{background:#fff;border:1px solid var(--f-border);border-radius:18px;padding:clamp(22px,2.6vw,32px);box-shadow:0 8px 22px rgba(20,20,20,.05);}
#fsaej-wrapper .f-step-card h4{font-size:clamp(1.5rem,2.4vw,2rem);font-weight:900;margin-bottom:8px;}
#fsaej-wrapper .f-step-card p{font-size:clamp(1.15rem,1.5vw,1.4rem);color:var(--f-text);line-height:1.8;}

/* EV dark */
#fsaej-wrapper .f-ev{position:relative;overflow:hidden;background:linear-gradient(135deg,#141414,#2a2a2a);color:#fff;padding:clamp(72px,11vw,140px) 0;}
#fsaej-wrapper .f-ev .f-wrap{position:relative;z-index:1;}
#fsaej-wrapper .f-features{display:grid;grid-template-columns:repeat(2,1fr);gap:clamp(26px,3.5vw,44px);margin-top:clamp(40px,5vw,60px);}
#fsaej-wrapper .f-feature{display:grid;grid-template-columns:60px 1fr;gap:20px;align-items:start;}
#fsaej-wrapper .f-feature-icon{width:60px;height:60px;flex:none;border-radius:16px;background:var(--f-orange);display:flex;align-items:center;justify-content:center;font-size:1.7rem;}
#fsaej-wrapper .f-feature h4{font-size:clamp(1.5rem,2.4vw,2rem);font-weight:900;margin-bottom:8px;color:#fff;}
#fsaej-wrapper .f-feature p{font-size:clamp(1.15rem,1.6vw,1.4rem);color:rgba(255,255,255,.75);line-height:1.85;}

/* cta */
#fsaej-wrapper .f-cta{position:relative;overflow:hidden;background:linear-gradient(135deg,#E9531D,#BF360C);color:#fff;text-align:center;padding:clamp(72px,11vw,130px) 0;}
#fsaej-wrapper .f-cta-c1,#fsaej-wrapper .f-cta-c2{position:absolute;width:400px;height:400px;border-radius:50%;background:rgba(255,255,255,.1);pointer-events:none;}
#fsaej-wrapper .f-cta-c1{top:-200px;left:-200px;}
#fsaej-wrapper .f-cta-c2{bottom:-200px;right:-200px;}
#fsaej-wrapper .f-cta .f-wrap{position:relative;z-index:1;}
#fsaej-wrapper .f-cta-title{font-size:clamp(2.2rem,5vw,3.6rem);font-weight:900;line-height:1.2;margin-bottom:18px;}
#fsaej-wrapper .f-cta-sub{font-size:clamp(1.25rem,2vw,1.6rem);color:rgba(255,255,255,.94);line-height:1.8;margin-bottom:34px;}
#fsaej-wrapper .f-cta-btn{display:inline-block;background:#fff;color:#BF360C;padding:18px 46px;border-radius:50px;font-weight:900;font-size:clamp(1.15rem,1.8vw,1.4rem);text-decoration:none;box-shadow:0 14px 34px rgba(0,0,0,.24);transition:transform .3s ease,box-shadow .3s ease;}
#fsaej-wrapper .f-cta-btn:hover,#fsaej-wrapper .f-cta-btn:focus-visible{transform:translateY(-3px);box-shadow:0 20px 44px rgba(0,0,0,.32);}

/* reveal */
#fsaej-wrapper.f-js .f-reveal{opacity:0;transform:translateY(42px);transition:opacity .8s cubic-bezier(.16,1,.3,1),transform .9s cubic-bezier(.16,1,.3,1);}
#fsaej-wrapper.f-js .f-reveal.f-in{opacity:1;transform:none;}
#fsaej-wrapper .f-section,#fsaej-wrapper .f-ev,#fsaej-wrapper .f-cta{content-visibility:auto;contain-intrinsic-size:auto 800px;}
#fsaej-wrapper a:focus-visible{outline:3px solid #fff;outline-offset:3px;border-radius:8px;}

/* responsive */
@media (max-width:820px){
  #fsaej-wrapper .f-panels{grid-template-columns:1fr;}
  #fsaej-wrapper .f-features{grid-template-columns:1fr;}
  #fsaej-wrapper .f-event-grid{grid-template-columns:1fr;gap:32px;}
  #fsaej-wrapper .f-gate{flex-direction:column;text-align:center;}
}
@media (max-width:480px){
  #fsaej-wrapper .f-score-bar{height:64px;}
  #fsaej-wrapper .f-step{grid-template-columns:52px 1fr;gap:16px;}
  #fsaej-wrapper .f-step-num{width:52px;height:52px;font-size:1.3rem;}
  #fsaej-wrapper .f-step:not(:last-child)::before{left:25px;top:54px;}
}
@media (prefers-reduced-motion:reduce){
  #fsaej-wrapper.f-js .f-reveal{opacity:1;transform:none;transition:none;}
}`;

  function build() {
    var mount = document.getElementById("fsaej-root") || document.getElementById("fsaej-wrapper");
    if (!mount) return;
    if (!document.querySelector("style[data-fsaej]")) {
      var st = document.createElement("style");
      st.setAttribute("data-fsaej", "1");
      st.textContent = CSS;
      document.head.appendChild(st);
    }
    if (!mount.querySelector("#fsaej-wrapper")) { mount.innerHTML = HTML; }
    var root = document.getElementById("fsaej-wrapper");
    if (!root) return;
    behavior(root);
  }

  function behavior(root) {
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var reveals = root.querySelectorAll(".f-reveal");
    root.classList.add("f-js");

    // カウントアップ（数字が0→本来の値へ）
    var countUp = function (el) {
      if (el.__done) return; el.__done = true;
      var to = parseInt(el.getAttribute("data-to"), 10) || 0;
      if (reduce) { el.textContent = to.toLocaleString(); return; }
      var start = null, dur = 1100;
      // 保険：rAFが止まっても最終値は必ず表示
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

    // カスケード（同じ親の連続要素を少し遅らせる）
    if (!reduce) {
      reveals.forEach(function (el) {
        var i = 0, s = el.previousElementSibling;
        while (s) { if (s.classList && s.classList.contains("f-reveal")) i++; s = s.previousElementSibling; }
        if (i) el.style.transitionDelay = Math.min(i * 0.09, 0.36) + "s";
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
