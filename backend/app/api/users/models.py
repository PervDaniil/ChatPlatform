from django.db import models
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):
    id = models.BigAutoField(primary_key = True)
    
    def __str__(self):
        return f'{self.id} : {self.username} {self.email}'