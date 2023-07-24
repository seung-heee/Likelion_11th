from django.shortcuts import redirect, render
from django.contrib.auth import login, logout, authenticate
from .forms import SignUpForm, SignInForm
from django.contrib import messages

# 회원가입
def signup(request):
    if request.method == 'GET': # 조회, 단순 접속
        form = SignUpForm()
    elif request.method == 'POST': # 데이터 전송
        form = SignUpForm(request.POST) # 타당한지 검사
        if form.is_valid():
            form.save()
            return redirect('signin')
        
    return render(request, 'accounts/signup.html', {'form': form})

# 로그인
def signin(request):
    if request.method == "GET": # 조회
        form = SignInForm()
    elif request.method == "POST": # 데이터 전송
        form = SignInForm(request, data=request.POST) # 타당한지 검사 + 성공/실패 여부
        if form.is_valid():
            email = form.cleaned_data.get('username') 
            password = form.cleaned_data.get('password')
            user = authenticate(request, email=email, password=password) # DB 조회하는 거, 있는 유저인가?
            if user is not None: # 유저가 존재하면
                login(request, user)
                return redirect('todo_list')
            else:
                messages.error(request) # 유저 없어요 메세지
    return render(request, 'accounts/signin.html', {'form' : form})

def signout(request):
    logout(request) # 로그아웃하라~
    return redirect('signin') # 로그인 페이지로