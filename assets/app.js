if(new URLSearchParams(location.search).get('embed')==='1')document.body.classList.add('portal-embedded');
const CATALOG_VERSION='2026-10-15';
const catalog = [
  {id:'package1',group:'智慧病理科服务套餐',name:'智慧病理科服务套餐一',model:'5年服务',unit:'套',price:100,status:'confirmed',max:1,spec:'UISCAN-240×1或英特美迪300片设备×1，另配SZ-20×1；远程平台云端调用；交付≤5个工作日；2026年内不少于15个组织学AI模块',source:'2026-10-08资料表P-001；价格100万元/5年，至少5万元/季度'},
  {id:'package2',group:'智慧病理科服务套餐',name:'智慧病理科服务套餐二',model:'5年服务',unit:'套',price:130,status:'confirmed',max:1,spec:'UISCAN-240×1或英特美迪300片设备×1，另配SZ-20×1；智慧病理一体机；iPath V1.0含12个数字病理模块；约300片/天、约6万张存储；交付≤10个工作日',source:'2026-10-08资料表P-002；价格130万元/5年，至少6.5万元/季度'},
  {id:'package3',group:'智慧病理科服务套餐',name:'智慧病理科服务套餐三',model:'5年服务',unit:'套',price:160,status:'confirmed',max:1,spec:'标准配置为高通量扫描仪2台：可选UISCAN-240×2、英特美迪300片设备×2，或两种设备各1台；智慧病理一体机；iPath V1.0含18个数字病理模块；约600片/天、约9万张存储；交付≤10个工作日',source:'2026-10-08资料表P-003；价格160万元/5年，至少8万元/季度'},
  {id:'package4',group:'智慧病理科服务套餐',name:'智慧病理科服务套餐四·本地精巧版',model:'5年服务',unit:'套',price:120,status:'confirmed',max:1,spec:'高通量扫描仪1套；一体机约300片/天并配150片/天小盒子；约7.2万张数字切片存储；组织学AI含胃、结直肠、食管，细胞学AI含宫颈液基和甲状腺，免疫组化AI含Ki-67、ER、PR、PD-L1、HER-2',source:'《华银康数智病理系统清单及产品设计20261015》产品设计汇总；120万元/5年，24万元/年'},
  {id:'scan240',group:'数字化采集设备',name:'240片全自动数字病理切片扫描仪',model:'UISCAN-240',unit:'台',price:50,status:'reference',image:'assets/materials/image4.png',spec:'单次加载240片，可扩展至480片；20×≤0.24μm/pixel、40×≤0.12μm/pixel；15×15mm区域扫描20×≤35秒、40×≤50秒；设备使用年限≥10年',source:'技术参数来自2026-10-08资料表P-004；50万元为2026-01-15医院自建比较价，不是单机销售报价'},
  {id:'scan300',group:'数字化采集设备',name:'300片数字病理切片扫描仪',model:'英特美迪组合式设备（正式型号待确认）',unit:'台',price:0,status:'pending',image:'assets/materials/image15.jpeg',spec:'扫描主机+高通量传输系统；单次加载1—300片；20×≤0.24μm/pixel、40×≤0.12μm/pixel；20×≤45秒、40×≤60秒；TRON格式并提供SDK',source:'2026-10-08资料表新增设备；正式型号、生产企业与单机预算价待确认'},
  {id:'scan20',group:'数字化采集设备',name:'20片数字病理切片扫描仪',model:'SZ-20',unit:'台',price:20,status:'reference',image:'assets/materials/image23.png',spec:'装载20片；Sony 1200万像素CMOS；20×0.344μm/pixel、40×0.172μm/pixel；15×15mm区域20×≤75秒、40×≤120秒',source:'技术参数来自2026-10-08资料表P-005；20万元为2026-01-15医院自建比较价，不是单机销售报价'},
  {id:'workflow_module',group:'软件与协同系统',name:'病理全流程信息管理系统功能模块',model:'共18个功能模块',unit:'模块',price:5,status:'confirmed',max:18,spec:'覆盖临床申请、报告存档和科室管理等全流程；按实际选用模块数量计价，不包含AI辅助分析和结构化报告系统',source:'《华银康数智病理系统清单及产品设计20261015》系统清单；5万元/模块，最多18个模块'},
  {id:'remote_module',group:'软件与协同系统',name:'远程病理诊断系统功能模块',model:'共9个功能模块',unit:'模块',price:5,status:'confirmed',max:9,image:'assets/materials/image1.png',spec:'覆盖标本送检至公共管理的远程病理业务；按实际选用模块数量计价',source:'《华银康数智病理系统清单及产品设计20261015》系统清单；5万元/模块，最多9个模块'},
  {id:'structured',group:'软件与协同系统',name:'病理结构化报告系统基础平台',model:'38个专业级疾病诊断模板可选',unit:'套',price:15,status:'confirmed',max:1,image:'assets/materials/structured-report-overview.svg',spec:'基础平台费15万元；诊断模板另按实际选用数量计价',source:'《华银康数智病理系统清单及产品设计20261015》系统清单；计价公式15万元+5万元×模板数N'},
  {id:'structured_template',group:'软件与协同系统',name:'病理结构化报告诊断模板',model:'共38个专业级疾病诊断模板',unit:'模板',price:5,status:'confirmed',max:38,spec:'与结构化报告系统基础平台配套使用，按实际选用模板数量计价',source:'《华银康数智病理系统清单及产品设计20261015》系统清单；5万元/模板'},
  {id:'structured_data',group:'软件与协同系统',name:'病理结构化数据平台',model:'结构化系统配套模块',unit:'套',price:5,status:'confirmed',max:1,spec:'与病理结构化报告系统配套使用，用于结构化数据汇总与应用',source:'《华银康数智病理系统清单及产品设计20261015》系统清单；加价5万元'},
  {id:'structured_analysis',group:'软件与协同系统',name:'病理医生诊断情况分析中心',model:'结构化系统配套模块',unit:'套',price:5,status:'confirmed',max:1,spec:'与病理结构化报告系统配套使用，用于诊断情况分析',source:'《华银康数智病理系统清单及产品设计20261015》系统清单；加价5万元'},
  {id:'teaching_local',group:'软件与协同系统',name:'智慧病理教学平台·本地部署',model:'9大功能中心',unit:'套',price:80,status:'confirmed',max:1,spec:'本科生教学和规培教学平台，含教学、模拟诊断、AI、切片、题库、考试、视频、资讯、系统管理9大功能中心；不含教学内容资源',source:'《华银康数智病理系统清单及产品设计20261015》系统清单；80万元，不含内容'},
  {id:'teaching_cloud',group:'软件与协同系统',name:'智慧病理教学平台·云端基础版',model:'30人以内，不含资源',unit:'年',price:10,status:'confirmed',max:1,spec:'云端教学平台年度使用费，包含不超过30名用户，不含教学内容资源',source:'《华银康数智病理系统清单及产品设计20261015》系统清单；10万元/年，30人以内'},
  {id:'teaching_seat',group:'软件与协同系统',name:'智慧病理教学平台·超额用户',model:'超过30人的增量用户',unit:'人/年',price:.1,status:'confirmed',spec:'仅与云端教学平台配套使用；填写超过30人的人数，不填写总人数',source:'《华银康数智病理系统清单及产品设计20261015》系统清单；每增加1人增加0.1万元/人/年'},
  {id:'ai_gastric',group:'AI辅助诊断模块',name:'胃活检AI辅助诊断',model:'组织学AI · 有证',unit:'模型',price:20,status:'confirmed',max:1,certified:true,image:'assets/materials/image10.png',spec:'胃黏膜活检HE标本；具体版本、适用范围和性能指标以现行注册证及说明书为准',source:'《华银康数智病理系统清单及产品设计20261015》系统清单；建议市场报价20万元/模型，报价含服务器'},
  {id:'ai_colon',group:'AI辅助诊断模块',name:'结直肠活检AI辅助诊断',model:'组织学AI · 有证',unit:'模型',price:20,status:'confirmed',max:1,certified:true,image:'assets/materials/image8.png',spec:'结直肠黏膜活检HE标本；具体版本、适用范围和性能指标以现行注册证及说明书为准',source:'《华银康数智病理系统清单及产品设计20261015》系统清单；建议市场报价20万元/模型，报价含服务器'},
  {id:'ai_esophagus',group:'AI辅助诊断模块',name:'食管活检AI辅助诊断',model:'组织学AI · 有证',unit:'模型',price:20,status:'confirmed',max:1,certified:true,image:'assets/materials/image9.png',spec:'食管黏膜活检HE标本；具体版本、适用范围和性能指标以现行注册证及说明书为准',source:'《华银康数智病理系统清单及产品设计20261015》系统清单；建议市场报价20万元/模型，报价含服务器'},
  {id:'ai_prostate',group:'AI辅助诊断模块',name:'前列腺组织AI',model:'组织学AI · 未取得注册证',unit:'模型',price:20,status:'confirmed',max:1,certified:false,image:'assets/materials/image13.png',spec:'前列腺穿刺或电切HE标本；当前仅用于科研或院内验证，不得作为已注册临床产品承诺',source:'《华银康数智病理系统清单及产品设计20261015》系统清单；建议市场报价20万元/模型，报价含服务器'},
  {id:'ai_lung',group:'AI辅助诊断模块',name:'肺组织AI',model:'组织学AI · 未取得注册证',unit:'模型',price:20,status:'confirmed',max:1,certified:false,image:'assets/materials/image11.png',spec:'肺组织HE标本；当前仅用于科研或院内验证，不得作为已注册临床产品承诺',source:'《华银康数智病理系统清单及产品设计20261015》系统清单；建议市场报价20万元/模型，报价含服务器'},
  {id:'ai_breast',group:'AI辅助诊断模块',name:'乳腺穿刺活检AI',model:'组织学AI · 未取得注册证',unit:'模型',price:20,status:'confirmed',max:1,certified:false,image:'assets/materials/image12.png',spec:'乳腺穿刺活检HE标本；当前仅用于科研或院内验证，不得作为已注册临床产品承诺',source:'《华银康数智病理系统清单及产品设计20261015》系统清单；建议市场报价20万元/模型，报价含服务器'},
  {id:'ai_bladder',group:'AI辅助诊断模块',name:'膀胱组织AI',model:'组织学AI · 未取得注册证',unit:'模型',price:20,status:'confirmed',max:1,certified:false,image:'assets/materials/image19.png',spec:'膀胱组织HE标本；当前仅用于科研或院内验证，不得作为已注册临床产品承诺',source:'《华银康数智病理系统清单及产品设计20261015》系统清单；建议市场报价20万元/模型，报价含服务器'},
  {id:'ai_cervix_biopsy',group:'AI辅助诊断模块',name:'宫颈组织AI',model:'组织学AI · 未取得注册证',unit:'模型',price:20,status:'confirmed',max:1,certified:false,image:'assets/materials/image18.png',spec:'宫颈活检HE标本；当前仅用于科研或院内验证，不得作为已注册临床产品承诺',source:'《华银康数智病理系统清单及产品设计20261015》系统清单；建议市场报价20万元/模型，报价含服务器'},
  {id:'ai_endometrium',group:'AI辅助诊断模块',name:'子宫内膜组织AI',model:'组织学AI · 未取得注册证',unit:'模型',price:20,status:'confirmed',max:1,certified:false,image:'assets/materials/image17.png',spec:'子宫内膜活检HE标本；当前仅用于科研或院内验证，不得作为已注册临床产品承诺',source:'《华银康数智病理系统清单及产品设计20261015》系统清单；建议市场报价20万元/模型，报价含服务器'},
  {id:'ai_ovary',group:'AI辅助诊断模块',name:'卵巢组织AI',model:'组织学AI · 未取得注册证',unit:'模型',price:20,status:'confirmed',max:1,certified:false,image:'assets/materials/image14.png',spec:'卵巢组织HE标本；当前仅用于科研或院内验证，不得作为已注册临床产品承诺',source:'《华银康数智病理系统清单及产品设计20261015》系统清单；建议市场报价20万元/模型，报价含服务器'},
  {id:'ai_cervical',group:'AI辅助诊断模块',name:'宫颈液基细胞AI',model:'细胞学AI · 有证',unit:'模型',price:20,status:'confirmed',max:1,certified:true,image:'assets/materials/image20.png',spec:'宫颈液基细胞学标本；不支持HE染色，最终结果由病理医生复核并签发',source:'《华银康数智病理系统清单及产品设计20261015》系统清单；建议市场报价20万元/模型，报价含服务器'},
  {id:'ai_thyroid_cyto',group:'AI辅助诊断模块',name:'甲状腺细胞AI',model:'细胞学AI · 有证',unit:'模型',price:20,status:'confirmed',max:1,certified:true,spec:'甲状腺细胞学标本；具体适用范围和性能指标以现行注册证及说明书为准',source:'《华银康数智病理系统清单及产品设计20261015》系统清单；建议市场报价20万元/模型，报价含服务器'},
  {id:'ai_effusion_cyto',group:'AI辅助诊断模块',name:'胸腹水细胞AI',model:'细胞学AI · 未取得注册证',unit:'模型',price:20,status:'confirmed',max:1,certified:false,spec:'胸水、腹水细胞学标本；当前仅用于科研或院内验证，不得作为已注册临床产品承诺',source:'《华银康数智病理系统清单及产品设计20261015》系统清单；建议市场报价20万元/模型，报价含服务器'},
  {id:'ai_respiratory_cyto',group:'AI辅助诊断模块',name:'呼吸道细胞AI',model:'细胞学AI · 未取得注册证',unit:'模型',price:20,status:'confirmed',max:1,certified:false,spec:'呼吸道细胞学标本；当前仅用于科研或院内验证，不得作为已注册临床产品承诺',source:'《华银康数智病理系统清单及产品设计20261015》系统清单；建议市场报价20万元/模型，报价含服务器'},
  {id:'ai_urine_cyto',group:'AI辅助诊断模块',name:'尿液细胞AI',model:'细胞学AI · 未取得注册证',unit:'模型',price:20,status:'confirmed',max:1,certified:false,spec:'尿液细胞学标本；当前仅用于科研或院内验证，不得作为已注册临床产品承诺',source:'《华银康数智病理系统清单及产品设计20261015》系统清单；建议市场报价20万元/模型，报价含服务器'},
  {id:'ai_ihc5',group:'AI辅助诊断模块',name:'免疫组化AI五项组合',model:'Ki-67、ER、PR、PD-L1、HER-2 · 有证',unit:'组',price:20,status:'confirmed',max:1,certified:true,spec:'包含5个免疫组化AI项目；如后续增配新的5项组合，每增加5项增加20万元',source:'《华银康数智病理系统清单及产品设计20261015》系统清单；20万元/5个项目，报价含服务器'},
  {id:'he_screen',group:'质量控制模块',name:'HE切片初筛',model:'未取得注册证',unit:'套',price:20,status:'confirmed',max:1,certified:false,spec:'用于HE切片初步筛查；当前仅用于科研或院内验证，不得作为已注册临床产品承诺',source:'《华银康数智病理系统清单及产品设计20261015》系统清单；建议市场报价20万元，报价含服务器'},
  {id:'he_stain_qc',group:'质量控制模块',name:'HE染色质控AI',model:'未取得注册证',unit:'套',price:20,status:'confirmed',max:1,certified:false,spec:'用于HE染色质量控制；当前仅用于科研或院内验证，不得作为已注册临床产品承诺',source:'《华银康数智病理系统清单及产品设计20261015》系统清单；建议市场报价20万元'},
  {id:'he_qc_platform',group:'质量控制模块',name:'病理质控平台',model:'未取得注册证',unit:'套',price:20,status:'confirmed',max:1,certified:false,image:'assets/materials/image22.png',spec:'用于病理质量控制管理；具体功能范围和交付边界以项目清单为准',source:'《华银康数智病理系统清单及产品设计20261015》系统清单；建议市场报价20万元'},
  {id:'server25',group:'算力与存储',name:'基础服务器与存储',model:'约300片/日',unit:'套',price:25,status:'reference',spec:'历史参考档；最终CPU/GPU、内存、保存年限和并发量需按项目重新核算',source:'2026-01-15套餐解析历史参考价25万元'},
  {id:'server50',group:'算力与存储',name:'增强服务器与存储',model:'约600片/日',unit:'套',price:50,status:'reference',spec:'历史参考档；最终配置按推理任务、数据保存策略和灾备要求核算',source:'2026-01-15套餐解析历史参考价50万元'},
  {id:'server100',group:'算力与存储',name:'区域中心服务器与存储',model:'多院区/高并发',unit:'套',price:100,status:'reference',spec:'历史参考档；需进一步核定主存储、备份、归档、网络与容灾方案',source:'2026-01-15套餐解析历史参考价100万元'},
  {id:'huawei130',group:'算力与存储',name:'国产算力智慧病理基座',model:'渠道专属本地领航版',unit:'套',price:130,status:'reference',max:1,spec:'2×鲲鹏920（48核）；4×昇腾Atlas 300I A2 64G；内存512GB；系统盘960GB；硬盘32TB；一次性购买参考区间130—150万元，当前默认按区间下限测算',source:'《华银康数智病理系统清单及产品设计20261015》产品设计汇总；130—150万元，后续年度维护费为成交价的10%'},
  {id:'huawei_maintenance',group:'实施与配套服务',name:'国产算力领航版年度维护',model:'购买后年度维护',unit:'年',price:13,status:'reference',max:4,spec:'按设备成交价的10%/年计取；当前以130万元下限对应13万元/年测算，成交价调整后应同步调整本项单价',source:'《华银康数智病理系统清单及产品设计20261015》产品设计汇总；之后每年收取成交价10%维护费'},
  {id:'interface',group:'实施与配套服务',name:'HIS/LIS/PACS接口开发',model:'按接口工作量',unit:'项',price:0,status:'pending',spec:'接口数量、厂商配合、历史数据结构和测试周期均会影响费用',source:'待现场调研后确认'},
  {id:'network',group:'实施与配套服务',name:'院内网络与机房改造',model:'按现场条件',unit:'项',price:0,status:'pending',spec:'包括带宽、交换设备、机柜、供电、等保与安全策略等可能工作',source:'待现场调研后确认'},
  {id:'migration',group:'实施与配套服务',name:'历史数据迁移与治理',model:'按数据量',unit:'项',price:0,status:'pending',spec:'需评估历史数据规模、格式、完整性和迁移窗口',source:'待数据摸底后确认'},
  {id:'training',group:'实施与配套服务',name:'部署、培训与试运行支持',model:'项目交付',unit:'项',price:0,status:'pending',spec:'含项目实施、人员培训和试运行支持；是否计费及范围以商务方案为准',source:'独立采购价格待确认'}
];

