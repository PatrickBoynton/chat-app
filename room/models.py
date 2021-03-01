from django.db import models
from chat.models import Chat


# Create your models here.
class Room(models.Model):
    title = models.CharField(max_length=100)
    chats = Chat

    def __str__(self):
        return self.title
