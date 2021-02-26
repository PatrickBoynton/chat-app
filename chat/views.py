from django.shortcuts import render
from rest_framework import generics
from .models import Chat
from .serializers import ChatSerializer


# Create your views here.
class ChatListAPIView(generics.ListCreateAPIView):
    queryset = Chat.objects.all()
    serializer_class = ChatSerializer

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class ChatDetailAPIView(generics.RetrieveAPIView):
    queryset = Chat.objects.all()
    serializer_class = ChatSerializer


class ChatDeleteAPIView(generics.DestroyAPIView):
    queryset = Chat.objects.all()
    # serializer_class = ChatSerializer


class ChatUpdateAPIView(generics.UpdateAPIView):
    queryset = Chat.objects.all()
    serializer_class = ChatSerializer
