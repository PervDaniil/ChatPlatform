from api.users.serializers import CustomUserModelSerializer
from rest_framework.serializers import ModelSerializer
from api.chats.models import Chat


class ChatModelSerializer(ModelSerializer):
    members = CustomUserModelSerializer(many=True)
    
    class Meta:
        model = Chat
        fields = "__all__"