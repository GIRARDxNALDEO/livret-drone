(() => {
  'use strict';
  const cfg = window.LIVRET || {};
  const docs = (cfg.documents || []).filter(d => d && d.id && d.titre && d.fichier && /^(docs\/)[a-zA-Z0-9_./-]+\.pdf(?:$|\?)/i.test(d.fichier) && !d.fichier.includes('..'));
  const $ = id => document.getElementById(id);
  let category = 'Tous';
  let query = '';
  let current = null;
  const fmtDate = value => { const d = new Date(value + 'T12:00:00'); return Number.isNaN(d.getTime()) ? '' : new Intl.DateTimeFormat('fr-FR',{dateStyle:'long'}).format(d); };
  $('owner').textContent = [cfg.organisme,cfg.telepilote].filter(Boolean).join(' · ');
  $('updated').textContent = cfg.derniereMiseAJour ? 'Mise à jour : ' + fmtDate(cfg.derniereMiseAJour) : '';
  $('footer').textContent = cfg.organisme || 'Dossier télépilote';
  document.title = (cfg.titre || 'Livret documentaire') + ' · Dossier drone';
  const cats = ['Tous', ...new Set(docs.map(d => d.categorie || 'Autres'))];
  function renderCategories(){ $('categories').replaceChildren(...cats.map(cat => { const b=document.createElement('button');b.type='button';b.textContent=cat;b.className=cat===category?'active':'';b.onclick=()=>{category=cat;renderCategories();renderDocs()};return b; })); }
  function renderDocs(){
    const list=docs.filter(d=>(category==='Tous'||(d.categorie||'Autres')===category) && [d.titre,d.description,d.categorie].join(' ').toLocaleLowerCase('fr').includes(query));
    $('documents').replaceChildren(...list.map(d => { const b=document.createElement('button');b.type='button';b.className='doc'+(d.id===current?' active':'');const label=document.createElement('span');label.className='pdf';label.textContent='PDF';const info=document.createElement('span');const title=document.createElement('strong');title.textContent=d.titre;const cat=document.createElement('small');cat.textContent=d.categorie||'Document';info.append(title,cat);b.append(label,info);b.onclick=()=>select(d.id);return b; }));
    if(!list.length){const m=document.createElement('p');m.style.cssText='font-size:12px;color:#8891a2;padding:12px';m.textContent='Aucun document trouvé.';$('documents').append(m)}
  }
  function select(id){
    const d=docs.find(x=>x.id===id);if(!d)return;
    current=id;
    $('category').textContent=d.categorie||'DOCUMENT';$('doc-title').textContent=d.titre;$('doc-desc').textContent=d.description||'';
    for(const key of ['open','download']){$(key).href=d.fichier;$(key).hidden=false}
    $('preview').replaceChildren();const frame=document.createElement('iframe');frame.title='Aperçu PDF : '+d.titre;frame.src=d.fichier+'#toolbar=1&navpanes=0';frame.loading='lazy';$('preview').append(frame);
    if(location.hash.slice(1)!==encodeURIComponent(id))history.replaceState(null,'','#'+encodeURIComponent(id));
    renderDocs();
  }
  $('search').addEventListener('input',e=>{query=e.target.value.toLocaleLowerCase('fr').trim();renderDocs()});
  window.addEventListener('hashchange',()=>{const id=decodeURIComponent(location.hash.slice(1));if(id && id!==current)select(id)});
  renderCategories();renderDocs();
  const initial=decodeURIComponent(location.hash.slice(1));if(docs.length)select(docs.some(d=>d.id===initial)?initial:docs[0].id);
})();
