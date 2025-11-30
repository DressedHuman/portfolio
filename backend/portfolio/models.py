from django.db import models
from django.core.exceptions import ValidationError


class About(models.Model):
    # Basic info
    name = models.CharField(max_length=100)
    title = models.CharField(max_length=100, help_text="Professional title (e.g., Web Developer)")
    address = models.CharField(max_length=200)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    bio = models.TextField(help_text="Biography/description text")
    
    # Social links
    github_url = models.URLField(blank=True, null=True)
    linkedin_url = models.URLField(blank=True, null=True)
    facebook_url = models.URLField(blank=True, null=True)
    twitter_url = models.URLField(blank=True, null=True)
    
    profile_image = models.ImageField(upload_to='profile/', blank=True, null=True)
    resume = models.FileField(upload_to='resume/', blank=True, null=True)
    is_active = models.BooleanField(default=True)  # Only one active record allowed
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        verbose_name = "About Me"
        verbose_name_plural = "About Me"
        ordering = ['-updated_at']
    
    def __str__(self):
        return f"{self.name} - {self.title}"
    
    def save(self, *args, **kwargs):
        # Ensure only one active About record
        if self.is_active:
            About.objects.filter(is_active=True).exclude(pk=self.pk).update(is_active=False)
        super().save(*args, **kwargs)


class ContactMessage(models.Model):
    PRIORITY_CHOICES = [
        ('Low', 'Low'),
        ('Medium', 'Medium'),
        ('High', 'High'),
    ]
    
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    address = models.CharField(max_length=200)
    priority = models.CharField(max_length=10, choices=PRIORITY_CHOICES)
    description = models.TextField(help_text="Project description")
    is_read = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        verbose_name = "Contact Message"
        verbose_name_plural = "Contact Messages"
        ordering = ['-created_at']
    
    def __str__(self):
        return f"{self.name} - {self.priority} ({self.created_at.strftime('%Y-%m-%d %H:%M')})"


class Technology(models.Model):
    CATEGORY_CHOICES = [
        ('Frontend', 'Frontend'),
        ('Backend', 'Backend'),
        ('Database', 'Database'),
        ('Tool', 'Tool'),
    ]
    
    name = models.CharField(max_length=100, unique=True)
    icon = models.ImageField(upload_to='technologies/')
    bg_color = models.CharField(max_length=20, blank=True, null=True, help_text="Background color for icon")
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        verbose_name = "Technology"
        verbose_name_plural = "Technologies"
        ordering = ['category', 'name']
    
    def __str__(self):
        return f"{self.name} ({self.category})"


class Project(models.Model):
    name = models.CharField(max_length=200)
    type = models.CharField(max_length=100, help_text="Project type (e.g., Web App, Mobile App)")
    description = models.TextField(help_text="Detailed project description")
    
    # Links
    github_link = models.URLField(help_text="Main GitHub repository link")
    github_frontend_link = models.URLField(blank=True, null=True, help_text="Frontend repository link")
    github_backend_link = models.URLField(blank=True, null=True, help_text="Backend repository link")
    live_link = models.URLField(help_text="Live demo link")
    
    # Image
    mockup_image = models.ImageField(upload_to='projects/', blank=True, null=True, help_text="Project mockup/screenshot")
    
    # Metadata
    is_active = models.BooleanField(default=True, help_text="Show on frontend")
    display_order = models.IntegerField(default=0, help_text="Order of display (lower first)")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        verbose_name = "Project"
        verbose_name_plural = "Projects"
        ordering = ['display_order', '-created_at']
    
    def __str__(self):
        return self.name


class ProjectFeature(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='features')
    feature_text = models.CharField(max_length=200)
    order = models.IntegerField(default=0)
    
    class Meta:
        verbose_name = "Project Feature"
        verbose_name_plural = "Project Features"
        ordering = ['order']
    
    def __str__(self):
        return f"{self.project.name} - {self.feature_text}"


class ProjectTechnology(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='project_technologies')
    technology = models.ForeignKey(Technology, on_delete=models.CASCADE)
    category = models.CharField(max_length=20, choices=[
        ('Frontend', 'Frontend'),
        ('Backend', 'Backend'),
        ('Databases', 'Databases'),
    ])
    order = models.IntegerField(default=0)
    
    class Meta:
        verbose_name = "Project Technology"
        verbose_name_plural = "Project Technologies"
        ordering = ['category', 'order']
        unique_together = ['project', 'technology', 'category']
    
    def __str__(self):
        return f"{self.project.name} - {self.technology.name} ({self.category})"
