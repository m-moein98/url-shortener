from django.urls import path
from . import views

urlpatterns = [
    path('api/shit/', views.ShitCreator.as_view())
]