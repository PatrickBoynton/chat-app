from django.urls import path
from . import views

app_name = "chat"

urlpatterns = [
    path("rooms", views.RoomListView.as_view(), name="room_detail"),
    path("<int:pk>/", views.ChatDetailAPIView.as_view(), name="chat_detail"),
    path("<int:pk>/delete/", views.ChatDeleteAPIView.as_view(),
         name="chat_delete"),
    path("<int:pk>/update/", views.ChatUpdateAPIView.as_view(),
         name="chat_update"),
    path("", views.ChatListAPIView.as_view(), name="home")
]
