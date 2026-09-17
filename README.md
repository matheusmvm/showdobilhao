# Show do Bilhão — Demo 1.5

Quiz em pixel art para GitHub Pages, sem backend.

## O que mudou na 1.5
- Banco ampliado para **270 perguntas**: 6 temas × 45 perguntas.
- Cada tema tem **15 básicas + 15 médias + 15 avançadas**.
- A partida continua com **30 perguntas**: 10 básicas, 10 médias e 10 avançadas.
- Progressão preservada: pergunta 10 = R$ 10 mil; pergunta 20 = R$ 100 mil; pergunta 30 = R$ 1 milhão.
- Sistema de **3 vidas / 3 erros**.
- Ao atingir 3 erros, aparece **TENTAR DE NOVO**, reiniciando a partida no mesmo tema.
- 50:50, plateia e pular continuam disponíveis uma vez por partida.
- Plateia agora apresenta percentuais em vez de revelar diretamente a resposta.
- Ranking local registra também a quantidade de erros.
- Corrigida a ação quebrada de “Tentar de novo” do modal de fim de jogo.
- Validação exige 15 perguntas de cada nível no banco, embora apenas 10 sejam sorteadas para a partida.
- Interface refinada para notebook, iPad, Android e iPhone, mantendo o visual clean azul-claro/creme/dourado.

## Temas
Conhecimentos Gerais, História, Cinema, Música, Literatura e Política e Mundo.

## Cinema e cultura adicionados
Tarantino, Scorsese, Coppola, Wong Kar-wai, Akira Kurosawa, Ingmar Bergman; Shakespeare, Machado de Assis, Gabriel García Márquez, García Lorca e Fernando Pessoa.

## Música adicionada
System of a Down, Pearl Jam, Guns N' Roses, Slipknot, Avenged Sevenfold, Lil Peep, Drake, Lil Wayne e pop contemporâneo.

## Política e história
Inclui questões descritivas e históricas sobre Che Guevara, Fidel Castro, Lula, Fernando Henrique Cardoso, José Sarney, John F. Kennedy, além de datas e acontecimentos históricos.

## Estrutura
- `index.html` — interface
- `style.css` — identidade visual e responsividade
- `script.js` — banco de perguntas + lógica da partida

Tudo funciona no navegador e pode ser publicado diretamente pelo GitHub Pages.
