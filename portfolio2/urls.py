from django.urls import path
from . import views

app_name = 'portfolio2'
urlpatterns = [
    path('', views.index, name='index'),
    path('thanks', views.thanks, name="thanks"),
]