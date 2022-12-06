from django.db import models
from auth_app.models import User

class Post(models.Model):
    title = models.CharField(max_length=100, null=False, blank=False)
    description = models.CharField(max_length=500, blank=True, null=True)
    image = models.ImageField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    votes = models.IntegerField(blank=False, null=False, default=0)