const presets={
  package1:{package1:1},
  package2:{package2:1},
  package3:{package3:1},
  package4:{package4:1},
  baseline:{scan240:1,scan20:1,workflow_module:12,structured:1,structured_template:2,ai_gastric:1,ai_colon:1,ai_esophagus:1,ai_cervical:1,interface:1,training:1},
  regional:{scan300:2,scan20:1,workflow_module:18,remote_module:9,structured:1,structured_template:8,ai_gastric:1,ai_colon:1,ai_esophagus:1,ai_cervical:1,ai_lung:1,ai_breast:1,ai_prostate:1,interface:1,network:1,migration:1,training:1},
  pilot:{huawei130:1,huawei_maintenance:4,scan240:1,workflow_module:12,structured:1,interface:1,network:1,training:1},
  custom:{}
};

const BUDGET_OVERAGE_LIMIT=.10;
function budgetPositionText(total,cap){if(!cap)return'院方尚未设置预算上限';if(total<=cap)return`当前测算控制在${money(cap)}万元预算内，预算余量${money(cap-total)}万元`;const rate=(total-cap)/cap*100;return total<=cap*(1+BUDGET_OVERAGE_LIMIT)?`当前测算比${money(cap)}万元预算上限高${money(total-cap)}万元（${money(rate)}%），属于可讨论的10%浮动范围`:`当前测算比${money(cap)}万元预算上限高${money(total-cap)}万元（${money(rate)}%），应调整配置、拆分建设阶段或重新确认预算`}
function suggestedTotalForSelection(selection){
  const items=catalog.filter(item=>normalizeQty(item.id,selection[item.id])>0).map(item=>{const qty=normalizeQty(item.id,selection[item.id]);return{...item,qty,currentPrice:Number(state.prices[item.id]||0),subtotal:qty*Number(state.prices[item.id]||0)}}),subtotal=items.reduce((sum,item)=>sum+item.subtotal,0),confirmed=items.filter(item=>item.status!=='pending'&&item.subtotal>0&&item.group!=='智慧病理科服务套餐');
  const aiUnits=[];confirmed.filter(item=>item.group==='AI辅助诊断模块').forEach(item=>{for(let index=0;index<item.qty;index++)aiUnits.push(item.currentPrice)});aiUnits.sort((a,b)=>a-b);const aiDiscount=aiUnits.slice(0,Math.floor(aiUnits.length/3)).reduce((sum,price)=>sum+price,0),nonAi=confirmed.filter(item=>item.group!=='AI辅助诊断模块'),nonAiUnits=nonAi.reduce((sum,item)=>sum+item.qty,0),comboRate=nonAiUnits>=10?.08:nonAiUnits>=6?.05:nonAiUnits>=3?.03:0,comboDiscount=nonAi.reduce((sum,item)=>sum+item.subtotal,0)*comboRate,discount=Math.min(aiDiscount+comboDiscount,subtotal*.10);
  return Math.max(0,subtotal-discount);
}
function budgetPlanForPreset(presetName){
  const cap=projectRecord().cap,selection={...(presets[presetName]||presets.baseline)},fullTotal=suggestedTotalForSelection(selection),ceiling=cap>0?cap*(1+BUDGET_OVERAGE_LIMIT):Infinity,changes=[];
  if(cap<=0)return{selection,cap,ceiling,fullTotal,total:fullTotal,status:'unlimited',changes,overRate:0};
  const remove=(id,label)=>{if(!selection[id])return false;delete selection[id];changes.push(label);return true},setQty=(id,qty,label)=>{if(!selection[id]||selection[id]<=qty)return false;selection[id]=qty;changes.push(label);return true};
  const steps=[
    ()=>remove('scan20','备用20片扫描仪调整为后续扩展'),
    ()=>setQty('scan300',1,'第二台高通量扫描仪调整为二期建设'),
    ()=>remove('ai_prostate','前列腺AI调整为后续扩展'),
    ()=>remove('ai_breast','乳腺AI调整为后续扩展'),
    ()=>remove('ai_lung','肺AI调整为后续扩展'),
    ()=>remove('ai_cervical','宫颈液基细胞AI调整为后续扩展'),
    ()=>remove('ai_esophagus','食管AI调整为后续扩展'),
    ()=>remove('structured_template','结构化诊断模板调整为二期建设'),
    ()=>remove('structured_analysis','诊断分析中心调整为二期建设'),
    ()=>remove('structured_data','结构化数据平台调整为二期建设'),
    ()=>remove('structured','结构化报告平台调整为二期建设'),
    ()=>setQty('remote_module',6,'远程病理系统先建设6个核心模块'),
    ()=>setQty('remote_module',3,'远程病理系统先建设3个核心模块'),
    ()=>remove('remote_module','远程病理系统调整为二期建设'),
    ()=>setQty('workflow_module',12,'全流程系统先建设12个核心模块'),
    ()=>setQty('workflow_module',8,'全流程系统先建设8个核心模块'),
    ()=>setQty('workflow_module',6,'全流程系统先建设6个核心模块'),
    ()=>projectRecord().currentScanner?(remove('scan240','沿用院方现有扫描仪并完成兼容性核验')||remove('scan300','沿用院方现有扫描仪并完成兼容性核验')):false,
    ()=>remove('ai_colon','结直肠AI调整为后续扩展')
  ];
  let total=fullTotal;for(const step of steps){if(total<=ceiling)break;if(step())total=suggestedTotalForSelection(selection)}
  const overRate=cap>0?(total-cap)/cap:0,status=total<=cap?'within':total<=ceiling?'soft-over':'phased';return{selection,cap,ceiling,fullTotal,total,status,changes,overRate};
}

const maturityQuestions=[
  {d:'采集能力',q:'日常玻片是否已具备稳定数字化采集能力？',h:'关注通量、高峰产能、重扫率与备机。'},
  {d:'采集能力',q:'切片质控与扫描质控是否已形成标准？',h:'关注清晰度、伪影、完整性和色彩还原。'},
  {d:'系统数据',q:'病理流程是否已经信息化并可追溯？',h:'关注标本、制片、诊断、报告、归档全流程。'},
  {d:'系统数据',q:'HIS/LIS/PACS接口和数据治理责任是否明确？',h:'关注接口清单、历史数据、存储与备份。'},
  {d:'AI应用',q:'是否已选定具体病种和可量化的AI使用目标？',h:'关注病例量、漏诊风险、报告时效和人员缺口。'},
  {d:'AI应用',q:'AI验证、医生复核和版本管理机制是否建立？',h:'关注本地验证、偏差处置、审计记录与再验证。'},
  {d:'组织流程',q:'是否有跨病理科、信息科、设备科的项目负责机制？',h:'关注决策人、牵头科室、责任人与问题升级机制。'},
  {d:'组织流程',q:'是否已建立人员培训、上岗和持续优化机制？',h:'关注不同角色的能力要求、培训记录和使用采纳。'},
  {d:'服务运营',q:'是否有明确的上线、试运行和验收里程碑？',h:'关注部署、90天试运行、全面启用与持续运营。'},
  {d:'服务运营',q:'是否持续跟踪质量、时效、成本和使用采纳指标？',h:'关注能否用同一套指标证明项目价值。'}
];
const evidenceItems=[
  {id:'policy',name:'国家医保局病理类价格项目立项指南',note:'政策与立项依据',ready:true},
  {id:'package',name:'三大智慧病理科服务套餐解析',note:'服务内容与投入对照',ready:true},
  {id:'licenses',name:'本项目对应产品注册证与说明书',note:'产品合规边界',ready:false},
  {id:'case',name:'已授权的标杆医院建设案例',note:'建设前后可验证数据',ready:false},
  {id:'validation',name:'院内本地临床验证方案与报告',note:'样本、指标、偏差与复核流程',ready:false},
  {id:'acceptance',name:'交付验收指标、SLA与运营月报样例',note:'项目交付与持续运营',ready:false}
];

const reportTemplates={
  comprehensive:{label:'综合可行性报告',badge:'综合论证',source:'参考何贤纪念医院与东莞市厚街医院报告结构',fit:'适合套餐二、套餐三或设备、系统、AI、服务组合建设',kicker:'智慧病理建设项目可行性论证',title:p=>`${p.hospital}${p.name}<br>可行性报告（初稿）`,subtitle:'智慧病理科建设方案',headings:['一、项目背景与医院现状','二、项目建设必要性与现状差距','三、项目建设目标','四、项目建设方案'],goals:[['01 数字化采集','匹配日常工作量与峰值产能'],['02 全流程管理','覆盖标本、制片、诊断与归档'],['03 AI 辅助诊断','优先部署高频病种与成熟模型'],['04 数据安全','满足院内本地部署与权限审计']],architecture:[['采集层','数字切片扫描设备'],['平台层','全流程与远程协同'],['智能层','AI 辅助诊断模块'],['保障层','算力、存储与实施服务']],necessity:'医院需要根据日均切片量、人员配置、现有系统和实际需求，补充数字化采集、流程追溯、AI验证、数据安全和日常运维能力。'},
  platform:{label:'智慧病理诊断平台立项申请',badge:'院内申请',source:'参考2026年3月两份平台建设申请',fit:'适合套餐一或以数字切片、远程协同、组织学AI为主的项目',kicker:'智慧病理诊断平台立项申请',title:p=>`${p.hospital}<br>关于建设智慧病理诊断平台的申请（初稿）`,subtitle:'用于院内立项和预算申报',headings:['一、政策依据与项目现状','二、项目建设必要性','三、项目建设目标','四、主要建设内容'],goals:[['01 玻片数字化','满足数字阅片、上传与长期调阅'],['02 AI辅助诊断','选择高频病种开展本地验证'],['03 报告标准化','使用结构化报告保存可用数据'],['04 远程协同','支持疑难会诊与多学科协作']],architecture:[['采集端','数字切片扫描'],['诊断端','阅片与AI辅助'],['报告端','结构化报告'],['服务端','远程协同与培训']],necessity:'平台建设主要解决诊断效率、质量一致性、人员不足和跨院会诊等问题。院方尚未确认的病例量、切片量、人员负荷和报告时效继续保留为“待确认”，不得使用案例中的数字代替。'},
  digital:{label:'数智化病理科整体建设申请',badge:'整体建设',source:'参考2026年4月数智化病理科建设申请',fit:'适合套餐三、高通量扫描或病理科整体升级项目',kicker:'数智化病理科整体建设申请',title:p=>`${p.hospital}<br>数智化病理科建设申请（初稿）`,subtitle:'包括采集、流程、诊断、质控、存储和服务',headings:['一、项目背景与建设必要性','二、医院现状与建设条件','三、项目建设目标','四、主要建设内容'],goals:[['01 全量采集','按日均与峰值业务量配置产能'],['02 流程质控','记录标本到报告的各个环节'],['03 智能诊断','将AI验证与医生复核纳入流程'],['04 数据管理','支持院内存储、协作和科研使用']],architecture:[['业务层','标本与制片流程'],['数字层','扫描与切片管理'],['智能层','AI与结构化报告'],['运营层','质控、存储与日常服务']],necessity:'病理科整体建设需要同时考虑扫描产能、流程记录、AI临床验证、数据存储和日常运维。模板中的效率提升比例、减收金额和科研成果预测不能直接使用，必须由院方台账和正式政策文件支持。'},
  workflow:{label:'病理全流程系统立项申请',badge:'系统专项',source:'参考峨眉山市人民医院全流程系统立项申请',fit:'适合单独建设病理全流程信息管理系统，不包含设备或AI打包承诺',kicker:'病理信息化专项立项申请',title:p=>`${p.hospital}<br>病理全流程信息管理系统立项申请（初稿）`,subtitle:'用于流程记录、质量控制、统计和系统对接',headings:['一、项目背景与现有问题','二、项目建设必要性','三、项目建设目标','四、系统建设内容'],goals:[['01 流程记录','覆盖登记、取材、制片、诊断和归档'],['02 质量追溯','建立节点预警与责任追踪'],['03 运营统计','统计工作量、时效与质量指标'],['04 系统对接','对接HIS及院内相关信息系统']],architecture:[['业务入口','申请与登记'],['生产流程','取材与技术'],['诊断报告','阅片、审核与发布'],['管理保障','质控、档案、统计与接口']],necessity:'全流程系统项目要先明确科室现有流程问题、质控指标、接口范围和历史数据迁移要求。数字切片、AI和结构化报告只有在本期明确采购时才写入建设范围。'}
};

const reportTemplateCases=[
  {id:'comprehensive',name:'综合可行性报告',cases:'何贤纪念医院、东莞市厚街医院',use:'适用于多模块建设、套餐二/三及完整投资效益论证'},
  {id:'platform',name:'智慧病理诊断平台立项申请',cases:'2026年3月两份平台建设申请',use:'适用于100万元套餐或平台类院内申请'},
  {id:'digital',name:'数智化病理科整体建设申请',cases:'2026年4月数智化病理科建设申请',use:'适用于160万元套餐或高通量整体建设'},
  {id:'workflow',name:'病理全流程系统立项申请',cases:'峨眉山市人民医院立项申请',use:'适用于全流程系统单项采购与信息化升级'}
];

const state={selected:{},prices:{},quoteMode:'combination',discountMode:'suggested',customDiscountRate:12,clientMode:false,assessmentMode:'quick',reportTemplate:'auto',answers:Array(10).fill(null),evidence:{policy:true,package:true},scenario:'base',roiSources:{revenue:'待确认',referral:'待确认',labor:'待确认',infra:'待确认',annualCost:'待确认',growth:'待确认'},recommendation:{systemPath:'baseline',selectedPath:'baseline',confirmed:false,overrideReason:''}};
catalog.forEach(x=>state.prices[x.id]=x.price);
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const money=n=>Number(n||0).toLocaleString('zh-CN',{maximumFractionDigits:2});
const today=new Date();
const priceMeta=x=>x.status==='confirmed'?{label:'当前参考价',css:'status-confirmed'}:x.status==='reference'?{label:'历史比较价',css:'status-reference'}:{label:'价格待确认',css:'status-pending'};
const catalogItem=id=>catalog.find(x=>x.id===id);
const normalizeQty=(id,value)=>{const item=catalogItem(id),qty=Math.max(0,Math.floor(Number(value||0)));return item&&Number.isFinite(item.max)?Math.min(item.max,qty):qty};

