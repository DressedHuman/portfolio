from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import AboutViewSet, ContactMessageViewSet, TechnologyViewSet, ProjectViewSet

router = DefaultRouter()
router.register(r'about', AboutViewSet, basename='about')
router.register(r'receive_message', ContactMessageViewSet, basename='contact-message')
router.register(r'messages', ContactMessageViewSet, basename='messages')
router.register(r'technologies', TechnologyViewSet, basename='technology')
router.register(r'projects', ProjectViewSet, basename='project')

urlpatterns = [
    path('', include(router.urls)),
]
