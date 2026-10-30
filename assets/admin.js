if(new URLSearchParams(location.search).get('embed')==='1')document.body.classList.add('portal-embedded');
const regions=[
  {name:'华东',task:40,signed:20,gap:20,rate:50.0},
  {name:'华北',task:46,signed:7,gap:39,rate:15.2},
  {name:'华南三省',task:43,signed:6,gap:37,rate:14.0},
  {name:'华中',task:39,signed:5,gap:34,rate:12.8},
  {name:'华西',task:40,signed:4,gap:36,rate:10.0},
  {name:'广东经营区',task:48,signed:2,gap:46,rate:4.2}
];

const sales=[
  {name:'徐旭昶',region:'华东 / 华北',days:5,login:18,newPlan:4,update:7,demo:9,next:8,stage:4,result:'2家进入预算论证',score:86,level:'推进较快'},
  {name:'祁勇',region:'华中 / 华西',days:5,login:16,newPlan:3,update:6,demo:7,next:7,stage:3,result:'1家形成试用报告',score:75,level:'稳定推进'},
  {name:'陈宏桦',region:'华南三省',days:4,login:12,newPlan:3,update:4,demo:5,next:6,stage:2,result:'1家补齐采购节点',score:62,level:'正常推进'},
  {name:'王叶',region:'广东经营区',days:5,login:21,newPlan:5,update:5,demo:6,next:5,stage:2,result:'2家进入重点跟进',score:70,level:'正常推进'},
  {name:'温文群',region:'广东经营区',days:3,login:9,newPlan:2,update:3,demo:2,next:3,stage:1,result:'试用报告待推进',score:39,level:'需关注转化'},
  {name:'区域销售A',region:'华东',days:2,login:6,newPlan:1,update:1,demo:2,next:1,stage:0,result:'暂无阶段变化',score:18,level:'动作不足'}
];

const hospitals=[
  {name:'深圳市第三人民医院',status:'trial',statusLabel:'试用客户',owner:'范发鑫',region:'广东经营区',place:'广东 · 深圳',usage:'完成1,200例',latest:'—',result:'旧版模型结果待用新版重测',versions:3,views:6,last:'10月30日',risk:'预算沟通与撤机'},
  {name:'何贤纪念医院',status:'trial',statusLabel:'试用客户',owner:'王翊晖',region:'广东经营区',place:'广东 · 广州',usage:'已导出380片',latest:'—',result:'待补朗珈数据，预算报告中',versions:2,views:4,last:'10月30日',risk:'推进预算报告'},
  {name:'首都医科大学附属北京天坛医院',status:'trial',statusLabel:'试用客户',owner:'费立娟',region:'华北',place:'北京',usage:'—',latest:'—',result:'细胞学适配中，组织学未测试',versions:4,views:9,last:'10月30日',risk:'补齐试用进展'},
  {name:'中国人民解放军火箭军总医院',status:'trial',statusLabel:'试用客户',owner:'费立娟',region:'华北',place:'北京',usage:'—',latest:'—',result:'细胞学适配中，组织学未测试',versions:2,views:3,last:'10月30日',risk:'试用超期待处置'},
  {name:'宁夏回族自治区人民医院',status:'trial',statusLabel:'试用客户',owner:'王志成',region:'华西',place:'宁夏 · 银川',usage:'278张',latest:'—',result:'扫描仪正常使用，服务器未接入内网',versions:3,views:5,last:'10月30日',risk:'打通内网后启动AI'},
  {name:'常德市第一人民医院',status:'trial',statusLabel:'试用客户',owner:'冯青',region:'华中',place:'湖南 · 常德',usage:'—',latest:'—',result:'服务器与扫描仪已交付',versions:2,views:2,last:'10月30日',risk:'试用超期待处置'},
  {name:'古田东区医院',status:'signed',statusLabel:'签约客户',owner:'陈宏桦',region:'华南三省',place:'福建 · 古田',usage:'—',latest:'—',result:'100万 · 交付完成',versions:5,views:11,last:'9月26日',risk:'进入运营跟踪'},
  {name:'福州市中医院',status:'signed',statusLabel:'签约客户',owner:'陈宏桦',region:'华南三省',place:'福建 · 福州',usage:'—',latest:'—',result:'100万 · 交付完成',versions:4,views:8,last:'9月23日',risk:'进入运营跟踪'},
  {name:'连云港市第一人民医院',status:'signed',statusLabel:'签约客户',owner:'徐旭昶',region:'华东',place:'江苏 · 连云港',usage:'—',latest:'—',result:'30万 · 交付完成',versions:3,views:7,last:'9月21日',risk:'复核服务范围'},
  {name:'张家港第三人民医院',status:'signed',statusLabel:'签约客户',owner:'徐旭昶',region:'华东',place:'江苏 · 张家港',usage:'—',latest:'—',result:'120万 · 交付完成',versions:6,views:13,last:'9月26日',risk:'进入运营跟踪'},
  {name:'贵州医科大学附属医院',status:'signed',statusLabel:'签约客户',owner:'祁勇',region:'华西',place:'贵州 · 贵阳',usage:'—',latest:'—',result:'83万 · 交付完成',versions:4,views:10,last:'9月24日',risk:'复核周会省份口径'}
];

