# Generated by Django 3.1.7 on 2021-05-20 21:36

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Items',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('type', models.CharField(max_length=50)),
                ('list', models.CharField(max_length=50)),
                ('exp_date', models.CharField(max_length=200)),
            ],
        ),
    ]
