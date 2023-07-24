from django.urls import path

from todo.views import todos, index, create_todo, update_todo, delete_todo, success_todo

urlpatterns = [
    path('', todos, ),
    path('index/', index),
    path('create_todo/', create_todo.as_view(),name="todo_list"),
    path('update_todo/<int:pk>/', update_todo, name="update"),
    path('delete_todo/<int:pk>/', delete_todo, name="delete"),
    path('success_todo/<int:pk>/', success_todo, name="success"),
]
