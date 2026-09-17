
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const avatarFiles = {
  male:"assets/avatar-male.svg", female:"assets/avatar-female.svg",
  "party-male":"assets/avatar-party-male.svg", "party-female":"assets/avatar-party-female.svg"
};
const themes = Object.keys(window.QUESTION_BANK);
const prizes = [0,1000,2000,3000,5000,7500,10000,15000,25000,50000,10000,20000,30000,40000,50000,75000,100000,150000,250000,500000,100000,200000,300000,400000,500000,600000,700000,800000,900000,1000000];
const state = {
  name:"Jogador", tone:"Homem", avatar:"male", theme:themes[0], questions:[], index:0, lives:3, streak:0,
  money:0, used:{fifty:false,audience:false,skip:false}, locked:false
};
const fmt = n => n.toLocaleString("pt-BR");
const shuffle = arr => {
  const a=[...arr]; for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]} return a;
};
function showView(id){
  $$(".view").forEach(v=>v.classList.remove("active"));
  const v=$("#"+id); if(v) v.classList.add("active");
  window.scrollTo({top:0,behavior:"smooth"});
  if(id==="ranking") renderRanking();
}
$$("[data-nav]").forEach(b=>b.addEventListener("click",e=>{e.preventDefault(); showView(b.dataset.nav)}));

const themeBox=$("#themes");
themes.forEach((t,i)=>{
  const b=document.createElement("button"); b.className="theme-btn"+(i===0?" selected":""); b.dataset.theme=t;
  b.innerHTML=`<strong>${t}</strong><small>15 básicas • 15 médias • 15 avançadas</small>`;
  b.onclick=()=>{$$(".theme-btn").forEach(x=>x.classList.remove("selected"));b.classList.add("selected");state.theme=t};
  themeBox.appendChild(b);
});
$$(".segmented button").forEach(b=>b.onclick=()=>{$$(".segmented button").forEach(x=>x.classList.remove("selected"));b.classList.add("selected");state.tone=b.dataset.tone});
$$(".avatar-option").forEach(b=>b.onclick=()=>{
  $$(".avatar-option").forEach(x=>x.classList.remove("selected")); b.classList.add("selected");
  state.avatar=b.dataset.avatar; $("#previewAvatar").src=avatarFiles[state.avatar]; $("#previewAvatar").alt=b.innerText.trim();
});

function buildQuestions(){
  const src=window.QUESTION_BANK[state.theme];
  if(!src || src.length<45) throw new Error("Banco incompleto");
  const levels=[src.slice(0,15),src.slice(15,30),src.slice(30,45)];
  return levels.flatMap((pool,level)=>shuffle(pool).slice(0,10).map((q,n)=>({
    text:q[0], choices:q[1], answer:q[2], level, originalIndex:n
  })));
}
function setGameHeader(){
  $("#gameAvatar").src=avatarFiles[state.avatar]; $("#gameName").textContent=state.name; $("#greeting").textContent=state.name;
  $("#money").textContent=fmt(state.money); $("#sideMoney").textContent=fmt(state.money); $("#topCash").textContent=fmt(state.money);
  $("#qNumber").textContent=state.index+1; $("#progressBar").style.width=((state.index)/30*100+3)+"%";
}
function difficultyLabel(level){return ["BÁSICA","MÉDIA","AVANÇADA"][level]}
function renderQuestion(){
  state.locked=false;
  const q=state.questions[state.index];
  $("#difficulty").textContent=difficultyLabel(q.level);
  $("#difficulty").className="difficulty "+(q.level===1?"medium":q.level===2?"advanced":"");
  $("#questionText").textContent=q.text;
  $("#questionSpeech").textContent=state.index===0?"PERGUNTA":"CONTINUE!";
  const box=$("#answers"); box.innerHTML="";
  q.choices.forEach((c,i)=>{
    const b=document.createElement("button"); b.className="answer"; b.dataset.i=i;
    b.innerHTML=`${String.fromCharCode(65+i)}) ${c}`;
    b.onclick=()=>answer(i,b);
    box.appendChild(b);
  });
  $("#streak").textContent=state.streak;
  $("#reaction").textContent=state.index===0?"A apresentadora está de olho...":"A planta está torcendo por você!";
  renderLives(); setGameHeader();
  ["fiftyBtn","audienceBtn","skipBtn"].forEach((id,idx)=>{
    const key=["fifty","audience","skip"][idx]; $("#"+id).disabled=state.used[key];
  });
}
function renderLives(){
  $("#lives").textContent="♥ ".repeat(state.lives)+"♡ ".repeat(3-state.lives);
}
function answer(i,button){
  if(state.locked)return; state.locked=true;
  const q=state.questions[state.index];
  $$(".answer").forEach(b=>b.disabled=true);
  if(i===q.answer){
    button.classList.add("correct"); state.streak++; state.money=prizes[state.index+1];
    $("#reaction").textContent=state.streak>=3?"🔥 Sequência! A apresentadora aprovou!":"✓ Resposta correta!";
    $("#topCash").textContent=fmt(state.money);
    setTimeout(()=>nextQuestion(),650);
  }else{
    button.classList.add("wrong"); $(`.answer[data-i="${q.answer}"]`).classList.add("correct");
    state.lives--; state.streak=0; renderLives();
    $("#reaction").textContent="✕ Essa não. Você perdeu uma vida.";
    setTimeout(()=>{
      if(state.lives<=0) endGame("lives"); else {state.index++; renderQuestion();}
    },900);
  }
}
function nextQuestion(){
  state.index++;
  if(state.index>=30) endGame("win"); else renderQuestion();
}
$("#fiftyBtn").onclick=()=>{
  if(state.used.fifty||state.locked)return; state.used.fifty=true;
  const q=state.questions[state.index], wrong=shuffle(q.choices.map((_,i)=>i).filter(i=>i!==q.answer)).slice(0,2);
  wrong.forEach(i=>{const b=$(`.answer[data-i="${i}"]`);if(b){b.disabled=true;b.style.visibility="hidden"}});
  $("#hostText").textContent="50:50 usado. Duas opções foram retiradas.";
  $("#fiftyBtn").disabled=true;
};
$("#audienceBtn").onclick=()=>{
  if(state.used.audience||state.locked)return; state.used.audience=true;
  const q=state.questions[state.index], probs=q.choices.map((_,i)=>i===q.answer?62:Math.floor(38/(q.choices.length-1)));
  const total=probs.reduce((a,b)=>a+b,0); probs[q.answer]+=100-total;
  $("#hostText").textContent="Plateia: "+probs.map((p,i)=>`${String.fromCharCode(65+i)} ${p}%`).join(" · ");
  $("#audienceBtn").disabled=true;
};
$("#skipBtn").onclick=()=>{
  if(state.used.skip||state.locked)return; state.used.skip=true; state.index++;
  $("#hostText").textContent="Pulou! A pergunta seguinte já está pronta.";
  if(state.index>=30) endGame("win"); else renderQuestion();
};
$("#quitBtn").onclick=()=>openModal("Sair da partida","A partida atual será encerrada.","Você pode começar outra partida quando quiser.",[
  ["VOLTAR AO INÍCIO","primary",()=>{closeModal();showView("home")}]
]);

