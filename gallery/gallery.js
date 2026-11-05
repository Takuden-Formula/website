/* ============================================================
   TAKUDEN — Gallery（活動の写真）本体
   GitHub Pages から配信し、Jimdoのローダーが読み込む単一ソース。
   Jimdo側（Gallery ページの一番上の HTML ブロック）:
     <div id="gallery-root"></div>
     <script>(function(){var s=document.createElement('script');
       s.src='https://takuden-formula.github.io/website/gallery/gallery.js?v='+Date.now();
       document.head.appendChild(s);})();</script>
   写真を足すとき: 新しい写真は photos/ に置いて NEW の先頭に [ファイル名, キャプション] を足す。
   年ごとの写真は YEARS（Jimdo に上げてある画像の URL とキャプション）。
   Jimdo に直接置いてある旧ギャラリーは消さずに、このブロックが表示されたときだけ隠す。
   ============================================================ */
(function () {
  "use strict";

  var SELF = (document.currentScript && document.currentScript.src) || "";
  var BASE = /\/gallery\/gallery\.js/.test(SELF)
    ? SELF.replace(/\/gallery\/gallery\.js.*$/, "")
    : "https://takuden-formula.github.io/website";

  // 2026年に追加した写真（photos/ に置いたもの）。[ファイル名, キャプション, 年]
  var NEW = [
    [
      "venue.jpg",
      "学生フォーミュラ日本大会の会場 Aichi Sky Expo（2026年8月、学生スタッフとして参加）",
      "2026"
    ],
    [
      "course.jpg",
      "大会の動的審査コース。2027年はここを走ることが目標",
      "2026"
    ],
    [
      "ryoryo-logo.jpg",
      "紅陵祭2026｜新しいチームロゴを掲げた教室展示",
      "2026"
    ],
    [
      "gear-kit.jpg",
      "紅陵祭2026｜3Dプリンタで作った遊星歯車キーホルダーの組み立て体験",
      "2026"
    ],
    [
      "exhibit.jpg",
      "紅陵祭2026｜フレーム模型と部品の展示",
      "2026"
    ],
    [
      "hv-cable.jpg",
      "モーター試験で使う高電圧ケーブル（2026年10月）",
      "2026"
    ],
    [
      "erk-kart.jpg",
      "ERK Cup 第3戦（本庄）｜チーム #54 のカート",
      "2026"
    ],
    [
      "kart-run.jpg",
      "学内でのEVカート走行（2026年）",
      "2026"
    ],
    [
      "kart-54.jpg",
      "学内でのEVカート走行（2026年）",
      "2026"
    ],
    [
      "welding.jpg",
      "部室での溶接作業",
      "2026"
    ],
    [
      "rc-car.jpg",
      "高尾祭2026｜自作ラジコンの操作体験",
      "2026"
    ],
    [
      "breadboard.jpg",
      "新人教育｜マイコンでモーターを動かす入門",
      "2026"
    ]
  ];

  // Jimdo に上げてある写真（年ごと）。[URL, キャプション]
  var YEARS = [{"y": "2026", "items": [["https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg/path/s526a7478a3a00671/image/i7055fbb182da7b7e/version/1786381210/image.jpg", ""], ["https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg/path/s526a7478a3a00671/image/ieecf2ddee05849aa/version/1786381212/image.jpg", ""], ["https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg/path/s526a7478a3a00671/image/ifd454fa454e79cac/version/1786422413/image.jpg", ""], ["https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg/path/s526a7478a3a00671/image/ibb0c085cd140ae91/version/1786422413/image.jpg", ""], ["https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg/path/s526a7478a3a00671/image/i2ca10b218ff5cfa2/version/1786422413/image.jpg", ""], ["https://image.jimcdn.com/app/cms/image/transf/dimension=1200x1600:format=jpg:rotate=90/path/s526a7478a3a00671/image/ic5b575b5bf5fb15f/version/1786422413/image.jpg", ""], ["https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg/path/s526a7478a3a00671/image/i55a1cdc3581a5b5a/version/1786422413/image.jpg", ""], ["https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg/path/s526a7478a3a00671/image/i7cf2a5f3ca546fd5/version/1786422413/image.jpg", ""], ["https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg/path/s526a7478a3a00671/image/ic70ea485000c65b0/version/1786422418/image.jpg", ""], ["https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg/path/s526a7478a3a00671/image/ic93d0e152cb9833e/version/1786422418/image.jpg", ""], ["https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg/path/s526a7478a3a00671/image/i352a173732a64b5d/version/1786422418/image.jpg", ""], ["https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg/path/s526a7478a3a00671/image/i77c9cef33f747801/version/1786422418/image.jpg", ""], ["https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg/path/s526a7478a3a00671/image/i5014276232c9d180/version/1786422418/image.jpg", ""], ["https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg/path/s526a7478a3a00671/image/i57238be64347f2de/version/1786422418/image.jpg", ""], ["https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg/path/s526a7478a3a00671/image/i347e347a4fc480f9/version/1786422418/image.jpg", ""]]}, {"y": "2025", "items": [["https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg/path/s526a7478a3a00671/image/i39267aacc5cf642f/version/1766762592/image.jpg", ""], ["https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg/path/s526a7478a3a00671/image/i27c308387c0b9815/version/1766762591/image.jpg", ""], ["https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg/path/s526a7478a3a00671/image/i383d0aa4460cc038/version/1766762591/image.jpg", ""], ["https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg/path/s526a7478a3a00671/image/i07bff8daf9249fe2/version/1771058581/image.jpg", ""], ["https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg:rotate=180/path/s526a7478a3a00671/image/i28773fc6927f9c29/version/1771058581/image.jpg", ""], ["https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg/path/s526a7478a3a00671/image/i2f87cd07f2480fc6/version/1771058581/image.jpg", ""], ["https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg/path/s526a7478a3a00671/image/i24db6b86a01faa96/version/1771058581/image.jpg", "ホームページの更新中です！"], ["https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=png/path/s526a7478a3a00671/image/i17bdb36bf0eb381b/version/1771058581/image.png", ""], ["https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg/path/s526a7478a3a00671/image/iff6cb6ea6b607575/version/1771058581/image.jpg", ""], ["https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg/path/s526a7478a3a00671/image/i0236fbf9c3ac0c01/version/1771058581/image.jpg", ""], ["https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg/path/s526a7478a3a00671/image/i8e2996a6b094235e/version/1771058581/image.jpg", ""], ["https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg/path/s526a7478a3a00671/image/i769ddf6cb25e6b6a/version/1771058581/image.jpg", "紅陵祭に向けて準備中です！"], ["https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg/path/s526a7478a3a00671/image/i6c319012196b6805/version/1771399902/image.jpg", ""], ["https://image.jimcdn.com/app/cms/image/transf/dimension=1200x1600:format=jpg:rotate=90/path/s526a7478a3a00671/image/i8a40fabbd8872159/version/1771399902/image.jpg", "学生フォーミュラに学生スタッフとして参加しました！"], ["https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg/path/s526a7478a3a00671/image/i1912f0e867a42b4a/version/1771399902/image.jpg", "動的審査も見学しました！"], ["https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg/path/s526a7478a3a00671/image/iad09bd2dde930ebf/version/1771399902/image.jpg", "学生フォーミュラ2025に見学しました！"], ["https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg/path/s526a7478a3a00671/image/iccc146649565aa42/version/1771399902/image.jpg", "トヨタ東京自動車大学校様からシャシーをゆずっていただきました！"], ["https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=png/path/s526a7478a3a00671/image/i89b009d85d7d19c2/version/1771399902/image.png", "デンソー様の本社を見学させていただきました！"], ["https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg/path/s526a7478a3a00671/image/i2a2ba55c8dfdcd19/version/1771399902/image.jpg", "EV模擬車検会を見学しました！"], ["https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg/path/s526a7478a3a00671/image/i128c5c5b0f5d12d5/version/1771399902/image.jpg", "東京大学フォーミュラファクトリーUTFFの製作環境を見学させていただきました！"], ["https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg/path/s526a7478a3a00671/image/iabe0fb4556b89480/version/1771399902/image.jpg", "高尾祭（文化祭）の準備中です！"], ["https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg/path/s526a7478a3a00671/image/i35468ad39efd65bb/version/1771399902/image.jpg", ""], ["https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg/path/s526a7478a3a00671/image/i7252419ab623f34f/version/1771399902/image.jpg", "人とくるまのテクノロジー展に行きました！"], ["https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg:rotate=180/path/s526a7478a3a00671/image/i7714f11854daee60/version/1771399902/image.jpg", "あいにくの雨でしたが、新歓ロードやってました！"], ["https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg/path/s526a7478a3a00671/image/ie394ad94d134cd01/version/1771399902/image.jpg", ""]]}, {"y": "2024", "items": [["https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg/path/s526a7478a3a00671/image/id5f23b6cdeeb15f3/version/1760367219/image.jpg", "電動バイクを修理中です！"], ["https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg/path/s526a7478a3a00671/image/i6250365824599cb3/version/1760367218/image.jpg", "電動バイクのライトテストです！"], ["https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg/path/s526a7478a3a00671/image/i1962c6c6c4ae73cb/version/1760367218/image.jpg", "トヨタ東京自動車大学校を見学させていただきました！"], ["https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg/path/s526a7478a3a00671/image/ia53da6b245e19f6f/version/1760367218/image.jpg", "日産回路講座に参加しました！"], ["https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg/path/s526a7478a3a00671/image/i739c5ca7c50e8ff1/version/1760367218/image.jpg", "日本EVフェスティバルにてスーパーセブンを展示しました！"], ["https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg/path/s526a7478a3a00671/image/i08bdac822ac9061f/version/1760367218/image.jpg", "移動準備中です！"], ["https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg/path/s526a7478a3a00671/image/i50896103408c0a69/version/1760367218/image.jpg", "氷上電気カート競技会 ERK on ICEのお手伝いをしました！"], ["https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg/path/s526a7478a3a00671/image/i974ef2fc370f343e/version/1760367218/image.jpg", "勉強会を行いました！"], ["https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg/path/s526a7478a3a00671/image/i6ccb74dcc951d068/version/1760367218/image.jpg", "ねじの整理中！"], ["https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg/path/s526a7478a3a00671/image/i9eed928a1002444e/version/1760367218/image.jpg", "サスペンション周り"], ["https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg/path/s526a7478a3a00671/image/i3f692b942fe7e34c/version/1760367218/image.jpg", "スーパーセブンを用いて勉強会をしました！"], ["https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg/path/s526a7478a3a00671/image/iaac8966d81f4cec2/version/1760367218/image.jpg", "倉庫の整理をしました！"], ["https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg/path/s526a7478a3a00671/image/i3c9e7b193438953b/version/1760367218/image.jpg", "新歓ロードやってます～"]]}, {"y": "2023", "items": [["https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg/path/s526a7478a3a00671/image/i6d6f3bf26dc1242c/version/1766837981/image.jpg", "ERKカートです！"], ["https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg/path/s526a7478a3a00671/image/i75e45e557ccb3e64/version/1766837978/image.jpg", ""], ["https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg/path/s526a7478a3a00671/image/i389774e632c21a11/version/1766837978/image.jpg", ""], ["https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg/path/s526a7478a3a00671/image/i1b181b7fec5c7c11/version/1766837978/image.jpg", "会室です！会議や設計などを行います！"], ["https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg/path/s526a7478a3a00671/image/i870bdefc826eb9d3/version/1766837978/image.jpg", "鉛バッテリーを充電中です！"], ["https://image.jimcdn.com/app/cms/image/transf/dimension=1600x1200:format=jpg/path/s526a7478a3a00671/image/ie86418e6463c9e5a/version/1766837978/image.jpg", "我々の倉庫です！"]]}];

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  function collect() {
    var map = {};
    YEARS.forEach(function (y) { map[y.y] = y.items.map(function (it) { return { src: it[0], cap: it[1] }; }); });
    NEW.slice().reverse().forEach(function (n) {
      (map[n[2]] = map[n[2]] || []).unshift({ src: BASE + "/photos/" + n[0], cap: n[1], isNew: true });
    });
    return Object.keys(map).sort().reverse().map(function (y) { return { y: y, items: map[y] }; });
  }

  function html(groups) {
    var total = 0; groups.forEach(function (g) { total += g.items.length; });
    var tabs = groups.map(function (g) { return '<a href="#g-' + g.y + '">' + g.y + '<small>' + g.items.length + '</small></a>'; }).join("");
    var secs = groups.map(function (g) {
      var figs = g.items.map(function (it, i) {
        return '<figure class="g-item' + (it.isNew ? ' g-new' : '') + '"><a href="' + esc(it.src) + '" data-cap="' + esc(it.cap) + '">' +
          '<img loading="lazy" decoding="async" src="' + esc(it.src) + '" alt="' + esc(it.cap || (g.y + "年の活動写真 " + (i + 1))) + '"></a>' +
          (it.cap ? '<figcaption>' + esc(it.cap) + '</figcaption>' : '') + '</figure>';
      }).join("");
      return '<section class="g-year" id="g-' + g.y + '"><div class="g-year-head"><h2>' + g.y + '</h2><span>' + g.items.length + ' PHOTOS</span></div><div class="g-grid">' + figs + '</div></section>';
    }).join("");
    return '<div id="gallery-wrapper">' +
      '<header class="g-hero"><div class="g-wrap">' +
        '<img class="g-hero-logo" src="' + BASE + '/brand/logo-white.png" alt="TAKUDEN FORMULA" width="1129" height="190">' +
        '<p class="g-label">Gallery</p>' +
        '<h1 class="g-h1">活動の記録</h1>' +
        '<p class="g-sub">設計・製作、大会やレース、文化祭、企業の皆様との交流まで。2023年からの活動を写真で振り返ります。</p>' +
        '<p class="g-count"><b>' + total + '</b> PHOTOS</p>' +
      '</div><div class="g-slash" aria-hidden="true"><i></i><i></i><i></i></div></header>' +
      '<nav class="g-tabs" aria-label="年で選ぶ"><div class="g-wrap">' + tabs + '</div></nav>' +
      '<div class="g-wrap g-body">' + secs + '</div>' +
      '<dialog class="g-lb" aria-label="写真の拡大表示"><button type="button" class="g-lb-x" aria-label="閉じる">×</button>' +
        '<button type="button" class="g-lb-prev" aria-label="前の写真">‹</button><button type="button" class="g-lb-next" aria-label="次の写真">›</button>' +
        '<img alt=""><p></p></dialog>' +
    '</div>';
  }

  var CSS = `
#gallery-wrapper{--o:#FF5A00;--ink:#111214;--black:#0c0c0e;--slate:#475569;--border:#e2e8f0;font-family:"Noto Sans JP",system-ui,-apple-system,"Segoe UI",sans-serif;color:var(--ink);line-height:1.6;-webkit-font-smoothing:antialiased;width:100vw;max-width:100vw;margin-left:calc(50% - 50vw);overflow-x:hidden;background:#fff;}
#gallery-wrapper *{box-sizing:border-box;}
#gallery-wrapper h1,#gallery-wrapper h2,#gallery-wrapper p,#gallery-wrapper figure{margin:0;padding:0;}
#gallery-wrapper a{color:inherit;text-decoration:none;}
#gallery-wrapper img{display:block;max-width:100%;}
#gallery-wrapper .g-wrap{width:90%;max-width:1240px;margin:0 auto;}
#gallery-wrapper .g-hero{position:relative;background:var(--black);color:#fff;padding:clamp(64px,9vw,110px) 0 clamp(56px,8vw,96px);overflow:hidden;}
#gallery-wrapper .g-hero-logo{width:min(300px,62vw);height:auto;margin-bottom:clamp(28px,4vw,44px);}
#gallery-wrapper p.g-label{font-size:12px!important;font-weight:900;letter-spacing:.4em;text-transform:uppercase;color:var(--o)!important;}
#gallery-wrapper .g-label::before{content:"";display:inline-block;width:20px;height:11px;margin:0 14px 2px 0;vertical-align:middle;background:repeating-linear-gradient(90deg,var(--o) 0 5px,transparent 5px 8px);transform:skewX(-24deg);}
#gallery-wrapper h1.g-h1{margin-top:12px!important;font-family:"Noto Sans JP",system-ui,sans-serif!important;font-size:clamp(40px,7vw,84px)!important;font-weight:900!important;font-style:italic!important;line-height:1.05!important;letter-spacing:-.02em!important;color:#fff!important;text-align:left!important;text-transform:none!important;}
#gallery-wrapper .g-sub{margin-top:18px;max-width:640px;font-size:15px;line-height:1.9;color:rgba(255,255,255,.72);}
#gallery-wrapper .g-count{margin-top:26px;font-size:13px;font-weight:900;letter-spacing:.3em;color:rgba(255,255,255,.8);}
#gallery-wrapper .g-count b{font-size:44px;font-style:italic;letter-spacing:-.02em;color:var(--o);margin-right:8px;vertical-align:-4px;}
#gallery-wrapper .g-slash{position:absolute;left:0;right:0;bottom:0;height:8px;display:flex;gap:6px;}
#gallery-wrapper .g-slash i{display:block;height:100%;background:var(--o);transform:skewX(-30deg);}
#gallery-wrapper .g-slash i:nth-child(1){flex:0 0 18%;margin-left:-10px;}#gallery-wrapper .g-slash i:nth-child(2){flex:0 0 3%;}#gallery-wrapper .g-slash i:nth-child(3){flex:0 0 1.5%;}
#gallery-wrapper .g-tabs{position:sticky;top:0;z-index:50;background:rgba(255,255,255,.94);backdrop-filter:blur(12px);border-bottom:1px solid var(--border);}
#gallery-wrapper .g-tabs .g-wrap{display:flex;gap:8px;overflow-x:auto;padding:12px 0;scrollbar-width:none;}
#gallery-wrapper .g-tabs a{flex:none;display:inline-flex;align-items:baseline;gap:6px;padding:8px 18px;font-size:16px;font-weight:900;font-style:italic;border:1.5px solid var(--border);transform:skewX(-14deg);transition:.2s;}
#gallery-wrapper .g-tabs a small{font-size:11px;font-weight:700;font-style:normal;color:#94a3b8;}
#gallery-wrapper .g-tabs a:hover,#gallery-wrapper .g-tabs a.g-on{background:var(--ink);border-color:var(--ink);color:#fff;}
#gallery-wrapper .g-tabs a.g-on small{color:var(--o);}
#gallery-wrapper .g-body{padding:clamp(40px,6vw,72px) 0 clamp(70px,10vw,120px);}
#gallery-wrapper .g-year{scroll-margin-top:80px;}
#gallery-wrapper .g-year+.g-year{margin-top:clamp(56px,8vw,96px);}
#gallery-wrapper .g-year-head{display:flex;align-items:baseline;justify-content:space-between;gap:16px;padding-bottom:14px;margin-bottom:22px;border-bottom:2px solid var(--ink);}
#gallery-wrapper .g-year-head h2{font-family:"Noto Sans JP",system-ui,sans-serif!important;font-size:clamp(40px,6vw,72px)!important;font-weight:900!important;font-style:italic!important;line-height:1!important;letter-spacing:-.03em!important;color:var(--ink)!important;text-align:left!important;}
#gallery-wrapper .g-year-head span{font-size:12px;font-weight:900;letter-spacing:.3em;color:var(--o);}
#gallery-wrapper .g-grid{column-count:3;column-gap:12px;}
#gallery-wrapper .g-item{break-inside:avoid;margin-bottom:12px;position:relative;}
#gallery-wrapper .g-item a{display:block;position:relative;overflow:hidden;background:#eef0f3;cursor:zoom-in;}
#gallery-wrapper .g-item a::after{content:"";position:absolute;left:0;bottom:0;height:4px;width:0;background:var(--o);transition:width .45s cubic-bezier(.16,1,.3,1);}
#gallery-wrapper .g-item a:hover::after,#gallery-wrapper .g-item a:focus-visible::after{width:100%;}
#gallery-wrapper .g-item img{width:100%;height:auto;transition:transform .6s cubic-bezier(.16,1,.3,1),opacity .6s;}
#gallery-wrapper .g-item a:hover img{transform:scale(1.03);}
#gallery-wrapper.g-js .g-item img{opacity:0;}
#gallery-wrapper.g-js .g-item img.g-loaded{opacity:1;}
#gallery-wrapper .g-item figcaption{padding:8px 2px 2px;font-size:13px;font-weight:700;line-height:1.6;color:var(--slate);}
#gallery-wrapper .g-new a::before{content:"NEW";position:absolute;z-index:2;top:10px;left:10px;padding:3px 10px;font-size:10px;font-weight:900;letter-spacing:.2em;color:#111;background:var(--o);transform:skewX(-14deg);}
#gallery-wrapper .g-lb{max-width:min(1200px,94vw);max-height:94vh;padding:0;border:0;background:transparent;overflow:visible;}
#gallery-wrapper .g-lb::backdrop{background:rgba(8,8,10,.92);}
#gallery-wrapper .g-lb img{max-width:100%;max-height:82vh;width:auto;height:auto;margin:0 auto;}
#gallery-wrapper .g-lb p{min-height:1.6em;margin-top:12px;text-align:center;color:#fff;font-size:14px;font-weight:700;}
#gallery-wrapper .g-lb button{position:absolute;border:0;background:none;color:#fff;cursor:pointer;line-height:1;}
#gallery-wrapper .g-lb-x{top:-46px;right:0;font-size:32px;width:44px;height:44px;}
#gallery-wrapper .g-lb-prev,#gallery-wrapper .g-lb-next{top:50%;transform:translateY(-50%);font-size:56px;width:56px;height:80px;}
#gallery-wrapper .g-lb-prev{left:-64px;}#gallery-wrapper .g-lb-next{right:-64px;}
#gallery-wrapper a:focus-visible,#gallery-wrapper button:focus-visible{outline:3px solid var(--o);outline-offset:3px;}
@media (max-width:900px){#gallery-wrapper .g-grid{column-count:2;column-gap:8px;}#gallery-wrapper .g-item{margin-bottom:8px;}#gallery-wrapper .g-lb-prev{left:0;}#gallery-wrapper .g-lb-next{right:0;}#gallery-wrapper .g-lb-prev,#gallery-wrapper .g-lb-next{text-shadow:0 2px 8px rgba(0,0,0,.6);}}
@media (max-width:520px){#gallery-wrapper .g-item figcaption{font-size:11px;}}
@media (prefers-reduced-motion:reduce){#gallery-wrapper .g-item img,#gallery-wrapper .g-item a::after{transition:none;}}`;

  function build() {
    var mount = document.getElementById("gallery-root");
    if (!mount) return;
    if (!document.querySelector("style[data-gallery]")) {
      var st = document.createElement("style"); st.setAttribute("data-gallery", "1"); st.textContent = CSS; document.head.appendChild(st);
    }
    if (!mount.querySelector("#gallery-wrapper")) mount.innerHTML = html(collect());
    var root = document.getElementById("gallery-wrapper");
    hideOldJimdoGallery(mount);
    behavior(root);
  }

  // 同じページに Jimdo で直接置いた旧ギャラリー（見出し・ギャラリー・余白）を隠す。消してはいない
  function hideOldJimdoGallery(mount) {
    var mod = mount.closest(".j-module");
    if (!mod || !mod.parentNode) return;
    Array.prototype.forEach.call(mod.parentNode.children, function (el) {
      if (el !== mod && el.classList && /\bj-(gallery|header|spacing)\b/.test(el.className)) el.style.display = "none";
    });
  }

  function behavior(root) {
    root.classList.add("g-js");
    root.querySelectorAll(".g-item img").forEach(function (img) {
      var done = function () { img.classList.add("g-loaded"); };
      if (img.complete && img.naturalWidth) done(); else { img.addEventListener("load", done); img.addEventListener("error", done); }
    });

    // 年タブ：表示中の年を強調
    var tabs = root.querySelectorAll(".g-tabs a");
    if (tabs[0]) tabs[0].classList.add("g-on");
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (es) {
        es.forEach(function (e) {
          if (e.isIntersecting) tabs.forEach(function (t) { t.classList.toggle("g-on", t.getAttribute("href") === "#" + e.target.id); });
        });
      }, { rootMargin: "-30% 0px -60% 0px" });
      root.querySelectorAll(".g-year").forEach(function (s) { io.observe(s); });
    }
    tabs.forEach(function (t) {
      t.addEventListener("click", function (e) {
        var s = root.querySelector(t.getAttribute("href"));
        if (s) { e.preventDefault(); s.scrollIntoView({ behavior: "smooth", block: "start" }); }
      });
    });

    // 拡大表示（前後送り・キーボード対応）
    var lb = root.querySelector(".g-lb");
    if (!lb || typeof lb.showModal !== "function") return;
    var links = Array.prototype.slice.call(root.querySelectorAll(".g-item a"));
    var img = lb.querySelector("img"), cap = lb.querySelector("p"), cur = 0;
    var show = function (i) {
      cur = (i + links.length) % links.length;
      var a = links[cur];
      img.src = a.getAttribute("href"); img.alt = a.getAttribute("data-cap") || ""; cap.textContent = a.getAttribute("data-cap") || "";
    };
    links.forEach(function (a, i) { a.addEventListener("click", function (e) { e.preventDefault(); show(i); lb.showModal(); }); });
    lb.querySelector(".g-lb-x").addEventListener("click", function () { lb.close(); });
    lb.querySelector(".g-lb-prev").addEventListener("click", function () { show(cur - 1); });
    lb.querySelector(".g-lb-next").addEventListener("click", function () { show(cur + 1); });
    lb.addEventListener("click", function (e) { if (e.target === lb) lb.close(); });
    lb.addEventListener("keydown", function (e) { if (e.key === "ArrowLeft") show(cur - 1); if (e.key === "ArrowRight") show(cur + 1); });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", build); else build();
})();
