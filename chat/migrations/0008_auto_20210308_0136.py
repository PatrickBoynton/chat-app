# Generated by Django 3.1.7 on 2021-03-08 01:36

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('chat', '0007_remove_chat_title'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='room',
            name='chat',
        ),
        migrations.AddField(
            model_name='chat',
            name='room',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='chat.room'),
        ),
    ]