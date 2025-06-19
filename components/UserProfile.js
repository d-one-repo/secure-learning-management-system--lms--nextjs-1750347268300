import { User, Mail, Calendar, Star } from 'lucide-react'
export default function UserProfile() {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
      <User size={48} className="text-blue-600 mb-2" />
      <h3 className="text-lg font-bold text-gray-800">Elsbeth Headley</h3>
      <span className="text-sm text-gray-500 mb-2">Director of Continuing Medical Education</span>
      <div className="flex items-center gap-2 text-gray-500 mb-2">
        <Mail size={16} />
        <span>elsbeth.headley@springer.com</span>
      </div>
      <div className="flex items-center gap-2 text-gray-500 mb-2">
        <Calendar size={16} />
        <span>Member since 2018</span>
      </div>
      <div className="flex items-center gap-1 mt-2">
        <Star size={16} className="text-yellow-400" />
        <Star size={16} className="text-yellow-400" />
        <Star size={16} className="text-yellow-400" />
        <Star size={16} className="text-yellow-400" />
        <Star size={16} className="text-gray-300" />
        <span className="ml-2 text-xs text-gray-500">4.0 CME Rating</span>
      </div>
    </div>
  )
}