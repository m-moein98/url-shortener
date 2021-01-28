from django.db import models

# Create your models here.
class Url(models.Model):
    my_text = models.CharField(max_length=100)