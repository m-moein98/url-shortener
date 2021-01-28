from django.shortcuts import render
from .serializers import UrlSerializer
from rest_framework import generics
from .models import Url
# Create your views here.

class UrlCreator(generics.ListCreateAPIView):
    queryset = Url.objects.all()
    serializer_class = UrlSerializer
    def post(self, request, *args, **kwargs):
        return super().post(request, *args, **kwargs)