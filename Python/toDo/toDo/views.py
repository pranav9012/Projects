from django.http import HttpResponse
from django.shortcuts import render
from todos.models import Task

def home(request):
    pending_tasks = Task.objects.filter(isCompleted=False).order_by('-updated_at')
    completed_tasks = Task.objects.filter(isCompleted=True).order_by('-updated_at')
    context = {
        'pending_tasks' : pending_tasks,
        'completed_tasks' : completed_tasks
    }
    return render(request, 'home.html', context)