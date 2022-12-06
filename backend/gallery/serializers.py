from rest_framework import serializers
from .models import Post
from rest_framework.permissions import IsAuthenticated

class PostsListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Post
        fields = ['image', 'title', 'votes', 'id']


class PostSerialzier(serializers.ModelSerializer):


    class Meta:
        model = Post
        fields = '__all__'
