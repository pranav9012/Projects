from django.urls import path
from . import views

urlpatterns = [
    path('<int:id>/', views.employee_details_by_id, name='employee_detail'),
    path('all/', views.employee_details_all, name='employee_list'),
]