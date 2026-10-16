/* ===== Datos (ES primero, EN segundo) ===== */
const PROJECTS=[
 ["Servimeters","4 Landing Pages · Certificación ISO & RETIE","4 Landing Pages · ISO & RETIE Certification","Landing Pages B2B · 2024","B2B Landing Pages · 2024","4 landing pages para servicios de certificación ISO, RETIE y compliance.","4 landing pages for ISO certification, RETIE and compliance services."],
 ["Hangar / CCR","Brand Guidelines & Visual System","Brand Guidelines & Visual System","Rebranding · 2022","Rebranding · 2022","Rebranding completo, manuales de marca y aplicación de identidad visual.","Complete rebranding, brand manuals and visual identity application."],
 ["Moto Moto Refacciones","Branding Automotriz & Retail","Automotive Branding & Retail","Branding · 2023","Branding · 2023","Creación de marca completa: logotipo, aplicaciones y papelería.","End-to-end brand creation: logo, applications and stationery."],
 ["Celebrando Diversidades","Editorial Design & Book Layout","Editorial Design & Book Layout","Diseño Editorial · 2024","Editorial Design · 2024","Proyecto editorial con ilustración y maquetación para publicación impresa.","Editorial project with illustration and typesetting for a print publication."],
 ["Packaging","Empaques, Troqueles & Cajas","Packaging, Die-cuts & Boxes","Diseño de Packaging · 2024","Packaging Design · 2024","Soluciones de empaque: cajas, bolsas, etiquetas y ediciones especiales.","Packaging solutions: boxes, bags, labels and special editions."]];
const PLACE={co:["Colombia","Colombia"],es:["España","Spain"],pa:["Panamá","Panama"],ar:["Argentina","Argentina"],us:["Florida, USA","Florida, USA"]};
const JOBS=[
 ["COTECNOVA",2013,"co","Diseñador Gráfico, Docente y Asistente de Marketing","Graphic Designer, Teacher & Marketing Assistant","Diseño gráfico, apoyo a marketing y docencia a estudiantes de diseño.","Graphic design, marketing support, and teaching design students."],
 ["PUNTO CLICK",2014,"es","Diseñador Web","Web Designer","Diseño visual de sitios web y propuestas gráficas digitales.","Visual website design and digital graphic proposals."],
 ["3D STUDIO",2015,"co","Diseñador Gráfico e Impresor","Graphic Designer & Printer","Piezas gráficas para impresión y diseño aplicado a espacios.","Print graphic pieces and design applied to spaces."],
 ["MULTIPRINT",2015,"co","Diseñador Gráfico e Impresor","Graphic Designer & Printer","Diseño y producción para impresión. Operación de plotters.","Design and production for printing. Plotter operation."],
 ["LIFE PANAMA INC.",2016,"pa","Diseñador Gráfico Editorial","Editorial Graphic Designer","Diseño editorial y maquetación de revista digital mensual.","Editorial design and layout for a monthly digital magazine."],
 ["LÁSER CREACIONES & DISEÑOS",2018,"co","Diseñador Gráfico","Graphic Designer","Productos personalizados en MDF. Operación de corte láser.","Custom MDF products. Laser cutting operation."],
 ["CONEXIÓN MP",2019,"co","Diseñador Gráfico e Impresor","Graphic Designer & Printer","Diseño para impresión y producción a gran escala.","Design for large-scale print production."],
 ["MARKETING108",2020,"co","Diseñador Gráfico","Graphic Designer","Maquetación de manuales de marca y sistemas de identidad visual.","Layout of brand manuals and visual identity systems."],
 ["KREATION INTERACTIVE",2020,"ar","Diseñador Gráfico","Graphic Designer","Propuestas de marca, señalización empresarial y contenido para redes.","Brand proposals, corporate signage, and social media content."],
 ["PERFECT COLORS",2020,"co","Diseñador Gráfico & Ilustrador Digital","Graphic Designer & Digital Illustrator","Contenido para redes, sublimación e ilustración de personajes.","Social media content, sublimation, and character illustration."],
 ["NEUROPUBLICIDAD",2021,"co","Diseñador Gráfico","Graphic Designer","Piezas gráficas para comunicación y publicidad. Plantillas funcionales.","Graphic pieces for communication and advertising. Functional templates."],
 ["CCR",2022,"us","Director Creativo y Diseñador Gráfico","Creative Director & Graphic Designer","Rebranding de cuentas, manuales de marca y mentoría a diseñadores.","Account rebranding, brand manuals, and designer mentoring."],
 ["SERVIMETERS",2024,"co","Diseñador de Publicidad","Advertising Designer","Landing pages, brochures, campañas y comunicación corporativa.","Landing pages, brochures, campaigns, and corporate communication."]];

/* ===== Utilidades ===== */
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const bi=(es,en,tag="span",cls="")=>`<${tag}${cls?` class="${cls}"`:""} data-en="${en.replace(/"/g,"&quot;")}">${es}</${tag}>`;

/* ===== Render proyectos y trayectoria ===== */
$("#projects").innerHTML=PROJECTS.map(p=>`<article class="card"><div>
 <div class="mock"><b>[ Mockup: ${p[0]} ]</b>${bi(p[1],p[2],"small")}</div>
 <h3>${p[0]}</h3>${bi(p[3],p[4],"p","m")}${bi(p[5],p[6],"p")}</div>
 <a class="pill ghost" href="#contacto" data-en="View project →">Ver proyecto →</a></article>`).join("");
