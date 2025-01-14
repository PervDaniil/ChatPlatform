from .views import SearchChatView, ChatView
from django.urls import path


chats_urlpatterns = [
    path('', ChatView.as_view()),
    path('search/', SearchChatView.as_view()),
]