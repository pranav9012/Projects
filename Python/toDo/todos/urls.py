from django.urls import path
from . import views

urlpatterns = [
    path('addTask/', views.addTask, name='addTask'),
    path('mark_as_done/<int:id>', views.mark_as_done, name='mark_as_done'),
    path('mark_as_undone/<int:id>', views.mark_as_undone, name='mark_as_undone'),
    path('deleteTask/<int:id>', views.deleteTask, name='deleteTask'),
    path('editTask/<int:id>', views.editTask, name='editTask'),
]