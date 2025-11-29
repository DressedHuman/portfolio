from rest_framework import serializers
from .models import About, ContactMessage, Technology, Project, ProjectFeature, ProjectTechnology


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


class TechnologySerializer(serializers.ModelSerializer):
    class Meta:
        model = Technology
        fields = ['id', 'name', 'icon', 'bg_color', 'category']
        read_only_fields = ['id']


class ProjectFeatureSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectFeature
        fields = ['id', 'feature_text', 'order']
        read_only_fields = ['id']


class ProjectTechnologySerializer(serializers.ModelSerializer):
    technology = TechnologySerializer(read_only=True)
    technology_id = serializers.PrimaryKeyRelatedField(
        queryset=Technology.objects.all(),
        source='technology',
        write_only=True
    )
    
    class Meta:
        model = ProjectTechnology
        fields = ['id', 'technology', 'technology_id', 'category', 'order']
        read_only_fields = ['id']


class ProjectSerializer(serializers.ModelSerializer):
    features = ProjectFeatureSerializer(many=True, read_only=True)
    project_technologies = ProjectTechnologySerializer(many=True, read_only=True)
    
    # Grouped technologies for frontend
    technologies = serializers.SerializerMethodField()
    
    class Meta:
        model = Project
        fields = [
            'id', 'name', 'type', 'description',
            'github_link', 'github_frontend_link', 'github_backend_link', 'live_link',
            'mockup_image', 'is_active', 'display_order',
            'features', 'project_technologies', 'technologies',
            'created_at', 'updated_at',
        ]
        read_only_fields = ['id', 'created_at', 'updated_at']
    
    def get_technologies(self, obj):
        # Group technologies by category
        tech_dict = {'Frontend': [], 'Backend': [], 'Databases': []}
        for pt in obj.project_technologies.all():
            tech_data = TechnologySerializer(pt.technology).data
            if pt.category in tech_dict:
                tech_dict[pt.category].append(tech_data)
        return tech_dict
