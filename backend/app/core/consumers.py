import json
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

        await self.send(
            text_data = json.dumps({
                'data' : message
            })
        )
        
    
    async def save_to_database(self, data):
        pass
    
