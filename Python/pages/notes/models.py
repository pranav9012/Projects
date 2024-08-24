from django.db import models

# Create your models here.
class Pages(models.Model):
    page_id = models.AutoField(primary_key=True)
    user = models.ForeignKey('users.Users', models.DO_NOTHING, related_name='pages')
    title = models.TextField(blank=True, null=True)
    content = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add= True)
    edited_at = models.DateTimeField(auto_now= True)

    class Meta:
        managed = False
        db_table = 'pages'
