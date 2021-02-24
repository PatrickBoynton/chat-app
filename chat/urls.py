from django.urls import path
from .views import ChatListAPIView, \
    ChatDetailAPIView, \
    ChatDeleteAPIView, \
    ChatUpdateAPIView

app_name = "chat"

urlpatterns = [
    path("<int:pk>/", ChatDetailAPIView.as_view(), name="chat_detail"),
    path("<int:pk>/delete/", ChatDeleteAPIView.as_view(), name="chat_detail"),
    path("<int:pk>/update/", ChatUpdateAPIView.as_view(), name="chat_detail"),
    path("", ChatListAPIView.as_view(), name="home")
]
