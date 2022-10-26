from auth_app.models import User
from rest_framework import serializers

class SimpleUserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['id', 'username', 'social_security_number']


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['id', 'username', 'social_security_number', 'first_name'
                  'last_name', 'password']