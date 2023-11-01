from rest_framework import serializers
from .models import User, Document


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance


class DocumentSerializer(serializers.ModelSerializer):
    document_client = serializers.CharField(source='document_client.name', read_only=True)
    class Meta:
        model = Document
        fields = '__all__'
    def create(self, validated_data):
        return Document.objects.create(**validated_data)