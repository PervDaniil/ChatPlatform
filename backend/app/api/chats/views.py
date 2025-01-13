from rest_framework.generics import ListAPIView
from .serializers import ChatModelSerializer
from api.chats.models import Chat


class ChatsListViewSet(ListAPIView):
    queryset = Chat.objects.all()
    serializer_class = ChatModelSerializer