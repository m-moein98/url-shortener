from django.shortcuts import render
from .serializers import ShitSerializer
from rest_framework import generics
from .models import shit
# Create your views here.

class ShitCreator(generics.ListCreateAPIView):
    queryset = shit.objects.all()
    serializer_class = ShitSerializer
    def post(self, request, *args, **kwargs):
        return super().post(request, *args, **kwargs)
    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)