const events=[
  ['09-26 17:42','徐旭昶','张家港第三人民医院','更新方案','V6 · 预算配置','新增接口范围','+2'],
  ['09-26 16:10','王叶','深圳市第三人民医院','客户演示','智慧病理整体方案','有效浏览 8分12秒','+2'],
  ['09-26 14:26','祁勇','宁夏回族自治区人民医院','导出报告','试用可行性报告','PDF 已生成','+1'],
  ['09-26 11:08','陈宏桦','福州市中医院','更新节点','交付阶段','完成交付确认','+5'],
  ['09-25 18:32','温文群','何贤纪念医院','补充计划','下一步动作','推进院内采购沟通','+1'],
  ['09-25 15:04','徐旭昶','首都医科大学附属北京天坛医院','新建方案','V1 · 三甲自主建设','已保存','+3'],
  ['09-25 10:15','祁勇','贵州医科大学附属医院','客户演示','签约方案回顾','有效浏览 5分37秒','+2'],
  ['09-24 16:48','陈宏桦','古田东区医院','导出报告','交付配置清单','已打印','+1']
];

const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
function badge(level){return level.includes('不足')||level.includes('关注')?'risk':level.includes('正常')?'warn':''}
function renderRegions(){
  $('#regionBars').innerHTML=regions.map(r=>`<div class="region-row"><b>${r.name}</b><div class="bar"><i style="width:${Math.max(r.rate,1.2)}%"></i></div><span>${r.signed}/${r.task}</span><small>缺口 ${r.gap}</small></div>`).join('');
}
function renderSales(){
  $('#overviewSales').innerHTML=sales.slice(0,5).map(s=>`<tr><td class="name-cell"><b>${s.name}</b><small>最近登录：今天</small></td><td>${s.region}</td><td><span class="metric-strong">${s.days}</span> 天</td><td>${s.newPlan} 新建 / ${s.update} 更新</td><td>${s.demo} 次</td><td>${s.next} 家</td><td>${s.result}</td><td><div class="score"><b>${s.score}</b><span class="score-track"><i style="width:${s.score}%"></i></span></div></td></tr>`).join('');
  $('#salesRows').innerHTML=sales.map(s=>`<tr><td class="name-cell"><b>${s.name}</b><small>${s.days}个活跃日</small></td><td>${s.region}</td><td>${s.login}次</td><td>${s.newPlan} / ${s.update}</td><td>${s.demo}次</td><td>${s.next}家</td><td>${s.stage}项</td><td><div class="score"><b>${s.score}</b><span class="score-track"><i style="width:${s.score}%"></i></span></div></td><td><span class="pill ${badge(s.level)}">${s.level}</span></td></tr>`).join('');
}
function filteredHospitals(){
  const q=($('#hospitalSearch').value||'').trim().toLowerCase();
  const status=$('#hospitalStatus').value;
  const globalQ=($('#globalSearch').value||'').trim().toLowerCase();
  const region=$('#globalRegion').value;
  return hospitals.filter(h=>(status==='all'||h.status===status)&&(region==='all'||h.region===region)&&(!q||`${h.name}${h.owner}${h.place}`.toLowerCase().includes(q))&&(!globalQ||`${h.name}${h.owner}${h.place}`.toLowerCase().includes(globalQ)));
}
function renderHospitals(){
  const rows=filteredHospitals();
  $('#hospitalGrid').innerHTML=rows.length?rows.map((h,i)=>`<button class="hospital-card" data-hospital="${h.name}"><div class="hospital-card-head"><div><h3>${h.name}</h3><p>${h.place} · ${h.owner}</p></div><span class="pill ${h.status==='trial'?'warn':''}">${h.statusLabel}</span></div><div class="hospital-meta"><span>方案版本<b>${h.versions}</b></span><span>客户浏览<b>${h.views}</b></span><span>最近动作<b>${h.last}</b></span></div><div class="hospital-foot"><span>${h.result}</span><b>${h.risk} →</b></div></button>`).join(''):'<div class="empty">没有符合当前条件的医院。</div>';
}
function renderEvents(){
  $('#eventRows').innerHTML=events.map(e=>`<tr><td>${e[0]}</td><td class="name-cell"><b>${e[1]}</b></td><td>${e[2]}</td><td><span class="pill">${e[3]}</span></td><td>${e[4]}</td><td>${e[5]}</td><td class="metric-strong">${e[6]}</td></tr>`).join('');
}
function showScreen(name){
  $$('.screen').forEach(x=>x.classList.toggle('active',x.id===`screen-${name}`));
  $$('.side-nav button').forEach(x=>x.classList.toggle('active',x.dataset.screen===name));
  const names={overview:'经营总览',sales:'销售工作量',hospitals:'医院方案档案',events:'操作记录',settings:'统计规则'};
  $('#topTitle').textContent=names[name];window.scrollTo({top:0,behavior:'smooth'});
}
function openHospital(name){
  const h=hospitals.find(x=>x.name===name);if(!h)return;
  $('#drawerContent').innerHTML=`<div class="eyebrow">HOSPITAL TIMELINE</div><h2>${h.name}</h2><div class="drawer-sub">${h.place} · ${h.region} · 负责人 ${h.owner}</div><div class="drawer-kpis"><div><span>经营状态</span><b>${h.statusLabel}</b></div><div><span>方案版本</span><b>${h.versions}个</b></div><div><span>客户浏览</span><b>${h.views}次</b></div></div><div class="demo-flag"><i></i>方案与浏览记录为模拟数据</div><div class="timeline-list"><div class="event"><time>2026-10-30</time><b>${h.risk}</b><span>根据《智慧病理业务管理表20261030.xlsx》列入提醒。</span></div><div class="event"><time>2026-10-30</time><b>业务状态同步</b><span>${h.result}；业务表使用量记录：${h.usage}。</span></div><div class="event"><time>模拟</time><b>销售更新医院方案</b><span>版本 V${h.versions}：调整预算模块并补充下一步计划。</span></div><div class="event"><time>模拟</time><b>客户打开演示链接</b><span>浏览整体方案、建议配置和预算摘要。</span></div></div><div class="drawer-actions"><a class="primary" href="index.html" style="text-decoration:none">编辑医院方案</a><button class="secondary" id="drawerDismiss">标记已查看</button></div>`;
  $('#drawerMask').classList.add('open');
}
document.addEventListener('click',e=>{
  const nav=e.target.closest('[data-screen]');if(nav)showScreen(nav.dataset.screen);
  const jump=e.target.closest('[data-screen-jump]');if(jump)showScreen(jump.dataset.screenJump);
  const hospital=e.target.closest('[data-hospital]');if(hospital)openHospital(hospital.dataset.hospital);
  const setting=e.target.closest('[data-setting]');if(setting){
    const active=!setting.classList.contains('active');
    setting.classList.toggle('active',active);setting.setAttribute('aria-pressed',String(active));
    try{localStorage.setItem(`hykai-setting-${setting.dataset.setting}`,active?'1':'0')}catch{}
    const label=setting.getAttribute('aria-label');const notice=$('#settingsNotice');
    if(notice)notice.textContent=`${label}已${active?'启用':'关闭'}。本地原型仅保存规则选择，正式上线后由后台服务执行。`;
  }
  if(e.target.id==='drawerClose'||e.target.id==='drawerMask'||e.target.id==='drawerDismiss')$('#drawerMask').classList.remove('open');
});
$('#hospitalSearch').addEventListener('input',renderHospitals);$('#hospitalStatus').addEventListener('change',renderHospitals);$('#globalSearch').addEventListener('input',renderHospitals);$('#globalRegion').addEventListener('change',renderHospitals);
$('#explainScore').addEventListener('click',()=>{const y=$('#scoreDefinition').getBoundingClientRect().top+window.scrollY-120;window.scrollTo({top:y,behavior:'smooth'});$('#scoreDefinition').animate([{background:'#fff3d9'},{background:'#eaf4f1'}],{duration:1000})});
$$('[data-setting]').forEach(setting=>{try{const saved=localStorage.getItem(`hykai-setting-${setting.dataset.setting}`);if(saved!==null){const active=saved==='1';setting.classList.toggle('active',active);setting.setAttribute('aria-pressed',String(active))}}catch{}});
renderRegions();renderSales();renderHospitals();renderEvents();
