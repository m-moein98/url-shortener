from django.shortcuts import render
from .serializers import ShitSerializer
from rest_framework import generics
from .models import shit
# Create your views here.

class ShitCreator(generics.ListCreateAPIView):
    queryset = shit.objects.all()
    serializer_class = ShitSerializer