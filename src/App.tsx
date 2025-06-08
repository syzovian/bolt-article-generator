import React from 'react';
import Header from './components/Header';
import ArticleForm from './components/ArticleForm';
import GenerationHistory from './components/GenerationHistory';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent"></div>
      <div
  className="absolute inset-0"
  style={{
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23DC2626' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
  }}
></div>

      <div className="relative z-10 px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <Header />
          <ArticleForm />
          <GenerationHistory />
        </div>
      </div>
    </div>
  );
}

export default App;