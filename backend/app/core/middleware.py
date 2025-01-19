from django.contrib.auth.models import AnonymousUser
from channels.middleware import BaseMiddleware
from api.users.models import CustomUser
from core.config import SECRET_KEY
import jwt


class JWTAuthMiddleware(BaseMiddleware):
    async def __call__(self, scope, receive, send):
        user = await self.get_user(scope)
        scope['user'] = user
        
        if not user.is_authenticated:
            await self.reject_connection(send)
        
        return await super().__call__(scope, receive, send)
        
    async def extract_jwt_token(self, scope):
        query_string = scope.get('query_string').decode('utf-8')
        
        if 'jwt_token' in query_string:
            token = query_string.split('=')[1]
            return token
        
    async def get_user_instance(self, token):
        try:
            payload = jwt.decode(token, SECRET_KEY, algorithms=['HS256'])
            user_id = payload.get('user_id')
            
            if user_id is not None:
                return await CustomUser.objects.aget(id = user_id)
            
        except jwt.ExpiredSignatureError:
            print('Token is expired!')
            
        except jwt.InvalidTokenError:
            print('Invalid Token!')
        
    async def get_user(self, scope):
        token = await self.extract_jwt_token(scope)
        user = await self.get_user_instance(token)

        return user or AnonymousUser()
    
    async def reject_connection(self, send):
        await send({
            'type' : 'websocket.close',
            'code' : 4000
        })
        
    
        