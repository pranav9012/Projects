from django.urls import path
from . import views

urlpatterns = [
    path('<int:id>/', views.employee_details_by_id, name='employee_detail'),
    path('all/', views.employee_details_all, name='employee_list'),
    path('addEmployee', views.addEmployee, name='addEmployee'),
    path('editDetails/<int:id>', views.edit_employee_details, name='editDetails'),
    path('deleteEmployee/<int:id>', views.deleteEmployee, name='deleteEmployee'),
    path('', views.employee_details_all, name='employee_list'),

]