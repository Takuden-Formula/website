/* ============================================================
   TAKUDEN — 活動カレンダー（ホームの「最新情報」の下に表示）
   どのページでも <div id="calendar-root"></div> があればそこに描画する。
   ホームでは jimdo-top/takuden.js がこのファイルを読み込む。

   予定の足し方:
     ・毎週の定例活動 → WEEKLY を編集（休みの日は skip に "YYYY-MM-DD" を足す）
     ・単発の予定     → EVENTS に1件足す
       { date: "2026-11-12",        // 必須 YYYY-MM-DD
         end:  "2026-11-13",        // 任意 複数日のとき最終日
         type: "event",             // activity=活動日 / test=走行・試験 / event=イベント / race=大会 / other=その他
         title: "〇〇に出展",        // 必須
         time: "10:00〜16:00",      // 任意
         place: "八王子国際キャンパス", // 任意
         note: "" }                 // 任意
   ============================================================ */
(function () {
  "use strict";

  /* 毎週の定例活動（Join Us ページの「活動時間」と合わせる） */
  var WEEKLY = {
    days: [3, 5],                 // 0=日 1=月 … 3=水 5=金
    from: "2026-11-04",
    until: "2027-08-31",          // 年度ごとに延ばし、skip（祝日・年末年始）も足す
    // 休みにする日 "YYYY-MM-DD"（水・金の祝日・年末年始。大会の会期中は自動で出さない）
    skip: ["2026-12-25", "2026-12-30", "2027-01-01", "2027-01-06", "2027-05-05", "2027-08-11"],
    title: "定例活動",
    time: "4・5限",
    place: "学生交流会館 422号室・実験実習工場横 倉庫",
    note: "見学はいつでも歓迎です。祝日・長期休業中は変わることがあります。"
  };

  /* 単発の予定（日付順でなくてよい） */
  var EVENTS = [
    { date: "2027-08-23", end: "2027-08-28", type: "race", title: "学生フォーミュラ日本大会2027", place: "Aichi Sky Expo（愛知県国際展示場）", note: "初参戦を目指しています。" }
  ];

  var TYPES = {
    activity: { label: "活動日", color: "#C2410C" },
    test:     { label: "走行・試験", color: "#2563EB" },
    event:    { label: "イベント", color: "#15803D" },
    race:     { label: "大会", color: "#7C3AED" },
    other:    { label: "その他", color: "#64748B" }
  };

  var SVG = {
    left:  '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 6-6 6 6 6"/></svg>',
    right: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 6 6 6-6 6"/></svg>',
    cal:   '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>',
    repeat:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17 2l4 4-4 4"/><path d="M3 11V9a3 3 0 0 1 3-3h15M7 22l-4-4 4-4"/><path d="M21 13v2a3 3 0 0 1-3 3H3"/></svg>'
  };

  var HTML = `
<div id="tkcal">
  <div class="c-wrap">
    <div class="c-head">
      <p class="c-label">Schedule</p>
      <h3 class="c-title-big">活動カレンダー</h3>
      <p class="c-lead">定例の活動日と、大会・イベントの予定です。</p>
    </div>
    <div class="c-body">
      <div class="c-card">
        <div class="c-bar">
          <button type="button" class="c-nav" data-cal="prev" aria-label="前の月">${SVG.left}</button>
          <h4 class="c-month" aria-live="polite"></h4>
          <button type="button" class="c-nav" data-cal="next" aria-label="次の月">${SVG.right}</button>
          <button type="button" class="c-today" data-cal="today">今月</button>
        </div>
        <div class="c-week" aria-hidden="true"><span class="c-sun">日</span><span>月</span><span>火</span><span>水</span><span>木</span><span>金</span><span class="c-sat">土</span></div>
        <div class="c-grid"></div>
        <div class="c-legend"></div>
      </div>
      <aside class="c-side">
        <div class="c-weekly"></div>
        <h4 class="c-side-title"></h4>
        <ul class="c-list"></ul>
      </aside>
    </div>
  </div>
</div>`;

  var CSS = `
#tkcal{--c-orange:#FF5A00;--c-ink:#0f172a;--c-text:#475569;--c-mute:#94a3b8;--c-border:#e2e8f0;--c-alt:#f6f7f9;font-family:"Noto Sans JP",system-ui,-apple-system,"Segoe UI",sans-serif;color:var(--c-ink);line-height:1.7;font-size:16px;text-align:left;-webkit-font-smoothing:antialiased;font-feature-settings:"palt";}
#tkcal *{box-sizing:border-box;}
#tkcal h3,#tkcal h4,#tkcal p,#tkcal ul{margin:0;padding:0;}
#tkcal h3,#tkcal h4{font-family:inherit;color:inherit;text-align:inherit;text-transform:none;letter-spacing:normal;background:none;border:0;}
#tkcal ul{list-style:none;}
#tkcal svg{width:18px;height:18px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;display:block;}
#tkcal .c-wrap{max-width:1100px;margin:0 auto;padding:0 clamp(16px,4vw,40px);}
#tkcal .c-head{text-align:center;}
#tkcal .c-label{font-size:12.8px;font-weight:900;letter-spacing:.4em;text-transform:uppercase;color:var(--c-orange);}
#tkcal .c-title-big{font-size:clamp(36px,6.5vw,72px);font-weight:900;font-style:italic;letter-spacing:-.03em;line-height:1.05;margin-top:14px;}
#tkcal .c-lead{margin-top:14px;color:var(--c-text);font-size:clamp(15px,1.4vw,17px);}
#tkcal .c-body{display:grid;grid-template-columns:minmax(0,1.6fr) minmax(0,1fr);gap:20px;margin-top:clamp(32px,5vw,52px);align-items:start;}
#tkcal .c-card,#tkcal .c-side{background:#fff;border:1px solid var(--c-border);border-radius:20px;padding:clamp(16px,2.6vw,28px);}
#tkcal .c-bar{display:flex;align-items:center;gap:8px;margin-bottom:16px;}
#tkcal .c-month{flex:1;text-align:center;font-size:clamp(18px,1.8vw,21px);font-weight:800;font-variant-numeric:tabular-nums;order:2;}
#tkcal .c-nav[data-cal=prev]{order:1;}
#tkcal .c-nav[data-cal=next]{order:3;}
#tkcal .c-today{order:4;}
#tkcal .c-nav,#tkcal .c-today{font:inherit;cursor:pointer;height:36px;border:1px solid var(--c-border);background:#fff;color:var(--c-ink);border-radius:999px;display:inline-flex;align-items:center;justify-content:center;transition:border-color .2s;}
#tkcal .c-nav{width:36px;padding:0;}
#tkcal .c-today{padding:0 14px;font-size:13.6px;font-weight:700;}
#tkcal .c-nav:hover,#tkcal .c-today:hover{border-color:var(--c-ink);}
#tkcal .c-nav:focus-visible,#tkcal .c-today:focus-visible{outline:2px solid var(--c-orange);outline-offset:2px;}
#tkcal .c-week,#tkcal .c-grid{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));}
#tkcal .c-week span{text-align:center;font-size:12px;font-weight:700;color:var(--c-mute);padding-bottom:8px;letter-spacing:.08em;}
#tkcal .c-sun{color:#c2410c !important;}
#tkcal .c-sat{color:#2563eb !important;}
#tkcal .c-grid{border-top:1px solid var(--c-border);border-left:1px solid var(--c-border);}
#tkcal .c-day{font:inherit;position:relative;min-height:clamp(52px,7vw,84px);padding:6px 6px 8px;border:0;border-right:1px solid var(--c-border);border-bottom:1px solid var(--c-border);background:#fff;text-align:left;color:var(--c-ink);display:flex;flex-direction:column;gap:3px;cursor:default;min-width:0;}
#tkcal .c-day.c-out{background:#fafafa;color:#cbd5e1 !important;}
#tkcal .c-day.c-out .c-chip{opacity:.45;}
#tkcal .c-day.c-has{cursor:pointer;}
#tkcal .c-day.c-has:hover{background:#fff7f0;}
#tkcal .c-day.c-sel{box-shadow:inset 0 0 0 2px var(--c-ink);}
#tkcal .c-day:focus-visible{outline:2px solid var(--c-orange);outline-offset:-2px;}
#tkcal .c-d{font-size:13.6px;font-weight:700;line-height:1;width:24px;height:24px;display:inline-flex;align-items:center;justify-content:center;border-radius:50%;font-variant-numeric:tabular-nums;}
#tkcal .c-day.c-is-today .c-d{background:#C2410C;color:#fff;}
#tkcal .c-chips{display:flex;flex-direction:column;gap:2px;min-width:0;}
#tkcal .c-chip{font-size:11px;font-weight:700;line-height:1.35;padding:1px 6px;border-radius:4px;color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
#tkcal .c-chip.c-weekly-chip{background:#fdba74;color:#7c2d12;}
#tkcal .c-more{font-size:11px;font-weight:700;color:var(--c-mute);}
#tkcal .c-legend{display:flex;flex-wrap:wrap;gap:6px 18px;margin-top:14px;font-size:12.8px;color:var(--c-text);}
#tkcal .c-legend span{display:inline-flex;align-items:center;gap:6px;}
#tkcal .c-legend i{width:10px;height:10px;border-radius:3px;display:inline-block;}
#tkcal .c-weekly{display:grid;grid-template-columns:auto 1fr;gap:12px;align-items:start;background:#fff7f0;border:1px solid #fed7aa;border-radius:14px;padding:14px 16px;margin-bottom:18px;}
#tkcal .c-weekly .c-wi{width:34px;height:34px;border-radius:10px;background:#fdba74;color:#7c2d12;display:flex;align-items:center;justify-content:center;}
#tkcal .c-weekly b{display:block;font-size:16px;font-weight:800;}
#tkcal .c-weekly span{display:block;font-size:13.6px;color:var(--c-text);line-height:1.6;}
#tkcal .c-side-title{font-size:16px;font-weight:800;padding-bottom:12px;border-bottom:1px solid var(--c-ink);}
#tkcal .c-list li{display:grid;grid-template-columns:auto 1fr;gap:14px;padding:14px 0;border-bottom:1px solid var(--c-border);}
#tkcal .c-list li:last-child{border-bottom:0;}
#tkcal .c-li-date{width:54px;text-align:center;border-radius:10px;padding:6px 0;background:var(--c-alt);line-height:1.15;}
#tkcal .c-li-date b{display:block;font-size:20px;font-weight:800;font-variant-numeric:tabular-nums;}
#tkcal .c-li-date small{display:block;font-size:11px;font-weight:700;color:var(--c-mute);}
#tkcal .c-li-tag{display:inline-block;font-size:11px;font-weight:700;color:#fff;border-radius:4px;padding:1px 6px;margin-bottom:4px;}
#tkcal .c-li-title{display:block;font-weight:800;font-size:16px;line-height:1.45;}
#tkcal .c-li-meta{display:block;font-size:13.6px;color:var(--c-text);line-height:1.6;margin-top:2px;}
#tkcal .c-list li.c-empty{display:flex;flex-direction:column;align-items:center;text-align:center;gap:10px;padding:28px 8px 14px;color:var(--c-mute);font-size:14.5px;line-height:1.8;border:0;}
#tkcal .c-empty svg{width:30px;height:30px;color:#cbd5e1;}
@media (max-width:900px){#tkcal .c-body{grid-template-columns:1fr;}}
@media (max-width:560px){
  #tkcal .c-chip,#tkcal .c-more{display:none;}
  #tkcal .c-day.c-has::after{content:"";position:absolute;left:50%;bottom:8px;width:6px;height:6px;margin-left:-3px;border-radius:50%;background:var(--c-dot,#C2410C);}
  #tkcal .c-d{width:22px;height:22px;font-size:12.8px;}
}`;

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

  function build() {
    var mount = document.getElementById("calendar-root");
    if (!mount || mount.__tkcal) return;
    mount.__tkcal = true;
    if (!document.querySelector("style[data-tkcal]")) {
      var st = document.createElement("style");
      st.setAttribute("data-tkcal", "1");
      st.textContent = CSS;
      document.head.appendChild(st);
    }
    mount.innerHTML = HTML;
    run(mount.querySelector("#tkcal"));
  }

  function run(box) {
    var grid = box.querySelector(".c-grid");
    var month = box.querySelector(".c-month");
    var list = box.querySelector(".c-list");
    var sideTitle = box.querySelector(".c-side-title");

    /* 単発の予定を日付ごとに展開（複数日は最大62日） */
    var items = [], byDay = {};
    EVENTS.forEach(function (e) {
      var s = parse(e && e.date); if (!s || !e.title) return;
      var en = parse(e.end) || s; if (en < s) en = s;
      var it = { s: s, e: en, type: TYPES[e.type] ? e.type : "other", title: e.title, time: e.time, place: e.place, note: e.note };
      items.push(it);
      for (var d = new Date(s), n = 0; d <= en && n < 62; d.setDate(d.getDate() + 1), n++) {
        (byDay[key(d)] = byDay[key(d)] || []).push(it);
      }
    });
    items.sort(function (a, b) { return a.s - b.s; });

    /* 定例活動 */
    var wFrom = parse(WEEKLY.from), wUntil = parse(WEEKLY.until), wSkip = {};
    (WEEKLY.skip || []).forEach(function (s) { wSkip[s] = true; });
    function isWeekly(d) {
      if (!WEEKLY.days || WEEKLY.days.indexOf(d.getDay()) < 0) return false;
      if (wFrom && d < wFrom) return false;
      if (wUntil && d > wUntil) return false;
      if (wSkip[key(d)]) return false;
      return !(byDay[key(d)] || []).some(function (e) { return e.type === "race"; });
    }
    var hasWeekly = !!(WEEKLY.days && WEEKLY.days.length && WEEKLY.title);
    if (hasWeekly) {
      box.querySelector(".c-weekly").innerHTML = '<span class="c-wi">' + SVG.repeat + "</span><div><b>" + esc(WEEKLY.title) + "：毎週" +
        WEEKLY.days.map(function (i) { return WD[i]; }).join("・") + "曜 " + esc(WEEKLY.time || "") + "</b>" +
        (WEEKLY.place ? "<span>" + esc(WEEKLY.place) + "</span>" : "") + (WEEKLY.note ? "<span>" + esc(WEEKLY.note) + "</span>" : "") + "</div>";
    } else {
      box.querySelector(".c-weekly").style.display = "none";
    }

    var used = {};
    items.forEach(function (it) { used[it.type] = true; });
    if (hasWeekly) used.activity = true;
    box.querySelector(".c-legend").innerHTML = Object.keys(TYPES).filter(function (k) { return used[k]; }).map(function (k) {
      return '<span><i style="background:' + (k === "activity" && hasWeekly ? "#fdba74" : TYPES[k].color) + '"></i>' + TYPES[k].label + "</span>";
    }).join("");

    var today = new Date(); today.setHours(0, 0, 0, 0);
    var view = new Date(today.getFullYear(), today.getMonth(), 1);
    var selected = null;

    function dayEvents(k, d) {
      var evs = (byDay[k] || []).slice();
      if (hasWeekly && isWeekly(d)) evs.unshift({ weekly: true, s: d, e: d, type: "activity", title: WEEKLY.title, time: WEEKLY.time, place: WEEKLY.place });
      return evs;
    }
    function fmtRange(it) {
      var a = (it.s.getMonth() + 1) + "/" + it.s.getDate() + "（" + WD[it.s.getDay()] + "）";
      if (+it.e === +it.s) return a;
      return a + " 〜 " + (it.e.getFullYear() !== it.s.getFullYear() ? it.e.getFullYear() + "/" : "") + (it.e.getMonth() + 1) + "/" + it.e.getDate() + "（" + WD[it.e.getDay()] + "）";
    }
    function li(it) {
      var c = TYPES[it.type];
      var meta = [fmtRange(it), it.time, it.place].filter(Boolean).map(esc).join("　");
      var yr = it.s.getFullYear() !== today.getFullYear() ? it.s.getFullYear() + "." : "";
      return '<li><span class="c-li-date">' + (yr ? "<small>" + yr.slice(0, 4) + "</small>" : "") + "<b>" + it.s.getDate() + "</b><small>" + (it.s.getMonth() + 1) + "月・" + WD[it.s.getDay()] + "</small></span>" +
        '<span><span class="c-li-tag" style="' + (it.weekly ? "background:#fdba74;color:#7c2d12" : "background:" + c.color) + '">' + (it.weekly ? "定例" : c.label) + "</span>" +
        '<span class="c-li-title">' + esc(it.title) + "</span>" +
        '<span class="c-li-meta">' + meta + "</span>" +
        (it.note ? '<span class="c-li-meta">' + esc(it.note) + "</span>" : "") + "</span></li>";
    }
    function empty(msg) { return '<li class="c-empty">' + SVG.cal + "<span>" + msg + "</span></li>"; }

    function renderSide() {
      if (selected) {
        var d = parse(selected), evs = dayEvents(selected, d);
        sideTitle.textContent = (d.getMonth() + 1) + "月" + d.getDate() + "日（" + WD[d.getDay()] + "）の予定";
        list.innerHTML = evs.length ? evs.map(li).join("") : empty("この日の予定はありません。");
        return;
      }
      var y = view.getFullYear(), m = view.getMonth();
      var start = new Date(y, m, 1), end = new Date(y, m + 1, 0);
      var isCur = y === today.getFullYear() && m === today.getMonth();
      var from = isCur ? today : start;
      var up = items.filter(function (it) { return it.e >= from && (isCur || it.s <= end); });
      sideTitle.textContent = isCur ? "これからの大会・イベント" : (m + 1) + "月の大会・イベント";
      list.innerHTML = up.length ? up.slice(0, 6).map(li).join("")
        : empty(isCur ? "決まり次第こちらでお知らせします。" : "この月の大会・イベントはありません。");
    }

    function render() {
      var y = view.getFullYear(), m = view.getMonth();
      month.textContent = y + "年 " + (m + 1) + "月";
      var first = new Date(y, m, 1);
      var cur = new Date(y, m, 1 - first.getDay());
      var weeks = Math.ceil((first.getDay() + new Date(y, m + 1, 0).getDate()) / 7);
      var html = "";
      for (var i = 0; i < weeks * 7; i++, cur.setDate(cur.getDate() + 1)) {
        var k = key(cur), evs = dayEvents(k, cur), inMonth = cur.getMonth() === m;
        var cls = "c-day" + (inMonth ? "" : " c-out") + (+cur === +today ? " c-is-today" : "") +
          (evs.length ? " c-has" : "") + (k === selected ? " c-sel" : "") +
          (inMonth ? (cur.getDay() === 0 ? " c-sun" : cur.getDay() === 6 ? " c-sat" : "") : "");
        var label = (cur.getMonth() + 1) + "月" + cur.getDate() + "日" + WD[cur.getDay()] + "曜日" +
          (evs.length ? "、" + evs.map(function (e) { return e.title; }).join("、") : "");
        var main = evs.filter(function (e) { return !e.weekly; })[0];
        var dot = main ? TYPES[main.type].color : "#fdba74";
        var chips = evs.slice(0, 2).map(function (it) {
          return it.weekly ? '<span class="c-chip c-weekly-chip">' + esc(it.title) + "</span>"
            : '<span class="c-chip" style="background:' + TYPES[it.type].color + '">' + esc(it.title) + "</span>";
        }).join("") + (evs.length > 2 ? '<span class="c-more">+' + (evs.length - 2) + "</span>" : "");
        html += '<button type="button" class="' + cls + '" data-day="' + k + '" aria-label="' + esc(label) + '"' +
          (evs.length ? ' aria-pressed="' + (k === selected) + '" style="--c-dot:' + dot + '"' : ' tabindex="-1" aria-disabled="true"') +
          '><span class="c-d">' + cur.getDate() + '</span><span class="c-chips">' + chips + "</span></button>";
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
        if (!b.classList.contains("c-has")) return;
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

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", build);
  } else {
    build();
  }
})();
