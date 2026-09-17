# Show do Bilhão — V1.8

Build corrigido e autocontido para GitHub Pages.

## Mecânica preservada
- 30 perguntas por partida: 10 básicas, 10 médias e 10 avançadas.
- Marco de prêmio: pergunta 10 = R$ 10.000; pergunta 20 = R$ 100.000; pergunta 30 = R$ 1.000.000.
- Banco: 45 perguntas por tema, 15 por dificuldade.
- 3 erros encerram a partida.
- Tentar de novo reinicia uma nova partida no tema selecionado.
- 50:50, Plateia e Pular: uma utilização por partida.
- Ranking e configurações ficam no navegador (localStorage).
- Avatares e assets preservados.

## Correção importante da V1.7
O validador antigo verificava **5** perguntas por dificuldade, embora o banco tivesse **15**. Isso fazia `validBanks()` retornar falso e produzia o alerta "O banco de perguntas está incompleto".

A V1.8 valida 15 por dificuldade e ainda verifica:
- 45 questões por tema;
- 4 alternativas por questão;
- alternativas sem duplicação;
- índice da resposta correta entre 0 e 3;
- 30 valores de prêmio e os três marcos.

## Arquitetura robusta
O `index.html` da V1.8 é **autocontido**: CSS e JavaScript estão embutidos nele. Isso evita que o GitHub Pages misture `index.html`, `style.css` e `script.js` de versões diferentes por cache ou upload parcial.

Os arquivos `style.css` e `script.js` também acompanham o pacote como cópias corrigidas, mas o `index.html` não depende deles.

## GitHub Pages
Substitua o `index.html` do repositório pelo `index.html` desta versão e envie também a pasta `assets` se ela ainda não estiver atualizada. O ZIP não exige servidor ou backend.
