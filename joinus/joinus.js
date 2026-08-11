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

  var HTML = `
<div id="joinus-wrapper">

  <!-- ===== ヒーロー ===== -->
  <section class="j-hero">
    <div class="j-wrap j-reveal">
      <span class="j-badge">New Members Wanted 2025</span>
      <h1 class="j-hero-title">未来を、<br><span class="j-accent">その手で創れ。</span></h1>
      <p class="j-hero-sub">拓殖大学電気自動車同好会「TAKUDEN」へようこそ。<br>大学生活を「受動的」から「能動的」へ変える、一生モノの経験がここにあります。</p>
      <div class="j-hero-btns">
        <a href="#contact" class="j-btn j-btn-dark">今すぐ入部を相談する</a>
        <a href="#voices" class="j-btn j-btn-ghost">メンバーの声を聞く</a>
      </div>
    </div>
  </section>

  <!-- ===== マシン画像セパレーター ===== -->
  <div class="j-machine j-reveal">
    <img loading="lazy" decoding="async" alt="TAKUDEN EV マシン" src="https://image.jimcdn.com/app/cms/image/transf/dimension=1920x1080:format=jpg/path/s526a7478a3a00671/image/i6c319012196b6805/version/1771399902/image.jpg">
  </div>

  <!-- ===== メンバーの声 ===== -->
  <section id="voices" class="j-section j-section-alt">
    <div class="j-wrap">
      <div class="j-head j-reveal">
        <span class="j-eyebrow">Member Voices</span>
        <h2 class="j-h2">メンバーの声</h2>
        <p class="j-lead">個性豊かなメンバーたちが、TAKUDENでの「本気の挑戦」を語ります。</p>
      </div>
      <div class="j-voices">
        <article class="j-vcard j-reveal" style="--acc:#FF6B00;background:#fffaf5;">
          <span class="j-quote">&rdquo;</span>
          <div class="j-vhead"><div class="j-avatar">S</div><div><h4 class="j-vname">S君</h4><span class="j-vrole">3年生 / 設計担当</span></div></div>
          <p class="j-vquote">「就活に役立つ、本気のガクチカ。」</p>
          <p class="j-vbody">あまり車に興味はなかったけど、入ってみたら貴重な経験の連続。実際に企業から「ガクチカ」として高く評価され、就活の大きな武器になりました。</p>
        </article>
        <article class="j-vcard j-reveal" style="--acc:#334155;background:#f8fafc;">
          <span class="j-quote">&rdquo;</span>
          <div class="j-vhead"><div class="j-avatar">Y</div><div><h4 class="j-vname">Y君</h4><span class="j-vrole">2年生 / 回路担当</span></div></div>
          <p class="j-vquote">「座学を超えた、実践の場。」</p>
          <p class="j-vbody">授業だけでは触れられない、リアルな技術を仲間と高め合えます。エンジニアとしての第一歩を踏み出し、将来のキャリアが明確に見えました。</p>
        </article>
        <article class="j-vcard j-reveal" style="--acc:#2563eb;background:#eff6ff;">
          <span class="j-quote">&rdquo;</span>
          <div class="j-vhead"><div class="j-avatar">U</div><div><h4 class="j-vname">U君</h4><span class="j-vrole">4年生 / 代表</span></div></div>
          <p class="j-vquote">「工学部なら、迷わずここへ。」</p>
          <p class="j-vbody">全員で一つを作り上げる大変さはありますが、その分やりがいと達成感は格別。工学部の学生には自信を持って入部をおすすめします！</p>
        </article>
        <article class="j-vcard j-reveal" style="--acc:#d97706;background:#fffbeb;">
          <span class="j-quote">&rdquo;</span>
          <div class="j-vhead"><div class="j-avatar">T</div><div><h4 class="j-vname">T君</h4><span class="j-vrole">3年生 / デザイン</span></div></div>
          <p class="j-vquote">「理想が現実になる感動。」</p>
          <p class="j-vbody">自分がデザインしたパーツが本物の形になる。実践的なCADを基礎から習得し、設計データが目の前に現れた時の達成感は格別です。</p>
        </article>
        <article class="j-vcard j-reveal" style="--acc:#64748b;background:#fafafa;">
          <span class="j-quote">&rdquo;</span>
          <div class="j-vhead"><div class="j-avatar">Y</div><div><h4 class="j-vname">Y君</h4><span class="j-vrole">2年生 / カウル製作</span></div></div>
          <p class="j-vquote">「走らせるのは人間だろ。」</p>
          <p class="j-vbody">大会で本気の大人が泣く姿を見た。受け身の毎日はもう終わり。ここが、本気になれるラストチャンスです。</p>
        </article>
        <article class="j-vcard j-reveal" style="--acc:#4f46e5;background:#f5f3ff;">
          <span class="j-quote">&rdquo;</span>
          <div class="j-vhead"><div class="j-avatar">S</div><div><h4 class="j-vname">S君</h4><span class="j-vrole">1年生 / 研修中</span></div></div>
          <p class="j-vquote">「失敗できるサークル。」</p>
          <p class="j-vbody">ここでは「失敗」が当たり前。その試行錯誤こそが成長。一からEVを作る中で、最高の仲間と出会えました。</p>
        </article>
      </div>
    </div>
  </section>

  <!-- ===== 活動時間 ===== -->
  <section id="schedule" class="j-section">
    <div class="j-wrap">
      <div class="j-head j-reveal">
        <span class="j-eyebrow">Activity Schedule</span>
        <h2 class="j-h2">活動時間</h2>
      </div>
      <div class="j-schedule">
        <div class="j-slot j-reveal">
          <span class="j-day">水曜日</span>
          <div class="j-slot-time"><span class="j-time">17:40 〜</span><span class="j-slot-label">Regular Activity（5限）</span></div>
        </div>
        <div class="j-slot j-reveal">
          <span class="j-day">木曜日</span>
          <div class="j-slot-time"><span class="j-time">17:40 〜</span><span class="j-slot-label">Regular Activity（5限）</span></div>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== 活動拠点 ===== -->
  <section id="location" class="j-section j-section-alt">
    <div class="j-wrap">
      <div class="j-head j-reveal">
        <span class="j-eyebrow">Activity Bases</span>
        <h2 class="j-h2">活動拠点</h2>
      </div>
      <div class="j-locs">
        <article class="j-loc j-reveal">
          <div class="j-map"><iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d405.4452187313881!2d139.27681165840916!3d35.62544439401732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzXCsDM3JzMxLjYiTiAxMznCsDE2JzM3LjEiRQ!5e0!3m2!1sja!2sjp!4v1728866579633!5m2!1sja!2sjp" width="100%" height="100%" style="border:0;" allowfullscreen loading="lazy" title="学生交流会館 422号室"></iframe></div>
          <div class="j-loc-body">
            <div class="j-loc-head"><span class="j-loc-tag">Lab 01</span><h4 class="j-loc-title">学生交流会館 422号室</h4></div>
            <p class="j-loc-desc">回路の設計、プログラミング、ミーティングなどを行う中心拠点です。空きコマの自習室としても利用可能。</p>
          </div>
        </article>
        <article class="j-loc j-reveal">
          <div class="j-map"><iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d405.4398862908851!2d139.27736145840913!3d35.62641669400266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzXCsDM3JzM1LjEiTiAxMznCsDE2JzM4LjUiRQ!5e0!3m2!1sja!2sjp!4v1728866657831!5m2!1sja!2sjp" width="100%" height="100%" style="border:0;" allowfullscreen loading="lazy" title="実験実習工場横 倉庫"></iframe></div>
          <div class="j-loc-body">
            <div class="j-loc-head"><span class="j-loc-tag j-loc-tag-2">Garage 02</span><h4 class="j-loc-title">実験実習工場横 倉庫</h4></div>
            <p class="j-loc-desc">マシンの組み立てや大型パーツの加工、走行テストなどを行うガレージです。工具類も充実しています。</p>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- ===== コンタクト＆参加 ===== -->
  <section id="contact" class="j-section j-contact">
    <span class="j-join-bg" aria-hidden="true">JOIN</span>
    <div class="j-wrap">
      <div class="j-head j-reveal">
        <span class="j-eyebrow">Contact &amp; Join</span>
        <h2 class="j-h2 j-h2-xl">君の挑戦を、<br><span class="j-accent">待っている。</span></h2>
      </div>

      <div class="j-joincard j-reveal">
        <h3 class="j-join-title">興味を持ってくれた方へ</h3>
        <p class="j-join-lead">TAKUDEN Formulaでは、加入希望者を<span class="j-accent">365日いつでも募集中</span>です！</p>
        <p class="j-join-body">「迷っているけど話は聞いてみたい」「とりあえず新歓情報だけ確認したい」という方も大歓迎。まずは公式LINEの登録やSNSのフォローから始めてみませんか？</p>
        <p class="j-join-note">参加希望の方は、下の特大ボタン、または各SNSからお気軽にご連絡ください。</p>
      </div>

      <div class="j-contact-actions j-reveal">
        <a class="j-mailbtn" href="mailto:takushokudaidennkijidousha@gmail.com">Eメールで相談する</a>
        <div class="j-sns">
          <a href="https://www.instagram.com/takudai_ev/" target="_blank" rel="noopener" aria-label="Instagram（新しいタブ）"><img loading="lazy" alt="Instagram" src="https://image.jimcdn.com/app/cms/image/transf/dimension=512x512:format=png/path/s526a7478a3a00671/image/ie05babe034ac5fba/version/1766837981/image.png"></a>
          <a href="https://x.com/takudai_ev" target="_blank" rel="noopener" aria-label="X（新しいタブ）"><img loading="lazy" alt="X" src="https://image.jimcdn.com/app/cms/image/transf/dimension=512x512:format=png/path/s526a7478a3a00671/image/i9713588295e7af31/version/1771049063/image.png"></a>
          <a href="https://lin.ee/PRW5jYj" target="_blank" rel="noopener" aria-label="公式LINE（新しいタブ）"><img loading="lazy" alt="LINE" src="https://image.jimcdn.com/app/cms/image/transf/dimension=512x512:format=png/path/s526a7478a3a00671/image/ibd212acac6884a45/version/1771049447/image.png"></a>
        </div>
      </div>
    </div>
  </section>

  <footer class="j-footer">
    <div class="j-foot-logo">TAKUDEN<span class="j-accent">.</span></div>
    <p class="j-foot-copy">© 2025 Takushoku University Electric Vehicle Club</p>
  </footer>

</div>`;

  var CSS = `
html,body{overflow-x:hidden;max-width:100%;}
#joinus-wrapper{--j-orange:#FF6B00;--j-orange-deep:#E65A00;--j-ink:#0f172a;--j-slate:#475569;--j-slate-soft:#64748b;--j-bg:#fff;--j-bg-alt:#f8fafc;--j-border:#e2e8f0;--j-radius:2.5rem;font-family:"Noto Sans JP",system-ui,-apple-system,"Segoe UI",sans-serif;color:var(--j-ink);line-height:1.7;-webkit-font-smoothing:antialiased;width:100vw;max-width:100vw;margin-left:calc(50% - 50vw);overflow-x:hidden;}
#joinus-wrapper *{box-sizing:border-box;}
#joinus-wrapper h1,#joinus-wrapper h2,#joinus-wrapper h3,#joinus-wrapper h4,#joinus-wrapper p{margin:0;padding:0;}
#joinus-wrapper a{text-decoration:none;color:inherit;}
#joinus-wrapper img{display:block;max-width:100%;}
#joinus-wrapper section{scroll-margin-top:24px;}
#joinus-wrapper .j-wrap{max-width:1280px;margin:0 auto;padding:0 clamp(22px,5vw,48px);}
#joinus-wrapper .j-accent{color:var(--j-orange);}
#joinus-wrapper .j-eyebrow{display:block;font-size:clamp(.9rem,1.4vw,1.1rem);font-weight:900;font-style:italic;letter-spacing:.5em;text-transform:uppercase;color:var(--j-orange);margin-bottom:18px;}
#joinus-wrapper .j-h2{font-size:clamp(3rem,8vw,7rem);font-weight:900;font-style:italic;letter-spacing:-.03em;line-height:1;}
#joinus-wrapper .j-h2-xl{font-size:clamp(3.2rem,9vw,8rem);line-height:.9;}
#joinus-wrapper .j-head{text-align:center;margin-bottom:clamp(48px,7vw,96px);}
#joinus-wrapper .j-lead{margin-top:24px;font-size:clamp(1.25rem,2.4vw,1.9rem);color:var(--j-slate-soft);font-weight:700;max-width:900px;margin-left:auto;margin-right:auto;line-height:1.6;}

/* hero */
#joinus-wrapper .j-hero{background:var(--j-bg);background-image:radial-gradient(circle at 1px 1px,rgba(15,23,42,.06) 1px,transparent 0);background-size:40px 40px;text-align:center;padding:clamp(90px,15vw,180px) 0 clamp(70px,10vw,120px);}
#joinus-wrapper .j-badge{display:inline-block;background:var(--j-orange);color:#fff;padding:12px 32px;border-radius:50px;font-size:clamp(.85rem,1.4vw,1.1rem);font-weight:900;letter-spacing:.3em;text-transform:uppercase;margin-bottom:36px;box-shadow:0 18px 40px rgba(255,107,0,.35);}
#joinus-wrapper .j-hero-title{font-size:clamp(3.6rem,13vw,10rem);font-weight:900;font-style:italic;letter-spacing:-.04em;line-height:.9;margin-bottom:40px;color:var(--j-ink);}
#joinus-wrapper .j-hero-sub{font-size:clamp(1.3rem,3vw,2.4rem);color:var(--j-ink);font-weight:800;line-height:1.5;max-width:1000px;margin:0 auto clamp(44px,6vw,72px);}
#joinus-wrapper .j-hero-btns{display:flex;flex-wrap:wrap;justify-content:center;gap:22px;}
#joinus-wrapper .j-btn{display:inline-block;padding:22px 44px;border-radius:2rem;font-size:clamp(1.15rem,1.8vw,1.5rem);font-weight:900;transition:transform .3s ease,background-color .3s,color .3s,border-color .3s,box-shadow .3s;}
#joinus-wrapper .j-btn-dark{background:var(--j-ink);color:#fff;box-shadow:0 20px 46px rgba(15,23,42,.28);}
#joinus-wrapper .j-btn-dark:hover,#joinus-wrapper .j-btn-dark:focus-visible{background:var(--j-orange);transform:translateY(-4px);}
#joinus-wrapper .j-btn-ghost{background:#fff;border:3px solid var(--j-border);color:var(--j-ink);}
#joinus-wrapper .j-btn-ghost:hover,#joinus-wrapper .j-btn-ghost:focus-visible{border-color:var(--j-orange);color:var(--j-orange);transform:translateY(-4px);}

/* machine image */
#joinus-wrapper .j-machine{max-width:1400px;margin:0 auto;padding:clamp(40px,6vw,72px) clamp(22px,5vw,48px);}
#joinus-wrapper .j-machine img{width:100%;height:auto;border-radius:var(--j-radius);box-shadow:0 30px 70px rgba(15,23,42,.22);background:#eef1f4;}

/* sections */
#joinus-wrapper .j-section{padding:clamp(72px,11vw,150px) 0;background:var(--j-bg);}
#joinus-wrapper .j-section-alt{background:var(--j-bg-alt);}

/* voices */
#joinus-wrapper .j-voices{display:grid;grid-template-columns:repeat(3,1fr);gap:28px;}
#joinus-wrapper .j-vcard{position:relative;overflow:hidden;border:1px solid var(--j-border);border-radius:2.5rem;padding:clamp(30px,3.2vw,48px);box-shadow:0 12px 34px rgba(15,23,42,.06);transition:transform .4s ease,box-shadow .4s ease;}
#joinus-wrapper .j-vcard:hover{transform:translateY(-10px);box-shadow:0 30px 60px rgba(15,23,42,.14);}
#joinus-wrapper .j-quote{position:absolute;top:6px;right:26px;font-size:8rem;line-height:1;font-weight:900;font-style:italic;color:var(--acc);opacity:.12;pointer-events:none;}
#joinus-wrapper .j-vhead{display:flex;align-items:center;gap:20px;margin-bottom:26px;}
#joinus-wrapper .j-avatar{flex:none;width:72px;height:72px;border-radius:20px;background:var(--j-ink);color:#fff;display:flex;align-items:center;justify-content:center;font-size:2rem;font-weight:900;transform:rotate(3deg);transition:background-color .35s,transform .35s;box-shadow:0 10px 24px rgba(15,23,42,.2);}
#joinus-wrapper .j-vcard:hover .j-avatar{background:var(--acc);transform:rotate(0);}
#joinus-wrapper .j-vname{font-size:clamp(1.5rem,2.2vw,1.9rem);font-weight:900;font-style:italic;color:var(--j-ink);}
#joinus-wrapper .j-vrole{display:block;font-size:1rem;font-weight:700;color:var(--j-slate-soft);margin-top:2px;}
#joinus-wrapper .j-vquote{position:relative;z-index:1;font-size:clamp(1.6rem,2.4vw,2.1rem);font-weight:900;font-style:italic;color:var(--j-ink);line-height:1.3;margin-bottom:20px;}
#joinus-wrapper .j-vbody{position:relative;z-index:1;font-size:clamp(1.2rem,1.6vw,1.4rem);color:var(--j-slate);font-weight:700;line-height:1.85;}

/* schedule */
#joinus-wrapper .j-schedule{display:grid;gap:26px;}
#joinus-wrapper .j-slot{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:20px;background:var(--j-bg-alt);border:1px solid var(--j-border);border-radius:3rem;padding:clamp(32px,4vw,60px) clamp(32px,5vw,72px);}
#joinus-wrapper .j-day{font-size:clamp(2.6rem,6vw,5rem);font-weight:900;font-style:italic;letter-spacing:-.03em;color:var(--j-ink);}
#joinus-wrapper .j-slot-time{text-align:right;}
#joinus-wrapper .j-time{display:block;font-size:clamp(3rem,7vw,6rem);font-weight:900;line-height:1;color:var(--j-orange);margin-bottom:10px;}
#joinus-wrapper .j-slot-label{font-size:clamp(1rem,1.6vw,1.4rem);color:var(--j-slate-soft);text-transform:uppercase;letter-spacing:.25em;font-weight:900;}

/* location */
#joinus-wrapper .j-locs{display:grid;grid-template-columns:repeat(2,1fr);gap:36px;}
#joinus-wrapper .j-loc{background:#fff;border:1px solid var(--j-border);border-radius:3rem;overflow:hidden;box-shadow:0 12px 34px rgba(15,23,42,.06);transition:transform .4s ease,box-shadow .4s ease;}
#joinus-wrapper .j-loc:hover{transform:translateY(-8px);box-shadow:0 28px 56px rgba(15,23,42,.14);}
#joinus-wrapper .j-map{height:clamp(300px,32vw,440px);width:100%;}
#joinus-wrapper .j-map iframe{width:100%;height:100%;border:0;display:block;}
#joinus-wrapper .j-loc-body{padding:clamp(28px,3vw,48px);}
#joinus-wrapper .j-loc-head{display:flex;flex-wrap:wrap;align-items:center;gap:18px;margin-bottom:18px;}
#joinus-wrapper .j-loc-tag{background:var(--j-orange);color:#fff;padding:8px 20px;border-radius:50px;font-size:.9rem;font-weight:900;text-transform:uppercase;letter-spacing:.12em;}
#joinus-wrapper .j-loc-tag-2{background:var(--j-slate);}
#joinus-wrapper .j-loc-title{font-size:clamp(1.7rem,2.6vw,2.4rem);font-weight:900;color:var(--j-ink);}
#joinus-wrapper .j-loc-desc{font-size:clamp(1.15rem,1.6vw,1.4rem);color:var(--j-slate);font-weight:700;line-height:1.8;}

/* contact */
#joinus-wrapper .j-contact{position:relative;overflow:hidden;background:var(--j-bg);}
#joinus-wrapper .j-join-bg{position:absolute;bottom:-8%;right:-4%;font-size:clamp(12rem,28vw,26rem);font-weight:900;font-style:italic;color:rgba(15,23,42,.04);line-height:1;pointer-events:none;user-select:none;z-index:0;}
#joinus-wrapper .j-contact .j-wrap{position:relative;z-index:1;}
#joinus-wrapper .j-joincard{max-width:1000px;margin:0 auto clamp(48px,7vw,80px);background:var(--j-bg-alt);border:1px solid var(--j-border);border-radius:2.5rem;padding:clamp(36px,5vw,72px);text-align:center;box-shadow:0 20px 50px rgba(15,23,42,.08);}
#joinus-wrapper .j-join-title{font-size:clamp(1.9rem,3.4vw,3rem);font-weight:900;font-style:italic;color:var(--j-ink);margin-bottom:28px;}
#joinus-wrapper .j-join-lead{font-size:clamp(1.5rem,2.8vw,2.4rem);font-weight:900;color:var(--j-ink);line-height:1.4;margin-bottom:24px;}
#joinus-wrapper .j-join-body{font-size:clamp(1.2rem,1.9vw,1.6rem);color:var(--j-slate);font-weight:700;line-height:1.8;max-width:820px;margin:0 auto 28px;}
#joinus-wrapper .j-join-note{font-size:clamp(1.05rem,1.5vw,1.3rem);color:var(--j-slate-soft);font-weight:700;padding-top:24px;border-top:2px solid var(--j-border);}
#joinus-wrapper .j-contact-actions{display:flex;flex-direction:column;align-items:center;gap:clamp(40px,6vw,72px);}
#joinus-wrapper .j-mailbtn{display:inline-block;background:var(--j-ink);color:#fff;padding:clamp(24px,3.5vw,44px) clamp(40px,7vw,96px);border-radius:2.5rem;font-size:clamp(1.6rem,4vw,3.4rem);font-weight:900;font-style:italic;letter-spacing:.08em;box-shadow:0 30px 70px rgba(15,23,42,.28);transition:transform .3s ease,background-color .3s;}
#joinus-wrapper .j-mailbtn:hover,#joinus-wrapper .j-mailbtn:focus-visible{background:var(--j-orange);transform:scale(1.04);}
#joinus-wrapper .j-sns{display:flex;flex-wrap:wrap;gap:clamp(28px,6vw,72px);align-items:center;justify-content:center;}
#joinus-wrapper .j-sns a{width:clamp(84px,12vw,150px);transition:transform .4s ease;}
#joinus-wrapper .j-sns a:hover{transform:translateY(-8px) scale(1.08);}
#joinus-wrapper .j-sns img{width:100%;height:auto;object-fit:contain;filter:drop-shadow(0 8px 20px rgba(15,23,42,.14));}

/* footer */
#joinus-wrapper .j-footer{background:var(--j-ink);text-align:center;padding:clamp(56px,8vw,96px) 24px;}
#joinus-wrapper .j-foot-logo{font-size:clamp(2.6rem,5vw,4rem);font-weight:900;font-style:italic;letter-spacing:-.04em;color:#fff;margin-bottom:20px;}
#joinus-wrapper .j-foot-copy{font-size:clamp(.75rem,1.2vw,.95rem);color:rgba(255,255,255,.5);font-weight:800;letter-spacing:.4em;text-transform:uppercase;}

/* reveal & image fade */
#joinus-wrapper.j-js .j-reveal{opacity:0;transform:translateY(38px);transition:opacity .8s ease-out,transform .8s ease-out;}
#joinus-wrapper.j-js .j-reveal.j-in{opacity:1;transform:none;}
#joinus-wrapper.j-js .j-machine img{opacity:0;transform:scale(1.03);transition:opacity .8s ease,transform .8s ease;}
#joinus-wrapper.j-js .j-machine img.j-loaded{opacity:1;transform:none;}
#joinus-wrapper a:focus-visible{outline:3px solid var(--j-orange);outline-offset:3px;border-radius:10px;}

/* responsive */
@media (max-width:1000px){
  #joinus-wrapper .j-voices{grid-template-columns:repeat(2,1fr);}
}
@media (max-width:760px){
  #joinus-wrapper .j-voices{grid-template-columns:1fr;}
  #joinus-wrapper .j-locs{grid-template-columns:1fr;}
  #joinus-wrapper .j-slot{justify-content:center;text-align:center;}
  #joinus-wrapper .j-slot-time{text-align:center;}
}
@media (prefers-reduced-motion:reduce){
  #joinus-wrapper.j-js .j-reveal,#joinus-wrapper.j-js .j-machine img{opacity:1;transform:none;transition:none;}
}`;

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

    // 画像フェードイン
    root.querySelectorAll(".j-machine img").forEach(function (img) {
      if (img.complete && img.naturalWidth) { img.classList.add("j-loaded"); }
      else { img.addEventListener("load", function () { img.classList.add("j-loaded"); }); img.addEventListener("error", function () { img.classList.add("j-loaded"); }); }
    });

    // アンカーの滑らかスクロール
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
