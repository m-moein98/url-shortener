from rest_framework import serializers
from .models import Url

class UrlSerializer(serializers.ModelSerializer):
    """
    thats for api shortener api
    """
    class Meta:
        model = Url
        fields = '__all__'