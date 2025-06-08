import React from 'react';
import { History, ExternalLink } from 'lucide-react';

const GenerationHistory: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 rounded-full blur-md opacity-20"></div>
            <div className="relative bg-gradient-to-r from-red-600 to-red-700 p-3 rounded-full">
              <History className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
        
        <h2 className="text-4xl font-bold bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent mb-4">
          Generation History
        </h2>
        
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Track all your article generation requests and monitor their progress in real-time.
        </p>
      </div>

      <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 shadow-2xl">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center text-gray-300">
            <ExternalLink className="w-5 h-5 mr-2 text-red-500" />
            <span className="text-sm font-medium">Live Data from Airtable</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
            <span className="text-sm text-green-400">Connected</span>
          </div>
        </div>
        
        <div className="rounded-xl overflow-hidden border border-gray-600/30">
          <iframe 
            className="airtable-embed w-full" 
            src="https://airtable.com/embed/appmsBiq4QhOQjthE/shrYreTNeKfBTZhKk" 
            frameBorder="0" 
            width="100%" 
            height="533" 
            style={{ background: 'transparent', minHeight: '533px' }}
          />
        </div>
      </div>
    </section>
  );
};

export default GenerationHistory;