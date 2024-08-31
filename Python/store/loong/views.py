from .models import Loong_items
from django.http import JsonResponse
import json

def fetchProducts(request):
    if request.method == 'GET':
        try:
            products = Loong_items.objects.all()
            data = []
            for product in products:
                data.append({
                    'id': product.id,
                    'title': product.title,
                    'image': product.image,
                    'color_name': product.color_name,
                    'color': product.color,
                    'cost': product.cost,
                    'category': product.category,
                    'store': product.store,
                    'description': product.description
                })
            return JsonResponse({"data": data}, status=200)
        except:
            return JsonResponse({"error": "An error occurred while fetching products."}, status=500)
        
def getProductByTitleAndName(request, store, title):
    if request.method == 'GET':
        try:
            product = Loong_items.objects.filter(store=store, title=title).first()
            if product:
                data = []
                data.append({
                    'id': product.id,
                    'title': product.title,
                    'image': product.image,
                    'color_name': product.color_name,
                    'color': product.color,
                    'cost': product.cost,
                    'category': product.category,
                    'store': product.store,
                    'description': product.description
                })
                return JsonResponse({ "data" : data[0]}, status=200)
            else:
                return JsonResponse({"error": "Product not found."}, status=404)
        except:
            return JsonResponse({"error": "An error occurred while fetching product."}, status=500)