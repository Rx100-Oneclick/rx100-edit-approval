import React, { useState } from 'react';
import { 
  Info, 
  Lock, 
  Shield, 
  Crosshair, 
  CheckCircle, 
  Network, 
  PenSquare,
  Plus,
  Minus,
  MoveVertical,
  Trash2,
  X,
  CircleDot,
  Search,
  ChevronUp,
  ChevronDown,
  UserPlus,
  Edit,
  MoreVertical,
  ArrowRightLeft,
  SkipForward
} from 'lucide-react';

// User type
interface User {
  id: string;
  name: string;
  avatar: string;
  email: string;
}

// Available users to assign
const availableUsers: User[] = [
  { id: '1', name: 'Marcus Chen', avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg', email: 'marcus.chen@company.com' },
  { id: '2', name: 'Sarah Jenkins', avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg', email: 'sarah.j@company.com' },
  { id: '3', name: 'Michael Rodriguez', avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg', email: 'michael.r@company.com' },
  { id: '4', name: 'Emily Watson', avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-4.jpg', email: 'emily.w@company.com' },
  { id: '5', name: 'David Kim', avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg', email: 'david.kim@company.com' },
  { id: '6', name: 'Jennifer Lopez', avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg', email: 'jennifer.l@company.com' },
  { id: '7', name: 'Robert Taylor', avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-7.jpg', email: 'robert.t@company.com' },
];

export default function App() {
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [showReasonModal, setShowReasonModal] = useState(false);
  const [showUserSelectModal, setShowUserSelectModal] = useState(false);
  const [showActionMenu, setShowActionMenu] = useState<{ level: number, userId: string } | null>(null);
  const [reasonAction, setReasonAction] = useState<{ type: 'delete' | 'skip' | 'replace', level: number, userId: string } | null>(null);
  const [currentReplaceUser, setCurrentReplaceUser] = useState<{ level: number, userId: string } | null>(null);
  const [currentAddLevel, setCurrentAddLevel] = useState<number | null>(null);
  const [reason, setReason] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showCancelConfirmModal, setShowCancelConfirmModal] = useState(false);

  // Pre-filled data - simulating an edit flow with existing assignments (5 levels)
  const [levelUsers, setLevelUsers] = useState<{ [key: number]: User }>({
    1: availableUsers[0], // Marcus Chen
    2: availableUsers[1], // Sarah Jenkins
    3: availableUsers[2], // Michael Rodriguez
    4: availableUsers[3], // Emily Watson
    5: availableUsers[4], // David Kim
  });

  // Skipped levels
  const [skippedLevels, setSkippedLevels] = useState<number[]>([]);

  // Get total levels from existing data
  const totalLevels = Object.keys(levelUsers).length;

  const handleAddLevel = () => {
    const newLevel = totalLevels + 1;
    setCurrentAddLevel(newLevel);
    setShowUserSelectModal(true);
  };

  const handleDeleteUser = (level: number, userId: string) => {
    setShowActionMenu(null);
    setReasonAction({ type: 'delete', level, userId });
    setShowReasonModal(true);
  };

  const handleSkip = (level: number, userId: string) => {
    setShowActionMenu(null);
    setReasonAction({ type: 'skip', level, userId });
    setShowReasonModal(true);
  };

  const handleReplace = (level: number, userId: string) => {
    setShowActionMenu(null);
    setReasonAction({ type: 'replace', level, userId });
    setShowReasonModal(true);
  };

  const handleSelectUser = (user: User) => {
    if (currentReplaceUser) {
      // Replace existing user
      setLevelUsers({
        ...levelUsers,
        [currentReplaceUser.level]: user
      });
      setHasUnsavedChanges(true);
      setShowUserSelectModal(false);
      setCurrentReplaceUser(null);
      setSearchQuery('');
    } else if (currentAddLevel !== null) {
      // Add new user to new level
      setLevelUsers({
        ...levelUsers,
        [currentAddLevel]: user
      });
      setHasUnsavedChanges(true);
      setShowUserSelectModal(false);
      setCurrentAddLevel(null);
      setSearchQuery('');
    }
  };

  const confirmReasonAction = () => {
    if (reason.trim()) {
      if (reasonAction?.type === 'delete') {
        // Remove user from level
        const updatedUsers = { ...levelUsers };
        delete updatedUsers[reasonAction.level];
        setLevelUsers(updatedUsers);
      } else if (reasonAction?.type === 'replace') {
        // Open user select modal to replace user
        setCurrentReplaceUser({ level: reasonAction.level, userId: reasonAction.userId });
        setShowReasonModal(false);
        setShowUserSelectModal(true);
        setReason('');
        setReasonAction(null);
        setHasUnsavedChanges(true);
        return;
      } else if (reasonAction?.type === 'skip') {
        // Mark level as skipped
        if (!skippedLevels.includes(reasonAction.level)) {
          setSkippedLevels([...skippedLevels, reasonAction.level]);
        }
      }
      
      setShowReasonModal(false);
      setReason('');
      setReasonAction(null);
      setHasUnsavedChanges(true);
    }
  };

  const cancelReasonAction = () => {
    setShowReasonModal(false);
    setReason('');
    setReasonAction(null);
  };

  const handleSaveDraft = () => {
    setHasUnsavedChanges(false);
    setShowSuccessToast(true);
    setTimeout(() => setShowSuccessToast(false), 3000);
  };

  const handleCancel = () => {
    if (hasUnsavedChanges) {
      setShowCancelConfirmModal(true);
    }
  };

  const confirmCancel = () => {
    setHasUnsavedChanges(false);
    setShowCancelConfirmModal(false);
  };

  const cancelCancel = () => {
    setShowCancelConfirmModal(false);
  };

  const filteredUsers = availableUsers.filter(user => 
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased">
      
      {/* Simple Header */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-4">
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">Edit Approval Authority</h1>
        <p className="text-slate-600 text-sm">Review and update approval configuration. Changes are saved as draft.</p>
      </div>

      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 pb-8">
        
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          
          {/* Left Column - Approval Hierarchy (Editable) */}
          <section className="md:col-span-7 xl:col-span-8">
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-slate-100 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                <h3 className="font-bold text-slate-800 flex items-center gap-2 text-sm sm:text-base">
                  Configure Hierarchy Levels
                </h3>
                <button 
                  onClick={handleAddLevel}
                  className="flex items-center gap-2 px-4 py-2 border border-slate-300 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  Add Level
                </button>
              </div>
              <div className="p-4 sm:p-6">
                {/* Single Row Format - Each user in one row */}
                <div className="space-y-2">
                  {Array.from({ length: totalLevels }, (_, i) => i + 1).map((level) => {
                    const assignedUser = levelUsers[level];
                    const isSkipped = skippedLevels.includes(level);
                    
                    return assignedUser ? (
                      <div 
                        key={level} 
                        className={`grid grid-cols-12 gap-4 items-center p-4 border rounded-lg hover:border-indigo-300 transition-colors ${isSkipped ? 'bg-slate-100 border-slate-300 opacity-60' : 'bg-white border-slate-200'}`}
                      >
                        {/* Level Number */}
                        <div className="col-span-1">
                          <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center">
                            <span className="text-white font-bold text-sm">{level}</span>
                          </div>
                        </div>

                        {/* User Info */}
                        <div className="col-span-8 flex items-center gap-3">
                          <img 
                            src={assignedUser.avatar} 
                            alt={assignedUser.name} 
                            className="w-10 h-10 rounded-full"
                          />
                          <div>
                            <p className="text-sm font-medium text-slate-800">{assignedUser.name}</p>
                            <p className="text-xs text-slate-500">{assignedUser.email}</p>
                          </div>
                          {isSkipped && (
                            <span className="ml-2 px-2 py-1 bg-yellow-100 text-yellow-700 text-xs font-semibold rounded">
                              Skipped
                            </span>
                          )}
                        </div>

                        {/* Actions */}
                        <div className="col-span-3 flex items-center justify-end gap-2">
                          {/* Action Menu Dropdown */}
                          <div className="relative">
                            <button 
                              onClick={() => setShowActionMenu(showActionMenu?.level === level && showActionMenu?.userId === assignedUser.id ? null : { level, userId: assignedUser.id })}
                              className="px-3 py-1.5 text-xs font-medium text-slate-600 border border-slate-300 hover:bg-slate-50 rounded-md transition-colors flex items-center gap-1"
                            >
                              Actions
                              <ChevronDown className="w-3 h-3" />
                            </button>
                            
                            {/* Dropdown Menu */}
                            {showActionMenu?.level === level && showActionMenu?.userId === assignedUser.id && (
                              <div className="absolute right-0 mt-1 w-32 bg-white border border-slate-200 rounded-md shadow-lg z-10">
                                <button 
                                  onClick={() => handleSkip(level, assignedUser.id)}
                                  className="w-full px-3 py-2 text-left text-xs font-medium text-slate-700 hover:bg-slate-50 flex items-center gap-2 border-b border-slate-100"
                                >
                                  <SkipForward className="w-3.5 h-3.5" />
                                  Skip
                                </button>
                                <button 
                                  onClick={() => handleReplace(level, assignedUser.id)}
                                  className="w-full px-3 py-2 text-left text-xs font-medium text-slate-700 hover:bg-slate-50 flex items-center gap-2"
                                >
                                  <ArrowRightLeft className="w-3.5 h-3.5" />
                                  Replace
                                </button>
                              </div>
                            )}
                          </div>

                          {/* Delete Button */}
                          <button 
                            onClick={() => handleDeleteUser(level, assignedUser.id)}
                            className="p-1.5 text-red-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors"
                            title="Delete User"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ) : null;
                  })}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-4 sm:px-6 py-4 border-t border-slate-100 bg-slate-50/30 flex flex-col sm:flex-row justify-end gap-3">
                <button 
                  onClick={handleCancel}
                  className="w-full sm:w-auto px-4 sm:px-6 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100 rounded-md transition-colors"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleSaveDraft}
                  className="w-full sm:w-auto px-6 sm:px-8 py-2 text-sm font-bold text-white bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 rounded-md shadow-lg shadow-indigo-200 transition-all transform active:scale-95"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </section>

          {/* Right Column - Authority Details & Scope */}
          <aside className="md:col-span-5 xl:col-span-4 space-y-6">
            
            {/* Section 1: Authority Details (Read-Only) */}
            <section className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-slate-100 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 bg-gray-50/50">
                <h3 className="font-bold text-slate-800 flex items-center gap-2 text-sm sm:text-base">
                  <Info className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400" />
                  Authority Details
                </h3>
                
              </div>
              <div className="p-4 sm:p-6">
                
                <div className="space-y-4 sm:space-y-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-600">Authority Name</label>
                    <input 
                      type="text" 
                      value="High-Risk Robot Operation Approval" 
                      className="w-full px-3 sm:px-4 py-2 rounded-md border bg-slate-100 border-slate-200 text-slate-500 cursor-not-allowed text-sm" 
                      readOnly 
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-600">Authority Type</label>
                    <input 
                      type="text" 
                      value="Operational" 
                      className="w-full px-3 sm:px-4 py-2 rounded-md border bg-slate-100 border-slate-200 text-slate-500 cursor-not-allowed text-sm" 
                      readOnly 
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-600">Description</label>
                    <textarea 
                      className="w-full px-3 sm:px-4 py-2 rounded-md border bg-slate-100 border-slate-200 text-slate-500 cursor-not-allowed text-sm h-20 resize-none" 
                      readOnly
                      value="Standard operating procedure for approving autonomous robotic activities in high-density environments or safety-critical zones."
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Scope & Applicability (Read-Only) */}
            <section className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-slate-100 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 bg-gray-50/50">
                <h3 className="font-bold text-slate-800 flex items-center gap-2 text-sm sm:text-base">
                  <Crosshair className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400" />
                  Scope & Applicability
                </h3>
                
              </div>
              <div className="p-4 sm:p-6">
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-slate-100/30 border border-slate-100">
                    <p className="text-[10px] font-bold text-slate-500 uppercase mb-2">Scope Type</p>
                    <p className="font-semibold text-slate-800 text-sm">Application</p>
                  </div>
                  <div className="p-4 rounded-lg bg-slate-100/30 border border-slate-100">
                    <p className="text-[10px] font-bold text-slate-500 uppercase mb-2">Application Name</p>
                    <p className="font-semibold text-slate-800 text-sm">Robotics Control Center (RCC)</p>
                  </div>
                  
                </div>
              </div>
            </section>

          </aside>

        </div>

        {/* Governance Clarity Panel */}
        <div className="mt-6 sm:mt-8 flex justify-center">
          <div className="flex items-start gap-2 text-xs text-slate-500 italic max-w-2xl px-4 text-center">
            
            
          </div>
        </div>

      </main>

      {/* Reason Modal */}
      {showReasonModal && (
        <div 
          className="fixed inset-0 flex items-center justify-center z-50"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        >
          <div className="bg-white rounded-lg p-6 w-[90%] max-w-md shadow-xl">
            <h3 className="text-base font-bold text-slate-800 mb-3">Provide Reason</h3>
            <p className="text-sm text-slate-500 mb-4">Please provide a reason for the action:</p>
            <textarea 
              className="w-full px-3 py-2 rounded-md border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-sm h-20 resize-none" 
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Enter reason..."
            />
            <div className="mt-4 flex justify-end gap-3">
              <button 
                onClick={cancelReasonAction}
                className="px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100 rounded-md transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={confirmReasonAction}
                disabled={!reason.trim()}
                className="px-6 py-2 text-sm font-bold text-white bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 rounded-md shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      {/* User Select Modal */}
      {showUserSelectModal && (
        <div 
          className="fixed inset-0 flex items-center justify-center z-50"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        >
          <div className="bg-white rounded-lg p-6 w-[90%] max-w-md shadow-xl">
            <h3 className="text-base font-bold text-slate-800 mb-3">Select User</h3>
            <p className="text-sm text-slate-500 mb-4">Please select a user for level {currentReplaceUser?.level || currentAddLevel}:</p>
            
            {/* Search Input */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search users..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
              />
            </div>

            {/* User List */}
            <div className="space-y-1 max-h-64 overflow-y-auto">
              {filteredUsers.map(user => (
                <div 
                  key={user.id} 
                  onClick={() => handleSelectUser(user)}
                  className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer border border-transparent hover:border-slate-200"
                >
                  <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full" />
                  <span className="text-sm font-medium text-slate-700">{user.name}</span>
                </div>
              ))}
            </div>

            {/* Cancel Button */}
            <div className="mt-5 flex justify-end">
              <button 
                onClick={() => {
                  setShowUserSelectModal(false);
                  setCurrentAddLevel(null);
                  setCurrentReplaceUser(null);
                  setSearchQuery('');
                }}
                className="px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100 rounded-md transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Toast */}
      {showSuccessToast && (
        <div 
          className="fixed bottom-4 right-4 flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-md shadow-lg"
        >
          <CheckCircle className="w-4 h-4" />
          <span>Changes saved successfully!</span>
        </div>
      )}

      {/* Cancel Confirm Modal */}
      {showCancelConfirmModal && (
        <div 
          className="fixed inset-0 flex items-center justify-center z-50"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        >
          <div className="bg-white rounded-lg p-6 w-[90%] max-w-md shadow-xl">
            <h3 className="text-base font-bold text-slate-800 mb-3">Confirm Cancel</h3>
            <p className="text-sm text-slate-500 mb-4">You have unsaved changes. Are you sure you want to cancel?</p>
            <div className="mt-4 flex justify-end gap-3">
              <button 
                onClick={cancelCancel}
                className="px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100 rounded-md transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={confirmCancel}
                className="px-6 py-2 text-sm font-bold text-white bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 rounded-md shadow-lg transition-all"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}