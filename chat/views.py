from django.shortcuts import render
from rest_framework import generics, permissions
from .models import Chat, Room
from .permissions import IsOwnerOrReadOnly
from .serializers import ChatSerializer, RoomSerializer


# Create your views here.
class ChatListAPIView(generics.ListCreateAPIView):
    queryset = Chat.objects.all()
    serializer_class = ChatSerializer

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class RoomListView(generics.ListAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer


class ChatDetailAPIView(generics.RetrieveAPIView):
    queryset = Chat.objects.all()
    permission_classes = (permissions.IsAdminUser | IsOwnerOrReadOnly)
    serializer_class = ChatSerializer


class ChatDeleteAPIView(generics.DestroyAPIView):
    queryset = Chat.objects.all()
    # serializer_class = ChatSerializer


class ChatUpdateAPIView(generics.UpdateAPIView):
    queryset = Chat.objects.all()
    serializer_class = ChatSerializer
