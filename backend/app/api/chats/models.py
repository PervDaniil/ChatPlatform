from api.users.models import CustomUser
from django.db import models


class Chat(models.Model):
    id = models.BigAutoField(primary_key = True)
    name = models.CharField(max_length=128, blank=False)
    private = models.BooleanField(default = False)
    members = models.ManyToManyField(CustomUser)
    
    @property
    def amount_of_members(self):
        return self.members.count()
    
    def __str__(self):
        return f'{self.id} : {self.name}'


class Message(models.Model):
    id = models.BigAutoField(primary_key = True)
    text = models.TextField(blank=False)
    time = models.DateTimeField(auto_now_add=True)
    chat = models.ForeignKey(Chat, on_delete=models.CASCADE)
    sender = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    
    def __str__(self):
        return f'Message in {self.chat.name} by {self.sender.username}'


    