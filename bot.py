from aiogram import Bot, Dispatcher, types
from aiogram.enums import ParseMode
from aiogram.client.default import DefaultBotProperties
import asyncio

TOKEN = "8347895642:AAF3y0YCOUtJK_O1Vnr3JU0NFP571CTODuc"  # Замените на реальный токен

# Бот с настройками по умолчанию
bot = Bot(
    token=TOKEN,
    default=DefaultBotProperties(parse_mode=ParseMode.HTML)  # Указываем parse_mode здесь
)
dp = Dispatcher()

@dp.message(lambda message: message.text == "xylo37883")
async def reply_bbb(message: types.Message):
    await message.reply("ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo1dm9Wb3JMV3lZSWxrUmd3TEh6Tm1keXF1b21Vc2laUlJCL0YwTzhjL0FBPQ@185.244.40.221:443/?type=tcp#🇬🇧ВеликобританияПриватOutlineSagdiev")

async def main():
    await dp.start_polling(bot)

if __name__ == "__main__":
    asyncio.run(main())