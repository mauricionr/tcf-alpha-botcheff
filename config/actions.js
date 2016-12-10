const config = require('./default.js')
const SERVER_URL = config.serverURL;

const mock = {
      attachment: {
        type: "template",
        payload: {
          template_type: "generic",
          elements: [{
            title: "rift",
            subtitle: "Next-generation virtual reality",
            item_url: "https://www.oculus.com/en-us/rift/",               
            image_url: SERVER_URL + "/assets/rift.png",
            buttons: [{
              type: "web_url",
              url: "https://www.oculus.com/en-us/rift/",
              title: "Open Web URL"
            }, {
              type: "postback",
              title: "Call Postback",
              payload: "Payload for first bubble",
            }],
          }, {
            title: "touch",
            subtitle: "Your Hands, Now in VR",
            item_url: "https://www.oculus.com/en-us/touch/",               
            image_url: SERVER_URL + "/assets/touch.png",
            buttons: [{
              type: "web_url",
              url: "https://www.oculus.com/en-us/touch/",
              title: "Open Web URL"
            }, {
              type: "postback",
              title: "Call Postback",
              payload: "Payload for second bubble",
            }]
          }]
        }
      }
    }

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