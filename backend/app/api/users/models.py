from django.db import models
from api.chats.models import Chat
from django.contrib.auth.models import AbstractUser


class Profile(models.Model):
    online = models.BooleanField(default=False)
    image = models.ImageField(upload_to='profile/avatars/', blank=True, null=True)
    

class CustomUser(AbstractUser):
    profile = models.OneToOneField(Profile, on_delete=models.CASCADE, null=True, blank=True)
    
    @property
    def chats(self):
        return Chat.objects.filter(members=self)
    
    def __str__(self):
        return f'{self.id} : {self.username} {self.email}'