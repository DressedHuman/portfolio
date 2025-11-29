import { useState, useEffect, FormEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { projectsAPI, technologiesAPI } from '../../utils/api';
import { toast } from 'react-toastify';

interface Technology {
    id: number;
    name: string;
    category: string;
    icon: string;
}

interface ProjectData {
    name: string;
    type: string;
    description: string;
    github_link: string;
    github_frontend_link: string;
    github_backend_link: string;
    live_link: string;
    display_order: number;
    is_active: boolean;
}

const ProjectEditor = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const isEditMode = Boolean(id);

    const [formData, setFormData] = useState<ProjectData>({
        name: '',
        type: '',
        description: '',
        github_link: '',
        github_frontend_link: '',
        github_backend_link: '',
        live_link: '',
        display_order: 0,
        is_active: true,
    });

    const [features, setFeatures] = useState<string[]>(['']);
    const [technologies, setTechnologies] = useState<Technology[]>([]);
    const [selectedTech, setSelectedTech] = useState<{
        Frontend: number[];
        Backend: number[];
        Databases: number[];
    }>({
        Frontend: [],
        Backend: [],
        Databases: [],
    });
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [currentImage, setCurrentImage] = useState<string>('');
    const [loading, setLoading] = useState(isEditMode);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        fetchTechnologies();
        if (isEditMode && id) {
            fetchProject(parseInt(id));
        }
    }, [id]);

    const fetchTechnologies = async () => {
        try {
            const data = await technologiesAPI.getAll();
            setTechnologies(data);
        } catch (error) {
            toast.error('Failed to load technologies');
        }
    };

    const fetchProject = async (projectId: number) => {
        try {
            const data = await projectsAPI.getOne(projectId);

            setFormData({
                name: data.name,
                type: data.type,
                description: data.description,
                github_link: data.github_link,
                github_frontend_link: data.github_frontend_link || '',
                github_backend_link: data.github_backend_link || '',
                live_link: data.live_link,
                display_order: data.display_order,
                is_active: data.is_active,
            });

            setFeatures(data.features.map((f: any) => f.feature_text));
            setCurrentImage(data.mockup_image);

            // Extract technology IDs
            const techIds: any = { Frontend: [], Backend: [], Databases: [] };
            data.project_technologies.forEach((pt: any) => {
                if (techIds[pt.category]) {
                    techIds[pt.category].push(pt.technology.id);
                }
            });
            setSelectedTech(techIds);
        } catch (error) {
            toast.error('Failed to load project');
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;

        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleFeatureChange = (index: number, value: string) => {
        const newFeatures = [...features];
        newFeatures[index] = value;
        setFeatures(newFeatures);
    };

    const addFeature = () => {
        setFeatures([...features, '']);
    };

    const removeFeature = (index: number) => {
        setFeatures(features.filter((_, i) => i !== index));
    };

    const handleTechToggle = (category: 'Frontend' | 'Backend' | 'Databases', techId: number) => {
        setSelectedTech(prev => ({
            ...prev,
            [category]: prev[category].includes(techId)
                ? prev[category].filter(id => id !== techId)
                : [...prev[category], techId]
        }));
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setImageFile(e.target.files[0]);
            setCurrentImage(URL.createObjectURL(e.target.files[0]));
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setSaving(true);

        try {
            const submitData = new FormData();

            // Add basic fields
            Object.entries(formData).forEach(([key, value]) => {
                submitData.append(key, value.toString());
            });

            // Add features (filter out empty ones)
            const validFeatures = features.filter(f => f.trim() !== '');
            submitData.append('features', JSON.stringify(validFeatures));

            // Add technologies
            submitData.append('technologies', JSON.stringify(selectedTech));

            // Add image if new one selected
            if (imageFile) {
                submitData.append('mockup_image', imageFile);
            }

            if (isEditMode && id) {
                await projectsAPI.update(parseInt(id), submitData);
                toast.success('Project updated successfully!');
            } else {
                await projectsAPI.create(submitData);
                toast.success('Project created successfully!');
            }

            navigate('/admin/projects');
        } catch (error: any) {
            toast.error(error.response?.data?.detail || 'Failed to save project');
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <p className="text-gray-400">Loading...</p>
            </div>
        );
    }

    return (
        <div className="max-w-4xl">
            <h1 className="text-3xl font-bold text-white mb-8">
                {isEditMode ? 'Edit Project' : 'Add New Project'}
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Information */}
                <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
                    <h2 className="text-xl font-semibold text-white mb-4">Basic Information</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Project Name *
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Project Type *
                            </label>
                            <input
                                type="text"
                                name="type"
                                value={formData.type}
                                onChange={handleChange}
                                required
                                placeholder="e.g., Web App, Mobile App"
                                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>
                    </div>

                    <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Description *
                        </label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                            rows={4}
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>
                </div>

                {/* Links */}
                <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
                    <h2 className="text-xl font-semibold text-white mb-4">Links</h2>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                GitHub Link *
                            </label>
                            <input
                                type="url"
                                name="github_link"
                                value={formData.github_link}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Frontend GitHub Link
                                </label>
                                <input
                                    type="url"
                                    name="github_frontend_link"
                                    value={formData.github_frontend_link}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Backend GitHub Link
                                </label>
                                <input
                                    type="url"
                                    name="github_backend_link"
                                    value={formData.github_backend_link}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Live Link *
                            </label>
                            <input
                                type="url"
                                name="live_link"
                                value={formData.live_link}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>
                    </div>
                </div>

                {/* Features */}
                <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold text-white">Features</h2>
                        <button
                            type="button"
                            onClick={addFeature}
                            className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded transition duration-300"
                        >
                            + Add Feature
                        </button>
                    </div>

                    <div className="space-y-3">
                        {features.map((feature, index) => (
                            <div key={index} className="flex gap-2">
                                <input
                                    type="text"
                                    value={feature}
                                    onChange={(e) => handleFeatureChange(index, e.target.value)}
                                    placeholder="Feature description"
                                    className="flex-1 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                                />
                                {features.length > 1 && (
                                    <button
                                        type="button"
                                        onClick={() => removeFeature(index)}
                                        className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded transition duration-300"
                                    >
                                        Remove
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Technologies */}
                <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
                    <h2 className="text-xl font-semibold text-white mb-4">Technologies</h2>

                    {(['Frontend', 'Backend', 'Databases'] as const).map(category => (
                        <div key={category} className="mb-6">
                            <h3 className="text-lg font-medium text-gray-300 mb-3">{category}</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                {technologies
                                    .filter(tech => tech.category === category || (category === 'Databases' && tech.category === 'Database'))
                                    .map(tech => (
                                        <label
                                            key={tech.id}
                                            className={`flex items-center gap-2 p-3 rounded-lg cursor-pointer transition ${selectedTech[category].includes(tech.id)
                                                    ? 'bg-green-600 border-green-500'
                                                    : 'bg-gray-700 border-gray-600'
                                                } border`}
                                        >
                                            <input
                                                type="checkbox"
                                                checked={selectedTech[category].includes(tech.id)}
                                                onChange={() => handleTechToggle(category, tech.id)}
                                                className="w-4 h-4"
                                            />
                                            <span className="text-sm text-white">{tech.name}</span>
                                        </label>
                                    ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Image Upload */}
                <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
                    <h2 className="text-xl font-semibold text-white mb-4">Project Mockup</h2>

                    {currentImage && (
                        <div className="mb-4">
                            <img
                                src={currentImage}
                                alt="Project mockup"
                                className="w-full max-w-md h-auto rounded-lg border-2 border-gray-600"
                            />
                        </div>
                    )}

                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="block w-full text-sm text-gray-400
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-lg file:border-0
                            file:text-sm file:font-semibold
                            file:bg-green-600 file:text-white
                            hover:file:bg-green-700 file:cursor-pointer"
                    />
                </div>

                {/* Settings */}
                <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
                    <h2 className="text-xl font-semibold text-white mb-4">Settings</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Display Order
                            </label>
                            <input
                                type="number"
                                name="display_order"
                                value={formData.display_order}
                                onChange={handleChange}
                                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        <div className="flex items-center">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="is_active"
                                    checked={formData.is_active}
                                    onChange={handleChange}
                                    className="w-5 h-5"
                                />
                                <span className="text-sm font-medium text-gray-300">Active (Show on website)</span>
                            </label>
                        </div>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex justify-end gap-4">
                    <button
                        type="button"
                        onClick={() => navigate('/admin/projects')}
                        className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg transition duration-300"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        disabled={saving}
                        className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {saving ? 'Saving...' : isEditMode ? 'Update Project' : 'Create Project'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ProjectEditor;
