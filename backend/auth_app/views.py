from rest_framework.generics import CreateAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from auth_app.models import User
from auth_app.serializers import LoginSerializer, UserSerializer
from django.contrib.auth import login


class LoginView(APIView):
    queryset = User.objects.all()
    permission_classes = []
    authentication_classes = ()

    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        login(request, user)
        return Response("Success", status=200)


class RegistrationView(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = []
