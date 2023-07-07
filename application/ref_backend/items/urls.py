from django.conf.urls import url

from . import views


urlpatterns = [
    url(r'^getAllItems$', views.items_list),
    url(r'^getAllItems/(?P<pk>[0-9]+)$', views.items_list),
    url(r'^register$', views.register),
]
