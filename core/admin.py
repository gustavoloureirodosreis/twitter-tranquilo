from django.contrib import admin

from core.models import ActivityLog, Todo, Tweet


class ActivityLogAdmin(admin.ModelAdmin):
    list_display = ('type', 'logged_user', 'created_at')

class TodoAdmin(admin.ModelAdmin):
    list_display = ('description', 'done')

class TweetAdmin(admin.ModelAdmin):
    list_display = ('user', 'text', 'created_at')

admin.site.register(ActivityLog, ActivityLogAdmin)
admin.site.register(Todo, TodoAdmin)
admin.site.register(Tweet, TweetAdmin)