import"./hoisted.D_Q8pWF-.js";(function(){const v=`
*{box-sizing:border-box;margin:0;padding:0}
:root{
  --dark-blue:#064680;--teal:#58bbc2;--blue:#2a7ca3;
  --purple:#31245a;--lavender:#ac6dbf;--dark-bg:#06111f;
  --card-bg:#0a1e33;--card-border:#0d2a45;--white:#ffffff;
  --light-blue:#a8d4e0;--muted-blue:#4a7a9b;
}
.mla-card{
  background:var(--card-bg);border:1px solid var(--card-border);
  border-radius:14px;width:100%;max-width:660px;overflow:hidden;
  box-shadow:0 32px 80px rgba(0,0,0,0.6);font-family:'Georgia',serif;
}
.mla-hdr{
  background:linear-gradient(135deg,var(--dark-blue),var(--purple));
  padding:24px 32px 20px;position:relative;
}
.mla-hdr::after{content:'';position:absolute;bottom:0;left:0;right:0;height:2px;background:linear-gradient(90deg,var(--teal),transparent)}
.mla-slabel{font-family:'DM Sans',sans-serif;font-size:9px;font-weight:600;letter-spacing:2.5px;color:var(--teal);text-transform:uppercase;margin-bottom:8px}
.mla-mtitle{font-family:'Cormorant Garamond',serif;font-size:25px;font-weight:600;color:var(--white);line-height:1.2;margin-bottom:6px}
.mla-stitle{font-family:'DM Sans',sans-serif;font-size:12px;color:var(--light-blue);font-weight:300}
.mla-pbar{height:3px;background:rgba(255,255,255,0.08)}
.mla-pfill{height:100%;background:linear-gradient(90deg,var(--teal),var(--lavender));transition:width .5s ease;width:0%}
.mla-screen{display:none}.mla-screen.active{display:block}
.mla-ibody{padding:32px}
.mla-itext{font-family:'DM Sans',sans-serif;font-size:13.5px;color:var(--light-blue);line-height:1.8;margin-bottom:16px;font-weight:300}
.mla-imeta{display:flex;gap:20px;margin-bottom:28px;flex-wrap:wrap}
.mla-imt{font-family:'DM Sans',sans-serif;font-size:11px;color:var(--muted-blue);font-weight:500;display:flex;align-items:center;gap:6px}
.mla-imt::before{content:'';width:5px;height:5px;border-radius:50%;background:var(--teal);display:inline-block}
.mla-sbtn{background:linear-gradient(135deg,var(--teal),var(--blue));border:none;border-radius:9px;padding:15px 32px;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:600;color:var(--dark-bg);cursor:pointer;width:100%;transition:all .2s;letter-spacing:.3px}
.mla-sbtn:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(88,187,194,.3)}
.mla-qbody{padding:28px 32px}
.mla-qmeta{display:flex;align-items:center;gap:10px;margin-bottom:16px}
.mla-qnum{font-family:'DM Sans',sans-serif;font-size:11px;font-weight:600;color:var(--muted-blue);letter-spacing:1px}
.mla-qcat{font-family:'DM Sans',sans-serif;font-size:9px;font-weight:600;letter-spacing:2px;color:var(--teal);background:rgba(88,187,194,.1);border:1px solid rgba(88,187,194,.2);padding:3px 10px;border-radius:20px}
.mla-qicon{font-size:14px;color:var(--teal);margin-left:auto}
.mla-qtext{font-family:'Cormorant Garamond',serif;font-size:20px;font-weight:500;color:var(--white);line-height:1.5;margin-bottom:24px;min-height:62px}
.mla-agrid{display:flex;flex-direction:column;gap:7px}
.mla-abtn{background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.08);border-radius:9px;padding:12px 18px;cursor:pointer;display:flex;align-items:center;gap:12px;transition:all .2s;text-align:left;width:100%}
.mla-abtn:hover{background:rgba(88,187,194,.08);border-color:rgba(88,187,194,.3);transform:translateX(4px)}
.mla-abtn.selected{background:rgba(88,187,194,.15);border-color:var(--teal);transform:translateX(6px)}
.mla-abtn:disabled{cursor:default}
.mla-adot{width:9px;height:9px;border-radius:50%;flex-shrink:0}
.mla-albl{font-family:'DM Sans',sans-serif;font-size:13px;font-weight:400;color:var(--light-blue)}
.mla-abtn.selected .mla-albl{color:var(--white);font-weight:500}
.mla-rhdr{padding:28px 32px 20px;border-bottom:1px solid var(--card-border)}
.mla-rrow{display:flex;align-items:flex-start;gap:18px}
.mla-rlvl{font-family:'Cormorant Garamond',serif;font-size:30px;font-weight:600;margin-bottom:6px}
.mla-rhl{font-family:'DM Sans',sans-serif;font-size:13px;color:var(--light-blue);font-weight:300;line-height:1.6}
.mla-rcat-lbl{font-family:'DM Sans',sans-serif;font-size:9px;font-weight:600;letter-spacing:2px;margin-bottom:6px}
.mla-sring{width:72px;height:72px;border-radius:50%;border:3px solid;display:flex;align-items:center;justify-content:center;flex-direction:column;flex-shrink:0}
.mla-snum{font-family:'Cormorant Garamond',serif;font-size:20px;font-weight:700;line-height:1}
.mla-slb{font-family:'DM Sans',sans-serif;font-size:8px;font-weight:600;letter-spacing:1px;opacity:.7;margin-top:2px}
.mla-bdown{padding:18px 32px;border-bottom:1px solid var(--card-border)}
.mla-blbl{font-family:'DM Sans',sans-serif;font-size:9px;font-weight:600;letter-spacing:2px;color:var(--teal);margin-bottom:12px}
.mla-brow{display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid rgba(255,255,255,.04)}
.mla-bcat{font-family:'DM Sans',sans-serif;font-size:9px;font-weight:600;letter-spacing:1.5px;color:var(--muted-blue);width:100px;flex-shrink:0}
.mla-bbg{flex:1;height:4px;background:rgba(255,255,255,.06);border-radius:2px;overflow:hidden}
.mla-bfill{height:100%;border-radius:2px;transition:width 1s ease}
.mla-bval{font-family:'DM Sans',sans-serif;font-size:10px;font-weight:600;width:70px;text-align:right;flex-shrink:0}
.mla-rins{padding:20px 32px;border-bottom:1px solid var(--card-border)}
.mla-inslbl{font-family:'DM Sans',sans-serif;font-size:9px;font-weight:600;letter-spacing:2px;color:var(--teal);margin-bottom:10px}
.mla-instxt{font-family:'DM Sans',sans-serif;font-size:13px;color:var(--light-blue);line-height:1.8;font-weight:300}
.mla-ctablock{padding:20px 32px;background:linear-gradient(135deg,rgba(6,70,128,.4),rgba(49,36,90,.4));border-top:1px solid rgba(88,187,194,.15)}
.mla-ctatxt{font-family:'DM Sans',sans-serif;font-size:13px;color:var(--light-blue);line-height:1.7;margin-bottom:16px;font-weight:300}
.mla-ctabtns{display:flex;gap:10px;flex-wrap:wrap}
.mla-ctap{background:linear-gradient(135deg,var(--teal),var(--blue));border:none;border-radius:8px;padding:12px 20px;font-family:'DM Sans',sans-serif;font-size:12px;font-weight:600;color:var(--dark-bg);cursor:pointer;flex:1;min-width:160px;transition:all .2s}
.mla-ctap:hover{transform:translateY(-1px);box-shadow:0 6px 20px rgba(88,187,194,.25)}
.mla-ctas{background:transparent;border:1px solid rgba(88,187,194,.3);border-radius:8px;padding:12px 16px;font-family:'DM Sans',sans-serif;font-size:11px;font-weight:500;color:var(--light-blue);cursor:pointer;transition:all .2s}
.mla-ctas:hover{background:rgba(88,187,194,.06);border-color:var(--teal)}
.mla-ftr{padding:12px 32px;background:rgba(0,0,0,.2);display:flex;justify-content:space-between;flex-wrap:wrap;gap:6px}
.mla-ftxt{font-family:'DM Sans',sans-serif;font-size:10px;color:var(--muted-blue);font-weight:500}
.mla-fin{animation:mlafi .4s ease forwards}
@keyframes mlafi{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
`,u=document.createElement("style");u.textContent=v,document.head.appendChild(u);const y=`
<div class="mla-card">
  <div class="mla-hdr">
    <div class="mla-slabel">Strategic Transformations · Management Diagnostic</div>
    <div class="mla-mtitle">The Management Layer Assessment</div>
    <div class="mla-stitle" id="mla-subtitle">Diagnose structural friction before it becomes a crisis</div>
  </div>
  <div class="mla-pbar"><div class="mla-pfill" id="mla-pfill"></div></div>

  <div class="mla-screen active mla-fin" id="mla-screen-intro">
    <div class="mla-ibody">
      <p class="mla-itext">Structural burnout does not announce itself. It accumulates — in the gaps between what your managers are asked to carry and what your organization actually supports.</p>
      <p class="mla-itext">This diagnostic assesses seven dimensions of your management layer in under three minutes. Your results reveal whether your organization is structurally positioned to lead through AI-era complexity — or whether friction is already compounding costs you have not yet quantified.</p>
      <div class="mla-imeta">
        <span class="mla-imt">7 questions</span>
        <span class="mla-imt">Under 3 minutes</span>
        <span class="mla-imt">Personalized results</span>
      </div>
      <button class="mla-sbtn" id="mla-start-btn">Begin the Diagnostic →</button>
    </div>
  </div>

  <div class="mla-screen" id="mla-screen-questions">
    <div class="mla-qbody">
      <div class="mla-qmeta">
        <span class="mla-qnum" id="mla-q-num"></span>
        <span class="mla-qcat" id="mla-q-cat"></span>
        <span class="mla-qicon" id="mla-q-icon"></span>
      </div>
      <div class="mla-qtext" id="mla-q-text"></div>
      <div class="mla-agrid" id="mla-answer-grid"></div>
    </div>
  </div>

  <div class="mla-screen" id="mla-screen-results">
    <div class="mla-rhdr">
      <div class="mla-rrow">
        <div style="flex:1">
          <div class="mla-rcat-lbl" id="mla-r-label">YOUR RESULT</div>
          <div class="mla-rlvl" id="mla-r-level"></div>
          <div class="mla-rhl" id="mla-r-headline"></div>
        </div>
        <div class="mla-sring" id="mla-score-ring">
          <span class="mla-snum" id="mla-score-num"></span>
          <span class="mla-slb">SCORE</span>
        </div>
      </div>
    </div>
    <div class="mla-bdown">
      <div class="mla-blbl">DIMENSION BREAKDOWN</div>
      <div id="mla-breakdown"></div>
    </div>
    <div class="mla-rins">
      <div class="mla-inslbl">STRATEGIC INSIGHT</div>
      <div class="mla-instxt" id="mla-r-insight"></div>
    </div>
    <div class="mla-ctablock">
      <div class="mla-ctatxt" id="mla-r-cta"></div>
      <div class="mla-ctabtns">
        <button class="mla-ctap" id="mla-cta-primary">Learn About the Bootcamp →</button>
        <button class="mla-ctas" id="mla-retake-btn">Retake Assessment</button>
      </div>
    </div>
    <div class="mla-ftr">
      <span class="mla-ftxt" style="color:var(--teal);font-weight:600">Strategic Transformations</span>
      <span class="mla-ftxt">nikki@strategicunmasking.com</span>
    </div>
  </div>
</div>
`,f=document.getElementById("quiz-root");if(!f)return;f.innerHTML=y;const i=[{id:1,category:"AUTHORITY",icon:"⚖",text:"My managers have decision-making authority that matches the level of responsibility they carry.",weight:2},{id:2,category:"AI READINESS",icon:"◈",text:"My organization has provided structured leadership development support specifically for navigating AI-era complexity.",weight:2},{id:3,category:"FRICTION",icon:"⚡",text:"I can clearly identify where friction is concentrating in my management layer right now.",weight:1},{id:4,category:"CAPACITY",icon:"◎",text:"My managers spend the majority of their time on human leadership — not administrative compliance and reporting.",weight:2},{id:5,category:"EQUITY",icon:"❋",text:"My organization actively accounts for the invisible labor carried by marginalized managers in performance evaluation.",weight:1},{id:6,category:"CULTURE",icon:"◉",text:"My managers feel psychologically safe enough to tell leadership the truth about what the organization is costing them.",weight:2},{id:7,category:"INVESTMENT",icon:"◆",text:"Our current investment in management development is proportional to what we are asking our managers to carry.",weight:2}],b=[{label:"Strongly Agree",value:4,color:"#58bbc2"},{label:"Agree",value:3,color:"#3a9ab0"},{label:"Somewhat",value:2,color:"#2a7ca3"},{label:"Disagree",value:1,color:"#31245a"},{label:"Not at All",value:0,color:"#6b2a8a"}],w=[{min:80,level:"Structurally Sound",color:"#58bbc2",headline:"Your management layer has strong foundational support.",insight:"You have built intentional infrastructure around your managers. The next opportunity is deepening recalibration capacity so your organization stays ahead of AI-era complexity rather than reacting to it.",cta:"The Frictionless Manager Bootcamp will sharpen what you have already built."},{min:60,level:"Friction Present",color:"#2a7ca3",headline:"Structural gaps are generating visible and invisible costs.",insight:"Your managers are carrying more than your current systems account for. The gap between their responsibility and their support is costing you in attrition, productivity, and culture — even if the numbers have not caught up yet.",cta:"The Frictionless Manager Bootcamp was built precisely for organizations at this inflection point."},{min:40,level:"Critical Gaps",color:"#ac6dbf",headline:"Your management layer is under significant structural stress.",insight:"The conditions you have identified are not a people problem — they are an organizational design problem. Without intervention, the friction will compound into retention crisis, culture erosion, and leadership failure at the exact moments you need your managers most.",cta:"The September 18 Founding Cohort is your most direct path to structural recalibration."},{min:0,level:"Under Pressure",color:"#e05c8a",headline:"Your management layer needs structural intervention now.",insight:"What you are experiencing is not a management failure — it is a system that was never designed to support the leaders you are asking to carry it. The cost of not addressing this is already appearing in your organization.",cta:"Connect with Strategic Transformations directly. The September 18 Founding Cohort has limited seats."}];let l=0,c={};const k=i.reduce((a,e)=>a+e.weight*4,0);function g(a){document.querySelectorAll(".mla-screen").forEach(t=>t.classList.remove("active"));const e=document.getElementById("mla-screen-"+a);e.classList.add("active"),e.classList.remove("mla-fin"),e.offsetWidth,e.classList.add("mla-fin")}function E(){l=0,c={},document.getElementById("mla-subtitle").textContent="Question 1 of "+i.length,h(),g("questions")}function h(){const a=i[l],e=l/i.length*100;document.getElementById("mla-pfill").style.width=e+"%",document.getElementById("mla-q-num").textContent=String(l+1).padStart(2,"0")+" / "+String(i.length).padStart(2,"0"),document.getElementById("mla-q-cat").textContent=a.category,document.getElementById("mla-q-icon").textContent=a.icon,document.getElementById("mla-q-text").textContent=a.text,document.getElementById("mla-subtitle").textContent="Question "+(l+1)+" of "+i.length;const t=document.getElementById("mla-answer-grid");t.innerHTML="",b.forEach(n=>{const r=document.createElement("button");r.className="mla-abtn",r.innerHTML=`<div class="mla-adot" style="background:${n.color}"></div><span class="mla-albl">${n.label}</span>`,r.addEventListener("click",()=>S(n.value,n.label)),t.appendChild(r)})}function S(a,e){document.querySelectorAll(".mla-abtn").forEach(n=>n.disabled=!0);const t=document.querySelectorAll(".mla-abtn");b.forEach((n,r)=>{n.value===a&&t[r].classList.add("selected")}),c[i[l].id]={value:a,label:e},setTimeout(()=>{l<i.length-1?(l++,h()):I()},500)}function I(){document.getElementById("mla-pfill").style.width="100%",document.getElementById("mla-subtitle").textContent="Your Diagnostic Results";const a=Object.entries(c).reduce((o,[s,p])=>{const m=i.find(d=>d.id===parseInt(s));return o+(m?p.value*m.weight:0)},0),e=Math.round(a/k*100),t=w.find(o=>e>=o.min);document.getElementById("mla-r-label").style.color=t.color,document.getElementById("mla-r-level").textContent=t.level,document.getElementById("mla-r-level").style.color=t.color,document.getElementById("mla-r-headline").textContent=t.headline,document.getElementById("mla-r-insight").textContent=t.insight,document.getElementById("mla-r-cta").textContent=t.cta,document.getElementById("mla-score-num").textContent=e,document.getElementById("mla-score-num").style.color=t.color;const n=document.getElementById("mla-score-ring");n.style.borderColor=t.color,n.querySelector(".mla-slb").style.color=t.color;const r=document.getElementById("mla-breakdown");r.innerHTML="",i.forEach(o=>{const s=c[o.id],p=s?s.value:0,m=s?s.label:"—",d=p/4*100,x=d>=75?"#58bbc2":d>=50?"#2a7ca3":d>=25?"#ac6dbf":"#e05c8a";r.innerHTML+=`<div class="mla-brow">
        <div class="mla-bcat">${o.category}</div>
        <div class="mla-bbg"><div class="mla-bfill" style="width:0%;background:${x}" data-w="${d}"></div></div>
        <div class="mla-bval" style="color:${x}">${m}</div>
      </div>`}),g("results"),setTimeout(()=>{document.querySelectorAll(".mla-bfill").forEach(o=>{o.style.width=o.dataset.w+"%"})},200)}function z(){l=0,c={},document.getElementById("mla-pfill").style.width="0%",document.getElementById("mla-subtitle").textContent="Diagnose structural friction before it becomes a crisis",g("intro")}document.getElementById("mla-start-btn").addEventListener("click",E),document.getElementById("mla-retake-btn").addEventListener("click",z),document.getElementById("mla-cta-primary").addEventListener("click",()=>window.open("https://strategictransformations.net","_blank"))})();
