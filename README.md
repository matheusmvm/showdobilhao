# Show do Bilhão — v2.3 Desafio Cult

Versão corrigida baseada na interface v2.x.

## Correção principal
O problema da versão anterior era uma **divergência entre o `index.html` e o `script.js`**:
- o `script.js` já possuía o banco e o tema `Desafio Cult`;
- o JavaScript embutido no `index.html` ainda possuía a lista antiga com apenas 8 temas;
- como o jogo executava o JavaScript embutido, o 9º painel nunca era renderizado.

Na v2.3, o `index.html` usa o mesmo código do `script.js` como fonte única, eliminando essa divergência.

## Desafio Cult
- 50 perguntas difíceis no banco
- 30 perguntas por partida
- 60 segundos por pergunta
- 3 erros
- 50:50, Plateia e Pular
- mesma escada de premiação do jogo
- temas: cinema, arte, história, literatura, política, filosofia, nutrição, ciência e cultura geral

## Publicação no GitHub Pages
Envie o conteúdo desta pasta para a raiz do repositório (ou substitua a versão anterior) e publique pelo GitHub Pages.
