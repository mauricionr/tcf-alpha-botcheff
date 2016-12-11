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
                                image_url: SERVER_URL + "/assets/respizza.jpg",
                                buttons: [{
                                    type: "postback",
                                    title: "É isso mesmo",
                                    payload: "CATEGORIA_PIZZA"
                                }]
                            },
                            {
                                title: "Lanches",               
                                image_url: SERVER_URL + "/assets/lanche1.jpg",
                                buttons: [{
                                    type: "postback",
                                    title: "É isso mesmo",
                                    payload: "CATEGORIA_LANCHE"
                                }]
                            },
                            {
                                title: "Japonesa",               
                                image_url: SERVER_URL + "/assets/barco.jpg",
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
                    template_type: "button",
                    text: 'Ótimo, já vou dar as opções. Mas antes, como você prefere que eu liste?',
                    buttons:[
                            {
                                type: "postback",
                                title: "Pelo menor preço",
                                payload: "ORDEM_PRECO",
                            }, 
                            {
                                type: "postback",
                                title: "Mais próximos a mim",
                                payload: "ORDEM_LOCALIZACAO",
                            }, 
                            {
                                type: "postback",
                                title: "Melhores avaliados",
                                payload: "ORDEM_AVALIACAO",
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
                                image_url: SERVER_URL + "/assets/pizza1.jpg",
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
                                image_url: SERVER_URL + "/assets/pizza2.jpg",
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
                                image_url: SERVER_URL + "/assets/pizza3.jpg",
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