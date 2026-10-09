"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Shirt, ShieldCheck, Image as ImageIcon, CheckCircle, Clock, Upload, ArrowRight, Settings, LogOut, Search } from 'lucide-react';
import Link from 'next/link';

type Role = 'SYSTEM_OWNER' | 'ADMIN' | 'MEMBER';

export default function DashboardView() {
  const [role, setRole] = useState<Role>('SYSTEM_OWNER');
  
  // States for Admin
  const [activeTab, setActiveTab] = useState<'OVERVIEW' | 'MODELS' | 'MEMBERS'>('OVERVIEW');

  // States for Member
  const [hasJoined, setHasJoined] = useState(false);
  const [joinCode, setJoinCode] = useState('');

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-card border-r border-border hidden md:flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-border">
          <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center border border-primary/50 text-primary font-bold text-xs mr-3">
            JB
          </div>
          <span className="font-bold text-lg">Jersey Banao</span>
        </div>

        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          <p className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Main Menu</p>
          <button onClick={() => setActiveTab('OVERVIEW')} className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${activeTab === 'OVERVIEW' ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary text-foreground'}`}>
            <ShieldCheck size={18} /> Overview
          </button>
          
          {role === 'ADMIN' && (
            <>
              <button onClick={() => setActiveTab('MODELS')} className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${activeTab === 'MODELS' ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary text-foreground'}`}>
                <Shirt size={18} /> Manage Models
              </button>
              <button onClick={() => setActiveTab('MEMBERS')} className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${activeTab === 'MEMBERS' ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary text-foreground'}`}>
                <Users size={18} /> Members
              </button>
            </>
          )}

          {role === 'MEMBER' && hasJoined && (
            <>
              <button onClick={() => setActiveTab('MODELS')} className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${activeTab === 'MODELS' ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary text-foreground'}`}>
                <Shirt size={18} /> View Models
              </button>
              <button onClick={() => setActiveTab('MEMBERS')} className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${activeTab === 'MEMBERS' ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary text-foreground'}`}>
                <Users size={18} /> Group Stats
              </button>
            </>
          )}
        </nav>

        <div className="p-4 border-t border-border">
          <Link href="/" className="flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground transition-colors">
            <LogOut size={18} /> Exit Dashboard
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden bg-background">
        {/* Topbar / Role Switcher (For Demo Purposes) */}
        <header className="h-16 bg-card border-b border-border flex items-center justify-between px-6 shrink-0">
          <h1 className="font-bold text-xl hidden md:block">
            {role === 'SYSTEM_OWNER' ? 'System Owner Portal' : role === 'ADMIN' ? 'Admin Dashboard' : 'Member Area'}
          </h1>
          
          {/* Role Switcher */}
          <div className="flex items-center gap-4 bg-secondary/50 p-1.5 rounded-lg border border-border">
            <span className="text-xs font-semibold text-muted-foreground px-2">Demo Role:</span>
            {(['SYSTEM_OWNER', 'ADMIN', 'MEMBER'] as Role[]).map((r) => (
              <button
                key={r}
                onClick={() => { setRole(r); setActiveTab('OVERVIEW'); setHasJoined(false); }}
                className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${role === r ? 'bg-primary text-primary-foreground shadow' : 'text-muted-foreground hover:bg-background'}`}
              >
                {r.replace('_', ' ')}
              </button>
            ))}
          </div>
        </header>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto p-6 md:p-10">
          <div className="max-w-6xl mx-auto">
            {role === 'SYSTEM_OWNER' && <SystemOwnerDashboard />}
            {role === 'ADMIN' && <AdminDashboard activeTab={activeTab} />}
            {role === 'MEMBER' && <MemberDashboard activeTab={activeTab} hasJoined={hasJoined} setHasJoined={setHasJoined} joinCode={joinCode} setJoinCode={setJoinCode} />}
          </div>
        </div>
      </main>
    </div>
  );
}

// ----------------------------------------------------
// SYSTEM OWNER DASHBOARD (Approve Admins/Projects)
// ----------------------------------------------------
function SystemOwnerDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-2">Welcome, System Owner</h2>
        <p className="text-muted-foreground">Manage all projects and approve new admins here.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <DashboardCard title="Total Projects" value="12" icon={<Settings className="text-primary" />} />
        <DashboardCard title="Pending Admins" value="3" icon={<Clock className="text-yellow-500" />} />
        <DashboardCard title="Active Members" value="450+" icon={<Users className="text-primary" />} />
      </div>

      <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden">
        <div className="p-6 border-b border-border">
          <h3 className="text-xl font-bold">Admin Approval Requests</h3>
        </div>
        <div className="p-0">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-secondary/50 text-sm">
                <th className="p-4 font-semibold text-muted-foreground">Admin Name</th>
                <th className="p-4 font-semibold text-muted-foreground">Project Details</th>
                <th className="p-4 font-semibold text-muted-foreground">Status</th>
                <th className="p-4 font-semibold text-muted-foreground text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3].map((item) => (
                <tr key={item} className="border-b border-border last:border-0 hover:bg-secondary/20 transition-colors">
                  <td className="p-4 font-medium">Rakib Hasan</td>
                  <td className="p-4 text-muted-foreground">CSE Batch 2026 - IUBAT</td>
                  <td className="p-4">
                    <span className="px-3 py-1 bg-yellow-500/10 text-yellow-600 rounded-full text-xs font-bold border border-yellow-500/20">Pending</span>
                  </td>
                  <td className="p-4 text-right">
                    <button className="px-4 py-1.5 bg-primary text-primary-foreground text-sm font-bold rounded-lg hover:bg-primary/90 transition-colors">
                      Approve
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}


// ----------------------------------------------------
// ADMIN DASHBOARD
// ----------------------------------------------------
function AdminDashboard({ activeTab }: { activeTab: string }) {
  if (activeTab === 'MODELS') return <AdminModels />;
  if (activeTab === 'MEMBERS') return <AdminMembers />;

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-2">Project Overview</h2>
        <p className="text-muted-foreground">Manage your jersey project, share code, and track progress.</p>
      </div>

      {/* Invite Code Section */}
      <div className="bg-primary/10 border border-primary/30 p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold text-primary mb-1">Group Invite Code</h3>
          <p className="text-sm text-muted-foreground">Share this code with your members so they can join this project.</p>
        </div>
        <div className="flex items-center gap-3 bg-background border border-border px-4 py-2 rounded-xl">
          <span className="text-2xl font-mono font-bold tracking-widest">JB-CSE-26</span>
          <button className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-bold rounded-lg hover:bg-secondary/80">Copy</button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <DashboardCard title="Total Members Joined" value="45" icon={<Users className="text-primary" />} />
        <DashboardCard title="Pending Payments" value="12" icon={<Clock className="text-yellow-500" />} />
        <DashboardCard title="Approved Orders" value="33" icon={<CheckCircle className="text-green-500" />} />
      </div>
    </div>
  );
}

function AdminModels() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Manage Jersey Models</h2>
          <p className="text-muted-foreground">Upload and configure the jersey designs for your group.</p>
        </div>
        <button className="px-4 py-2 bg-primary text-primary-foreground font-bold rounded-xl flex items-center gap-2">
          <Upload size={18} /> Upload New Model
        </button>
      </div>

      {/* Upload Form Mockup */}
      <div className="bg-card p-6 rounded-2xl border border-border shadow-sm grid md:grid-cols-2 gap-8">
        <div className="border-2 border-dashed border-border rounded-2xl flex flex-col items-center justify-center p-12 text-center text-muted-foreground bg-secondary/20 hover:bg-secondary/40 transition-colors cursor-pointer">
          <ImageIcon size={48} className="mb-4 opacity-50" />
          <p className="font-medium mb-1">Click to upload images</p>
          <p className="text-xs">Supports JPG, PNG (Max 5MB). You can upload front and back side.</p>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-bold mb-1">Model Name</label>
            <input type="text" placeholder="e.g. Away Kit 2026" className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary" />
          </div>
          <div>
            <label className="block text-sm font-bold mb-1">Price per Jersey (BDT)</label>
            <input type="number" placeholder="850" className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary" />
          </div>
          <div>
            <label className="block text-sm font-bold mb-1">Available Sizes</label>
            <div className="flex gap-2">
              {['S', 'M', 'L', 'XL', 'XXL'].map(s => (
                <div key={s} className="px-3 py-1 border border-primary text-primary bg-primary/10 rounded-md text-sm font-bold">{s}</div>
              ))}
            </div>
          </div>
          <button className="w-full py-3 mt-2 bg-foreground text-background font-bold rounded-lg hover:opacity-90 transition-opacity">
            Save Model
          </button>
        </div>
      </div>
    </div>
  );
}

function AdminMembers() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Group Members & Payments</h2>
        <p className="text-muted-foreground">Verify payments and approve jersey orders.</p>
      </div>

      <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-secondary/50 text-sm">
              <th className="p-4 font-semibold text-muted-foreground">Member Name</th>
              <th className="p-4 font-semibold text-muted-foreground">Size & Sleeve</th>
              <th className="p-4 font-semibold text-muted-foreground">Payment Proof</th>
              <th className="p-4 font-semibold text-muted-foreground">Status</th>
              <th className="p-4 font-semibold text-muted-foreground text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3].map((item) => (
              <tr key={item} className="border-b border-border last:border-0">
                <td className="p-4 font-bold">Taufiq Islam</td>
                <td className="p-4">XL / Full Sleeve</td>
                <td className="p-4">
                  <span className="text-primary text-sm font-semibold underline cursor-pointer">View Screenshot</span>
                </td>
                <td className="p-4">
                  <span className="px-3 py-1 bg-yellow-500/10 text-yellow-600 rounded-full text-xs font-bold border border-yellow-500/20">Pending Verification</span>
                </td>
                <td className="p-4 text-right">
                  <button className="px-4 py-1.5 bg-green-600 text-white text-sm font-bold rounded-lg hover:bg-green-700 transition-colors">
                    Confirm
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


// ----------------------------------------------------
// MEMBER DASHBOARD
// ----------------------------------------------------
function MemberDashboard({ activeTab, hasJoined, setHasJoined, joinCode, setJoinCode }: any) {
  if (!hasJoined) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] max-w-md mx-auto text-center space-y-6">
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-2">
          <Search size={36} />
        </div>
        <h2 className="text-3xl font-bold">Join a Project</h2>
        <p className="text-muted-foreground">Enter the unique code provided by your group admin to view the jersey and confirm your order.</p>
        
        <div className="w-full space-y-4 mt-4">
          <input 
            type="text" 
            placeholder="e.g. JB-CSE-26" 
            value={joinCode}
            onChange={(e) => setJoinCode(e.target.value)}
            className="w-full px-4 py-3 bg-card border border-border text-center text-xl font-mono tracking-widest rounded-xl focus:outline-none focus:border-primary uppercase" 
          />
          <button 
            onClick={() => setHasJoined(true)}
            className="w-full py-3 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
          >
            Join Group
          </button>
        </div>
      </div>
    );
  }

  if (activeTab === 'MEMBERS') {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Group Stats</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <DashboardCard title="Total Members Joined" value="45" icon={<Users className="text-primary" />} />
          <DashboardCard title="Payments Confirmed" value="33" icon={<CheckCircle className="text-green-500" />} />
        </div>
        <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
          <h3 className="font-bold mb-4">Recently Confirmed Members</h3>
          <ul className="space-y-3">
            {[1, 2, 3, 4, 5].map(i => (
              <li key={i} className="flex items-center gap-3 pb-3 border-b border-border last:border-0 last:pb-0">
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center font-bold text-xs">M</div>
                <div>
                  <p className="font-bold text-sm">Member {i}</p>
                  <p className="text-xs text-muted-foreground">Confirmed 2 hours ago</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  // OVERVIEW / ORDER PAGE for Member
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-2">CSE Batch 2026 - Official Jersey</h2>
        <p className="text-muted-foreground">Admin: Rakib Hasan • Price: 850 BDT</p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Model Preview */}
        <div className="space-y-4">
          <div className="aspect-[4/3] bg-secondary/50 rounded-2xl border border-border overflow-hidden relative border-4 border-white shadow-xl">
             <img src="/image%20for%20design/models.jpg" alt="Model" className="w-full h-full object-cover" />
          </div>
          <div className="flex gap-2">
            <div className="w-16 h-16 bg-secondary/50 rounded-lg border-2 border-primary cursor-pointer overflow-hidden"><img src="/image%20for%20design/models.jpg" alt="Thumb" className="w-full h-full object-cover" /></div>
            <div className="w-16 h-16 bg-secondary/50 rounded-lg border border-border cursor-pointer flex items-center justify-center text-xs text-muted-foreground">Back</div>
          </div>
        </div>

        {/* Order Form */}
        <div className="bg-card p-6 rounded-2xl border border-border shadow-sm space-y-6 h-fit">
          <h3 className="text-xl font-bold border-b border-border pb-3">Submit Your Order</h3>
          
          <div className="space-y-3">
            <label className="block text-sm font-bold">Select Size</label>
            <div className="flex flex-wrap gap-2">
              {['S', 'M', 'L', 'XL', 'XXL'].map(s => (
                <button key={s} className="w-12 h-10 border border-border rounded-lg font-bold hover:border-primary hover:text-primary transition-colors focus:bg-primary focus:text-primary-foreground">
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <label className="block text-sm font-bold">Sleeve Type</label>
            <div className="flex gap-2">
              <button className="flex-1 py-2 border border-primary bg-primary/10 text-primary rounded-lg font-bold">Half Sleeve</button>
              <button className="flex-1 py-2 border border-border rounded-lg font-bold hover:border-primary">Full Sleeve</button>
            </div>
          </div>

          <div className="space-y-3 pt-4 border-t border-border">
            <label className="block text-sm font-bold">Upload Payment Proof</label>
            <p className="text-xs text-muted-foreground mb-2">Send 850 BDT to Admin's Number (017XXXXXXX) and upload screenshot.</p>
            <div className="border-2 border-dashed border-border rounded-xl p-6 text-center hover:bg-secondary/20 transition-colors cursor-pointer">
              <Upload className="mx-auto text-muted-foreground mb-2" size={24} />
              <p className="text-sm font-semibold">Click to upload screenshot</p>
            </div>
          </div>

          <button className="w-full py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg mt-4">
            Confirm Order & Payment
          </button>
        </div>
      </div>
    </div>
  );
}


// ----------------------------------------------------
// UI COMPONENTS
// ----------------------------------------------------
function DashboardCard({ title, value, icon }: { title: string, value: string, icon: React.ReactNode }) {
  return (
    <div className="bg-card p-6 rounded-2xl border border-border shadow-sm flex items-center gap-4">
      <div className="w-14 h-14 rounded-full bg-secondary/50 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <p className="text-sm text-muted-foreground font-medium mb-1">{title}</p>
        <p className="text-3xl font-bold">{value}</p>
      </div>
    </div>
  );
}
