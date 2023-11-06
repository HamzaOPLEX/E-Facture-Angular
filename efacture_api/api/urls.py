from django.urls import path
from .views import *
from .handlers_views.dashboard import *
from .handlers_views.clients import *
from .handlers_views.documents import *
from .handlers_views.app_settings import *

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

    # Document CRUD
    path('clients/', ClientsListAPIView.as_view(), name='clients-list'),
    path('clients/create/', ClientsCreateAPIView.as_view(), name='client-create'),
    path('clients/<int:pk>/', ClientsDetailAPIView.as_view(), name='client-detail'),
    path('clients/<int:pk>/update/', ClientsEditAPIView.as_view(), name='client-edit'),
    path('clients/<int:pk>/delete/', ClientsDeleteAPIView.as_view(), name='client-delete'),

]