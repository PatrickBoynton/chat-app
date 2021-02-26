from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Chat(models.Model):
    name = models.CharField(max_length=50)
    title = models.CharField(max_length=100)
    text = models.CharField(max_length=255)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.name