function recommendedReportTemplate(){
  const ids=Object.entries(state.selected).filter(([,qty])=>Number(qty)>0).map(([id])=>id),packages=ids.filter(id=>id.startsWith('package'));
  if(ids.includes('workflow_module')&&!packages.length&&ids.every(id=>['workflow_module','structured','structured_template','structured_data','structured_analysis','interface'].includes(id)))return'workflow';
  if(ids.includes('package1'))return'platform';
  if(ids.includes('package3')||ids.includes('package4'))return'digital';
  return'comprehensive';
}
function activeReportTemplate(){return state.reportTemplate==='auto'?recommendedReportTemplate():state.reportTemplate}
function renderReportTemplateLibrary(){
  if(!$('#templateCaseGrid'))return;
  const active=activeReportTemplate();
  $('#reportTemplate').value=state.reportTemplate;
  $('#templateCaseGrid').innerHTML=reportTemplateCases.map(x=>`<button type="button" class="template-case ${x.id===active?'active':''}" data-report-template="${x.id}"><span>${reportTemplates[x.id].badge}</span><b>${x.name}</b><small>${x.cases}</small><em>${x.use}</em></button>`).join('');
  const tpl=reportTemplates[active];$('#templateAdviceTitle').textContent=`当前采用：${tpl.label}`;$('#templateAdviceText').textContent=`${tpl.fit}。${tpl.source}；只继承结构，不继承案例数字与未经核验的承诺。`;
}
function architectureMarkup(items){return items.map((x,i)=>`${i?'<i>→</i>':''}<div><span>${x[0]}</span><b>${x[1]}</b></div>`).join('')}
function goalMarkup(items){return items.map(x=>`<div><b>${x[0]}</b><span>${x[1]}</span></div>`).join('')}

function showView(name){$$('.view').forEach(v=>v.classList.toggle('active',v.id===`view-${name}`));$$('.nav-item').forEach(n=>n.classList.toggle('active',n.dataset.view===name));window.scrollTo({top:0,behavior:'smooth'});if(name==='project')updateProjectDashboard();if(name==='assessment')updateAssessment();if(name==='recommendation')renderRecommendation();if(name==='value')updateAssessment();if(name==='report')renderReport();}
function toast(msg){const el=$('#toast');el.textContent=msg;el.classList.add('show');setTimeout(()=>el.classList.remove('show'),2200)}

function renderAssessmentInputs(){
  $('#assessmentQuestions').innerHTML=maturityQuestions.map((x,i)=>`<article class="assessment-question ${i%2===1?'full-only':''} ${state.assessmentMode==='quick'&&i%2===1?'hidden':''}"><div class="assessment-question-head"><span>${String(i+1).padStart(2,'0')} · ${x.d}</span><div><h3>${x.q}</h3><p>${x.h}</p></div></div><div class="assessment-seg">${['尚未具备','部分具备','已稳定运行'].map((label,value)=>`<label><input type="radio" name="maturity${i}" value="${value}" ${state.answers[i]===value?'checked':''}>${label}</label>`).join('')}</div></article>`).join('');
  $('#evidenceChecks').innerHTML=evidenceItems.map(x=>`<label class="evidence-check"><input type="checkbox" data-evidence="${x.id}" ${state.evidence[x.id]?'checked':''}><span><b>${x.name}</b><span>${x.note}</span></span></label>`).join('');
}
function maturityResult(){
  const answered=state.answers.filter(x=>x!==null&&x!==undefined).length;
  const score=answered?Math.round(state.answers.reduce((sum,x)=>sum+(x===null||x===undefined?0:Number(x)),0)/(answered*2)*100):0;
  const dimensions={};maturityQuestions.forEach((q,i)=>{if(!dimensions[q.d])dimensions[q.d]={sum:0,count:0};if(state.answers[i]!==null&&state.answers[i]!==undefined){dimensions[q.d].sum+=Number(state.answers[i]);dimensions[q.d].count++}});
  Object.keys(dimensions).forEach(k=>dimensions[k]=dimensions[k].count?Math.round(dimensions[k].sum/(dimensions[k].count*2)*100):0);
  let level={n:1,title:'现有基础较弱',text:'建议先盘点设备、网络、存储、工作流程和质控情况，再确定是否配置AI模块。',steps:['完成现场勘查和业务量统计','明确扫描、网络和存储方案','选择一个常用病种开展试用']};
  if(score>=75)level={n:4,title:'现有基础较完整',text:'现有设备和系统基础较好，可以进一步考虑多院区协作、科研数据管理和长期使用指标。',steps:['明确多院区数据和模型管理办法','按月统计质量、时效、成本和实际使用情况','划分科研数据与临床数据的使用范围']};
  else if(score>=50)level={n:3,title:'已具备基本条件',text:'数字化基础已经具备，下一步要明确本地验证、医生复核、版本更新和日常使用要求。',steps:['根据病例量和临床需求确定AI使用顺序','建立本地验证和版本更新后的复核办法','通过90天试运行记录院内实际数据']};
  else if(score>=25)level={n:2,title:'已有部分基础',text:'医院已有部分设备或系统，建议先处理接口、流程记录和质控统计问题。',steps:['梳理HIS、LIS、PACS接口和历史数据','明确切片到报告各环节的质控指标','确定参与部门、负责人和验收时间']};
  return{answered,score,dimensions,level};
}
function roiResult(){
  const factor=state.scenario==='conservative'?.7:state.scenario==='positive'?1.3:1;
  const invest=totals().total,annual=Math.max(0,(Number($('#roiRevenue').value||0)+Number($('#roiReferral').value||0)+Number($('#roiLabor').value||0)+Number($('#roiInfra').value||0))*factor-Number($('#roiAnnualCost').value||0)),growth=Math.max(0,Number($('#roiGrowth').value||0))/100;
  let benefit=0,payback=null;for(let year=1;year<=5;year++){const y=annual*Math.pow(1+growth,year-1);benefit+=y;if(payback===null&&invest>0&&benefit>=invest&&y>0)payback=year-1+(invest-(benefit-y))/y}
  return{invest,benefit,net:benefit-invest,roi:invest>0?(benefit-invest)/invest*100:0,payback,annual,growth,factor};
}
function scenarioResult(name){const old=state.scenario;state.scenario=name;const result=roiResult();state.scenario=old;return result}
function syncProjectFileToAll(){
  $('#hospitalName').value=$('#projectHospital').value;$('#projectName').value=$('#projectTitle').value;$('#projectType').value=$('#projectScene').value;$('#dailySlides').value=$('#projectDaily').value;$('#siteCount').value=$('#projectSites').value;$('#budgetCap').value=$('#projectCap').value;$('#budgetYear').value=$('#projectYear').value;$('#deployMode').value=$('#projectDeploy').value;$('#dataPolicy').value=$('#projectData').value;$('#salesOwner').value=$('#projectOwner').value;
  $('#assessmentHospital').value=$('#projectHospital').value;$('#assessmentType').value=$('#projectScene').value;$('#assessmentDaily').value=$('#projectDaily').value;$('#assessmentSites').value=$('#projectSites').value;
}
function syncAssessmentToProject(){if($('#assessmentHospital').value.trim()){$('#hospitalName').value=$('#assessmentHospital').value;$('#projectHospital').value=$('#assessmentHospital').value}$('#projectType').value=$('#assessmentType').value;$('#projectScene').value=$('#assessmentType').value;$('#dailySlides').value=$('#assessmentDaily').value;$('#projectDaily').value=$('#assessmentDaily').value;$('#siteCount').value=$('#assessmentSites').value;$('#projectSites').value=$('#assessmentSites').value}
function syncProjectToAssessment(){if($('#hospitalName').value.trim()){$('#assessmentHospital').value=$('#hospitalName').value;$('#projectHospital').value=$('#hospitalName').value}$('#assessmentType').value=$('#projectType').value;$('#projectScene').value=$('#projectType').value;$('#assessmentDaily').value=$('#dailySlides').value;$('#projectDaily').value=$('#dailySlides').value;$('#assessmentSites').value=$('#siteCount').value;$('#projectSites').value=$('#siteCount').value;$('#projectTitle').value=$('#projectName').value;$('#projectCap').value=$('#budgetCap').value;$('#projectYear').value=$('#budgetYear').value;$('#projectDeploy').value=$('#deployMode').value;$('#projectData').value=$('#dataPolicy').value;$('#projectOwner').value=$('#salesOwner').value}
function projectRecord(){return{hospital:$('#projectHospital').value.trim(),title:$('#projectTitle').value.trim(),level:$('#hospitalLevel').value,scene:$('#projectScene').value,daily:Number($('#projectDaily').value||0),sites:Number($('#projectSites').value||1),cap:Number($('#projectCap').value||0),year:$('#projectYear').value,deploy:$('#projectDeploy').value,data:$('#projectData').value,owner:$('#projectOwner').value.trim(),goal:$('#projectGoal').value,annualCases:Number($('#projectAnnualCases').value||0),annualSlides:Number($('#projectAnnualSlides').value||0),doctors:Number($('#projectDoctors').value||0),currentSystem:$('#projectCurrentSystem').value,currentScanner:$('#projectCurrentScanner').value.trim(),tat:$('#projectTat').value.trim(),referralCost:Number($('#projectReferralCost').value||0),peakSlides:Number($('#projectPeakSlides').value||0),technicians:Number($('#projectTechnicians').value||0),annualConsults:Number($('#projectAnnualConsults').value||0),retentionYears:Number($('#projectRetentionYears').value||5),interfaces:$('#projectInterfaces').value.trim(),environment:$('#projectEnvironment').value,budgetSource:$('#projectBudgetSource').value,procurement:$('#projectProcurement').value,leadDept:$('#projectLeadDept').value.trim(),startDate:$('#projectStartDate').value}}
function updateProjectDashboard(){
  const p=projectRecord(),m=maturityResult(),t=totals(),e=evidenceItems.filter(x=>state.evidence[x.id]).length;
  const completed=[p.hospital?1:0,m.answered>=5?1:0,state.recommendation.confirmed?1:0,t.items.length?1:0,roiResult().annual>0?1:0,e>=4?1:0].reduce((a,b)=>a+b,0);const progress=Math.max(10,Math.round(completed/6*100));
  $('#projectProgress').textContent=progress+'%';$('#projectProgressBar').style.width=progress+'%';$('#projectRailHospital').textContent=p.hospital||'尚未填写医院';$('#projectRailMeta').textContent=`${p.scene} · 日均${p.daily||'待确认'}片 · ${p.sites}个院区`;$('#projectRailPath').textContent=pathDefinition(state.recommendation.selectedPath).title;$('#projectRailBudget').textContent=t.total?money(t.total)+'万元':'尚未确认';
  $('#projectNextAction').textContent=!p.hospital?'填写医院名称':m.answered<5?'完成5项快速填写':!state.recommendation.confirmed?'确认方案建议':!t.items.length?'完成配置与预算':roiResult().annual<=0?'补充效益测算数据':e<4?'补齐相关材料':'生成院方材料';
}
function pathDefinition(id){
  const paths={
    baseline:{code:'PLAN 01',title:'院内智慧病理基础建设',preset:'baseline',summary:'先完成数字切片采集、病理流程管理和常用病种AI配置，再用90天试运行核对实际效果。',stages:[['安装部署','完成扫描设备、流程系统、接口和基础算力部署','结果：主要系统上线'],['院内试用','选择常用病种完成本地验证和医生培训','结果：形成院内验证记录'],['日常使用','按质量、时效、成本和使用情况持续改进','结果：形成月度使用记录']]},
    regional:{code:'PLAN 02',title:'区域病理中心建设',preset:'regional',summary:'先解决多院区切片采集、集中诊断、远程会诊和数据管理，再根据使用情况增加AI和科研功能。',stages:[['中心建设','配置高通量扫描、区域平台和中心算力','结果：中心节点上线'],['院区接入','分批完成接口、网络、权限和远程会诊配置','结果：首批院区接入'],['日常管理','统一质控、诊断分配和运营统计','结果：形成区域管理办法']]},
    pilot:{code:'PLAN 03',title:'国产算力与AI试点项目',preset:'pilot',summary:'采用院内部署和国产算力，先选择一个能够验证的病种，再根据试用结果增加其他模型。',stages:[['环境部署','完成国产算力、存储、网络与安全配置','结果：本地环境可用'],['模型验证','根据院方病例情况选择模型并完成本地验证','结果：形成验证报告'],['后续扩展','总结试用结果，分批增加病种和院区','结果：形成扩展计划']]}
  };return paths[id]||paths.baseline;
}
function systemRecommendation(){const p=projectRecord(),m=maturityResult();let path='baseline';if(p.scene==='国产算力示范项目')path='pilot';else if(p.scene==='区域病理中心'||p.sites>1||p.daily>480)path='regional';const budget=budgetPlanForPreset(pathDefinition(path).preset),reasons=[`${p.scene}`,`日均${p.daily||'待确认'}片`,`${p.sites}个院区`,p.deploy,p.data,`${m.answered}项诊断已完成`];if(p.cap>0)reasons.push(`预算上限${money(p.cap)}万元`);if(budget.status==='within')reasons.push(`建议配置约${money(budget.total)}万元，控制在预算内`);else if(budget.status==='soft-over')reasons.push(`建议配置约${money(budget.total)}万元，小幅超预算${money(Math.max(0,budget.overRate*100))}%`);else if(budget.status==='phased')reasons.push(`核心配置仍超预算，建议分期建设`);if(m.score<25)reasons.push('需先补齐数字化基础');else if(m.score<50)reasons.push('重点打通系统与质控');else if(m.score<75)reasons.push('适合进入AI临床验证');else reasons.push('可规划持续运营与扩展');return{path,reasons,maturity:m,budget,selection:budget.selection}}
function renderRecommendation(){
  const rec=systemRecommendation();state.recommendation.systemPath=rec.path;if(!state.recommendation.confirmed)state.recommendation.selectedPath=rec.path;const def=pathDefinition(state.recommendation.selectedPath),p=projectRecord();
  const activeBudget=budgetPlanForPreset(def.preset),budgetText=!activeBudget.cap?'未设置预算上限，当前按业务需求生成完整配置。':activeBudget.status==='within'?`建议配置约 ${money(activeBudget.total)} 万元，控制在 ${money(activeBudget.cap)} 万元预算内。`:activeBudget.status==='soft-over'?`建议配置约 ${money(activeBudget.total)} 万元，比预算上限高 ${money(Math.max(0,activeBudget.overRate*100))}%，属于可讨论的10%浮动范围。`:`建议配置约 ${money(activeBudget.total)} 万元，仍高于预算上限10%以上，建议分期建设或重新确认预算。`;
  $('#recommendedCode').textContent=def.code;$('#recommendedTitle').textContent=def.title;$('#recommendedReason').textContent=`${def.summary}${budgetText}`;$('#recommendedConfidence').textContent=state.recommendation.confirmed?'销售已确认':'根据已填资料';$('#recommendationStatus').textContent=state.recommendation.confirmed?'已确认':'待确认';
  $('#recommendationReasons').innerHTML=rec.reasons.map(x=>`<span>${x}</span>`).join('');$('#recommendedStages').innerHTML=def.stages.map((x,i)=>`<div><b>阶段${i+1} · ${x[0]}</b><span>${x[1]}</span><small>${x[2]}</small></div>`).join('');
  $('#recommendedModules').innerHTML=Object.keys(activeBudget.selection).map(id=>`<span>${catalog.find(x=>x.id===id)?.name||id}</span>`).join('')+(activeBudget.changes.length?`<small>预算调整：${activeBudget.changes.join('；')}</small>`:'');
  $('#decisionBasis').innerHTML=[['医院场景',p.scene],['业务规模',`日均${p.daily||'待确认'}片`],['院区数量',`${p.sites}个院区`],['部署要求',p.deploy],['预算上限',p.cap?`${money(p.cap)}万元`:'暂未设置'],['预算浮动边界',p.cap?`最多建议至${money(p.cap*(1+BUDGET_OVERAGE_LIMIT))}万元（+10%）`:'不适用'],['建议配置测算',`${money(activeBudget.total)}万元`],['现状评分',`${rec.maturity.score}/100（内部）`],['建议方案',pathDefinition(rec.path).title]].map(x=>`<div class="basis-row"><span>${x[0]}</span><b>${x[1]}</b></div>`).join('');
  $('#pathChoice').innerHTML=['baseline','regional','pilot'].map(id=>{const x=pathDefinition(id);return`<label><input type="radio" name="pathChoice" value="${id}" ${state.recommendation.selectedPath===id?'checked':''}> ${x.title}</label>`}).join('');
  $('#calculatorPathNote').textContent=state.recommendation.confirmed?`已确认：${def.title}，仍可逐项调整`:'方案建议尚未确认，当前配置仅供查看';updateProjectDashboard();renderReport();
}
function updateAssessment(){
  const m=maturityResult(),r=roiResult(),evidenceReady=evidenceItems.filter(x=>state.evidence[x.id]).length,hasHospital=$('#assessmentHospital').value.trim().length>0;
  $('#maturityScore').innerHTML=`${m.score}<small>/100</small>`;$('#maturityBar').style.width=m.score+'%';$('#maturityLevel').textContent=`LEVEL ${m.level.n}`;$('#maturityTitle').textContent=m.level.title;$('#maturityText').textContent=m.level.text;
  $('#dimensionMini').innerHTML=Object.entries(m.dimensions).map(([k,v])=>`<div><span>${k}</span><i><b style="width:${v}%"></b></i><strong>${v}</strong></div>`).join('');
  const visibleRequired=state.assessmentMode==='quick'?5:10,visibleAnswered=state.assessmentMode==='quick'?[0,2,4,6,8].filter(i=>state.answers[i]!==null).length:m.answered;const completion=Math.round(((hasHospital?1:0)+visibleAnswered/visibleRequired)/2*100);$('#assessmentCompletion').textContent=completion+'%';$('#assessmentCompletionBar').style.width=completion+'%';
  const readiness=m.answered<5?'尚未完成评估':m.score>=75?'基础较完整，可讨论扩展项目':m.score>=50?'已具备基本条件，还需补充验证要求':m.score>=25?'已有部分基础，建议先处理接口和流程': '现有基础较弱，建议分阶段建设';$('#clientReadiness').textContent=readiness;$('#clientReadinessText').textContent=m.answered<5?'完成5项快速填写后，这里会给出沟通建议。':m.level.text;
  if($('#assessmentBudget')){$('#assessmentBudget').textContent=money(r.invest)+'万元';$('#assessmentBenefit').textContent=money(r.benefit)+'万元';$('#assessmentPayback').textContent=r.payback===null?'未形成':money(r.payback)+'年';$('#assessmentRoi').textContent=money(r.roi)+'%';$('#scenarioNet').textContent=(r.net>=0?'+':'')+money(r.net)+'万元';}
  const scenarioNames={conservative:'保守情景',base:'基准情景',positive:'积极情景'};$('#valueScenarioName').textContent=scenarioNames[state.scenario];$('#scenarioBadge').textContent=scenarioNames[state.scenario];$$('[data-scenario]').forEach(x=>x.classList.toggle('active',x.dataset.scenario===state.scenario));
  const results=['conservative','base','positive'].map(name=>[name,scenarioResult(name)]),max=Math.max(1,...results.map(x=>Math.max(0,x[1].benefit)));$('#scenarioCompare').innerHTML=results.map(([name,x])=>`<div><span>${scenarioNames[name]}</span><i><b style="width:${Math.max(0,x.benefit)/max*100}%"></b></i><strong>${money(x.benefit)}万</strong></div>`).join('');
  const critical=['licenses','validation','acceptance'],criticalReady=critical.filter(x=>state.evidence[x]).length;$('#evidenceGateTitle').textContent=criticalReady===3?'主要材料已齐':'主要材料还没齐';$('#evidenceGateText').textContent=`当前有 ${evidenceReady}/${evidenceItems.length} 项材料，其中注册与使用范围、院内验证、验收材料三项完成 ${criticalReady}/3。`;
  updateProjectDashboard();renderRecommendation();renderReport();
}

