# Generated by Django 3.2.7 on 2021-10-17 07:15

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('order', '0002_rename_translation_id_order_transaction_id'),
    ]

    operations = [
        migrations.RenameField(
            model_name='order',
            old_name='total_ammount',
            new_name='total_amount',
        ),
    ]
