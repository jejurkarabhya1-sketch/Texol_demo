/* TEXOL website interactions: mobile navigation, image viewer, filters and utility controls. */
(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open navigation');
    }));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') { nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); } });
  }
  document.querySelectorAll('.year').forEach(el => el.textContent = new Date().getFullYear());

  // Click-to-zoom viewer. Escape closes it; arrows navigate image links in the same gallery.
  const galleryImages = [...document.querySelectorAll('main img')].filter(img => img.src && !img.closest('.brand'));
  if (galleryImages.length) {
    const viewer = document.createElement('div');
    viewer.className = 'texol-lightbox';
    viewer.setAttribute('role', 'dialog'); viewer.setAttribute('aria-modal', 'true'); viewer.setAttribute('aria-label', 'Image preview'); viewer.hidden = true;
    viewer.innerHTML = '<button class="lightbox-close" type="button" aria-label="Close image preview">×</button><button class="lightbox-prev" type="button" aria-label="Previous image">‹</button><figure><img alt=""><figcaption></figcaption></figure><button class="lightbox-next" type="button" aria-label="Next image">›</button>';
    document.body.appendChild(viewer);
    const viewImg = viewer.querySelector('figure img'), caption = viewer.querySelector('figcaption');
    let current = 0, lastFocus = null;
    const srcFor = img => { const a=img.closest('a'); return a && /^https?:/i.test(a.href) && /\.(jpe?g|png|webp|gif)(\?|$)/i.test(a.href) ? a.href : img.currentSrc || img.src; };
    const show = index => { current = (index + galleryImages.length) % galleryImages.length; const img=galleryImages[current]; viewImg.src=srcFor(img); viewImg.alt=img.alt || 'TEXOL Engineering photograph'; caption.textContent=img.alt || 'TEXOL Engineering'; viewer.querySelector('.lightbox-prev').hidden=galleryImages.length<2; viewer.querySelector('.lightbox-next').hidden=galleryImages.length<2; };
    const close = () => { viewer.hidden=true; document.body.classList.remove('lightbox-open'); viewImg.src=''; if(lastFocus) lastFocus.focus(); };
    galleryImages.forEach((img,index) => { img.classList.add('zoomable-image'); img.tabIndex=0; img.setAttribute('role','button'); img.setAttribute('aria-label',(img.alt || 'View image')+' — open enlarged preview'); img.addEventListener('click',e=>{ const link=img.closest('a'); if(link && link.target==='_blank' && link.href===img.src) e.preventDefault(); else if(link && link.href && /\.(jpe?g|png|webp|gif)(\?|$)/i.test(link.href)) e.preventDefault(); lastFocus=img; show(index); viewer.hidden=false; document.body.classList.add('lightbox-open'); viewer.querySelector('.lightbox-close').focus(); }); img.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();img.click();}}); });
    viewer.querySelector('.lightbox-close').addEventListener('click',close);
    viewer.querySelector('.lightbox-prev').addEventListener('click',()=>show(current-1));
    viewer.querySelector('.lightbox-next').addEventListener('click',()=>show(current+1));
    viewer.addEventListener('click',e=>{if(e.target===viewer)close();});
    document.addEventListener('keydown',e=>{if(viewer.hidden)return;if(e.key==='Escape')close();if(e.key==='ArrowRight')show(current+1);if(e.key==='ArrowLeft')show(current-1);});
  }

  const projectFilters = document.querySelectorAll('[data-filter]');
  const projectCards = document.querySelectorAll('.project-card[data-category]');
  projectFilters.forEach(button => button.addEventListener('click', () => {
    projectFilters.forEach(item => {item.classList.remove('active'); item.setAttribute('aria-pressed','false');});
    button.classList.add('active'); button.setAttribute('aria-pressed','true');
    const filter = button.dataset.filter;
    projectCards.forEach(card => { card.hidden = filter !== 'all' && card.dataset.category !== filter; });
  }));

  const form = document.getElementById('enquiry-form');
  form?.addEventListener('submit', async event => {
    event.preventDefault();
    const status = document.getElementById('form-status');
    const submitButton = form.querySelector('button[type="submit"]');
    const data = new FormData(form);
    data.set('_subject', 'TEXOL website enquiry — ' + (data.get('interest') || 'Project enquiry'));
    if (status) { status.textContent = 'Sending your enquiry…'; status.dataset.state = 'sending'; }
    if (submitButton) { submitButton.disabled = true; submitButton.setAttribute('aria-busy', 'true'); }
    try {
      const payload = Object.fromEntries(data.entries());
      const response = await fetch('https://formsubmit.co/ajax/jejurkarabhishek@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(payload)
      });
      let result = {};
      try { result = await response.json(); } catch (_) {}
      const success = response.ok && (result.success === true || result.success === 'true');
      if (success) {
        if (status) { status.textContent = 'Enquiry sent successfully. Thank you — your message has been submitted.'; status.dataset.state = 'success'; }
        form.reset();
      } else {
        const reason = result.message || result.error || 'The email service did not confirm delivery.';
        if (status) { status.textContent = 'Your enquiry was NOT confirmed as sent. ' + reason + ' Please try again or email jejurkarabhishek@gmail.com directly.'; status.dataset.state = 'error'; }
      }
    } catch (error) {
      if (status) { status.textContent = 'Your enquiry was NOT sent because the email service could not be reached. Check your connection and try again, or email jejurkarabhishek@gmail.com directly.'; status.dataset.state = 'error'; }
    } finally {
      if (submitButton) { submitButton.disabled = false; submitButton.removeAttribute('aria-busy'); }
    }
  });

  // Scroll progress and accessible back-to-top control.
  const progress = document.createElement('div'); progress.className='scroll-progress'; progress.setAttribute('aria-hidden','true'); document.body.appendChild(progress);
  const topBtn=document.createElement('button'); topBtn.className='back-to-top'; topBtn.type='button'; topBtn.setAttribute('aria-label','Back to top'); topBtn.textContent='↑'; document.body.appendChild(topBtn);
  const updateScroll=()=>{const max=document.documentElement.scrollHeight-innerHeight;progress.style.transform=`scaleX(${max>0?scrollY/max:0})`;topBtn.classList.toggle('visible',scrollY>500);};
  addEventListener('scroll',updateScroll,{passive:true}); updateScroll(); topBtn.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));
})();
