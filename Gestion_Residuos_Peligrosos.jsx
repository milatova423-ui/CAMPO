<!doctype html>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Gestión de Residuos Peligrosos</title>
<meta name="claude:viewport-fit-sides" content="cover">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap">
<style>
/* Layout: lateral nav fija + área de trabajo; en móvil la nav pasa a barra superior con scroll horizontal.
   Color: tintas verde-gris de campo, acento verde bosque; rojo/ámbar/verde solo para estado y riesgo.
   Tipo: Barlow Condensed (títulos y cifras), IBM Plex Sans (texto), IBM Plex Mono (datos y códigos). */
:root{
  --bg:#e9ede8; --surface:#f8faf6; --surface2:#eef2ec; --ink:#16201b; --muted:#566259; --line:#d0d8cf;
  --accent:#175c49; --accent-ink:#ffffff; --accent-soft:#d6e8df;
  --ok:#1f7a45; --ok-bg:#d8eddd; --warn:#8a5a00; --warn-bg:#f6e3b4; --bad:#a52a22; --bad-bg:#f5d3cf;
  --side:#13201a; --side-ink:#dbe6df; --side-muted:#8ea396; --side-active:#22392f;
  --shadow:0 1px 2px rgba(20,32,26,.08);
  --f-display:'Barlow Condensed','Arial Narrow',sans-serif; --f-body:'IBM Plex Sans',system-ui,sans-serif; --f-mono:'IBM Plex Mono',ui-monospace,monospace;
}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]){
  --bg:#0f1512; --surface:#18211d; --surface2:#1f2a25; --ink:#e4ebe6; --muted:#97a69c; --line:#2b3932;
  --accent:#5cc6a2; --accent-ink:#08150f; --accent-soft:#1f3a30;
  --ok:#6fd08f; --ok-bg:#1c3a27; --warn:#e8b95a; --warn-bg:#3d3216; --bad:#f08b82; --bad-bg:#442220;
  --side:#0a100d; --side-ink:#dbe6df; --side-muted:#7f9488; --side-active:#1a2a22; --shadow:none; color-scheme:dark}}
:root[data-theme="dark"]{
  --bg:#0f1512; --surface:#18211d; --surface2:#1f2a25; --ink:#e4ebe6; --muted:#97a69c; --line:#2b3932;
  --accent:#5cc6a2; --accent-ink:#08150f; --accent-soft:#1f3a30;
  --ok:#6fd08f; --ok-bg:#1c3a27; --warn:#e8b95a; --warn-bg:#3d3216; --bad:#f08b82; --bad-bg:#442220;
  --side:#0a100d; --side-ink:#dbe6df; --side-muted:#7f9488; --side-active:#1a2a22; --shadow:none; color-scheme:dark}
*{box-sizing:border-box}
body{background:var(--bg);color:var(--ink);font:14px/1.45 var(--f-body);padding-block:0;padding-left:0;padding-right:0}
button,input,select,textarea{font:inherit;color:inherit}
:focus-visible{outline:2px solid var(--accent);outline-offset:2px}
.app{display:grid;grid-template-columns:240px minmax(0,1fr);min-height:100vh}
.side{background:var(--side);color:var(--side-ink);padding:20px 12px;display:flex;flex-direction:column;gap:20px;position:sticky;top:0;align-self:start;max-height:100vh;overflow:auto;padding-left:max(12px,env(safe-area-inset-left,0px))}
.brand{display:flex;gap:10px;align-items:center;padding:0 8px}
.brand svg{flex:none}
.brand b{font:700 20px/1 var(--f-display);letter-spacing:.04em;text-transform:uppercase}
.brand small{display:block;color:var(--side-muted);font-size:11px;letter-spacing:.06em;text-transform:uppercase;margin-top:3px}
.nav{display:flex;flex-direction:column;gap:2px}
.nav button{display:flex;align-items:center;gap:10px;background:none;border:0;border-radius:6px;padding:10px 10px;color:var(--side-ink);cursor:pointer;text-align:left;white-space:nowrap}
.nav button:hover{background:var(--side-active)}
.nav button[aria-current="page"]{background:var(--side-active);box-shadow:inset 3px 0 0 var(--accent)}
.nav svg{width:18px;height:18px;flex:none;stroke:currentColor;fill:none;stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round}
.nav .n{margin-left:auto;font:500 12px var(--f-mono);color:var(--side-muted)}
.sync{margin-top:auto;font-size:12px;color:var(--side-muted);padding:0 8px;display:flex;gap:8px;align-items:flex-start}
.sync i{width:8px;height:8px;border-radius:50%;background:var(--side-muted);margin-top:5px;flex:none}
.sync.on i{background:#4fd18b}
main{min-width:0;padding-block:24px 48px;padding-left:max(20px,env(safe-area-inset-left,0px));padding-right:max(20px,env(safe-area-inset-right,0px))}
.head{display:flex;gap:12px;align-items:flex-end;justify-content:space-between;flex-wrap:wrap;margin-bottom:18px}
h1{font:700 32px/1.05 var(--f-display);letter-spacing:.02em;text-transform:uppercase;margin:0;text-wrap:balance}
.sub{color:var(--muted);margin:4px 0 0;max-width:62ch}
.btn{display:inline-flex;align-items:center;gap:6px;border:1px solid var(--line);background:var(--surface);border-radius:6px;padding:8px 14px;cursor:pointer;font-weight:500;min-height:36px}
.btn:hover{border-color:var(--accent)}
.btn.pri{background:var(--accent);color:var(--accent-ink);border-color:var(--accent)}
.btn.pri:hover{filter:brightness(1.08)}
.btn.danger{color:var(--bad)}
.btn.sm{padding:4px 9px;min-height:28px;font-size:13px}
.btn[disabled]{opacity:.55;cursor:default}
.tools{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:14px}
.tools input,.tools select{background:var(--surface);border:1px solid var(--line);border-radius:6px;padding:8px 10px;min-height:36px;min-width:0}
.tools input[type=search]{flex:1 1 220px}
.panel{background:var(--surface);border:1px solid var(--line);border-radius:8px;box-shadow:var(--shadow)}
.tw{overflow-x:auto}
table{border-collapse:collapse;width:100%;min-width:760px}
th{font:600 12px var(--f-body);letter-spacing:.06em;text-transform:uppercase;color:var(--muted);text-align:left;padding:10px 12px;background:var(--surface2);border-bottom:1px solid var(--line);white-space:nowrap}
td{padding:10px 12px;border-bottom:1px solid var(--line);vertical-align:top}
tr:last-child td{border-bottom:0}
tbody tr:hover td{background:var(--surface2)}
.num{text-align:right;font-family:var(--f-mono);font-variant-numeric:tabular-nums;white-space:nowrap}
.mono{font-family:var(--f-mono);font-size:12.5px}
.mut{color:var(--muted)}
.act{white-space:nowrap;text-align:right}
.pill{display:inline-block;border-radius:99px;padding:2px 10px;font-size:12px;font-weight:600;white-space:nowrap}
.pill.ok{background:var(--ok-bg);color:var(--ok)}.pill.warn{background:var(--warn-bg);color:var(--warn)}.pill.bad{background:var(--bad-bg);color:var(--bad)}
.pill.neu{background:var(--surface2);color:var(--muted);border:1px solid var(--line)}
.tag{display:inline-block;font:500 11px var(--f-mono);letter-spacing:.04em;text-transform:uppercase;background:var(--accent-soft);color:var(--accent);padding:2px 7px;border-radius:4px}
.empty{padding:44px 20px;text-align:center;color:var(--muted)}
.empty b{display:block;font:600 20px var(--f-display);letter-spacing:.03em;text-transform:uppercase;color:var(--ink);margin-bottom:4px}
.empty .btn{margin-top:14px}
/* dashboard */
.kpis{display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:14px;margin-bottom:14px}
.kpi{padding:16px;display:flex;flex-direction:column;gap:6px;cursor:pointer;text-align:left;background:var(--surface);border:1px solid var(--line);border-radius:8px;box-shadow:var(--shadow)}
.kpi:hover{border-color:var(--accent)}
.kpi .lb{font:600 12px var(--f-body);letter-spacing:.07em;text-transform:uppercase;color:var(--muted)}
.kpi .big{font:700 46px/1 var(--f-display);font-variant-numeric:tabular-nums}
.kpi .ft{color:var(--muted);font-size:13px}
.grid2{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:14px}
.card{padding:16px;min-width:0}
.card h2{font:600 18px var(--f-display);letter-spacing:.05em;text-transform:uppercase;margin:0 0 12px}
.stack{display:flex;height:16px;border-radius:4px;overflow:hidden;background:var(--surface2);margin:6px 0 10px}
.stack i{display:block;height:100%}
.leg{display:flex;gap:16px;flex-wrap:wrap;font-size:13px}
.leg span::before{content:"";display:inline-block;width:10px;height:10px;border-radius:2px;margin-right:6px;background:var(--c)}
.bars{display:grid;gap:9px}
.bar{display:grid;grid-template-columns:minmax(90px,38%) 1fr auto;gap:10px;align-items:center;font-size:13px}
.bar div{height:10px;background:var(--surface2);border-radius:3px;overflow:hidden}
.bar div i{display:block;height:100%;background:var(--accent);border-radius:3px}
.bar span:first-child{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
/* reportes */
.cards{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,340px),1fr));gap:14px}
.rep{display:flex;flex-direction:column;min-width:0}
.rep .top{display:flex;gap:14px;padding:14px 16px;border-bottom:1px solid var(--line);align-items:center}
.date{flex:none;width:58px;text-align:center;background:var(--accent);color:var(--accent-ink);border-radius:6px;padding:6px 0}
.date b{display:block;font:700 26px/1 var(--f-display)}
.date small{font:600 11px var(--f-body);letter-spacing:.08em;text-transform:uppercase}
.rep .meta{min-width:0}
.rep .meta b{display:block;overflow-wrap:anywhere}
.rep .body{padding:12px 16px;display:grid;gap:10px;flex:1}
.rep .lbl{font:600 11px var(--f-body);letter-spacing:.08em;text-transform:uppercase;color:var(--muted)}
.rep p{margin:2px 0 0;overflow-wrap:anywhere;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}
.mini{width:100%;min-width:0;font-size:12.5px}
.mini th{padding:5px 6px;font-size:10.5px}.mini td{padding:6px;border-bottom:1px solid var(--line)}
.rep .foot{display:flex;justify-content:space-between;align-items:center;gap:8px;padding:10px 16px;border-top:1px solid var(--line);flex-wrap:wrap}
/* iperc */
.rk{display:inline-grid;place-items:center;min-width:34px;height:30px;border-radius:5px;font:700 16px var(--f-display);padding:0 6px}
.rk.ok{background:var(--ok-bg);color:var(--ok)}.rk.warn{background:var(--warn-bg);color:var(--warn)}.rk.bad{background:var(--bad-bg);color:var(--bad)}
.ctl{display:flex;gap:3px}
.ctl b{width:22px;height:22px;display:grid;place-items:center;border-radius:4px;font:600 11px var(--f-mono);background:var(--surface2);color:var(--muted);border:1px solid var(--line)}
.ctl b.on{background:var(--accent);color:var(--accent-ink);border-color:var(--accent)}
tr.det td{background:var(--surface2)}
.dgrid{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:12px}
.dgrid h4{margin:0 0 3px;font:600 11px var(--f-body);letter-spacing:.08em;text-transform:uppercase;color:var(--muted)}
.dgrid p{margin:0;overflow-wrap:anywhere}
.legend{display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:14px;font-size:13px;color:var(--muted)}
/* documentos */
.chips{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:14px}
.chip{border:1px solid var(--line);background:var(--surface);border-radius:99px;padding:5px 12px;cursor:pointer;font-size:13px}
.chip[aria-pressed="true"]{background:var(--accent);color:var(--accent-ink);border-color:var(--accent)}
.chip small{font-family:var(--f-mono);opacity:.75;margin-left:4px}
.gal{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,210px),1fr));gap:14px}
.file{display:flex;flex-direction:column;min-width:0;overflow:hidden}
.thumb{aspect-ratio:4/3;background:var(--surface2);display:grid;place-items:center;border:0;padding:0;cursor:pointer;width:100%;border-bottom:1px solid var(--line);overflow:hidden}
.thumb img{width:100%;height:100%;object-fit:cover;display:block}
.thumb .ext{font:700 34px var(--f-display);letter-spacing:.06em;color:var(--accent)}
.file .info{padding:10px 12px;display:grid;gap:4px;min-width:0;flex:1}
.file .info b{overflow-wrap:anywhere}
.file .info p{margin:0;color:var(--muted);font-size:13px;overflow-wrap:anywhere}
.file .btns{display:flex;gap:6px;padding:0 12px 12px;flex-wrap:wrap}
/* modal */
.ov{position:fixed;inset:0;background:rgba(8,14,11,.6);display:flex;align-items:flex-start;justify-content:center;padding:max(16px,env(safe-area-inset-top,0px)) 16px 16px;overflow:auto;z-index:50}
.modal{background:var(--surface);border:1px solid var(--line);border-radius:10px;width:min(760px,100%);margin-block:auto;box-shadow:0 20px 50px rgba(0,0,0,.3)}
.modal.sm{width:min(430px,100%)}
.modal.wide{width:min(1000px,100%)}
.mh{display:flex;justify-content:space-between;align-items:center;padding:14px 18px;border-bottom:1px solid var(--line)}
.mh h3{margin:0;font:700 22px var(--f-display);letter-spacing:.04em;text-transform:uppercase}
.mb{padding:18px;display:grid;gap:14px}
.mf{display:flex;justify-content:flex-end;gap:8px;padding:14px 18px;border-top:1px solid var(--line);flex-wrap:wrap}
.fg{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}
.fg .full{grid-column:1/-1}
label.f{display:grid;gap:4px;font-size:12px;font-weight:600;letter-spacing:.04em;text-transform:uppercase;color:var(--muted);min-width:0}
label.f input,label.f select,label.f textarea{background:var(--bg);border:1px solid var(--line);border-radius:6px;padding:8px 10px;font-size:14px;font-weight:400;letter-spacing:0;text-transform:none;color:var(--ink);min-width:0;width:100%}
label.f textarea{min-height:76px;resize:vertical}
.sec{font:600 15px var(--f-display);letter-spacing:.08em;text-transform:uppercase;color:var(--accent);border-bottom:1px solid var(--line);padding-bottom:4px;margin:4px 0 0}
.irow{display:grid;grid-template-columns:1.3fr 1.3fr .8fr .7fr 1.3fr auto;gap:8px;align-items:end;padding:10px;border:1px solid var(--line);border-radius:6px;background:var(--surface2)}
.irow label.f{font-size:10.5px}
.live{display:flex;gap:10px;align-items:center;flex-wrap:wrap}
.toast{position:fixed;left:50%;transform:translateX(-50%);bottom:calc(18px + env(safe-area-inset-bottom,0px));background:var(--ink);color:var(--bg);padding:10px 16px;border-radius:6px;z-index:60;max-width:calc(100% - 32px)}
.prev{max-width:100%;max-height:70vh;display:block;margin:0 auto;border-radius:4px}
@media (max-width:860px){
  .app{grid-template-columns:minmax(0,1fr)}
  .side{position:static;max-height:none;flex-direction:row;align-items:center;padding:10px max(12px,env(safe-area-inset-right,0px)) 10px max(12px,env(safe-area-inset-left,0px));overflow-x:auto;gap:10px}
  .brand small,.sync,.nav .n{display:none}
  .nav{flex-direction:row}
  .nav button[aria-current="page"]{box-shadow:inset 0 -3px 0 var(--accent)}
  main{padding-left:max(16px,env(safe-area-inset-left,0px));padding-right:max(16px,env(safe-area-inset-right,0px))}
  .fg{grid-template-columns:minmax(0,1fr)}
  .irow{grid-template-columns:minmax(0,1fr) minmax(0,1fr)}
  h1{font-size:27px}
}
@media (prefers-reduced-motion:reduce){*{transition:none!important;animation:none!important}}
</style>

