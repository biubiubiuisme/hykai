(function(){
var grid=document.querySelector('.pl-grid');
var cards=[].slice.call(grid.querySelectorAll('.pl-card'));
var heads={};[].forEach.call(grid.querySelectorAll('.pl-grouphead'),function(h){heads[h.dataset.group]=h});
var GORDER=['live','pilot','dev'],CORDER=['histo','cyto','qc','plat','model'];
var mode='prog';
function vis(c){return c.style.display!=='none'}
function syncHeads(){
GORDER.forEach(function(g){
var n=cards.filter(function(c){return c.dataset.group===g&&vis(c)}).length;
heads[g].style.display=(mode==='prog'&&n)?'':'none';
heads[g].querySelector('span').textContent=n+' 项';});}
function layout(){
var seq=[];
if(mode==='prog'){GORDER.forEach(function(g){seq.push(heads[g]);cards.filter(function(c){return c.dataset.group===g}).forEach(function(c){seq.push(c)})})}
else{cards.slice().sort(function(a,b){return CORDER.indexOf(a.dataset.cat)-CORDER.indexOf(b.dataset.cat)}).forEach(function(c){seq.push(c)});GORDER.forEach(function(g){seq.push(heads[g])})}
seq.forEach(function(n){grid.appendChild(n)});
syncHeads();}
document.querySelectorAll('.pl-sort').forEach(function(b){b.addEventListener('click',function(){
document.querySelectorAll('.pl-sort').forEach(function(x){x.classList.toggle('active',x===b)});
mode=b.dataset.sort;layout();});});
document.querySelectorAll('.pl-chip').forEach(function(ch){ch.addEventListener('click',function(){
document.querySelectorAll('.pl-chip').forEach(function(x){x.classList.toggle('active',x===ch)});
var c=ch.dataset.cat;
cards.forEach(function(card){card.style.display=(c==='all'||card.dataset.cat===c)?'':'none'});
syncHeads();});});
document.querySelectorAll('.pl-card').forEach(function(card){
card.addEventListener('click',function(){card.classList.toggle('open');
card.querySelector('.pl-toggle').textContent=card.classList.contains('open')?'收起详情 ▴':'展开产品详情 ▾';});});
layout();
})();
