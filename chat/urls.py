from django.urls import path
from .views import ChatListAPIView, ChatDetailAPIView

app_name = "chat"

urlpatterns = [
    path("<int:pk>/", ChatDetailAPIView.as_view(), name="chat_detail"),
    path("", ChatListAPIView.as_view(), name="home")
]
