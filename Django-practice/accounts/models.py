from django.db import models
from django.contrib.auth.models import (
    AbstractBaseUser, BaseUserManager, AbstractUser
)

class UserManager(BaseUserManager):
    def create_user(self, email, password, staff=False, admin=False, active=True):
        if not email:
            return ValueError('이메일을 입력해주세요!')
        if not password:
            return ValueError('비밀번호를 입력해주세요!')
        
        user = self.model(email=self.normalize_email(email))
        user.set_password(password) # pw 난수화
        user.staff = staff
        user.admin = admin
        user.active = active
        user.save(using=self._db)
        
        return user
    
    def create_superuser(self, email, password):
        user = self.create_user(
            email,
            password,
            staff = True,
            admin = True
        )
        
        return user
        
class User(AbstractBaseUser):
    email = models.EmailField(max_length=255, unique = True)
    nickname = models.CharField(max_length=255, blank=True, null=True)
    active = models.BooleanField(default=True)
    staff = models.BooleanField(default=False)
    admin = models.BooleanField(default=False)
    
    USERNAME_FIELD = 'email'
    REQUITED_RIELDS = []
    
    objects = UserManager() # db에 직접적으로 질의를 날릴 수 있다.?
    
    def __str__(self):
        return self.email
    
    # 가독성 좋게 하기 위해서 사용
    @property
    def is_staff(self):
        return self.staff
    
    @property
    def is_superuser(self):
        return self.admin
    
    def has_perm(self, perm, obj=None):
        return self.admin
    
    def has_module_perms(self, app_label):
        return self.admin