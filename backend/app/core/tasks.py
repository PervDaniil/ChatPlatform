from celery import shared_task
from api.chats.models import Chat, Message


@shared_task
async def save_chat_message(message, sender, chat_id):
    chat = await Chat.objects.aget(id = chat_id)
    await Message.objects.acreate(
        chat = chat,
        text = message,
        sender = sender,
    )
    