(function(){ // línea serpenteante: sube de abajo-izquierda a arriba-derecha
 const H=640,N=JOBS.length,yAt=t=>H*.64-t*H*.26+Math.sin(t*3.5*Math.PI*2)*H*.045;
 let d="";for(let k=0;k<=120;k++){const t=k/120;d+=(k?"L":"M")+(t*1000).toFixed(1)+" "+yAt(t).toFixed(1)+" "}
 let out=`<svg viewBox="0 0 1000 ${H}" preserveAspectRatio="none" aria-hidden="true"><path d="${d}"/></svg>`;
 JOBS.forEach((j,i)=>{const t=(i+.5)/N,y=yAt(t).toFixed(1),pl=PLACE[j[2]],last=i==N-1,st=`style="--t:${t.toFixed(4)};--y:${y}px"`;
  out+=`<i class="dot" ${st}></i><div class="nd ${i%2?"dn":"up"}${last?" hl":""}" ${st}><span class="k">${String(i+1).padStart(2,"0")}</span>${last?bi("★ DESTACADO","★ FEATURED","em"):""}
  ${bi(j[3],j[4],"div","r")}<h3>${j[0]}</h3><div class="loc">${j[1]} · <span data-en="${pl[1]}">${pl[0]}</span></div>${bi(j[5],j[6],"p")}</div>`});
 $("#timeline").innerHTML=out;
 const io=new IntersectionObserver(e=>{if(e[0].isIntersecting){$("#timeline").classList.add("in");io.disconnect()}},{threshold:.15});io.observe($("#timeline"));
})();

/* ===== Traducción ES / EN ===== */
let lang="es";
$$("[data-en]").forEach(e=>e.dataset.es=e.innerHTML);
$$("[data-en-ph]").forEach(e=>e.dataset.esPh=e.placeholder);
function setLang(l){
 lang=l;document.documentElement.lang=l;
 $$("[data-en]").forEach(e=>{e.innerHTML=l=="en"?e.dataset.en:e.dataset.es});
 $$("[data-en-ph]").forEach(e=>{e.placeholder=l=="en"?e.dataset.enPh:e.dataset.esPh});
 $("#l-es").classList.toggle("on",l=="es");$("#l-en").classList.toggle("on",l=="en");
 $("#role").dataset.t=$("#role").textContent;           // sincroniza el efecto glitch
 try{localStorage.setItem("lang",l)}catch(e){}
}
$("#lang").onclick=()=>setLang(lang=="es"?"en":"es");
try{const s=localStorage.getItem("lang");if(s=="en")setLang("en")}catch(e){}

/* ===== Animación del banner: separar letras + parallax ===== */
(function(){
 let i=0;
 $$("#kin .ln").forEach(l=>{
  const t=l.textContent;l.textContent="";
  [...t].forEach(ch=>{const s=document.createElement("span");s.className="c";s.setAttribute("aria-hidden","true");s.style.setProperty("--i",i++);s.innerHTML=ch==" "?"&nbsp;":ch;l.appendChild(s)});
 });
 const sub=$("#role"),st=document.createElement("i");st.className="strike";sub.appendChild(st); // tachado neón
 const b=$("#banner"),hero=$("#inicio");
 hero.addEventListener("mousemove",e=>{const r=hero.getBoundingClientRect();
  b.style.setProperty("--mx",((e.clientX-r.left)/r.width-.5).toFixed(3));
  b.style.setProperty("--my",((e.clientY-r.top)/r.height-.5).toFixed(3));});
})();
/* Al cambiar de idioma el texto de .sub se reemplaza: se vuelve a montar */
const _set=setLang;setLang=function(l){_set(l);const s=$("#role");if(!s.querySelector(".c")){const t=s.textContent;s.textContent="";[...t].forEach((ch,k)=>{const c=document.createElement("span");c.className="c";c.style.setProperty("--i",14+k);c.style.animationDelay=".05s";c.innerHTML=ch==" "?"&nbsp;":ch;s.appendChild(c)});const st=document.createElement("i");st.className="strike";s.appendChild(st);s.dataset.t=t}};
$("#lang").onclick=()=>setLang(lang=="es"?"en":"es");

/* ===== Menú móvil ===== */
$("#burger").onclick=()=>$("#menu").classList.toggle("open");
$$("#menu a").forEach(a=>a.onclick=()=>$("#menu").classList.remove("open"));

/* ===== Formulario (GitHub Pages no tiene backend → abre el correo) ===== */
$("#form").onsubmit=e=>{e.preventDefault();const f=new FormData(e.target),g=k=>f.get(k)||"-";
 const body=`Nombre/Name: ${g("n")}\nEmpresa/Company: ${g("c")}\nTel: ${g("t")}\nEmail: ${g("e")}\nMotivo/Reason: ${g("r")}\n\n${g("m")}`;
 location.href=`mailto:armando.takoi.artist@gmail.com?subject=${encodeURIComponent("Contacto portafolio – "+g("r"))}&body=${encodeURIComponent(body)}`;
 alert(lang=="es"?"¡Gracias! Se abrirá tu correo para enviar el mensaje.":"Thanks! Your email app will open to send the message.");};
