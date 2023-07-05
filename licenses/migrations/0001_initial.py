# Generated by Django 4.2.3 on 2023-07-04 04:16

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Licenses',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('company_name', models.CharField(max_length=100)),
                ('full_name', models.CharField(max_length=100)),
                ('job_title', models.CharField(max_length=25)),
                ('email', models.EmailField(max_length=50, unique=True)),
                ('software_username', models.CharField(max_length=20, unique=True)),
                ('version', models.IntegerField(max_length=6)),
            ],
        ),
    ]
