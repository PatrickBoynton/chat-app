# Generated by Django 3.1.7 on 2021-03-07 04:02

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('chat', '0006_auto_20210307_0215'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='chat',
            name='title',
        ),
    ]