function quoteModeLabel(){return state.quoteMode==='package'?'五年智慧病理科服务套餐':'三甲医院模块组合报价'}
function renderQuoteMode(){
  $$('#quoteModeSwitch [data-quote-mode]').forEach(x=>x.classList.toggle('active',x.dataset.quoteMode===state.quoteMode));
  $$('#presetGrid [data-mode]').forEach(x=>x.hidden=x.dataset.mode!==state.quoteMode);
  const combination=state.quoteMode==='combination';
  $('#quoteModeNote').innerHTML=combination?'<b>组合报价规则：</b><span>先按模块形成原价，再选择“建议优惠、0%、3%、5%、8%、10%或自定义优惠”。建议优惠自动执行AI“买二送一”和组合规模优惠；其他档位按模块原价统一折扣。所有优惠均为测算，正式价格以商务审批为准。</span>':'<b>套餐报价规则：</b><span>套餐一、二、三、四只能选择其中一档，套餐内的设备、系统和AI能力不再拆分重复计价；套餐价不再叠加组合优惠。</span>';
  $('#catalogTitle').textContent=combination?'设备、系统与模块组合':'选择一档智慧病理科服务套餐';
  $('#optionalBanner').hidden=!combination;
  $('#headerTotalLabel').textContent=combination?'当前组合报价':'当前套餐服务价';
  $('#summaryTitle').textContent=combination?'模块组合报价合计':'五年服务套餐合计';
}
function setQuoteMode(mode){if(!['package','combination'].includes(mode)||mode===state.quoteMode)return;const initialPreset=mode==='package'?'package1':'custom';state.quoteMode=mode;state.selected={...presets[initialPreset]};renderQuoteMode();$$('#presetGrid button').forEach(b=>b.classList.toggle('active',b.dataset.preset===initialPreset));renderCatalog();updateAll();saveIntegratedDraft(true);toast(mode==='package'?'已切换为标准服务套餐':'已切换为模块组合报价，所有项目默认可选');}
function applyPreset(name){state.quoteMode=name.startsWith('package')?'package':'combination';state.selected={...presets[name]};renderQuoteMode();$$('#presetGrid button').forEach(b=>b.classList.toggle('active',b.dataset.preset===name));renderCatalog();updateAll();toast(name==='custom'?'已打开空白组合报价，请逐项勾选':'已载入配置起点，所有预选项均可继续增删');}
function applyBudgetPreset(name){const plan=budgetPlanForPreset(name);state.quoteMode='combination';state.discountMode='suggested';state.selected={...plan.selection};renderQuoteMode();$$('#presetGrid button').forEach(b=>b.classList.toggle('active',b.dataset.preset===name));renderCatalog();updateAll();const message=plan.status==='phased'?`已生成预算约束下的核心配置，当前仍超过预算10%，建议分期建设`:plan.status==='soft-over'?`已生成预算约束配置，当前小幅超预算${money(Math.max(0,plan.overRate*100))}%`:`已按预算上限生成配置，参考价约${money(plan.total)}万元`;toast(message);return plan}

function renderCatalog(){
  const groups=[...new Set(catalog.map(x=>x.group))].filter(group=>state.quoteMode==='package'?group==='智慧病理科服务套餐':group!=='智慧病理科服务套餐');
  $('#catalogGroups').innerHTML=groups.map(group=>{
    const keyword=($('#catalogSearch')?.value||'').trim().toLowerCase();
    const onlySelected=$('#onlySelected')?.checked;
    const items=catalog.filter(x=>x.group===group).filter(x=>(!onlySelected||(state.selected[x.id]||0)>0)&&(!keyword||`${x.name} ${x.model} ${x.spec}`.toLowerCase().includes(keyword)));
    if(!items.length) return '';
    const groupNote=group==='数字化采集设备'?`${items.length} 个可选项目 · 院方已有扫描仪可不选`:`${items.length} 个可选项目`;
    return `<section class="catalog-group"><div class="catalog-group-head"><b>${group}</b><span>${groupNote}</span></div>${items.map(item=>{
      const qty=normalizeQty(item.id,state.selected[item.id]), checked=qty>0;
      return `<div class="catalog-row ${checked?'':'disabled-row'}" data-id="${item.id}">
        <input class="item-check" type="checkbox" ${checked?'checked':''} aria-label="选择${item.name}">
        <div class="item-name"><b>${item.name}</b><small>${item.model} · ${item.unit}</small></div>
        <div class="item-spec">${item.spec}<small class="internal-only">依据：${item.source}</small></div>
        <div class="qty-control"><button class="qty-minus">−</button><input class="qty-input" type="number" min="0" ${Number.isFinite(item.max)?`max="${item.max}"`:''} value="${qty}"><button class="qty-plus">+</button></div>
        <label class="price-input"><input class="unit-price" type="number" min="0" step="0.1" value="${state.prices[item.id]}"><span>万/${item.unit}</span></label>
        <div class="subtotal">${checked?'¥'+money(qty*state.prices[item.id])+'万':'—'}</div>
        <span class="status-pill ${priceMeta(item).css}">${priceMeta(item).label}</span>
      </div>`}).join('')}</section>`
  }).join('');
}

function selectedItems(){return catalog.filter(x=>normalizeQty(x.id,state.selected[x.id])>0).map(x=>{const qty=normalizeQty(x.id,state.selected[x.id]);return{...x,qty,currentPrice:Number(state.prices[x.id]||0),subtotal:qty*Number(state.prices[x.id]||0)}});}
function discountModeRate(){const rates={none:0,pct3:.03,pct5:.05,pct8:.08,pct10:.10,custom:Math.min(30,Math.max(0,Number(state.customDiscountRate||0)))/100};return rates[state.discountMode]??null}
function calculateDiscount(items){
  const subtotal=items.reduce((sum,item)=>sum+item.subtotal,0);
  if(state.quoteMode!=='combination'||subtotal<=0)return{subtotal,aiDiscount:0,comboDiscount:0,discount:0,total:subtotal,aiFreeCount:0,comboRate:0,policy:'标准服务套餐不叠加组合优惠'};
  const manualRate=discountModeRate();
  if(manualRate!==null){const discount=subtotal*manualRate;return{subtotal,aiDiscount:0,comboDiscount:discount,discount,total:Math.max(0,subtotal-discount),aiFreeCount:0,comboRate:manualRate,policy:manualRate?`统一优惠 ${money(manualRate*100)}%，需按公司商务流程审批`:'按模块原价报价，未启用优惠'};}
  const confirmed=items.filter(item=>item.status!=='pending'&&item.subtotal>0&&item.group!=='智慧病理科服务套餐');
  const aiUnits=[];confirmed.filter(item=>item.group==='AI辅助诊断模块').forEach(item=>{for(let index=0;index<item.qty;index++)aiUnits.push(item.currentPrice)});aiUnits.sort((a,b)=>a-b);
  const aiFreeCount=Math.floor(aiUnits.length/3),rawAiDiscount=aiUnits.slice(0,aiFreeCount).reduce((sum,price)=>sum+price,0);
  const nonAi=confirmed.filter(item=>item.group!=='AI辅助诊断模块'),nonAiUnits=nonAi.reduce((sum,item)=>sum+item.qty,0),comboRate=nonAiUnits>=10?.08:nonAiUnits>=6?.05:nonAiUnits>=3?.03:0,rawComboDiscount=nonAi.reduce((sum,item)=>sum+item.subtotal,0)*comboRate;
  const discount=Math.min(rawAiDiscount+rawComboDiscount,subtotal*.10),aiDiscount=Math.min(rawAiDiscount,discount),comboDiscount=Math.max(0,discount-aiDiscount),total=Math.max(0,subtotal-discount);
  const parts=[];if(aiFreeCount)parts.push(`AI买二送一：${aiFreeCount}个模块`);if(comboRate)parts.push(`其他模块${Math.round(comboRate*100)}%组合优惠`);if(!parts.length)parts.push('当前组合尚未达到自动优惠条件');
  return{subtotal,aiDiscount,comboDiscount,discount,total,aiFreeCount,comboRate,policy:`${parts.join('；')}；叠加优惠上限10%，最终以商务审批为准`};
}
function totals(){const items=selectedItems(),pending=items.filter(x=>x.status==='pending'),by={};items.forEach(x=>by[x.group]=(by[x.group]||0)+x.subtotal);return{items,pending,by,...calculateDiscount(items)};}

function internalCostFor(item){
  const fixed={package4:[90,'产品设计表：区域成本60+硬件30','known'],structured:[7.5,'区域/代理结算价','known'],structured_template:[1.5*item.qty,'区域/代理结算价1.5万元/模板','known'],structured_data:[2.5,'区域/代理结算价','known'],structured_analysis:[2.5,'区域/代理结算价','known']};
  if(fixed[item.id])return{value:fixed[item.id][0],note:fixed[item.id][1],status:fixed[item.id][2]};
  if(item.group==='AI辅助诊断模块')return{value:10*item.qty,note:'区域/代理结算价10万元/计价单元',status:'known'};
  if(item.group==='质量控制模块')return{value:10*item.qty,note:'区域/代理结算价10万元/项',status:'known'};
  if(item.id==='workflow_module'){
    const level=projectRecord().level,fullCost=level==='二级医院'?15:level==='区域医疗中心'?60:30;
    return{value:fullCost*item.qty/18,note:`按${level}18模块结算基线${fullCost}万元折算，待商务确认`,status:'estimated'};
  }
  return{value:null,note:'现有产品表未提供成本/结算价',status:'missing'};
}
function internalCostSummary(items,total){const rows=items.map(item=>({item,...internalCostFor(item)})),knownRows=rows.filter(row=>row.value!==null),knownCost=knownRows.reduce((sum,row)=>sum+row.value,0),unknownRows=rows.filter(row=>row.value===null),estimatedRows=rows.filter(row=>row.status==='estimated');return{rows,knownCost,unknownRows,estimatedRows,coverage:knownRows.length,complete:items.length>0&&!unknownRows.length,space:total-knownCost}}

