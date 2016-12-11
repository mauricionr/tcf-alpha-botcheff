const config = require('./default.js')
const SERVER_URL = config.serverURL;

const constants = {
    CATEGORIA:'CATEGORIA',
    ORDEM:'ORDEM',
    RESTAURANTE:'RESTAURANTE',
    ITEMMENU:'ITEMMENU',
    INICIO:'INICIO',
    ADDPRODUTO:'ADDPRODUTO',
    CHAT:'CHAT'
}

module.exports = {
    constants:constants,
    agradecimentos:"Obrigado por utilizar BotChef",
    textMessage(recipientId, messageText) {
        return {
            recipient: {
                id: recipientId
            },
            message: {
                text: messageText,
                metadata: "INFO_METADATA"
            }
        };
    },
    categorias(recipientId){
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
                                title: "Pizza",               
                                image_url: SERVER_URL + "/assets/touch.png",
                                buttons: [{
                                    type: "postback",
                                    title: "É isso mesmo",
                                    payload: "CATEGORIA_PIZZA"
                                }]
                            },
                            {
                                title: "Lanches",               
                                image_url: SERVER_URL + "/assets/touch.png",
                                buttons: [{
                                    type: "postback",
                                    title: "É isso mesmo",
                                    payload: "CATEGORIA_LANCHE"
                                }]
                            },
                            {
                                title: "Japonesa",               
                                image_url: SERVER_URL + "/assets/touch.png",
                                buttons: [{
                                    type: "postback",
                                    title: "É isso mesmo",
                                    payload: "CATEGORIA_JAPONESA"
                                }]
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
                    template_type: "generic",
                    elements: [
                            {
                                title: "Pelo menor preço",               
                                image_url: SERVER_URL + "/assets/touch.png",
                                buttons: [{
                                    type: "postback",
                                    title: "Ir",
                                    payload: "ORDEM_PRECO",
                                },
                                {
                                    type: "postback",
                                    title: "Voltar",
                                    payload: "INICIO_"
                                }]
                            },
                            {
                                title: "Mais próximos a mim",               
                                image_url: SERVER_URL + "/assets/touch.png",
                                buttons: [{
                                    type: "postback",
                                    title: "Ir",
                                    payload: "ORDEM_LOCALIZACAO",
                                },
                                {
                                    type: "postback",
                                    title: "Voltar",
                                    payload: "INICIO_"
                                }]
                            },
                            {
                                title: "Melhores avaliados",               
                                image_url: SERVER_URL + "/assets/touch.png",
                                buttons: [{
                                    type: "postback",
                                    title: "Ir",
                                    payload: "ORDEM_AVALIACAO",
                                },
                                {
                                    type: "postback",
                                    title: "Voltar",
                                    payload: "INICIO_"
                                }]
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
                                    title: "Ver categorias",
                                    payload: "RESTAURANTE_1",
                                },
                                {
                                    type: "postback",
                                    title: "Voltar",
                                    payload: "CATEGORIA_"
                                }]
                            },
                            {
                                title: "Restaurante 2",
                                subtitle: "Rua xpto 312321",
                                item_url: "https://www.oculus.com/en-us/touch/",               
                                image_url: SERVER_URL + "/assets/touch.png",
                                buttons: [{
                                    type: "postback",
                                    title: "Ver categorias",
                                    payload: "RESTAURANTE_2",
                                },
                                {
                                    type: "postback",
                                    title: "Voltar",
                                    payload: "CATEGORIA_"
                                }]
                            },
                            {
                                title: "Restaurante 3",
                                subtitle: "Rua xpto 4344",
                                item_url: "https://www.oculus.com/en-us/touch/",               
                                image_url: SERVER_URL + "/assets/touch.png",
                                buttons: [{
                                    type: "postback",
                                    title: "Ver categorias",
                                    payload: "RESTAURANTE_3",
                                },
                                {
                                    type: "postback",
                                    title: "Voltar",
                                    payload: "CATEGORIA_"
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
                                    title: "Ver menu",
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
                                    title: "Ver menu",
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
                                    title: "Ver menu",
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
                                    title: "Ver menu",
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
                                    title: "Ver menu",
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
                                        title: "Voltar",
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
                                        title: "Voltar",
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
                                        title: "Voltar",
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