from api.users.serializers import CustomUserModelSerializer
from rest_framework.serializers import ModelSerializer
from api.chats.models import Chat, Message


class ChatMessagesSerializer(ModelSerializer):
    sender = CustomUserModelSerializer()

    class Meta:
        model = Message
        fields = ['id', 'text', 'time', 'sender']


class ChatModelSerializer(ModelSerializer):
    members = CustomUserModelSerializer(many=True)
    messages = ChatMessagesSerializer(many=True)
    
    class Meta:
        model = Chat
        fields = "__all__"