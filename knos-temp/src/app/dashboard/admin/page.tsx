'use client';
import { useState } from 'react';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<'org' | 'roles' | 'users'>('org');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-black uppercase tracking-widest text-yellow-500">Admin & Organization</h1>
      </div>

      {/* Tabs */}
      <div className="flex space-x-4 border-b border-gray-800 pb-2">
        <button 
          onClick={() => setActiveTab('org')}
          className={`pb-2 px-1 font-bold text-sm tracking-widest uppercase transition-colors ${activeTab === 'org' ? 'border-b-2 border-yellow-500 text-yellow-500' : 'text-gray-500 hover:text-white'}`}
        >
          Org & Venues
        </button>
        <button 
          onClick={() => setActiveTab('roles')}
          className={`pb-2 px-1 font-bold text-sm tracking-widest uppercase transition-colors ${activeTab === 'roles' ? 'border-b-2 border-yellow-500 text-yellow-500' : 'text-gray-500 hover:text-white'}`}
        >
          Roles & Permissions
        </button>
        <button 
          onClick={() => setActiveTab('users')}
          className={`pb-2 px-1 font-bold text-sm tracking-widest uppercase transition-colors ${activeTab === 'users' ? 'border-b-2 border-yellow-500 text-yellow-500' : 'text-gray-500 hover:text-white'}`}
        >
          User Management
        </button>
      </div>

      {/* Content */}
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
        
        {activeTab === 'org' && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold">Organization & Venues</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-black p-4 rounded-lg border border-gray-800">
                <h3 className="font-bold text-gray-400 mb-4 uppercase text-xs tracking-wider">Current Organization</h3>
                <div className="flex justify-between items-center mb-4">
                  <div className="font-bold text-lg">Kalvix Innovation</div>
                  <button className="text-yellow-500 text-sm font-bold">Edit</button>
                </div>
                <button className="w-full bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 rounded transition-colors text-sm">
                  Create New Organization
                </button>
              </div>

              <div className="bg-black p-4 rounded-lg border border-gray-800">
                <h3 className="font-bold text-gray-400 mb-4 uppercase text-xs tracking-wider">Venues</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-900 rounded border border-gray-800">
                    <span className="font-bold">Main Downtown Venue</span>
                    <span className="text-xs bg-green-500/20 text-green-500 px-2 py-1 rounded font-bold uppercase">Active</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-900 rounded border border-gray-800">
                    <span className="font-bold">Airport Kiosk</span>
                    <button className="text-yellow-500 text-xs font-bold uppercase">Switch</button>
                  </div>
                </div>
                <button className="w-full mt-4 bg-yellow-500 hover:bg-yellow-400 text-black font-black py-2 rounded transition-colors text-sm uppercase tracking-wider">
                  Add New Venue
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'roles' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Roles & Permissions</h2>
              <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-black px-4 py-2 rounded transition-colors text-sm uppercase tracking-wider">
                Create Role
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-800 text-xs uppercase tracking-wider text-gray-500">
                    <th className="p-3">Role Name</th>
                    <th className="p-3">Access Level</th>
                    <th className="p-3">Permissions</th>
                    <th className="p-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-gray-800 hover:bg-black transition-colors">
                    <td className="p-3 font-bold text-yellow-500">Owner</td>
                    <td className="p-3">Full Access</td>
                    <td className="p-3 text-gray-400">All Modules</td>
                    <td className="p-3 text-right"><button className="text-gray-500 hover:text-white">Edit</button></td>
                  </tr>
                  <tr className="border-b border-gray-800 hover:bg-black transition-colors">
                    <td className="p-3 font-bold">Manager</td>
                    <td className="p-3">High Access</td>
                    <td className="p-3 text-gray-400">Menu, Orders, Fleet, Analytics</td>
                    <td className="p-3 text-right"><button className="text-yellow-500 hover:text-yellow-400">Edit</button></td>
                  </tr>
                  <tr className="border-b border-gray-800 hover:bg-black transition-colors">
                    <td className="p-3 font-bold">Chef</td>
                    <td className="p-3">Restricted</td>
                    <td className="p-3 text-gray-400">Kitchen Display Only</td>
                    <td className="p-3 text-right"><button className="text-yellow-500 hover:text-yellow-400">Edit</button></td>
                  </tr>
                  <tr className="border-b border-gray-800 hover:bg-black transition-colors">
                    <td className="p-3 font-bold">Waiter</td>
                    <td className="p-3">Restricted</td>
                    <td className="p-3 text-gray-400">Table Mgmt, Orders</td>
                    <td className="p-3 text-right"><button className="text-yellow-500 hover:text-yellow-400">Edit</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'users' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">User Management</h2>
              <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-black px-4 py-2 rounded transition-colors text-sm uppercase tracking-wider">
                Invite User
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { name: 'Alice Smith', email: 'alice@example.com', role: 'Manager', status: 'Active' },
                { name: 'Bob Jones', email: 'bob@example.com', role: 'Chef', status: 'Active' },
                { name: 'Charlie Day', email: 'charlie@example.com', role: 'Waiter', status: 'Pending' },
              ].map((user, i) => (
                <div key={i} className="bg-black p-4 rounded-lg border border-gray-800 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-lg">{user.name}</h3>
                      <span className={`text-[10px] px-2 py-1 rounded font-black uppercase tracking-widest ${user.status === 'Active' ? 'bg-green-500/20 text-green-500' : 'bg-yellow-500/20 text-yellow-500'}`}>
                        {user.status}
                      </span>
                    </div>
                    <p className="text-gray-500 text-sm mb-4">{user.email}</p>
                    <div className="inline-block bg-gray-900 border border-gray-700 rounded px-2 py-1 text-xs font-bold text-gray-300">
                      Role: {user.role}
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-800 flex justify-between">
                    <button className="text-xs font-bold text-gray-400 hover:text-white uppercase tracking-wider">Edit Role</button>
                    <button className="text-xs font-bold text-red-500 hover:text-red-400 uppercase tracking-wider">Remove</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
