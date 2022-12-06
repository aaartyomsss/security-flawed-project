from rest_framework.generics import (ListAPIView, CreateAPIView,
    RetrieveUpdateDestroyAPIView)
from gallery.models import Post
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from .serializers import PostsListSerializer, PostSerialzier

class PostsListView(ListAPIView):
    serializer_class = PostsListSerializer
    queryset = Post.objects.all()
    permission_classes = [IsAuthenticated]


class PostCreateView(CreateAPIView):
    parser_classes = (MultiPartParser, FormParser)
    serializer_class = PostSerialzier
    queryset = Post.objects.all()

    def create(self, request, *args, **kwargs):
        data = request.data
        data['user'] = request.user.pk
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


class PostsView(RetrieveUpdateDestroyAPIView):
    parser_classes = (MultiPartParser, FormParser)
    serializer_class = PostSerialzier
    queryset = Post.objects.all()

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.votes += 1
        instance.save()
        return super().update(request, *args, **kwargs)
