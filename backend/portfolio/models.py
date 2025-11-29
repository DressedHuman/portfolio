from django.db import models
from django.core.exceptions import ValidationError


class About(models.Model):
    """Model for storing About Me section content"""
    name = models.CharField(max_length=100)
    title = models.CharField(max_length=100, help_text="Professional title (e.g., Web Developer)")
    address = models.CharField(max_length=200)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    bio = models.TextField(help_text="Biography/description text")
    
    # Social media links
    github_url = models.URLField(blank=True, null=True)
    linkedin_url = models.URLField(blank=True, null=True)
    facebook_url = models.URLField(blank=True, null=True)
    twitter_url = models.URLField(blank=True, null=True)
    
    # Profile image
    profile_image = models.ImageField(upload_to='profile/', blank=True, null=True)
    
    # Only one active About record at a time
    is_active = models.BooleanField(default=True)
    
    # Timestamps
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        verbose_name = "About Me"
        verbose_name_plural = "About Me"
        ordering = ['-updated_at']
    
    def __str__(self):
        return f"{self.name} - {self.title}"
    
    def save(self, *args, **kwargs):
        """Ensure only one active About record exists"""
        if self.is_active:
            # Deactivate all other About records
            About.objects.filter(is_active=True).exclude(pk=self.pk).update(is_active=False)
        super().save(*args, **kwargs)


class ContactMessage(models.Model):
    """Model for storing contact form submissions"""
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
    
    # Admin fields
    is_read = models.BooleanField(default=False, help_text="Mark as read")
    
    # Timestamp
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        verbose_name = "Contact Message"
        verbose_name_plural = "Contact Messages"
        ordering = ['-created_at']
    
    def __str__(self):
        return f"{self.name} - {self.priority} ({self.created_at.strftime('%Y-%m-%d %H:%M')})"
