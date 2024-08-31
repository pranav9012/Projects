from django.db import models
from django.contrib.postgres.fields import ArrayField

class Loong_items(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=255)
    image = ArrayField(base_field=models.TextField())
    color_name  = ArrayField(base_field=models.TextField())
    color  = ArrayField(base_field=models.TextField())
    cost = models.FloatField();
    category = models.CharField(max_length=255)
    store = models.CharField(max_length=255)
    description = models.TextField()

    def __str__(self):
        return self.title
    class Meta:
        db_table = 'loong_items'