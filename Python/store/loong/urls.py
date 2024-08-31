from django.urls import path
from . import views

urlpatterns = [
    path('all-products', views.fetchProducts, name='fetchProducts'),
    path('<str:store>/<str:title>', views.getProductByTitleAndName, name='getProductByTitleAndName'),
]
