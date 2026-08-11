/* ============================================================
   TAKUDEN — 拓殖大学電気自動車同好会 / トップページ本体
   GitHub Pages から配信し、Jimdoのローダーが読み込む単一ソース。
   Jimdo側は次の3行だけ:
     <div id="takuden-root"></div>
     <script src="https://takuden-formula.github.io/website/jimdo-top/takuden.js"></script>
   更新はこのファイルを編集して git push するだけ（数分でサイトに反映）。
   ============================================================ */
(function () {
  "use strict";

  /* ---------------- HTML（#takuden-root に描画） ---------------- */
  var HTML = `
<div id="takuden-wrapper">
  <header class="tk-header" id="tk-header">
    <a href="#top" class="tk-logo">TAKU<span class="tk-accent">DEN</span></a>
    <nav class="tk-nav" id="tk-nav" aria-label="メインナビゲーション">
      <a href="#showcase">Machine</a>
      <a href="#mission">Mission</a>
      <a href="#activities">Activities</a>
      <a href="#social">Latest News</a>
      <a href="#contact">Contact</a>
    </nav>
    <div class="tk-header-right">
      <a href="https://takuden.jimdofree.com/join-us/" class="tk-cta">Join Us</a>
      <button class="tk-burger" id="tk-burger" aria-label="メニューを開く" aria-expanded="false" aria-controls="tk-nav"><span></span><span></span><span></span></button>
    </div>
  </header>

  <span id="top"></span>

  <section id="showcase" class="tk-showcase">
    <div class="tk-wrap">
      <div class="tk-reveal">
        <h2 class="tk-label">TAKUDEN Formula 2025</h2>
        <h3 class="tk-display tk-showcase-h">マシン3Dイメージ</h3>
      </div>
      <div class="tk-viewer tk-reveal">
        <iframe src="https://salt6004.github.io/takuden-formula-2025/viewer.html" loading="lazy" allowfullscreen title="TAKUDENフォーミュラ2025 3Dビューアー"></iframe>
      </div>
    </div>
  </section>

  <section id="mission" class="tk-hero">
    <div class="tk-wrap">
      <div class="tk-reveal">
        <h2 class="tk-label">Our Mission</h2>
        <h3 class="tk-display tk-hero-h">モノづくりの<br>本質へ挑む</h3>
      </div>
      <div class="tk-mission-grid">
        <div class="tk-card tk-reveal">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
          <h4>構想と設計</h4>
          <p>CADやシミュレーションを駆使し、理論的なマシンパッケージを構築します。</p>
        </div>
        <div class="tk-card tk-reveal">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
          <h4>開発と製作</h4>
          <p>モーター制御からパーツ加工まで。部室での試行錯誤が最高の経験に。</p>
        </div>
        <div class="tk-card tk-reveal">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path stroke-width="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          <h4>大会への挑戦</h4>
          <p>学生フォーミュラ日本大会への参戦。完走と勝利を目指し、情熱を注ぎます。</p>
        </div>
      </div>
    </div>
  </section>

  <section id="activities" class="tk-activities">
    <div class="tk-wrap">
      <h2 class="tk-label tk-section-label">Activities</h2>

      <div class="tk-act-row tk-reveal">
        <div class="tk-act-text">
          <h4>フォーミュラ製作</h4>
          <p>CAD設計からモーター制御、部品加工まで。自分たちの手で一台のマシンを組み上げます。理論が形になる瞬間の感動を。</p>
        </div>
        <div class="tk-act-media"><div class="tk-slider">
          <div class="tk-slide"><img loading="lazy" decoding="async" alt="フォーミュラ製作の様子1" src="https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg/path/s526a7478a3a00671/image/iccc146649565aa42/version/1760520322/image.jpg"></div>
          <div class="tk-slide"><img loading="lazy" decoding="async" alt="フォーミュラ製作の様子2" src="https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=png/path/s526a7478a3a00671/image/i17bdb36bf0eb381b/version/1766899512/image.png"></div>
          <div class="tk-slide"><img loading="lazy" decoding="async" alt="フォーミュラ製作の様子3" src="https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg/path/s526a7478a3a00671/image/i2f87cd07f2480fc6/version/1766762591/image.jpg"></div>
            <div class="tk-slide"><img loading="lazy" decoding="async" alt="フォーミュラ製作の様子4" src="https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg/path/s526a7478a3a00671/image/i7cf2a5f3ca546fd5/version/1786381229/image.jpg"></div>
            <div class="tk-slide"><img loading="lazy" decoding="async" alt="フォーミュラ製作の様子5" src="https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg/path/s526a7478a3a00671/image/i5d6fe09d9f566fbb/version/1786381205/image.jpg"></div>
            <div class="tk-slide"><img loading="lazy" decoding="async" alt="フォーミュラ製作の様子6" src="https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg:rotate=-180/path/s526a7478a3a00671/image/i0db620bf950fd607/version/1786381227/image.jpg"></div>
            <div class="tk-slide"><img loading="lazy" decoding="async" alt="フォーミュラ製作の様子7" src="https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg:rotate=90/path/s526a7478a3a00671/image/ic5b575b5bf5fb15f/version/1786381229/image.jpg"></div>
        </div></div>
      </div>

      <div class="tk-act-row tk-flip tk-reveal">
        <div class="tk-act-text">
          <h4>自動車工学勉強会</h4>
          <p>基礎からEVシステムの仕組みまで、実車を用いて楽しく学びます。理論を実践に落とし込むTAKUDENの土台です。</p>
        </div>
        <div class="tk-act-media"><div class="tk-slider">
          <div class="tk-slide"><img loading="lazy" decoding="async" alt="自動車工学勉強会の様子1" src="https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg/path/s526a7478a3a00671/image/i3f692b942fe7e34c/version/1760367218/image.jpg"></div>
          <div class="tk-slide"><img loading="lazy" decoding="async" alt="自動車工学勉強会の様子2" src="https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg/path/s526a7478a3a00671/image/i974ef2fc370f343e/version/1760367218/image.jpg"></div>
          <div class="tk-slide"><img loading="lazy" decoding="async" alt="自動車工学勉強会の様子3" src="https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg/path/s526a7478a3a00671/image/i870bdefc826eb9d3/version/1766837978/image.jpg"></div>
          <div class="tk-slide"><img loading="lazy" decoding="async" alt="自動車工学勉強会の様子4" src="https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg/path/s526a7478a3a00671/image/i39267aacc5cf642f/version/1766762592/image.jpg"></div>
        </div></div>
      </div>

      <div class="tk-act-row tk-reveal">
        <div class="tk-act-text">
          <h4 class="tk-accent">文化祭</h4>
          <p>ラジコン体験や模擬店を通じ、EVの魅力を社会に伝えています。地域の方々にものづくりの楽しさを届けるイベントです。</p>
        </div>
        <div class="tk-act-media"><div class="tk-slider">
          <div class="tk-slide"><img loading="lazy" decoding="async" alt="文化祭の様子1" src="https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg/path/s526a7478a3a00671/image/iabe0fb4556b89480/version/1766899512/image.jpg"></div>
          <div class="tk-slide"><img loading="lazy" decoding="async" alt="文化祭の様子2" src="https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg/path/s526a7478a3a00671/image/i769ddf6cb25e6b6a/version/1766899512/image.jpg"></div>
          <div class="tk-slide"><img loading="lazy" decoding="async" alt="文化祭の様子3" src="https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg/path/s526a7478a3a00671/image/i8e2996a6b094235e/version/1766899512/image.jpg"></div>
            <div class="tk-slide"><img loading="lazy" decoding="async" alt="文化祭の様子4" src="https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg/path/s526a7478a3a00671/image/ibb0c085cd140ae91/version/1786381227/image.jpg"></div>
            <div class="tk-slide"><img loading="lazy" decoding="async" alt="文化祭の様子5" src="https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg/path/s526a7478a3a00671/image/i2ca10b218ff5cfa2/version/1786381227/image.jpg"></div>
        </div></div>
      </div>

      <div class="tk-act-row tk-flip tk-reveal">
        <div class="tk-act-text">
          <h4>講習会・見学</h4>
          <p>自動車技術会主催の講習会参加や他大学チームとの交流。常に最新のトレンドを外部から吸収し、進化を止めません。</p>
        </div>
        <div class="tk-act-media"><div class="tk-slider">
          <div class="tk-slide"><img loading="lazy" decoding="async" alt="講習会・見学の様子1" src="https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg/path/s526a7478a3a00671/image/ia53da6b245e19f6f/version/1760367218/image.jpg"></div>
          <div class="tk-slide"><img loading="lazy" decoding="async" alt="講習会・見学の様子2" src="https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg/path/s526a7478a3a00671/image/i1962c6c6c4ae73cb/version/1760367218/image.jpg"></div>
          <div class="tk-slide"><img loading="lazy" decoding="async" alt="講習会・見学の様子3" src="https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg/path/s526a7478a3a00671/image/i383d0aa4460cc038/version/1766762591/image.jpg"></div>
          <div class="tk-slide"><img loading="lazy" decoding="async" alt="講習会・見学の様子4" src="https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg/path/s526a7478a3a00671/image/i128c5c5b0f5d12d5/version/1766899512/image.jpg"></div>
          <div class="tk-slide"><img loading="lazy" decoding="async" alt="講習会・見学の様子5" src="https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg/path/s526a7478a3a00671/image/i7252419ab623f34f/version/1766899512/image.jpg"></div>
          <div class="tk-slide"><img loading="lazy" decoding="async" alt="講習会・見学の様子6" src="https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg/path/s526a7478a3a00671/image/i50896103408c0a69/version/1760367218/image.jpg"></div>
            <div class="tk-slide"><img loading="lazy" decoding="async" alt="講習会・見学の様子7" src="https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg/path/s526a7478a3a00671/image/i7055fbb182da7b7e/version/1786381210/image.jpg"></div>
        </div></div>
      </div>

      <div class="tk-act-row tk-reveal">
        <div class="tk-act-text">
          <h4>スポンサー交流</h4>
          <p>多くのスポンサー企業様からの温かいご支援。技術指導を通じた交流は、次世代エンジニアにとって最高の成長の場です。</p>
        </div>
        <div class="tk-act-media"><div class="tk-slider">
          <div class="tk-slide"><img loading="lazy" decoding="async" alt="スポンサー交流の様子1" src="https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg:rotate=180/path/s526a7478a3a00671/image/i28773fc6927f9c29/version/1766762591/image.jpg"></div>
          <div class="tk-slide"><img loading="lazy" decoding="async" alt="スポンサー交流の様子2" src="https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=png/path/s526a7478a3a00671/image/i89b009d85d7d19c2/version/1766899512/image.png"></div>
            <div class="tk-slide"><img loading="lazy" decoding="async" alt="スポンサー交流の様子3" src="https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg/path/s526a7478a3a00671/image/i55a1cdc3581a5b5a/version/1786381229/image.jpg"></div>
        </div></div>
      </div>

      <div class="tk-act-row tk-flip tk-reveal">
        <div class="tk-act-text">
          <h4>広報</h4>
          <p>我々の活動を多くの方に知ってもらうために、Xやインスタグラム、HPを運用しています！いつでも新メンバーを募集しています！！</p>
        </div>
        <div class="tk-act-media"><div class="tk-slider">
          <div class="tk-slide"><img loading="lazy" decoding="async" alt="広報活動の様子1" src="https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=png/path/s526a7478a3a00671/image/ie05babe034ac5fba/version/1766837981/image.png"></div>
          <div class="tk-slide"><img loading="lazy" decoding="async" alt="広報活動の様子2" src="https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg/path/s526a7478a3a00671/image/i24db6b86a01faa96/version/1766762591/image.jpg"></div>
            <div class="tk-slide"><img loading="lazy" decoding="async" alt="広報活動の様子3" src="https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg/path/s526a7478a3a00671/image/if06f6693808513de/version/1786381229/image.jpg"></div>
            <div class="tk-slide"><img loading="lazy" decoding="async" alt="広報活動の様子4" src="https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg/path/s526a7478a3a00671/image/i352a173732a64b5d/version/1786381194/image.jpg"></div>
        </div></div>
      </div>
    </div>
  </section>

  <section id="social" class="tk-social">
    <div class="tk-wrap">
      <h2 class="tk-label">Latest Activities</h2>
      <h3 class="tk-display tk-social-h">OFFICIAL SNS</h3>
      <div class="tk-sns-grid">
        <div class="tk-sns ig"><a href="https://www.instagram.com/takudai_ev/?locale=ja_JP" target="_blank" rel="noopener" aria-label="Instagram（新しいタブで開く）"><img loading="lazy" alt="Instagram" src="https://image.jimcdn.com/app/cms/image/transf/dimension=512x512:format=png/path/s526a7478a3a00671/image/ie05babe034ac5fba/version/1766837981/image.png"></a><span>Instagram</span></div>
        <div class="tk-sns x"><a href="https://x.com/takudai_ev" target="_blank" rel="noopener" aria-label="X（新しいタブで開く）"><img loading="lazy" alt="X (Twitter)" src="https://image.jimcdn.com/app/cms/image/transf/dimension=512x512:format=png/path/s526a7478a3a00671/image/i9713588295e7af31/version/1771049063/image.png"></a><span>X (Twitter)</span></div>
        <div class="tk-sns line"><a href="https://lin.ee/PRW5jYj" target="_blank" rel="noopener" aria-label="公式LINE（新しいタブで開く）"><img loading="lazy" alt="LINE" src="https://image.jimcdn.com/app/cms/image/transf/dimension=512x512:format=png/path/s526a7478a3a00671/image/ibd212acac6884a45/version/1771049447/image.png"></a><span>Official LINE</span></div>
      </div>
      <div class="tk-powr powr-instagram-feed" id="31fb00ef_1766752302"></div>
    </div>
  </section>

  <section id="contact" class="tk-contact">
    <div class="tk-wrap tk-reveal">
      <h2 class="tk-label">Contact Us</h2>
      <h3 class="tk-display tk-contact-h">お問い合わせ</h3>
      <a class="tk-mail" href="mailto:takushokudaidennkijidousha@gmail.com">Eメール</a>
      <div class="tk-contact-sns">
        <a href="https://www.instagram.com/takudai_ev/?locale=ja_JP" target="_blank" rel="noopener" aria-label="Instagram（新しいタブで開く）"><img loading="lazy" alt="Instagram" src="https://image.jimcdn.com/app/cms/image/transf/dimension=512x512:format=png/path/s526a7478a3a00671/image/ie05babe034ac5fba/version/1766837981/image.png"></a>
        <a href="https://x.com/takudai_ev" target="_blank" rel="noopener" aria-label="X（新しいタブで開く）"><img loading="lazy" alt="X" src="https://image.jimcdn.com/app/cms/image/transf/dimension=512x512:format=png/path/s526a7478a3a00671/image/i9713588295e7af31/version/1771049063/image.png"></a>
        <a href="https://lin.ee/PRW5jYj" target="_blank" rel="noopener" aria-label="公式LINE（新しいタブで開く）"><img loading="lazy" alt="LINE" src="https://image.jimcdn.com/app/cms/image/transf/dimension=512x512:format=png/path/s526a7478a3a00671/image/ibd212acac6884a45/version/1771049447/image.png"></a>
      </div>
    </div>
  </section>

  <footer class="tk-footer">© 2026 Takushoku University Electric Vehicle Club — TAKUDEN</footer>
</div>`;

  /* ---------------- CSS（#takuden-wrapper スコープ） ---------------- */
  var CSS = `
html,body{overflow-x:hidden;max-width:100%;}
#takuden-wrapper{--tk-orange:#FF6B00;--tk-orange-soft:rgba(255,107,0,.45);--tk-ink:#0f172a;--tk-slate:#475569;--tk-slate-soft:#64748b;--tk-bg:#fff;--tk-bg-alt:#f6f7f9;--tk-border:#e2e8f0;--tk-radius:2.5rem;font-family:"Noto Sans JP",system-ui,-apple-system,"Segoe UI",sans-serif;color:var(--tk-ink);line-height:1.6;-webkit-font-smoothing:antialiased;width:100vw;max-width:100vw;margin-left:calc(50% - 50vw);overflow-x:hidden;}
#takuden-wrapper *{box-sizing:border-box;}
#takuden-wrapper h2,#takuden-wrapper h3,#takuden-wrapper h4,#takuden-wrapper p{margin:0;padding:0;}
#takuden-wrapper a{color:inherit;text-decoration:none;}
#takuden-wrapper img{display:block;max-width:100%;}
#takuden-wrapper section{scroll-margin-top:90px;}
#takuden-wrapper .tk-wrap{width:95%;max-width:1800px;margin:0 auto;padding:0;}
#takuden-wrapper .tk-label{display:block;font-size:.8rem;font-weight:900;letter-spacing:.4em;text-transform:uppercase;color:var(--tk-orange);}
#takuden-wrapper .tk-section-label{text-align:center;margin-bottom:clamp(40px,6vw,80px);}
#takuden-wrapper .tk-display{font-weight:900;font-style:italic;letter-spacing:-.03em;line-height:1.02;color:var(--tk-ink);}
#takuden-wrapper .tk-accent{color:var(--tk-orange);}
#takuden-wrapper .tk-header{position:fixed;top:0;left:0;width:100%;z-index:9999;display:flex;align-items:center;justify-content:space-between;padding:18px clamp(20px,4vw,56px);border-bottom:1px solid transparent;transition:background-color .4s,backdrop-filter .4s,border-color .4s,padding .4s;}
#takuden-wrapper .tk-header.tk-scrolled{background:rgba(255,255,255,.9);backdrop-filter:blur(14px);border-bottom-color:rgba(15,23,42,.08);padding-top:10px;padding-bottom:10px;box-shadow:0 6px 24px rgba(15,23,42,.06);}
#takuden-wrapper .tk-header-right{display:flex;align-items:center;gap:12px;}
#takuden-wrapper .tk-logo{font-size:clamp(1.6rem,4vw,2.2rem);font-weight:900;font-style:italic;letter-spacing:-.05em;color:var(--tk-ink);}
#takuden-wrapper .tk-nav{display:flex;gap:clamp(18px,3vw,44px);}
#takuden-wrapper .tk-nav a{font-size:.72rem;font-weight:800;letter-spacing:.26em;text-transform:uppercase;color:var(--tk-slate);transition:color .25s;padding:4px 0;}
#takuden-wrapper .tk-nav a:hover,#takuden-wrapper .tk-nav a:focus-visible{color:var(--tk-orange);}
#takuden-wrapper .tk-cta{padding:11px 24px;border:2px solid rgba(15,23,42,.12);border-radius:999px;font-size:.72rem;font-weight:900;letter-spacing:.15em;text-transform:uppercase;color:var(--tk-ink);transition:.3s;white-space:nowrap;}
#takuden-wrapper .tk-cta:hover,#takuden-wrapper .tk-cta:focus-visible{background:var(--tk-ink);color:#fff;border-color:var(--tk-ink);}
#takuden-wrapper .tk-burger{display:none;background:none;border:0;cursor:pointer;padding:8px;}
#takuden-wrapper .tk-burger span{display:block;width:26px;height:2px;background:var(--tk-ink);margin:5px 0;transition:.3s;}
#takuden-wrapper .tk-showcase{padding:clamp(110px,16vw,190px) 0 clamp(50px,8vw,90px);text-align:center;}
#takuden-wrapper .tk-showcase-h{font-size:clamp(2.1rem,6vw,4.4rem);margin:16px auto 0;max-width:18ch;}
#takuden-wrapper .tk-viewer{position:relative;width:100%;max-width:1000px;aspect-ratio:16/10;margin:clamp(28px,4vw,48px) auto 0;border-radius:calc(var(--tk-radius) - .6rem);overflow:hidden;border:3px solid var(--tk-border);box-shadow:0 18px 44px rgba(15,23,42,.16);background:#eef1f4;-webkit-overflow-scrolling:touch;}
#takuden-wrapper .tk-viewer iframe{position:absolute;top:0;left:0;width:100%;height:100%;border:0;display:block;}
#takuden-wrapper .tk-hero{padding:clamp(56px,9vw,110px) 0 clamp(70px,10vw,120px);background-image:radial-gradient(circle at 1px 1px,rgba(15,23,42,.06) 1px,transparent 0);background-size:38px 38px;text-align:center;}
#takuden-wrapper .tk-hero-h{font-size:clamp(2.6rem,8vw,6.5rem);margin:18px auto 0;max-width:14ch;}
#takuden-wrapper .tk-mission-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:26px;margin-top:clamp(52px,8vw,100px);}
#takuden-wrapper .tk-card{background:var(--tk-bg);border:1px solid var(--tk-border);border-radius:var(--tk-radius);padding:clamp(26px,4vw,44px);text-align:left;box-shadow:0 12px 30px rgba(15,23,42,.05);transition:.4s;}
#takuden-wrapper .tk-card:hover{border-color:var(--tk-orange);transform:translateY(-8px);box-shadow:0 22px 44px rgba(15,23,42,.12);}
#takuden-wrapper .tk-card svg{width:52px;height:52px;color:var(--tk-orange);margin-bottom:20px;}
#takuden-wrapper .tk-card h4{font-size:clamp(2rem,3.4vw,2.8rem);font-weight:900;font-style:italic;letter-spacing:-.02em;margin-bottom:16px;}
#takuden-wrapper .tk-card p{color:var(--tk-slate-soft);font-size:clamp(1.2rem,1.8vw,1.55rem);line-height:1.8;}
#takuden-wrapper .tk-activities{padding:clamp(70px,11vw,140px) 0;background:var(--tk-bg-alt);}
#takuden-wrapper .tk-act-row{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:clamp(28px,5vw,64px);align-items:center;margin-bottom:clamp(64px,9vw,110px);}
#takuden-wrapper .tk-act-text{min-width:0;}
#takuden-wrapper .tk-act-row:last-child{margin-bottom:0;}
#takuden-wrapper .tk-act-row h4{font-size:clamp(3.1rem,6vw,5.8rem);font-weight:900;font-style:italic;letter-spacing:-.03em;line-height:1.05;margin-bottom:22px;color:var(--tk-ink);}
#takuden-wrapper .tk-act-row h4.tk-accent{color:var(--tk-orange);}
#takuden-wrapper .tk-act-row p{color:var(--tk-slate);font-size:clamp(1.7rem,3.1vw,2.6rem);font-weight:400;line-height:1.65;}
#takuden-wrapper .tk-act-row.tk-flip .tk-act-text{order:2;}
#takuden-wrapper .tk-act-row.tk-flip .tk-act-media{order:1;}
#takuden-wrapper .tk-act-media{width:100%;min-width:0;}
#takuden-wrapper .tk-slider{display:flex;gap:14px;overflow-x:auto;scroll-snap-type:x mandatory;border-radius:var(--tk-radius);scrollbar-width:none;-ms-overflow-style:none;}
#takuden-wrapper .tk-slider::-webkit-scrollbar{display:none;}
#takuden-wrapper .tk-slide{min-width:100%;scroll-snap-align:center;display:flex;align-items:center;justify-content:center;}
#takuden-wrapper .tk-slide img{max-width:100%;max-height:clamp(320px,40vw,600px);width:auto;height:auto;border-radius:calc(var(--tk-radius) - .6rem);border:3px solid var(--tk-border);box-shadow:0 16px 36px rgba(15,23,42,.14);background:#eef1f4;}
#takuden-wrapper.tk-js .tk-slide img{opacity:0;transform:scale(1.03);transition:opacity .7s ease,transform .7s ease;}
#takuden-wrapper.tk-js .tk-slide img.tk-loaded{opacity:1;transform:none;}
#takuden-wrapper .tk-dots{display:flex;gap:8px;justify-content:center;margin-top:14px;}
#takuden-wrapper .tk-dots button{width:8px;height:8px;border-radius:999px;border:0;background:var(--tk-border);cursor:pointer;padding:0;transition:.3s;}
#takuden-wrapper .tk-dots button.tk-on{background:var(--tk-orange);width:24px;}
#takuden-wrapper .tk-social{padding:clamp(60px,9vw,110px) 0;background:var(--tk-bg);text-align:center;}
#takuden-wrapper .tk-social-h{font-size:clamp(2.2rem,6vw,4.5rem);margin:12px 0 clamp(32px,5vw,56px);}
#takuden-wrapper .tk-sns-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:32px;max-width:820px;margin:0 auto clamp(24px,4vw,44px);}
#takuden-wrapper .tk-sns{display:flex;flex-direction:column;align-items:center;gap:14px;}
#takuden-wrapper .tk-sns img{height:110px;width:auto;object-fit:contain;transition:transform .4s;filter:drop-shadow(0 6px 16px rgba(15,23,42,.12));}
#takuden-wrapper .tk-sns:hover img{transform:scale(1.08);}
#takuden-wrapper .tk-sns span{font-size:1.1rem;font-weight:900;}
#takuden-wrapper .tk-sns.ig:hover span{color:#d6249f;}
#takuden-wrapper .tk-sns.x:hover span{color:#000;}
#takuden-wrapper .tk-sns.line:hover span{color:#06C755;}
#takuden-wrapper .tk-powr{margin-top:16px;width:100%;}
#takuden-wrapper .tk-contact{padding:clamp(80px,13vw,170px) 0;border-top:1px solid var(--tk-border);text-align:center;}
#takuden-wrapper .tk-contact-h{font-size:clamp(2.8rem,9vw,7rem);margin:14px 0 clamp(40px,6vw,68px);}
#takuden-wrapper .tk-mail{display:inline-block;padding:18px 52px;border:3px solid var(--tk-orange);border-radius:999px;background:var(--tk-orange);color:#111;font-weight:900;font-size:clamp(1.2rem,3vw,1.8rem);letter-spacing:.15em;text-transform:uppercase;transition:.3s;box-shadow:0 0 50px var(--tk-orange-soft);}
#takuden-wrapper .tk-mail:hover,#takuden-wrapper .tk-mail:focus-visible{background:transparent;color:var(--tk-orange);}
#takuden-wrapper .tk-contact-sns{display:flex;flex-wrap:wrap;gap:clamp(28px,5vw,60px);justify-content:center;margin-top:clamp(40px,6vw,68px);}
#takuden-wrapper .tk-contact-sns a{width:clamp(76px,12vw,130px);transition:transform .4s;}
#takuden-wrapper .tk-contact-sns a:hover{transform:scale(1.15);}
#takuden-wrapper .tk-contact-sns img{width:100%;height:auto;object-fit:contain;filter:drop-shadow(0 6px 16px rgba(15,23,42,.12));}
#takuden-wrapper .tk-footer{padding:52px 24px;border-top:1px solid var(--tk-border);text-align:center;color:var(--tk-slate-soft);font-size:.75rem;letter-spacing:.25em;text-transform:uppercase;font-weight:700;}
#takuden-wrapper.tk-js .tk-reveal{opacity:0;transform:translateY(42px);transition:opacity .8s cubic-bezier(.16,1,.3,1),transform .9s cubic-bezier(.16,1,.3,1);}
#takuden-wrapper.tk-js .tk-reveal.tk-in{opacity:1;transform:none;}
#takuden-wrapper .tk-activities,#takuden-wrapper .tk-social,#takuden-wrapper .tk-contact{content-visibility:auto;contain-intrinsic-size:auto 900px;}
#takuden-wrapper a:focus-visible,#takuden-wrapper button:focus-visible{outline:3px solid var(--tk-orange);outline-offset:3px;border-radius:6px;}
@media (max-width:900px){
  #takuden-wrapper .tk-nav{display:none;}
  #takuden-wrapper .tk-burger{display:block;}
  #takuden-wrapper .tk-mission-grid{grid-template-columns:1fr;}
  #takuden-wrapper .tk-act-row{grid-template-columns:1fr;}
  #takuden-wrapper .tk-act-row.tk-flip .tk-act-text,#takuden-wrapper .tk-act-row.tk-flip .tk-act-media,#takuden-wrapper .tk-act-row .tk-act-media{order:0;}
  #takuden-wrapper .tk-act-media{max-width:640px;margin:0 auto;}
  #takuden-wrapper .tk-viewer{aspect-ratio:4/3;}
  #takuden-wrapper .tk-slide img{max-height:clamp(240px,80vw,460px);}
  #takuden-wrapper .tk-sns-grid{grid-template-columns:1fr;gap:36px;}
  #takuden-wrapper .tk-nav.tk-open{display:flex;flex-direction:column;gap:20px;position:absolute;top:100%;right:0;background:rgba(255,255,255,.97);backdrop-filter:blur(14px);padding:26px 38px;border-radius:0 0 0 22px;box-shadow:0 20px 40px rgba(15,23,42,.12);text-align:right;}
}
@media (prefers-reduced-motion:reduce){#takuden-wrapper.tk-js .tk-reveal,#takuden-wrapper.tk-js .tk-slide img{opacity:1;transform:none;transition:none;}}`;

  /* ---------------- 描画 ---------------- */
  function build() {
    var mount = document.getElementById("takuden-root") || document.getElementById("takuden-wrapper");
    if (!mount) return;

    // CSS注入（重複防止）
    if (!document.querySelector("style[data-takuden]")) {
      var style = document.createElement("style");
      style.setAttribute("data-takuden", "1");
      style.textContent = CSS;
      document.head.appendChild(style);
    }

    // HTML描画（多重描画防止）
    if (!mount.querySelector("#takuden-wrapper")) {
      mount.innerHTML = HTML;
    }
    var root = document.getElementById("takuden-wrapper");
    if (!root) return;

    // POWR（Instagramフィード）は画面に近づいてから読み込む＝初期表示を軽く
    var powrMount = root.querySelector(".tk-powr");
    var loadPowr = function () {
      if (document.querySelector('script[src*="powr.io/powr.js"]')) return;
      var p = document.createElement("script");
      p.src = "https://www.powr.io/powr.js?platform=jimdo";
      p.async = true;
      document.body.appendChild(p);
    };
    if (powrMount && "IntersectionObserver" in window) {
      var po = new IntersectionObserver(function (es) {
        es.forEach(function (e) { if (e.isIntersecting) { loadPowr(); po.disconnect(); } });
      }, { rootMargin: "700px" });
      po.observe(powrMount);
    } else {
      loadPowr();
    }

    behavior(root);
  }

  /* ---------------- 動作 ---------------- */
  function behavior(root) {
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var reveals = root.querySelectorAll(".tk-reveal");

    root.classList.add("tk-js");
    // 同じ親を持つ複数要素は少しずつ遅らせてカスケード表示
    if (!reduce) {
      reveals.forEach(function (el) {
        var i = 0, s = el.previousElementSibling;
        while (s) { if (s.classList && s.classList.contains("tk-reveal")) i++; s = s.previousElementSibling; }
        if (i) el.style.transitionDelay = Math.min(i * 0.08, 0.32) + "s";
      });
    }
    var showAll = function () { reveals.forEach(function (el) { el.classList.add("tk-in"); }); };
    if (reduce) {
      showAll();
    } else if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("tk-in"); io.unobserve(e.target); } });
      }, { threshold: 0.12 });
      reveals.forEach(function (el) { io.observe(el); });
      setTimeout(function () { if (!root.querySelector(".tk-reveal.tk-in")) { if (io.disconnect) io.disconnect(); showAll(); } }, 2500);
    } else {
      showAll();
    }

    var header = document.getElementById("tk-header");
    var onScroll = function () { header.classList.toggle("tk-scrolled", window.scrollY > 40); };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    var burger = document.getElementById("tk-burger");
    var nav = document.getElementById("tk-nav");
    if (burger && nav) {
      burger.addEventListener("click", function () {
        var open = nav.classList.toggle("tk-open");
        burger.setAttribute("aria-expanded", open ? "true" : "false");
        burger.setAttribute("aria-label", open ? "メニューを閉じる" : "メニューを開く");
      });
      nav.querySelectorAll("a").forEach(function (a) {
        a.addEventListener("click", function () { nav.classList.remove("tk-open"); burger.setAttribute("aria-expanded", "false"); });
      });
    }

    // 写真の滑らかな表示（読み込み完了でフェード＆ズームイン）
    root.querySelectorAll(".tk-slide img").forEach(function (img) {
      if (img.complete && img.naturalWidth) { img.classList.add("tk-loaded"); }
      else {
        img.addEventListener("load", function () { img.classList.add("tk-loaded"); });
        img.addEventListener("error", function () { img.classList.add("tk-loaded"); });
      }
    });

    root.querySelectorAll(".tk-slider").forEach(function (slider) {
      var slides = slider.querySelectorAll(".tk-slide");
      if (slides.length < 2) return;
      var dots = document.createElement("div");
      dots.className = "tk-dots";
      slides.forEach(function (_, i) {
        var b = document.createElement("button");
        b.type = "button";
        b.setAttribute("aria-label", (i + 1) + "枚目を表示");
        if (i === 0) b.classList.add("tk-on");
        b.addEventListener("click", function () { slider.scrollTo({ left: i * slider.clientWidth, behavior: "smooth" }); });
        dots.appendChild(b);
      });
      slider.parentNode.appendChild(dots);
      var btns = dots.querySelectorAll("button");
      var syncDots = function () {
        var idx = Math.round(slider.scrollLeft / slider.clientWidth);
        btns.forEach(function (b, i) { b.classList.toggle("tk-on", i === idx); });
      };
      slider.addEventListener("scroll", function () { window.requestAnimationFrame(syncDots); }, { passive: true });
      if (reduce) return;
      var paused = false;
      var advance = function () {
        if (paused) return;
        var max = slider.scrollWidth - slider.clientWidth;
        if (slider.scrollLeft >= max - 20) { slider.scrollTo({ left: 0, behavior: "smooth" }); }
        else { slider.scrollBy({ left: slider.clientWidth, behavior: "smooth" }); }
      };
      ["mouseenter", "touchstart", "focusin"].forEach(function (ev) { slider.addEventListener(ev, function () { paused = true; }, { passive: true }); });
      ["mouseleave", "focusout"].forEach(function (ev) { slider.addEventListener(ev, function () { paused = false; }); });
      setInterval(advance, 4800);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", build);
  } else {
    build();
  }
})();
