from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse

def menuitems(request, dish):
    items = {
        'Pasta': "A new recipe made of noodles and stuff",
        'falafel': "Falafel are deep fried patties or balls made from fried patties",
        'cheesecake': "Cheesecake is a type of dessert made with cream and cheese"
    }

    description = items[dish]

    return HttpResponse(f'<h2> {dish} </h2>' + description)