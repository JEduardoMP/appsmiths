from django.urls import path, include
from rest_framework import routers
from rest_framework.documentation import include_docs_urls
from .views import LicensesView

router = routers.DefaultRouter()
router.register(r'licenses', LicensesView, 'licenses')

urlpatterns = [
    path('', include(router.urls)),
    path('docs/', include_docs_urls(title='Licenses API')),
]

