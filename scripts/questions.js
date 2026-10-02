const questions = {
    html: {
        facil: [
            {
                pergunta: "Qual tag cria um link em HTML?",
                alternativas: ["li", "a", "hr", "span"],
                respostaCerta: 1,
                explicacao: " A tag a cria um link clicável em HTML."
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

        dificil: []
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

        dificil: []
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

        ],

        dificil: [

        ]
    }
};