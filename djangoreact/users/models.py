from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin

# User Manager 
class UserManager(BaseUserManager):

    def create_user(self, nickname, email, password=None, **kwargs):
        """Create and return a `User` with an email, phone number, username and password."""
        if nickname is None:
            raise TypeError('Users must have a username.')
        if email is None:
            raise TypeError('Users must have an email.')

        user = self.model(username=nickname, email=self.normalize_email(email))
        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, nickname, email, password):
        """
        Create and return a `User` with superuser (admin) permissions.
        """
        if password is None:
            raise TypeError('Superusers must have a password.')
        if email is None:
            raise TypeError('Superusers must have an email.')
        if nickname is None:
            raise TypeError('Superusers must have an username.')

        user = self.create_user(nickname, email, password)
        user.is_superuser = True
        user.is_staff = True
        user.save(using=self._db)

        return user

# Repository Django model
class Repository(models.Model):
    title = models.CharField("Title", max_length=50)
    about = models.CharField("About", max_length=300)
    stars = models.IntegerField()
    watching = models.IntegerField()
    forks = models.IntegerField()

# User Django model
class User(AbstractBaseUser):
    nickname = models.CharField("Nickname", max_length=20)
    password = models.CharField("Password", max_length=30) 
    name = models.CharField("First and Last name", max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    repositories = models.ManyToManyField(Repository)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    objects = UserManager()
    def __str__(self):
        return f"{self.nickname}"

