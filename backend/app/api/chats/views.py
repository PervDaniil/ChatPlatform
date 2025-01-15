from rest_framework.permissions import IsAuthenticated
from .serializers import ChatModelSerializer
from rest_framework.response import Response
from rest_framework.views import APIView
from api.users.models import CustomUser
from api.chats.models import Chat
from rest_framework import status


class ChatView(APIView):
    permission_classes = [IsAuthenticated]
    
    def get(self, request):
        queryset = Chat.objects.filter(members=request.user).prefetch_related('messages')
        serializer = ChatModelSerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request):
        user_2_id = request.data.get('user_id')
        
        if not user_2_id:
            return Response({'info' : 'User id is required!'}, status=status.HTTP_400_BAD_REQUEST)
        
        user2 = CustomUser.objects.filter(id = user_2_id).first()
        
        if user2 is None:
            return Response({'info' : 'Invalid user ID'}, status=status.HTTP_400_BAD_REQUEST)
        
        chat = Chat.objects.create(
            name = f'{request.user.username} {user2.username}',
            private = True,
        )
        
        chat.members.add(request.user, user2)
        
        return Response({'info' : f'Chat between {request.user.username} and {user2.username} created successfully!'},
                        status=status.HTTP_201_CREATED)
            
    def put(self, request):
        pass
    
    def delete(self, request):
        chat_id = request.data.get('chat_id')
        
        if not chat_id:
            return Response({'info' : 'Chat id is required!'}, status=status.HTTP_400_BAD_REQUEST)
        
        chat = Chat.objects.filter(id = chat_id).first()
        
        if chat is None:
            return Response({'info' : 'Invalid chat id'}, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            chat.delete()
            return Response({'info' : 'Chat deleted successfully!'}, status=status.HTTP_200_OK)
        
        except Exception as Exc:
            return Response({'info' : str(Exc)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)            
    
    
class SearchChatView(APIView):
    def get(self, request):
        search_param = request.query_params.get('name')
        queryset = Chat.objects.filter(name__icontains=search_param)
        serializer = ChatModelSerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    