<div class="app">
  <aside class="side">
    <div class="brand">
      <svg width="34" height="34" viewBox="0 0 34 34" aria-hidden="true"><rect width="34" height="34" rx="7" fill="#f0b429"/><path d="M17 6l11 19H6z" fill="none" stroke="#13201a" stroke-width="2.4" stroke-linejoin="round"/><path d="M17 13v6" stroke="#13201a" stroke-width="2.4" stroke-linecap="round"/><circle cx="17" cy="22" r="1.4" fill="#13201a"/></svg>
      <div><b>Residuos</b><small>Gestión de peligrosos</small></div>
    </div>
    <nav class="nav" id="nav" aria-label="Módulos"></nav>
    <div class="sync" id="sync"><i></i><span>Conectando…</span></div>
  </aside>
  <main id="main" tabindex="-1"></main>
</div>
<div id="layer"></div>

<script>
'use strict';
const $=s=>document.querySelector(s);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const nf=n=>Number(n||0).toLocaleString('es-PE',{maximumFractionDigits:2});
const fmtD=d=>{if(!d)return'—';const[y,m,dd]=String(d).split('-');return dd?`${dd}/${m}/${y}`:d};
const MES=['ENE','FEB','MAR','ABR','MAY','JUN','JUL','AGO','SEP','OCT','NOV','DIC'];
const today=()=>{const d=new Date();return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`};
const newId=()=>Date.now().toString(36)+Math.random().toString(36).slice(2,7);
const kb=b=>b>1048576?(b/1048576).toFixed(1)+' MB':Math.max(1,Math.round(b/1024))+' KB';

/* ---------- listas sugeridas (categorías de las estructuras, sin datos) ---------- */
const L={
  ubic:['Almacén central','Zona norte','Zona sur','Patio de acopio'],
  clasif:['Disposición final','Química recuperada','Biorremediación','Reutilizables','Stock de química'],
  tipoRes:['MSC','MVC','Borra','Agua contaminada','Química recuperada','Residuos varios contaminados','Reutilizables','Stock de química','Latas de pintura'],
  cont:['BIG BAG','BULK DRUM','CANASTILLA METÁLICA','CILINDRO','PALLET','PALLET CILINDRICO','CAJA DE MADERA','CAJA DE ALUMINIO','CAJA DE PLÁSTICO','CANASTA DE ALUMINIO','UNIDAD','GRANEL','RUMA'],
  um:['BIG BAGS','BULK DRUM','CILINDRO','PALLET','UNIDAD','M3','KG','GAL'],
  fisico:['Sólido','Líquido','Semisólido'],
  contenido:['Lleno','Vacío','Con poco contenido líquido'],
  peligro:['FÍSICO','QUÍMICO','MECÁNICO','ERGONÓMICO','PSICOSOCIAL','BIOLÓGICO','OTROS'],
  rel:['SEGURIDAD','SALUD','MEDIO AMBIENTE'],
  P:[[1,'1 · Muy improbable'],[2,'2 · Improbable'],[3,'3 · Probable'],[4,'4 · Muy probable']],
  S:[[1,'1 · Leve'],[2,'2 · Moderada'],[3,'3 · Grave']],
  docCat:['Fotos','Manifiestos','Reportes','Permisos','IPERC','Certificados','Otros']
};
const CTL=[['eliminar','Eliminar','A'],['sustituir','Sustituir','B'],['ingenieria','Ingeniería','C'],['administrativos','Administrativos','D'],['epp','EPP','E']];
const lvl=r=>r<=4?'ok':r<=8?'warn':'bad';
const lvlTxt=r=>r<=4?'Aceptable':r<=8?'Aceptable con restricciones':'No aceptable';

/* ---------- datos ---------- */
const S={inventario:[],reportes:[],iperc:[],documentos:[]};
let db=null,assets=null,dl=null,canWrite=true,mode='local',loaded=false;
const KEY='gestion-residuos-v1';
const persist=()=>{try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){toast('Sin espacio para guardar en este navegador')}};
try{const old=JSON.parse(localStorage.getItem(KEY)||'null');if(old)Object.keys(S).forEach(k=>S[k]=old[k]||[])}catch(e){}
const bySort=(a,b)=>(b.creado||0)-(a.creado||0);
const sorted=c=>S[c].slice().sort(bySort);
async function save(col,rec){
  const id=rec.id||newId();const data={...rec};delete data.id;if(!data.creado)data.creado=Date.now();
  if(db){await db.collection(col).doc(id).set(data)}
  else{const i=S[col].findIndex(x=>x.id===id);const r={id,...data};i<0?S[col].push(r):S[col][i]=r;persist();render()}
  return id;
}
async function remove(col,id){
  if(db){await db.collection(col).doc(id).delete()}
  else{S[col]=S[col].filter(x=>x.id!==id);persist();render()}
}
async function boot(){
  const c=window.claude;
  if(c?.use){
    try{db=await c.use('db')}catch(e){db=null}
    try{assets=await c.use('assets')}catch(e){assets=null}
    try{dl=await c.use('downloads')}catch(e){dl=null}
    try{const u=await c.use('user');if(u){const w=u.can?.('data.write');if(w===false)canWrite=false}}catch(e){}
  }
  if(db){
    mode='db';
    Object.keys(S).forEach(col=>{
      db.collection(col).onSnapshot(s=>{S[col]=s.docs.map(d=>({id:d.id,...d.data()}));loaded=true;render()},
        e=>{console.warn(col,e);if(e&&e.code==='unavailable')setSync()});
    });
  }
  setSync();render();
}
function setSync(){
  const el=$('#sync');el.className='sync'+(mode==='db'?' on':'');
  el.querySelector('span').textContent=mode==='db'?(canWrite?'Guardado privado y compartido con quienes tengan acceso':'Solo lectura'):'Datos guardados solo en este navegador';
}

/* ---------- navegación ---------- */
const ICON={
  dash:'<path d="M3 13h8V3H3zM13 21h8V11h-8zM13 3v6h8V3zM3 21h8v-6H3z"/>',
  inv:'<path d="M21 8l-9-5-9 5v8l9 5 9-5z"/><path d="M3 8l9 5 9-5M12 13v8"/>',
  rep:'<path d="M14 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V9z"/><path d="M14 3v6h6M8 13h8M8 17h5"/>',
  ipe:'<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18v.5"/>',
  doc:'<path d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>'
};
const VIEWS=[['dash','Dashboard',null],['inv','Inventario de residuos','inventario'],['rep','Reportes diarios','reportes'],['ipe','Matriz IPERC','iperc'],['doc','Documentos y fotos','documentos']];
let view='dash';
try{const h=location.hash.slice(1);if(VIEWS.some(v=>v[0]===h))view=h}catch(e){}
function go(v){view=v;try{history.replaceState(null,'','#'+v)}catch(e){}render();$('#main').focus({preventScroll:true});window.scrollTo(0,0)}
function renderNav(){
  $('#nav').innerHTML=VIEWS.map(([k,t,c])=>`<button data-go="${k}" ${k===view?'aria-current="page"':''}><svg viewBox="0 0 24 24" aria-hidden="true">${ICON[k]}</svg>${t}${c?`<span class="n">${S[c].length}</span>`:''}</button>`).join('');
}

/* ---------- filtros por vista ---------- */
const F={inv:{q:'',u:''},rep:{q:''},ipe:{q:'',r:''},doc:{q:'',c:''}};
let openDet=new Set();

function render(){
  renderNav();
  const m=$('#main');
  m.innerHTML=({dash:vDash,inv:vInv,rep:vRep,ipe:vIpe,doc:vDoc})[view]();
  document.title='Gestión de Residuos Peligrosos';
}

const head=(t,s,btn)=>`<div class="head"><div><h1>${t}</h1><p class="sub">${s}</p></div>${btn&&canWrite?btn:''}</div>`;
const emptyBox=(t,s,btn)=>`<div class="empty"><b>${t}</b>${s}${btn&&canWrite?`<br>${btn}`:''}</div>`;
const total=r=>Number(r.bueno||0)+Number(r.reacondicionar||0)+Number(r.malEstado||0);

/* ---------- Dashboard ---------- */
function vDash(){
  const inv=S.inventario,rep=S.reportes,ip=S.iperc,dc=S.documentos;
  const b=inv.reduce((a,r)=>a+Number(r.bueno||0),0),re=inv.reduce((a,r)=>a+Number(r.reacondicionar||0),0),m=inv.reduce((a,r)=>a+Number(r.malEstado||0),0),T=b+re+m;
  const items=rep.reduce((a,r)=>a+(r.items||[]).length,0);
  const last=rep.slice().sort((x,y)=>String(y.fecha).localeCompare(String(x.fecha)))[0];
  const R=r=>Number(r.p)*Number(r.s);
  const na=ip.filter(r=>R(r)>=9).length,wr=ip.filter(r=>R(r)>=5&&R(r)<=8).length,ac=ip.length-na-wr;
  const fotos=dc.filter(d=>(d.tipo||'').startsWith('image/')).length;
  const pct=n=>T?n/T*100:0;
  const byType={};inv.forEach(r=>{const k=r.tipoResiduo||'Sin tipo';byType[k]=(byType[k]||0)+total(r)});
  const top=Object.entries(byType).sort((a,b)=>b[1]-a[1]).slice(0,6);const mx=top[0]?.[1]||1;
  const cats={};dc.forEach(d=>{cats[d.categoria||'Otros']=(cats[d.categoria||'Otros']||0)+1});
  const cl=Object.entries(cats).sort((a,b)=>b[1]-a[1]);const cm=cl[0]?.[1]||1;
  const none=!inv.length&&!rep.length&&!ip.length&&!dc.length;
  return head('Dashboard','Resumen de los cuatro módulos. Toca una tarjeta para abrirlo.',none?'<button class="btn pri" data-act="seed">Cargar datos de ejemplo</button>':'')+`
  <div class="kpis">
    <button class="kpi" data-go="inv"><span class="lb">Inventario de residuos</span><span class="big">${nf(T)}</span><span class="ft">bultos en ${inv.length} registro${inv.length===1?'':'s'}</span></button>
    <button class="kpi" data-go="rep"><span class="lb">Reportes diarios</span><span class="big">${rep.length}</span><span class="ft">${items} ítem${items===1?'':'s'} detallados${last?` · último ${fmtD(last.fecha)}`:''}</span></button>
    <button class="kpi" data-go="ipe"><span class="lb">Matriz IPERC</span><span class="big">${ip.length}</span><span class="ft">${na?`<b style="color:var(--bad)">${na} no aceptable${na>1?'s':''}</b>`:'ningún riesgo no aceptable'}</span></button>
    <button class="kpi" data-go="doc"><span class="lb">Documentos y fotos</span><span class="big">${dc.length}</span><span class="ft">${fotos} foto${fotos===1?'':'s'} · ${dc.length-fotos} documento${dc.length-fotos===1?'':'s'}</span></button>
  </div>
  <div class="grid2">
    <section class="panel card"><h2>Estado de los bultos</h2>
      ${T?`<div class="stack" role="img" aria-label="Bueno ${b}, reacondicionar ${re}, mal estado ${m}"><i style="width:${pct(b)}%;background:var(--ok)"></i><i style="width:${pct(re)}%;background:var(--warn)"></i><i style="width:${pct(m)}%;background:var(--bad)"></i></div>
      <div class="leg"><span style="--c:var(--ok)">Bueno <b class="mono">${nf(b)}</b></span><span style="--c:var(--warn)">Reacondicionar <b class="mono">${nf(re)}</b></span><span style="--c:var(--bad)">Mal estado <b class="mono">${nf(m)}</b></span></div>`:'<p class="mut">Sin bultos registrados.</p>'}
    </section>
    <section class="panel card"><h2>Matriz de riesgos</h2>
      ${ip.length?`<div class="stack"><i style="width:${ac/ip.length*100}%;background:var(--ok)"></i><i style="width:${wr/ip.length*100}%;background:var(--warn)"></i><i style="width:${na/ip.length*100}%;background:var(--bad)"></i></div>
      <div class="leg"><span style="--c:var(--ok)">Aceptable <b class="mono">${ac}</b></span><span style="--c:var(--warn)">Con restricciones <b class="mono">${wr}</b></span><span style="--c:var(--bad)">No aceptable <b class="mono">${na}</b></span></div>`:'<p class="mut">Sin peligros evaluados.</p>'}
    </section>
    <section class="panel card"><h2>Bultos por tipo de residuo</h2>
      ${top.length?`<div class="bars">${top.map(([k,v])=>`<div class="bar"><span title="${esc(k)}">${esc(k)}</span><div><i style="width:${v/mx*100}%"></i></div><span class="mono">${nf(v)}</span></div>`).join('')}</div>`:'<p class="mut">Sin datos todavía.</p>'}
    </section>
    <section class="panel card"><h2>Archivos por categoría</h2>
      ${cl.length?`<div class="bars">${cl.map(([k,v])=>`<div class="bar"><span>${esc(k)}</span><div><i style="width:${v/cm*100}%"></i></div><span class="mono">${v}</span></div>`).join('')}</div>`:'<p class="mut">Sin archivos subidos.</p>'}
    </section>
  </div>`;
}

/* ---------- Inventario ---------- */
function vInv(){
  const f=F.inv,q=f.q.toLowerCase();
  const ubs=[...new Set(S.inventario.map(r=>r.ubicacion).filter(Boolean))].sort();
  const rows=sorted('inventario').filter(r=>(!f.u||r.ubicacion===f.u)&&(!q||[r.ubicacion,r.clasificacion,r.tipoResiduo,r.especificaciones,r.tipoContenedor,r.almacen,r.procedencia,r.codigo].join(' ').toLowerCase().includes(q)));
  const tb=rows.reduce((a,r)=>a+total(r),0);
  return head('Inventario de residuos','Cada fila es un lote por ubicación, clasificación y tipo de contenedor, con su cantidad en bueno, por reacondicionar y en mal estado.',`<button class="btn pri" data-act="new:inventario">+ Nuevo registro</button>`)+`
  <div class="tools"><input type="search" id="q-inv" placeholder="Buscar por tipo, contenedor, almacén…" value="${esc(f.q)}" aria-label="Buscar"><select id="u-inv" aria-label="Ubicación"><option value="">Todas las ubicaciones</option>${ubs.map(u=>`<option ${u===f.u?'selected':''}>${esc(u)}</option>`).join('')}</select></div>
  <div class="panel">${rows.length?`<div class="tw"><table><thead><tr><th>Ubicación</th><th>Clasificación</th><th>Tipo de residuo</th><th>Contenedor</th><th class="num">Bueno</th><th class="num">Reacond.</th><th class="num">Mal estado</th><th class="num">Total</th><th></th></tr></thead><tbody>
  ${rows.map(r=>`<tr><td><b>${esc(r.ubicacion)}</b><div class="mut">${esc(r.almacen||'')}</div></td><td>${esc(r.clasificacion)}${r.procedencia?`<div class="mut">${esc(r.procedencia)}</div>`:''}</td>
  <td>${esc(r.tipoResiduo)}<div class="mut">${esc(r.especificaciones||'')}</div></td>
  <td><span class="tag">${esc(r.tipoContenedor)}</span>${r.codigo?`<div class="mono mut">${esc(r.codigo)}</div>`:''}</td>
  <td class="num">${nf(r.bueno)}</td><td class="num">${nf(r.reacondicionar)}</td><td class="num">${nf(r.malEstado)}</td><td class="num"><b>${nf(total(r))}</b></td>
  <td class="act">${canWrite?`<button class="btn sm" data-act="edit:inventario:${r.id}">Editar</button> <button class="btn sm danger" data-act="del:inventario:${r.id}">Eliminar</button>`:''}</td></tr>`).join('')}
  </tbody><tfoot><tr><td colspan="7" class="mut" style="padding:10px 12px">${rows.length} registro${rows.length===1?'':'s'} mostrados</td><td class="num"><b>${nf(tb)}</b></td><td></td></tr></tfoot></table></div>`
  :emptyBox(S.inventario.length?'Sin resultados':'Aún no hay residuos registrados',S.inventario.length?'Prueba con otra búsqueda o ubicación.':'Registra el primer lote con su ubicación, contenedor y cantidades por estado.',`<button class="btn pri" data-act="new:inventario">+ Nuevo registro</button>`)}</div>`;
}
const fInv=r=>[
  {k:'ubicacion',l:'Ubicación de residuos',list:'ubic',req:1},{k:'clasificacion',l:'Clasificación',list:'clasif',req:1},
  {k:'generadoEn',l:'Generado en'},{k:'sector',l:'Sector'},
  {k:'procedencia',l:'Procedencia'},{k:'almacen',l:'Almacén'},
  {k:'tipoResiduo',l:'Tipo de residuo',list:'tipoRes',req:1},{k:'especificaciones',l:'Especificaciones del residuo'},
  {k:'tipoContenedor',l:'Tipo de contenedor',sel:L.cont,req:1},{k:'codigo',l:'Código'},
  {k:'estadoFisico',l:'Estado físico',sel:L.fisico,blank:1},{k:'estadoContenido',l:'Estado del contenido',sel:L.contenido,blank:1},
  {sec:'Cantidad por estado del bulto'},
  {k:'bueno',l:'Bueno',type:'number',def:0},{k:'reacondicionar',l:'Reacondicionar',type:'number',def:0},{k:'malEstado',l:'Mal estado',type:'number',def:0},
  {k:'obs',l:'Observaciones',type:'textarea',full:1}
];

/* ---------- Reportes diarios ---------- */
function vRep(){
  const q=F.rep.q.toLowerCase();
  const rows=S.reportes.slice().sort((a,b)=>String(b.fecha).localeCompare(String(a.fecha))).filter(r=>!q||[r.elaboradoPor,r.lugar,r.actividad,(r.items||[]).map(i=>[i.procedencia,i.tipoResiduo,i.lugarAcopio].join(' ')).join(' ')].join(' ').toLowerCase().includes(q));
  return head('Reportes diarios','Un reporte por jornada: quién lo elaboró, dónde, qué se hizo y el detalle de cada residuo movido.',`<button class="btn pri" data-act="new:reportes">+ Nuevo reporte</button>`)+`
  <div class="tools"><input type="search" id="q-rep" placeholder="Buscar por lugar, persona, actividad o residuo…" value="${esc(F.rep.q)}" aria-label="Buscar"></div>
  ${rows.length?`<div class="cards">${rows.map(r=>{const[y,m,d]=String(r.fecha||'').split('-');const its=r.items||[];
  return `<article class="panel rep"><div class="top"><div class="date"><b>${esc(d||'--')}</b><small>${MES[(+m||1)-1]} ${esc(y||'')}</small></div><div class="meta"><b>${esc(r.lugar)}</b><span class="mut">Elaborado por ${esc(r.elaboradoPor)}</span></div></div>
  <div class="body"><div><span class="lbl">Actividad desarrollada</span><p>${esc(r.actividad)}</p></div>
  <div><span class="lbl">Ítems · ${its.length}</span>${its.length?`<div class="tw"><table class="mini"><thead><tr><th>Procedencia</th><th>Residuo</th><th class="num">Cant.</th><th>Acopio</th></tr></thead><tbody>${its.slice(0,4).map(i=>`<tr><td>${esc(i.procedencia)}</td><td>${esc(i.tipoResiduo)}</td><td class="num">${nf(i.cantidad)} <span class="mut">${esc(i.um||'')}</span></td><td>${esc(i.lugarAcopio)}</td></tr>`).join('')}</tbody></table></div>${its.length>4?`<span class="mut">+${its.length-4} más</span>`:''}`:'<p class="mut">Sin ítems.</p>'}</div></div>
  <div class="foot"><button class="btn sm" data-act="view:reportes:${r.id}">Ver completo</button><span>${canWrite?`<button class="btn sm" data-act="edit:reportes:${r.id}">Editar</button> <button class="btn sm danger" data-act="del:reportes:${r.id}">Eliminar</button>`:''}</span></div></article>`}).join('')}</div>`
  :`<div class="panel">${emptyBox(S.reportes.length?'Sin resultados':'Aún no hay reportes diarios','Crea el reporte de la jornada con su actividad y el detalle de residuos.',`<button class="btn pri" data-act="new:reportes">+ Nuevo reporte</button>`)}</div>`}`;
}
const itemRow=(i={})=>`<div class="irow" data-item>
  <label class="f">Procedencia<input data-i="procedencia" value="${esc(i.procedencia)}"></label>
  <label class="f">Tipo de residuo<input data-i="tipoResiduo" list="dl-tipoRes" value="${esc(i.tipoResiduo)}"></label>
  <label class="f">U/M<input data-i="um" list="dl-um" value="${esc(i.um)}"></label>
  <label class="f">Cantidad<input data-i="cantidad" type="number" step="any" min="0" value="${esc(i.cantidad)}"></label>
  <label class="f">Lugar de acopio<input data-i="lugarAcopio" value="${esc(i.lugarAcopio)}"></label>
  <button type="button" class="btn sm danger" data-act="rmitem" aria-label="Quitar ítem">Quitar</button></div>`;

/* ---------- IPERC ---------- */
function vIpe(){
  const f=F.ipe,q=f.q.toLowerCase();const R=r=>Number(r.p)*Number(r.s);
  const rows=sorted('iperc').filter(r=>(!f.r||lvl(R(r))===f.r)&&(!q||[r.actividad,r.tarea,r.zona,r.peligro,r.detalle,r.riesgo,r.dano].join(' ').toLowerCase().includes(q)));
  return head('Matriz IPERC','Identificación de peligros, evaluación de riesgos y controles. El riesgo se calcula solo: R = P × S.',`<button class="btn pri" data-act="new:iperc">+ Nuevo peligro</button>`)+`
  <div class="legend"><b>R = P × S</b><span class="pill ok">1–4 Aceptable</span><span class="pill warn">5–8 Aceptable con restricciones</span><span class="pill bad">9–12 No aceptable</span></div>
  <div class="tools"><input type="search" id="q-ipe" placeholder="Buscar actividad, peligro o riesgo…" value="${esc(f.q)}" aria-label="Buscar"><select id="r-ipe" aria-label="Grado de aceptación"><option value="">Todos los grados</option><option value="ok" ${f.r==='ok'?'selected':''}>Aceptable</option><option value="warn" ${f.r==='warn'?'selected':''}>Con restricciones</option><option value="bad" ${f.r==='bad'?'selected':''}>No aceptable</option></select></div>
  <div class="panel">${rows.length?`<div class="tw"><table><thead><tr><th>Actividad / tarea</th><th>Peligro</th><th>Riesgo</th><th class="num">P</th><th class="num">S</th><th>R</th><th>Aceptación</th><th title="A Eliminar · B Sustituir · C Ingeniería · D Administrativos · E EPP">Controles</th><th></th></tr></thead><tbody>
  ${rows.map(r=>{const v=R(r),c=lvl(v),op=openDet.has(r.id);return `<tr><td><b>${esc(r.actividad)}</b><div class="mut">${esc(r.tarea||'')}${r.zona?` · ${esc(r.zona)}`:''}</div></td>
  <td><span class="tag">${esc(r.peligro)}</span><div>${esc(r.detalle)}</div></td><td>${esc(r.riesgo)}</td>
  <td class="num">${r.p}</td><td class="num">${r.s}</td><td><span class="rk ${c}">${v}</span></td><td><span class="pill ${c}">${lvlTxt(v)}</span></td>
  <td><div class="ctl">${CTL.map(([k,n,a])=>`<b class="${r[k]?'on':''}" title="${n}">${a}</b>`).join('')}</div></td>
  <td class="act"><button class="btn sm" data-act="det:${r.id}" aria-expanded="${op}">${op?'Ocultar':'Detalle'}</button>${canWrite?` <button class="btn sm" data-act="edit:iperc:${r.id}">Editar</button> <button class="btn sm danger" data-act="del:iperc:${r.id}">Eliminar</button>`:''}</td></tr>
  ${op?`<tr class="det"><td colspan="9"><div class="dgrid"><div><h4>Posible daño</h4><p>${esc(r.dano||'—')}</p></div><div><h4>Relacionado con</h4><p>${esc(r.relacionado||'—')}</p></div><div><h4>Controles existentes</h4><p>${esc(r.controlesExistentes||'—')}</p></div>
  ${CTL.map(([k,n,a])=>`<div><h4>${a} · ${n}</h4><p>${esc(r[k]||'—')}</p></div>`).join('')}</div></td></tr>`:''}`}).join('')}
  </tbody></table></div>`:emptyBox(S.iperc.length?'Sin resultados':'La matriz está vacía','Agrega cada peligro con su probabilidad y severidad; el riesgo y su aceptación se calculan al instante.',`<button class="btn pri" data-act="new:iperc">+ Nuevo peligro</button>`)}</div>`;
}

/* ---------- Documentos y fotos ---------- */
function vDoc(){
  const f=F.doc,q=f.q.toLowerCase();
  const all=sorted('documentos');
  const cnt=c=>all.filter(d=>d.categoria===c).length;
  const rows=all.filter(d=>(!f.c||d.categoria===f.c)&&(!q||[d.nombre,d.descripcion,d.categoria].join(' ').toLowerCase().includes(q)));
  return head('Documentos y fotos','Archivos del programa de residuos. Se guardan de forma privada y solo los ve quien tenga acceso a esta página.',`<button class="btn pri" data-act="upload">+ Subir archivos</button>`)+`
  ${!assets&&mode==='db'?'<p class="mut">Tu nivel de acceso no permite subir archivos; puedes ver y descargar los existentes.</p>':''}
  ${mode==='local'?'<p class="mut">Versión descargable: los archivos se guardan en este navegador (máx. 3 MB cada uno).</p>':''}
  <div class="chips" role="group" aria-label="Categorías"><button class="chip" data-cat="" aria-pressed="${!f.c}">Todos<small>${all.length}</small></button>${L.docCat.map(c=>`<button class="chip" data-cat="${c}" aria-pressed="${f.c===c}">${c}<small>${cnt(c)}</small></button>`).join('')}</div>
  <div class="tools"><input type="search" id="q-doc" placeholder="Buscar por nombre o descripción…" value="${esc(f.q)}" aria-label="Buscar"></div>
  ${rows.length?`<div class="gal">${rows.map(d=>{const img=(d.tipo||'').startsWith('image/');const ext=(d.nombreArchivo||'').split('.').pop().slice(0,4).toUpperCase()||'ARCH';
  return `<article class="panel file"><button class="thumb" data-act="prev:${d.id}" aria-label="Ver ${esc(d.nombre)}">${img?`<img src="${esc(d.url)}" alt="${esc(d.nombre)}" loading="lazy">`:`<span class="ext">${esc(ext)}</span>`}</button>
  <div class="info"><b>${esc(d.nombre)}</b><span><span class="tag">${esc(d.categoria)}</span> <span class="mut mono">${fmtD(d.fecha)} · ${kb(d.tamano||0)}</span></span>${d.descripcion?`<p>${esc(d.descripcion)}</p>`:''}</div>
  <div class="btns"><button class="btn sm" data-act="dl:${d.id}">Descargar</button>${canWrite?`<button class="btn sm" data-act="edit:documentos:${d.id}">Editar</button><button class="btn sm danger" data-act="del:documentos:${d.id}">Eliminar</button>`:''}</div></article>`}).join('')}</div>`
  :`<div class="panel">${emptyBox(all.length?'Sin resultados':'Aún no hay archivos','Sube fotos de campo, manifiestos, permisos o reportes y clasifícalos por categoría.',`<button class="btn pri" data-act="upload">+ Subir archivos</button>`)}</div>`}`;
}

/* ---------- formularios ---------- */
const MOD={
  inventario:{t:'registro de inventario',fields:fInv},
  iperc:{t:'peligro IPERC'},reportes:{t:'reporte diario'},documentos:{t:'archivo'}
};
function fieldHTML(x,v){
  if(x.sec)return `<div class="sec full">${x.sec}</div>`;
  const val=v[x.k]??x.def??'';const id='f-'+x.k;const cls=x.full?'f full':'f';
  if(x.type==='textarea')return `<label class="${cls}">${x.l}<textarea id="${id}" name="${x.k}">${esc(val)}</textarea></label>`;
  if(x.sel){const o=x.sel.map(s=>Array.isArray(s)?s:[s,s]);return `<label class="${cls}">${x.l}<select id="${id}" name="${x.k}" ${x.req?'required':''}>${(x.blank||!val)&&!x.noblank?'<option value="">Seleccionar…</option>':''}${o.map(([a,b])=>`<option value="${esc(a)}" ${String(a)===String(val)?'selected':''}>${esc(b)}</option>`).join('')}</select></label>`}
  return `<label class="${cls}">${x.l}<input id="${id}" name="${x.k}" type="${x.type||'text'}" ${x.type==='number'?'min="0" step="any"':''} ${x.list?`list="dl-${x.list}"`:''} ${x.req?'required':''} value="${esc(val)}"></label>`;
}
const dlists=()=>['ubic','clasif','tipoRes','um'].map(k=>`<datalist id="dl-${k}">${L[k].map(o=>`<option value="${esc(o)}">`).join('')}</datalist>`).join('');

function modal(title,body,foot,cls=''){
  $('#layer').innerHTML=`<div class="ov" data-ov><div class="modal ${cls}" role="dialog" aria-modal="true" aria-label="${esc(title)}"><div class="mh"><h3>${esc(title)}</h3><button class="btn sm" data-act="close" aria-label="Cerrar">Cerrar</button></div>${body}${foot||''}</div></div>`;
  const f=$('#layer input,#layer select,#layer textarea');if(f)f.focus();
}
const close=()=>{$('#layer').innerHTML=''};
let toastT;function toast(m){let t=$('#toast');if(!t){t=document.createElement('div');t.id='toast';t.className='toast';t.setAttribute('role','status');document.body.appendChild(t)}t.textContent=m;t.hidden=false;clearTimeout(toastT);toastT=setTimeout(()=>t.hidden=true,2600)}
function confirmBox(msg,fn){
  modal('Confirmar',`<div class="mb"><p style="margin:0">${msg}</p></div>`,`<div class="mf"><button class="btn" data-act="close">Cancelar</button><button class="btn pri" id="cf-ok" style="background:var(--bad);border-color:var(--bad);color:#fff">Eliminar</button></div>`,'sm');
  $('#cf-ok').onclick=async()=>{try{await fn();close();toast('Eliminado')}catch(e){toast('No se pudo eliminar')}};
}
const find=(c,id)=>S[c].find(x=>x.id===id);

function openForm(col,id){
  const v=id?find(col,id)||{}:{};const edit=!!id;
  if(col==='inventario')return formGeneric(col,v,edit,fInv(v),'registro de inventario');
  if(col==='reportes')return formRep(v,edit);
  if(col==='iperc')return formIpe(v,edit);
  if(col==='documentos')return formDocEdit(v);
}
function formShell(col,title,inner,id,edit,extra=''){
  modal((edit?'Editar ':'Nuevo ')+title,`<form id="frm" novalidate><div class="mb">${inner}</div><div class="mf"><button type="button" class="btn" data-act="close">Cancelar</button><button class="btn pri" type="submit" id="sv">${edit?'Guardar cambios':'Guardar'}</button></div></form>${dlists()}`,'', 'wide');
}
function formGeneric(col,v,edit,fields,title){
  formShell(col,title,`<div class="fg">${fields.map(x=>fieldHTML(x,v)).join('')}</div>`,v.id,edit);
  $('#frm').onsubmit=async e=>{e.preventDefault();if(!$('#frm').reportValidity())return;
    const rec={...v};fields.filter(x=>x.k).forEach(x=>{const val=$('#f-'+x.k).value.trim();rec[x.k]=x.type==='number'?Number(val||0):val});
    await submit(col,rec,edit)};
}
async function submit(col,rec,edit){
  const b=$('#sv');b.disabled=true;
  try{await save(col,rec);close();toast(edit?'Cambios guardados':'Guardado')}catch(e){b.disabled=false;toast('No se pudo guardar: '+(e?.message||'revisa tu acceso'))}
}
function formRep(v,edit){
  const its=v.items&&v.items.length?v.items:[{}];
  formShell('reportes','reporte diario',`<div class="fg">
    <label class="f">Fecha<input id="f-fecha" type="date" required value="${esc(v.fecha||today())}"></label>
    <label class="f">Elaborado por<input id="f-elaboradoPor" required value="${esc(v.elaboradoPor)}"></label>
    <label class="f full">Lugar<input id="f-lugar" required list="dl-ubic" value="${esc(v.lugar)}"></label>
    <label class="f full">Actividad desarrollada<textarea id="f-actividad" required>${esc(v.actividad)}</textarea></label></div>
    <div class="sec">Ítems del reporte</div><div id="items" style="display:grid;gap:10px">${its.map(itemRow).join('')}</div>
    <div><button type="button" class="btn sm" data-act="additem">+ Agregar ítem</button></div>`,v.id,edit);
  $('#frm').onsubmit=async e=>{e.preventDefault();if(!$('#frm').reportValidity())return;
    const items=[...document.querySelectorAll('[data-item]')].map(r=>{const o={};r.querySelectorAll('[data-i]').forEach(i=>o[i.dataset.i]=i.dataset.i==='cantidad'?Number(i.value||0):i.value.trim());return o}).filter(o=>o.procedencia||o.tipoResiduo||o.cantidad||o.lugarAcopio);
    await submit('reportes',{...v,fecha:$('#f-fecha').value,elaboradoPor:$('#f-elaboradoPor').value.trim(),lugar:$('#f-lugar').value.trim(),actividad:$('#f-actividad').value.trim(),items},edit)};
}
function formIpe(v,edit){
  const sel=(id,arr,val)=>`<select id="${id}" required>${arr.map(([a,b])=>`<option value="${a}" ${String(a)===String(val)?'selected':''}>${b}</option>`).join('')}</select>`;
  formShell('iperc','peligro IPERC',`
    <div class="sec">Identificación de actividades</div><div class="fg">
    <label class="f">Actividad<input id="f-actividad" required value="${esc(v.actividad)}"></label><label class="f">Tarea<input id="f-tarea" value="${esc(v.tarea)}"></label>
    <label class="f full">Zona<input id="f-zona" value="${esc(v.zona)}"></label></div>
    <div class="sec">Identificación de peligros y riesgos</div><div class="fg">
    <label class="f">Peligro<select id="f-peligro" required>${L.peligro.map(o=>`<option ${o===v.peligro?'selected':''}>${o}</option>`).join('')}</select></label>
    <label class="f">Detalle del peligro<input id="f-detalle" required value="${esc(v.detalle)}"></label>
    <label class="f">Riesgo (evento peligroso)<input id="f-riesgo" required value="${esc(v.riesgo)}"></label>
    <label class="f">Posible daño a las personas<input id="f-dano" value="${esc(v.dano)}"></label>
    <label class="f full">Relacionado con<select id="f-relacionado">${L.rel.map(o=>`<option ${o===v.relacionado?'selected':''}>${o}</option>`).join('')}</select></label>
    <label class="f full">Controles existentes<textarea id="f-controlesExistentes">${esc(v.controlesExistentes)}</textarea></label></div>
    <div class="sec">Valoración del riesgo</div><div class="fg">
    <label class="f">Probabilidad (P)${sel('f-p',L.P,v.p||1)}</label><label class="f">Severidad (S)${sel('f-s',L.S,v.s||1)}</label></div>
    <div class="live"><b>R = P × S =</b><span class="rk" id="lv-r">1</span><span class="pill" id="lv-t">Aceptable</span></div>
    <div class="sec">Controles a implementar, según jerarquía</div><div class="fg">
    ${CTL.map(([k,n,a])=>`<label class="f ${k==='epp'?'full':''}">${a} · ${n}<textarea id="f-${k}" placeholder="Describe el control o deja vacío si no aplica">${esc(v[k])}</textarea></label>`).join('')}</div>`,v.id,edit);
  const calc=()=>{const r=Number($('#f-p').value)*Number($('#f-s').value),c=lvl(r);$('#lv-r').textContent=r;$('#lv-r').className='rk '+c;$('#lv-t').textContent=lvlTxt(r);$('#lv-t').className='pill '+c};
  $('#f-p').onchange=$('#f-s').onchange=calc;calc();
  $('#frm').onsubmit=async e=>{e.preventDefault();if(!$('#frm').reportValidity())return;
    const g=k=>$('#f-'+k).value.trim();const rec={...v,p:Number(g('p')),s:Number(g('s'))};
    ['actividad','tarea','zona','peligro','detalle','riesgo','dano','relacionado','controlesExistentes',...CTL.map(c=>c[0])].forEach(k=>rec[k]=g(k));
    await submit('iperc',rec,edit)};
}
function formDocEdit(v){
  formShell('documentos','archivo',`<div class="fg"><label class="f full">Nombre<input id="f-nombre" required value="${esc(v.nombre)}"></label>
  <label class="f">Categoría<select id="f-categoria">${L.docCat.map(o=>`<option ${o===v.categoria?'selected':''}>${o}</option>`).join('')}</select></label>
  <label class="f">Fecha<input id="f-fecha" type="date" value="${esc(v.fecha||today())}"></label>
  <label class="f full">Descripción<textarea id="f-descripcion">${esc(v.descripcion)}</textarea></label></div>`,v.id,true);
  $('#frm').onsubmit=async e=>{e.preventDefault();if(!$('#frm').reportValidity())return;
    await submit('documentos',{...v,nombre:$('#f-nombre').value.trim(),categoria:$('#f-categoria').value,fecha:$('#f-fecha').value,descripcion:$('#f-descripcion').value.trim()},true)};
}
function formUpload(){
  const cat=F.doc.c||'Fotos';
  modal('Subir archivos',`<form id="frm"><div class="mb"><div class="fg">
  <label class="f full">Archivos (fotos, PDF, Word, Excel)<input id="f-files" type="file" multiple required accept="image/*,.pdf,.doc,.docx,.xls,.xlsx,.csv,.txt"></label>
  <label class="f">Categoría<select id="f-categoria">${L.docCat.map(o=>`<option ${o===cat?'selected':''}>${o}</option>`).join('')}</select></label>
  <label class="f">Fecha<input id="f-fecha" type="date" value="${today()}"></label>
  <label class="f full">Descripción (opcional)<textarea id="f-descripcion"></textarea></label></div>
  <p class="mut" style="margin:0">Máximo 20 MB por archivo (3 MB en la versión descargable). Cada archivo toma su nombre original; podrás renombrarlo después.</p></div>
  <div class="mf"><button type="button" class="btn" data-act="close">Cancelar</button><button class="btn pri" type="submit" id="sv">Subir</button></div></form>`,'','');
  $('#frm').onsubmit=async e=>{e.preventDefault();
    const files=[...$('#f-files').files];if(!files.length)return;const b=$('#sv');b.disabled=true;let ok=0;
    for(let i=0;i<files.length;i++){const fl=files[i];b.textContent=`Subiendo ${i+1} de ${files.length}…`;
      try{
        let id='',url='';
        if(assets){const r=await assets.upload(fl);id=r.id;url=r.url}else{if(fl.size>3e6)throw new Error('máximo 3 MB en la versión descargable');url=await new Promise((ok,no)=>{const r=new FileReader();r.onload=()=>ok(r.result);r.onerror=no;r.readAsDataURL(fl)})}
        await save('documentos',{nombre:fl.name.replace(/\.[^.]+$/,''),nombreArchivo:fl.name,categoria:$('#f-categoria').value,fecha:$('#f-fecha').value,descripcion:$('#f-descripcion').value.trim(),assetId:id,url,tipo:fl.type||'',tamano:fl.size});ok++;
      }catch(err){toast(`No se pudo subir ${fl.name}: ${err?.message||'error'}`)}
    }
    close();if(ok)toast(ok+' archivo'+(ok>1?'s':'')+' subido'+(ok>1?'s':''));
  };
}
function viewRep(id){
  const r=find('reportes',id);if(!r)return;const its=r.items||[];
  modal('Reporte del '+fmtD(r.fecha),`<div class="mb"><div class="dgrid"><div><h4>Elaborado por</h4><p>${esc(r.elaboradoPor)}</p></div><div><h4>Lugar</h4><p>${esc(r.lugar)}</p></div></div>
  <div class="dgrid"><div><h4>Actividad desarrollada</h4><p style="white-space:pre-wrap">${esc(r.actividad)}</p></div></div>
  <div class="tw"><table style="min-width:560px"><thead><tr><th>Procedencia</th><th>Tipo de residuo</th><th>U/M</th><th class="num">Cantidad</th><th>Lugar de acopio</th></tr></thead><tbody>${its.map(i=>`<tr><td>${esc(i.procedencia)}</td><td>${esc(i.tipoResiduo)}</td><td>${esc(i.um)}</td><td class="num">${nf(i.cantidad)}</td><td>${esc(i.lugarAcopio)}</td></tr>`).join('')||'<tr><td colspan="5" class="mut">Sin ítems</td></tr>'}</tbody></table></div></div>`,'','wide');
}
function preview(id){
  const d=find('documentos',id);if(!d)return;const img=(d.tipo||'').startsWith('image/');
  modal(d.nombre,`<div class="mb">${img?`<img class="prev" src="${esc(d.url)}" alt="${esc(d.nombre)}">`:`<p>Este tipo de archivo no tiene vista previa. Descárgalo para abrirlo.</p>`}<p class="mut" style="margin:0">${esc(d.categoria)} · ${fmtD(d.fecha)} · ${kb(d.tamano||0)}${d.descripcion?' · '+esc(d.descripcion):''}</p></div><div class="mf"><button class="btn pri" data-act="dl:${d.id}">Descargar</button></div>`,'','wide');
}
async function download(id){
  const d=find('documentos',id);if(!d)return;
  try{
    const blob=await (await fetch(d.url)).blob();
    if(dl){await dl.save({filename:d.nombreArchivo||d.nombre,data:blob});toast('Descarga lista')}
    else window.open(d.url,'_blank')
  }catch(e){if(e&&e.code==='declined')return;try{window.open(d.url,'_blank')}catch(_){}toast('Se abrió el archivo en otra pestaña')}
}

/* ---------- ejemplos ---------- */
async function seed(){
  const b=$('[data-act="seed"]');if(b)b.disabled=true;
  const E='(Ejemplo) ';const t=Date.now();
  const inv=[['Almacén central','Disposición final','MSC','Material de suelo contaminado','BIG BAG',12,3,1],['Almacén central','Química recuperada','Química recuperada','Antiespumante en envase','BULK DRUM',4,2,1],['Zona norte','Reutilizables','Reutilizables','Bulk drum vacío','BULK DRUM',9,5,2],['Patio de acopio','Disposición final','Residuos varios contaminados','Chatarra','PALLET',20,6,4]];
  const rep=[{fecha:today(),elaboradoPor:'Responsable de campo',lugar:'Patio de acopio',actividad:E+'Acondicionamiento de material en big bags y traslado al punto de acopio.',items:[{procedencia:'Zona norte',tipoResiduo:'MSC',um:'BIG BAGS',cantidad:24,lugarAcopio:'Patio de acopio'},{procedencia:'Almacén central',tipoResiduo:'Residuos varios contaminados',um:'PALLET',cantidad:6,lugarAcopio:'Almacén central'}]}];
  const ip=[['Inspección del lugar','Recorrido del área','Trabajo de campo','FÍSICO','Trabajo a la intemperie con radiación solar','Exposición a radiación solar','Quemaduras, deshidratación','SALUD',1,1],['Manipulación de residuos','Carga de big bags','Patio de acopio','MECÁNICO','Superficies a desnivel o resbaladizas','Caídas al mismo nivel','Fracturas, contusiones','SEGURIDAD',3,2],['Manipulación de residuos','Trasvase de líquidos','Almacén central','QUÍMICO','Contacto con sustancias peligrosas','Contacto con piel y ojos','Irritación, intoxicación','SALUD',4,3]];
  try{
    for(const r of inv)await save('inventario',{ubicacion:r[0],clasificacion:r[1],tipoResiduo:r[2],especificaciones:E+r[3],tipoContenedor:r[4],bueno:r[5],reacondicionar:r[6],malEstado:r[7],almacen:r[0],creado:t});
    for(const r of rep)await save('reportes',{...r,creado:t});
    for(const r of ip)await save('iperc',{actividad:E+r[0],tarea:r[1],zona:r[2],peligro:r[3],detalle:r[4],riesgo:r[5],dano:r[6],relacionado:r[7],p:r[8],s:r[9],controlesExistentes:'Uso de EPP completo',eliminar:'',sustituir:'',ingenieria:r[9]>1?'Señalización y delimitación del área':'',administrativos:'Capacitación y pausas activas',epp:'Uniforme, guantes, calzado de seguridad',creado:t});
    toast('Datos de ejemplo cargados');
  }catch(e){toast('No se pudieron cargar: '+(e?.message||'revisa tu acceso'));if(b)b.disabled=false}
}

/* ---------- eventos ---------- */
document.addEventListener('click',e=>{
  const g=e.target.closest('[data-go]');if(g){go(g.dataset.go);return}
  const c=e.target.closest('[data-cat]');if(c){F.doc.c=c.dataset.cat;render();return}
  if(e.target.matches('[data-ov]')){close();return}
  const a=e.target.closest('[data-act]');if(!a)return;
  const[act,x,y]=a.dataset.act.split(':');
  if(act==='close')close();
  else if(act==='new')openForm(x);
  else if(act==='edit')openForm(x,y);
  else if(act==='del'){const rec=find(x,y);confirmBox('¿Eliminar este registro? No se puede deshacer.',async()=>{if(x==='documentos'&&rec?.assetId&&assets){try{await assets.delete(rec.assetId)}catch(_){}}await remove(x,y)})}
  else if(act==='view')viewRep(y===undefined?x:y);
  else if(act==='det'){openDet.has(x)?openDet.delete(x):openDet.add(x);render()}
  else if(act==='upload')formUpload();
  else if(act==='prev')preview(x);
  else if(act==='dl')download(x);
  else if(act==='seed')seed();
  else if(act==='additem')$('#items').insertAdjacentHTML('beforeend',itemRow());
  else if(act==='rmitem'){const rows=document.querySelectorAll('[data-item]');if(rows.length>1)a.closest('[data-item]').remove();else a.closest('[data-item]').querySelectorAll('input').forEach(i=>i.value='')}
});
document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
document.addEventListener('input',e=>{
  const t=e.target;const keep=()=>{const p=t.selectionStart;render();const n=document.getElementById(t.id);if(n){n.focus();try{n.setSelectionRange(p,p)}catch(_){}}};
  if(t.id==='q-inv'){F.inv.q=t.value;keep()}else if(t.id==='q-rep'){F.rep.q=t.value;keep()}else if(t.id==='q-ipe'){F.ipe.q=t.value;keep()}else if(t.id==='q-doc'){F.doc.q=t.value;keep()}
});
document.addEventListener('change',e=>{const t=e.target;if(t.id==='u-inv'){F.inv.u=t.value;render()}else if(t.id==='r-ipe'){F.ipe.r=t.value;render()}});
window.addEventListener('hashchange',()=>{const h=location.hash.slice(1);if(VIEWS.some(v=>v[0]===h)&&h!==view){view=h;render()}});
render();boot();
</script>
