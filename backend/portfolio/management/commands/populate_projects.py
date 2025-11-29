from django.core.management.base import BaseCommand
from portfolio.models import Technology, Project, ProjectFeature, ProjectTechnology
import os
from django.conf import settings


class Command(BaseCommand):
    help = 'Populate initial project data from existing frontend data'

    def handle(self, *args, **kwargs):
        self.stdout.write('Starting data population...')
        
        # Create technologies
        self.stdout.write('Creating technologies...')
        technologies = self.create_technologies()
        
        # Create projects
        self.stdout.write('Creating projects...')
        self.create_projects(technologies)
        
        self.stdout.write(self.style.SUCCESS('Successfully populated project data!'))

    def create_technologies(self):
        tech_data = [
            ('Javascript', 'javascript.svg', '', 'Frontend'),
            ('TypeScript', 'typescript.svg', '', 'Frontend'),
            ('React', 'react.svg', '', 'Frontend'),
            ('Redux', 'redux.svg', '', 'Frontend'),
            ('React Router Dom', 'react-router.svg', '', 'Frontend'),
            ('HTML5', 'HTML5.svg', '', 'Frontend'),
            ('CSS3', 'CSS3.svg', '', 'Frontend'),
            ('Tailwindcss', 'tailwind-css.svg', '', 'Frontend'),
            ('Python', 'python.svg', '', 'Backend'),
            ('Django', 'django.svg', '', 'Backend'),
            ('Django Rest Framework', 'DjangoREST.svg', '#FFFFFF', 'Backend'),
            ('Sqlite3', 'sqlite3.svg', '', 'Database'),
        ]
        
        tech_dict = {}
        for name, icon, bg_color, category in tech_data:
            tech, created = Technology.objects.get_or_create(
                name=name,
                defaults={
                    'icon': f'technologies/{icon}',
                    'bg_color': bg_color if bg_color else None,
                    'category': category
                }
            )
            tech_dict[name] = tech
            if created:
                self.stdout.write(f'  Created: {name}')
        
        return tech_dict

    def create_projects(self, technologies):
        projects_data = [
            {
                'name': 'VocabStar | Learn to Never Forget',
                'type': 'Vocabulary Learning System',
                'description': 'A full-stack web app to learn, memorize and test English to Bengali vocabularies or vice-versa. Developed with TypeScript, ReactJS and ReduxJS for frontend and Django and Django REST Framework for backend.',
                'github_link': 'https://github.com/DressedHuman/VocabStar',
                'github_frontend_link': 'https://github.com/DressedHuman/VocabStar/tree/client',
                'github_backend_link': 'https://github.com/DressedHuman/VocabStar/tree/backend',
                'live_link': 'https://vocab-star.vercel.app',
                'mockup_image': 'projects/VocabStar.webp',
                'display_order': 0,
                'features': [
                    'Authentication',
                    'Add word with meanings',
                    'Check a vocab',
                    'View saved vocabs',
                    'Play pronunciation of words',
                    'Delete a vocab',
                    'Take vocabulary MCQ test',
                    'Set MCQ counts',
                    'Set duration',
                    'Set from-recent-only',
                    'Detailed result'
                ],
                'technologies': {
                    'Frontend': ['Javascript', 'TypeScript', 'React', 'Redux', 'React Router Dom', 'HTML5', 'CSS3', 'Tailwindcss'],
                    'Backend': ['Python', 'Django', 'Django Rest Framework'],
                    'Databases': ['Sqlite3']
                }
            },
            {
                'name': "Schooler | Let's School from Online",
                'type': 'School Management System',
                'description': "A complete school management project, developed for my high school, 'Nautara Abiunnessa B.L. High School'. The application's frontend part is developed with mainly React, React Router DOM, TailwindCSS and Vanilla JavaScript while the backend part is developed with Django, a Python based web framework along with DjangoRestFramework for flexible api development. Currently, it's using Sqlite3 as database",
                'github_link': 'https://github.com/DressedHuman/Schooler',
                'github_frontend_link': 'https://github.com/DressedHuman/Schooler/tree/client',
                'github_backend_link': 'https://github.com/DressedHuman/Schooler/tree/backend-django',
                'live_link': 'https://schooler-five.vercel.app',
                'mockup_image': 'projects/Schooler.webp',
                'display_order': 1,
                'features': [
                    'Different Dashboards for Teachers, Students and Parents',
                    'Attendance',
                    'Homework',
                    'Result',
                    'Routine',
                    'Notice',
                ],
                'technologies': {
                    'Frontend': ['Javascript', 'React', 'React Router Dom', 'HTML5', 'CSS3', 'Tailwindcss'],
                    'Backend': ['Python', 'Django', 'Django Rest Framework'],
                    'Databases': ['Sqlite3']
                }
            },
            {
                'name': 'Motiur Rahman Mizan | Frontend Developer',
                'type': 'Portfolio Web',
                'description': 'A portfolio website that can be used for showcasing skills, projects, experience and other useful information, completely developed using TypeScript and reusable React components. We believe that, reusability of components can give developers the power of efficient and faster development experience.',
                'github_link': 'https://github.com/DressedHuman/Portfolio',
                'github_frontend_link': 'https://github.com/DressedHuman/portfolio/tree/master',
                'github_backend_link': '',
                'live_link': 'https://mrmizan.vercel.app',
                'mockup_image': 'projects/Portfolio.webp',
                'display_order': 2,
                'features': [
                    'Custom Cursor',
                    'Side Navbar',
                    'Button Hover Effects',
                    'Multi-sized Buttons',
                    'Go To Top Button',
                    'Showcasing Projects',
                    'Showcasing Skills',
                    'Professional Look',
                    'About Section',
                ],
                'technologies': {
                    'Frontend': ['Javascript', 'React', 'React Router Dom', 'HTML5', 'CSS3', 'Tailwindcss'],
                    'Backend': [],
                    'Databases': []
                }
            },
        ]
        
        for proj_data in projects_data:
            project, created = Project.objects.get_or_create(
                name=proj_data['name'],
                defaults={
                    'type': proj_data['type'],
                    'description': proj_data['description'],
                    'github_link': proj_data['github_link'],
                    'github_frontend_link': proj_data['github_frontend_link'],
                    'github_backend_link': proj_data['github_backend_link'],
                    'live_link': proj_data['live_link'],
                    'mockup_image': proj_data['mockup_image'],
                    'display_order': proj_data['display_order'],
                }
            )
            
            if created:
                self.stdout.write(f'  Created project: {project.name}')
                
                # Add features
                for idx, feature in enumerate(proj_data['features']):
                    ProjectFeature.objects.create(
                        project=project,
                        feature_text=feature,
                        order=idx
                    )
                
                # Add technologies
                for category, tech_names in proj_data['technologies'].items():
                    for idx, tech_name in enumerate(tech_names):
                        if tech_name in technologies:
                            ProjectTechnology.objects.create(
                                project=project,
                                technology=technologies[tech_name],
                                category=category,
                                order=idx
                            )