function auditConfiguration(){
  const p=project(),t=totals(),q=id=>normalizeQty(id,state.selected[id]);
  const checks=[];
  const packageCount=q('package1')+q('package2')+q('package3')+q('package4');
  const componentCount=t.items.filter(x=>x.group!=='智慧病理科服务套餐').length;
  if(state.quoteMode==='package'||packageCount){
    checks.push(packageCount===1?{level:'pass',title:'已选择一档标准服务套餐',detail:'套餐一至三沿用现行口径，套餐四按2026-10-15产品设计表'}:{level:'fail',title:'同时选择了多个服务套餐',detail:'套餐一、二、三、四只能选择其中一档'});
    checks.push(componentCount?{level:'fail',title:'服务套餐与模块化采购重复计价',detail:'请选择“服务套餐”或“设备/系统/AI模块化预算”其中一种方式'}:{level:'pass',title:'未混入模块化采购项目',detail:'套餐内设备、系统和AI不再拆分重复计价'});
    checks.push(t.pending.length?{level:'warn',title:`仍有 ${t.pending.length} 项价格待确认`,detail:'客户展示时必须说明这些费用未锁定'}:{level:'pass',title:'当前套餐价格口径完整',detail:'测算价不替代正式合同'});
    const cost=internalCostSummary(t.items,t.total);if(cost.knownCost>t.total)checks.push({level:'fail',title:'报价低于已知内部结算基线',detail:`最终价 ${money(t.total)} 万元，已知内部结算基线 ${money(cost.knownCost)} 万元`});else if(cost.unknownRows.length)checks.push({level:'warn',title:`仍有 ${cost.unknownRows.length} 项成本未确认`,detail:'当前不能据此计算完整毛利，正式报价前需补齐内部成本'});
    if(p.cap>0) checks.push(t.total<=p.cap?{level:'pass',title:'当前测算未超过预算上限',detail:`预算余量 ${money(p.cap-t.total)} 万元`}:t.total<=p.cap*(1+BUDGET_OVERAGE_LIMIT)?{level:'warn',title:'当前测算小幅超过预算上限',detail:`超出 ${money(t.total-p.cap)} 万元（${money((t.total-p.cap)/p.cap*100)}%），仍在10%方案讨论范围内`}:{level:'fail',title:'当前测算明显超过预算上限',detail:`超出 ${money(t.total-p.cap)} 万元（${money((t.total-p.cap)/p.cap*100)}%），需调整配置或分期建设`});
    return checks;
  }
  const scannerCount=q('scan240')+q('scan20')+q('scan300'),existingScanner=projectRecord().currentScanner;
  checks.push(scannerCount?{level:'pass',title:'已选择新增数字化采集设备',detail:`共 ${scannerCount} 台，最终产能仍须按扫描速度与班次复核`}:existingScanner?{level:'pass',title:'本次组合报价不新增扫描仪',detail:`拟沿用院方现有设备：${existingScanner}；正式报价前需核验格式、接口与产能兼容性`}:{level:'warn',title:'扫描仪未选，按可选项处理',detail:'若院方沿用现有设备，请在项目档案补充型号并核验格式、接口和产能；不影响系统、AI或算力模块单独报价'});
  const highThroughput=q('scan240')+q('scan300');
  const scanAdvice=p.daily<=20?(q('scan20')>0||highThroughput>0):p.daily<=240?highThroughput>=1:p.daily<=300?(q('scan300')>=1||(q('scan240')>=1&&q('scan20')>=1)):highThroughput>=2;
  if(scannerCount)checks.push(scanAdvice?{level:'pass',title:'扫描设备组合符合初步经验规则',detail:'该判断仅用于售前测算，不替代厂家产能参数'}:{level:'warn',title:'新增扫描设备数量可能不足',detail:`日均 ${p.daily||0} 片，建议按峰值工作量进一步核算`});
  const standaloneAI=t.items.filter(x=>x.group==='AI辅助诊断模块').length;
  const serverProfiles=['server25','server50','server100','huawei130'].filter(id=>q(id)>0);
  checks.push(serverProfiles.length===1?{level:'pass',title:'算力与存储版本唯一',detail:'未发现多个算力档位重复计价'}:serverProfiles.length===0&&standaloneAI?{level:'pass',title:'AI模块报价已包含服务器',detail:'如需额外算力或存储，应单独说明用途后再增配'}:serverProfiles.length===0?{level:'warn',title:'尚未配置算力与存储',detail:p.deploy==='院内本地部署'?'本地部署通常需要明确算力和存储配置':'云端或混合部署需明确资源责任方'}:{level:'fail',title:'存在多个算力版本混用',detail:'基础、增强、区域中心和国产算力领航版只能择一测算'});
  checks.push(q('huawei130')&&standaloneAI?{level:'warn',title:'领航版与独立 AI 模块可能重复',detail:'国产算力领航版含指定模型，应逐项核对是否重复计价'}:{level:'pass',title:'未发现明显 AI 重复计价',detail:'临床用途仍须核实现行注册证与说明书'});
  if(standaloneAI&&['server25','server50','server100'].some(id=>q(id)>0))checks.push({level:'warn',title:'AI模块与服务器可能重复计价',detail:'2026-10-15产品表注明AI模块报价含服务器；如另报服务器，必须说明其用于额外算力、存储或其他系统'});
  if(q('huawei130')&&!q('huawei_maintenance'))checks.push({level:'warn',title:'国产算力年度维护尚未列入',detail:'购买后年度维护费为成交价的10%，五年测算建议列入后续4年维护'});
  if(q('huawei_maintenance')&&!q('huawei130'))checks.push({level:'fail',title:'年度维护缺少对应设备',detail:'国产算力年度维护只能与国产算力智慧病理基座配套选择'});
  const structuredAddons=q('structured_template')+q('structured_data')+q('structured_analysis');
  if(structuredAddons&&!q('structured'))checks.push({level:'fail',title:'结构化报告配套项缺少基础平台',detail:'诊断模板、数据平台和诊断分析中心必须与15万元基础平台配套'});
  if(q('structured')&&!q('structured_template'))checks.push({level:'warn',title:'结构化报告尚未选择诊断模板',detail:'基础平台15万元，诊断模板按5万元/个另计；请填写实际模板数量'});
  if(q('teaching_local')&&q('teaching_cloud'))checks.push({level:'fail',title:'教学平台部署方式重复',detail:'本地部署与云端基础版应择一报价'});
  if(q('teaching_seat')&&!q('teaching_cloud'))checks.push({level:'fail',title:'教学平台超额用户缺少云端基础版',detail:'超过30人的增量用户只能与10万元/年的云端基础版配套'});
  const unregistered=t.items.filter(x=>x.certified===false);
  if(unregistered.length)checks.push({level:'warn',title:`含 ${unregistered.length} 项未取得注册证的产品`,detail:'只能用于科研或院内验证，报告和报价不得写成已注册临床产品'});
  const aiModels=t.items.filter(x=>x.group==='AI辅助诊断模块').reduce((sum,item)=>sum+item.qty,0);
  if(t.discount>0)checks.push({level:state.discountMode==='suggested'?'pass':'warn',title:`当前报价优惠 ${money(t.discount)} 万元`,detail:`${t.policy}；工具测算不替代商务审批`});else if(aiModels>=3&&state.discountMode==='none')checks.push({level:'warn',title:'当前按原价报价',detail:'已选择不启用优惠，AI“买二送一”未计入本次报价'});
  const hasSystem=q('workflow_module')+q('remote_module')+q('structured')+q('teaching_local')+q('teaching_cloud')>0;
  checks.push(hasSystem&&!q('interface')?{level:'warn',title:'系统已选但接口费用未列示',detail:'建议至少保留 HIS / LIS / PACS 接口待确认项'}:{level:'pass',title:'系统与接口范围已被提示',detail:'正式预算前需完成接口厂商和工作量调研'});
  checks.push(t.pending.length?{level:'warn',title:`仍有 ${t.pending.length} 项价格待确认`,detail:'客户展示时必须说明这些费用未锁定'}:{level:'pass',title:'所选项目均已有参考价',detail:'参考价仍不等于正式报价'});
  const cost=internalCostSummary(t.items,t.total);if(cost.knownCost>t.total)checks.push({level:'fail',title:'报价低于已知内部结算基线',detail:`最终价 ${money(t.total)} 万元，已知内部结算基线 ${money(cost.knownCost)} 万元`});else if(cost.unknownRows.length)checks.push({level:'warn',title:`仍有 ${cost.unknownRows.length} 项成本未确认`,detail:'当前只能查看已知部分价差，不能计算完整毛利'});else checks.push({level:'pass',title:'内部结算基线已覆盖全部所选项',detail:`测算价差 ${money(cost.space)} 万元，仍需按商务流程审批`});
  if(p.cap>0) checks.push(t.total<=p.cap?{level:'pass',title:'当前测算未超过预算上限',detail:`预算余量 ${money(p.cap-t.total)} 万元`}:t.total<=p.cap*(1+BUDGET_OVERAGE_LIMIT)?{level:'warn',title:'当前测算小幅超过预算上限',detail:`超出 ${money(t.total-p.cap)} 万元（${money((t.total-p.cap)/p.cap*100)}%），仍在10%方案讨论范围内`}:{level:'fail',title:'当前测算明显超过预算上限',detail:`超出 ${money(t.total-p.cap)} 万元（${money((t.total-p.cap)/p.cap*100)}%），需调整配置或分期建设`});
  return checks;
}

function renderAudit(){
  const checks=auditConfiguration(),pass=checks.filter(x=>x.level==='pass').length,fail=checks.filter(x=>x.level==='fail').length,warn=checks.filter(x=>x.level==='warn').length;
  $('#logicScore').textContent=`${pass}/${checks.length}`;
  $('#logicVerdict').textContent=fail?'不建议直接对外':warn?'可沟通，需说明边界':'可进入客户讨论';
  $('#logicVerdict').style.color=fail?'#ffc5c0':warn?'#ffe2a7':'#75d6b3';
  $('#logicList').innerHTML=checks.map(x=>`<div class="logic-item ${x.level}"><i>${x.level==='pass'?'√':x.level==='warn'?'!':'×'}</i><b>${x.title}</b><span>${x.detail}</span></div>`).join('');
  return checks;
}

function deliveryChecks(){
  const p=project(),t=totals(),r=roiResult(),audits=auditConfiguration(),critical=['licenses','validation','acceptance'],criticalReady=critical.filter(x=>state.evidence[x]).length;
  const economicValues=[['revenue','#roiRevenue'],['referral','#roiReferral'],['labor','#roiLabor'],['infra','#roiInfra'],['annualCost','#roiAnnualCost'],['growth','#roiGrowth']];
  const usedEconomic=economicValues.filter(([,selector])=>Number($(selector).value||0)>0),economicSourcesReady=usedEconomic.every(([key])=>state.roiSources[key]&&state.roiSources[key]!=='待确认');
  return [
    {level:p.hospital!=='××医院'?'pass':'fail',title:'医院与项目信息',detail:p.hospital!=='××医院'?`已建立 ${p.hospital} 项目档案`:'未填写医院名称，不能形成院方正式材料'},
    {level:t.items.length?'pass':'fail',title:'建设内容与报价',detail:t.items.length?`已选 ${t.items.length} 项，${quoteModeLabel()}合计 ${money(t.total)} 万元`:'尚未选择套餐或组合模块'},
    {level:audits.some(x=>x.level==='fail')?'fail':'pass',title:'配置逻辑与版本',detail:audits.some(x=>x.level==='fail')?'存在重复计价、版本混用或超预算问题':'未发现阻断对外沟通的配置冲突'},
    {level:t.pending.length?'warn':'pass',title:'价格完整性',detail:t.pending.length?`仍有 ${t.pending.length} 项价格待现场调研或商务确认`:'当前所选项均已有参考价'},
    {level:r.annual>0&&economicSourcesReady?'pass':'warn',title:'经济效益依据',detail:r.annual<=0?'尚未录入可核验的年度收益或节约假设':economicSourcesReady?'已录入效益假设并标注数据来源':'已录入效益假设，但仍有数据来源待确认'},
    {level:criticalReady===3?'pass':'warn',title:'合规、验证与验收附件',detail:criticalReady===3?'产品边界、院内验证和验收材料已齐备':`三项关键材料已完成 ${criticalReady}/3，正式立项前需补齐`}
  ];
}
function renderDeliveryChecklist(){
  if(!$('#deliveryChecklist'))return;
  const checks=deliveryChecks(),pass=checks.filter(x=>x.level==='pass').length,fail=checks.filter(x=>x.level==='fail').length;
  $('#deliveryChecklist').innerHTML=checks.map(x=>`<div class="delivery-${x.level}"><i>${x.level==='pass'?'√':x.level==='warn'?'!':'×'}</i><b>${x.title}</b><span>${x.detail}</span></div>`).join('');
  $('#outputReadiness').textContent=fail?`${fail}项必须先处理`:pass===checks.length?'可形成院方正式讨论稿':'可沟通，仍有待确认项';
}

function renderInternalCost(t){
  const cost=internalCostSummary(t.items,t.total);
  $('#knownCostTotal').textContent=`¥${money(cost.knownCost)}万`;$('#costCoverage').textContent=`${cost.coverage}/${t.items.length}项`;$('#knownPriceSpace').textContent=`¥${money(cost.space)}万`;$('#knownPriceSpace').style.color=cost.space<0?'#ffaaa3':'#77d5b5';
  const notes=[];if(cost.unknownRows.length)notes.push(`有 ${cost.unknownRows.length} 项未提供成本或结算价，不能据此计算完整毛利`);if(cost.estimatedRows.length)notes.push(`有 ${cost.estimatedRows.length} 项按现有分级结算口径折算，正式报价前需商务确认`);if(!notes.length&&t.items.length)notes.push('当前所选项目均已有内部结算基线，可用于初步判断报价空间');if(!t.items.length)notes.push('请先选择套餐或模块');if(cost.space<0)notes.unshift('当前最终价已低于已知内部结算基线，请停止对外报价并复核');$('#costWarning').textContent=notes.join('；')+'。';
  $('#costBreakdownRows').innerHTML=cost.rows.length?cost.rows.map(row=>`<tr><td>${row.item.name}</td><td>${row.item.qty}${row.item.unit}</td><td>¥${money(row.item.subtotal)}万</td><td class="cost-${row.status}">${row.value===null?'待确认':'¥'+money(row.value)+'万'}</td><td>${row.note}</td></tr>`).join(''):'<tr><td colspan="5">尚未选择建设内容。</td></tr>';
}

function updateAll(){
  const t=totals();
  renderQuoteMode();
  $('#grandTotal').textContent=`¥${money(t.total)} 万元`;$('#headerTotal').textContent=`¥${money(t.total)} 万`;$('#headerPending').textContent=`含 ${t.pending.length} 项待确认`;$('#summaryNote').textContent=state.quoteMode==='combination'?`原价 ${money(t.subtotal)} 万元，报价优惠 ${money(t.discount)} 万元；${t.pending.length} 项价格待确认。`:`已选 ${t.items.length} 项，其中 ${t.pending.length} 项价格待确认。`;
  $('#discountOriginal').textContent=`¥${money(t.subtotal)}万`;$('#discountSaved').textContent=`-¥${money(t.discount)}万`;$('#discountFinal').textContent=`¥${money(t.total)}万`;$('#discountRule').textContent=t.policy;$('#autoDiscount').classList.toggle('package',state.quoteMode==='package');$('#discountMode').value=state.discountMode;$('#customDiscountRate').value=state.customDiscountRate;$('#customDiscountWrap').classList.toggle('active',state.quoteMode==='combination'&&state.discountMode==='custom');$('#discountMode').disabled=state.quoteMode!=='combination';
  $('#summaryBreakdown').innerHTML=Object.entries(t.by).map(([k,v])=>`<div><span>${k}</span><b>¥${money(v)}万</b></div>`).join('');
  const daily=Number($('#dailySlides').value||0),cap=Number($('#budgetCap').value||0);let msg=daily<=0?'请填写日均切片量，系统将给出产能建议。':daily<=20?'日均切片量不超过 20 片，可由 20 片扫描仪承担基础采集；是否增加高通量设备按峰值与业务增长确定。':daily<=240?'日均切片量为 '+daily+' 片，可选 240 片或 300 片高通量扫描仪，并按急诊与备机需求决定是否增加 20 片设备。':daily<=300?'日均切片量为 '+daily+' 片，优先评估 300 片高通量扫描仪，或采用 240 片 + 20 片组合；最终按扫描速度与班次复核。':'日均切片量为 '+daily+' 片，建议组合配置 240 片/300 片高通量设备，并同时核定峰值、网络、推理并发和存储年限。';if(cap>0)msg+=` ${budgetPositionText(t.total,cap)}；自动推荐允许的最高浮动为10%。`;$('#recommendation').innerHTML=`<b>当前建议：</b><span>${msg}</span>`;
  renderInternalCost(t);renderAudit();updateAssessment();renderReport();
}

function renderCatalogCards(){
  $('#catalogCards').innerHTML=catalog.map(x=>`<article class="catalog-card">${x.image?`<img class="catalog-image" src="${x.image}" alt="${x.name}" loading="lazy">`:''}<div class="catalog-card-head"><div><h3>${x.name}</h3><small>${x.model}</small></div><span class="${priceMeta(x).css}">${x.status==='pending'?'价格待确认':priceMeta(x).label+' '+money(x.price)+' 万元'}</span></div><div class="spec-list"><div class="spec-line"><b>计量单位</b><span>${x.unit}</span></div><div class="spec-line"><b>关键参数</b><span>${x.spec}</span></div></div><footer class="internal-only">来源与边界：${x.source}</footer></article>`).join('');
}

