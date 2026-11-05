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

  // 自分の配信元（GitHub Pages またはローカル確認）から calendar.js の場所を決める
  var SELF = (document.currentScript && document.currentScript.src) || "";
  var CAL_SRC = /\/jimdo-top\/takuden\.js/.test(SELF)
    ? SELF.replace(/\/jimdo-top\/takuden\.js.*$/, "/calendar/calendar.js")
    : "https://takuden-formula.github.io/website/calendar/calendar.js";
  var BASE = /\/jimdo-top\/takuden\.js/.test(SELF)
    ? SELF.replace(/\/jimdo-top\/takuden\.js.*$/, "")
    : "https://takuden-formula.github.io/website";
  // 大会初日（日本時間）。カウントダウンに使う
  var EVENT_START = new Date("2027-08-23T00:00:00+09:00");
  var EVENT_END = new Date("2027-08-29T00:00:00+09:00");

  /* ---------------- HTML（#takuden-root に描画） ---------------- */
  var HTML = `
<div id="takuden-wrapper">
  <header class="tk-header" id="tk-header">
    <a href="#top" class="tk-logo" aria-label="TAKUDEN FORMULA（ページの先頭へ）"><img class="tk-logo-w" src="${BASE}/brand/logo-white.png" alt="" width="1129" height="190"><img class="tk-logo-d" src="${BASE}/brand/logo.png" alt="" width="1129" height="190"></a>
    <nav class="tk-nav" id="tk-nav" aria-label="メインナビゲーション">
      <a href="#about">About</a>
      <a href="#showcase">Machine</a>
      <a href="#news">News</a>
      <a href="#photos">Photos</a>
      <a href="#calendar">Calendar</a>
      <a href="#activities">Activities</a>
      <a href="#contact">Contact</a>
    </nav>
    <div class="tk-header-right">
      <a href="https://takuden.jimdofree.com/join-us/" class="tk-cta">Join Us</a>
      <button class="tk-burger" id="tk-burger" aria-label="メニューを開く" aria-expanded="false" aria-controls="tk-nav"><span></span><span></span><span></span></button>
    </div>
  </header>

  <section id="top" class="tk-top">
    <div class="tk-top-media" aria-hidden="true"><img src="${BASE}/photos/welding.jpg" alt="" width="1108" height="1477"></div>
    <div class="tk-top-inner">
      <img class="tk-top-logo" src="${BASE}/brand/logo-white.png" alt="TAKUDEN FORMULA" width="1129" height="190">
      <p class="tk-top-sub">拓殖大学 電気自動車同好会</p>
      <h1 class="tk-top-h">電気で走るフォーミュラカーを、<br><em>学生の手で。</em></h1>
      <div class="tk-count" aria-live="polite">
        <span class="tk-count-label">学生フォーミュラ日本大会2027 まで</span>
        <span class="tk-count-num"><b id="tk-days">―</b><small id="tk-days-unit">DAYS</small></span>
        <span class="tk-count-date">2027.08.23 – 08.28　Aichi Sky Expo（愛知県）</span>
      </div>
      <div class="tk-top-cta"><a href="#about" class="tk-btn">チームを知る</a><a href="https://takuden.jimdofree.com/join-us/" class="tk-btn tk-btn-o">部員募集・見学</a></div>
    </div>
    <div class="tk-top-slash" aria-hidden="true"><i></i><i></i><i></i></div>
  </section>

  <section id="about" class="tk-intro">
    <div class="tk-wrap">
      <div class="tk-reveal">
        <h2 class="tk-label">About TAKUDEN</h2>
        <h3 class="tk-display tk-intro-h">設計も、溶接も、<br><span class="tk-accent">高電圧回路も。</span></h3>
        <p class="tk-intro-lead">拓殖大学電気自動車同好会（TAKUDEN FORMULA）は、八王子国際キャンパスを拠点に、電気で走るフォーミュラカーを自分たちで設計・製作しているチームです。<b>学生フォーミュラ日本大会2027（EVクラス）への初参戦</b>を目指し、企業の皆様のご支援をいただきながら活動しています。</p>
      </div>
      <ul class="tk-intro-facts tk-reveal">
        <li><b>1994</b><span>活動開始</span></li>
        <li><b>約15名</b><span>部員</span></li>
        <li><b>水・金</b><span>定例活動 4・5限</span></li>
        <li><b>2027.08</b><span>大会初参戦が目標</span></li>
      </ul>
      <ol class="tk-intro-do">
        <li class="tk-reveal"><span class="tk-intro-num">01</span><h4>EVレーシングカーをつくる</h4><p>譲り受けたフレームをもとに、足回りの設計・溶接・加工、高電圧回路、電池の監視、車両の制御プログラムまで自分たちで取り組んでいます。モーター・インバータと電池は企業様からお借りしています。</p></li>
        <li class="tk-reveal"><span class="tk-intro-num">02</span><h4>大会・レースに出る</h4><p>学生フォーミュラ日本大会への参戦準備に加え、電気カートの耐久レース ERK Cup にも参加しています。</p></li>
        <li class="tk-reveal"><span class="tk-intro-num">03</span><h4>伝える・広げる</h4><p>文化祭でのラジコン体験や展示、活動報告書、SNSで、EVとものづくりの楽しさを発信しています。</p></li>
      </ol>
      <div class="tk-intro-links tk-reveal">
        <a href="https://takuden.jimdofree.com/what-s-fsaej/">学生フォーミュラとは <span aria-hidden="true">→</span></a>
        <a href="https://takuden.jimdofree.com/what-s-fsaej/about-us/">チームについて <span aria-hidden="true">→</span></a>
        <a href="https://takuden.jimdofree.com/join-us/" class="tk-intro-join">部員募集・見学 <span aria-hidden="true">→</span></a>
      </div>
    </div>
  </section>

  <section id="showcase" class="tk-showcase">
    <div class="tk-wrap">
      <div class="tk-reveal">
        <h2 class="tk-label">TAKUDEN Formula 2027 / Frame V4</h2>
        <h3 class="tk-display tk-showcase-h">マシン3Dイメージ</h3>
        <p class="tk-showcase-sub">2027年大会に向けて設計中の車両フレーム（V4）と足回りです。ドラッグで回転、ピンチ・ホイールで拡大できます。</p>
      </div>
      <div class="tk-viewer tk-reveal">
        <iframe src="https://takuden-formula.github.io/website/viewer/" loading="lazy" allowfullscreen title="TAKUDEN 2027 車両フレームV4 3Dビューアー"></iframe>
      </div>
    </div>
  </section>


  <section class="tk-sponsors tk-reveal">
    <div class="tk-wrap"><p class="tk-sponsors-label">Our Sponsors</p></div>
    <div class="tk-marquee">
      <div class="tk-marquee-track">
        <div class="tk-marquee-group">
          <img loading="lazy" decoding="async" alt="スポンサーロゴ" src="https://takuden-formula.github.io/website/sponsors/logos/aisin.png">
          <img loading="lazy" decoding="async" alt="スポンサーロゴ" src="https://takuden-formula.github.io/website/sponsors/logos/ansys.png">
          <img loading="lazy" decoding="async" alt="スポンサーロゴ" src="https://takuden-formula.github.io/website/sponsors/logos/sanwa.png">
          <img loading="lazy" decoding="async" alt="スポンサーロゴ" src="https://takuden-formula.github.io/website/sponsors/logos/solidworks.png">
          <img loading="lazy" decoding="async" alt="スポンサーロゴ" src="https://takuden-formula.github.io/website/sponsors/logos/denso.png">
          <img loading="lazy" decoding="async" alt="スポンサーロゴ" src="https://takuden-formula.github.io/website/sponsors/logos/toyota.png">
          <img loading="lazy" decoding="async" alt="スポンサーロゴ" src="https://takuden-formula.github.io/website/sponsors/logos/wise.jpg">
          <img loading="lazy" decoding="async" alt="スポンサーロゴ" src="https://takuden-formula.github.io/website/sponsors/logos/zone.jpg">
        </div>
        <div class="tk-marquee-group" aria-hidden="true">
          <img loading="lazy" decoding="async" alt="" src="https://takuden-formula.github.io/website/sponsors/logos/aisin.png">
          <img loading="lazy" decoding="async" alt="" src="https://takuden-formula.github.io/website/sponsors/logos/ansys.png">
          <img loading="lazy" decoding="async" alt="" src="https://takuden-formula.github.io/website/sponsors/logos/sanwa.png">
          <img loading="lazy" decoding="async" alt="" src="https://takuden-formula.github.io/website/sponsors/logos/solidworks.png">
          <img loading="lazy" decoding="async" alt="" src="https://takuden-formula.github.io/website/sponsors/logos/denso.png">
          <img loading="lazy" decoding="async" alt="" src="https://takuden-formula.github.io/website/sponsors/logos/toyota.png">
          <img loading="lazy" decoding="async" alt="" src="https://takuden-formula.github.io/website/sponsors/logos/wise.jpg">
          <img loading="lazy" decoding="async" alt="" src="https://takuden-formula.github.io/website/sponsors/logos/zone.jpg">
        </div>
      </div>
    </div>
  </section>

  <section id="news" class="tk-news">
    <div class="tk-wrap">
      <div class="tk-reveal tk-news-head">
        <h2 class="tk-label">Latest News</h2>
        <h3 class="tk-display tk-news-h">最新情報</h3>
      </div>
      <ol class="tk-news-list">
        <li class="tk-news-item tk-reveal"><time datetime="2026-11">2026.11</time><span class="tk-tag">TEAM</span><div><h4>新しい執行部が始動</h4><p>1年生の会長のもと、学生フォーミュラ日本大会2027への初参戦に向けた新しい体制で活動を始めました。</p></div></li>
        <li class="tk-news-item tk-reveal"><time datetime="2026-11-02">2026.10.31 – 11.02</time><span class="tk-tag">EVENT</span><div><h4>紅陵祭2026に出展しました</h4><p>文京キャンパスの教室企画で、3Dプリンタで作った遊星歯車キーホルダーの組み立て体験、自作ラジコンの操作体験、運転ゲーム、モーター試験の動画とパネル展示を行いました。ご来場ありがとうございました。</p></div></li>
        <li class="tk-news-item tk-reveal"><time datetime="2026-10-26">2026.10.26</time><span class="tk-tag tk-tag-tech">TECH</span><div><h4>モーターの無負荷回転試験に成功</h4><p>車両に使うモーターとインバータに高電圧をかけ、負荷をつながない状態での回転に成功しました。停止から放電までの手順も確認しています。</p></div></li>
        <li class="tk-news-item tk-reveal"><time datetime="2026-10-16">2026.10.16</time><span class="tk-tag">TEAM</span><div><h4>新しいチームロゴを制定</h4><p>チーム名「TAKUDEN FORMULA」を表す新しいロゴを定めました。部員募集のポスターも新しくしています。</p></div></li>
        <li class="tk-news-item tk-reveal"><time datetime="2026-10-03">2026.10.03</time><span class="tk-tag tk-tag-race">RACE</span><div><h4>ERK Cup 第3戦（本庄）に参加</h4><p>電気カートの耐久レース ERK Cup のトワイライトレースに、チーム「WOODS Engineering」（#54）の一員として参加しました。</p></div></li>
        <li class="tk-news-item tk-reveal"><time datetime="2026-09">2026.09</time><span class="tk-tag tk-tag-tech">TECH</span><div><h4>電池モジュール8台の状態を確認</h4><p>トヨタ自動車様からお借りしている電池モジュール全8台の電圧と温度を測定し、ばらつきが小さいことを確かめました。</p></div></li>
        <li class="tk-news-item tk-reveal"><time datetime="2026-08-30">2026.08.30</time><span class="tk-tag tk-tag-race">RACE</span><div><h4>ERK Cup 第2戦（栃木）L1クラス3位</h4><p>スプリントと22分間レースの2本とも L1クラス（リチウム60V以下）で3位。第2戦終了時点で同クラス2位タイです。</p></div></li>
        <li class="tk-news-item tk-reveal"><time datetime="2026-08-18">2026.08.18</time><span class="tk-tag tk-tag-tech">TECH</span><div><h4>インバータとのCAN通信に成功</h4><p>デンソー様からお借りしているインバータと通信し、モーターやインバータの温度などのデータを受け取れるようになりました。</p></div></li>
        <li class="tk-news-item tk-reveal"><time datetime="2026-08-02">2026.08.02 – 08.07</time><span class="tk-tag">FSAEJ</span><div><h4>学生フォーミュラ日本大会2026に学生スタッフとして参加</h4><p>部員3名が大会運営に参加し、他校のマシンや運営を間近で学びました。来年度の参戦に向けた準備に生かしています。</p></div></li>
      </ol>
      <div class="tk-next tk-reveal">
        <p class="tk-next-label">Next</p>
        <ul>
          <li><b>2026年11月〜</b>プリチャージ回路・ディスチャージ回路の追加、フレームの設計と溶接</li>
          <li><b>2026年12月ごろ</b>電池を使った高電圧システム全体の机上試験</li>
          <li><b>2027年8月23日〜28日</b>学生フォーミュラ日本大会2027（Aichi Sky Expo）への初参戦を目指して、車両の設計・製作を進めています</li>
        </ul>
      </div>
    </div>
  </section>

  <section id="photos" class="tk-photos">
    <div class="tk-wrap">
      <div class="tk-reveal tk-photos-head">
        <h2 class="tk-label">Season 2026</h2>
        <h3 class="tk-display tk-photos-h">写真で見る2026年</h3>
      </div>
      <ul class="tk-mosaic tk-reveal">
        <li class="tk-m"><a href="${BASE}/photos/ryoryo-logo.jpg" data-cap="紅陵祭2026｜新しいチームロゴを掲げた教室展示"><img loading="lazy" decoding="async" src="${BASE}/photos/ryoryo-logo.jpg" alt="紅陵祭2026｜新しいチームロゴを掲げた教室展示" width="1600" height="1200"><span>紅陵祭2026｜新しいチームロゴを掲げた教室展示</span></a></li>
        <li class="tk-m"><a href="${BASE}/photos/welding.jpg" data-cap="部室での溶接作業"><img loading="lazy" decoding="async" src="${BASE}/photos/welding.jpg" alt="部室での溶接作業" width="1108" height="1477"><span>部室での溶接作業</span></a></li>
        <li class="tk-m"><a href="${BASE}/photos/erk-kart.jpg" data-cap="ERK Cup 第3戦（本庄）｜チーム #54 のカート"><img loading="lazy" decoding="async" src="${BASE}/photos/erk-kart.jpg" alt="ERK Cup 第3戦（本庄）｜チーム #54 のカート" width="1477" height="1108"><span>ERK Cup 第3戦（本庄）｜チーム #54 のカート</span></a></li>
        <li class="tk-m"><a href="${BASE}/photos/gear-kit.jpg" data-cap="紅陵祭2026｜3Dプリンタで作った遊星歯車キーホルダーの組み立て体験"><img loading="lazy" decoding="async" src="${BASE}/photos/gear-kit.jpg" alt="紅陵祭2026｜3Dプリンタで作った遊星歯車キーホルダーの組み立て体験" width="1600" height="1200"><span>紅陵祭2026｜3Dプリンタで作った遊星歯車キーホルダーの組み立て体験</span></a></li>
        <li class="tk-m"><a href="${BASE}/photos/hv-cable.jpg" data-cap="モーター試験で使う高電圧ケーブル（2026年10月）"><img loading="lazy" decoding="async" src="${BASE}/photos/hv-cable.jpg" alt="モーター試験で使う高電圧ケーブル（2026年10月）" width="1600" height="1200"><span>モーター試験で使う高電圧ケーブル（2026年10月）</span></a></li>
        <li class="tk-m"><a href="${BASE}/photos/rc-car.jpg" data-cap="高尾祭2026｜自作ラジコンの操作体験"><img loading="lazy" decoding="async" src="${BASE}/photos/rc-car.jpg" alt="高尾祭2026｜自作ラジコンの操作体験" width="1200" height="1600"><span>高尾祭2026｜自作ラジコンの操作体験</span></a></li>
        <li class="tk-m"><a href="${BASE}/photos/breadboard.jpg" data-cap="新人教育｜マイコンでモーターを動かす入門"><img loading="lazy" decoding="async" src="${BASE}/photos/breadboard.jpg" alt="新人教育｜マイコンでモーターを動かす入門" width="1600" height="1200"><span>新人教育｜マイコンでモーターを動かす入門</span></a></li>
        <li class="tk-m"><a href="${BASE}/photos/exhibit.jpg" data-cap="紅陵祭2026｜フレーム模型と部品の展示"><img loading="lazy" decoding="async" src="${BASE}/photos/exhibit.jpg" alt="紅陵祭2026｜フレーム模型と部品の展示" width="1477" height="1108"><span>紅陵祭2026｜フレーム模型と部品の展示</span></a></li>
        <li class="tk-m"><a href="${BASE}/photos/kart-54.jpg" data-cap="学内でのEVカート走行（2026年）"><img loading="lazy" decoding="async" src="${BASE}/photos/kart-54.jpg" alt="学内でのEVカート走行（2026年）" width="1600" height="1201"><span>学内でのEVカート走行（2026年）</span></a></li>
      </ul>
    </div>
    <dialog class="tk-lb" id="tk-lb" aria-label="写真の拡大表示">
      <button type="button" class="tk-lb-x" aria-label="閉じる">×</button>
      <img alt="">
      <p></p>
    </dialog>
  </section>

  <section id="calendar" class="tk-calendar">
    <div id="calendar-root"></div>
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
            <div class="tk-slide"><img loading="lazy" decoding="async" alt="スポンサー交流の様子4" src="https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg/path/s526a7478a3a00671/image/ifd454fa454e79cac/version/1786422413/image.jpg"></div>
            <div class="tk-slide"><img loading="lazy" decoding="async" alt="スポンサー交流の様子5" src="https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg/path/s526a7478a3a00671/image/ic70ea485000c65b0/version/1786422418/image.jpg"></div>
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
      <img class="tk-contact-logo" src="${BASE}/brand/logo-white.png" alt="TAKUDEN FORMULA" width="1129" height="190" loading="lazy">
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

  <footer class="tk-footer"><img src="${BASE}/brand/mark-white.png" alt="" width="353" height="190" loading="lazy"><span>© 2026 Takushoku University Electric Vehicle Club — TAKUDEN FORMULA</span></footer>
</div>`;

  /* ---------------- CSS（#takuden-wrapper スコープ） ---------------- */
  var CSS = `
html,body{overflow-x:hidden;max-width:100%;}
#takuden-wrapper{--tk-orange:#FF5A00;--tk-orange-soft:rgba(255,90,0,.45);--tk-ink:#111214;--tk-black:#0c0c0e;--tk-slate:#475569;--tk-slate-soft:#64748b;--tk-bg:#fff;--tk-bg-alt:#f6f7f9;--tk-border:#e2e8f0;--tk-radius:2.5rem;font-family:"Noto Sans JP",system-ui,-apple-system,"Segoe UI",sans-serif;color:var(--tk-ink);line-height:1.6;-webkit-font-smoothing:antialiased;width:100vw;max-width:100vw;margin-left:calc(50% - 50vw);overflow-x:hidden;}
#takuden-wrapper *{box-sizing:border-box;}
#takuden-wrapper h2,#takuden-wrapper h3,#takuden-wrapper h4,#takuden-wrapper p{margin:0;padding:0;}
#takuden-wrapper a{color:inherit;text-decoration:none;}
#takuden-wrapper img{display:block;max-width:100%;}
#takuden-wrapper section{scroll-margin-top:90px;}
#takuden-wrapper .tk-wrap{width:95%;max-width:1800px;margin:0 auto;padding:0;}
#takuden-wrapper .tk-label{display:block;font-size:12px;font-weight:900;letter-spacing:.4em;text-transform:uppercase;color:var(--tk-orange);}
#takuden-wrapper h2.tk-label{font-size:12px!important;line-height:1.6!important;font-family:"Noto Sans JP",system-ui,sans-serif!important;font-weight:900!important;font-style:normal!important;letter-spacing:.4em!important;color:var(--tk-orange)!important;}
#takuden-wrapper h3.tk-display{font-family:"Noto Sans JP",system-ui,sans-serif!important;font-weight:900!important;font-style:italic!important;line-height:1.1!important;}
#takuden-wrapper .tk-label::before{content:"";display:inline-block;width:20px;height:11px;margin:0 14px 2px 0;vertical-align:middle;background:repeating-linear-gradient(90deg,var(--tk-orange) 0 5px,transparent 5px 8px);transform:skewX(-24deg);}
#takuden-wrapper .tk-section-label{text-align:center;margin-bottom:clamp(40px,6vw,80px);}
#takuden-wrapper .tk-display{font-weight:900;font-style:italic;letter-spacing:-.03em;line-height:1.02;color:var(--tk-ink);}
#takuden-wrapper .tk-accent{color:var(--tk-orange);}
#takuden-wrapper .tk-header{position:fixed;top:0;left:0;width:100%;z-index:9999;display:flex;align-items:center;justify-content:space-between;padding:18px clamp(20px,4vw,56px);border-bottom:1px solid transparent;transition:background-color .4s,backdrop-filter .4s,border-color .4s,padding .4s;}
#takuden-wrapper .tk-header.tk-scrolled{background:rgba(255,255,255,.9);backdrop-filter:blur(14px);border-bottom-color:rgba(15,23,42,.08);padding-top:10px;padding-bottom:10px;box-shadow:0 6px 24px rgba(15,23,42,.06);}
#takuden-wrapper .tk-header-right{display:flex;align-items:center;gap:12px;}
#takuden-wrapper .tk-logo{display:block;line-height:0;}
#takuden-wrapper .tk-logo img{height:26px;width:auto;}
#takuden-wrapper .tk-logo .tk-logo-d{display:none;}
#takuden-wrapper .tk-header:not(.tk-scrolled) .tk-logo{opacity:0;pointer-events:none;}
#takuden-wrapper .tk-logo{transition:opacity .3s;}
#takuden-wrapper .tk-header.tk-scrolled .tk-logo-w{display:none;}
#takuden-wrapper .tk-header.tk-scrolled .tk-logo-d{display:block;}
#takuden-wrapper .tk-header:not(.tk-scrolled) .tk-nav a{color:rgba(255,255,255,.85);}
#takuden-wrapper .tk-header:not(.tk-scrolled) .tk-nav a:hover{color:var(--tk-orange);}
#takuden-wrapper .tk-header:not(.tk-scrolled) .tk-cta{color:#fff;border-color:rgba(255,255,255,.4);}
#takuden-wrapper .tk-header:not(.tk-scrolled) .tk-burger span{background:#fff;}
#takuden-wrapper .tk-nav{display:flex;gap:clamp(18px,3vw,44px);}
#takuden-wrapper .tk-nav a{font-size:.72rem;font-weight:800;letter-spacing:.26em;text-transform:uppercase;color:var(--tk-slate);transition:color .25s;padding:4px 0;}
#takuden-wrapper .tk-nav a:hover,#takuden-wrapper .tk-nav a:focus-visible{color:var(--tk-orange);}
#takuden-wrapper .tk-cta{padding:11px 24px;border:2px solid rgba(15,23,42,.12);border-radius:999px;font-size:.72rem;font-weight:900;letter-spacing:.15em;text-transform:uppercase;color:var(--tk-ink);transition:.3s;white-space:nowrap;}
#takuden-wrapper .tk-cta:hover,#takuden-wrapper .tk-cta:focus-visible{background:var(--tk-ink);color:#fff;border-color:var(--tk-ink);}
#takuden-wrapper .tk-burger{display:none;background:none;border:0;cursor:pointer;padding:8px;}
#takuden-wrapper .tk-burger span{display:block;width:26px;height:2px;background:var(--tk-ink);margin:5px 0;transition:.3s;}
#takuden-wrapper .tk-intro{padding:clamp(110px,15vw,180px) 0 clamp(60px,9vw,110px);background-image:radial-gradient(circle at 1px 1px,rgba(15,23,42,.06) 1px,transparent 0);background-size:38px 38px;}
#takuden-wrapper .tk-intro .tk-wrap{max-width:1100px;}
#takuden-wrapper .tk-intro .tk-label,#takuden-wrapper .tk-intro-h{text-align:center;}
#takuden-wrapper .tk-intro-h{font-size:clamp(3rem,7vw,6.4rem)!important;margin-top:16px;}
#takuden-wrapper .tk-intro-lead{margin:clamp(20px,3vw,30px) auto 0;max-width:760px;text-align:center;color:var(--tk-slate);font-size:clamp(1.5rem,1.6vw,1.75rem);line-height:1.95;}
#takuden-wrapper .tk-intro-lead b{color:var(--tk-ink);font-weight:900;}
#takuden-wrapper .tk-intro-facts{list-style:none;margin:clamp(32px,5vw,52px) 0 0;padding:0;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));border-top:2px solid var(--tk-ink);border-bottom:1px solid var(--tk-border);}
#takuden-wrapper .tk-intro-facts li{padding:18px 16px 18px 0;}
#takuden-wrapper .tk-intro-facts li+li{padding-left:18px;border-left:1px solid var(--tk-border);}
#takuden-wrapper .tk-intro-facts b{display:block;font-size:clamp(2.2rem,3.4vw,3.2rem);font-weight:900;font-style:italic;letter-spacing:-.02em;line-height:1.1;color:var(--tk-ink);}
#takuden-wrapper .tk-intro-facts span{display:block;margin-top:4px;font-size:1.25rem;font-weight:700;color:var(--tk-slate-soft);letter-spacing:.06em;}
#takuden-wrapper .tk-intro-do{list-style:none;margin:clamp(36px,5vw,56px) 0 0;padding:0;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:20px;}
#takuden-wrapper .tk-intro-do li{background:#fff;border:1px solid var(--tk-border);border-radius:20px;padding:clamp(22px,2.6vw,30px);}
#takuden-wrapper .tk-intro-num{display:block;font-size:1.2rem;font-weight:900;letter-spacing:.2em;color:var(--tk-orange);}
#takuden-wrapper .tk-intro-do h4{margin:8px 0 8px;font-size:clamp(1.8rem,2vw,2.1rem);font-weight:900;line-height:1.4;color:var(--tk-ink);}
#takuden-wrapper .tk-intro-do p{color:var(--tk-slate);font-size:1.45rem;line-height:1.85;}
#takuden-wrapper .tk-intro-links{display:flex;flex-wrap:wrap;justify-content:center;gap:12px;margin-top:clamp(28px,4vw,40px);}
#takuden-wrapper .tk-intro-links a{display:inline-flex;align-items:center;gap:8px;padding:12px 22px;border:1.5px solid rgba(15,23,42,.15);border-radius:999px;font-size:1.4rem;font-weight:800;color:var(--tk-ink);background:#fff;transition:.25s;}
#takuden-wrapper .tk-intro-links a:hover{border-color:var(--tk-ink);}
#takuden-wrapper .tk-intro-links a.tk-intro-join{background:var(--tk-orange);border-color:var(--tk-orange);color:#111;}
#takuden-wrapper .tk-intro-links a.tk-intro-join:hover{background:var(--tk-ink);border-color:var(--tk-ink);color:#fff;}
#takuden-wrapper .tk-calendar{padding:clamp(60px,9vw,110px) 0;background:var(--tk-bg-alt);border-top:1px solid var(--tk-border);}
#takuden-wrapper .tk-calendar:empty,#takuden-wrapper #calendar-root:empty{min-height:0;}
#takuden-wrapper .tk-showcase{padding:clamp(60px,9vw,110px) 0 clamp(50px,8vw,90px);text-align:center;border-top:1px solid var(--tk-border);}
#takuden-wrapper .tk-showcase-h{font-size:clamp(2.1rem,6vw,4.4rem)!important;margin:16px auto 0;max-width:18ch;}
#takuden-wrapper .tk-showcase-sub{margin-top:14px;color:var(--tk-slate);font-size:clamp(.95rem,1.4vw,1.05rem);line-height:1.8;}
#takuden-wrapper .tk-viewer{position:relative;width:100%;max-width:1000px;aspect-ratio:16/10;margin:clamp(28px,4vw,48px) auto 0;border-radius:calc(var(--tk-radius) - .6rem);overflow:hidden;border:3px solid var(--tk-border);box-shadow:0 18px 44px rgba(15,23,42,.16);background:#eef1f4;-webkit-overflow-scrolling:touch;}
#takuden-wrapper .tk-viewer iframe{position:absolute;top:0;left:0;width:100%;height:100%;border:0;display:block;}
#takuden-wrapper .tk-sponsors{background:#fff;border-top:1px solid var(--tk-border);border-bottom:1px solid var(--tk-border);padding:clamp(28px,4vw,46px) 0;overflow:hidden;}
#takuden-wrapper .tk-sponsors-label{text-align:center;font-size:.78rem;font-weight:900;letter-spacing:.35em;text-transform:uppercase;color:var(--tk-slate-soft);margin-bottom:clamp(20px,3vw,32px);}
#takuden-wrapper .tk-marquee{position:relative;width:100%;overflow:hidden;-webkit-mask-image:linear-gradient(90deg,transparent,#000 7%,#000 93%,transparent);mask-image:linear-gradient(90deg,transparent,#000 7%,#000 93%,transparent);}
#takuden-wrapper .tk-marquee-track{display:flex;width:max-content;animation:tk-marquee 42s linear infinite;}
#takuden-wrapper .tk-marquee:hover .tk-marquee-track{animation-play-state:paused;}
#takuden-wrapper .tk-marquee-group{display:flex;align-items:center;gap:clamp(42px,6vw,84px);padding-right:clamp(42px,6vw,84px);}
#takuden-wrapper .tk-marquee-group img{height:clamp(38px,5vw,52px);width:auto;max-width:clamp(140px,16vw,180px);object-fit:contain;flex:none;opacity:.9;transition:opacity .3s,transform .3s;}
#takuden-wrapper .tk-marquee-group img:hover{opacity:1;transform:scale(1.06);}
@keyframes tk-marquee{from{transform:translateX(0);}to{transform:translateX(-50%);}}
@media (prefers-reduced-motion:reduce){#takuden-wrapper .tk-marquee-track{animation:none;}#takuden-wrapper .tk-marquee{overflow-x:auto;}}
#takuden-wrapper .tk-news{padding:clamp(70px,10vw,130px) 0;background:var(--tk-bg);}
#takuden-wrapper .tk-news .tk-wrap{max-width:1100px;}
#takuden-wrapper .tk-news-head{text-align:center;}
#takuden-wrapper .tk-news-h{font-size:clamp(2.4rem,6.5vw,5rem)!important;margin:14px 0 clamp(36px,5vw,64px);}
#takuden-wrapper .tk-news-list{list-style:none;margin:0;padding:0;border-top:2px solid var(--tk-ink);}
#takuden-wrapper .tk-news-item{display:grid;grid-template-columns:200px 92px minmax(0,1fr);gap:clamp(12px,2vw,28px);align-items:baseline;padding:clamp(20px,3vw,30px) 4px;border-bottom:1px solid var(--tk-border);transition:background-color .3s;}
#takuden-wrapper .tk-news-item:hover{background:var(--tk-bg-alt);}
#takuden-wrapper .tk-news-item time{font-weight:900;font-style:italic;font-size:1.05rem;letter-spacing:.02em;color:var(--tk-ink);font-variant-numeric:tabular-nums;white-space:nowrap;}
#takuden-wrapper .tk-tag{justify-self:start;font-size:.68rem;font-weight:900;letter-spacing:.18em;padding:4px 10px;border-radius:999px;border:1.5px solid var(--tk-orange);color:var(--tk-orange);line-height:1.2;}
#takuden-wrapper .tk-tag-tech{background:var(--tk-orange);color:#fff;}
#takuden-wrapper .tk-tag-race{border-color:var(--tk-ink);color:var(--tk-ink);}
#takuden-wrapper .tk-news-item h4{font-size:clamp(1.15rem,2vw,1.45rem);font-weight:900;line-height:1.45;margin-bottom:6px;color:var(--tk-ink);}
#takuden-wrapper .tk-news-item p{color:var(--tk-slate);font-size:clamp(.95rem,1.4vw,1.05rem);line-height:1.8;}
#takuden-wrapper .tk-next{margin-top:clamp(36px,5vw,56px);padding:clamp(22px,3vw,34px) clamp(22px,3.5vw,40px);border-left:6px solid var(--tk-orange);background:var(--tk-bg-alt);border-radius:0 18px 18px 0;}
#takuden-wrapper .tk-next-label{font-size:.78rem;font-weight:900;letter-spacing:.35em;text-transform:uppercase;color:var(--tk-orange);margin-bottom:10px;}
#takuden-wrapper .tk-next ul{list-style:none;margin:0;padding:0;}
#takuden-wrapper .tk-next li{font-size:clamp(1rem,1.5vw,1.12rem);line-height:1.8;color:var(--tk-ink);padding:4px 0;}
#takuden-wrapper .tk-next li b{display:inline-block;min-width:12em;font-weight:900;color:var(--tk-ink);}
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
#takuden-wrapper .tk-social-h{font-size:clamp(2.2rem,6vw,4.5rem)!important;margin:12px 0 clamp(32px,5vw,56px);}
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
#takuden-wrapper .tk-contact-h{font-size:clamp(2.8rem,9vw,7rem)!important;margin:14px 0 clamp(40px,6vw,68px);}
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
#takuden-wrapper .tk-top{position:relative;overflow:hidden;background:var(--tk-black);color:#fff;min-height:min(92vh,860px);display:flex;align-items:center;padding:120px 0 90px;}
#takuden-wrapper .tk-top-media{position:absolute;top:0;right:0;bottom:0;width:48%;clip-path:polygon(24% 0,100% 0,100% 100%,0 100%);}
#takuden-wrapper .tk-top-media img{width:100%;height:100%;object-fit:cover;object-position:50% 40%;filter:grayscale(.35) contrast(1.05) brightness(.8);}
#takuden-wrapper .tk-top-media::after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,var(--tk-black) 0%,rgba(12,12,14,.15) 45%,rgba(12,12,14,0) 100%);}
#takuden-wrapper .tk-top-inner{position:relative;z-index:2;width:90%;max-width:1240px;margin:0 auto;}
#takuden-wrapper .tk-top-logo{width:min(560px,82vw);height:auto;}
#takuden-wrapper .tk-top-sub{margin-top:18px;font-size:14px;font-weight:700;letter-spacing:.3em;color:rgba(255,255,255,.6);}
#takuden-wrapper .tk-top-h{margin:clamp(28px,4vw,44px) 0 0;padding:0;font-size:clamp(25px,4.4vw,58px);font-weight:900;font-style:italic;line-height:1.25;letter-spacing:-.01em;color:#fff;}
#takuden-wrapper .tk-top-h em{font-style:italic;color:var(--tk-orange);}
#takuden-wrapper h1.tk-top-h,#takuden-wrapper h1.tk-top-h em{text-align:left!important;font-family:"Noto Sans JP",system-ui,sans-serif!important;font-style:italic!important;font-weight:900!important;text-transform:none!important;letter-spacing:-.01em!important;}
#takuden-wrapper h1.tk-top-h{color:#fff!important;line-height:1.25!important;}
#takuden-wrapper h1.tk-top-h em{color:var(--tk-orange)!important;}
#takuden-wrapper .tk-count{display:inline-grid;grid-template-columns:auto auto;align-items:end;column-gap:22px;row-gap:4px;margin-top:clamp(30px,4vw,48px);padding:16px 26px 14px 0;border-top:1px solid rgba(255,255,255,.18);}
#takuden-wrapper .tk-count-label{grid-column:1/-1;font-size:13px;font-weight:700;letter-spacing:.12em;color:rgba(255,255,255,.65);}
#takuden-wrapper .tk-count-num{display:flex;align-items:baseline;gap:10px;}
#takuden-wrapper .tk-count-num b{font-size:clamp(64px,9vw,120px);font-weight:900;font-style:italic;line-height:.95;letter-spacing:-.04em;color:var(--tk-orange);font-variant-numeric:tabular-nums;}
#takuden-wrapper .tk-count-num small{font-size:14px;font-weight:900;letter-spacing:.3em;color:#fff;}
#takuden-wrapper .tk-count-date{align-self:end;padding-bottom:10px;font-size:13px;font-weight:700;letter-spacing:.06em;color:rgba(255,255,255,.75);}
#takuden-wrapper .tk-top-cta{display:flex;flex-wrap:wrap;gap:12px;margin-top:clamp(28px,4vw,40px);}
#takuden-wrapper .tk-btn{display:inline-flex;align-items:center;padding:14px 28px;font-size:14px;font-weight:900;letter-spacing:.08em;color:#fff;border:1.5px solid rgba(255,255,255,.45);transform:skewX(-14deg);transition:.25s;}
#takuden-wrapper .tk-btn:hover,#takuden-wrapper .tk-btn:focus-visible{border-color:#fff;background:#fff;color:var(--tk-black);}
#takuden-wrapper .tk-btn.tk-btn-o{background:var(--tk-orange);border-color:var(--tk-orange);color:#111;}
#takuden-wrapper .tk-btn.tk-btn-o:hover{background:#fff;border-color:#fff;}
#takuden-wrapper .tk-top-slash{position:absolute;left:0;right:0;bottom:0;height:10px;display:flex;gap:6px;z-index:3;}
#takuden-wrapper .tk-top-slash i{display:block;height:100%;background:var(--tk-orange);transform:skewX(-30deg);}
#takuden-wrapper .tk-top-slash i:nth-child(1){flex:0 0 18%;margin-left:-10px;}
#takuden-wrapper .tk-top-slash i:nth-child(2){flex:0 0 3%;}
#takuden-wrapper .tk-top-slash i:nth-child(3){flex:0 0 1.5%;}
#takuden-wrapper .tk-photos{padding:clamp(70px,10vw,130px) 0;background:var(--tk-bg);border-top:1px solid var(--tk-border);}
#takuden-wrapper .tk-photos .tk-wrap{max-width:1240px;}
#takuden-wrapper .tk-photos-head{text-align:center;}
#takuden-wrapper .tk-photos-h{font-size:clamp(32px,5.5vw,64px)!important;margin:14px 0 clamp(32px,5vw,56px);}
#takuden-wrapper .tk-mosaic{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));grid-auto-rows:clamp(150px,17vw,230px);grid-template-areas:"b b w g" "b b w br" "e e r ex" "h h r t";gap:10px;}
#takuden-wrapper .tk-m{position:relative;overflow:hidden;background:#e9ebee;margin:0;padding:0;}
#takuden-wrapper .tk-m:nth-child(1){grid-area:b;}#takuden-wrapper .tk-m:nth-child(2){grid-area:w;}#takuden-wrapper .tk-m:nth-child(3){grid-area:e;}
#takuden-wrapper .tk-m:nth-child(4){grid-area:g;}#takuden-wrapper .tk-m:nth-child(5){grid-area:h;}#takuden-wrapper .tk-m:nth-child(6){grid-area:r;}
#takuden-wrapper .tk-m:nth-child(7){grid-area:br;}#takuden-wrapper .tk-m:nth-child(8){grid-area:ex;}#takuden-wrapper .tk-m:nth-child(9){grid-area:t;}
#takuden-wrapper .tk-m a{display:block;width:100%;height:100%;cursor:zoom-in;}
#takuden-wrapper .tk-m img{width:100%;height:100%;max-width:none;object-fit:cover;transition:transform .6s cubic-bezier(.16,1,.3,1);}
#takuden-wrapper .tk-m span{position:absolute;left:0;right:0;bottom:0;padding:28px 14px 12px;font-size:13px;font-weight:700;line-height:1.5;color:#fff;background:linear-gradient(transparent,rgba(0,0,0,.72));opacity:0;transform:translateY(8px);transition:.35s;}
#takuden-wrapper .tk-m::after{content:"";position:absolute;left:0;bottom:0;height:4px;width:0;background:var(--tk-orange);transition:width .45s cubic-bezier(.16,1,.3,1);}
#takuden-wrapper .tk-m:hover img,#takuden-wrapper .tk-m a:focus-visible img{transform:scale(1.04);}
#takuden-wrapper .tk-m:hover span,#takuden-wrapper .tk-m a:focus-visible span{opacity:1;transform:none;}
#takuden-wrapper .tk-m:hover::after{width:100%;}
#takuden-wrapper .tk-lb{max-width:min(1200px,94vw);max-height:92vh;padding:0;border:0;background:transparent;overflow:visible;}
#takuden-wrapper .tk-lb::backdrop{background:rgba(8,8,10,.9);}
#takuden-wrapper .tk-lb img{max-width:100%;max-height:82vh;width:auto;height:auto;margin:0 auto;}
#takuden-wrapper .tk-lb p{margin-top:12px;text-align:center;color:#fff;font-size:14px;font-weight:700;}
#takuden-wrapper .tk-lb-x{position:absolute;top:-44px;right:0;width:40px;height:40px;border:0;background:none;color:#fff;font-size:30px;line-height:1;cursor:pointer;}
#takuden-wrapper .tk-contact{background:var(--tk-black);color:#fff;border-top:0;}
#takuden-wrapper .tk-contact .tk-display{color:#fff;}
#takuden-wrapper .tk-contact-logo{width:min(380px,70vw);height:auto;margin:0 auto 40px;}
#takuden-wrapper .tk-mail{box-shadow:none;}
#takuden-wrapper .tk-mail:hover,#takuden-wrapper .tk-mail:focus-visible{background:#fff;border-color:#fff;color:#111;}
#takuden-wrapper .tk-contact-sns img{filter:none;}
#takuden-wrapper .tk-contact-sns a[href*="x.com"] img{filter:invert(1);}
#takuden-wrapper .tk-footer{display:flex;flex-direction:column;align-items:center;gap:16px;background:var(--tk-black);color:rgba(255,255,255,.5);border-top:1px solid rgba(255,255,255,.08);}
#takuden-wrapper .tk-footer img{height:30px;width:auto;}
@media (max-width:900px){
  #takuden-wrapper .tk-top{min-height:0;padding:110px 0 80px;}
  #takuden-wrapper .tk-top-media{width:100%;clip-path:none;opacity:.32;}
  #takuden-wrapper .tk-top-media::after{background:linear-gradient(180deg,rgba(12,12,14,.4),var(--tk-black));}
  #takuden-wrapper .tk-count{grid-template-columns:1fr;padding-right:0;}
  #takuden-wrapper .tk-count-date{padding-bottom:0;}
  #takuden-wrapper .tk-mosaic{grid-template-columns:repeat(2,minmax(0,1fr));grid-auto-rows:42vw;grid-template-areas:"b b" "b b" "w g" "w br" "e e" "r ex" "r t" "h h";gap:6px;}
  #takuden-wrapper .tk-m span{opacity:1;transform:none;font-size:11px;padding:22px 10px 8px;}
  #takuden-wrapper .tk-header:not(.tk-scrolled) .tk-nav.tk-open a{color:var(--tk-ink);}
}
@media (prefers-reduced-motion:reduce){#takuden-wrapper .tk-m img,#takuden-wrapper .tk-m span,#takuden-wrapper .tk-m::after{transition:none;}}
@media (max-width:900px){
  #takuden-wrapper .tk-nav{display:none;}
  #takuden-wrapper .tk-burger{display:block;}
  #takuden-wrapper .tk-intro-do{grid-template-columns:1fr;}
  #takuden-wrapper .tk-intro-facts{grid-template-columns:1fr 1fr;}
  #takuden-wrapper .tk-intro-facts li:nth-child(3){padding-left:0;border-left:0;}
  #takuden-wrapper .tk-intro-facts li:nth-child(n+3){border-top:1px solid var(--tk-border);}
  #takuden-wrapper .tk-act-row{grid-template-columns:1fr;}
  #takuden-wrapper .tk-act-row.tk-flip .tk-act-text,#takuden-wrapper .tk-act-row.tk-flip .tk-act-media,#takuden-wrapper .tk-act-row .tk-act-media{order:0;}
  #takuden-wrapper .tk-act-media{max-width:640px;margin:0 auto;}
  #takuden-wrapper .tk-viewer{aspect-ratio:4/3;}
  #takuden-wrapper .tk-slide img{max-height:clamp(240px,80vw,460px);}
  #takuden-wrapper .tk-sns-grid{grid-template-columns:1fr;gap:36px;}
  #takuden-wrapper .tk-news-item{grid-template-columns:auto 1fr;row-gap:8px;}
  #takuden-wrapper .tk-news-item>div{grid-column:1/-1;}
  #takuden-wrapper .tk-next li b{display:block;min-width:0;}
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

    // 活動カレンダー（calendar/calendar.js）を読み込む。このファイルと同じ配信元から取る
    if (root.querySelector("#calendar-root") && !document.querySelector("script[data-tkcal]")) {
      var cs = document.createElement("script");
      cs.setAttribute("data-tkcal", "1");
      cs.src = CAL_SRC + "?v=" + Date.now();
      document.head.appendChild(cs);
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

    // 大会までの残り日数（日本時間の日付で数える）
    var daysEl = document.getElementById("tk-days");
    if (daysEl) {
      var now = new Date();
      var unit = document.getElementById("tk-days-unit");
      if (now >= EVENT_END) { daysEl.textContent = "GO"; if (unit) unit.textContent = "大会終了"; }
      else if (now >= EVENT_START) { daysEl.textContent = "NOW"; if (unit) unit.textContent = "大会期間中"; }
      else {
        var jst = function (d) { return Math.floor((d.getTime() + 9 * 3600000) / 86400000); };
        daysEl.textContent = String(jst(EVENT_START) - jst(now));
      }
    }

    // 写真の拡大表示（dialog が使えないブラウザは画像をそのまま開く）
    var lb = document.getElementById("tk-lb");
    if (lb && typeof lb.showModal === "function") {
      var lbImg = lb.querySelector("img"), lbCap = lb.querySelector("p");
      root.querySelectorAll(".tk-m a").forEach(function (a) {
        a.addEventListener("click", function (e) {
          e.preventDefault();
          lbImg.src = a.getAttribute("href");
          lbImg.alt = a.getAttribute("data-cap") || "";
          lbCap.textContent = a.getAttribute("data-cap") || "";
          lb.showModal();
        });
      });
      lb.querySelector(".tk-lb-x").addEventListener("click", function () { lb.close(); });
      lb.addEventListener("click", function (e) { if (e.target === lb) lb.close(); });
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
      // 画像をランダム順に並べ替え（読み込みごとにシャッフル）
      var arr = Array.prototype.slice.call(slides);
      for (var k = arr.length - 1; k > 0; k--) { var j = Math.floor(Math.random() * (k + 1)); var t = arr[k]; arr[k] = arr[j]; arr[j] = t; }
      arr.forEach(function (s) { slider.appendChild(s); });
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
