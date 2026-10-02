const questions = {
    html: {
        facil: [
            {
                pergunta: "Qual tag cria um link em HTML?",
                alternativas: ["li", "a", "hr", "span"],
                respostaCerta: 1,
                explicacao: "A tag a cria um link clicável em HTML."
            },
            {
                pergunta: "Qual tag cria o título principal de uma página?",
                alternativas: ["head", "header", "h1", "h6"],
                respostaCerta: 2,
                explicacao: "A tag h1 define o título principal. Ela é o maior nível de título."
            },
            {
                pergunta: "Qual tag cria um parágrafo de texto?",
                alternativas: ["p", "span", "div", "text"],
                respostaCerta: 0,
                explicacao: "A tag p é feita para parágrafos e separa blocos de texto."
            },
            {
                pergunta: "Qual tag insere uma imagem na página?",
                alternativas: ["image", "photo", "src", "img"],
                respostaCerta: 3,
                explicacao: "A tag img insere uma imagem, e o endereço dela vai no atributo src."
            },
            {
                pergunta: "Qual atributo define o endereço de destino de um link?",
                alternativas: ["link", "href", "url", "src"],
                respostaCerta: 1,
                explicacao: "O atributo href guarda o endereço para onde o link leva."
            },
            {
                pergunta: "Qual tag cria uma lista com marcadores (bolinhas)?",
                alternativas: ["ol", "li", "dl", "ul"],
                respostaCerta: 3,
                explicacao: "A tag ul cria uma lista sem ordem. A ol cria uma lista numerada."
            },
            {
                pergunta: "Qual tag cria uma quebra de linha?",
                alternativas: ["lb", "br", "nl", "break"],
                respostaCerta: 1,
                explicacao: "A tag br pula para a linha de baixo e não precisa de fechamento."
            },
            {
                pergunta: "Qual atributo da tag img descreve a imagem para quem não consegue vê-la?",
                alternativas: ["name", "caption", "alt", "src"],
                respostaCerta: 2,
                explicacao: "O atributo alt traz o texto alternativo, lido por leitores de tela."
            },
            {
                pergunta: "Qual tag representa o rodapé de uma página?",
                alternativas: ["bottom", "footer", "end", "foot"],
                respostaCerta: 1,
                explicacao: "A tag footer marca o rodapé, onde ficam contatos e direitos, por exemplo."
            },
            {
                pergunta: "Qual tag guarda informações da página que não aparecem na tela, como o título da aba?",
                alternativas: ["body", "main", "head", "footer"],
                respostaCerta: 2,
                explicacao: "A tag head guarda dados da página, como título, fontes e links para o CSS."
            }
        ],

        medio: [
            {
                pergunta: "Qual tag guarda o conteúdo principal de uma página e deve aparecer só uma vez?",
                alternativas: ["section", "article", "main", "aside"],
                respostaCerta: 2,
                explicacao: "A tag main marca o conteúdo principal da página e só pode existir uma vez."
            },
            {
                pergunta: "Qual atributo faz um link abrir em uma nova aba?",
                alternativas: ["target", "new", "open", "window"],
                respostaCerta: 0,
                explicacao: "O atributo target com o valor _blank abre o link em uma nova aba."
            },
            {
                pergunta: "Qual atributo do input mostra uma dica dentro do campo enquanto ele está vazio?",
                alternativas: ["hint", "value", "label", "placeholder"],
                respostaCerta: 3,
                explicacao: "O atributo placeholder mostra um texto de exemplo que some quando a pessoa começa a digitar."
            },
            {
                pergunta: "Qual tag liga um texto a um campo de formulário, para que clicar no texto selecione o campo?",
                alternativas: ["legend", "label", "caption", "title"],
                respostaCerta: 1,
                explicacao: "A tag label se conecta ao campo pelo atributo for e ajuda quem usa leitor de tela."
            },
            {
                pergunta: "Qual tag cria uma linha em uma tabela?",
                alternativas: ["td", "th", "tr", "row"],
                respostaCerta: 2,
                explicacao: "A tag tr cria uma linha, e dentro dela ficam as células td e th."
            },
            {
                pergunta: "Qual valor do atributo type cria um campo que mostra os caracteres digitados como bolinhas?",
                alternativas: ["secret", "hidden", "password", "mask"],
                respostaCerta: 2,
                explicacao: "O type password esconde o que a pessoa digita. Já o hidden nem mostra o campo na tela."
            },
            {
                pergunta: "Qual tag marca o bloco com os links principais de navegação de um site?",
                alternativas: ["header", "nav", "aside", "links"],
                respostaCerta: 1,
                explicacao: "A tag nav agrupa os links de navegação e ajuda os leitores de tela a encontrá-los."
            },
            {
                pergunta: "Qual atributo da tag html define o idioma do conteúdo da página?",
                alternativas: ["language", "locale", "charset", "lang"],
                respostaCerta: 3,
                explicacao: "O atributo lang, como em lang='pt-BR', ajuda navegadores e leitores de tela a tratar o idioma certo."
            },
            {
                pergunta: "Qual valor do atributo name da tag meta ajusta a página à largura do celular?",
                alternativas: ["viewport", "responsive", "mobile", "device"],
                respostaCerta: 0,
                explicacao: "A meta tag viewport faz a largura da página acompanhar a largura da tela do aparelho."
            },
            {
                pergunta: "Qual atributo impede o envio de um formulário se o campo estiver vazio?",
                alternativas: ["needed", "required", "mandatory", "important"],
                respostaCerta: 1,
                explicacao: "O atributo required obriga a pessoa a preencher o campo antes de enviar."
            }
        ],

        dificil: [
            {
                pergunta: "Qual valor de type um button assume por padrão dentro de um form?",
                alternativas: ["button", "submit", "reset", "link"],
                respostaCerta: 1,
                explicacao: "Dentro de um form, o button sem type age como submit e envia o formulário. Por isso usamos type='button' neste quiz."
            },
            {
                pergunta: "Qual atributo do script baixa o arquivo sem travar a página e o executa só depois que o HTML for lido?",
                alternativas: ["async", "lazy", "wait", "defer"],
                respostaCerta: 3,
                explicacao: "O defer baixa o arquivo em paralelo e espera o HTML terminar. O async executa assim que o download acaba, sem esperar."
            },
            {
                pergunta: "Qual atributo da tag img faz a imagem só ser carregada quando estiver perto de aparecer na tela?",
                alternativas: ["loading", "lazy", "defer", "preload"],
                respostaCerta: 0,
                explicacao: "O atributo loading, com o valor lazy, adia o carregamento da imagem e deixa a página mais leve."
            },
            {
                pergunta: "Qual tag permite oferecer imagens diferentes para tamanhos de tela diferentes?",
                alternativas: ["gallery", "figure", "picture", "canvas"],
                respostaCerta: 2,
                explicacao: "A tag picture guarda várias tags source, uma para cada situação, e uma img de reserva."
            },
            {
                pergunta: "Qual tag cria um bloco que abre e fecha ao clicar no título, sem precisar de JavaScript?",
                alternativas: ["dialog", "details", "accordion", "collapse"],
                respostaCerta: 1,
                explicacao: "A tag details esconde o conteúdo até a pessoa clicar no summary, que funciona como título."
            },
            {
                pergunta: "Qual atributo ARIA faz o leitor de tela avisar quando o conteúdo de um elemento muda?",
                alternativas: ["aria-hidden", "aria-label", "aria-role", "aria-live"],
                respostaCerta: 3,
                explicacao: "O aria-live avisa as mudanças sem a pessoa precisar focar no elemento. Foi o que usamos no número da contagem regressiva."
            },
            {
                pergunta: "Qual atributo faz o leitor de tela ignorar um elemento, como um ícone decorativo?",
                alternativas: ["aria-hidden", "aria-ignore", "aria-skip", "aria-none"],
                respostaCerta: 0,
                explicacao: "O aria-hidden='true' tira o elemento da leitura. Usamos nos ícones dos botões, porque o texto já explica a ação."
            },
            {
                pergunta: "Qual é a função do doctype no início do arquivo HTML?",
                alternativas: ["Define o idioma da página", "Liga o CSS ao HTML", "Avisa ao navegador que o documento é HTML moderno", "Cria o título que aparece na aba"],
                respostaCerta: 2,
                explicacao: "Sem o doctype, o navegador pode entrar no modo de compatibilidade antigo e mostrar a página de um jeito inesperado."
            },
            {
                pergunta: "Qual tag marca uma data ou um horário de forma que o computador consiga entender?",
                alternativas: ["date", "time", "datetime", "clock"],
                respostaCerta: 1,
                explicacao: "A tag time, com o atributo datetime, guarda a data num formato que navegadores e buscadores entendem."
            },
            {
                pergunta: "Qual atributo permite que um elemento comum, como uma div, receba foco pelo teclado?",
                alternativas: ["tabindex", "focus", "keyboard", "accesskey"],
                respostaCerta: 0,
                explicacao: "O tabindex='0' coloca o elemento na ordem do Tab. Sempre que der, prefira elementos nativos, como o button."
            }
        ]
    },
    css: {
        facil: [
            {
                pergunta: "Qual propriedade muda a cor do texto?",
                alternativas: ["color", "font-color", "text-color", "background"],
                respostaCerta: 0,
                explicacao: "A propriedade color define a cor do texto."
            },
            {
                pergunta: "Qual propriedade muda o tamanho do texto?",
                alternativas: ["text-size", "font-style", "font-size", "text-scale"],
                respostaCerta: 2,
                explicacao: "A propriedade font-size muda o tamanho do texto."
            },
            {
                pergunta: "Qual propriedade muda a cor de fundo de um elemento?",
                alternativas: ["bg-color", "background-color", "color-background", "fill"],
                respostaCerta: 1,
                explicacao: "A propriedade background-color define a cor de fundo."
            },
            {
                pergunta: "Qual propriedade cria espaço do lado de fora da borda de um elemento?",
                alternativas: ["padding", "spacing", "outline", "margin"],
                respostaCerta: 3,
                explicacao: "A propriedade margin afasta o elemento do que está ao redor dele."
            },
            {
                pergunta: "Qual propriedade cria espaço entre o conteúdo e a borda de um elemento?",
                alternativas: ["margin", "border", "padding", "spacing"],
                respostaCerta: 2,
                explicacao: "A propriedade padding cria um respiro por dentro do elemento."
            },
            {
                pergunta: "Qual símbolo seleciona um elemento pela sua classe?",
                alternativas: [".", "#", "*", ":"],
                respostaCerta: 0,
                explicacao: "O ponto seleciona classes, como em .botao. O # seleciona ids."
            },
            {
                pergunta: "Qual símbolo seleciona um elemento pelo seu id?",
                alternativas: ["@", "#", ".", "&"],
                respostaCerta: 1,
                explicacao: "O # seleciona um id, como em #topo. Ele deve ser único na página."
            },
            {
                pergunta: "Qual propriedade deixa o texto em negrito?",
                alternativas: ["text-bold", "font-bold", "text-weight", "font-weight"],
                respostaCerta: 3,
                explicacao: "A propriedade font-weight controla a espessura da letra, como no valor bold."
            },
            {
                pergunta: "Qual propriedade centraliza o texto dentro de um elemento?",
                alternativas: ["align-text", "text-align", "font-align", "text-center"],
                respostaCerta: 1,
                explicacao: "A propriedade text-align alinha o texto, e o valor center o centraliza."
            },
            {
                pergunta: "Qual propriedade arredonda os cantos de um elemento?",
                alternativas: ["corner-radius", "border-curve", "border-radius", "round"],
                respostaCerta: 2,
                explicacao: "A propriedade border-radius arredonda os cantos da borda."
            }
        ],

        medio: [
            {
                pergunta: "Qual valor da propriedade display ativa o Flexbox em um elemento?",
                alternativas: ["flexbox", "flexible", "flex", "inline-flexible"],
                respostaCerta: 2,
                explicacao: "O valor flex transforma o elemento em um container flexível, e os filhos viram itens flex."
            },
            {
                pergunta: "Qual valor de position posiciona o elemento em relação ao ancestral posicionado mais próximo?",
                alternativas: ["absolute", "fixed", "sticky", "static"],
                respostaCerta: 0,
                explicacao: "O valor absolute usa o ancestral mais próximo que tenha position diferente de static. O fixed usa a janela do navegador."
            },
            {
                pergunta: "Qual pseudo-classe aplica um estilo quando o mouse passa por cima de um elemento?",
                alternativas: ["active", "focus", "visited", "hover"],
                respostaCerta: 3,
                explicacao: "A pseudo-classe :hover vale enquanto o cursor está sobre o elemento."
            },
            {
                pergunta: "Qual propriedade do Flexbox alinha os itens ao longo do eixo principal?",
                alternativas: ["align-items", "justify-content", "flex-direction", "align-content"],
                respostaCerta: 1,
                explicacao: "A propriedade justify-content distribui os itens no eixo principal. O align-items cuida do eixo transversal."
            },
            {
                pergunta: "Qual propriedade cria espaço entre os itens de um flex ou grid, sem precisar de margin?",
                alternativas: ["spacing", "gutter", "gap", "space"],
                respostaCerta: 2,
                explicacao: "A propriedade gap define o espaço entre os itens, e só entre eles, sem sobrar nas pontas."
            },
            {
                pergunta: "Qual regra aplica estilos só a partir de certa largura de tela?",
                alternativas: ["@media", "@screen", "@query", "@responsive"],
                respostaCerta: 0,
                explicacao: "A regra @media, como em @media (min-width: 48rem), cria estilos que só valem para aquele tamanho de tela."
            },
            {
                pergunta: "Qual valor de box-sizing faz o padding e a borda entrarem na conta da largura do elemento?",
                alternativas: ["content-box", "padding-box", "border-box", "margin-box"],
                respostaCerta: 2,
                explicacao: "Com border-box, a largura definida já inclui padding e borda, e o tamanho fica mais previsível."
            },
            {
                pergunta: "Como se usa o valor de uma variável CSS chamada --cor?",
                alternativas: ["$cor", "get(--cor)", "use(--cor)", "var(--cor)"],
                respostaCerta: 3,
                explicacao: "A função var() lê o valor de uma variável CSS, como em color: var(--cor)."
            },
            {
                pergunta: "Qual propriedade define qual elemento fica na frente quando dois se sobrepõem?",
                alternativas: ["layer", "z-index", "depth", "stack"],
                respostaCerta: 1,
                explicacao: "A propriedade z-index recebe um número, e o elemento com o valor maior fica por cima. Ela funciona em elementos posicionados."
            },
            {
                pergunta: "Qual propriedade faz a mudança de um estilo acontecer aos poucos, e não de uma vez?",
                alternativas: ["smooth", "transition", "fade", "motion"],
                respostaCerta: 1,
                explicacao: "A propriedade transition define quais propriedades animam e quanto tempo a mudança leva."
            }
        ],

        dificil: [
            {
                pergunta: "Qual seletor tem a maior especificidade?",
                alternativas: [".botao", "button", "#botao", "main button"],
                respostaCerta: 2,
                explicacao: "O seletor de id vale mais que o de classe, e o de classe vale mais que o de tag."
            },
            {
                pergunta: "Quando dois seletores têm a mesma especificidade, qual regra vence?",
                alternativas: ["A que aparece por último no CSS", "A que aparece primeiro no CSS", "A que tem mais propriedades", "A que tem o seletor mais curto"],
                respostaCerta: 0,
                explicacao: "Em caso de empate, a última regra escrita vence. Por isso a ordem das regras no arquivo importa."
            },
            {
                pergunta: "Qual é a ordem das camadas do box model, de dentro para fora?",
                alternativas: ["margin, border, padding, content", "content, border, padding, margin", "padding, content, border, margin", "content, padding, border, margin"],
                respostaCerta: 3,
                explicacao: "O conteúdo fica no centro, depois vem o padding, a borda e, por fora de tudo, a margin."
            },
            {
                pergunta: "O que acontece com as margens verticais de dois blocos vizinhos que se encostam?",
                alternativas: ["Elas se somam", "Elas se fundem e vale a maior", "Vale sempre a margem do bloco de baixo", "Vale a menor das duas"],
                respostaCerta: 1,
                explicacao: "As margens verticais colapsam e fica só a maior. Isso não acontece dentro de flex ou grid."
            },
            {
                pergunta: "Em que o valor da unidade rem se baseia?",
                alternativas: ["No tamanho da fonte do elemento pai", "Na largura da tela", "No tamanho da fonte do elemento raiz, o html", "No tamanho da fonte do body"],
                respostaCerta: 2,
                explicacao: "O rem usa a fonte do html como referência. Já o em usa a fonte do elemento pai."
            },
            {
                pergunta: "Qual valor de position deixa o elemento rolando normalmente até chegar a certo ponto e depois o prende na tela?",
                alternativas: ["sticky", "fixed", "absolute", "relative"],
                respostaCerta: 0,
                explicacao: "O sticky se comporta como relative até atingir o valor de top, e então fica preso. Foi o que usamos no card de pontuação."
            },
            {
                pergunta: "Para que serve minmax(0, 1fr) em uma coluna do grid?",
                alternativas: ["Fixar a coluna com largura 0", "Deixar a coluna encolher abaixo do tamanho do conteúdo, sem estourar", "Esconder a coluna em telas pequenas", "Fazer a coluna crescer sem limite"],
                respostaCerta: 1,
                explicacao: "Sem o minmax, a coluna 1fr não encolhe além do conteúdo, e um texto comprido a empurra para fora."
            },
            {
                pergunta: "O que seleciona main section:not(.active)?",
                alternativas: ["Só a section que tem a classe active", "Todas as sections da página, ativas ou não", "Todo elemento dentro do main que não é section", "Todas as sections dentro do main que não têm a classe active"],
                respostaCerta: 3,
                explicacao: "O :not() exclui o que combina com o que está entre parênteses. Foi o que usamos para esconder as telas que não estão ativas."
            },
            {
                pergunta: "Por que o atributo hidden não esconde um elemento que tem display: flex no CSS?",
                alternativas: ["Porque o display escrito no CSS vence o estilo padrão do hidden", "Porque o hidden só funciona em parágrafos", "Porque o flex bloqueia atributos do HTML", "Porque o hidden precisa de JavaScript para funcionar"],
                respostaCerta: 0,
                explicacao: "O hidden usa um display: none fraco, que perde para qualquer display do seu CSS. A saída foi a regra [hidden] com display: none."
            },
            {
                pergunta: "O que significa a abordagem mobile-first?",
                alternativas: ["Testar o site só no celular", "Escrever o CSS base para telas pequenas e usar min-width para ampliar nas maiores", "Esconder o site no desktop", "Escrever o CSS base para telas grandes e usar max-width para reduzir"],
                respostaCerta: 1,
                explicacao: "O CSS base serve para o celular, e o @media (min-width) acrescenta o que muda em telas maiores, como fizemos no quiz."
            }
        ]
    },
    js: {
        facil: [
            {
                pergunta: "Qual método mostra uma mensagem no Console?",
                alternativas: ["print()", "console.show()", "log.console()", "console.log()"],
                respostaCerta: 3,
                explicacao: "O método console.log imprime uma mensagem no console."
            }, 
            {
                pergunta: "Qual palavra cria uma variável que pode mudar de valor?",
                alternativas: ["const", "let", "int", "fixed"],
                respostaCerta: 1,
                explicacao: "A variável let é usada quando o valor irá mudar ao longo do código."
            },
            {
                pergunta: "Qual palavra cria uma variável que não pode receber outro valor depois?",
                alternativas: ["let", "var", "const", "fixed"],
                respostaCerta: 2,
                explicacao: "A palavra const cria uma constante, que não aceita um valor novo."
            },
            {
                pergunta: "Qual método adiciona um item no final de uma lista?",
                alternativas: ["add", "push", "append", "insert"],
                respostaCerta: 1,
                explicacao: "O método push coloca um item novo no final da lista."
            },
            {
                pergunta: "Qual propriedade mostra quantos itens uma lista tem?",
                alternativas: ["length", "size", "count", "total"],
                respostaCerta: 0,
                explicacao: "A propriedade length guarda a quantidade de itens da lista."
            },
            {
                pergunta: "Qual operador compara dois valores olhando o valor e o tipo ao mesmo tempo?",
                alternativas: ["=", "==", "=>", "==="],
                respostaCerta: 3,
                explicacao: "O operador === só diz que são iguais se o valor e o tipo forem iguais."
            },
            {
                pergunta: "Qual método faz o JavaScript ficar de ouvido esperando um clique em um elemento?",
                alternativas: ["addEventListener", "whenClick", "listenClick", "clickEvent"],
                respostaCerta: 0,
                explicacao: "O método addEventListener recebe o tipo do evento, como click, e a função que roda quando ele acontece."
            },
            {
                pergunta: "Qual método encontra um elemento da página pelo id dele?",
                alternativas: ["getElementByClass", "getElementByTag", "getElementByName", "getElementById"],
                respostaCerta: 3,
                explicacao: "O método getElementById procura o elemento que tem aquele id."
            },
            {
                pergunta: "Qual função transforma um texto em número?",
                alternativas: ["String()", "Boolean()", "Number()", "Array()"],
                respostaCerta: 2,
                explicacao: "A função Number converte um texto, como '3', no número 3."
            },
            {
                pergunta: "Qual propriedade troca o texto que aparece dentro de um elemento?",
                alternativas: ["writeText", "textContent", "setText", "content"],
                respostaCerta: 1,
                explicacao: "A propriedade textContent guarda o texto do elemento, e dá para trocar o valor dela."
            }
        ],

        medio: [
            {
                pergunta: "O que o método querySelectorAll devolve?",
                alternativas: ["Só o primeiro elemento que combina", "Uma lista com todos os elementos que combinam", "Um texto com o HTML dos elementos", "Um número com a quantidade encontrada"],
                respostaCerta: 1,
                explicacao: "O querySelectorAll devolve uma lista com todos os elementos que combinam com o seletor. O querySelector devolve só o primeiro."
            },
            {
                pergunta: "Qual função para uma repetição criada com setInterval?",
                alternativas: ["stopInterval()", "endInterval()", "removeInterval()", "clearInterval()"],
                respostaCerta: 3,
                explicacao: "O clearInterval recebe o controle remoto que o setInterval devolveu e para a repetição."
            },
            {
                pergunta: "Qual método cria uma cópia de uma lista sem alterar a original?",
                alternativas: ["slice()", "splice()", "pop()", "shift()"],
                respostaCerta: 0,
                explicacao: "O slice() devolve uma cópia da lista. Os outros três alteram a lista original."
            },
            {
                pergunta: "Qual é o resultado de typeof [1, 2, 3]?",
                alternativas: ["array", "list", "object", "number"],
                respostaCerta: 2,
                explicacao: "Em JavaScript, uma lista é um tipo de objeto, então o typeof devolve object. Para saber se algo é lista, use Array.isArray()."
            },
            {
                pergunta: "Qual método cria uma nova lista com o resultado de uma função aplicada a cada item?",
                alternativas: ["forEach", "filter", "reduce", "map"],
                respostaCerta: 3,
                explicacao: "O map devolve uma lista nova, com um resultado para cada item. O forEach só percorre a lista e não devolve nada."
            },
            {
                pergunta: "Qual método cria uma nova lista só com os itens que passam em um teste?",
                alternativas: ["map", "filter", "find", "some"],
                respostaCerta: 1,
                explicacao: "O filter guarda só os itens em que o teste dá verdadeiro. O find devolve apenas um item, e o some devolve true ou false."
            },
            {
                pergunta: "Qual é o resultado de '5' === 5?",
                alternativas: ["true", "undefined", "false", "erro"],
                respostaCerta: 2,
                explicacao: "O === compara valor e tipo. O texto '5' e o número 5 têm tipos diferentes, por isso dá false. É o motivo de usarmos Number() no quiz."
            },
            {
                pergunta: "Como se lê o atributo data-level de um elemento?",
                alternativas: ["elemento.dataset.level", "elemento.data.level", "elemento.getData('level')", "elemento.level.data"],
                respostaCerta: 0,
                explicacao: "Os atributos que começam com data- ficam no dataset, e o nome depois do traço vira a propriedade."
            },
            {
                pergunta: "O que o classList.toggle('ativo') faz?",
                alternativas: ["Sempre adiciona a classe ao elemento", "Sempre remove a classe do elemento", "Alterna: tira a classe se tem, põe se não tem", "Troca todas as classes do elemento"],
                respostaCerta: 2,
                explicacao: "O toggle liga e desliga a classe a cada chamada, como no botão de modo claro e escuro."
            },
            {
                pergunta: "Qual expressão gera um número inteiro aleatório de 0 a 9?",
                alternativas: ["Math.random(10)", "Math.random() * 10", "Math.int(Math.random() * 10)", "Math.floor(Math.random() * 10)"],
                respostaCerta: 3,
                explicacao: "O Math.random() dá um decimal de 0 até menos que 1. Multiplicar por 10 amplia o intervalo, e o Math.floor corta os decimais."
            }
        ],

        dificil: [
            {
                pergunta: "Qual é o resultado de typeof null?",
                alternativas: ["null", "undefined", "object", "number"],
                respostaCerta: 2,
                explicacao: "O typeof null devolve object. É um erro antigo da linguagem, mantido para não quebrar sites que já existiam."
            },
            {
                pergunta: "O que é uma closure?",
                alternativas: ["Uma função que continua acessando as variáveis do lugar onde foi criada", "Uma função que fecha a janela do navegador", "Uma variável que não aceita novos valores", "Um método que para um laço de repetição"],
                respostaCerta: 0,
                explicacao: "A função guarda o acesso às variáveis de fora dela. A função do setInterval da contagem regressiva faz isso com a variável number."
            },
            {
                pergunta: "Qual é a ordem da saída no console? console.log('A'); setTimeout(() => console.log('B'), 0); console.log('C');",
                alternativas: ["A, B, C", "A, C, B", "B, A, C", "C, B, A"],
                respostaCerta: 1,
                explicacao: "Mesmo com 0 milissegundo, o setTimeout espera o código atual terminar. Por isso o B aparece por último."
            },
            {
                pergunta: "Qual é o resultado de 0.1 + 0.2 === 0.3 em JavaScript?",
                alternativas: ["true", "undefined", "erro", "false"],
                respostaCerta: 3,
                explicacao: "Os números decimais são guardados de forma aproximada, e 0.1 + 0.2 dá 0.30000000000000004. Por isso a comparação falha."
            },
            {
                pergunta: "Qual palavra faz uma função async esperar uma promessa terminar antes de continuar?",
                alternativas: ["wait", "pause", "await", "hold"],
                respostaCerta: 2,
                explicacao: "O await pausa a função async até a promessa ser resolvida e devolve o resultado dela."
            },
            {
                pergunta: "O que acontece ao rodar const lista = []; lista.push(1);?",
                alternativas: ["Dá erro, porque const não aceita mudanças", "Funciona, porque const só impede trocar a variável por outro valor", "Funciona, mas só na primeira vez", "Dá erro, mas só no modo estrito"],
                respostaCerta: 1,
                explicacao: "O const trava a variável, e não o conteúdo da lista. Por isso um push continua funcionando."
            },
            {
                pergunta: "O que o console mostra em console.log(x); var x = 5;?",
                alternativas: ["5", "null", "erro de referência", "undefined"],
                respostaCerta: 3,
                explicacao: "A declaração do var é puxada para o topo, mas o valor 5 não. Com let, o mesmo código daria erro."
            },
            {
                pergunta: "Qual é a diferença da arrow function em relação ao this?",
                alternativas: ["Ela não tem this próprio e usa o do lugar onde foi criada", "Ela sempre aponta para o window", "Ela não pode ser usada com this", "Ela cria um this novo a cada chamada"],
                respostaCerta: 0,
                explicacao: "A arrow function pega o this do contexto de fora. A function comum cria o próprio this, conforme a forma de chamada."
            },
            {
                pergunta: "Qual método devolve o primeiro item da lista que passa em um teste?",
                alternativas: ["filter", "find", "some", "includes"],
                respostaCerta: 1,
                explicacao: "O find devolve só o primeiro item que passa no teste. O filter devolve uma lista com todos os que passam."
            },
            {
                pergunta: "Qual método transforma um objeto em texto no formato JSON?",
                alternativas: ["JSON.stringify", "JSON.parse", "JSON.convert", "JSON.text"],
                respostaCerta: 0,
                explicacao: "O JSON.stringify converte o objeto em texto, e o JSON.parse faz o caminho contrário."
            }
        ]
    }
};