const reportPolicies=[
  ['2009年','原卫生部《病理科建设与管理指南（试行）》','要求医疗机构从人员、设备、条件、制度和质量管理等方面规范病理科建设，保障诊断安全、准确、及时和经济。','https://www.nhc.gov.cn/zwgk/wtwj/201304/b67e2ccc097948109e33d80781b77f79.shtml'],
  ['2018年','国家卫生健康委《全国医院信息化建设标准与规范（试行）》','为医院信息化建设明确建设内容和要求，本项目的信息系统、接口、权限、审计与数据管理应纳入医院整体信息化框架。','https://www.nhc.gov.cn/guihuaxxs/c100133/201804/0e481cebe7f74d48b08a16eff79268d8.shtml'],
  ['2023年4月','国家发展改革委《政府投资项目可行性研究报告编写通用大纲（2023年版）》','要求可行性研究说明建设目标、任务、规模、投资、资金来源、实施方式、技术经济指标、绩效目标和风险防控，本报告据此组织立项论证。','https://www.ndrc.gov.cn/xxgk/zcfb/ghxwj/202304/t20230407_1353356.html'],
  ['2025年8月','国务院《关于深入实施“人工智能+”行动的意见》（国发〔2025〕11号）','提出有序推动人工智能在辅助诊疗、健康管理等场景应用，并强调安全可控，为医院开展临床辅助应用和能力建设提供政策方向。','https://www.gov.cn/zhengce/content/202508/content_7037861.htm'],
  ['2025年11月','国家卫生健康委等五部门《关于促进和规范“人工智能+医疗卫生”应用发展的实施意见》','提出推动医学影像智能辅助诊断、临床诊疗智能辅助决策等应用，要求同步建设数据、治理、安全和持续应用能力。','https://www.nhc.gov.cn/guihuaxxs/c100133/202511/d1a42ae835c743b9b3e83ac0253c3e9f.shtml'],
  ['2025年12月19日','国家医保局《病理类医疗服务价格项目立项指南（试行）》','形成28项价格项目、3项加收项、2项扩展项；数字病理图像纳入价格构成，人工智能辅助诊断列为扩展项。具体收费执行以当地政策和院内审批为准。','https://www.nhsa.gov.cn/art/2025/12/19/art_14_19086.html']
];
const reportGapGuidance={
  '采集能力':['按日均量、峰值量和备机要求复核扫描产能，建立切片与扫描质控基线','日处理能力、扫描成功率、重扫原因和异常处置记录'],
  '系统数据':['梳理标本到报告全流程，确认接口、历史数据、权限、存储与备份边界','流程节点可追溯、接口联调记录、权限审计和备份恢复记录'],
  'AI应用':['选择高频病种开展院内本地验证，明确医生复核、偏差处置和版本管理','本地验证方案与报告、医生复核记录、版本更新及再验证记录'],
  '组织流程':['由病理科牵头，明确各参与部门、培训安排和问题处理方式','职责清单、培训及上岗记录、问题清单和阶段评审纪要'],
  '服务运营':['将上线、90天试运行、验收和月度运营指标写入项目计划','上线确认、试运行报告、验收材料及质量/时效/成本运营月报']
};
function dimensionAssessment(name,score){const indexes=maturityQuestions.map((q,i)=>q.d===name?i:-1).filter(i=>i>=0),answered=indexes.filter(i=>state.answers[i]!==null&&state.answers[i]!==undefined).length;if(!answered)return'待评估';if(score>=75)return'基础较完整';if(score>=50)return'基础已具备';if(score>=25)return'部分具备';return'关键基础待补'}
function buildReportGapRows(m){return Object.entries(m.dimensions).map(([name,score])=>{const guide=reportGapGuidance[name]||['结合现场调研形成建设任务','形成可核验的验收记录'];return{name,status:dimensionAssessment(name,score),task:guide[0],acceptance:guide[1]}})}
function economicSourcesReady(){const used=[['revenue','#roiRevenue'],['referral','#roiReferral'],['labor','#roiLabor'],['infra','#roiInfra'],['annualCost','#roiAnnualCost'],['growth','#roiGrowth']].filter(([,selector])=>Number($(selector).value||0)>0);return used.length>0&&used.every(([key])=>state.roiSources[key]&&state.roiSources[key]!=='待确认')}
function reportReadiness(){const p=project(),b=projectRecord(),t=totals(),r=roiResult(),audits=auditConfiguration(),missing=[];if(p.hospital==='××医院')missing.push('医院名称');if(!b.annualCases)missing.push('年病例量');if(!b.annualSlides)missing.push('年切片量');if(!b.doctors)missing.push('病理医生数');if(b.currentSystem==='待确认')missing.push('现有系统');if(!b.peakSlides)missing.push('峰值切片量');if(!b.interfaces)missing.push('接口范围');if(!b.leadDept)missing.push('牵头部门');if(b.budgetSource==='待确认')missing.push('预算来源');if(b.procurement==='待确认')missing.push('采购方式');if(!t.items.length)missing.push('建设配置');if(r.annual>0&&!economicSourcesReady())missing.push('效益数据来源');const blockers=audits.filter(x=>x.level==='fail').length;const critical=['licenses','validation','acceptance'].filter(id=>!state.evidence[id]);if(blockers)return{level:'blocked',label:'仅供内部修改',detail:`有 ${blockers} 项配置问题，暂时不要发给医院。`,missing,critical};if(missing.length>5)return{level:'draft',label:'内部测算稿',detail:`还有 ${missing.length} 项重要数据没填。`,missing,critical};if(missing.length||critical.length)return{level:'conditional',label:'可用于院方讨论',detail:`还有 ${missing.length} 项数据、${critical.length} 项附件需要补充。`,missing,critical};return{level:'ready',label:'可用于正式讨论',detail:'医院数据、方案、效益依据和主要附件均已填写。',missing,critical}}
function buildReportCashFlowRows(t,r){let cumulativeBenefit=0,cumulativeInvest=0;return Array.from({length:5},(_,index)=>{const year=index+1,benefit=r.annual*Math.pow(1+r.growth,index),invest=state.quoteMode==='package'?t.total/5:(year===1?t.total:0);cumulativeBenefit+=benefit;cumulativeInvest+=invest;return{year,invest,benefit,cumulativeBenefit,net:cumulativeBenefit-cumulativeInvest}})}
function reportFeasibilityRows(t,r,readiness){const b=projectRecord(),audits=auditConfiguration(),hasFail=audits.some(x=>x.level==='fail'),technical=t.items.length&&!hasFail,implementation=b.environment!=='尚不具备，需专项建设'&&Boolean(b.leadDept||b.startDate),economic=t.total>0&&(r.annual<=0||economicSourcesReady()),organization=Boolean(b.leadDept)&&b.procurement!=='待确认'&&b.budgetSource!=='待确认',compliance=Boolean(state.evidence.licenses);return[
  ['技术可行性',technical?'基本具备':'待补条件',technical?'已形成配置且未发现阻断性版本冲突':'需先完成配置选择并解决重复计价、版本混用或产能问题'],
  ['实施可行性',implementation?'基本具备':'待补条件',`${b.environment}；${b.startDate?`计划 ${b.startDate} 启动`:'启动时间待确认'}`],
  ['经济可行性',economic?'基本具备':'待补条件',r.annual>0?(economicSourcesReady()?'效益假设已标注来源':'效益假设来源尚未完整'):'尚未录入可核验效益，当前仅能判断投入规模'],
  ['组织可行性',organization?'基本具备':'待补条件',`${b.leadDept||'牵头部门待确认'}；预算来源：${b.budgetSource}；采购方式：${b.procurement}`],
  ['合规可行性',compliance?'基本具备':'待补条件',compliance?'已标记本项目注册证与说明书材料':'正式立项前需逐项核验产品注册证、说明书和临床使用边界']
]}
function reportTimelineRows(path){const q=id=>normalizeQty(id,state.selected[id]);if(state.quoteMode==='package'||q('package1')+q('package2')+q('package3')+q('package4')){const deployDays=q('package1')?'5个工作日内':'10个工作日内';return[['安装部署期',deployDays,'完成现场复核、设备安装、系统部署和主要人员培训','结果：完成安装调试并进入试运行'],['试运行期','90天内','完成流程联调、院内验证、问题整改和阶段培训','结果：形成试运行记录和问题整改清单'],['全面使用期','6个月内','主要流程投入日常使用，按合同和验证结果启用相关功能','结果：形成院内标准操作流程'],['后续服务期','长期','持续记录质量、时效、成本和使用情况，按实际需要增加功能','结果：形成运营月报和改进记录']]}return path.stages.map((stage,index)=>[stage[0],index===0?'1—3个月':index===1?'3—12个月':'长期',stage[1],stage[2]])}
function reportRiskRows(t,r){const b=projectRecord(),risks=[];if(!b.peakSlides)risks.push(['扫描能力','尚未填写峰值日切片量。立项前要根据高峰工作量、扫描速度、班次和备用设备要求核对设备数量。']);if(!b.interfaces)risks.push(['接口与历史数据','尚未列出 HIS、病理LIS、PACS 等接口。接口开发、历史数据迁移和第三方配合费用要单独确认。']);if(b.environment==='待现场核验'||b.environment==='部分具备，需局部改造'||b.environment==='尚不具备，需专项建设')risks.push(['场地、网络与安全',`${b.environment}。实施前要确认机房、带宽、供电、设备位置、备份和院内安全要求。`]);const unregistered=t.items.filter(x=>x.certified===false);if(unregistered.length)risks.push(['产品使用范围',`当前配置含 ${unregistered.length} 项未取得注册证的产品，只能用于科研或院内验证，不得作为已注册临床产品使用或承诺。`]);else if(!state.evidence.licenses)risks.push(['产品使用范围','临床使用以现行注册证、说明书和院内审批范围为准，科研用途模块要单独说明。']);if(t.pending.length)risks.push(['预算完整性',`当前有 ${t.pending.length} 项价格待确认，技术沟通后还要确认范围、税费、维保和报价有效期。`]);if(r.annual>0&&!economicSourcesReady())risks.push(['效益测算依据','已经填写效益数值，但来源不完整。正式报告前要由院方财务、病理科和信息科逐项确认。']);const controls=[['方案变更','配置和报价变更要保留版本，避免套餐、模块化采购和不同产品版本混用。'],['数据安全','明确数据权属、查看权限、操作日志、备份恢复和院内安全审查要求，按院方制度处理数据。'],['实际使用情况','通过院内验证、人员培训、试运行问题清单和月度使用记录，避免系统上线后使用不足。']];for(const control of controls){if(risks.length>=4)break;if(!risks.some(item=>item[0]===control[0]))risks.push(control)}return risks.slice(0,6)}
function reportImagePath(path){if(!path)return'';const match=path.match(/image(1|3|4|8|10|15|20|23)\.(?:png|jpeg)/);return match?`assets/materials-web/image${match[1]}.webp`:path}
function budgetChartMarkup(t){const entries=Object.entries(t.by).filter(([,value])=>value>0),max=Math.max(1,...entries.map(([,value])=>value));return entries.map(([name,value])=>`<div><span>${name}</span><i><em style="width:${Math.max(3,value/max*100)}%"></em></i><b>${money(value)}万</b></div>`).join('')}
function cashFlowChartMarkup(rows){const max=Math.max(1,...rows.flatMap(row=>[row.benefit,Math.abs(row.net)]));return rows.map(row=>`<div><i title="当年效益 ${money(row.benefit)}万元" style="height:${Math.max(3,row.benefit/max*100)}%"></i><i class="net ${row.net<0?'negative':''}" title="累计净收益 ${money(row.net)}万元" style="height:${Math.max(3,Math.abs(row.net)/max*100)}%"></i><small>第${row.year}年</small></div>`).join('')}

