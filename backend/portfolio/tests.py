from django.test import TestCase
from django.urls import reverse
from rest_framework.test import APITestCase
from rest_framework import status
from .models import About, ContactMessage


class AboutModelTest(TestCase):
    """Test cases for About model"""
    
    def setUp(self):
        """Set up test data"""
        self.about_data = {
            'name': 'Test User',
            'title': 'Test Developer',
            'address': 'Test City',
            'email': 'test@example.com',
            'phone': '+1234567890',
            'bio': 'Test bio content',
            'github_url': 'https://github.com/testuser',
            'linkedin_url': 'https://linkedin.com/in/testuser',
        }
    
    def test_create_about(self):
        """Test creating an About instance"""
        about = About.objects.create(**self.about_data)
        self.assertEqual(about.name, 'Test User')
        self.assertEqual(about.title, 'Test Developer')
        self.assertTrue(about.is_active)
    
    def test_only_one_active_about(self):
        """Test that only one About instance can be active"""
        about1 = About.objects.create(**self.about_data)
        self.assertTrue(about1.is_active)
        
        # Create second About instance
        about2_data = self.about_data.copy()
        about2_data['name'] = 'Test User 2'
        about2 = About.objects.create(**about2_data)
        
        # Refresh from database
        about1.refresh_from_db()
        
        # First should be deactivated, second should be active
        self.assertFalse(about1.is_active)
        self.assertTrue(about2.is_active)
    
    def test_about_str_method(self):
        """Test string representation of About"""
        about = About.objects.create(**self.about_data)
        self.assertEqual(str(about), 'Test User - Test Developer')


class ContactMessageModelTest(TestCase):
    """Test cases for ContactMessage model"""
    
    def setUp(self):
        """Set up test data"""
        self.message_data = {
            'name': 'Client Name',
            'email': 'client@example.com',
            'phone': '+1234567890',
            'address': 'Client Address',
            'priority': 'High',
            'description': 'Test project description',
        }
    
    def test_create_contact_message(self):
        """Test creating a ContactMessage instance"""
        message = ContactMessage.objects.create(**self.message_data)
        self.assertEqual(message.name, 'Client Name')
        self.assertEqual(message.priority, 'High')
        self.assertFalse(message.is_read)
    
    def test_contact_message_str_method(self):
        """Test string representation of ContactMessage"""
        message = ContactMessage.objects.create(**self.message_data)
        self.assertIn('Client Name', str(message))
        self.assertIn('High', str(message))


class AboutAPITest(APITestCase):
    """Test cases for About API endpoints"""
    
    def setUp(self):
        """Set up test data"""
        self.about = About.objects.create(
            name='Motiur Rahman Mizan',
            title='Web Developer',
            address='Rangpur, Bangladesh',
            email='test@example.com',
            phone='+8801315243425',
            bio='Test bio',
            github_url='https://github.com/DressedHuman',
            is_active=True
        )
        self.url = reverse('about-list')
    
    def test_get_about(self):
        """Test GET request to About endpoint"""
        response = self.client.get(self.url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['name'], 'Motiur Rahman Mizan')
        self.assertEqual(response.data['title'], 'Web Developer')
    
    def test_get_about_not_found(self):
        """Test GET request when no active About exists"""
        self.about.is_active = False
        self.about.save()
        
        response = self.client.get(self.url)
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)


class ContactMessageAPITest(APITestCase):
    """Test cases for ContactMessage API endpoints"""
    
    def setUp(self):
        """Set up test data"""
        self.url = reverse('contact-message-list')
        self.valid_data = {
            'name': 'Test Client',
            'email': 'client@example.com',
            'phone': '+1234567890',
            'address': 'Test Address',
            'priority': 'Medium',
            'description': 'Test project description',
        }
    
    def test_create_contact_message(self):
        """Test POST request to create a contact message"""
        response = self.client.post(self.url, self.valid_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertIn('detail', response.data)
        self.assertEqual(ContactMessage.objects.count(), 1)
        
        message = ContactMessage.objects.first()
        self.assertEqual(message.name, 'Test Client')
        self.assertEqual(message.priority, 'Medium')
    
    def test_create_contact_message_invalid_priority(self):
        """Test POST request with invalid priority"""
        invalid_data = self.valid_data.copy()
        invalid_data['priority'] = 'Invalid'
        
        response = self.client.post(self.url, invalid_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
    
    def test_create_contact_message_missing_fields(self):
        """Test POST request with missing required fields"""
        incomplete_data = {
            'name': 'Test Client',
            'email': 'client@example.com',
        }
        
        response = self.client.post(self.url, incomplete_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
