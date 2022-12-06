from django.urls import path

from . import views

urlpatterns = [
    path('login/', views.ObtainToken.as_view(), name='index'),
    path('register/', views.RegistrationView.as_view(), name='register')
]