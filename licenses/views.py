from datetime import datetime, timedelta
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.exceptions import ValidationError
from .models import Licenses
from .serializer import LicensesSerializer

class LicensesView(viewsets.ModelViewSet):
    serializer_class = LicensesSerializer
    queryset = Licenses.objects.all()

    def partial_update(self, request, *args, **kwargs):
        instance = self.get_object()
        update_to = request.data.get('update_to')
        if not update_to:
            raise ValidationError('"update_to" field is requiered.')
        if len(request.data) > 1:
            raise ValidationError('Only "update_to" its allow.')
        instance.expiration_date = datetime.now() + timedelta(days=30 * int(update_to))
        instance.save()
        serializer = self.get_serializer(instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)