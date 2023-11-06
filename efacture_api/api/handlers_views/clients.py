from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import AuthenticationFailed
from ..serializers import UserSerializer
from ..models import User
from ..models import Client
from ..serializers import APP_ClientsSerializer
from rest_framework import status
from time import sleep

class ClientsListAPIView(APIView):
    # Get a list of all clients
    def get(self, request, format=None):
        sleep(1) # just to test loading in UI
        clients = Client.objects.all()
        serializer = APP_ClientsSerializer(clients, many=True)
        return Response(serializer.data)

class ClientsCreateAPIView(APIView):
    # Create a new client
    def post(self, request, format=None):
        sleep(2)
        serializer = APP_ClientsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            selectedClient = serializer.data['id']
            clients = Client.objects.all()
            serializer = APP_ClientsSerializer(clients, many=True)
            return Response([serializer.data,selectedClient], status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class ClientsEditAPIView(APIView):
    # Update an existing client
    def put(self, request, pk, format=None):
        client = self.get_object(pk)
        serializer = APP_ClientsSerializer(client, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ClientsDeleteAPIView(APIView):
    # Delete a client
    def delete(self, request, pk, format=None):
        client = self.get_object(pk)
        client.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class ClientsDetailAPIView(APIView):
    # Helper method to get a specific client by its primary key (pk)
    def get_object(self, pk):
        try:
            return Client.objects.get(pk=pk)
        except Client.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)