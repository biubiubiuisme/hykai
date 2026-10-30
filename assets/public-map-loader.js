(function(){
  let started=false;
  function load(src){return new Promise((resolve,reject)=>{const script=document.createElement('script');script.src=src;script.onload=resolve;script.onerror=reject;document.head.appendChild(script)})}
  function start(){
    if(started)return;
    started=true;
    load('assets/vendor/d3.v7.min.js?v=20261019-performance')
      .then(()=>load('assets/public-map.js?v=20261030-backendcount'))
      .catch(()=>{started=false});
  }
  const target=document.querySelector('#customers');
  if(!target||!('IntersectionObserver' in window)){start();return}
  const observer=new IntersectionObserver(entries=>{
    if(entries.some(entry=>entry.isIntersecting)){
      observer.disconnect();
      start();
    }
  },{rootMargin:'900px 0px'});
  observer.observe(target);
  if(location.hash==='#customers')start();
})();
