from django.shortcuts import render, redirect
from employees.models import Employees
from django.http import Http404, HttpResponse
from django.shortcuts import get_object_or_404

# Create your views here.
def employee_details_by_id(request, id: int):
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

def edit_employee_details(request, id: int):
    employee_to_edit = get_object_or_404(Employees, id=id)
    if request.method == 'POST':
        newData = request.POST
        employee_to_edit.first_name = newData['first_name']
        employee_to_edit.last_name = newData['last_name']
        employee_to_edit.email = newData['email']
        employee_to_edit.phone_number = newData['phone_number']
        employee_to_edit.designation = newData['designation']
        employee_to_edit.photo = request.FILES['photo']
        employee_to_edit.save()
        return redirect('employee_detail', id=employee_to_edit.id)
    else:
        context = {
            'employee_to_edit' : employee_to_edit
        }
        return render(request, 'edit_emp_data.html', context)
    
def deleteEmployee(request, id: int):
    employee_to_delete = get_object_or_404(Employees, id=id)
    employee_to_delete.delete();
    return redirect('employee_list')

def addEmployee(request):
    if request.method == 'POST':
        new_employee = request.POST
        Employees.objects.create(first_name=new_employee['first_name'],
                                    last_name=new_employee['last_name'],
                                    email=new_employee['email'],
                                    phone_number=new_employee['phone_number'],
                                    designation=new_employee['designation'],
                                    photo= request.FILES['photo'])
        return redirect('employee_list')
    else:
        return render(request, 'add_employee.html')
