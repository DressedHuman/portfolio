import { useState, useEffect } from 'react';
import { messagesAPI } from '../../utils/api';
import { Link } from 'react-router-dom';

interface Message {
    id: number;
    name: string;
    priority: string;
    is_read: boolean;
    created_at: string;
}

const AdminDashboard = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchMessages();
    }, []);

    const fetchMessages = async () => {
        try {
            const data = await messagesAPI.getAll();
            setMessages(data);
        } catch (error) {
            console.error('Error fetching messages:', error);
        } finally {
            setLoading(false);
        }
    };

    const unreadCount = messages.filter(m => !m.is_read).length;
    const recentMessages = messages.slice(0, 5);

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold text-white">Dashboard</h1>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <h3 className="text-gray-400 text-sm font-medium">Total Messages</h3>
                    <p className="text-3xl font-bold text-white mt-2">{messages.length}</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <h3 className="text-gray-400 text-sm font-medium">Unread Messages</h3>
                    <p className="text-3xl font-bold text-orange-500 mt-2">{unreadCount}</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <h3 className="text-gray-400 text-sm font-medium">Read Messages</h3>
                    <p className="text-3xl font-bold text-green-500 mt-2">{messages.length - unreadCount}</p>
                </div>
            </div>

            {/* Recent Messages */}
            <div className="bg-gray-800 rounded-lg border border-gray-700">
                <div className="p-6 border-b border-gray-700 flex justify-between items-center">
                    <h2 className="text-xl font-bold text-white">Recent Messages</h2>
                    <Link
                        to="/admin/messages"
                        className="text-green-500 hover:text-green-400 text-sm font-medium"
                    >
                        View All →
                    </Link>
                </div>
                <div className="p-6">
                    {loading ? (
                        <p className="text-gray-400">Loading...</p>
                    ) : recentMessages.length === 0 ? (
                        <p className="text-gray-400">No messages yet</p>
                    ) : (
                        <div className="space-y-4">
                            {recentMessages.map((message) => (
                                <div
                                    key={message.id}
                                    className="flex items-center justify-between p-4 bg-gray-700 rounded-lg"
                                >
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3">
                                            <h3 className="text-white font-medium">{message.name}</h3>
                                            <span className={`px-2 py-1 text-xs rounded ${message.priority === 'High' ? 'bg-red-600 text-white' :
                                                    message.priority === 'Medium' ? 'bg-yellow-600 text-white' :
                                                        'bg-blue-600 text-white'
                                                }`}>
                                                {message.priority}
                                            </span>
                                            {!message.is_read && (
                                                <span className="px-2 py-1 text-xs bg-orange-600 text-white rounded">
                                                    Unread
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-gray-400 text-sm mt-1">
                                            {new Date(message.created_at).toLocaleDateString()}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Quick Links */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link
                    to="/admin/about"
                    className="bg-gradient-to-r from-green-600 to-green-700 p-6 rounded-lg hover:from-green-700 hover:to-green-800 transition"
                >
                    <h3 className="text-white text-xl font-bold">Edit About Section</h3>
                    <p className="text-green-100 mt-2">Update your personal information and bio</p>
                </Link>
                <Link
                    to="/admin/messages"
                    className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 rounded-lg hover:from-blue-700 hover:to-blue-800 transition"
                >
                    <h3 className="text-white text-xl font-bold">View All Messages</h3>
                    <p className="text-blue-100 mt-2">Manage contact form submissions</p>
                </Link>
            </div>
        </div>
    );
};

export default AdminDashboard;
