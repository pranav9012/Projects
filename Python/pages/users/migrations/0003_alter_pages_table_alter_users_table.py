# Generated by Django 5.0.7 on 2024-08-24 12:20

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_alter_pages_options_alter_users_options'),
    ]

    operations = [
        migrations.AlterModelTable(
            name='pages',
            table='pages',
        ),
        migrations.AlterModelTable(
            name='users',
            table='users',
        ),
    ]
