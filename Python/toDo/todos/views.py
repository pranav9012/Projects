from django.shortcuts import render, redirect, get_object_or_404
from django.http import HttpResponse
from .models import Task

def addTask(request):
    newTask = request.POST['task']
    Task.objects.create(task=newTask)
    return redirect('homepage')

def mark_as_done(request, id:int):
    task = Task.objects.get(id=id)
    task.isCompleted = True
    task.save()
    return redirect('homepage')

def mark_as_undone(request, id:int):
    task = Task.objects.get(id=id)
    task.isCompleted = False
    task.save()
    return redirect('homepage')

def deleteTask(request, id:int):
    task = Task.objects.get(id=id)
    task.delete()
    return redirect('homepage')

def editTask(request, id:int):
    newTask = get_object_or_404(Task, id=id)
    if request.method == 'POST':
        task = request.POST['task']
        newTask.task = task
        newTask.save()
        return redirect('homepage')
    else:
        context = {
            'get_task' : newTask
        }
        return render(request, 'editTask.html', context)