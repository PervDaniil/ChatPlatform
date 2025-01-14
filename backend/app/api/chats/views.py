from rest_framework.generics import ListAPIView
from .serializers import ChatModelSerializer
from rest_framework.response import Response
from rest_framework.views import APIView
from api.chats.models import Chat


class ChatsListViewSet(ListAPIView):
    queryset = Chat.objects.filter(private=False)
    serializer_class = ChatModelSerializer
    
    
class SearchChatView(APIView):
    def get(self, request):
        search_param = request.query_params.get('name')
        queryset = Chat.objects.filter(name__icontains=search_param)
        serializer = ChatModelSerializer(queryset, many=True)
        return Response(serializer.data)