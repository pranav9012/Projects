from django.shortcuts import render
from employees.models import Employees
from django.http import Http404, HttpResponse
from django.shortcuts import get_object_or_404

# Create your views here.
def employee_details_by_id(request, id : int):
    # try:
    #     employee = Employees.objects.get(pk=primary_key)
    # except:
    #     raise Http404
    employee_id = get_object_or_404(Employees, pk=id)
    context = {
        'employee_details' : employee_id
    }
    return render(request, 'employee_detail_by_id.html', context)

def employee_details_all(request):
    employees_data = Employees.objects.all()
    context = {
        'employee_card' : employees_data
    }
    return render(request, 'employee_details_card.html', context)
