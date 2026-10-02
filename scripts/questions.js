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
        medio: [],
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
        medio: [],
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
            }
        ],

        medio: [

        ],

        dificil: [

        ]
    }
};