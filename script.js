const questions = [
 {d:"BÁSICA", q:"Qual é o maior planeta do Sistema Solar?", a:["Terra","Júpiter","Marte","Vênus"], c:1, p:1000},
 {d:"BÁSICA", q:"Qual é a capital do Brasil?", a:["Rio de Janeiro","Brasília","Salvador","São Paulo"], c:1, p:2000},
 {d:"BÁSICA", q:"Quantos lados tem um triângulo?", a:["2","3","4","5"], c:1, p:3000},
 {d:"BÁSICA", q:"Qual animal é conhecido como 'rei da selva'?", a:["Tigre","Leão","Lobo","Onça"], c:1, p:5000},
 {d:"BÁSICA", q:"Qual é o resultado de 7 × 8?", a:["54","56","64","48"], c:1, p:7000},
 {d:"BÁSICA", q:"Qual oceano banha a costa leste do Brasil?", a:["Pacífico","Índico","Atlântico","Ártico"], c:2, p:10000},
 {d:"BÁSICA", q:"Qual gás é mais abundante na atmosfera terrestre?", a:["Oxigênio","Nitrogênio","CO₂","Hélio"], c:1, p:15000},
 {d:"BÁSICA", q:"Qual instrumento possui teclas pretas e brancas?", a:["Violino","Piano","Flauta","Trompete"], c:1, p:20000},
 {d:"BÁSICA", q:"Em que continente fica o Egito?", a:["Europa","África","Ásia","Oceania"], c:1, p:30000},
 {d:"BÁSICA", q:"Qual é o estado físico da água a 0 °C, em condições normais?", a:["Sempre vapor","Sólido/líquido em equilíbrio","Plasma","Somente gás"], c:1, p:40000},

 {d:"MÉDIA", q:"Qual civilização construiu Machu Picchu?", a:["Maia","Asteca","Inca","Fenícia"], c:2, p:50000},
 {d:"MÉDIA", q:"Qual é o símbolo químico do ferro?", a:["Fe","Ir","F","Fr"], c:0, p:60000},
 {d:"MÉDIA", q:"Qual planeta possui os anéis mais conhecidos do Sistema Solar?", a:["Saturno","Urano","Netuno","Júpiter"], c:0, p:70000},
 {d:"MÉDIA", q:"Quem escreveu 'Dom Quixote'?", a:["Cervantes","Dante","Shakespeare","Goethe"], c:0, p:80000},
 {d:"MÉDIA", q:"Qual é a unidade básica de informação digital?", a:["Byte","Bit","Pixel","Hertz"], c:1, p:90000},
 {d:"MÉDIA", q:"Qual país é atravessado pelo rio Nilo e abriga o vale dos reis?", a:["Egito","Grécia","Turquia","Marrocos"], c:0, p:100000},
 {d:"MÉDIA", q:"A Revolução Industrial começou primeiro em qual país?", a:["França","Alemanha","Inglaterra","Itália"], c:2, p:120000},
 {d:"MÉDIA", q:"Qual órgão humano bombeia o sangue?", a:["Pulmão","Fígado","Coração","Rim"], c:2, p:140000},
 {d:"MÉDIA", q:"Qual é a raiz quadrada de 144?", a:["10","11","12","14"], c:2, p:160000},
 {d:"MÉDIA", q:"Qual é o maior oceano da Terra?", a:["Atlântico","Índico","Pacífico","Ártico"], c:2, p:180000},

 {d:"AVANÇADA", q:"Qual processo produz ATP principalmente nas mitocôndrias?", a:["Fotossíntese","Respiração celular","Transcrição","Fermentação láctica"], c:1, p:220000},
 {d:"AVANÇADA", q:"Qual tratado encerrou formalmente a Primeira Guerra Mundial com a Alemanha?", a:["Tordesilhas","Versalhes","Utrecht","Brest-Litovsk"], c:1, p:260000},
 {d:"AVANÇADA", q:"Qual é o número atômico do carbono?", a:["6","8","12","14"], c:0, p:300000},
 {d:"AVANÇADA", q:"Qual império tinha Constantinopla como capital durante a maior parte de sua história?", a:["Romano do Oriente","Persa","Mongol","Cartaginês"], c:0, p:350000},
 {d:"AVANÇADA", q:"Em economia, inflação é principalmente:", a:["Queda geral de preços","Aumento geral e persistente do nível de preços","Aumento de produtividade","Queda da oferta monetária"], c:1, p:400000},
 {d:"AVANÇADA", q:"Qual camada da atmosfera concentra a maior parte do ozônio estratosférico?", a:["Troposfera","Estratosfera","Mesosfera","Termosfera"], c:1, p:500000},
 {d:"AVANÇADA", q:"Qual filósofo escreveu 'Crítica da Razão Pura'?", a:["Hume","Kant","Spinoza","Locke"], c:1, p:600000},
 {d:"AVANÇADA", q:"Qual partícula mede a carga elementar negativa?", a:["Próton","Nêutron","Elétron","Fóton"], c:2, p:700000},
 {d:"AVANÇADA", q:"Qual é a principal função do DNA?", a:["Armazenar informação genética","Produzir ATP diretamente","Digerir proteínas","Transportar oxigênio"], c:0, p:850000},
 {d:"AVANÇADA", q:"Qual é o valor aproximado da velocidade da luz no vácuo?", a:["3×10⁶ m/s","3×10⁸ m/s","3×10¹⁰ m/s","3×10⁴ m/s"], c:1, p:1000000}
];

