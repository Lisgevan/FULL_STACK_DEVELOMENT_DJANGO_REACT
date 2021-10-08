from django.db import migrations
from api.user.models import CustomUser

class Migration(migrations.Migration):
  def seed_data(apps, schema_editor):
    user = CustomUser(
      name = 'admin',
      email = 'admin@admin.dev',
      is_staff = True,
      is_superuser = True,
      phone = "9876554321",
      gender = 'Male' 
    )
    user.set_password('qwerty')
    user.save()

  dependencies = [  ]

  operations = [
    migrations.RunPython(seed_data),
  ]