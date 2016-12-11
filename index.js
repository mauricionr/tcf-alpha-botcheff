'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const app = express()
const config = require('./config/default.js')
const token = process.env.PAGE_ACCESS_TOKEN || config.pageAccessToken;
const actions = require('./config/actions.js'); 

const users = {};
const carrinho = 'carrinho';

app.set('port', (process.env.PORT || 5000))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.post('/webhook/', function (req, res) {
	let messaging_events = req.body.entry[0].messaging    
    console.log('Body: \n', JSON.stringify(req.body))
	for (let i = 0; i < messaging_events.length; i++) {
		let event = req.body.entry[0].messaging[i]
		let sender = event.sender.id
        
        users[sender] = users[sender] || {} 
        users[sender][carrinho] = users[sender][carrinho] || []

        console.log('Users : ', users)

		if (event.message && event.message.text) {
            callSendAPI(actions.textMessage(sender, 'O que deseja comer hoje?')).then(() => {
                callSendAPI(actions.categorias(sender))
            })
		}
		if (event.postback) {
			let text = JSON.stringify(event.postback)
            let currentStep = event.postback.payload.split('_')[0];
			switch(currentStep){
                case actions.contants.INICIO:
                    callSendAPI(actions.textMessage(sender, 'O que deseja comer hoje?')).then(() => {
                        callSendAPI(actions.categorias(sender))
                    })
                break;
                case actions.contants.CATEGORIA:
                    callSendAPI(actions.textMessage(sender, 'Como deseja buscar?')).then(() => {
                        callSendAPI(actions.ordem(sender));
                    })
                break;
                case actions.contants.ORDEM:
                    callSendAPI(actions.restaurantes(sender))
                break;
                case actions.contants.RESTAURANTE:
                    callSendAPI(actions.menu(sender))
                break;
                case actions.contants.ITEMMENU:
                    callSendAPI(actions.produtos(sender))
                break;
                case actions.contants.ADDPRODUTO:
                    callSendAPI(actions.textMessage(sender, 'Ok, seu item foi adicionado ao carrinho!')).then(() => {
                        callSendAPI(actions.produtos(sender))
                    })
                break
            }
			continue
		}
	}
	res.sendStatus(200);
})



/*
 * Call the Send API. The message data goes in the body. If successful, we'll 
 * get the message id in a response 
 *
 */
function callSendAPI(messageData) {
  return new Promise((resolve, reject) => {
        request({
            uri: 'https://graph.facebook.com/v2.6/me/messages',
            qs: { access_token: token },
            method: 'POST',
            json: messageData
        }, function (error, response, body) {
            if (!error && response.statusCode == 200) {
            var recipientId = body.recipient_id;
            var messageId = body.message_id;
                if (messageId) {
                    console.log("Successfully sent message with id %s to recipient %s", messageId, recipientId);
                } else {
                    console.log("Successfully called Send API for recipient %s", recipientId);
                }
                resolve(true)
            } else {
                console.error("Failed calling Send API", response.statusCode, response.statusMessage, body.error);
                reject(false)
            }
        });  
    })  
}

app.get('/', function (req, res) {
	res.send('hello world i am a secret bot')
})

// for facebook verification
app.get('/webhook/', function (req, res) {
	if (req.query['hub.verify_token'] === 'my_voice_is_my_password_verify_me') {
		res.send(req.query['hub.challenge'])
	}
	res.send('Error, wrong token')
})

// spin spin sugar
app.listen(app.get('port'), function() {
	console.log('running on port', app.get('port'))
})
