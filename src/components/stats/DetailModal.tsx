import React from 'react';
import { X } from 'lucide-react';

interface DetailModalProps {
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
  onClose: () => void;
}

export const DetailModal: React.FC<DetailModalProps> = ({ title, icon, content, onClose }) => (
  <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[100] animate-fade-in">
    <div className="bg-slate-800/90 p-8 rounded-lg shadow-xl border border-slate-700 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          {icon}
          <h3 className="text-2xl font-bold text-white font-display">{title}</h3>
        </div>
        <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">
          <X className="w-6 h-6" />
        </button>
      </div>
      <div className="space-y-6">
        {content}
      </div>
    </div>
  </div>
);