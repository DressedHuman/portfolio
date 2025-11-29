from django.contrib import admin
from .models import About, ContactMessage, Technology, Project, ProjectFeature, ProjectTechnology


@admin.register(About)
class AboutAdmin(admin.ModelAdmin):
    list_display = ['name', 'title', 'email', 'is_active', 'updated_at']
    list_filter = ['is_active', 'created_at']
    search_fields = ['name', 'title', 'email']
    readonly_fields = ['created_at', 'updated_at']
    
    fieldsets = (
        ('Basic Information', {
            'fields': ('name', 'title', 'address', 'email', 'phone')
        }),
        ('Biography', {
            'fields': ('bio',)
        }),
        ('Social Media', {
            'fields': ('github_url', 'linkedin_url', 'facebook_url', 'twitter_url'),
            'classes': ('collapse',)
        }),
        ('Profile Image', {
            'fields': ('profile_image',)
        }),
        ('Status', {
            'fields': ('is_active',)
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )


@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'priority', 'is_read', 'created_at']
    list_filter = ['priority', 'is_read', 'created_at']
    search_fields = ['name', 'email', 'phone', 'description']
    readonly_fields = ['name', 'email', 'phone', 'address', 'priority', 'description', 'created_at']
    list_editable = ['is_read']
    date_hierarchy = 'created_at'
    
    fieldsets = (
        ('Contact Information', {
            'fields': ('name', 'email', 'phone', 'address')
        }),
        ('Message Details', {
            'fields': ('priority', 'description')
        }),
        ('Admin', {
            'fields': ('is_read', 'created_at')
        }),
    )
    
    def has_add_permission(self, request):
        return False  # Messages come from frontend only


@admin.register(Technology)
class TechnologyAdmin(admin.ModelAdmin):
    list_display = ['name', 'category', 'created_at']
    list_filter = ['category']
    search_fields = ['name']
    readonly_fields = ['created_at']


class ProjectFeatureInline(admin.TabularInline):
    model = ProjectFeature
    extra = 1
    fields = ['feature_text', 'order']


class ProjectTechnologyInline(admin.TabularInline):
    model = ProjectTechnology
    extra = 1
    fields = ['technology', 'category', 'order']
    autocomplete_fields = ['technology']


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ['name', 'type', 'is_active', 'display_order', 'updated_at']
    list_filter = ['is_active', 'created_at']
    search_fields = ['name', 'type', 'description']
    list_editable = ['is_active', 'display_order']
    readonly_fields = ['created_at', 'updated_at']
    inlines = [ProjectFeatureInline, ProjectTechnologyInline]
    
    fieldsets = (
        ('Basic Information', {
            'fields': ('name', 'type', 'description')
        }),
        ('Links', {
            'fields': ('github_link', 'github_frontend_link', 'github_backend_link', 'live_link')
        }),
        ('Media', {
            'fields': ('mockup_image',)
        }),
        ('Settings', {
            'fields': ('is_active', 'display_order')
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )
