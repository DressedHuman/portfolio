import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { projectsAPI } from '../../utils/api';
import { toast } from 'react-toastify';

interface Project {
    id: number;
    name: string;
    type: string;
    mockup_image: string;
    is_active: boolean;
    display_order: number;
    created_at: string;
}

const ProjectsManager = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            const data = await projectsAPI.getAll();
            setProjects(data);
        } catch (error) {
            toast.error('Failed to load projects');
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: number, name: string) => {
        if (!window.confirm(`Are you sure you want to delete "${name}"?`)) {
            return;
        }

        try {
            await projectsAPI.delete(id);
            toast.success('Project deleted successfully');
            fetchProjects();
        } catch (error: any) {
            toast.error(error.response?.data?.detail || 'Failed to delete project');
        }
    };

    const handleToggleActive = async (project: Project) => {
        try {
            const formData = new FormData();
            formData.append('name', project.name);
            formData.append('type', project.type);
            formData.append('description', '');
            formData.append('github_link', '');
            formData.append('live_link', '');
            formData.append('is_active', (!project.is_active).toString());
            formData.append('display_order', project.display_order.toString());

            await projectsAPI.update(project.id, formData);
            toast.success(`Project ${!project.is_active ? 'activated' : 'deactivated'}`);
            fetchProjects();
        } catch (error: any) {
            toast.error(error.response?.data?.detail || 'Failed to update project');
        }
    };

    const filteredProjects = projects.filter(project =>
        project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.type.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <p className="text-gray-400">Loading...</p>
            </div>
        );
    }

    return (
        <div className="max-w-7xl">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-white">Manage Projects</h1>
                <button
                    onClick={() => navigate('/admin/projects/new')}
                    className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition duration-300"
                >
                    + Add Project
                </button>
            </div>

            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Search projects..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                    <div
                        key={project.id}
                        className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden hover:border-green-500 transition duration-300"
                    >
                        <div className="relative h-48">
                            <img
                                src={project.mockup_image}
                                alt={project.name}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-2 right-2">
                                <span
                                    className={`px-3 py-1 rounded-full text-xs font-semibold ${project.is_active
                                            ? 'bg-green-600 text-white'
                                            : 'bg-gray-600 text-gray-300'
                                        }`}
                                >
                                    {project.is_active ? 'Active' : 'Inactive'}
                                </span>
                            </div>
                        </div>

                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-white mb-1 truncate">
                                {project.name}
                            </h3>
                            <p className="text-sm text-gray-400 mb-4">{project.type}</p>

                            <div className="flex gap-2">
                                <button
                                    onClick={() => navigate(`/admin/projects/${project.id}/edit`)}
                                    className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded transition duration-300"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleToggleActive(project)}
                                    className="flex-1 px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white text-sm font-semibold rounded transition duration-300"
                                >
                                    {project.is_active ? 'Deactivate' : 'Activate'}
                                </button>
                                <button
                                    onClick={() => handleDelete(project.id, project.name)}
                                    className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded transition duration-300"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {filteredProjects.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-gray-400 text-lg">No projects found</p>
                </div>
            )}
        </div>
    );
};

export default ProjectsManager;
