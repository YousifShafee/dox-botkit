/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
const { help, ad_issue, payment_issue, accept, reject } = require("../samples/samples.js");

module.exports = function (controller) {

    controller.hears(help, 'message', async (bot, message) => {
        await bot.reply(message, 'كيف يمكنني أن أساعدك ؟');

        controller.hears(ad_issue, ['message', 'direct_message'], async (bot, message) => {
            await bot.reply(message, 'هل حاولت حل مشكلة الإعلان عبر حسابك الشخصي ؟');
            controller.hears(accept, ['message', 'direct_message'], async (bot, message) => {
                await bot.reply(message, 'سوف يتم التواصل معك مع أحد ممثلي خدمة العملاء');
                await bot.reply(message, 'شكرا لتواصلك معنا');
            });
            controller.hears(reject, ['message', 'direct_message'], async (bot, message) => {
                await bot.reply(message, 'يسعدنا أنه تم حل المشكلة');
            });
        });

        controller.hears(payment_issue, ['message', 'direct_message'], async (bot, message) => {
            await bot.reply(message, 'هل حوالت حل مشكلة الدقع من خلال حسابك الشخصي ؟')
            controller.hears(accept, ['message', 'direct_message'], async (bot, message) => {
                await bot.reply(message, 'سوف يتم التواصل معك مع أحد ممثلي خدمة العملاء');
                await bot.reply(message, 'شكرا لتواصلك معنا');
            });
            controller.hears(reject, ['message', 'direct_message'], async (bot, message) => {
                await bot.reply(message, 'يسعدنا أنه تم حل المشكلة');
            });
        });

    });
}