# Auditoria V1.8 — correção do erro "banco incompleto"

## Causa raiz encontrada
O banco possui 45 perguntas por tema, distribuídas em **15 BÁSICAS + 15 MÉDIAS + 15 AVANÇADAS**.

A versão anterior tinha este teste lógico:

`raw[t].filter(x => x[0] === d).length === 5`

Isso era incompatível com o próprio banco. Portanto `validBanks()` retornava `false` e `startGame()` executava:

`alert('O banco de perguntas está incompleto.')`

## Correção
A V1.8 valida **15 perguntas de cada dificuldade** e também verifica:

- 45 perguntas por tema;
- 4 alternativas por pergunta;
- alternativas únicas;
- índice correto entre 0 e 3;
- 30 prêmios;
- pergunta 10 = R$ 10.000;
- pergunta 20 = R$ 100.000;
- pergunta 30 = R$ 1.000.000.

## Teste automático realizado
Todos os 8 temas retornaram:

- banco válido: `true`
- partida gerada: `30` perguntas
- posições 1–10: somente BÁSICAS
- posições 11–20: somente MÉDIAS
- posições 21–30: somente AVANÇADAS
- marcos: R$ 10.000 / R$ 100.000 / R$ 1.000.000

Também foi feita uma checagem dos IDs HTML usados pelo JavaScript: **54 referências, nenhuma ausente**.

## Proteção contra versões misturadas
O `index.html` da V1.8 contém o CSS e o JavaScript dentro do próprio arquivo. Assim, o GitHub Pages não precisa combinar um `index.html` de uma versão com `style.css` ou `script.js` de outra.

## Mecânicas preservadas
30 perguntas por partida; 3 erros; tentar de novo; 50:50; plateia; pular; ranking local; temas; gênero; avatares; reações; cronômetro opcional; responsividade.
