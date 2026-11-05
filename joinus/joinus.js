/* ============================================================
   TAKUDEN — Join Us（入部案内ページ）本体
   GitHub Pages から配信し、Jimdoのローダーが読み込む単一ソース。
   Jimdo側:
     <div id="joinus-root"></div>
     <script>(function(){var s=document.createElement('script');
       s.src='https://takuden-formula.github.io/website/joinus/joinus.js?v='+Date.now();
       document.head.appendChild(s);})();</script>
   ============================================================ */
(function () {
  "use strict";

  var SELF = (document.currentScript && document.currentScript.src) || "";
  var BASE = /\/joinus\/joinus\.js/.test(SELF)
    ? SELF.replace(/\/joinus\/joinus\.js.*$/, "")
    : "https://takuden-formula.github.io/website";

  // 担当（班）。サークルの作業管理の班分けに合わせている
  var TEAMS = [
    ["01", "機械", "フレームと足回りの設計・解析、CAD、溶接・加工。", "Fusion / SOLIDWORKS / Ansys"],
    ["02", "回路", "高電圧回路、車両の制御、インバータとのCAN通信。", "Arduino / ESP32 / KiCad / LTspice"],
    ["03", "バッテリー", "電池モジュールの監視と、充放電の試験。", "BMS / 計測"],
    ["04", "広報", "SNS・ホームページ・文化祭の企画と展示。", "Instagram / X / Web"],
    ["05", "渉外", "支援企業の皆様への連絡と、活動報告書づくり。", "報告書 / メール"]
  ];

  // メンバーの声（掲載時点の学年・担当）
  var VOICES = [
    ["S", "3年生 / 設計担当", "就活に役立つ、本気のガクチカ。", "あまり車に興味はなかったけど、入ってみたら貴重な経験の連続。実際に企業から「ガクチカ」として高く評価され、就活の大きな武器になりました。"],
    ["Y", "回路担当", "座学を超えた、実践の場。", "授業だけでは触れられない、リアルな技術を仲間と高め合えます。エンジニアとしての第一歩を踏み出し、将来のキャリアが明確に見えました。"],
    ["U", "4年生 / 前代表", "工学部なら、迷わずここへ。", "全員で一つを作り上げる大変さはありますが、その分やりがいと達成感は格別。工学部の学生には自信を持って入部をおすすめします！"],
    ["T", "3年生 / デザイン", "理想が現実になる感動。", "自分がデザインしたパーツが本物の形になる。実践的なCADを基礎から習得し、設計データが目の前に現れた時の達成感は格別です。"],
    ["Y", "カウル製作", "走らせるのは人間だろ。", "大会で本気の大人が泣く姿を見た。受け身の毎日はもう終わり。ここが、本気になれるラストチャンスです。"],
    ["S", "1年生 / 研修中", "失敗できるサークル。", "ここでは「失敗」が当たり前。その試行錯誤こそが成長。一からEVを作る中で、最高の仲間と出会えました。"]
  ];

  var PHOTOS = [
    ["welding.jpg", "部室での溶接作業"],
    ["breadboard.jpg", "新人教育｜マイコンでモーターを動かす入門"],
    ["kart-run.jpg", "学内でのEVカート走行"],
    ["ryoryo-logo.jpg", "紅陵祭2026の教室展示"]
  ];

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  var HTML = `
<div id="joinus-wrapper">

  <section class="j-hero">
    <div class="j-hero-media" aria-hidden="true"><img src="${BASE}/photos/kart-run.jpg" alt="" width="1600" height="1201"></div>
    <div class="j-wrap j-hero-inner">
      <img class="j-hero-logo" src="${BASE}/brand/logo-white.png" alt="TAKUDEN FORMULA" width="1129" height="190">
      <p class="j-label">New Members Wanted</p>
      <h1 class="j-hero-title">未来を、<br><em>その手で創れ。</em></h1>
      <p class="j-hero-sub">拓殖大学電気自動車同好会「TAKUDEN FORMULA」へようこそ。<br>電気で走るフォーミュラカーを、設計から自分たちの手でつくっています。</p>
      <ul class="j-facts">
        <li><b>水・金</b><span>活動日 4・5限</span></li>
        <li><b>0円</b><span>部費</span></li>
        <li><b>365日</b><span>入部・見学受付</span></li>
      </ul>
      <div class="j-hero-btns">
        <a href="#contact" class="j-btn j-btn-o">見学・入部を相談する</a>
        <a href="#teams" class="j-btn">何ができる？</a>
      </div>
    </div>
    <div class="j-slash" aria-hidden="true"><i></i><i></i><i></i></div>
  </section>

  <section id="teams" class="j-section">
    <div class="j-wrap">
      <div class="j-head j-reveal">
        <h2 class="j-label">What You Can Do</h2>
        <h3 class="j-h2">興味のあることから、<br><span class="j-accent">はじめられる。</span></h3>
        <p class="j-lead">1台のEVをつくるには、機械も電気も、伝える力も必要です。担当は話し合って決め、いくつかを掛け持つこともできます。</p>
      </div>
      <ol class="j-teams">
        ${TEAMS.map(function (t) { return '<li class="j-team j-reveal"><span class="j-team-no">' + t[0] + '</span><h4>' + esc(t[1]) + '</h4><p>' + esc(t[2]) + '</p><small>' + esc(t[3]) + '</small></li>'; }).join("")}
      </ol>
    </div>
  </section>

  <div class="j-strip j-reveal" aria-label="活動の様子">
    ${PHOTOS.map(function (p) { return '<figure><img loading="lazy" decoding="async" src="' + BASE + '/photos/' + p[0] + '" alt="' + esc(p[1]) + '"><figcaption>' + esc(p[1]) + '</figcaption></figure>'; }).join("")}
  </div>

  <section id="voices" class="j-section j-section-alt">
    <div class="j-wrap">
      <div class="j-head j-reveal">
        <h2 class="j-label">Member Voices</h2>
        <h3 class="j-h2">メンバーの声</h3>
        <p class="j-voice-note">※学年・担当は掲載時点のものです。</p>
      </div>
      <div class="j-voices">
        ${VOICES.map(function (v) { return '<article class="j-vcard j-reveal"><p class="j-vquote">「' + esc(v[2]) + '」</p><p class="j-vbody">' + esc(v[3]) + '</p><div class="j-vhead"><span class="j-avatar">' + esc(v[0]) + '</span><span class="j-vrole">' + esc(v[0]) + 'さん｜' + esc(v[1]) + '</span></div></article>'; }).join("")}
      </div>
    </div>
  </section>

  <section id="flow" class="j-section">
    <div class="j-wrap">
      <div class="j-head j-reveal">
        <h2 class="j-label">How To Join</h2>
        <h3 class="j-h2">入部までの流れ</h3>
      </div>
      <ol class="j-flow">
        <li class="j-reveal"><span>STEP 01</span><h4>連絡する</h4><p>公式LINE・SNS・メールのどれからでも。「話だけ聞きたい」も歓迎です。</p></li>
        <li class="j-reveal"><span>STEP 02</span><h4>見学に来る</h4><p>水曜・金曜の4・5限に活動しています。部室やガレージで、実際の作業を見てください。</p></li>
        <li class="j-reveal"><span>STEP 03</span><h4>入部する</h4><p>部費はかかりません。まずは先輩と一緒に、興味のある担当から始めます。</p></li>
      </ol>
    </div>
  </section>

  <section id="location" class="j-section j-section-alt">
    <div class="j-wrap">
      <div class="j-head j-reveal">
        <h2 class="j-label">Activity Bases</h2>
        <h3 class="j-h2">活動拠点</h3>
        <p class="j-lead">八王子国際キャンパスの2か所で活動しています。</p>
      </div>
      <div class="j-locs">
        <article class="j-loc j-reveal">
          <div class="j-map"><iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d405.4452187313881!2d139.27681165840916!3d35.62544439401732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzXCsDM3JzMxLjYiTiAxMznCsDE2JzM3LjEiRQ!5e0!3m2!1sja!2sjp!4v1728866579633!5m2!1sja!2sjp" loading="lazy" allowfullscreen title="学生交流会館 422号室の地図"></iframe></div>
          <div class="j-loc-body"><span class="j-loc-tag">Lab 01</span><h4>学生交流会館 422号室</h4><p>回路の設計、プログラミング、ミーティングなどを行う中心拠点です。</p></div>
        </article>
        <article class="j-loc j-reveal">
          <div class="j-map"><iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d405.4398862908851!2d139.27736145840913!3d35.62641669400266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzXCsDM3JzM1LjEiTiAxMznCsDE2JzM4LjUiRQ!5e0!3m2!1sja!2sjp!4v1728866657831!5m2!1sja!2sjp" loading="lazy" allowfullscreen title="実験実習工場横 倉庫の地図"></iframe></div>
          <div class="j-loc-body"><span class="j-loc-tag">Garage 02</span><h4>実験実習工場横 倉庫</h4><p>マシンの組み立てや大型パーツの加工、走行に向けた準備などを行うガレージです。工具類も充実しています。</p></div>
        </article>
      </div>
    </div>
  </section>

  <section id="contact" class="j-section j-contact">
    <div class="j-wrap">
      <div class="j-head j-reveal">
        <h2 class="j-label">Contact &amp; Join</h2>
        <h3 class="j-h2">君の挑戦を、<br><span class="j-accent">待っている。</span></h3>
        <p class="j-lead">加入希望者は<b>365日いつでも募集中</b>。「迷っているけど話は聞いてみたい」「新歓情報だけ確認したい」という方も大歓迎です。まずは公式LINEの登録やSNSのフォローからどうぞ。</p>
      </div>
      <div class="j-contact-actions j-reveal">
        <a class="j-btn j-btn-o j-btn-xl" href="https://lin.ee/PRW5jYj" target="_blank" rel="noopener">公式LINEで相談する</a>
        <a class="j-btn j-btn-xl" href="mailto:takushokudaidennkijidousha@gmail.com">Eメールで相談する</a>
      </div>
      <div class="j-sns j-reveal">
        <a href="https://www.instagram.com/takudai_ev/" target="_blank" rel="noopener" aria-label="Instagram（新しいタブ）"><img loading="lazy" alt="Instagram" src="https://image.jimcdn.com/app/cms/image/transf/dimension=512x512:format=png/path/s526a7478a3a00671/image/ie05babe034ac5fba/version/1766837981/image.png"></a>
        <a href="https://x.com/takudai_ev" target="_blank" rel="noopener" aria-label="X（新しいタブ）" class="j-sns-x"><img loading="lazy" alt="X" src="https://image.jimcdn.com/app/cms/image/transf/dimension=512x512:format=png/path/s526a7478a3a00671/image/i9713588295e7af31/version/1771049063/image.png"></a>
        <a href="https://lin.ee/PRW5jYj" target="_blank" rel="noopener" aria-label="公式LINE（新しいタブ）"><img loading="lazy" alt="LINE" src="https://image.jimcdn.com/app/cms/image/transf/dimension=512x512:format=png/path/s526a7478a3a00671/image/ibd212acac6884a45/version/1771049447/image.png"></a>
      </div>
    </div>
  </section>

  <footer class="j-footer">
    <img src="${BASE}/brand/mark-white.png" alt="" width="353" height="190" loading="lazy">
    <p>© 2026 Takushoku University Electric Vehicle Club — TAKUDEN FORMULA</p>
  </footer>

</div>`;

  var CSS = `
html,body{overflow-x:hidden;max-width:100%;}
#joinus-wrapper{--o:#FF5A00;--ink:#111214;--black:#0c0c0e;--slate:#475569;--slate-soft:#64748b;--bg-alt:#f6f7f9;--border:#e2e8f0;font-family:"Noto Sans JP",system-ui,-apple-system,"Segoe UI",sans-serif;color:var(--ink);line-height:1.7;-webkit-font-smoothing:antialiased;width:100vw;max-width:100vw;margin-left:calc(50% - 50vw);overflow-x:hidden;background:#fff;}
#joinus-wrapper *{box-sizing:border-box;}
#joinus-wrapper h1,#joinus-wrapper h2,#joinus-wrapper h3,#joinus-wrapper h4,#joinus-wrapper p,#joinus-wrapper figure,#joinus-wrapper ol,#joinus-wrapper ul{margin:0;padding:0;}
#joinus-wrapper a{text-decoration:none;color:inherit;}
#joinus-wrapper img{display:block;max-width:100%;}
#joinus-wrapper section{scroll-margin-top:24px;}
#joinus-wrapper .j-wrap{width:90%;max-width:1240px;margin:0 auto;}
#joinus-wrapper .j-accent{color:var(--o)!important;}
#joinus-wrapper .j-label{display:block;font-family:"Noto Sans JP",system-ui,sans-serif!important;font-size:12px!important;line-height:1.6!important;font-weight:900!important;font-style:normal!important;letter-spacing:.4em!important;text-transform:uppercase!important;color:var(--o)!important;text-align:inherit!important;}
#joinus-wrapper .j-label::before{content:"";display:inline-block;width:20px;height:11px;margin:0 14px 2px 0;vertical-align:middle;background:repeating-linear-gradient(90deg,var(--o) 0 5px,transparent 5px 8px);transform:skewX(-24deg);}
#joinus-wrapper .j-h2{margin-top:14px!important;font-family:"Noto Sans JP",system-ui,sans-serif!important;font-size:clamp(32px,5.4vw,64px)!important;font-weight:900!important;font-style:italic!important;letter-spacing:-.02em!important;line-height:1.12!important;color:var(--ink)!important;text-align:center!important;text-transform:none!important;}
#joinus-wrapper .j-head{text-align:center;margin-bottom:clamp(36px,5vw,64px);}
#joinus-wrapper .j-lead{margin:20px auto 0;max-width:720px;font-size:15px;color:var(--slate);line-height:1.9;}
#joinus-wrapper .j-lead b{color:var(--ink);}
#joinus-wrapper .j-section{padding:clamp(72px,10vw,130px) 0;}
#joinus-wrapper .j-section-alt{background:var(--bg-alt);}

/* hero */
#joinus-wrapper .j-hero{position:relative;overflow:hidden;background:var(--black);color:#fff;padding:clamp(72px,10vw,130px) 0 clamp(72px,9vw,110px);}
#joinus-wrapper .j-hero-media{position:absolute;top:0;right:0;bottom:0;width:50%;clip-path:polygon(22% 0,100% 0,100% 100%,0 100%);}
#joinus-wrapper .j-hero-media img{width:100%;height:100%;object-fit:cover;filter:grayscale(.3) brightness(.78);}
#joinus-wrapper .j-hero-media::after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,var(--black),rgba(12,12,14,.1) 45%,transparent);}
#joinus-wrapper .j-hero-inner{position:relative;z-index:2;}
#joinus-wrapper .j-hero-logo{width:min(320px,64vw);height:auto;margin-bottom:clamp(28px,4vw,44px);}
#joinus-wrapper .j-hero .j-label{text-align:left!important;}
#joinus-wrapper h1.j-hero-title{margin-top:14px!important;font-family:"Noto Sans JP",system-ui,sans-serif!important;font-size:clamp(42px,7.5vw,96px)!important;font-weight:900!important;font-style:italic!important;letter-spacing:-.03em!important;line-height:1.05!important;color:#fff!important;text-align:left!important;text-transform:none!important;}
#joinus-wrapper h1.j-hero-title em{font-style:italic!important;color:var(--o)!important;}
#joinus-wrapper .j-hero-sub{margin-top:24px;max-width:560px;font-size:15px;line-height:1.95;color:rgba(255,255,255,.75);}
#joinus-wrapper .j-facts{list-style:none;display:flex;flex-wrap:wrap;gap:0;margin-top:clamp(28px,4vw,40px)!important;border-top:1px solid rgba(255,255,255,.18);max-width:560px;}
#joinus-wrapper .j-facts li{flex:1 1 0;min-width:120px;padding:16px 16px 0 0;}
#joinus-wrapper .j-facts li+li{padding-left:16px;border-left:1px solid rgba(255,255,255,.12);}
#joinus-wrapper .j-facts b{display:block;font-size:clamp(28px,3.4vw,40px);font-weight:900;font-style:italic;line-height:1.1;color:var(--o);}
#joinus-wrapper .j-facts span{display:block;margin-top:4px;font-size:12px;font-weight:700;letter-spacing:.08em;color:rgba(255,255,255,.65);}
#joinus-wrapper .j-hero-btns{display:flex;flex-wrap:wrap;gap:12px;margin-top:clamp(28px,4vw,40px);}
#joinus-wrapper .j-btn{display:inline-flex;align-items:center;justify-content:center;padding:14px 28px;font-size:14px;font-weight:900;letter-spacing:.06em;border:1.5px solid currentColor;transform:skewX(-14deg);transition:.25s;}
#joinus-wrapper .j-hero .j-btn{color:#fff;border-color:rgba(255,255,255,.45);}
#joinus-wrapper .j-btn:hover,#joinus-wrapper .j-btn:focus-visible{background:var(--ink);border-color:var(--ink);color:#fff;}
#joinus-wrapper .j-hero .j-btn:hover{background:#fff;border-color:#fff;color:var(--black);}
#joinus-wrapper .j-btn.j-btn-o{background:var(--o);border-color:var(--o);color:#111!important;}
#joinus-wrapper .j-btn.j-btn-o:hover{background:#fff;border-color:#fff;}
#joinus-wrapper .j-btn-xl{padding:20px 40px;font-size:17px;}
#joinus-wrapper .j-slash{position:absolute;left:0;right:0;bottom:0;height:10px;display:flex;gap:6px;z-index:3;}
#joinus-wrapper .j-slash i{display:block;height:100%;background:var(--o);transform:skewX(-30deg);}
#joinus-wrapper .j-slash i:nth-child(1){flex:0 0 18%;margin-left:-10px;}#joinus-wrapper .j-slash i:nth-child(2){flex:0 0 3%;}#joinus-wrapper .j-slash i:nth-child(3){flex:0 0 1.5%;}

/* teams */
#joinus-wrapper .j-teams{list-style:none;display:grid;grid-template-columns:repeat(5,minmax(0,1fr));border-top:2px solid var(--ink);}
#joinus-wrapper .j-team{padding:24px 20px 26px 0;}
#joinus-wrapper .j-team+.j-team{padding-left:20px;border-left:1px solid var(--border);}
#joinus-wrapper .j-team-no{display:block;font-size:13px;font-weight:900;letter-spacing:.2em;color:var(--o);}
#joinus-wrapper .j-team h4{margin:6px 0 10px!important;font-size:24px!important;font-weight:900!important;font-style:italic!important;color:var(--ink)!important;}
#joinus-wrapper .j-team p{font-size:14px;line-height:1.85;color:var(--slate);}
#joinus-wrapper .j-team small{display:block;margin-top:12px;font-size:11px;font-weight:700;letter-spacing:.04em;color:var(--slate-soft);}

/* photo strip */
#joinus-wrapper .j-strip{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:6px;}
#joinus-wrapper .j-strip figure{position:relative;aspect-ratio:4/3;overflow:hidden;background:#e9ebee;}
#joinus-wrapper .j-strip img{width:100%;height:100%;object-fit:cover;}
#joinus-wrapper .j-strip figcaption{position:absolute;left:0;right:0;bottom:0;padding:24px 12px 10px;font-size:12px;font-weight:700;color:#fff;background:linear-gradient(transparent,rgba(0,0,0,.7));}

/* voices */
#joinus-wrapper .j-voice-note{margin-top:12px;font-size:12px;color:var(--slate-soft);}
#joinus-wrapper .j-voices{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;}
#joinus-wrapper .j-vcard{display:flex;flex-direction:column;background:#fff;border:1px solid var(--border);border-top:4px solid var(--ink);padding:28px 26px 24px;transition:border-color .3s,transform .3s;}
#joinus-wrapper .j-vcard:hover{border-top-color:var(--o);transform:translateY(-4px);}
#joinus-wrapper .j-vquote{font-size:20px;font-weight:900;font-style:italic;line-height:1.45;color:var(--ink);}
#joinus-wrapper .j-vbody{flex:1;margin-top:14px;font-size:14px;line-height:1.9;color:var(--slate);}
#joinus-wrapper .j-vhead{display:flex;align-items:center;gap:12px;margin-top:20px;padding-top:16px;border-top:1px solid var(--border);}
#joinus-wrapper .j-avatar{flex:none;display:flex;align-items:center;justify-content:center;width:36px;height:36px;background:var(--ink);color:#fff;font-weight:900;font-style:italic;transform:skewX(-10deg);}
#joinus-wrapper .j-vcard:hover .j-avatar{background:var(--o);color:#111;}
#joinus-wrapper .j-vrole{font-size:12px;font-weight:700;color:var(--slate-soft);}

/* flow */
#joinus-wrapper .j-flow{list-style:none;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;counter-reset:s;}
#joinus-wrapper .j-flow li{position:relative;padding:28px 26px;background:var(--bg-alt);border-left:4px solid var(--o);}
#joinus-wrapper .j-flow span{font-size:12px;font-weight:900;letter-spacing:.3em;color:var(--o);}
#joinus-wrapper .j-flow h4{margin:8px 0 10px!important;font-size:24px!important;font-weight:900!important;font-style:italic!important;color:var(--ink)!important;}
#joinus-wrapper .j-flow p{font-size:14px;line-height:1.9;color:var(--slate);}

/* location */
#joinus-wrapper .j-locs{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;}
#joinus-wrapper .j-loc{background:#fff;border:1px solid var(--border);overflow:hidden;}
#joinus-wrapper .j-map{height:clamp(240px,26vw,340px);}
#joinus-wrapper .j-map iframe{width:100%;height:100%;border:0;display:block;}
#joinus-wrapper .j-loc-body{padding:24px 26px 28px;}
#joinus-wrapper .j-loc-tag{display:inline-block;padding:3px 12px;font-size:11px;font-weight:900;letter-spacing:.16em;text-transform:uppercase;background:var(--ink);color:#fff;transform:skewX(-14deg);}
#joinus-wrapper .j-loc h4{margin:12px 0 8px!important;font-size:22px!important;font-weight:900!important;color:var(--ink)!important;}
#joinus-wrapper .j-loc p{font-size:14px;line-height:1.85;color:var(--slate);}

/* contact */
#joinus-wrapper .j-contact{background:var(--black);color:#fff;}
#joinus-wrapper .j-contact .j-h2{color:#fff!important;}
#joinus-wrapper .j-contact .j-lead{color:rgba(255,255,255,.72);}
#joinus-wrapper .j-contact .j-lead b{color:var(--o);}
#joinus-wrapper .j-contact-actions{display:flex;flex-wrap:wrap;justify-content:center;gap:14px;}
#joinus-wrapper .j-contact .j-btn{color:#fff;border-color:rgba(255,255,255,.45);}
#joinus-wrapper .j-contact .j-btn:hover{background:#fff;border-color:#fff;color:var(--black);}
#joinus-wrapper .j-sns{display:flex;justify-content:center;gap:clamp(28px,6vw,56px);margin-top:clamp(40px,6vw,64px);}
#joinus-wrapper .j-sns a{width:clamp(56px,8vw,84px);transition:transform .3s;}
#joinus-wrapper .j-sns a:hover{transform:translateY(-4px);}
#joinus-wrapper .j-sns img{width:100%;height:auto;}
#joinus-wrapper .j-sns-x img{filter:invert(1);}
#joinus-wrapper .j-footer{display:flex;flex-direction:column;align-items:center;gap:16px;padding:48px 24px;background:var(--black);border-top:1px solid rgba(255,255,255,.08);}
#joinus-wrapper .j-footer img{height:30px;width:auto;}
#joinus-wrapper .j-footer p{font-size:11px;font-weight:700;letter-spacing:.25em;text-transform:uppercase;color:rgba(255,255,255,.5);text-align:center;}

/* reveal */
#joinus-wrapper.j-js .j-reveal{opacity:0;transform:translateY(32px);transition:opacity .8s cubic-bezier(.16,1,.3,1),transform .9s cubic-bezier(.16,1,.3,1);}
#joinus-wrapper.j-js .j-reveal.j-in{opacity:1;transform:none;}
#joinus-wrapper a:focus-visible{outline:3px solid var(--o);outline-offset:3px;}

@media (max-width:1000px){
  #joinus-wrapper .j-teams{grid-template-columns:repeat(2,minmax(0,1fr));}
  #joinus-wrapper .j-team,#joinus-wrapper .j-team+.j-team{padding:20px 14px 22px 0;border-left:0;border-bottom:1px solid var(--border);}
  #joinus-wrapper .j-team:nth-child(even){padding-left:14px;border-left:1px solid var(--border);}
  #joinus-wrapper .j-voices{grid-template-columns:repeat(2,minmax(0,1fr));}
}
@media (max-width:760px){
  #joinus-wrapper .j-hero-media{width:100%;clip-path:none;opacity:.3;}
  #joinus-wrapper .j-hero-media::after{background:linear-gradient(180deg,rgba(12,12,14,.4),var(--black));}
  #joinus-wrapper .j-teams{grid-template-columns:1fr;}
  #joinus-wrapper .j-team:nth-child(even){padding-left:0;border-left:0;}
  #joinus-wrapper .j-strip{grid-template-columns:repeat(2,minmax(0,1fr));}
  #joinus-wrapper .j-voices,#joinus-wrapper .j-flow,#joinus-wrapper .j-locs{grid-template-columns:1fr;}
  #joinus-wrapper .j-btn-xl{width:100%;}
}
@media (prefers-reduced-motion:reduce){#joinus-wrapper.j-js .j-reveal{opacity:1;transform:none;transition:none;}}`;

  function build() {
    var mount = document.getElementById("joinus-root") || document.getElementById("joinus-wrapper");
    if (!mount) return;
    if (!document.querySelector("style[data-joinus]")) {
      var st = document.createElement("style");
      st.setAttribute("data-joinus", "1");
      st.textContent = CSS;
      document.head.appendChild(st);
    }
    if (!mount.querySelector("#joinus-wrapper")) { mount.innerHTML = HTML; }
    var root = document.getElementById("joinus-wrapper");
    if (!root) return;
    behavior(root);
  }

  function behavior(root) {
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var reveals = root.querySelectorAll(".j-reveal");
    root.classList.add("j-js");
    if (!reduce) {
      reveals.forEach(function (el) {
        var i = 0, s = el.previousElementSibling;
        while (s) { if (s.classList && s.classList.contains("j-reveal")) i++; s = s.previousElementSibling; }
        if (i) el.style.transitionDelay = Math.min(i * 0.08, 0.32) + "s";
      });
    }
    var showAll = function () { reveals.forEach(function (el) { el.classList.add("j-in"); }); };
    if (reduce) {
      showAll();
    } else if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("j-in"); io.unobserve(e.target); } });
      }, { threshold: 0.12 });
      reveals.forEach(function (el) { io.observe(el); });
      setTimeout(function () { if (!root.querySelector(".j-reveal.j-in")) { if (io.disconnect) io.disconnect(); showAll(); } }, 2500);
    } else {
      showAll();
    }

    root.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener("click", function (e) {
        var id = a.getAttribute("href");
        if (id.length > 1) {
          var t = root.querySelector(id);
          if (t) { e.preventDefault(); t.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" }); }
        }
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", build);
  } else {
    build();
  }
})();
