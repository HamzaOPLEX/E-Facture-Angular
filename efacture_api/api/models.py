from django.db import models
from django.contrib.auth.models import AbstractUser


# Create your models here.
class User(AbstractUser):
    email = models.CharField(max_length=255, unique=True)
    password = models.CharField(max_length=255)

class APP_Clients(models.Model):
    name = models.TextField()
    ICE = models.CharField(max_length=255)
    city = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class Document(models.Model):
    DOCUMENT_TYPES = [
        ('INVOICE', 'Invoice'),
        ('DEVIS', 'Devis'),
        ('BL', 'BL'),
    ]

    TTC_OR_HT_CHOICES = [
        ('TTC', 'TTC'),
        ('HT', 'HT'),
    ]

    DOCUMENT_STATUS_CHOICES = [
        ('UNPAID', 'Unpaid'),
        ('PAID', 'Paid'),
    ]
    DOCUMENT_PAIMENT_METHOD_CHOICES = [
        ('Cash', 'Cash'),
        ('Check', 'Check'),
        ('Letter', 'Letter'),
        ('Bank Transfer', 'Bank Transfer'),
    ]
    document_number = models.IntegerField(unique=True)
    document_client = models.ForeignKey(APP_Clients, on_delete=models.RESTRICT)
    document_date = models.DateField()
    ttc_or_ht = models.CharField(max_length=3, default='TTC', choices=TTC_OR_HT_CHOICES)
    document_status = models.CharField(max_length=10, default='UNPAID', choices=DOCUMENT_STATUS_CHOICES)
    deposit = models.FloatField(null=True, blank=True)
    document_payment_method = models.CharField(max_length=255,choices=DOCUMENT_PAIMENT_METHOD_CHOICES)  # You may want to add choices here as well
    document_type = models.CharField(max_length=10, default='INVOICE', choices=DOCUMENT_TYPES)
    document_created_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, editable=False)

    def __str__(self):
        return f"{self.get_document_type_display()} - {self.document_number} for {self.document_client}"

    # def clean(self):
    #     if self.isPaid == "Non":
    #         self.Paiment_Mathod = 'aucun'
    #         self.Avance = 0