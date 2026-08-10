/* ============================================================
   TAKUDEN — What's FSAEJ?（学生フォーミュラ紹介ページ）本体
   GitHub Pages から配信し、Jimdoのローダーが読み込む単一ソース。
   Jimdo側は次だけ:
     <div id="fsaej-root"></div>
     <script>(function(){var s=document.createElement('script');
       s.src='https://takuden-formula.github.io/website/fsaej/fsaej.js?v='+Date.now();
       document.head.appendChild(s);})();</script>
   更新はこのファイルを編集して git push するだけ。
   ============================================================ */
(function () {
  "use strict";

  var HTML = `
<div id="fsaej-wrapper">

  <!-- ===== ヒーロー ===== -->
  <section class="f-hero">
    <span class="f-hero-glow" aria-hidden="true"></span>
    <div class="f-wrap f-reveal">
      <span class="f-badge">Formula SAE Japan</span>
      <h1 class="f-hero-title">教室を飛び出し、<br><span class="f-grad">未来のクルマ</span>を創る。</h1>
      <p class="f-hero-sub">学生フォーミュラは、単なるレースではありません。<br>構想から設計、製作まで—— すべてを学生の手で。</p>
    </div>
  </section>

  <!-- ===== ステートメント ===== -->
  <section class="f-statement">
    <div class="f-wrap f-reveal">
      <p class="f-statement-lead">単なるレースではない、<br><strong>ものづくりの総合力</strong>を競う。</p>
      <p class="f-statement-body">学生フォーミュラ日本大会（FSAEJ）は、公益社団法人自動車技術会が主催する国際的な学生エンジニアリングコンペティションです。学生たちは架空の自動車メーカーの開発チームとなり、アマチュア週末レーサー向けの小型レーシングカーを企画・設計・製作。プロのエンジニアによる厳しい審査を通じ、技術力・創造力・チームワークの総力を競い合います。</p>
    </div>
  </section>

  <!-- ===== 審査内容 ===== -->
  <section class="f-section">
    <div class="f-wrap">
      <div class="f-reveal">
        <span class="f-eyebrow">Competition</span>
        <h2 class="f-h2">3つの審査で、真の実力を証明</h2>
      </div>

      <!-- スコア構成の可視化 -->
      <div class="f-scorewrap f-reveal">
        <div class="f-scorebar">
          <div class="f-seg f-seg-static" style="flex:325"><span>静的審査</span><b>325</b></div>
          <div class="f-seg f-seg-dynamic" style="flex:675"><span>動的審査</span><b>675</b></div>
        </div>
        <p class="f-scorenote"><strong>合計1000点満点。</strong>さらに <b>車検</b> の合格が、すべての走行審査に進むための前提条件です。</p>
      </div>

      <div class="f-cards">
        <article class="f-card f-reveal">
          <div class="f-card-icon">📋</div>
          <h3 class="f-card-title">静的審査</h3>
          <span class="f-pill">325点</span>
          <ul class="f-list">
            <li><b>デザイン審査（150点）</b>設計の論理性を問う。現役エンジニアと真剣勝負のディスカッション。</li>
            <li><b>コスト審査（100点）</b>ネジ一本のコストまで把握。量産を想定した製造プロセス。</li>
            <li><b>プレゼン審査（75点）</b>仮想の投資家に市場性とビジネスプランを提案。技術を価値に変える力。</li>
          </ul>
        </article>

        <article class="f-card f-reveal">
          <div class="f-card-icon">🔧</div>
          <h3 class="f-card-title">車検</h3>
          <span class="f-pill f-pill-gate">必須ゲート</span>
          <p class="f-card-text"><b>すべての前提条件。</b>どんなに優れた車両でも、車検をクリアしなければ走行できません。EVクラス特有の厳しい電気車検では、絶縁監視・遮断回路の確認・チルト試験・レインテストなど、安全性に関する全項目が徹底的に検査されます。</p>
        </article>

        <article class="f-card f-reveal">
          <div class="f-card-icon">🏁</div>
          <h3 class="f-card-title">動的審査</h3>
          <span class="f-pill">675点</span>
          <ul class="f-list">
            <li><b>加速・旋回・走行（300点）</b>車両の基礎性能を評価。</li>
            <li><b>エンデュランス（275点）</b>約20kmを走る耐久レース。完走こそがマシンの信頼性とチームの技術力の証明。</li>
            <li><b>効率性（100点）</b>エネルギーマネジメントの最適化。</li>
          </ul>
        </article>
      </div>
    </div>
  </section>

  <!-- ===== ダーク：大会の規模＋流れ ===== -->
  <section class="f-dark">
    <span class="f-dark-glow" aria-hidden="true"></span>
    <div class="f-wrap">
      <h2 class="f-h2 f-h2-light f-reveal">日本最大級の<br><span class="f-orange">学生エンジニアリング</span>コンペティション</h2>

      <div class="f-stats f-reveal">
        <div class="f-stat"><div class="f-stat-num">1,000</div><div class="f-stat-label">Total Points</div></div>
        <div class="f-stat"><div class="f-stat-num">20<span class="f-unit">km</span></div><div class="f-stat-label">Endurance</div></div>
        <div class="f-stat"><div class="f-stat-num">6<span class="f-unit">日間</span></div><div class="f-stat-label">Competition Period</div></div>
        <div class="f-stat"><div class="f-stat-num">2026</div><div class="f-stat-label">Next Event</div></div>
      </div>

      <h3 class="f-timeline-head f-reveal">1年間のものづくりの流れ</h3>
      <div class="f-timeline">
        <div class="f-step f-reveal"><div class="f-step-num">1</div><div class="f-step-card"><h4>企画・設計</h4><p>ターゲット市場を分析し、車両コンセプトを決定。CADを駆使した詳細設計と解析を行います。</p></div></div>
        <div class="f-step f-reveal"><div class="f-step-num">2</div><div class="f-step-card"><h4>製作・組み立て</h4><p>部品の調達から加工、組み立てまで。チーム全員で協力し、設計を形にしていきます。</p></div></div>
        <div class="f-step f-reveal"><div class="f-step-num">3</div><div class="f-step-card"><h4>テスト・改良</h4><p>実走行テストを重ね、データを分析。問題点を洗い出し、大会に向けて最終調整を行います。</p></div></div>
        <div class="f-step f-reveal"><div class="f-step-num">4</div><div class="f-step-card"><h4>大会本番</h4><p>静的審査・車検・動的審査。すべての審査で実力を証明し、1年間の成果を発揮します。</p></div></div>
      </div>
    </div>
  </section>

  <!-- ===== EVチャレンジ ===== -->
  <section class="f-section f-section-alt">
    <div class="f-wrap">
      <div class="f-reveal">
        <span class="f-eyebrow">Our Challenge</span>
        <h2 class="f-h2">EV（電気自動車）で、次世代モビリティに挑む</h2>
      </div>
      <div class="f-features">
        <div class="f-feature f-reveal"><div class="f-feature-icon">⚡</div><div><h4>高電圧システム</h4><p>最大600V級のバッテリーシステムを搭載。強力なモーターを駆動し、ガソリン車を凌ぐ加速性能を実現します。</p></div></div>
        <div class="f-feature f-reveal"><div class="f-feature-icon">🛡️</div><div><h4>安全設計</h4><p>絶縁監視装置（IMD）や遮断回路を自作。万が一のトラブル時も即座に高電圧を遮断する多重安全システムを構築しています。</p></div></div>
        <div class="f-feature f-reveal"><div class="f-feature-icon">🔋</div><div><h4>エネルギーマネジメント</h4><p>バッテリーマネジメントシステム（BMS）でセルの電圧・温度を常時監視。最適なエネルギー効率を追求します。</p></div></div>
        <div class="f-feature f-reveal"><div class="f-feature-icon">🔬</div><div><h4>最先端技術への対応</h4><p>2026年大会からの新基準に対応。産業界同様の高度な安全基準で、最先端の技術を学びながら開発を進めています。</p></div></div>
      </div>
    </div>
  </section>

  <!-- ===== CTA ===== -->
  <section class="f-cta">
    <span class="f-cta-c1" aria-hidden="true"></span>
    <span class="f-cta-c2" aria-hidden="true"></span>
    <div class="f-wrap f-reveal">
      <h2 class="f-cta-title">一緒に、未来を創りませんか？</h2>
      <p class="f-cta-sub">学生フォーミュラは、あなたの可能性を最大限に引き出すフィールド。<br>経験は問いません。情熱があれば、誰でもエンジニアになれます。</p>
      <a class="f-cta-btn" href="https://www.jsae.or.jp/formula/" target="_blank" rel="noopener">大会公式サイトを見る →</a>
    </div>
  </section>

</div>`;

  var CSS = `
html,body{overflow-x:hidden;max-width:100%;}
#fsaej-wrapper{--f-orange:#FF6B35;--f-orange-2:#FF8C5A;--f-orange-deep:#E64A19;--f-orange-ink:#D8430F;--f-ink:#1A1A1A;--f-ink2:#2D2D2D;--f-bg:#fff;--f-bg-alt:#F5F5F5;--f-text:#4a4a4a;--f-radius:24px;font-family:"Noto Sans JP",system-ui,-apple-system,"Segoe UI",sans-serif;color:var(--f-ink);line-height:1.7;-webkit-font-smoothing:antialiased;width:100vw;max-width:100vw;margin-left:calc(50% - 50vw);overflow-x:hidden;}
#fsaej-wrapper *{box-sizing:border-box;}
#fsaej-wrapper h1,#fsaej-wrapper h2,#fsaej-wrapper h3,#fsaej-wrapper h4,#fsaej-wrapper p,#fsaej-wrapper ul{margin:0;padding:0;}
#fsaej-wrapper ul{list-style:none;}
#fsaej-wrapper .f-wrap{max-width:1200px;margin:0 auto;padding:0 clamp(22px,5vw,44px);}
#fsaej-wrapper .f-eyebrow{display:block;font-size:1rem;font-weight:800;letter-spacing:.3em;text-transform:uppercase;color:var(--f-orange-ink);margin-bottom:14px;}
#fsaej-wrapper .f-h2{font-size:clamp(2.1rem,5vw,3.6rem);font-weight:900;line-height:1.2;letter-spacing:-.02em;}
#fsaej-wrapper .f-h2-light{color:#fff;}
#fsaej-wrapper .f-orange{color:var(--f-orange);}

/* hero */
#fsaej-wrapper .f-hero{position:relative;overflow:hidden;background:linear-gradient(135deg,#1A1A1A 0%,#2D2D2D 100%);color:#fff;padding:clamp(130px,22vh,230px) 0 clamp(90px,14vh,150px);}
#fsaej-wrapper .f-hero-glow{position:absolute;top:-40%;right:-15%;width:min(820px,90vw);height:min(820px,90vw);background:radial-gradient(circle,var(--f-orange) 0%,transparent 70%);opacity:.16;pointer-events:none;}
#fsaej-wrapper .f-badge{display:inline-block;background:var(--f-orange);color:#fff;padding:9px 22px;border-radius:50px;font-size:.75rem;font-weight:800;letter-spacing:.2em;text-transform:uppercase;margin-bottom:28px;}
#fsaej-wrapper .f-hero-title{font-size:clamp(2.8rem,8.5vw,6.2rem);font-weight:900;line-height:1.08;letter-spacing:-.02em;margin-bottom:26px;}
#fsaej-wrapper .f-grad{color:#FF9A5E;}
#fsaej-wrapper .f-hero-sub{font-size:clamp(1.35rem,2.6vw,2rem);color:rgba(255,255,255,.85);font-weight:300;max-width:840px;line-height:1.75;}

/* statement */
#fsaej-wrapper .f-statement{position:relative;background:var(--f-bg-alt);padding:clamp(64px,10vw,120px) 0;}
#fsaej-wrapper .f-statement::before{content:"";position:absolute;left:0;top:0;bottom:0;width:8px;background:linear-gradient(to bottom,var(--f-orange),var(--f-orange-deep));}
#fsaej-wrapper .f-statement-lead{font-size:clamp(1.8rem,4.5vw,3.4rem);font-weight:800;line-height:1.35;letter-spacing:-.02em;margin-bottom:24px;}
#fsaej-wrapper .f-statement-lead strong{color:var(--f-orange-ink);}
#fsaej-wrapper .f-statement-body{font-size:clamp(1.3rem,2vw,1.7rem);color:var(--f-text);line-height:1.9;max-width:960px;}

/* sections */
#fsaej-wrapper .f-section{background:var(--f-bg);padding:clamp(72px,11vw,140px) 0;}
#fsaej-wrapper .f-section-alt{background:var(--f-bg-alt);}

/* score bar */
#fsaej-wrapper .f-scorewrap{margin:clamp(34px,5vw,54px) 0 clamp(40px,6vw,64px);}
#fsaej-wrapper .f-scorebar{display:flex;gap:8px;height:74px;}
#fsaej-wrapper .f-seg{display:flex;flex-direction:column;align-items:center;justify-content:center;border-radius:14px;color:#fff;line-height:1.1;}
#fsaej-wrapper .f-seg span{font-size:.85rem;font-weight:700;opacity:.9;}
#fsaej-wrapper .f-seg b{font-size:clamp(1.4rem,3vw,2rem);font-weight:900;}
#fsaej-wrapper .f-seg-static{background:linear-gradient(135deg,#3a3a3a,#555);}
#fsaej-wrapper .f-seg-dynamic{background:linear-gradient(135deg,var(--f-orange),var(--f-orange-deep));}
#fsaej-wrapper .f-scorenote{margin-top:16px;font-size:clamp(1.2rem,1.9vw,1.5rem);color:var(--f-text);}
#fsaej-wrapper .f-scorenote strong{color:var(--f-ink);}
#fsaej-wrapper .f-scorenote b{color:var(--f-orange-ink);}

/* cards */
#fsaej-wrapper .f-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:26px;}
#fsaej-wrapper .f-card{display:flex;flex-direction:column;background:#fff;border:1px solid #eee;border-top:6px solid var(--f-orange);border-radius:var(--f-radius);padding:clamp(28px,3vw,44px);box-shadow:0 10px 30px rgba(0,0,0,.06);transition:transform .35s ease,box-shadow .35s ease;}
#fsaej-wrapper .f-card:hover{transform:translateY(-8px);box-shadow:0 24px 50px rgba(0,0,0,.12);}
#fsaej-wrapper .f-card-icon{width:64px;height:64px;border-radius:18px;background:linear-gradient(135deg,var(--f-orange),var(--f-orange-2));display:flex;align-items:center;justify-content:center;font-size:1.9rem;margin-bottom:22px;}
#fsaej-wrapper .f-card-title{font-size:clamp(1.9rem,2.9vw,2.5rem);font-weight:800;margin-bottom:14px;}
#fsaej-wrapper .f-pill{align-self:flex-start;background:var(--f-orange-deep);color:#fff;padding:7px 18px;border-radius:50px;font-size:1.25rem;font-weight:800;margin-bottom:20px;}
#fsaej-wrapper .f-pill-gate{background:var(--f-ink);}
#fsaej-wrapper .f-card-text{color:var(--f-text);font-size:clamp(1.2rem,1.5vw,1.4rem);line-height:1.85;}
#fsaej-wrapper .f-card-text b{color:var(--f-ink);}
#fsaej-wrapper .f-list{display:flex;flex-direction:column;gap:16px;}
#fsaej-wrapper .f-list li{position:relative;padding-left:22px;color:var(--f-text);font-size:clamp(1.2rem,1.5vw,1.4rem);line-height:1.75;}
#fsaej-wrapper .f-list li::before{content:"";position:absolute;left:0;top:.7em;width:8px;height:8px;border-radius:50%;background:var(--f-orange);}
#fsaej-wrapper .f-list b{display:block;color:var(--f-ink);font-size:clamp(1.25rem,1.6vw,1.45rem);margin-bottom:3px;}

/* dark */
#fsaej-wrapper .f-dark{position:relative;overflow:hidden;background:linear-gradient(135deg,#1A1A1A 0%,#2D2D2D 100%);color:#fff;padding:clamp(72px,11vw,140px) 0;}
#fsaej-wrapper .f-dark-glow{position:absolute;bottom:-45%;left:-15%;width:min(640px,80vw);height:min(640px,80vw);background:radial-gradient(circle,var(--f-orange) 0%,transparent 70%);opacity:.12;pointer-events:none;}
#fsaej-wrapper .f-dark .f-wrap{position:relative;z-index:2;}
#fsaej-wrapper .f-stats{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;margin:clamp(40px,6vw,64px) 0;}
#fsaej-wrapper .f-stat{text-align:center;padding:clamp(24px,3vw,36px) 16px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:18px;}
#fsaej-wrapper .f-stat-num{font-size:clamp(2.2rem,4vw,3.2rem);font-weight:900;color:var(--f-orange);line-height:1;margin-bottom:10px;}
#fsaej-wrapper .f-stat-num .f-unit{font-size:.5em;margin-left:2px;}
#fsaej-wrapper .f-stat-label{color:rgba(255,255,255,.65);font-size:.98rem;text-transform:uppercase;letter-spacing:.1em;}
#fsaej-wrapper .f-timeline-head{font-size:clamp(1.7rem,2.8vw,2.4rem);font-weight:800;color:#fff;margin:clamp(30px,5vw,50px) 0 28px;}
#fsaej-wrapper .f-timeline{display:flex;flex-direction:column;}
#fsaej-wrapper .f-step{position:relative;display:grid;grid-template-columns:64px 1fr;gap:22px;padding-bottom:26px;}
#fsaej-wrapper .f-step:not(:last-child)::before{content:"";position:absolute;left:31px;top:66px;bottom:-4px;width:2px;background:rgba(255,255,255,.16);}
#fsaej-wrapper .f-step-num{width:64px;height:64px;border-radius:50%;background:var(--f-orange);display:flex;align-items:center;justify-content:center;font-size:1.5rem;font-weight:900;color:#fff;box-shadow:0 8px 22px rgba(255,107,53,.4);}
#fsaej-wrapper .f-step-card{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:16px;padding:clamp(20px,2.5vw,30px);}
#fsaej-wrapper .f-step-card h4{font-size:clamp(1.55rem,2.4vw,2rem);font-weight:800;color:#fff;margin-bottom:10px;}
#fsaej-wrapper .f-step-card p{color:rgba(255,255,255,.78);font-size:clamp(1.2rem,1.5vw,1.4rem);line-height:1.8;}

/* features */
#fsaej-wrapper .f-features{display:grid;grid-template-columns:repeat(2,1fr);gap:clamp(24px,3vw,40px);margin-top:clamp(40px,5vw,60px);}
#fsaej-wrapper .f-feature{display:grid;grid-template-columns:56px 1fr;gap:20px;align-items:start;}
#fsaej-wrapper .f-feature-icon{width:56px;height:56px;border-radius:14px;background:var(--f-orange);display:flex;align-items:center;justify-content:center;font-size:1.6rem;}
#fsaej-wrapper .f-feature h4{font-size:clamp(1.55rem,2.4vw,2rem);font-weight:800;margin-bottom:10px;}
#fsaej-wrapper .f-feature p{color:var(--f-text);font-size:clamp(1.2rem,1.6vw,1.45rem);line-height:1.85;}

/* cta */
#fsaej-wrapper .f-cta{position:relative;overflow:hidden;background:linear-gradient(135deg,#E9531D,#BF360C);color:#fff;text-align:center;padding:clamp(72px,11vw,130px) 0;}
#fsaej-wrapper .f-cta-c1,#fsaej-wrapper .f-cta-c2{position:absolute;width:400px;height:400px;border-radius:50%;background:rgba(255,255,255,.1);pointer-events:none;}
#fsaej-wrapper .f-cta-c1{top:-200px;left:-200px;}
#fsaej-wrapper .f-cta-c2{bottom:-200px;right:-200px;}
#fsaej-wrapper .f-cta .f-wrap{position:relative;z-index:2;}
#fsaej-wrapper .f-cta-title{font-size:clamp(2rem,5vw,3.4rem);font-weight:900;margin-bottom:18px;}
#fsaej-wrapper .f-cta-sub{font-size:clamp(1.3rem,2vw,1.6rem);color:rgba(255,255,255,.94);line-height:1.8;margin-bottom:34px;}
#fsaej-wrapper .f-cta-btn{display:inline-block;background:#fff;color:var(--f-orange-deep);padding:18px 46px;border-radius:50px;font-weight:800;font-size:1.15rem;text-decoration:none;box-shadow:0 12px 30px rgba(0,0,0,.22);transition:transform .3s ease,box-shadow .3s ease;}
#fsaej-wrapper .f-cta-btn:hover,#fsaej-wrapper .f-cta-btn:focus-visible{transform:translateY(-3px);box-shadow:0 18px 40px rgba(0,0,0,.3);}

/* reveal（JS有効時のみ隠す） */
#fsaej-wrapper.f-js .f-reveal{opacity:0;transform:translateY(38px);transition:opacity .8s ease-out,transform .8s ease-out;}
#fsaej-wrapper.f-js .f-reveal.f-in{opacity:1;transform:none;}
#fsaej-wrapper a:focus-visible{outline:3px solid #fff;outline-offset:3px;border-radius:8px;}

/* responsive */
@media (max-width:860px){
  #fsaej-wrapper .f-cards{grid-template-columns:1fr;}
  #fsaej-wrapper .f-stats{grid-template-columns:repeat(2,1fr);}
  #fsaej-wrapper .f-features{grid-template-columns:1fr;}
}
@media (max-width:480px){
  #fsaej-wrapper .f-scorebar{height:64px;}
  #fsaej-wrapper .f-step{grid-template-columns:52px 1fr;gap:16px;}
  #fsaej-wrapper .f-step-num{width:52px;height:52px;font-size:1.25rem;}
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
    var showAll = function () { reveals.forEach(function (el) { el.classList.add("f-in"); }); };
    if (reduce) {
      showAll();
    } else if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("f-in"); io.unobserve(e.target); } });
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
