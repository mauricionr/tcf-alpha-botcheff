const config = require('./default.js')
const SERVER_URL = config.serverURL;

module.exports = {
    saudacao:"Olá!",
    questao:"O que voce quer comer?",
    agradecimentos:"Obrigado por utilizar BotChef",
    categorias:{
        type: "template",
        payload: {
        template_type: "generic",
        elements: [{
                    title: "rift",
                    subtitle: "Next-generation virtual reality",
                    item_url: "https://www.oculus.com/en-us/rift/",               
                    image_url: SERVER_URL + "/assets/rift.png",
                    buttons: [{
                    type: "postback",
                    title: "Call Postback",
                    payload: "Payload for first bubble",
                }],
            }]
        }
    },
    ordem:{
        type: "template",
        payload: {
        template_type: "generic",
        elements: [{
                    title: "rift",
                    subtitle: "Next-generation virtual reality",
                    item_url: "https://www.oculus.com/en-us/rift/",               
                    image_url: SERVER_URL + "/assets/rift.png",
                    buttons: [{
                    type: "postback",
                    title: "Call Postback",
                    payload: "Payload for first bubble",
                }],
            }]
        }
    },
    restaurantes:{
        PIZZA:{
            type: "template",
            payload: {
            template_type: "generic",
            elements: [{
                        title: "rift",
                        subtitle: "Next-generation virtual reality",
                        item_url: "https://www.oculus.com/en-us/rift/",               
                        image_url: SERVER_URL + "/assets/rift.png",
                        buttons: [{
                        type: "postback",
                        title: "Call Postback",
                        payload: "Payload for first bubble",
                    }],
                }]
            }
        },
        LANCHES:{
            type: "template",
            payload: {
            template_type: "generic",
            elements: [{
                        title: "rift",
                        subtitle: "Next-generation virtual reality",
                        item_url: "https://www.oculus.com/en-us/rift/",               
                        image_url: SERVER_URL + "/assets/rift.png",
                        buttons: [{
                        type: "postback",
                        title: "Call Postback",
                        payload: "Payload for first bubble",
                    }],
                }]
            }
        },
        JAPONESA:{
            type: "template",
            payload: {
            template_type: "generic",
            elements: [{
                        title: "rift",
                        subtitle: "Next-generation virtual reality",
                        item_url: "https://www.oculus.com/en-us/rift/",               
                        image_url: SERVER_URL + "/assets/rift.png",
                        buttons: [{
                        type: "postback",
                        title: "Call Postback",
                        payload: "Payload for first bubble",
                    }],
                }]
            }
        }
      },
    tipo_ordem:{}
}