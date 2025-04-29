const TelegramBot = require('node-telegram-bot-api');


const token = '7743609399:AAG6C2VX8i9hZ6JxvRuAt2ds9PsMvgE5xvw'
const builderUrl = 'https://website-builder.develop.kokoc.tech/'
const builderDemoUrl = 'https://website-builder.demo.develop.kokoc.tech/'
const bot = new TelegramBot(token, {polling: true});

bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
const text = msg.text

if(text === '/start'){
await bot.sendMessage(chatId, 'Тест конструктора сайтов', {
	reply_markup: {
		inline_keyboard:[
			[{text: 'Открыть сайт конструктора', web_app: {url: builderUrl}}],
				[{text: 'Открыть демоверсию конструктора', web_app: {url: builderDemoUrl}}],
		]
	}
}) 
}
});

