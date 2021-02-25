# Generated by Django 3.1.7 on 2021-02-25 03:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chat', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='chat',
            name='title',
            field=models.CharField(default='default_title', max_length=100),
        ),
        migrations.AlterField(
            model_name='chat',
            name='name',
            field=models.CharField(default='default_name', max_length=50),
        ),
        migrations.AlterField(
            model_name='chat',
            name='text',
            field=models.CharField(default='default_text', max_length=255),
        ),
    ]
