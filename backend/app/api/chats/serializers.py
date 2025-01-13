from rest_framework.serializers import ModelSerializer
from api.chats.models import Chat


class ChatModelSerializer(ModelSerializer):
    class Meta:
        model = Chat
        fields = "__all__"