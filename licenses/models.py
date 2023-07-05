from datetime import datetime, timedelta
from django.db import models

class Licenses(models.Model): 
    company_name = models.CharField(max_length=100)
    full_name = models.CharField(max_length=100)
    job_title = models.CharField(max_length=25)
    email = models.EmailField(max_length=50, unique=True)
    software_username = models.CharField(max_length=20, unique=True)
    expiration_date = models.DateTimeField(default=datetime.now() + timedelta(days=30))
    version = models.CharField(max_length=6)

    def __str__(self):
        text = r'{0} {1}'
        return text.format(self.company_name, self.full_name)
