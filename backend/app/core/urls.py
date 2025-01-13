from django.contrib import admin
from django.urls import path, include
from api.chats.urls import chats_urlpatterns
from api.users.urls import jwt_urlpatterns, users_urlpatterns


urlpatterns = [
    path('api/v1/token/', include(jwt_urlpatterns)),
    path('api/v2/users/', include(users_urlpatterns)),
    path('api/v3/chats/', include(chats_urlpatterns)),
    path('admin/', admin.site.urls),
]
