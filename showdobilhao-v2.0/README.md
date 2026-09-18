# Show do Bilhão — V2.0

Versão visual renovada, estática e pronta para GitHub Pages. A base de jogo da V1.9 foi preservada: regras, banco, sorteio, vidas, ajudas, ranking local e proteções contra cliques duplicados continuam no código.

## Presets de gameplay preservados
- 30 perguntas por partida: 10 básicas + 10 médias + 10 avançadas.
- Pergunta 10 = R$ 10.000; pergunta 20 = R$ 100.000; pergunta 30 = R$ 1.000.000.
- Banco de 45 perguntas por tema: 15 básicas, 15 médias e 15 avançadas.
- 3 erros encerram a partida.
- “Tentar de novo” inicia outra partida mantendo o tema selecionado.
- 50:50, Plateia e Pular: uma utilização por partida.
- Cronômetro opcional de 10–60 s.
- Ranking e configurações salvos no navegador.

## V2.0 — identidade gráfica
- Background espacial pixel art incorporado localmente, sem depender de URL externa.
- Avatares pixel art masculino/feminino recortados e tratados a partir do material fornecido, com estados normal, aceno, feliz, pensativo e triste.
- Seletor de avatar redesenhado para ficar mais próximo do modelo visual enviado.
- HUD azul espacial + dourado, tipografia pixel e alto contraste.
- Menu e cartões simplificados visualmente, sem alterar a estrutura lógica do jogo.
- Prévia da arte gerada incluída em `assets/preview-v2.png`.
- A folha de referência de avatares fica em `assets/avatar-sheet-reference.png`.

## Estrutura
- `index.html` — versão autocontida; CSS e JavaScript também ficam embutidos para evitar mistura de versões no GitHub Pages.
- `style.css` — cópia de apoio.
- `script.js` — cópia de apoio.
- `assets/` — background, avatares, planta, sacolas e prévias.

## GitHub Pages
1. Extraia o ZIP.
2. Envie todo o conteúdo para a raiz do repositório.
3. Em Settings → Pages, use a branch principal e `/ (root)`.
4. Não é necessário Node, servidor ou banco de dados.
