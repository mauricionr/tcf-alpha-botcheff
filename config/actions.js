const config = require('./default.js')
const SERVER_URL = config.serverURL;

const contants = {
    CATEGORIA:'CATEGORIA',
    ORDEM:'ORDEM'
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
                                title: "touch",
                                subtitle: "Your Hands, Now in VR 1",
                                item_url: "https://www.oculus.com/en-us/touch/",               
                                image_url: SERVER_URL + "/assets/touch.png",
                                buttons: [{
                                    type: "postback",
                                    title: "Call Postback",
                                    payload: "Payload for second bubble",
                                }]
                            },
                            {
                                title: "touch",
                                subtitle: "Your Hands, Now in VR 2",
                                item_url: "https://www.oculus.com/en-us/touch/",               
                                image_url: SERVER_URL + "/assets/touch.png",
                                buttons: [{
                                    type: "postback",
                                    title: "Call Postback",
                                    payload: "Payload for second bubble",
                                }]
                            },
                            {
                                title: "touch",
                                subtitle: "Your Hands, Now in VR 3",
                                item_url: "https://www.oculus.com/en-us/touch/",               
                                image_url: SERVER_URL + "/assets/touch.png",
                                buttons: [{
                                    type: "postback",
                                    title: "Call Postback",
                                    payload: "Payload for second bubble",
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