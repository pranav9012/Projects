from django.urls import path

from . import views

urlpatterns = [
    path('notes/<int:user_id>', views.getNotes, name='getNotes'),
    path('addnote/<int:user_id>', views.addNotes, name='addNotes'),
    path('deletenote/<int:user_id>/<int:note_id>', views.deleteNotes, name='deleteNotes'),
    path('updatetitle/<int:user_id>/<int:note_id>', views.updateTitle, name='updateTitle'),
    path('updatecontent/<int:user_id>/<int:note_id>', views.updateContent, name='updateContent'),
]