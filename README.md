# Show do Bilhão — Demo 1.6

Versão corrigida e estabilizada para GitHub Pages.

## Estrutura
- `index.html` — interface e telas
- `style.css` — identidade visual responsiva
- `script.js` — banco e mecânicas

## Banco
6 temas × 45 perguntas = 270 perguntas.
Cada tema contém 15 básicas, 15 médias e 15 avançadas.
Cada partida sorteia exatamente 30: 10 de cada nível.

## Mecânicas
- 3 vidas / 3 erros
- Tentar de novo no mesmo tema
- 50:50 uma vez
- Plateia uma vez, com distribuição que sempre soma 100%
- Pular uma vez
- Progressão até R$ 1.000.000
- Ranking local em `localStorage`
- Validação do banco antes de iniciar
- Validação de cada questão: 4 alternativas únicas e resposta presente

## Correções desta versão
- Layout não depende de largura fixa.
- Responsividade separada para desktop/tablet/celular.
- Avatares são desenhados por CSS e não dependem de arquivos externos.
- Em telas pequenas, respostas passam para uma coluna para evitar sobreposição.
- Sorteio usa Fisher-Yates em vez de `sort(Math.random())`.
- Plateia sempre totaliza 100%.
- Pular nunca ultrapassa a pergunta 30.
- Erros inesperados no JavaScript são registrados no console e exibem aviso amigável na tela inicial.

## GitHub Pages
Depois de substituir os três arquivos principais no branch `main`, aguarde a publicação e faça um hard refresh (`Ctrl+F5`) se o navegador estiver usando arquivos antigos.
