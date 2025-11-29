import { useState, useEffect } from 'react';
import { messagesAPI } from '../../utils/api';
import { toast } from 'react-toastify';

interface Message {
    id: number;
    name: string;
    email: string;
    phone: string;
    address: string;
    priority: string;
    description: string;
    is_read: boolean;
    created_at: string;
}

const MessagesViewer = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [filteredMessages, setFilteredMessages] = useState<Message[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
    const [filterPriority, setFilterPriority] = useState<string>('all');
    const [filterRead, setFilterRead] = useState<string>('all');
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchMessages();
    }, []);

    useEffect(() => {
        applyFilters();
    }, [messages, filterPriority, filterRead, searchTerm]);

    const fetchMessages = async () => {
        try {
            const data = await messagesAPI.getAll();
            setMessages(data);
        } catch (error) {
            toast.error('Failed to load messages');
        } finally {
            setLoading(false);
        }
    };

    const applyFilters = () => {
        let filtered = [...messages];

        // Priority filter
        if (filterPriority !== 'all') {
            filtered = filtered.filter(m => m.priority === filterPriority);
        }

        // Read status filter
        if (filterRead === 'read') {
            filtered = filtered.filter(m => m.is_read);
        } else if (filterRead === 'unread') {
            filtered = filtered.filter(m => !m.is_read);
        }

        // Search filter
        if (searchTerm) {
            filtered = filtered.filter(m =>
                m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                m.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                m.description.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        setFilteredMessages(filtered);
    };

    const handleMarkAsRead = async (id: number, isRead: boolean) => {
        try {
            await messagesAPI.markAsRead(id, isRead);
            setMessages(prev =>
                prev.map(m => m.id === id ? { ...m, is_read: isRead } : m)
            );
            toast.success(`Message marked as ${isRead ? 'read' : 'unread'}`);
        } catch (error) {
            toast.error('Failed to update message status');
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <p className="text-gray-400">Loading messages...</p>
            </div>
        );
    }

    return (
        <div>
            <h1 className="text-3xl font-bold text-white mb-8">Contact Messages</h1>

            {/* Filters */}
            <div className="bg-gray-800 rounded-lg border border-gray-700 p-6 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Search
                        </label>
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search by name, email..."
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Priority
                        </label>
                        <select
                            value={filterPriority}
                            onChange={(e) => setFilterPriority(e.target.value)}
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                        >
                            <option value="all">All</option>
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Status
                        </label>
                        <select
                            value={filterRead}
                            onChange={(e) => setFilterRead(e.target.value)}
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                        >
                            <option value="all">All</option>
                            <option value="unread">Unread</option>
                            <option value="read">Read</option>
                        </select>
                    </div>
                    <div className="flex items-end">
                        <p className="text-gray-400 text-sm">
                            Showing {filteredMessages.length} of {messages.length} messages
                        </p>
                    </div>
                </div>
            </div>

            {/* Messages List */}
            <div className="bg-gray-800 rounded-lg border border-gray-700">
                {filteredMessages.length === 0 ? (
                    <div className="p-8 text-center text-gray-400">
                        No messages found
                    </div>
                ) : (
                    <div className="divide-y divide-gray-700">
                        {filteredMessages.map((message) => (
                            <div
                                key={message.id}
                                className={`p-6 hover:bg-gray-750 transition ${!message.is_read ? 'bg-gray-750' : ''
                                    }`}
                            >
                                <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <h3 className="text-white font-semibold text-lg">
                                                {message.name}
                                            </h3>
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
                                        <div className="text-gray-400 text-sm space-y-1 mb-3">
                                            <p>📧 {message.email}</p>
                                            <p>📱 {message.phone}</p>
                                            <p>📍 {message.address}</p>
                                            <p>📅 {new Date(message.created_at).toLocaleString()}</p>
                                        </div>
                                        <p className="text-gray-300 mb-4">{message.description}</p>
                                        <button
                                            onClick={() => handleMarkAsRead(message.id, !message.is_read)}
                                            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${message.is_read
                                                    ? 'bg-gray-600 hover:bg-gray-700 text-white'
                                                    : 'bg-green-600 hover:bg-green-700 text-white'
                                                }`}
                                        >
                                            {message.is_read ? 'Mark as Unread' : 'Mark as Read'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MessagesViewer;
