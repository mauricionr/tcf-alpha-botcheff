const config = require('./default.js')
const SERVER_URL = config.serverURL;

const contants = {
    CATEGORIA:'CATEGORIA',
    ORDEM:'ORDEM',
    RESTAURANTE:'RESTAURANTE',
    ITEMMENU:'ITEMMENU'
}

module.exports = {
    contants:contants,
    agradecimentos:"Obrigado por utilizar BotChef",
    categorias(recipientId){
        return {
            recipient: {
                 id: recipientId
            },
            message: {
                attachment: {
                    type: "template",
                    payload: {
                    template_type: "button",
                    text: "O que deseja comer hoje?",
                    buttons:[
                                {
                                    type: "postback",
                                    title: "Pizza",
                                    payload: "CATEGORIA_PIZZA"
                                },
                                {
                                    type: "postback",
                                    title: "Lanches",
                                    payload: "CATEGORIA_LANCHE"
                                },
                                {
                                    type: "postback",
                                    title: "Japonesa",
                                    payload: "CATEGORIA_JAPONESA"
                                }
                        ]
                    }
                }
            }
        }
    },
    ordem(recipientId){
        return {
            recipient: {
                 id: recipientId
            },
            message: {
                attachment: {
                    type: "template",
                    payload: {
                    template_type: "button",
                    text: "Como deseja buscar?",
                    buttons:[
                                {
                                    type: "postback",
                                    title: "Preço",
                                    payload: "ORDEM_PRECO"
                                },
                                {
                                    type: "postback",
                                    title: "Localização",
                                    payload: "ORDEM_LOCALIZACAO"
                                },
                                {
                                    type: "postback",
                                    title: "Recomendação",
                                    payload: "ORDEM_RECOMENDACAO"
                                }
                        ]
                    }
                }
            }
        }
    },
    restaurantes(recipientId){
        return {
            recipient: {
                id: recipientId
            },
            message: {
                attachment: {
                    type: "template",
                    payload: {
                    template_type: "generic",
                    elements: [
                            {
                                title: "Restaurante 1",
                                subtitle: "Rua xpto 32",
                                item_url: "https://www.oculus.com/en-us/touch/",               
                                image_url: SERVER_URL + "/assets/touch.png",
                                buttons: [{
                                    type: "postback",
                                    title: "Ver menu",
                                    payload: "RESTAURANTE_1",
                                }]
                            },
                            {
                                title: "Restaurante 2",
                                subtitle: "Rua xpto 312321",
                                item_url: "https://www.oculus.com/en-us/touch/",               
                                image_url: SERVER_URL + "/assets/touch.png",
                                buttons: [{
                                    type: "postback",
                                    title: "Ver menu",
                                    payload: "RESTAURANTE_2",
                                }]
                            },
                            {
                                title: "Restaurante 3",
                                subtitle: "Rua xpto 4344",
                                item_url: "https://www.oculus.com/en-us/touch/",               
                                image_url: SERVER_URL + "/assets/touch.png",
                                buttons: [{
                                    type: "postback",
                                    title: "Ver menu",
                                    payload: "RESTAURANTE_3",
                                }]
                            }
                        ]
                    }
                }
            }
        }
    },
    menu(recipientId){
        return {
            recipient: {
                id: recipientId
            },
            message: {
                attachment: {
                    type: "template",
                    payload: {
                    template_type: "generic",
                    elements: [
                            {
                                title: "Aperitivos Title",
                                subtitle: "Aperitivos subtitle",
                                item_url: "https://www.oculus.com/en-us/touch/",               
                                image_url: SERVER_URL + "/assets/touch.png",
                                buttons: [{
                                    type: "postback",
                                    title: "Ver opções",
                                    payload: "ITEMMENU_1",
                                },
                                {
                                    type: "postback",
                                    title: "Voltar",
                                    payload: "ORDEM_PRECO"
                                }]
                            },
                            {
                                title: "Bebidas Title",
                                subtitle: "Bebidas subtitle",
                                item_url: "https://www.oculus.com/en-us/touch/",               
                                image_url: SERVER_URL + "/assets/touch.png",
                                buttons: [{
                                    type: "postback",
                                    title: "Ver opções",
                                    payload: "ITEMMENU_2",
                                },
                                {
                                    type: "postback",
                                    title: "Voltar",
                                    payload: "ORDEM_PRECO"
                                }]
                            },
                            {
                                title: "Saladas Title",
                                subtitle: "Saladas subtitle",
                                item_url: "https://www.oculus.com/en-us/touch/",               
                                image_url: SERVER_URL + "/assets/touch.png",
                                buttons: [{
                                    type: "postback",
                                    title: "Ver opções",
                                    payload: "ITEMMENU_3",
                                },
                                {
                                    type: "postback",
                                    title: "Voltar",
                                    payload: "ORDEM_PRECO"
                                }]
                            },
                            {
                                title: "Pratos Title",
                                subtitle: "Pratos subtitle",
                                item_url: "https://www.oculus.com/en-us/touch/",               
                                image_url: SERVER_URL + "/assets/touch.png",
                                buttons: [{
                                    type: "postback",
                                    title: "Ver opções",
                                    payload: "ITEMMENU_4",
                                },
                                {
                                    type: "postback",
                                    title: "Voltar",
                                    payload: "ORDEM_PRECO"
                                }]
                            },
                            {
                                title: "Sobremesa Title",
                                subtitle: "Sobremesa subtitle",
                                item_url: "https://www.oculus.com/en-us/touch/",               
                                image_url: SERVER_URL + "/assets/touch.png",
                                buttons: [{
                                    type: "postback",
                                    title: "Ver opções",
                                    payload: "ITEMMENU_5",
                                },
                                {
                                    type: "postback",
                                    title: "Voltar",
                                    payload: "ORDEM_PRECO"
                                }]
                            }
                        ]
                    }
                }
            }
        }
    },
    produtos(recipientId){
        return {
            recipient: {
                id: recipientId
            },
            message: {
                attachment: {
                    type: "template",
                    payload: {
                    template_type: "generic",
                    elements: [
                            {
                                title: "Produto Title",
                                subtitle: "Produto subtitle",
                                item_url: "https://www.oculus.com/en-us/touch/",               
                                image_url: SERVER_URL + "/assets/touch.png",
                                buttons: [
                                    {
                                        type: "postback",
                                        title: "Adicionar ao carrinho",
                                        payload: "ADDPRODUTO_1",
                                    },
                                    {
                                        type: "postback",
                                        title: "Voltar ao menu",
                                        payload: "RESTAURANTE_1",
                                    }
                                ]
                            },
                            {
                                title: "Produto 2 Title",
                                subtitle: "Produto 2 subtitle",
                                item_url: "https://www.oculus.com/en-us/touch/",               
                                image_url: SERVER_URL + "/assets/touch.png",
                                buttons: [
                                    {
                                        type: "postback",
                                        title: "Adicionar ao carrinho",
                                        payload: "ADDPRODUTO_2",
                                    },
                                    {
                                        type: "postback",
                                        title: "Voltar ao menu",
                                        payload: "RESTAURANTE_1",
                                    }
                                ]
                            },
                            {
                                title: "Produto 3 Title",
                                subtitle: "Produto 3 subtitle",
                                item_url: "https://www.oculus.com/en-us/touch/",               
                                image_url: SERVER_URL + "/assets/touch.png",
                                buttons: [
                                    {
                                        type: "postback",
                                        title: "Adicionar ao carrinho",
                                        payload: "ADDPRODUTO_3",
                                    },
                                    {
                                        type: "postback",
                                        title: "Voltar ao menu",
                                        payload: "RESTAURANTE_1",
                                    }
                                ]
                            }
                        ]
                    }
                }
            }
        }
    },
    tipo_ordem(recipientId){
        return {
            recipient: {
                id: recipientId
            },
            message: {
                attachment: {
                    type: "template",
                    payload: {
                    template_type: "generic",
                    elements: [{
                            title: "touch",
                            subtitle: "Your Hands, Now in VR",
                            item_url: "https://www.oculus.com/en-us/touch/",               
                            image_url: SERVER_URL + "/assets/touch.png",
                            buttons: [{
                                type: "postback",
                                title: "Call Postback",
                                payload: "Payload for second bubble",
                            }]
                        }]
                    }
                }
            }
        }
    }
}