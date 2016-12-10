const config = require('./default.js')
const SERVER_URL = config.serverURL;

module.exports = {
    saudacao:"Olá!",
    questao:"O que voce quer comer?",
    agradecimentos:"Obrigado por utilizar BotChef",
    categorias:{
      text: "O que você quer comer?",
      quick_replies: [
        {
          "content_type":"text",
          "title":"Pizza",
          "payload":"PIZZA"
        },
        {
          "content_type":"text",
          "title":"Lanches",
          "payload":"LANCHES"
        },
        {
          "content_type":"text",
          "title":"Japonesa",
          "payload":"JAPONESA"
        }
      ]
    },
    ordem:{
      text: "Como você deseja buscar?",
      quick_replies: [
        {
          "content_type":"text",
          "title":"Preço",
          "payload":"PRECO"
        },
        {
          "content_type":"text",
          "title":"Localização",
          "payload":"LOCALIZACAO"
        },
        {
          "content_type":"text",
          "title":"Recomendação",
          "payload":"RECOMENDACAO"
        }
      ]
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
                        type: "web_url",
                        url: "https://www.oculus.com/en-us/rift/",
                        title: "Open Web URL"
                        }, {
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
                        type: "web_url",
                        url: "https://www.oculus.com/en-us/rift/",
                        title: "Open Web URL"
                        }, {
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
                        type: "web_url",
                        url: "https://www.oculus.com/en-us/rift/",
                        title: "Open Web URL"
                        }, {
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