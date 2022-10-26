from rest_framework.generics import ListAPIView, CreateAPIView
from auth_app.models import User
from auth_app.serializers import SimpleUserSerializer, UserSerializer

class LoginView(ListAPIView):
    queryset = User.objects.all()
    serializer_class = SimpleUserSerializer
    permission_classes = []


class RegistrationView(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = []