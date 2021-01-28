from django.urls import path
from . import views

urlpatterns = [
    path('api/url_shortener/', views.UrlCreator.as_view())
]