function project(){return{hospital:$('#hospitalName').value.trim()||'××医院',name:$('#projectName').value.trim()||'智慧病理科建设项目',type:$('#projectType').value,year:$('#budgetYear').value,cap:Number($('#budgetCap').value||0),daily:Number($('#dailySlides').value||0),sites:Number($('#siteCount').value||1),deploy:$('#deployMode').value,data:$('#dataPolicy').value,owner:$('#salesOwner').value.trim()};}
function renderReport(){
  if(!$('#reportTitle')) return;
  const p=project(),t=totals(),m=maturityResult(),r=roiResult(),path=pathDefinition(state.recommendation.selectedPath),evidenceReady=evidenceItems.filter(x=>state.evidence[x.id]).length;
  const baseline=projectRecord(),templateId=activeReportTemplate(),tpl=reportTemplates[templateId];
  const readiness=reportReadiness();
  renderReportTemplateLibrary();$('#reportPaper').dataset.template=templateId;$('#reportKicker').textContent=tpl.kicker;$('#reportTitle').innerHTML=tpl.title(p);$('#reportSubtitle').textContent=tpl.subtitle;tpl.headings.forEach((heading,index)=>$(`#reportHeading${index+1}`).textContent=heading);const reportHeadings=$$('#reportPaper .report-section:not(.report-executive) > h2');[[4,'五、项目可行性分析'],[5,'六、建设内容和技术参数'],[6,'七、项目预算和五年效益测算'],[7,'八、项目实施计划'],[8,'九、项目职责分工'],[9,'十、风险和应对措施'],[10,'十一、附件清单'],[11,'附录：病理AI研究合作与建设预留'],[12,'十二、结论及院方决策事项']].forEach(([index,text])=>{if(reportHeadings[index])reportHeadings[index].textContent=text});$('#reportGoalGrid').innerHTML=goalMarkup(tpl.goals);$('#reportArchitecture').innerHTML=architectureMarkup(tpl.architecture);
  $('#reportQuality').textContent=`${readiness.label} · ${readiness.detail}`;
  $('#coverHospital').textContent=p.hospital;$('#coverDate').textContent=`${today.getFullYear()}年${today.getMonth()+1}月${today.getDate()}日`;
  $('#reportExecStatus').textContent=readiness.label;$('#reportExecConclusion').textContent=`建议以“${path.title}”为本期建设路径，围绕医院现有业务量和流程缺口配置采集、系统、AI与服务能力。当前优惠后测算价为 ${money(t.total)} 万元，正式立项前还需完成现场调研、接口确认、产品使用范围核验和效益数据复核。`;
  $('#reportExecMetrics').innerHTML=[['建设路径',path.title],['建设内容',`${t.items.length}项配置`],['参考投入',`${money(t.total)}万元`],['材料状态',readiness.label]].map(item=>`<div><span>${item[0]}</span><b>${item[1]}</b></div>`).join('');
  const scopeText=templateId==='workflow'?'本期主要建设病理全流程信息管理、质量追溯、统计和院内接口，不自动加入扫描设备或AI模块。':templateId==='platform'?'本期主要包括数字切片采集、平台使用、组织学AI验证、结构化报告和远程会诊。':templateId==='digital'?'本期按病理科整体升级考虑扫描能力、全流程管理、AI辅助诊断、存储和后续服务。':'本期按照医院实际需求配置扫描设备、系统、AI模块、算力存储和实施服务。';
  $('#reportOverview').textContent=`${p.hospital}拟开展${p.name}，项目类型为${p.type}。现阶段按日均约 ${p.daily||'待确认'} 张切片、${p.sites} 个院区进行初步测算，拟采用${p.deploy}方式，数据要求为“${p.data}”。${scopeText}`;
  $('#reportPolicyRows').innerHTML=reportPolicies.map(x=>`<tr><td>${x[0]}</td><td>${x[3]?`<a href="${x[3]}" target="_blank" rel="noopener">${x[1]}</a>`:x[1]}</td><td>${x[2]}</td></tr>`).join('');
  $('#reportBaselineRows').innerHTML=[['医院层级',baseline.level],['年病理病例量',baseline.annualCases?money(baseline.annualCases)+'例':'待院方确认'],['年切片量',baseline.annualSlides?money(baseline.annualSlides)+'张':'待院方确认'],['日均 / 峰值切片量',`${baseline.daily||'待确认'}张 / ${baseline.peakSlides||'待确认'}张`],['病理医生 / 技术人员',`${baseline.doctors||'待确认'}人 / ${baseline.technicians||'待确认'}人`],['现有系统与扫描设备',`${baseline.currentSystem}；${baseline.currentScanner||'扫描设备待确认'}`],['拟对接系统',baseline.interfaces||'待院方与信息科确认'],['数据保存年限与部署方式',`${baseline.retentionYears||'待确认'}年；${baseline.deploy}`],['场地与网络条件',baseline.environment],['当前报告时效',baseline.tat||'待院方确认'],['年度外送/会诊费用',baseline.referralCost?money(baseline.referralCost)+'万元':'待院方确认'],['预算与决策路径',`预算来源：${baseline.budgetSource}；采购方式：${baseline.procurement}；牵头部门：${baseline.leadDept||'待确认'}`]].map(x=>`<tr><th>${x[0]}</th><td>${x[1]}</td></tr>`).join('');
  $('#reportNecessity').textContent=`${tpl.necessity}尚未由院方确认的数据均保留为“待确认”，不代入正式财务结论。`;
  $('#reportFundingNarrative').textContent=(state.quoteMode==='package'?'当前按五年智慧病理科服务测算，套餐内能力不再拆分重复计价；付款、交付边界和设备权属以正式合同为准。':`当前采用“三甲医院模块组合报价”。模块原价依据2026-10-15产品清单计算；本次报价优惠规则为“${t.policy}”。院方报告仅列模块原价、报价优惠和优惠后测算价。该优惠仅用于预算讨论，不构成正式商务报价，最终优惠、税费、维保和付款条件以商务审批及合同为准。`)+` ${budgetPositionText(t.total,p.cap)}。`;
  $('#reportMaturityScore').textContent=document.body.classList.contains('customer-view')?(m.score>=75?'基础较完整':m.score>=50?'已具备基本条件':m.score>=25?'已有部分基础':'现有基础较弱'):`${m.score}/100`;$('#reportMaturityLevel').textContent=m.answered<5?`评估尚未完成 · ${m.level.title}`:`建议方案：${path.title}`;$('#reportMaturityNarrative').textContent=`${m.level.text} 根据目前填写的信息，建议采用“${path.title}”。${state.recommendation.overrideReason?`销售调整说明：${state.recommendation.overrideReason}`:''}`;
  $('#reportDimensions').innerHTML=Object.entries(m.dimensions).map(([k,v])=>`<div><span>${k}</span><b>${dimensionAssessment(k,v)}</b></div>`).join('');$('#reportGapRows').innerHTML=buildReportGapRows(m).map(x=>`<tr><td>${x.name}</td><td>${x.status}</td><td>${x.task}</td><td>${x.acceptance}</td></tr>`).join('');$('#reportMaturitySteps').innerHTML=m.level.steps.map(x=>`<li>${x}</li>`).join('');
  $('#reportSolution').textContent=`本报告按“${tpl.label}”编制，建议方案为“${path.title}”。本期共选择 ${t.items.length} 个项目，包括 ${Object.keys(t.by).join('、')||'待配置'}。${path.summary}${budgetPositionText(t.total,p.cap)}。建设不是简单叠加设备：采集设备负责形成可用数字切片，信息系统负责流程记录与质量追溯，AI模块在适用标本范围内提供辅助分析，实施服务负责接口、培训、试运行和验收。项目可根据预算分期实施，但扫描能力、系统接口、数据安全和模型使用范围应在立项时先确认。`;
  let galleryItems=t.items.filter(item=>item.image).slice(0,4);if(!galleryItems.length&&state.quoteMode==='package')galleryItems=['scan240','scan20','structured'].map(id=>catalog.find(item=>item.id===id)).filter(Boolean);$('#reportGallery').innerHTML=galleryItems.map(item=>`<figure><img src="${reportImagePath(item.image)}" alt="${item.name}" loading="lazy"><figcaption><b>${item.name}</b><br>${item.spec}</figcaption></figure>`).join('');$('#reportGallery').hidden=!galleryItems.length;
  $('#reportFeasibility').innerHTML=reportFeasibilityRows(t,r,readiness).map(x=>`<div class="${x[1]==='基本具备'?'feasible':'conditional'}"><b>${x[0]}</b><strong>${x[1]}</strong><span>${x[2]}</span></div>`).join('');
  $('#reportConfigRows').innerHTML=t.items.length?t.items.map(x=>`<tr><td>${x.group}</td><td>${x.name}<br><small>${x.model}</small></td><td>${x.qty} ${x.unit}</td><td>${x.spec}</td><td>${priceMeta(x).label}</td></tr>`).join(''):'<tr><td colspan="5">尚未选择配置，请先在预算测算器中选择建设内容。</td></tr>';
  $('#reportBudgetRows').innerHTML=t.items.length?t.items.map(x=>`<tr><td>${x.group}</td><td>${x.name}${x.status==='pending'?'（待确认）':''}</td><td>${x.qty} ${x.unit}</td><td>${x.currentPrice?money(x.currentPrice):'待确认'}</td><td>${x.subtotal?money(x.subtotal):'待确认'}</td></tr>`).join(''):'<tr><td colspan="5">尚未形成预算。</td></tr>';
  $('#reportTotal').textContent=`¥${money(t.total)} 万元`;$('#reportOriginalTotal').textContent=money(t.subtotal);$('#reportDiscountTotal').textContent=`-${money(t.discount)}`;$('#reportTableTotal').textContent=money(t.total);$('#reportPending').textContent=t.pending.length?`已优惠 ${money(t.discount)} 万元；另有 ${t.pending.length} 项价格待现场调研后确认`:`已优惠 ${money(t.discount)} 万元；当前所选项目均已有参考价`;
  $('#reportBudgetChart').innerHTML=budgetChartMarkup(t);
  $('#reportFiveYearBenefit').textContent=money(r.benefit)+'万元';$('#reportFiveYearNet').textContent=(r.net>=0?'+':'')+money(r.net)+'万元';$('#reportPayback').textContent=r.payback===null?'未形成':money(r.payback)+'年';$('#reportRoi').textContent=money(r.roi)+'%';
  $('#reportBenefitStory').innerHTML=[['收入与收费','依据医院实际业务量、当地价格政策和院内审批，测算数字病理与AI辅助应用可能形成的增量收入。'],['成本与效率','结合外送会诊、重复投入、人员时间和报告周期，测算可核验的节约额，不使用无来源比例。'],['持续运营','把培训、试运行、质量指标、使用记录和后续维护纳入五年周期，避免只计算一次性建设投入。']].map(item=>`<div><b>${item[0]}</b><span>${item[1]}</span></div>`).join('');
  const cashFlowRows=buildReportCashFlowRows(t,r);$('#reportCashFlowChart').innerHTML=cashFlowChartMarkup(cashFlowRows);$('#reportCashFlowRows').innerHTML=cashFlowRows.map(x=>`<tr><td>第${x.year}年</td><td>${money(x.invest)}</td><td>${money(x.benefit)}</td><td>${money(x.cumulativeBenefit)}</td><td>${x.net>=0?'+':''}${money(x.net)}</td></tr>`).join('');
  const sourceRows=[['年度可增加收入',$('#roiRevenue').value,state.roiSources.revenue],['年度可节约外送/会诊',$('#roiReferral').value,state.roiSources.referral],['年度可节约人力成本',$('#roiLabor').value,state.roiSources.labor],['年度可节约重复投入',$('#roiInfra').value,state.roiSources.infra],['年度运营增量成本',$('#roiAnnualCost').value,state.roiSources.annualCost],['收益年增长率',$('#roiGrowth').value+'%',state.roiSources.growth]];$('#reportRoiSources').innerHTML=`<h3>测算假设与来源</h3>${sourceRows.map(x=>`<div><b>${x[0]}</b><span>${x[1]}${x[0].includes('增长率')?'':'万元'}</span><span>${x[2]}</span></div>`).join('')}`;
  const scenarioNames={conservative:'保守情景',base:'基准情景',positive:'积极情景'};$('#reportRoiNote').textContent=`注：当前采用${scenarioNames[state.scenario]}；收益参数应由院方依据内部台账核验。本测算未计资金时间价值，不作为财务承诺。`;
  $('#reportEvidence').innerHTML=evidenceItems.map(x=>`<div class="${state.evidence[x.id]?'ready':'missing'}"><b>${x.name}</b><span>${state.evidence[x.id]?'已有材料，可纳入报告附件':'待补材料，正式对外前需核验'}</span></div>`).join('');
  $('#reportTimeline').innerHTML=reportTimelineRows(path).map(x=>`<div><b>${x[0]} · ${x[1]}</b><span>${x[2]}</span><em>${x[3]}</em></div>`).join('');
  $('#reportResponsibilityRows').innerHTML=[[baseline.leadDept||'院方项目组（牵头部门待确认）',`协调病理科、信息科、设备科、财务及采购部门，确认业务范围、预算来源和数据安全要求`,`需求确认、场地网络、接口协调、预算与采购决定`],['华银康项目组','完成现场调研、方案细化、软硬件部署、培训和试运行支持','配置清单、实施计划、培训记录、验收材料和使用建议'],['双方项目组','按计划检查进度、处理问题并评估院内使用情况','项目会议、问题清单、阶段评估和验收结论']].map(x=>`<tr><td>${x[0]}</td><td>${x[1]}</td><td>${x[2]}</td></tr>`).join('');
  $('#reportRiskGrid').innerHTML=reportRiskRows(t,r).map(x=>`<div><b>${x[0]}</b><span>${x[1]}</span></div>`).join('');
  $('#frontierAppendix').classList.toggle('include',$('#includeFrontier').checked);
  const roiText=r.annual>0?`按院方录入的收益假设，五年累计效益为 ${money(r.benefit)} 万元，净收益为 ${money(r.net)} 万元。`:'当前尚未录入院方可核实的收益假设，财务可行性待院方数据补充后进一步论证。';
  const maturityText=document.body.classList.contains('customer-view')?`当前判断为“${m.score>=75?'基础较完整':m.score>=50?'已具备基本条件':m.score>=25?'已有部分基础':'现有基础较弱'}”`:`现状评估为 ${m.score}/100 分，评估结果为“${m.level.title}”`;$('#reportConclusionStatus').textContent=`当前结论：${readiness.label}`;const budgetText=t.items.length?`按当前配置测算，${p.name}模块原价为 ${money(t.subtotal)} 万元，报价优惠 ${money(t.discount)} 万元，优惠后参考预算为 ${money(t.total)} 万元${t.pending.length?`，另有 ${t.pending.length} 项费用需在现场调研后确定`:''}；${budgetPositionText(t.total,p.cap)}。`:'当前尚未形成完整配置与预算，暂不能给出投资结论。';$('#reportConclusion').textContent=`${maturityText}，建议采用“${path.title}”。${budgetText}${roiText}${readiness.detail} 最终方案还要根据医院实际业务量、峰值切片量、保存年限、接口范围和AI适用标本类型确认。`;
  const decisions=[];if(readiness.missing.length)decisions.push(`组织相关部门补充并确认：${readiness.missing.slice(0,6).join('、')}${readiness.missing.length>6?'等':''}`);decisions.push('同意开展现场调研和立项论证，明确院方牵头部门及参与部门');decisions.push(`确认预算来源与采购方式：${baseline.budgetSource} / ${baseline.procurement}`);decisions.push(t.items.length?'以当前配置作为技术和预算讨论稿，继续确认参数、接口和价格':'根据现场调研结果确定本期建设范围与配置清单');decisions.push('通过试运行核对流程、临床使用和验收指标，再确定后续扩展范围');$('#reportDecisionList').innerHTML=decisions.slice(0,5).map(x=>`<li>${x}</li>`).join('');const closingNote=$('.report-section.conclusion > p:last-of-type');if(closingNote)closingNote.textContent='项目实施期间，华银康负责方案细化、安装部署、人员培训和试运行支持，具体工作范围以最终合同和项目清单为准。';
  renderDeliveryChecklist();
}

document.addEventListener('click',e=>{
  const nav=e.target.closest('.nav-item');if(nav) showView(nav.dataset.view);
  const go=e.target.closest('[data-go]');if(go) showView(go.dataset.go);
  const quoteMode=e.target.closest('[data-quote-mode]');if(quoteMode)setQuoteMode(quoteMode.dataset.quoteMode);
  const mode=e.target.closest('[data-assessment-mode]');if(mode){state.assessmentMode=mode.dataset.assessmentMode;$$('[data-assessment-mode]').forEach(x=>x.classList.toggle('active',x===mode));renderAssessmentInputs();updateAssessment()}
  const reportTemplate=e.target.closest('[data-report-template]');if(reportTemplate){state.reportTemplate=reportTemplate.dataset.reportTemplate;renderReport();saveIntegratedDraft(true);toast(`已切换为${reportTemplates[state.reportTemplate].label}`)}
  const scenario=e.target.closest('[data-scenario]');if(scenario){state.scenario=scenario.dataset.scenario;updateAssessment();saveIntegratedDraft(true)}
  const dec=e.target.closest('#decisionOptions [data-preset]');if(dec){applyPreset(dec.dataset.preset);showView('assessment')}
  const pre=e.target.closest('#presetGrid [data-preset]');if(pre) applyPreset(pre.dataset.preset);
  const row=e.target.closest('.catalog-row');if(row){const id=row.dataset.id;if(e.target.classList.contains('item-check')){state.selected[id]=e.target.checked?normalizeQty(id,state.selected[id]||1):0;renderCatalog();updateAll()}if(e.target.classList.contains('qty-plus')){state.selected[id]=normalizeQty(id,(state.selected[id]||0)+1);renderCatalog();updateAll()}if(e.target.classList.contains('qty-minus')){state.selected[id]=normalizeQty(id,(state.selected[id]||0)-1);renderCatalog();updateAll()}}
});
document.addEventListener('change',e=>{
  const row=e.target.closest('.catalog-row');if(row&&e.target.classList.contains('qty-input')){state.selected[row.dataset.id]=normalizeQty(row.dataset.id,e.target.value);renderCatalog();updateAll()}if(row&&e.target.classList.contains('unit-price')){state.prices[row.dataset.id]=Math.max(0,Number(e.target.value||0));renderCatalog();updateAll()}if(e.target.matches('#onlySelected'))renderCatalog();
  if(e.target.matches('#discountMode')){state.discountMode=e.target.value;updateAll();saveIntegratedDraft(true);toast(state.discountMode==='suggested'?'已启用建议优惠规则':'已切换报价优惠选项')}
  if(e.target.matches('#customDiscountRate')){state.customDiscountRate=Math.min(30,Math.max(0,Number(e.target.value||0)));updateAll();saveIntegratedDraft(true)}
  if(e.target.matches('[name^="maturity"]')){state.answers[Number(e.target.name.replace('maturity',''))]=Number(e.target.value);state.recommendation.confirmed=false;updateAssessment();saveIntegratedDraft(true)}
  if(e.target.matches('[data-evidence]')){state.evidence[e.target.dataset.evidence]=e.target.checked;updateAssessment();saveIntegratedDraft(true)}
  if(e.target.matches('#includeFrontier,#roiRevenue,#roiReferral,#roiLabor,#roiInfra,#roiAnnualCost,#roiGrowth')){updateAssessment();saveIntegratedDraft(true)}
  if(e.target.matches('[data-roi-source]')){state.roiSources[e.target.dataset.roiSource]=e.target.value;updateAssessment();saveIntegratedDraft(true)}
  if(e.target.matches('#reportTemplate')){state.reportTemplate=e.target.value;renderReport();saveIntegratedDraft(true);toast(state.reportTemplate==='auto'?`已根据当前方案选择${reportTemplates[activeReportTemplate()].label}`:`已切换为${reportTemplates[state.reportTemplate].label}`)}
  if(e.target.matches('#projectHospital,#projectTitle,#hospitalLevel,#projectScene,#projectDaily,#projectSites,#projectCap,#projectYear,#projectDeploy,#projectData,#projectOwner,#projectGoal,#projectAnnualCases,#projectAnnualSlides,#projectDoctors,#projectCurrentSystem,#projectCurrentScanner,#projectTat,#projectReferralCost,#projectPeakSlides,#projectTechnicians,#projectAnnualConsults,#projectRetentionYears,#projectInterfaces,#projectEnvironment,#projectBudgetSource,#projectProcurement,#projectLeadDept,#projectStartDate')){syncProjectFileToAll();state.recommendation.confirmed=false;updateAll();saveIntegratedDraft(true)}
  if(e.target.matches('#assessmentHospital,#assessmentType,#assessmentDaily,#assessmentSites')){syncAssessmentToProject();updateAll();saveIntegratedDraft(true)}
  if(e.target.matches('#hospitalName,#projectName,#projectType,#budgetYear,#budgetCap,#dailySlides,#siteCount,#deployMode,#dataPolicy,#salesOwner')){syncProjectToAssessment();if(e.target.matches('#projectType,#dailySlides,#siteCount,#deployMode,#dataPolicy'))state.recommendation.confirmed=false;updateAll();saveIntegratedDraft(true)}
});
document.addEventListener('input',e=>{const row=e.target.closest('.catalog-row');if(row&&e.target.classList.contains('qty-input')){state.selected[row.dataset.id]=normalizeQty(row.dataset.id,e.target.value);updateAll()}if(row&&e.target.classList.contains('unit-price')){state.prices[row.dataset.id]=Math.max(0,Number(e.target.value||0));updateAll()}if(e.target.matches('#customDiscountRate')){state.customDiscountRate=Math.min(30,Math.max(0,Number(e.target.value||0)));updateAll()}if(e.target.matches('#catalogSearch'))renderCatalog();if(e.target.matches('#projectHospital,#projectTitle,#projectDaily,#projectSites,#projectCap,#projectYear,#projectOwner,#projectAnnualCases,#projectAnnualSlides,#projectDoctors,#projectCurrentScanner,#projectTat,#projectReferralCost,#projectPeakSlides,#projectTechnicians,#projectAnnualConsults,#projectRetentionYears,#projectInterfaces,#projectLeadDept,#projectStartDate')){syncProjectFileToAll();state.recommendation.confirmed=false;updateAll()}if(e.target.matches('#assessmentHospital,#assessmentDaily,#assessmentSites')){syncAssessmentToProject();updateAll()}if(e.target.matches('#roiRevenue,#roiReferral,#roiLabor,#roiInfra,#roiAnnualCost,#roiGrowth'))updateAssessment();if(e.target.matches('#hospitalName,#projectName,#budgetCap,#dailySlides,#siteCount,#salesOwner')){syncProjectToAssessment();updateAll()}});

