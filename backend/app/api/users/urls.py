from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView, TokenBlacklistView, TokenObtainPairView


jwt_urlpatterns = [
    path('obtain/', TokenObtainPairView.as_view()),
    path('refresh/', TokenRefreshView.as_view()),
    path('blacklist/', TokenBlacklistView.as_view()),
]