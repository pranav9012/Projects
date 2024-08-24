from .models import Pages
from users.models import Users
from django.http import HttpResponse
from django.http import JsonResponse
import json
# Create your views here.

def firstNote(user):
    print(user)
    firstNote = Pages(user=user, title="First Page", content="This is the beginning of your Pages")
    firstNote.save()

def getNotes(request, user_id):
    if request.method == 'GET':
        try:
            user = Users.objects.get(pk=user_id)
            notes = Pages.objects.filter(user=user).order_by('-created_at').values('title', 'content')
            return JsonResponse({"pages" : list(notes)}, status=200)
        except:
            notes = [{"title" : "Error", "content" : "Failed to retrive data"}]
            return JsonResponse({"pages" : notes}, status=200)
        
def addNotes(request, user_id):
    if request.method == 'POST':
        try:
            user = Users.objects.get(pk=user_id)
            data = json.loads(request.body)
            title = data.get('title')
            content = data.get('content')
            note = Pages(user=user, title=title, content=content)
            note.save()
            return JsonResponse({"message" : "Note added successfully"}, status=201)
        except:
            return JsonResponse({"message" : "Internal Server Error"}, status=500)

def deleteNotes(request, user_id, note_id):
    if request.method == 'DELETE':
        try:
            user = Users.objects.get(pk=user_id)
            note = Pages.objects.filter(user=user).order_by('created_at')[note_id : note_id + 1]
            print(note)
            note[0].delete()
            return JsonResponse({"message" : "Note deleted successfully"}, status=200)
        except:
            return JsonResponse({"message" : "Internal Server Error"}, status=500)

def updateTitle(request, user_id, note_id):
    if request.method == 'PATCH':
        try:
            user = Users.objects.get(pk=user_id)
            data = json.loads(request.body)
            title = data.get('title')
            print(title)
            note = Pages.objects.filter(user=user).order_by('created_at')[note_id : note_id + 1]
            note = note[0]
            print(note)
            note.title = title
            note.save()
            return JsonResponse({"message" : "Title updated successfully"}, status=200)
        except:
            return JsonResponse({"message" : "Internal Server Error"}, status=500)
        
def updateContent(request, user_id, note_id):
    if request.method == 'PATCH':
        try:
            user = Users.objects.get(pk=user_id)
            print(user)
            print(note_id)
            data = json.loads(request.body)
            content = data.get('content')
            print(content)
            note = Pages.objects.filter(user=user).order_by('created_at')[note_id : note_id + 1]
            note = note[0]
            print(note)
            note.content = content
            note.save()
            return JsonResponse({"message" : "Content updated successfully"}, status=200)
        except:
            return JsonResponse({"message" : "Internal Server Error"}, status=500)