function startGame(){
  const name=$("#nameInput").value.trim();
  if(!name){$("#setupError").textContent="Digite seu nome antes de entrar no palco.";$("#nameInput").focus();return}
  try{state.name=name;state.questions=buildQuestions();state.index=0;state.lives=3;state.streak=0;state.money=0;state.used={fifty:false,audience:false,skip:false};$("#setupError").textContent="";showView("game");renderQuestion()}
  catch(e){$("#setupError").textContent="O banco de perguntas deste tema precisa ter 45 perguntas.";console.error(e)}
}
$("#startBtn").onclick=startGame;

function saveResult(){
  const key="showBilhaoRanking";
  const data=JSON.parse(localStorage.getItem(key)||"[]");
  data.push({name:state.name,money:state.money,theme:state.theme,date:new Date().toLocaleDateString("pt-BR")});
  data.sort((a,b)=>b.money-a.money); localStorage.setItem(key,JSON.stringify(data.slice(0,20)));
}
function renderRanking(){
  const box=$("#rankingList"), data=JSON.parse(localStorage.getItem("showBilhaoRanking")||"[]");
  box.innerHTML=data.length?data.map((r,i)=>`<div class="rank-row"><div class="rank-pos">#${i+1}</div><div><div class="rank-name">${escapeHtml(r.name)}</div><div class="rank-meta">${escapeHtml(r.theme)} • ${r.date}</div></div><div class="rank-money">R$ ${fmt(r.money)}</div></div>`).join(""):"<p>Nenhuma pontuação registrada ainda.</p>";
}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}
function openModal(title,text,extra,actions){
  $("#modalTitle").textContent=title; $("#modalText").innerHTML=escapeHtml(text)+(extra?`<br><small>${escapeHtml(extra)}</small>`:"");
  const a=$("#modalActions");a.innerHTML="";
  actions.forEach(([label,cls,fn])=>{const b=document.createElement("button");b.textContent=label;b.className=cls==="primary"?"primary":"secondary";b.onclick=fn;a.appendChild(b)});
  $("#modal").hidden=false;
}
function closeModal(){$("#modal").hidden=true}
function endGame(reason){
  saveResult();
  if(reason==="win"){
    openModal("🏆 Você chegou ao milhão!",`Parabéns, ${state.name}!`,`Tema: ${state.theme}. Resultado máximo: R$ 1.000.000.`,[
      ["JOGAR NOVAMENTE","primary",()=>{closeModal();startGame()}],["RANKING","secondary",()=>{closeModal();showView("ranking")}]
    ]);
  }else{
    openModal("As vidas acabaram",`Você terminou com R$ ${fmt(state.money)}.`,`Você pode tentar novamente mantendo nome, avatar e tema.`,[
      ["TENTAR DE NOVO","primary",()=>{closeModal();startGame()}],["INÍCIO","secondary",()=>{closeModal();showView("home")}]
    ]);
  }
}
$("#modal").addEventListener("click",e=>{if(e.target.id==="modal")closeModal()});
document.addEventListener("keydown",e=>{
  if(!$("#game").classList.contains("active")||state.locked)return;
  if(["1","2","3","4"].includes(e.key)){const b=$$(".answer")[Number(e.key)-1];if(b&&!b.disabled)b.click()}
});
renderRanking();
