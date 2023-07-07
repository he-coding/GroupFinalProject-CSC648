from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Items(models.Model):
    name = models.CharField(max_length=50)
    type = models.CharField(max_length=50)
    list = models.CharField(max_length=50)
    exp_date = models.CharField(max_length=200)
