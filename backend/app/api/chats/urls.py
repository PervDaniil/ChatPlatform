from .views import ChatsListViewSet
from django.urls import path


chats_urlpatterns = [
    path('', ChatsListViewSet.as_view())
]