let state = {i:0, correct:0, prize:0, gender:"masculino", avatar:"masculino", name:"Jogador", used50:false, usedSkip:false, usedAudience:false, locked:false};
const $ = id => document.getElementById(id);
const moneyFmt = n => n.toLocaleString("pt-BR");

document.querySelectorAll(".choice").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    document.querySelectorAll(".choice").forEach(x=>x.classList.remove("selected"));
    btn.classList.add("selected"); state.gender = btn.dataset.gender;
    if(state.gender==="feminino") state.avatar="feminino";
  });
});
document.querySelectorAll(".avatar-option").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    document.querySelectorAll(".avatar-option").forEach(x=>x.classList.remove("selected"));
    btn.classList.add("selected"); state.avatar = btn.dataset.avatar;
  });
});
$("startBtn").onclick = startGame;
$("restartBtn").onclick = ()=>location.reload();
$("nextBtn").onclick = nextQuestion;
$("hint50").onclick = use50;
$("hintSkip").onclick = useSkip;
$("hintAudience").onclick = useAudience;

function startGame(){
  const name = $("username").value.trim();
  if(!name){ $("username").focus(); $("username").style.borderColor="#9a4d4d"; return; }
  state.name=name.slice(0,18);
  $("playerName").textContent=state.name;
  $("gameAvatar").src=`assets/avatar-${state.avatar}.png`;
  $("setup").classList.add("hidden"); $("game").classList.remove("hidden");
  renderQuestion();
}
function renderQuestion(){
  const x=questions[state.i]; state.locked=false;
  $("roundLabel").textContent=`PERGUNTA ${state.i+1}/30`;
  $("progress").style.width=((state.i+1)/30*100)+"%";
  $("difficulty").textContent=x.d;
  $("question").textContent=x.q;
  $("reaction").textContent=""; $("reaction").className="reaction";
  $("nextBtn").classList.add("hidden");
  const box=$("answers"); box.innerHTML="";
  x.a.forEach((txt,idx)=>{
    const b=document.createElement("button"); b.className="answer"; b.textContent=`${String.fromCharCode(65+idx)}) ${txt}`;
    b.onclick=()=>answer(idx,b); box.appendChild(b);
  });
}
function answer(idx,btn){
  if(state.locked)return; state.locked=true;
  const x=questions[state.i], all=[...document.querySelectorAll(".answer")];
  all.forEach(b=>b.disabled=true); all[x.c].classList.add("correct");
  if(idx===x.c){
    state.correct++; state.prize=x.p; $("money").textContent=moneyFmt(state.prize);
    $("reaction").textContent=randomGood();
    $("reaction").className="reaction good";
  }else{
    btn.classList.add("wrong"); state.prize = state.i>0 ? questions[state.i-1].p : 0;
    $("money").textContent=moneyFmt(state.prize);
    $("reaction").textContent=randomBad(); $("reaction").className="reaction bad";
  }
  $("nextBtn").classList.remove("hidden");
}
function nextQuestion(){
  if(!state.locked)return;
  if(state.i>=questions.length-1){endGame();return}
  state.i++; renderQuestion();
}
function use50(){
  if(state.used50||state.locked)return;
  state.used50=true; $("hint50").disabled=true;
  const x=questions[state.i], wrong=[0,1,2,3].filter(n=>n!==x.c).sort(()=>Math.random()-.5).slice(0,2);
  wrong.forEach(n=>document.querySelectorAll(".answer")[n].classList.add("removed"));
}
function useSkip(){
  if(state.usedSkip||state.locked)return;
  state.usedSkip=true; $("hintSkip").disabled=true;
  if(state.i<questions.length-1){ state.i++; renderQuestion(); }
}
function useAudience(){
  if(state.usedAudience||state.locked)return;
  state.usedAudience=true; $("hintAudience").disabled=true;
  const x=questions[state.i], confidence=60+Math.floor(Math.random()*25);
  $("reaction").textContent=`A PLATEIA APOSTA ${confidence}% NA ALTERNATIVA ${String.fromCharCode(65+x.c)}.`;
  $("reaction").className="reaction good";
}
function randomGood(){
  const arr = state.gender==="feminino"
    ? ["GÊNIA! Já pode pedir aumento.","Mandou bem, garota!","Aí sim, moça! A plateia gostou.","Essa foi de milhões!"]
    : state.gender==="masculino"
    ? ["GÊNIO! Já pode ganhar na Mega-Sena.","Boa, rapaz!","Aí sim, homem! A plateia foi à loucura.","Essa foi de milhões!"]
    : ["GÊNIO! Essa foi de milhões.","Mandou muito bem!","A plateia aprovou.","Resposta certeira!"];
  return arr[Math.floor(Math.random()*arr.length)];
}
function randomBad(){
  const arr = state.gender==="feminino"
    ? ["ERROU, garota! Essa doeu.","Ih, moça... passou longe.","A plateia sentiu essa.","Essa escapou, garota!"]
    : state.gender==="masculino"
    ? ["BURRO, rapaz! Brincadeira... quase.","Ih, homem... essa doeu.","A plateia sentiu essa.","Essa escapou, rapaz!"]
    : ["ERROU! Essa doeu.","A plateia sentiu essa.","Essa escapou!","Quase! Mas não foi dessa vez."];
  return arr[Math.floor(Math.random()*arr.length)];
}
function endGame(){
  $("game").classList.add("hidden"); $("result").classList.remove("hidden");
  $("correctCount").textContent=state.correct; $("finalPrize").textContent=moneyFmt(state.prize);
  $("resultTitle").textContent=state.correct>=25?"QUE MÁQUINA!":state.correct>=15?"Mandou bem!":"Valeu a tentativa!";
  $("resultText").textContent=`${state.name}, você acertou ${state.correct} de 30 perguntas e terminou com R$ ${moneyFmt(state.prize)}.`;
  saveRank();
}
function saveRank(){
  const key="showdobilhao-ranking-v11";
  let r=JSON.parse(localStorage.getItem(key)||"[]");
  r.push({name:state.name,correct:state.correct,prize:state.prize});
  r.sort((a,b)=>b.prize-a.prize || b.correct-a.correct); r=r.slice(0,10);
  localStorage.setItem(key,JSON.stringify(r));
  const pos=r.findIndex(x=>x.name===state.name&&x.prize===state.prize&&x.correct===state.correct)+1;
  $("rankPosition").textContent="#"+pos;
  $("rankingList").innerHTML=r.map((x,i)=>`<li>${i+1}. ${escapeHtml(x.name)} — R$ ${moneyFmt(x.prize)} <small>${x.correct}/30</small></li>`).join("");
}
function escapeHtml(s){return s.replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));}
