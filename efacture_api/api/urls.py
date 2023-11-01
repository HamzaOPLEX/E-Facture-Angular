from django.urls import path
from .views import *

urlpatterns = [
    # Authentication
    path('auth/register', RegisterView.as_view()),
    path('auth/login', LoginView.as_view()),
    path('auth/user', UserView.as_view()),
    path('auth/logout', LogoutView.as_view()),

    # Document CRUD
    path('documents/<str:type>', DocumentListAPIView.as_view(), name='document-list'),
    path('documents/create/', DocumentCreateAPIView.as_view(), name='document-create'),
    path('documents/<int:pk>/', DocumentDetailAPIView.as_view(), name='document-detail'),
    path('documents/<int:pk>/update/', DocumentEditAPIView.as_view(), name='document-edit'),
    path('documents/<int:pk>/delete/', DocumentDeleteAPIView.as_view(), name='document-delete'),
]