import React from 'react';
import { FileText, Sparkles } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="text-center mb-12">
      <div className="flex items-center justify-center mb-6">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 rounded-full blur-lg opacity-20 animate-pulse"></div>
          <div className="relative bg-gradient-to-r from-red-600 to-red-700 p-4 rounded-full">
            <FileText className="w-8 h-8 text-white" />
          </div>
        </div>
        <Sparkles className="w-6 h-6 text-red-500 ml-3 animate-bounce" />
      </div>
      
      <h1 className="text-5xl font-bold bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent mb-4">
        Article Generator
      </h1>
      
      <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
        Transform your ideas and URLs into compelling articles with the power of AI. 
        Simply provide your content source and let our intelligent system create 
        professional articles for you.
      </p>
    </header>
  );
};

export default Header;