const $=s=>document.querySelector(s);
const categories=[{name:'Fixings & anchors',description:'Mechanical anchors, chemical anchors and wall fixings'},{name:'Screws & fasteners',description:'Screws and fastening products'},{name:'Sealants & adhesives',description:'Sealants, silicones and adhesives'},{name:'Tools & accessories',description:'Power tools, blades and accessories'}];
let active=-1;
function filter(cat,scroll=false){active=cat;$('#search').value='';render();if(scroll)$('#range').scrollIntoView({behavior:'smooth'})}
function render(){const q=$('#search').value.trim().toLowerCase();const visible=categories.map((c,i)=>({...c,id:i})).filter(c=>(active===-1||c.id===active)&&`${c.name} ${c.description}`.toLowerCase().includes(q));
$('#filters').innerHTML=['All categories',...categories.map(c=>c.name)].map((name,i)=>`<button class="${active===i-1?'active':''}" aria-pressed="${active===i-1}" onclick="filter(${i-1})">${name}</button>`).join('');
$('#products').innerHTML=visible.map(c=>`<article class="placeholder-product"><div class="placeholder-visual" aria-hidden="true"><svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M12 20l20-10 20 10v25L32 56 12 45V20Z"/><path d="M12 20l20 11 20-11M32 31v25M22 15l20 11"/></svg><span>PRODUCT IMAGE</span></div><div class="placeholder-info"><span class="product-brand">${c.name}</span><h3>Product to be added</h3><p>Details and pricing coming soon.</p></div></article>`).join('');
$('#resultStatus').textContent=visible.length?'For product enquiries, call 02920 452876 or email ned@mandmfixings.com.':'No matching category. Try “anchors”, “screws”, “sealants” or “tools”.';}
$('#categories').innerHTML=categories.map((c,i)=>`<button class="category category-summary" onclick="filter(${i},true)"><span class="category-number">0${i+1}</span><h3>${c.name}</h3><p>${c.description}</p><span class="arrow">↗</span></button>`).join('');
$('#searchForm').addEventListener('submit',e=>{e.preventDefault();active=-1;render();$('#range').scrollIntoView({behavior:'smooth'})});$('#search').addEventListener('input',()=>{active=-1;render()});$('#year').textContent=new Date().getFullYear();render();

// Duplicate the logo row for a seamless loop; keep repeated logos out of the accessibility tree.
const carousel=$('.brand-carousel');
const logoCopy=$('.brand-group').cloneNode(true);logoCopy.setAttribute('aria-hidden','true');logoCopy.querySelectorAll('img').forEach(img=>img.alt='');$('.brand-track').appendChild(logoCopy);
const motionPreference=window.matchMedia('(prefers-reduced-motion: reduce)');
const carouselObserver=new IntersectionObserver(entries=>{for(const entry of entries)carousel.classList.toggle('is-active',entry.isIntersecting)},{threshold:0.05});carouselObserver.observe(carousel);
let revealObserver;
function setupReveals(){if(revealObserver)revealObserver.disconnect();const targets=document.querySelectorAll('.section-heading,.category-summary,.range-heading,.technical-inner>div,.brands>.eyebrow,.brands>h2,.about>div,.contact-grid>div,.location-map');
if(motionPreference.matches){targets.forEach(el=>{el.classList.remove('will-reveal');el.classList.add('is-visible')});return}
revealObserver=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){entry.target.classList.add('is-visible');revealObserver.unobserve(entry.target)}}},{threshold:0.1});
targets.forEach(el=>{if(!el.classList.contains('is-visible')){el.classList.add('will-reveal');if(el.classList.contains('category-summary'))el.style.setProperty('--reveal-delay',`${Array.from(el.parentElement.children).indexOf(el)*65}ms`);revealObserver.observe(el)}})}
setupReveals();motionPreference.addEventListener('change',setupReveals);

// Two identical groups create a continuous, seamless review loop.
const reviewGroup=$('.review-cards');
const reviewCopy=reviewGroup.cloneNode(true);
reviewCopy.removeAttribute('id');
reviewCopy.setAttribute('aria-hidden','true');
$('.review-track').appendChild(reviewCopy);
