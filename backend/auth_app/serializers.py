from django.contrib.auth import authenticate
from auth_app.models import User
from rest_framework import serializers


class SimpleUserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['id', 'username', 'social_security_number']


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['id', 'username', 'social_security_number', 'first_name',
                  'last_name', 'password']


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, attrs):
        print("does it work? ? ? ?? ?")
        user = authenticate(username=attrs['username'],
                            password=attrs['password'])

        if not user:
            raise serializers.ValidationError('Incorrect username or password.')
        if not user.is_active:
            raise serializers.ValidationError('User is disabled.')
        return {'user': user}
