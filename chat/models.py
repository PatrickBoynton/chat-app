from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Room(models.Model):
    title = models.CharField(max_length=50, null=True)

    def __str__(self):
        return self.title


class Chat(models.Model):
    name = models.CharField(max_length=50)
    text = models.CharField(max_length=255)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    room = models.ForeignKey(Room, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.name
