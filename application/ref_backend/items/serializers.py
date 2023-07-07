
from rest_framework import serializers
from .models import Items
from django.contrib.auth.models import User


class ItemsSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'name',
            'type',
            'list',
            'exp_date'
        )
        model = Items


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'username',
            'email',
            'password'
        )
        model = User
