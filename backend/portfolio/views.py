from rest_framework import viewsets, mixins, status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated, AllowAny, IsAdminUser
from .models import About, ContactMessage
from .serializers import AboutSerializer, ContactMessageSerializer


class AboutViewSet(viewsets.ModelViewSet):
    queryset = About.objects.filter(is_active=True)
    serializer_class = AboutSerializer
    
    def get_permissions(self):
        # Public read, authenticated write
        if self.action in ['list', 'retrieve']:
            permission_classes = [AllowAny]
        else:
            permission_classes = [IsAuthenticated]
        return [permission() for permission in permission_classes]
    
    def list(self, request, *args, **kwargs):
        try:
            about = About.objects.get(is_active=True)
            serializer = self.get_serializer(about)
            return Response(serializer.data)
        except About.DoesNotExist:
            return Response(
                {"detail": "About information not found."},
                status=status.HTTP_404_NOT_FOUND
            )


class ContactMessageViewSet(viewsets.ModelViewSet):
    queryset = ContactMessage.objects.all().order_by('-created_at')
    serializer_class = ContactMessageSerializer
    
    def get_permissions(self):
        # Public create, admin-only for list/update
        if self.action == 'create':
            permission_classes = [AllowAny]
        else:
            permission_classes = [IsAdminUser]
        return [permission() for permission in permission_classes]
    
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        
        return Response(
            {
                "detail": "Message received successfully. I will contact you soon.",
                "data": serializer.data
            },
            status=status.HTTP_201_CREATED
        )
    
    @action(detail=True, methods=['patch'], permission_classes=[IsAdminUser])
    def mark_read(self, request, pk=None):
        message = self.get_object()
        message.is_read = request.data.get('is_read', True)
        message.save()
        serializer = self.get_serializer(message)
        return Response(serializer.data)
