from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics
from .models import Items
from .serializers import ItemsSerializer, RegisterSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User, UserManager
from rest_framework.permissions import AllowAny


@api_view(['GET', 'POST', 'DELETE'])
def items_list(request):
    if(request.method == 'GET'):
        items = Items.objects.all()
        serializer = ItemsSerializer(items, many=True)
        return Response(serializer.data)
    elif(request.method == 'POST'):
        serializer = ItemsSerializer(data=request.data)
        if(serializer.is_valid()):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif(request.method == 'DELETE'):
        serializer = ItemsSerializer(data=request.data)
        Items.objects.all().delete()
        return Response('DeletedSuccess', status=status.HTTP_201_CREATED)


@api_view(['POST'])
@permission_classes([AllowAny])
def register(request):
    serializer = RegisterSerializer(data=request.data)
    if(serializer.is_valid()):
        User.objects.create_user(request.data['username'],
                                request.data['email'], request.data['password'])

    return Response('SignUpSuccess', status=status.HTTP_201_CREATED)
