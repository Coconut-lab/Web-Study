from django.urls import path
from . import views

urlpatterns = [
    path('login/', views.login, name='login'),
    path('register/', views.register, name='register'),
    path('users/', views.user_list, name='user_list'),  # 개발용
]
