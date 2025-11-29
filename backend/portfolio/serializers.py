from rest_framework import serializers
from .models import About, ContactMessage


class AboutSerializer(serializers.ModelSerializer):
    class Meta:
        model = About
        fields = [
            'id', 'name', 'title', 'address', 'email', 'phone', 'bio',
            'github_url', 'linkedin_url', 'facebook_url', 'twitter_url',
            'profile_image', 'created_at', 'updated_at',
        ]
        read_only_fields = ['id', 'created_at', 'updated_at']


class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = [
            'id', 'name', 'email', 'phone', 'address', 'priority',
            'description', 'is_read', 'created_at',
        ]
        read_only_fields = ['id', 'created_at']
    
    def validate_priority(self, value):
        valid_priorities = ['Low', 'Medium', 'High']
        if value not in valid_priorities:
            raise serializers.ValidationError(
                f"Priority must be one of: {', '.join(valid_priorities)}"
            )
        return value
