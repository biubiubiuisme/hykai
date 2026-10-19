(()=>{
  'use strict';
  const STORAGE_KEY='hykai_access_v3';
  const ACCOUNT_HASH='6f5dc6232d16bc8a3c763bda9981fe78e8b2ca36e0b401750ca30c1a95dcd1fb';

  function validSession(){
    try{
      const value=JSON.parse(localStorage.getItem(STORAGE_KEY)||'null');
      return Boolean(value&&value.granted===true);
    }catch(_){return false}
  }

  function addSignout(){
    if(window.top!==window||document.querySelector('.hykai-access-signout'))return;
    const button=document.createElement('button');
    button.type='button';
    button.className='hykai-access-signout';
    button.textContent='退出访问';
    button.addEventListener('click',()=>{
      localStorage.removeItem(STORAGE_KEY);
      location.reload();
    });
    document.body.appendChild(button);
  }

  function unlock(){
    document.documentElement.classList.remove('access-pending','access-locked');
    if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',addSignout,{once:true});
    else addSignout();
  }

  async function digest(value){
    const bytes=new TextEncoder().encode(value);
    const result=await crypto.subtle.digest('SHA-256',bytes);
    return Array.from(new Uint8Array(result),byte=>byte.toString(16).padStart(2,'0')).join('');
  }

  function lock(){
    document.documentElement.classList.remove('access-pending');
    document.documentElement.classList.add('access-locked');
    const gate=document.createElement('main');
    gate.id='hykai-access-gate';
    gate.innerHTML=`<section class="hykai-access-card" aria-labelledby="accessTitle">
      <div class="hykai-access-brand"><img src="assets/public-logo.png" alt="华银康集团"><span></span><div><b>HYKAI</b><small>智慧病理方案平台</small></div></div>
      <h1 id="accessTitle">访问验证</h1>
      <p>本平台仅供授权的华银康员工及客户使用。请输入账号和密码继续。</p>
      <form id="hykaiAccessForm">
        <label class="hykai-access-field"><span>账号</span><input id="hykaiAccessUser" type="text" autocomplete="username" autocapitalize="none" spellcheck="false" required></label>
        <label class="hykai-access-field" style="margin-top:12px"><span>密码</span><input id="hykaiAccessPassword" type="password" autocomplete="current-password" autocapitalize="none" spellcheck="false" required></label>
        <button class="hykai-access-submit" type="submit">验证并进入</button>
        <p class="hykai-access-error" id="hykaiAccessError" role="alert"></p>
      </form>
      <div class="hykai-access-foot">验证通过后，本设备将保持登录，直到主动退出或清理浏览器数据。请勿将账号密码发布到公开群或公众平台。</div>
    </section>`;
    document.body.appendChild(gate);
    const form=gate.querySelector('#hykaiAccessForm');
    const user=gate.querySelector('#hykaiAccessUser');
    const password=gate.querySelector('#hykaiAccessPassword');
    const error=gate.querySelector('#hykaiAccessError');
    const submit=gate.querySelector('.hykai-access-submit');
    user.focus();
    form.addEventListener('submit',async event=>{
      event.preventDefault();
      submit.disabled=true;
      error.textContent='';
      const identity=`${user.value.trim().toLowerCase()}:${password.value}`;
      const hash=await digest(identity);
      if(hash===ACCOUNT_HASH){
        localStorage.setItem(STORAGE_KEY,JSON.stringify({granted:true,account:user.value.trim().toLowerCase()}));
        location.reload();
        return;
      }
      error.textContent='账号或密码不正确，请核对后重试。';
      password.select();
      submit.disabled=false;
    });
  }

  if(validSession())unlock();
  else if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',lock,{once:true});
  else lock();
})();
