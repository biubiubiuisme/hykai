const portalTabs=[...document.querySelectorAll('.portal-tab')];
const portalFrames=[...document.querySelectorAll('.portal-frame')];
const contextTitle=document.querySelector('#contextTitle');
const loading=document.querySelector('#portalLoading');
const labels={public:'客户展示',sales:'医院方案',admin:'销售管理'};
portalFrames.forEach(frame=>frame.addEventListener('load',()=>{frame.dataset.ready='1';if(frame.classList.contains('active'))loading.classList.add('hide')}));
function ensureFrame(name){
  const frame=portalFrames.find(x=>x.dataset.frame===name);
  if(frame&&!frame.src){frame.src=frame.dataset.src}
  return frame;
}
function activatePortal(name){
  portalTabs.forEach(x=>x.classList.toggle('active',x.dataset.portal===name));
  portalFrames.forEach(x=>x.classList.toggle('active',x.dataset.frame===name));
  contextTitle.textContent=labels[name];
  if(location.hash!==`#${name}`)history.replaceState(null,'',`#${name}`);
  const frame=ensureFrame(name);
  loading.classList.remove('hide');
  const done=()=>loading.classList.add('hide');
  let alreadyLoaded=frame.dataset.ready==='1';
  try{alreadyLoaded=alreadyLoaded||frame.contentDocument?.readyState==='complete'}catch{}
  if(alreadyLoaded){frame.dataset.ready='1';setTimeout(done,120)}else frame.addEventListener('load',done,{once:true});
}
portalTabs.forEach(x=>x.addEventListener('click',()=>activatePortal(x.dataset.portal)));
const initial=['public','sales','admin'].includes(location.hash.slice(1))?location.hash.slice(1):'public';
activatePortal(initial);
window.addEventListener('hashchange',()=>{const name=location.hash.slice(1);if(['public','sales','admin'].includes(name)&&!document.querySelector(`.portal-tab[data-portal="${name}"]`).classList.contains('active'))activatePortal(name)});
window.addEventListener('message',event=>{
  const data=event.data||{};
  if(data.type!=='hykai:navigate'&&!data.portal)return;
  const name=data.portal==='sales'?'sales':data.portal==='admin'?'admin':'public';
  activatePortal(name);
  const frame=ensureFrame(name);
  if(name==='sales'&&data.salesView){
    const send=()=>frame.contentWindow.postMessage({salesView:data.salesView},'*');
    if(frame.dataset.ready==='1')setTimeout(send,80);else frame.addEventListener('load',send,{once:true});
  }
});
