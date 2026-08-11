/* ============================================================
   TAKUDEN — Contact（公式SNS）本体
   GitHub Pages 配信・Jimdoローダーが読み込む単一ソース。
   Jimdo側:
     <div id="contact-root"></div>
     <script>(function(){var s=document.createElement('script');
       s.src='https://takuden-formula.github.io/website/contact/contact.js?v='+Date.now();
       document.head.appendChild(s);})();</script>
   ============================================================ */
(function () {
  "use strict";

  var HTML = `
<div id="contact-wrapper">
  <section class="c-social">
    <div class="c-wrap">
      <h3 class="c-title c-reveal">OFFICIAL SNS</h3>
      <div class="c-grid">
        <div class="c-sns c-ig c-reveal">
          <a href="https://www.instagram.com/takudai_ev/?locale=ja_JP" target="_blank" rel="noopener" aria-label="Instagram（新しいタブで開く）">
            <img loading="lazy" alt="Instagram" src="https://image.jimcdn.com/app/cms/image/transf/dimension=512x512:format=png/path/s526a7478a3a00671/image/ie05babe034ac5fba/version/1766837981/image.png">
          </a>
          <span>Instagram</span>
        </div>
        <div class="c-sns c-x c-reveal">
          <a href="https://x.com/takudai_ev" target="_blank" rel="noopener" aria-label="X（新しいタブで開く）">
            <img loading="lazy" alt="X" src="https://image.jimcdn.com/app/cms/image/transf/dimension=512x512:format=png/path/s526a7478a3a00671/image/i9713588295e7af31/version/1771049063/image.png">
          </a>
          <span>X</span>
        </div>
        <div class="c-sns c-line c-reveal">
          <a href="https://lin.ee/PRW5jYj" target="_blank" rel="noopener" aria-label="公式LINE（新しいタブで開く）">
            <img loading="lazy" alt="LINE" src="https://image.jimcdn.com/app/cms/image/transf/dimension=512x512:format=png/path/s526a7478a3a00671/image/ibd212acac6884a45/version/1771049447/image.png">
          </a>
          <span>LINE</span>
        </div>
      </div>
    </div>
  </section>
</div>`;

  var CSS = `
html,body{overflow-x:hidden;max-width:100%;}
#contact-wrapper{--c-orange:#FF6B00;--c-ink:#0f172a;--c-border:#e2e8f0;font-family:"Noto Sans JP",system-ui,-apple-system,"Segoe UI",sans-serif;color:var(--c-ink);-webkit-font-smoothing:antialiased;width:100vw;max-width:100vw;margin-left:calc(50% - 50vw);overflow-x:hidden;}
#contact-wrapper *{box-sizing:border-box;}
#contact-wrapper h3,#contact-wrapper p{margin:0;padding:0;}
#contact-wrapper a{text-decoration:none;color:inherit;}
#contact-wrapper img{display:block;max-width:100%;}
#contact-wrapper .c-social{padding:clamp(56px,9vw,110px) clamp(22px,5vw,40px);}
#contact-wrapper .c-wrap{max-width:1100px;margin:0 auto;text-align:center;}
#contact-wrapper .c-title{font-size:clamp(2.6rem,7vw,5rem);font-weight:900;font-style:italic;letter-spacing:-.03em;line-height:1;margin-bottom:clamp(44px,6vw,72px);color:var(--c-ink);}
#contact-wrapper .c-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:clamp(32px,4vw,56px);max-width:900px;margin:0 auto;}
#contact-wrapper .c-sns{display:flex;flex-direction:column;align-items:center;gap:20px;}
#contact-wrapper .c-sns a{display:block;transition:transform .4s cubic-bezier(.16,1,.3,1);}
#contact-wrapper .c-sns a:hover,#contact-wrapper .c-sns a:focus-visible{transform:translateY(-8px) scale(1.08);}
#contact-wrapper .c-sns img{height:clamp(110px,15vw,160px);width:auto;object-fit:contain;filter:drop-shadow(0 6px 16px rgba(15,23,42,.08));transition:filter .4s;}
#contact-wrapper .c-sns span{font-size:clamp(1.15rem,1.8vw,1.4rem);font-weight:900;letter-spacing:.12em;color:var(--c-ink);transition:color .3s;}
#contact-wrapper .c-ig a:hover img{filter:drop-shadow(0 8px 26px rgba(214,36,159,.4));}
#contact-wrapper .c-ig:hover span{color:#d6249f;}
#contact-wrapper .c-x a:hover img{filter:drop-shadow(0 8px 26px rgba(0,0,0,.35));}
#contact-wrapper .c-x:hover span{color:#000;}
#contact-wrapper .c-line a:hover img{filter:drop-shadow(0 8px 26px rgba(6,199,85,.4));}
#contact-wrapper .c-line:hover span{color:#06C755;}
#contact-wrapper a:focus-visible{outline:3px solid var(--c-orange);outline-offset:4px;border-radius:12px;}
#contact-wrapper.c-js .c-reveal{opacity:0;transform:translateY(40px);transition:opacity .8s cubic-bezier(.16,1,.3,1),transform .9s cubic-bezier(.16,1,.3,1);}
#contact-wrapper.c-js .c-reveal.c-in{opacity:1;transform:none;}
@media (max-width:720px){
  #contact-wrapper .c-grid{grid-template-columns:1fr;gap:44px;}
}
@media (prefers-reduced-motion:reduce){
  #contact-wrapper.c-js .c-reveal{opacity:1;transform:none;transition:none;}
}`;

  function build() {
    var mount = document.getElementById("contact-root") || document.getElementById("contact-wrapper");
    if (!mount) return;
    if (!document.querySelector("style[data-contact]")) {
      var st = document.createElement("style");
      st.setAttribute("data-contact", "1");
      st.textContent = CSS;
      document.head.appendChild(st);
    }
    if (!mount.querySelector("#contact-wrapper")) { mount.innerHTML = HTML; }
    var root = document.getElementById("contact-wrapper");
    if (!root) return;
    behavior(root);
  }

  function behavior(root) {
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var reveals = root.querySelectorAll(".c-reveal");
    root.classList.add("c-js");
    if (!reduce) {
      reveals.forEach(function (el) {
        var i = 0, s = el.previousElementSibling;
        while (s) { if (s.classList && s.classList.contains("c-reveal")) i++; s = s.previousElementSibling; }
        if (i) el.style.transitionDelay = Math.min(i * 0.1, 0.4) + "s";
      });
    }
    var showAll = function () { reveals.forEach(function (el) { el.classList.add("c-in"); }); };
    if (reduce) {
      showAll();
    } else if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("c-in"); io.unobserve(e.target); } });
      }, { threshold: 0.12 });
      reveals.forEach(function (el) { io.observe(el); });
      setTimeout(function () { if (!root.querySelector(".c-reveal.c-in")) { if (io.disconnect) io.disconnect(); showAll(); } }, 2500);
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
