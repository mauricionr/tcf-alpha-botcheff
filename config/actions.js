const config = require('./default.js')
const SERVER_URL = config.serverURL;

const constants = {
    CATEGORIA:'CATEGORIA',
    ORDEM:'ORDEM',
    RESTAURANTE:'RESTAURANTE',
    ITEMMENU:'ITEMMENU',
    INICIO:'INICIO',
    ADDPRODUTO:'ADDPRODUTO',
    CHAT:'CHAT',
    VIEW_CART:'VIEW',
    REMOVEPRODUTO:'REMOVEPRODUTO',
    BUY_PRODUCTS:'BUY'
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
                                image_url: SERVER_URL + "/assets/pizza1.jpg",
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
                                title: "Quero + Pizza",
                                subtitle: "Shopping Eldorado, Praça de Alimentação, 45",
                                image_url: SERVER_URL + "/assets/respizza.png",
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
                                title: "Pizzaria Mamma Italia",
                                subtitle: "Shopping Eldorado, Praça de Alimentação, 63",
                                image_url: SERVER_URL + "/assets/respizza2.jpg",
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
                                title: "Pizzaria Firenze",
                                subtitle: "Shopping Eldorado, Praça de Alimentação, 12",
                                image_url: SERVER_URL + "/assets/respizza3.jpg",
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
                                title: "Aperitivos",
                                subtitle:'Experimente nosso breadsticks!',                                
                                image_url: SERVER_URL + "/assets/aperitivo.jpg",
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
                                title: "Bebidas",
                                subtitle:'Temos refil, aproveite!',
                                image_url: SERVER_URL + "/assets/drinks.png",
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
                                title: "Saladas",
                                subtitle:'Quer algo light? Experimente nossas saladas.',             
                                image_url: SERVER_URL + "/assets/salada.jpg",
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
                                title: "Pizzas",
                                subtitle:'Pizzas. Um sabor melhor que o outro, você irá se surpreender',
                                image_url: SERVER_URL + "/assets/pizza5.jpg",
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
                                title: "Sobremesas",
                                subtitle: "Pra fechar com chave de ouro ;)",
                                image_url: SERVER_URL + "/assets/sobremesa.jpg",
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
                                title: "Lombo defumado",
                                subtitle: "Lombo defumado, pimentões, cebola e catupiry legítimo.",
                                image_url: SERVER_URL + "/assets/pizza1.jpg",
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
                                title: "Frango com Catupiry",
                                subtitle: "Filé de frango desfiado temperado e catupity legítimo.",
                                image_url: SERVER_URL + "/assets/pizza2.jpg",
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
                                title: "Peperoni",
                                subtitle: "Mussarela e fatias de peperoni Sadia.",
                                image_url: SERVER_URL + "/assets/pizza4.jpg",
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
    carrinho(recipientId){
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
                                title: "Lombo defumado",
                                subtitle: "Lombo defumado, pimentões, cebola e catupiry legítimo.",
                                image_url: SERVER_URL + "/assets/pizza1.jpg",
                                buttons: [
                                    {
                                        type: "postback",
                                        title: "Remover do carrinho",
                                        payload: "REMOVEPRODUTO_1",
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
    checkout(recipientId){
        return {
            "recipient":{
                "id":recipientId
            },
            "message":{
                "attachment":{
                "type":"template",
                    "payload":{
                        "template_type":"receipt",
                        "recipient_name":"Stephane Crozatier",
                        "order_number":"12345678902",
                        "currency":"USD",
                        "payment_method":"Visa 2345",        
                        "order_url":"http://petersapparel.parseapp.com/order?order_id=123456",
                        "timestamp":"1428444852", 
                        "elements":[
                            {
                                "title":"Classic White T-Shirt",
                                "subtitle":"100% Soft and Luxurious Cotton",
                                "quantity":2,
                                "price":50,
                                "currency":"USD",
                                "image_url":"http://petersapparel.parseapp.com/img/whiteshirt.png"
                            },
                            {
                                "title":"Classic Gray T-Shirt",
                                "subtitle":"100% Soft and Luxurious Cotton",
                                "quantity":1,
                                "price":25,
                                "currency":"USD",
                                "image_url":"http://petersapparel.parseapp.com/img/grayshirt.png"
                            }
                        ],
                        "address":{
                            "street_1":"1 Hacker Way",
                            "street_2":"",
                            "city":"Menlo Park",
                            "postal_code":"94025",
                            "state":"CA",
                            "country":"US"
                        },
                        "summary":{
                            "subtotal":75.00,
                            "shipping_cost":4.95,
                            "total_tax":6.19,
                            "total_cost":56.14
                        },
                        "adjustments":[
                            {
                                "name":"New Customer Discount",
                                "amount":20
                            },
                            {
                                "name":"$10 Off Coupon",
                                "amount":10
                            }
                        ]
                    }
                }
            }
        }
    }
}