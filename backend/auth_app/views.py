from rest_framework.generics import CreateAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from auth_app.models import User
from auth_app.serializers import LoginSerializer, UserSerializer
from django.contrib.auth import login
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken


class ObtainToken(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        response = super(ObtainToken, self).post(request, *args, **kwargs)
        token = Token.objects.get(key=response.data['token'])
        return Response({'token': token.key, 'user_id': token.user_id})


class RegistrationView(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = []
