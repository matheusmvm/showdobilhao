const PRIZES=[1000,2000,3000,5000,7500,10000,20000,30000,50000,75000,100000,250000,500000,750000,1000000];
const raw={
'Conhecimentos Gerais':[
['BÁSICA','Qual é o maior planeta do Sistema Solar?',['Terra','Júpiter','Marte','Vênus'],1],
['BÁSICA','Qual é a capital do Brasil?',['Rio de Janeiro','Brasília','Salvador','São Paulo'],1],
['BÁSICA','Quantos lados tem um triângulo?',['2','3','4','5'],1],
['BÁSICA','Qual animal é conhecido popularmente como “rei da selva”?',['Tigre','Leão','Lobo','Onça'],1],
['BÁSICA','Qual é o resultado de 7 × 8?',['54','56','64','48'],1],
['MÉDIA','Qual é o símbolo químico do ferro?',['Fe','Ir','F','Fr'],0],
['MÉDIA','Qual é a unidade básica de informação digital?',['Byte','Bit','Pixel','Hertz'],1],
['MÉDIA','Qual é a raiz quadrada de 144?',['10','11','12','14'],2],
['MÉDIA','Qual é o maior oceano da Terra?',['Atlântico','Índico','Pacífico','Ártico'],2],
['MÉDIA','Qual órgão bombeia o sangue pelo corpo?',['Pulmão','Fígado','Coração','Rim'],2],
['AVANÇADA','Qual é o número atômico do carbono?',['6','8','12','14'],0],
['AVANÇADA','Qual princípio afirma que a energia não é criada nem destruída, apenas transformada?',['Inércia','Conservação da energia','Arquimedes','Exclusão de Pauli'],1],
['AVANÇADA','Qual é a unidade SI de resistência elétrica?',['Volt','Watt','Ohm','Ampere'],2],
['AVANÇADA','Em genética, qual molécula normalmente armazena a informação hereditária?',['ATP','DNA','Lipídio','Glicogênio'],1],
['AVANÇADA','Qual instrumento mede a pressão atmosférica?',['Termômetro','Barômetro','Higrômetro','Anemômetro'],1]],
'Música':[
['BÁSICA','Qual instrumento tem teclas pretas e brancas?',['Violino','Piano','Flauta','Trompete'],1],
['BÁSICA','Quantas cordas tem um violão tradicional?',['4','5','6','7'],2],
['BÁSICA','Qual símbolo indica silêncio na música?',['Pausa','Clave','Nota','Andamento'],0],
['BÁSICA','Qual destes é um gênero musical brasileiro?',['Samba','Blues','Country','Reggae'],0],
['BÁSICA','Quem é conhecido como “Rei do Pop”?',['Elvis Presley','Michael Jackson','Frank Sinatra','Bob Dylan'],1],
['MÉDIA','Qual compositor escreveu a Nona Sinfonia?',['Mozart','Beethoven','Bach','Vivaldi'],1],
['MÉDIA','Qual instrumento pertence à família das madeiras?',['Trompete','Violino','Flauta','Tímpano'],2],
['MÉDIA','O que significa BPM na música?',['Batidas por minuto','Baixos por melodia','Balanço por minuto','Batidas por música'],0],
['MÉDIA','Qual gênero nasceu no delta do Mississippi e influenciou o rock?',['Blues','Sertanejo','Tango','Fado'],0],
['MÉDIA','Qual compositor brasileiro escreveu “Aquarela do Brasil”?',['Ary Barroso','Heitor Villa-Lobos','Tom Jobim','Pixinguinha'],0],
['AVANÇADA','Qual compositor é associado às Variações Goldberg?',['Bach','Chopin','Wagner','Debussy'],0],
['AVANÇADA','Em harmonia, qual intervalo contém três tons inteiros?',['Terça menor','Trítono','Quinta justa','Oitava'],1],
['AVANÇADA','Qual é a tonalidade maior sem sustenidos nem bemóis na armadura?',['Dó maior','Ré maior','Sol maior','Lá maior'],0],
['AVANÇADA','Qual compositor brasileiro foi autor de “Bachianas Brasileiras”?',['Villa-Lobos','Carlos Gomes','Pixinguinha','Cartola'],0],
['AVANÇADA','Qual movimento musical do século XX ficou associado a compositores como Schoenberg?',['Impressionismo','Expressionismo','Classicismo','Barroco'],1]],
'Cinema & TV':[
['BÁSICA','Qual personagem vive em Gotham City?',['Superman','Batman','Homem-Aranha','Hulk'],1],
['BÁSICA','Qual filme apresenta um parque com dinossauros clonados?',['Jurassic Park','Titanic','Avatar','Matrix'],0],
['BÁSICA','Quem é o ogro protagonista de Shrek?',['Fiona','Shrek','Burro','Gato de Botas'],1],
['BÁSICA','Qual é o nome da escola de Harry Potter?',['Hogwarts','Camelot','Nárnia','Arkham'],0],
['BÁSICA','Em qual saga aparece o personagem Darth Vader?',['Star Wars','Star Trek','Matrix','Alien'],0],
['MÉDIA','Qual diretor dirigiu “Pulp Fiction”?',['Steven Spielberg','Quentin Tarantino','Christopher Nolan','James Cameron'],1],
['MÉDIA','Qual filme brasileiro ganhou o Urso de Ouro em Berlim em 2024?',['Ainda Estou Aqui','Central do Brasil','Tropa de Elite','Cidade de Deus'],0],
['MÉDIA','Qual série acompanha uma família chamada Simpson?',['Friends','The Simpsons','Lost','The Office'],1],
['MÉDIA','Qual ator interpretou Jack em Titanic?',['Tom Hanks','Leonardo DiCaprio','Brad Pitt','Matt Damon'],1],
['MÉDIA','Qual estúdio criou Toy Story?',['Pixar','Studio Ghibli','DreamWorks','Aardman'],0],
['AVANÇADA','Qual filme venceu a Palma de Ouro em Cannes em 1994?',['Pulp Fiction','Forrest Gump','Clube da Luta','Seven'],0],
['AVANÇADA','Quem dirigiu “2001: Uma Odisseia no Espaço”?',['Stanley Kubrick','Ridley Scott','George Lucas','Francis Ford Coppola'],0],
['AVANÇADA','Qual movimento cinematográfico italiano surgiu no pós-Segunda Guerra?',['Neorrealismo italiano','Nouvelle Vague','Expressionismo alemão','Dogma 95'],0],
['AVANÇADA','Qual diretor ficou associado ao cinema de animação do Studio Ghibli?',['Hayao Miyazaki','Akira Kurosawa','Satoshi Kon','Isao Takahata'],0],
['AVANÇADA','Qual filme de Orson Welles é frequentemente citado como marco da linguagem cinematográfica?',['Cidadão Kane','Janela Indiscreta','O Poderoso Chefão','Metropolis'],0]],
'História':[
['BÁSICA','Em que ano começou a Revolução Francesa?',['1492','1789','1815','1914'],1],
['BÁSICA','Quem foi o primeiro imperador do Brasil?',['Pedro I','Pedro II','Getúlio Vargas','Deodoro da Fonseca'],0],
['BÁSICA','Qual civilização construiu Machu Picchu?',['Maia','Asteca','Inca','Fenícia'],2],
['BÁSICA','Qual povo construiu as pirâmides de Gizé?',['Romanos','Egípcios','Gregos','Persas'],1],
['BÁSICA','A Independência do Brasil foi proclamada em qual ano?',['1808','1822','1889','1891'],1],
['MÉDIA','Qual tratado encerrou formalmente a Primeira Guerra Mundial com a Alemanha?',['Tordesilhas','Versalhes','Utrecht','Brest-Litovsk'],1],
['MÉDIA','A Revolução Industrial começou primeiro em qual país?',['França','Alemanha','Inglaterra','Itália'],2],
['MÉDIA','Qual cidade foi capital do Império Romano do Oriente?',['Atenas','Constantinopla','Alexandria','Cartago'],1],
['MÉDIA','Quem liderou a expedição que chegou à América em 1492 sob a Coroa espanhola?',['Cristóvão Colombo','Vasco da Gama','Fernão de Magalhães','Pedro Álvares Cabral'],0],
['MÉDIA','Qual acontecimento marcou o início convencional da Idade Média no Ocidente?',['Queda do Império Romano do Ocidente','Revolução Francesa','Queda de Constantinopla','Descoberta da América'],0],
['AVANÇADA','Qual civilização desenvolveu a escrita cuneiforme na Mesopotâmia?',['Suméria','Inca','Minoica','Maia'],0],
['AVANÇADA','Qual dinastia chinesa construiu grande parte da Cidade Proibida?',['Han','Ming','Tang','Qing'],1],
['AVANÇADA','Qual conferência de 1884–1885 estabeleceu regras para a ocupação colonial europeia na África?',['Conferência de Viena','Conferência de Berlim','Congresso de Paris','Tratado de Versalhes'],1],
['AVANÇADA','Qual acordo de 1494 dividiu áreas de exploração entre Portugal e Espanha?',['Tratado de Utrecht','Tratado de Tordesilhas','Tratado de Madri','Paz de Westfália'],1],
['AVANÇADA','Qual batalha de 1815 marcou a derrota definitiva de Napoleão Bonaparte?',['Austerlitz','Waterloo','Leipzig','Trafalgar'],1]],
'Ciência & Tecnologia':[
['BÁSICA','Qual gás é mais abundante na atmosfera terrestre?',['Oxigênio','Nitrogênio','CO₂','Hélio'],1],
['BÁSICA','A água ferve, ao nível do mar, aproximadamente a:',['50 °C','80 °C','100 °C','120 °C'],2],
['BÁSICA','Qual planeta é conhecido como Planeta Vermelho?',['Vênus','Marte','Mercúrio','Netuno'],1],
['BÁSICA','Qual órgão humano é responsável principalmente pela troca gasosa?',['Coração','Pulmão','Rim','Estômago'],1],
['BÁSICA','Qual unidade mede corrente elétrica?',['Volt','Watt','Ampere','Ohm'],2],
['MÉDIA','Qual processo produz ATP principalmente nas mitocôndrias?',['Fotossíntese','Respiração celular','Transcrição','Digestão'],1],
['MÉDIA','Qual elemento tem símbolo O?',['Ouro','Oxigênio','Ósmio','Oganessônio'],1],
['MÉDIA','Qual tecnologia é usada para determinar posição por satélites?',['GPS','USB','HDMI','NFC'],0],
['MÉDIA','Qual partícula possui carga elétrica negativa?',['Próton','Nêutron','Elétron','Fóton'],2],
['MÉDIA','Qual camada da atmosfera contém a maior parte do ozônio estratosférico?',['Troposfera','Estratosfera','Mesosfera','Termosfera'],1],
['AVANÇADA','Qual é a segunda lei da termodinâmica associada ao aumento da entropia em processos espontâneos?',['Lei da inércia','Segunda lei da termodinâmica','Lei de Coulomb','Lei de Hooke'],1],
['AVANÇADA','Qual cientista formulou as equações clássicas do eletromagnetismo?',['James Clerk Maxwell','Gregor Mendel','Louis Pasteur','Niels Bohr'],0],
['AVANÇADA','Qual é a unidade SI de capacitância elétrica?',['Tesla','Farad','Henry','Weber'],1],
['AVANÇADA','Em computação, qual estrutura segue o princípio LIFO?',['Fila','Pilha','Árvore','Grafo'],1],
['AVANÇADA','Qual método permite estimar a idade de materiais orgânicos usando o carbono-14?',['Datação radiocarbônica','Espectroscopia Raman','Cromatografia','Difração de raios X'],0]],
'Geografia & Brasil':[
['BÁSICA','Qual é o maior país da América do Sul em território?',['Argentina','Brasil','Peru','Colômbia'],1],
['BÁSICA','Qual oceano banha a costa leste do Brasil?',['Pacífico','Índico','Atlântico','Ártico'],2],
['BÁSICA','Qual é a capital do Maranhão?',['Teresina','São Luís','Belém','Fortaleza'],1],
['BÁSICA','Em qual continente fica o Egito?',['Europa','África','Ásia','Oceania'],1],
['BÁSICA','Qual linha imaginária divide a Terra em hemisférios Norte e Sul?',['Trópico de Câncer','Meridiano de Greenwich','Linha do Equador','Trópico de Capricórnio'],2],
['MÉDIA','Qual é o rio mais extenso inteiramente em território brasileiro?',['São Francisco','Paraná','Amazonas','Tocantins'],0],
['MÉDIA','Qual bioma ocupa grande parte da região Centro-Oeste do Brasil?',['Caatinga','Cerrado','Pampa','Mata Atlântica'],1],
['MÉDIA','Qual país não faz fronteira terrestre com o Brasil?',['Chile','Bolívia','Peru','Colômbia'],0],
['MÉDIA','Qual é a cordilheira que se estende pela costa oeste da América do Sul?',['Alpes','Andes','Himalaias','Rochosas'],1],
['MÉDIA','Qual é a maior ilha do mundo?',['Groenlândia','Madagascar','Bornéu','Nova Guiné'],0],
['AVANÇADA','Qual é o ponto mais alto do Brasil?',['Pico da Neblina','Pico da Bandeira','Monte Roraima','Pico das Agulhas Negras'],0],
['AVANÇADA','Qual corrente oceânica quente influencia fortemente a costa leste do Brasil?',['Corrente do Brasil','Corrente de Humboldt','Corrente de Benguela','Corrente de Labrador'],0],
['AVANÇADA','Qual país possui a maior extensão territorial da África?',['Argélia','Sudão','Líbia','República Democrática do Congo'],0],
['AVANÇADA','Qual estreito separa a Europa da África entre Espanha e Marrocos?',['Bósforo','Gibraltar','Ormuz','Malaca'],1],
['AVANÇADA','Qual é a capital nacional localizada mais próxima da Linha do Equador entre as capitais brasileiras?',['Macapá','Belém','Boa Vista','Manaus'],0]]
};
const topics={
'Conhecimentos Gerais':['🧠','Conhecimentos Gerais','Perguntas variadas para testar de tudo um pouco.'],
'Música':['🎵','Música','Gêneros, instrumentos, compositores e cultura musical.'],
'Cinema & TV':['🎬','Cinema & TV','Filmes, séries, personagens, diretores e televisão.'],
'História':['🏛️','História','Brasil, mundo, civilizações, guerras e grandes acontecimentos.'],
'Ciência & Tecnologia':['🔬','Ciência & Tecnologia','Biologia, física, química, espaço e computação.'],
'Geografia & Brasil':['🌎','Geografia & Brasil','Mapas, territórios, natureza e geografia brasileira.']};
const reactions={good:['GÊNIO! Já pode jogar na Mega-Sena.','AÍ SIM! A plateia foi à loucura!','ACERTOU! O bilhão continua vivo.','Mandou bem!','Boa! Até a planta carnívora comemorou.'],bad:['ERROU! Ih... essa doeu.','Quase! A plateia fez “eeeeh...”.','OPA! Essa passou longe.','Não foi dessa vez. Bora seguir.','A planta carnívora julgou silenciosamente.'],end:['Belo jogo! O palco agradece.','Você encarou o desafio. Respeito!','Resultado registrado no placar local.']};
const AV={masculino:{normal:'male-normal.png',wave:'male-wave.png',happy:'male-happy.png',sad:'male-sad.png',think:'male-think.png'},feminino:{normal:'female-normal.png',wave:'female-wave.png',happy:'female-happy.png',sad:'female-sad.png',think:'female-think.png'}};
const KEY='sdb15-ranking';
let state={index:0,correct:0,prize:0,streak:0,best:0,gender:'masculino',avatar:'masculino',avatarState:'normal',name:'Jogador',topic:'Conhecimentos Gerais',used50:false,usedSkip:false,usedAudience:false,answered:false,finished:false,questions:[]};
const $=id=>document.getElementById(id); const money=n=>Number(n||0).toLocaleString('pt-BR');
function getRanking(){try{const v=JSON.parse(localStorage.getItem(KEY)||localStorage.getItem('sdb14-ranking')||localStorage.getItem('sdb13-ranking')||'[]');return Array.isArray(v)?v:[]}catch{return []}}
function setRanking(v){localStorage.setItem(KEY,JSON.stringify(v))}
function avatarSrc(g,s='normal'){return `assets/${AV[g]?.[s]||AV[g]?.normal||AV.masculino.normal}`}
function shuffle(arr){const a=[...arr];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function buildGameQuestions(topic){
  const bank=raw[topic];
  if(!Array.isArray(bank)||bank.length!==15)return [];
  const order=['BÁSICA','MÉDIA','AVANÇADA']; const out=[];
  order.forEach(level=>shuffle(bank.filter(x=>x[0]===level)).forEach(x=>{
    const opts=shuffle(x[2].map((text,i)=>({text,i})));
    out.push({topic,d:x[0],q:x[1],a:opts.map(o=>o.text),c:opts.findIndex(o=>o.i===x[3])});
  }));
  return out.map((q,i)=>({...q,p:PRIZES[i]}));
}
function validBanks(){return Object.keys(topics).every(t=>Array.isArray(raw[t])&&raw[t].length===15&&['BÁSICA','MÉDIA','AVANÇADA'].every(d=>raw[t].filter(x=>x[0]===d).length===5))}
function navigate(id){document.querySelectorAll('.view').forEach(v=>v.classList.remove('active-view'));$(id)?.classList.add('active-view');document.querySelectorAll('[data-view]').forEach(b=>b.classList.toggle('active',b.dataset.view===id));if(id==='ranking')renderRanking();if(id==='achievements')renderAchievements();window.scrollTo({top:0,behavior:document.body.classList.contains('no-motion')?'auto':'smooth'});document.querySelector('.nav')?.classList.remove('open')}
document.querySelectorAll('[data-view]').forEach(b=>b.addEventListener('click',()=>navigate(b.dataset.view)));
$('menuToggle')?.addEventListener('click',()=>document.querySelector('.nav')?.classList.toggle('open'));
function selectTopic(topic){if(!topics[topic])return;state.topic=topic;document.querySelectorAll('.topic-card').forEach(x=>x.classList.toggle('selected',x.dataset.topic===topic));const t=topics[topic];if($('selectedTopicName'))$('selectedTopicName').textContent=t[1];if($('selectedTopicDesc'))$('selectedTopicDesc').textContent=t[2]}
function renderTopics(){const box=$('topicGrid');if(!box)return;box.innerHTML=Object.entries(topics).map(([key,v])=>`<button type="button" class="topic-card ${state.topic===key?'selected':''}" data-topic="${escapeHtml(key)}"><span class="topic-icon">${v[0]}</span><span><b>${v[1]}</b><small>${v[2]}</small></span><em>15 perguntas</em></button>`).join('');box.querySelectorAll('.topic-card').forEach(b=>b.onclick=()=>selectTopic(b.dataset.topic));selectTopic(state.topic)}
function selectAvatar(g,s='normal'){if(!AV[g])g='masculino';state.avatar=g;state.avatarState=s;document.querySelectorAll('.avatar-option').forEach(x=>x.classList.toggle('selected',x.dataset.avatar===g&&x.dataset.state===s));syncAvatar(s)}
function syncAvatar(s=state.avatarState){state.avatarState=s;['heroFemale','heroMale'].forEach(id=>$(id)&&($(id).src=id==='heroFemale'?avatarSrc('feminino','normal'):avatarSrc('masculino','normal')));if($('gameAvatar'))$('gameAvatar').src=avatarSrc(state.avatar,s);if($('questionAvatar'))$('questionAvatar').src=avatarSrc(state.avatar,s);if($('hostAvatar'))$('hostAvatar').src=avatarSrc(state.gender==='feminino'?'masculino':'feminino','normal')}
document.querySelectorAll('.choice').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.choice').forEach(x=>x.classList.remove('selected'));b.classList.add('selected');state.gender=b.dataset.gender;if(state.gender==='feminino')selectAvatar('feminino','normal');else if(state.gender==='masculino')selectAvatar('masculino','normal')}));
document.querySelectorAll('.avatar-option').forEach(b=>b.addEventListener('click',()=>selectAvatar(b.dataset.avatar,b.dataset.state)));
function greeting(){const n=state.name;return state.gender==='feminino'?`Boa sorte, ${n}, garota!`:state.gender==='masculino'?`Boa sorte, ${n}, rapaz!`:`Boa sorte, ${n}!`}
function startGame(){
  if(!validBanks()){alert('O banco de perguntas está incompleto.');return}
  const questions=buildGameQuestions(state.topic); if(questions.length!==15){alert('Não foi possível montar esta partida.');return}
  const name=($('username').value.trim()||'Jogador').replace(/\s+/g,' ').slice(0,18);
  state={...state,index:0,correct:0,prize:0,streak:0,best:0,used50:false,usedSkip:false,usedAudience:false,answered:false,finished:false,name,avatarState:'normal',questions};
  ['hint50','hintAudience','hintSkip'].forEach(id=>{if($(id))$(id).disabled=false});
  $('playerName').textContent=state.name;$('greeting').textContent=greeting();$('money').textContent='0';if($('gameTopic'))$('gameTopic').textContent=topics[state.topic][1];
  syncAvatar('normal');navigate('game');loadQuestion();
}
$('startBtn').onclick=startGame;
function loadQuestion(){
  const q=state.questions[state.index];if(!q)return finish();state.answered=false;state.avatarState='normal';
  $('roundLabel').textContent=`PERGUNTA ${state.index+1}/${state.questions.length}`;$('progress').style.width=`${(state.index/state.questions.length)*100}%`;$('difficulty').textContent=q.d;$('questionTopic').textContent=topics[q.topic]?.[1]||q.topic;$('question').textContent=q.q;$('reaction').className='reaction';$('reaction').textContent='';$('nextBtn').classList.add('hidden');$('streak').textContent=`🔥 ${state.streak} sequência`;syncAvatar('normal');
  const wrap=$('answers');wrap.innerHTML='';q.a.forEach((text,i)=>{const b=document.createElement('button');b.type='button';b.className='answer';b.textContent=`${String.fromCharCode(65+i)}) ${text}`;b.onclick=()=>answer(i,b);wrap.appendChild(b)});updatePrize();
}
function answer(i,btn){
  if(state.answered||state.finished)return;state.answered=true;const q=state.questions[state.index];const buttons=[...document.querySelectorAll('.answer')];buttons.forEach(b=>b.disabled=true);
  if(i===q.c){tone(720,.11);btn.classList.add('correct');state.correct++;state.streak++;state.best=Math.max(state.best,state.streak);state.prize=q.p;react('good',reactions.good[Math.floor(Math.random()*reactions.good.length)]);syncAvatar('happy')}
  else{tone(180,.16);btn.classList.add('wrong');buttons[q.c]?.classList.add('correct');state.streak=0;react('bad',reactions.bad[Math.floor(Math.random()*reactions.bad.length)]);syncAvatar('sad')}
  updatePrize();$('nextBtn').classList.remove('hidden');$('progress').style.width=`${((state.index+1)/state.questions.length)*100}%`;
}
function react(kind,text){$('reaction').textContent=text;$('reaction').className=`reaction show ${kind}`}
let audioCtx=null;
function tone(freq=440,duration=.09){if(localStorage.getItem('sdb15-sound')==='false')return;try{audioCtx ||= new (window.AudioContext||window.webkitAudioContext)();const o=audioCtx.createOscillator(),g=audioCtx.createGain();o.type='square';o.frequency.value=freq;g.gain.setValueAtTime(.035,audioCtx.currentTime);g.gain.exponentialRampToValueAtTime(.001,audioCtx.currentTime+duration);o.connect(g);g.connect(audioCtx.destination);o.start();o.stop(audioCtx.currentTime+duration)}catch(e){}}
$('nextBtn').onclick=()=>{if(!state.answered)return;if(state.index>=state.questions.length-1){finish();return}state.index++;loadQuestion()};
$('hint50').onclick=()=>{if(state.used50||state.answered)return;state.used50=true;const q=state.questions[state.index];const buttons=[...document.querySelectorAll('.answer')];shuffle([0,1,2,3].filter(i=>i!==q.c)).slice(0,2).forEach(i=>buttons[i]?.classList.add('disabled'));$('hint50').disabled=true;react('good','50:50! Duas alternativas saíram do jogo.')};
$('hintSkip').onclick=()=>{if(state.usedSkip||state.answered)return;state.usedSkip=true;$('hintSkip').disabled=true;react('good','Pulou! A pergunta ficou para trás.');tone(330,.08);if(state.index>=state.questions.length-1){setTimeout(finish,420);return}state.answered=true;setTimeout(()=>{state.index++;loadQuestion()},420)};
$('hintAudience').onclick=()=>{if(state.usedAudience||state.answered)return;state.usedAudience=true;$('hintAudience').disabled=true;const q=state.questions[state.index];let pick=Math.random()<.78?q.c:Math.floor(Math.random()*4);if(Math.random()<.1)pick=Math.floor(Math.random()*4);react('good',`A plateia votou: alternativa ${String.fromCharCode(65+pick)}!`)};
$('quitBtn').onclick=()=>{if(confirm('Sair da partida? O progresso atual será perdido.')){state.finished=true;navigate('home')}};
function updatePrize(){$('prize').textContent=money(state.prize);$('sidePrize').textContent=money(state.prize);$('money').textContent=money(state.prize)}
function finish(){if(state.finished)return;state.finished=true;tone(880,.14);const total=state.questions.length||15;const data=getRanking();data.push({name:state.name,score:state.prize,correct:state.correct,best:state.best,date:Date.now(),gender:state.gender,avatar:state.avatar,topic:state.topic,total});data.sort((a,b)=>b.score-a.score||b.correct-a.correct||b.best-a.best||b.date-a.date);setRanking(data.slice(0,50));$('resultPrize').textContent=`R$ ${money(state.prize)}`;$('resultCorrect').textContent=`${state.correct}/${total}`;$('resultBest').textContent=state.best;$('resultTopic').textContent=topics[state.topic]?.[1]||state.topic;$('resultTitle').textContent=state.correct===total?'VOCÊ É O REI DO PALCO!':state.correct>=10?'MANDOU MUITO BEM!':state.correct>=5?'BOM JOGO!':'VALEU A TENTATIVA!';$('resultText').textContent=reactions.end[Math.floor(Math.random()*reactions.end.length)];navigate('result')}
function renderRanking(filter='all'){const box=$('rankingList');let data=getRanking();if(filter==='perfect')data=data.filter(x=>Number(x.correct)===Number(x.total||30));if(!data.length){box.innerHTML='<div class="empty">Ainda não há resultados. Seja o primeiro a subir no placar!</div>';return}box.innerHTML=data.slice(0,20).map((x,i)=>`<div class="rank-row"><span class="rank-pos">#${i+1}</span><span class="rank-name">${escapeHtml(x.name)}<small>${escapeHtml(x.topic||'Conhecimentos Gerais')}</small></span><span class="rank-score">R$ ${money(x.score)}</span><span class="rank-correct">${x.correct}/${x.total||30}</span></div>`).join('')}
document.querySelectorAll('.rank-tab').forEach(b=>b.onclick=()=>{document.querySelectorAll('.rank-tab').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderRanking(b.dataset.rank)});
function renderAchievements(){const data=getRanking();const best=Math.max(0,...data.map(x=>Number(x.correct)||0));const defs=[['👶','Primeiro passo','Faça sua primeira partida',data.length>0],['🎯','10 acertos','Acerte pelo menos 10 perguntas',best>=10],['🔥','Sequência quente','Acerte 10 perguntas seguidas',data.some(x=>Number(x.best)>=10)],['💎','Quase bilionário','Acerte pelo menos 12 perguntas',best>=12],['👑','Lenda do palco','Acerte as 15 perguntas',data.some(x=>Number(x.correct)>=Number(x.total||15)&&Number(x.total||15)===15)],['💰','Caçador de prêmio','Chegue a R$ 1.000.000',data.some(x=>Number(x.score)>=1000000)]];$('achievementGrid').innerHTML=defs.map(x=>`<div class="panel achievement ${x[3]?'':'locked'}"><div class="icon">${x[0]}</div><b>${x[1]}</b><small>${x[2]}</small><div>${x[3]?'✓ DESBLOQUEADA':'🔒 BLOQUEADA'}</div></div>`).join('')}
function escapeHtml(s){return String(s).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))}
function initSettings(){const sound=localStorage.getItem('sdb15-sound');const motion=localStorage.getItem('sdb15-motion');const compact=localStorage.getItem('sdb15-compact');if(sound==='false')$('soundToggle').checked=false;if(motion==='false'){$('motionToggle').checked=false;document.body.classList.add('no-motion')}if(compact==='true'){$('compactToggle').checked=true;document.body.classList.add('compact')}}
$('soundToggle').onchange=e=>localStorage.setItem('sdb15-sound',e.target.checked);$('motionToggle').onchange=e=>{localStorage.setItem('sdb15-motion',e.target.checked);document.body.classList.toggle('no-motion',!e.target.checked)};$('compactToggle').onchange=e=>{localStorage.setItem('sdb15-compact',e.target.checked);document.body.classList.toggle('compact',e.target.checked)};$('clearData').onclick=()=>{if(confirm('Apagar todo o ranking local?')){localStorage.removeItem(KEY);localStorage.removeItem('sdb14-ranking');localStorage.removeItem('sdb13-ranking');renderRanking()}};
initSettings();renderTopics();selectAvatar('masculino','normal');
