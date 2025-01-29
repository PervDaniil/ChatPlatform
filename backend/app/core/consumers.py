import json
from core.tasks import save_chat_message
from channels.generic.websocket import AsyncWebsocketConsumer


class ChatConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.chat_room = self.scope['url_route']['kwargs']['chat_id']
            
        await self.channel_layer.group_add(
            self.chat_room,
            self.channel_name,
        )
        
        await self.accept()
        
        
    async def disconnect(self, code):
        await self.channel_layer.group_discard(
            self.chat_room,
            self.channel_name,
        )
        
        
    async def receive(self, text_data: json):
        await self.channel_layer.group_send(
            self.chat_room,
            {
                'type' : 'message',
                'message' : text_data,
            }
        )     
        
        
    async def message(self, data):
        message: str = data['message']
        sender: object = self.scope['user']

        await save_chat_message(message, sender, self.chat_room)

        await self.send(
            text_data = json.dumps({
                'text' : message,
                'sender' : {
                    'id' : sender.id,
                    'username' : sender.username,
                    'last_login' : sender.last_login,
                    'online' : sender.online,
                }
            })
        )
        