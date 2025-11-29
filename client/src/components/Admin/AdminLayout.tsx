import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const AdminLayout = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/admin/login');
    };

    return (
        <div className="min-h-screen bg-gray-900">
            {/* Header */}
            <header className="bg-gray-800 border-b border-gray-700 sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <h1 className="text-2xl font-bold text-white">
                            Admin Panel
                        </h1>
                        <button
                            onClick={handleLogout}
                            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition duration-300"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </header>

            {/* Navigation */}
            <nav className="bg-gray-800 border-b border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex space-x-8">
                        <Link
                            to="/admin"
                            className="px-3 py-4 text-gray-300 hover:text-white border-b-2 border-transparent hover:border-green-500 transition"
                        >
                            Dashboard
                        </Link>
                        <Link
                            to="/admin/about"
                            className="px-3 py-4 text-gray-300 hover:text-white border-b-2 border-transparent hover:border-green-500 transition"
                        >
                            About Editor
                        </Link>
                        <Link
                            to="/admin/messages"
                            className="px-3 py-4 text-gray-300 hover:text-white border-b-2 border-transparent hover:border-green-500 transition"
                        >
                            Messages
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <Outlet />
            </main>
        </div>
    );
};

export default AdminLayout;
