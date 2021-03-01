from django.shortcuts import render
from rest_framework import generics
from .models import Room


# Create your views here.
class RoomListAPIView(generics.ListAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer
