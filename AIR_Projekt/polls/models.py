# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey has `on_delete` set to the desired behavior.
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models

class pwr_User(models.Model):
	class Meta:
		managed = False
		db_table = 'USER'
		
	user_id = models.IntegerField(primary_key=True)
	user_name = models.CharField(max_length=45)
	user_password = models.CharField(max_length=15)
	
class pwr_Note(models.Model):
	class Meta:
		managed = False
		db_table = 'NOTES'
		
	title = models.CharField(max_length=45, primary_key=True)
	user_id = models.ForeignKey('pwr_User', models.DO_NOTHING) 
	event_id = models.ForeignKey('pwr_Task', models.DO_NOTHING)# Doprecyzowac: Co to i czy to klucz obcy
	cret_dt_tm = models.DateTimeField(null=True)
	note_txt = models.CharField(max_length=999999999) # Doprecyzowac: max długosc
	priority = models.IntegerField()
	
class pwr_Task(models.Model):
	class Meta:
		managed = False
		db_table = 'Task'
	
	task_id = models.Integer(primary_key=True)
	query = models.CharField(max_length=21840)
	occurrence_num = models.Integer()
	status = models.CharField(max_length=20)
	start_time = models.DateTimeField(null=True)
	end_time = models.DateTimeField(null=True)
	user_id = models.ForeignKey('pwr_User', models.DO_NOTHING)# Doprecyzowac czy to klucz obcy
	note_title = models.ForeignKey('pwr_Note', models.DO_NOTHING)# Doprecyzowac: czy to klucz obcy
	
class pwr_TaskHistory(models.Model):
	class Meta:
		managed = False
		db_table = 'Task_hist'
		
	task_id = models.IntegerField()
	query_time = models.CharField(max_length=655...)
	
	

class Event(models.Model):
    event_id = models.IntegerField(primary_key=True)
    user = models.ForeignKey('User', models.DO_NOTHING)
    title = models.CharField(max_length=20)
    description = models.CharField(max_length=255, blank=True, null=True)
    start_dt_tm = models.DateTimeField(blank=True, null=True)
    end_dt_tm = models.DateTimeField(blank=True, null=True)
    note = models.TextField(blank=True, null=True)
    is_done = models.IntegerField(blank=True, null=True)
    priority = models.CharField(max_length=20, blank=True, null=True)
    cyklicity = models.CharField(max_length=20, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'EVENT'


class Notes(models.Model):
    user = models.ForeignKey('User', models.DO_NOTHING)
    cret_dt_tm = models.DateTimeField(primary_key=True)
    mod_dt_tm = models.DateTimeField(blank=True, null=True)
    title = models.CharField(max_length=45)
    note_txt = models.TextField(blank=True, null=True)
    priority = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'NOTES'
        unique_together = (('cret_dt_tm', 'title', 'user'),)


class Session(models.Model):
    user = models.ForeignKey('User', models.DO_NOTHING, primary_key=True)
    login_dt_tm = models.DateTimeField()
    logout_dt_tm = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'SESSION'
        unique_together = (('user', 'login_dt_tm'),)


class User(models.Model):
    user_id = models.IntegerField(primary_key=True)
    email = models.CharField(max_length=45, blank=True, null=True)
    user_name = models.CharField(max_length=45)
    pass_field = models.CharField(db_column='pass', max_length=20, blank=True, null=True)  # Field renamed because it was a Python reserved word.
    reg_dt = models.DateField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'USER'


class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=80)

    class Meta:
        managed = False
        db_table = 'auth_group'


class AuthGroupPermissions(models.Model):
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group', 'permission'),)


class AuthPermission(models.Model):
    name = models.CharField(max_length=255)
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
    codename = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type', 'codename'),)


class AuthUser(models.Model):
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.IntegerField()
    username = models.CharField(unique=True, max_length=150)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=150)
    email = models.CharField(max_length=254)
    is_staff = models.IntegerField()
    is_active = models.IntegerField()
    date_joined = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'auth_user'


class AuthUserGroups(models.Model):
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_groups'
        unique_together = (('user', 'group'),)


class AuthUserUserPermissions(models.Model):
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    permission = models.ForeignKey(AuthPermission, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_user_permissions'
        unique_together = (('user', 'permission'),)


class DjangoAdminLog(models.Model):
    action_time = models.DateTimeField()
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.PositiveSmallIntegerField()
    change_message = models.TextField()
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'


class Dupa(models.Model):
    id_dupa = models.AutoField(primary_key=True)
    login = models.CharField(max_length=45)
    password = models.CharField(max_length=45)

    class Meta:
        managed = False
        db_table = 'dupa'
