/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
const { greeting, thank, quit, leave } = require("../samples/samples.js");

module.exports = function (controller) {

    controller.hears(greeting, ['message', 'direct_message'], async (bot, message) => {
        await bot.reply(message, 'مرحبا بك');
        await bot.reply(message, 'معك الرد الآلي');
    });

    controller.hears(thank, ['message', 'direct_message'], async (bot, message) => {
        await bot.reply(message, 'شكرا لك');
        await bot.reply(message, 'يمكنك التواصل معنا في أي وقت');
    });
    
    controller.hears(quit, 'message', async (bot, message) => {
        await bot.reply(message, 'سيتم الإغلاق!');
    });
    
    controller.hears(leave, 'message', async (bot, message) => {
        await bot.reply(message, 'شكرا لتواصلك معنا');
        await bot.reply(message, 'سيتم الإغلاق!');
    });

    // use a regular expression to match the text of the message
    controller.hears(new RegExp(/^\d+$/), ['message', 'direct_message'], async function (bot, message) {
        await bot.reply(message, { text: 'لقد تم كتابة رقم في الرسالة' });
    });
}