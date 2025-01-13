from django.db import models
from django.contrib.auth.models import AbstractUser


class Profile(models.Model):
    image = models.ImageField(upload_to='profile/avatars/', blank=True, null=True)
    

class CustomUser(AbstractUser):
    profile = models.OneToOneField(Profile, on_delete=models.CASCADE, null=True, blank=True)
    
    def __str__(self):
        return f'{self.id} : {self.username} {self.email}'