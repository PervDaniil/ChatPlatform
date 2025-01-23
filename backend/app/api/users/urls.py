from rest_framework_simplejwt.views import TokenRefreshView, TokenBlacklistView, TokenObtainPairView
from .views import RegisterUserView, UserCredentials, UsersView
from django.urls import path


jwt_urlpatterns = [
    path('obtain/', TokenObtainPairView.as_view()),
    path('refresh/', TokenRefreshView.as_view()),
    path('blacklist/', TokenBlacklistView.as_view()),
    path('register/', RegisterUserView.as_view()),
]

users_urlpatterns = [
    path('', UsersView.as_view()),
    path('credentials/', UserCredentials.as_view()),
]