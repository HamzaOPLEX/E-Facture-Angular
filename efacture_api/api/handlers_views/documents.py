from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import AuthenticationFailed
from ..serializers import UserSerializer
from ..models import User
from ..models import Document
from ..serializers import DocumentSerializer
from rest_framework import status
from time import sleep

class DocumentListAPIView(APIView):
    # Get a list of all documents
    def get(self, request,type, format=None):
        sleep(1) # just to test loading in UI
        documents = Document.objects.filter(document_type=type)
        serializer = DocumentSerializer(documents, many=True)
        return Response(serializer.data)

class DocumentCreateAPIView(APIView):
    # Create a new document
    def post(self, request, format=None):
        # request.data['document_client'] = int(request.data['document_client'])
        serializer = DocumentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class DocumentEditAPIView(APIView):
    # Update an existing document
    def put(self, request, pk, format=None):
        document = self.get_object(pk)
        serializer = DocumentSerializer(document, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class DocumentDeleteAPIView(APIView):
    # Delete a document
    def delete(self, request, pk, format=None):
        document = Document.objects.all().filter(id=pk)
        document.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class DocumentDetailAPIView(APIView):
    # Helper method to get a specific document by its primary key (pk)
    def get_object(self, pk):
        try:
            return Document.objects.get(pk=pk)
        except Document.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)