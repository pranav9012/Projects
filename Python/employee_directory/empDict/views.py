from django.http import HttpResponse
from django.shortcuts import render
from employees.models import Employees

def root(request):
    employee_data = Employees.objects.all()
    context = {'employees': employee_data}
    return render(request, 'home.html', context)