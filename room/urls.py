from django.urls import path
from .views import RoomListAPIView


app_name = 'room'

urlpatterns = [
    path("", RoomListAPIView.as_view(), name="home")
]