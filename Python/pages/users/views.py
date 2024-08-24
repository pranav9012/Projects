import re
from django.http import HttpResponse
from django.http import JsonResponse
from django.contrib.auth.hashers import make_password, check_password
import json
from .models import Users
from notes.views import firstNote

def validate_email(email: str):
     regex = r'^[\w\.-]+@[\w\.-]+\.\w{2,4}$'
     return re.match(regex, email) is not None

def login(request):
    if request.method == 'POST':
        try:
            email = request.POST.get('email')
            password = request.POST.get('password')
            print(email, password)
            if not email or not password:
                return JsonResponse({"message" : "Missing email or password.", "user_id" : -1}, status = 400)
            user = Users.objects.filter(email = email)
            if user.exists():
                user = user[0]
                if check_password(password, user.password):
                    return JsonResponse({"message" : "Login successful.", "user_id" : user.user_id}, status = 200)
                else:
                    return JsonResponse({"message" : "Invalid email or password.", "user_id" : -1}, status = 401)
            else:
                return JsonResponse({"message" : "Bad Gateway", "user_id" : -1}, status = 502)
        except:
            return JsonResponse({"message" : "Internal Server Error", "user_id" : -1}, status = 500)
    

def register(request):
    if request.method == 'POST':
        try:
            email =  request.POST.get('email')
            password =  request.POST.get('password')
            print(email, password)
            print(validate_email(email))
            if not email or not password:
                return JsonResponse({"message" : "Missing email or password.", "user_id" : -1}, status = 400)
            if validate_email(email):
                existing_user = Users.objects.filter(email = email)
                # print(existing_user[0])
                if existing_user.exists():
                    return JsonResponse({"message" : "Email already exists.", "user_id" : -1}, status = 400)
                else:
                    hashed_password = make_password(password)
                    new_user = Users(email = email, password = hashed_password)
                    new_user.save()
                    user = Users.objects.filter(email = email)
                    print(user[0])
                    firstNote(user[0])
                    return JsonResponse({"message" : "User registered successfully.", "user_id" : user[0].user_id}, status = 201)
            else:
                return JsonResponse({'message': 'Bad Gateway', "user_id" : -1}, status=502)
        except:
            return JsonResponse({"message" : "Internal Server Error", "user_id" : -1}, status = 500)
    
    return HttpResponse("ok")

