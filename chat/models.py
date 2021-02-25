from django.db import models


# Create your models here.
class Chat(models.Model):
    name = models.CharField(max_length=50, default="default_name")
    title = models.CharField(max_length=100, default="default_title")
    text = models.CharField(max_length=255, default="default_text")

    def __str__(self):
        return self.name
