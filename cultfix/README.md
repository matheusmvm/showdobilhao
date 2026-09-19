# Show do Bilhão — v2.5 Desafio Cult

Versão baseada na v2.4, com correções específicas do modo Desafio Cult.

## Desafio Cult
- 30 perguntas por partida, sorteadas do banco CULT.
- 60 segundos por pergunta.
- Sem eliminação por erro ou tempo.
- Cada resposta mostra imediatamente **CERTO** ou **ERRADO** e destaca a resposta correta.
- O contador de erros não fica exposto durante a partida.
- Ao final, o resultado do Cult mostra a quantidade de **acertos e erros**.
- `PULAR` não conta como erro.
- `TROCAR` substitui a pergunta sem alterar a quantidade de erros.
- `+20s` amplia corretamente o limite do cronômetro e a barra acompanha o novo limite.

## Correções técnicas
- `index.html` usa `script.js` como fonte única da lógica; não há mais uma segunda cópia antiga do JavaScript embutida.
- Proteção contra duplo avanço ao clicar rapidamente em **PRÓXIMA**.
- Timer reiniciado e limpo corretamente entre perguntas.
- Timeout registra o erro uma única vez e permite avançar normalmente.
- Resultado do Cult não usa a mensagem de derrota do modo tradicional.

## Publicação
Envie `index.html`, `style.css`, `script.js` e a pasta `assets/` para o GitHub Pages.
