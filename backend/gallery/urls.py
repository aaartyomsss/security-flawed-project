from django.urls import path

from . import views

urlpatterns = [
    path('', views.PostsListView.as_view(), name='list'),
    path('create/', views.PostCreateView.as_view(), name='create'),
    path('<int:pk>/', views.PostsView.as_view(), name='details')
]