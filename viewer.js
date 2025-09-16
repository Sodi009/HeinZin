
(function(){
  function openViewer(title, url){
    const modal = document.getElementById('pdfModal');
    const frame = document.getElementById('pdfFrame');
    const ttl = document.getElementById('pdfTitle');
    if(!modal || !frame) return;
    ttl.textContent = title || 'Document';
    const src = url + (url.includes('#') ? '&' : '#') + 'toolbar=0&navpanes=0&scrollbar=0';
    frame.src = src;
    modal.classList.add('open');
  }
  function closeViewer(){
    const modal = document.getElementById('pdfModal');
    const frame = document.getElementById('pdfFrame');
    if(modal){ modal.classList.remove('open'); }
    if(frame){ frame.src = 'about:blank'; }
  }
  window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-open-pdf]').forEach(btn => {
      btn.addEventListener('click', () => openViewer(btn.getAttribute('data-title'), btn.getAttribute('data-open-pdf')));
    });
    document.getElementById('pdfClose')?.addEventListener('click', closeViewer);
    document.getElementById('pdfModal')?.addEventListener('click', (e)=>{
      if(e.target.id === 'pdfModal') closeViewer();
    });
    document.addEventListener('keydown', (e)=>{ if(e.key==='Escape') closeViewer(); });
    document.addEventListener('contextmenu', (e)=>{
      if(document.getElementById('pdfModal')?.classList.contains('open')) e.preventDefault();
    });
  });
})();
