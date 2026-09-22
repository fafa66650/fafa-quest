(()=>{
  let failed=false;
  function showFallback(){
    const app=document.getElementById('app');
    if(failed||document.documentElement.dataset.fqReady==='1'||!app||!app.textContent.includes('Chargement de FAFA QUEST'))return;failed=true;
    app.innerHTML='<main class="shell"><section class="card"><div class="eyebrow">DÉMARRAGE IMPOSSIBLE</div><h1>FAFA QUEST n’a pas pu se charger.</h1><p>Recharge la page. Si le problème persiste, vérifie que tous les fichiers de la version ont bien été envoyés ensemble sur GitHub Pages.</p><button class="btn primary" id="fq-reload">Recharger</button></section></main>';
    document.getElementById('fq-reload')?.addEventListener('click',()=>location.reload());
  }
  addEventListener('error',showFallback,true);
  addEventListener('unhandledrejection',showFallback);
  setTimeout(showFallback,7000);
})();
