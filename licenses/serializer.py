from rest_framework import serializers
from .models import Licenses

class LicensesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Licenses
        fields = '__all__'