$('#generateReport').addEventListener('click',()=>{renderReport();showView('value')});
$('#printReport').addEventListener('click',()=>window.print());
$('#copyReport').addEventListener('click',async()=>{try{await navigator.clipboard.writeText($('#reportPaper').innerText);toast('报告正文已复制')}catch{toast('浏览器未授权复制，请手动选择正文')}});
$('#modeToggle').addEventListener('click',()=>{state.clientMode=!state.clientMode;document.body.classList.toggle('customer-view',state.clientMode);$('#modeToggle').textContent=state.clientMode?'返回销售工具':'切换客户展示';renderReport();toast(state.clientMode?'已隐藏内部评分、价格依据和审批提示':'已返回销售使用界面')});
$('#catalogBtn').addEventListener('click',()=>showView('catalog'));
$('#catalogSideBtn').addEventListener('click',()=>showView('catalog'));
$('#customerModeExit').addEventListener('click',()=>$('#modeToggle').click());
$('#portalPreview').addEventListener('click',()=>{if(window.parent!==window)window.parent.postMessage({type:'hykai:navigate',portal:'public'},'*');else window.location.href='index.html#public'});
$('#adminDashboard').addEventListener('click',()=>{if(window.parent!==window)window.parent.postMessage({type:'hykai:navigate',portal:'admin'},'*');else window.location.href='index.html#admin'});
$('#guideBtn').addEventListener('click',()=>$('#guideDialog').showModal());
$('#closeGuide').addEventListener('click',()=>$('#guideDialog').close());
$('#startFromGuide').addEventListener('click',()=>{$('#guideDialog').close();showView('assessment')});
$('#acceptPath').addEventListener('click',()=>{const rec=systemRecommendation();if(!state.recommendation.selectedPath)state.recommendation.selectedPath=rec.path;state.recommendation.confirmed=true;state.recommendation.overrideReason='';const def=pathDefinition(state.recommendation.selectedPath);applyBudgetPreset(def.preset);renderRecommendation();saveIntegratedDraft(true);showView('calculator')});
$('#adjustPath').addEventListener('click',()=>$('#pathDialog').showModal());$('#closePathDialog').addEventListener('click',()=>$('#pathDialog').close());
$('#confirmPathOverride').addEventListener('click',()=>{const selected=$('[name="pathChoice"]:checked'),reason=$('#pathOverrideReason').value.trim();if(!selected)return toast('请选择建设路径');if(!reason)return toast('请填写调整原因');state.recommendation.selectedPath=selected.value;state.recommendation.confirmed=true;state.recommendation.overrideReason=reason;$('#pathDialog').close();const def=pathDefinition(selected.value);applyBudgetPreset(def.preset);renderRecommendation();saveIntegratedDraft(true);showView('calculator')});
const clientOutput=$('#clientOutput');
if(clientOutput)clientOutput.addEventListener('click',()=>{if(!state.clientMode)$('#modeToggle').click();renderReport();window.scrollTo({top:$('#reportPaper').getBoundingClientRect().top+window.scrollY-20,behavior:'smooth'})});
function proposalSummary(){const p=project(),b=projectRecord(),t=totals(),path=pathDefinition(state.recommendation.selectedPath);return [`${p.hospital}${p.name}`,'',`一、项目定位：${quoteModeLabel()}`,`二、建设路径：${path.title}`,`三、院方基线：年病理病例量 ${b.annualCases?money(b.annualCases)+'例':'待确认'}，年切片量 ${b.annualSlides?money(b.annualSlides)+'张':'待确认'}，病理医生 ${b.doctors||'待确认'} 人，现有扫描设备 ${b.currentScanner||'待确认'}`,`四、建设范围：${Object.keys(t.by).join('、')||'待配置'}`,'',...
t.items.map((x,i)=>`${i+1}. ${x.name}：${x.qty}${x.unit}；${x.spec}`),'',`五、参考预算：模块原价${money(t.subtotal)}万元，报价优惠${money(t.discount)}万元，优惠后测算价${money(t.total)}万元${t.pending.length?`，另有${t.pending.length}项价格待确认`:''}`,`六、实施建议：${path.summary}`,'', '说明：报价优惠仅用于预算测算，不构成正式报价；最终范围、价格、交付边界与产品合规信息以商务审批和正式文件为准。'].join('\n')}
function economicsSummary(){const r=roiResult();return ['经济效益测算表',`项目投入\t${money(r.invest)}万元`,`五年累计效益\t${money(r.benefit)}万元`,`五年净收益\t${money(r.net)}万元`,`静态回收期\t${r.payback===null?'未形成':money(r.payback)+'年'}`,`五年ROI\t${money(r.roi)}%`,'','测算假设\t数值\t来源',`年度可增加收入\t${$('#roiRevenue').value}万元\t${state.roiSources.revenue}`,`年度可节约外送/会诊\t${$('#roiReferral').value}万元\t${state.roiSources.referral}`,`年度可节约人力成本\t${$('#roiLabor').value}万元\t${state.roiSources.labor}`,`年度可节约重复投入\t${$('#roiInfra').value}万元\t${state.roiSources.infra}`,`年度运营增量成本\t${$('#roiAnnualCost').value}万元\t${state.roiSources.annualCost}`,`收益年增长率\t${$('#roiGrowth').value}%\t${state.roiSources.growth}`,'','注：本测算未计资金时间价值，不作为财务承诺，所有参数应由院方依据内部台账核验。'].join('\n')}
$('#copyProposal').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(proposalSummary());toast('医院建设方案摘要已复制')}catch{toast('浏览器未授权复制')}});
$('#copyEconomics').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(economicsSummary());toast('经济效益测算表已复制')}catch{toast('浏览器未授权复制')}});
$('#copyDeliveryPack').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(`${proposalSummary()}\n\n${economicsSummary()}\n\n${$('#reportPaper').innerText}`);toast('整套院方交付内容已复制')}catch{toast('浏览器未授权复制')}});
$('#copyBudget').addEventListener('click',async()=>{const t=totals(),text=[`报价方式\t${quoteModeLabel()}`,'预算科目\t配置内容\t数量\t单价（万元）\t小计（万元）',...t.items.map(x=>`${x.group}\t${x.name}\t${x.qty}${x.unit}\t${x.currentPrice||'待确认'}\t${x.subtotal||'待确认'}`),`模块原价\t\t\t\t${t.subtotal}`,`报价优惠（测算）\t\t\t\t-${t.discount}`,`优惠后测算价\t\t\t\t${t.total}`,`优惠规则\t${t.policy}`,'说明\t报价优惠仅用于预算测算，不构成正式报价；最终以商务审批为准。'].join('\n');try{await navigator.clipboard.writeText(text);toast(state.quoteMode==='package'?'套餐预算表已复制':'模块组合报价表已复制')}catch{toast('浏览器未授权复制')}});
$('#focusReport').addEventListener('click',()=>window.scrollTo({top:$('#reportPaper').getBoundingClientRect().top+window.scrollY-20,behavior:'smooth'}));
$('#newProject').addEventListener('click',()=>{if(!confirm('新建项目将清空当前医院信息、评估答案和方案确认状态，是否继续？'))return;$('#projectHospital').value='';$('#projectTitle').value='智慧病理科建设项目';$('#projectDaily').value=300;$('#projectSites').value=1;$('#projectCap').value=500;$('#projectAnnualCases').value='';$('#projectAnnualSlides').value='';$('#projectDoctors').value='';$('#projectCurrentScanner').value='';$('#projectTat').value='';$('#projectReferralCost').value='';$('#projectPeakSlides').value='';$('#projectTechnicians').value='';$('#projectAnnualConsults').value='';$('#projectRetentionYears').value=5;$('#projectInterfaces').value='';$('#projectEnvironment').value='待现场核验';$('#projectBudgetSource').value='待确认';$('#projectProcurement').value='待确认';$('#projectLeadDept').value='';$('#projectStartDate').value='';state.discountMode='suggested';state.customDiscountRate=12;state.reportTemplate='auto';state.answers=Array(10).fill(null);state.recommendation={systemPath:'baseline',selectedPath:'baseline',confirmed:false,overrideReason:''};syncProjectFileToAll();renderAssessmentInputs();updateAll();saveIntegratedDraft(true);toast('已新建空白项目')});
$('#autoConfigure').addEventListener('click',()=>{const daily=Number($('#dailySlides').value||0),sites=Number($('#siteCount').value||1);applyBudgetPreset(daily>480||sites>1?'regional':'baseline')});
function assessmentDraft(){return{mode:state.assessmentMode,reportTemplate:state.reportTemplate,answers:state.answers,evidence:state.evidence,includeFrontier:$('#includeFrontier').checked,scenario:state.scenario,roiSources:state.roiSources,recommendation:state.recommendation,roi:{revenue:$('#roiRevenue').value,referral:$('#roiReferral').value,labor:$('#roiLabor').value,infra:$('#roiInfra').value,annualCost:$('#roiAnnualCost').value,growth:$('#roiGrowth').value}}}
function saveIntegratedDraft(silent=false){localStorage.setItem('hykai-sales-draft',JSON.stringify({catalogVersion:CATALOG_VERSION,quoteMode:state.quoteMode,selected:state.selected,prices:state.prices,pricing:{discountMode:state.discountMode,customDiscountRate:state.customDiscountRate},project:project(),projectRecord:projectRecord(),assessment:assessmentDraft()}));if(!silent)toast('项目档案、报价方式、配置与报告草稿已保存到本机')}
$('#saveDraft').addEventListener('click',()=>saveIntegratedDraft());
$('#clearProject').addEventListener('click',()=>{if(confirm('确认清空医院与项目基本信息？配置清单不会被删除。')){$('#hospitalName').value='';$('#projectName').value='智慧病理科建设项目';$('#budgetCap').value=500;$('#dailySlides').value=300;$('#siteCount').value=1;$('#salesOwner').value='';updateAll()}});

function loadPricingDraft(){try{const d=JSON.parse(localStorage.getItem('hykai-sales-draft')),pricing=d&&d.pricing||{};if(['suggested','none','pct3','pct5','pct8','pct10','custom'].includes(pricing.discountMode))state.discountMode=pricing.discountMode;if(pricing.customDiscountRate!==undefined)state.customDiscountRate=Math.min(30,Math.max(0,Number(pricing.customDiscountRate||0)))}catch{}}
function loadDraft(){try{const d=JSON.parse(localStorage.getItem('hykai-sales-draft'));if(!d)return;const validIds=new Set(catalog.map(x=>x.id));state.selected=Object.fromEntries(Object.entries(d.selected||{}).filter(([id])=>validIds.has(id)).map(([id,qty])=>[id,normalizeQty(id,qty)]));if(d.catalogVersion===CATALOG_VERSION)state.prices={...state.prices,...(d.prices||{})};const p=d.project||{};if(p.hospital&&p.hospital!=='××医院')$('#hospitalName').value=p.hospital;if(p.name)$('#projectName').value=p.name;if(p.type)$('#projectType').value=p.type;if(p.year)$('#budgetYear').value=p.year;if(p.cap!==undefined)$('#budgetCap').value=p.cap;if(p.daily)$('#dailySlides').value=p.daily;if(p.sites)$('#siteCount').value=p.sites;if(p.deploy)$('#deployMode').value=p.deploy;if(p.data)$('#dataPolicy').value=p.data;if(p.owner)$('#salesOwner').value=p.owner;const pr=d.projectRecord||{};if(pr.hospital!==undefined)$('#projectHospital').value=pr.hospital;if(pr.title)$('#projectTitle').value=pr.title;if(pr.level)$('#hospitalLevel').value=pr.level;if(pr.scene)$('#projectScene').value=pr.scene;if(pr.daily!==undefined)$('#projectDaily').value=pr.daily;if(pr.sites)$('#projectSites').value=pr.sites;if(pr.cap!==undefined)$('#projectCap').value=pr.cap;if(pr.year)$('#projectYear').value=pr.year;if(pr.deploy)$('#projectDeploy').value=pr.deploy;if(pr.data)$('#projectData').value=pr.data;if(pr.owner!==undefined)$('#projectOwner').value=pr.owner;if(pr.goal)$('#projectGoal').value=pr.goal;if(pr.annualCases!==undefined)$('#projectAnnualCases').value=pr.annualCases;if(pr.annualSlides!==undefined)$('#projectAnnualSlides').value=pr.annualSlides;if(pr.doctors!==undefined)$('#projectDoctors').value=pr.doctors;if(pr.currentSystem)$('#projectCurrentSystem').value=pr.currentSystem;if(pr.currentScanner!==undefined)$('#projectCurrentScanner').value=pr.currentScanner;if(pr.tat!==undefined)$('#projectTat').value=pr.tat;if(pr.referralCost!==undefined)$('#projectReferralCost').value=pr.referralCost;const a=d.assessment||{};if(a.mode)state.assessmentMode=a.mode;if(a.reportTemplate&&['auto',...Object.keys(reportTemplates)].includes(a.reportTemplate))state.reportTemplate=a.reportTemplate;if(Array.isArray(a.answers))state.answers=a.answers;if(a.evidence)state.evidence={...state.evidence,...a.evidence};if(a.includeFrontier!==undefined)$('#includeFrontier').checked=a.includeFrontier;if(a.scenario)state.scenario=a.scenario;if(a.roiSources)state.roiSources={...state.roiSources,...a.roiSources};if(a.recommendation)state.recommendation={...state.recommendation,...a.recommendation};const r=a.roi||{};if(r.revenue!==undefined)$('#roiRevenue').value=r.revenue;if(r.referral!==undefined)$('#roiReferral').value=r.referral;if(r.labor!==undefined)$('#roiLabor').value=r.labor;if(r.infra!==undefined)$('#roiInfra').value=r.infra;if(r.annualCost!==undefined)$('#roiAnnualCost').value=r.annualCost;if(r.growth!==undefined)$('#roiGrowth').value=r.growth;$$('[data-roi-source]').forEach(x=>x.value=state.roiSources[x.dataset.roiSource]||'待确认');toast(d.catalogVersion===CATALOG_VERSION?'已恢复上次保存的项目档案与方案草稿':'产品价格已更新为2026-10-15口径，旧草稿仅恢复仍有效的配置')}catch{}}
function loadReportSupplementDraft(){try{const d=JSON.parse(localStorage.getItem('hykai-sales-draft')),pr=d&&d.projectRecord||{};const values={projectPeakSlides:pr.peakSlides,projectTechnicians:pr.technicians,projectAnnualConsults:pr.annualConsults,projectRetentionYears:pr.retentionYears,projectInterfaces:pr.interfaces,projectEnvironment:pr.environment,projectBudgetSource:pr.budgetSource,projectProcurement:pr.procurement,projectLeadDept:pr.leadDept,projectStartDate:pr.startDate};Object.entries(values).forEach(([id,value])=>{if(value!==undefined&&value!==null)$('#'+id).value=value})}catch{}}
loadDraft();loadReportSupplementDraft();if(!Object.keys(state.selected).length)state.selected={...presets.baseline};state.quoteMode=Object.keys(state.selected).some(id=>id.startsWith('package'))?'package':'combination';if(!$('#projectHospital').value&&$('#hospitalName').value)syncProjectToAssessment();else syncProjectFileToAll();renderAssessmentInputs();$$('[data-assessment-mode]').forEach(x=>x.classList.toggle('active',x.dataset.assessmentMode===state.assessmentMode));renderQuoteMode();renderCatalog();renderCatalogCards();updateAll();updateProjectDashboard();
window.addEventListener('message',e=>{if(e.data&&e.data.salesView)showView(e.data.salesView)});
if(new URLSearchParams(location.search).get('clientCalc')==='1'){
  state.clientMode=true;
  document.body.classList.add('client-mode','client-calculator');
  $('#modeToggle').textContent='返回客户演示厅';
  $('#modeToggle').onclick=e=>{e.preventDefault();e.stopImmediatePropagation();if(window.parent!==window)window.parent.postMessage({type:'hykai:navigate',portal:'public'},'*');else window.location.href='客户演示厅.html'};
  showView('calculator');
}
document.addEventListener('DOMContentLoaded',()=>{loadPricingDraft();updateAll()});
