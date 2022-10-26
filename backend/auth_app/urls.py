from django.urls import path

from . import views

urlpatterns = [
    path('users/', views.LoginView.as_view(), name='index'),
    path('resgiter/', views.RegistrationView.as_view(), name='register')
]