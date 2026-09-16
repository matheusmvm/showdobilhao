# Show do Bilhão — Demo 1.6

Versão experimental do quiz em pixel art, preparada para GitHub Pages.

## O que mudou na 1.6

- Interface mais limpa, clara e responsiva para notebook, iPad/tablet e celular.
- Identidade visual consistente: azul claro, papel/creme, azul-marinho e dourado.
- Painel de categoria com 6 temas e 15 perguntas por tema.
- Partida organizada em 5 perguntas básicas + 5 médias + 5 avançadas.
- Banco de alternativas embaralhado sem perder a resposta correta.
- Cronômetro opcional por pergunta, configurável de 10 a 60 segundos.
- Barra de progresso e indicação do próximo prêmio.
- 50:50, Plateia e Pular com bloqueio de estado para evitar uso indevido.
- Feedback visual de acerto/erro, reação do avatar e explicação pós-resposta.
- Atalhos de teclado 1–4 no desktop.
- Avatares pixel art masculino/feminino com estados normal, feliz, triste e aceno.
- Planta da sorte e sacolas HC como elementos animados/colecionáveis.
- Ranking e conquistas persistidos no navegador.
- Configurações de som, movimento, modo compacto e cronômetro.
- Compatibilidade retroativa de leitura com rankings locais das versões anteriores.
- Proteções contra cliques duplicados, fim de partida repetido, timer concorrente e bancos incompletos.

## Estrutura

- `index.html` — interface e telas.
- `style.css` — identidade visual e responsividade.
- `script.js` — banco de perguntas e lógica do jogo.
- `assets/` — avatares, planta, sacolas e demais recursos pixel art.

## GitHub Pages

No repositório, selecione **Settings → Pages → Deploy from a branch → main → /(root)** e salve.

O projeto é estático: não exige Node, banco de dados ou servidor para a demo local.
