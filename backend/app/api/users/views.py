from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from api.users.models import CustomUser
from django.db import IntegrityError
from rest_framework import status


class RegisterUserView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        if not username:
            return Response({'info' : 'Username is required!'}, status=status.HTTP_400_BAD_REQUEST)
        
        if not password:
            return Response({'info' : 'Password is required!'}, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            user = CustomUser.objects.create(
                username = username,
            )
            
            user.set_password(password)
            user.save()
            
            refresh_token = RefreshToken.for_user(user)
            access_token = refresh_token.access_token
            
            return Response({'info' : 'Account has been created successfully!',
                             'access': str(access_token), 'refresh' : str(refresh_token)}, status=status.HTTP_201_CREATED)
        
        except IntegrityError:
            return Response({'info' : 'Account with this username already exists!'}, status=status.HTTP_400_BAD_REQUEST)
        
        except Exception as Exc:
            print(Exc)
            return Response({'info' : 'Internal server Error!'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
            

class UserCredentials(APIView):
    permission_classes = [IsAuthenticated]
    
    def get(self, request):
        credentials = {
            'id' : request.user.id,
            'username' : request.user.username,
        }
        return Response({'user' : credentials}, status=status.HTTP_200_OK)