from rest_framework import serializers
from .models import shit

class ShitSerializer(serializers.ModelSerializer):
    """
    thats for api shortener api
    """
    class Meta:
        model = shit
        fields = '__all__'