from django.shortcuts import render, redirect, get_object_or_404
import todo
from todo.models import TodoList
from django.contrib.auth.mixins import LoginRequiredMixin
from django.views.generic import CreateView

# Create your views here.
def todos(request):
    todolist = TodoList.objects.all()
    return render(request, 'todo/todos.html', {'todolist' : todolist})

def index(request):
    todolist = TodoList.objects.all()
    return render(request, 'todo/index.html', {'todolist' : todolist})

class create_todo(LoginRequiredMixin, CreateView):
    model = TodoList
    fields = ['todo', 'description', 'important']
    login_url = '/accounts/signin/'


# def create_todo(request):
#     myTodo = TodoList()
#     if request.method == 'POST':
#         myTodo.todo = request.POST['todo']
#         myTodo.description = request.POST['description']
#         myTodo.important = bool(request.POST.get('important'))
#         myTodo.complete = bool(request.POST.get('complete'))
#         myTodo.save()
#         return redirect('todos')
#     return render(
#         request,
#         'todo/todo_create.html'
# 	)

def update_todo(request, pk):
    curTodo = get_object_or_404(TodoList, pk=pk)
    if request.method == 'POST':
        curTodo.todo = request.POST['todo']
        curTodo.description = request.POST['description']
        curTodo.important = bool(request.POST.get('important'))
        curTodo.complete = bool(request.POST.get('complete'))
        curTodo.save()
        return redirect('todos')
    return render(
		request,
		'todo/todo_update.html',
		{
			'curTodo' : curTodo,
		},
	)
    
def delete_todo(request, pk):
    delTodo = get_object_or_404(TodoList, pk=pk)
    delTodo.delete()
    return redirect('todos')

def success_todo(request, pk):
    sucTodo = get_object_or_404(TodoList, pk=pk)
    sucTodo.complete = not sucTodo.complete
    sucTodo.save()
    return redirect('todos')