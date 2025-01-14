from .views import ChatsListViewSet, SearchChatView
from django.urls import path


chats_urlpatterns = [
    path('', ChatsListViewSet.as_view()),
    path('search/', SearchChatView.as_view()),
]