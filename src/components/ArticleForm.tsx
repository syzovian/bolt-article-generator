import React, { useState } from 'react';
import { Send, Link, Lightbulb, Loader2 } from 'lucide-react';

const ArticleForm: React.FC = () => {
  const [inputType, setInputType] = useState<'url' | 'idea'>('idea');
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;

    setIsLoading(true);
    setStatus('idle');

    try {
      const response = await fetch('https://hook.us2.make.com/suqftcd73jjw2zkvzoq4fu0a6h5tg2j5', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: inputType,
          content: content.trim(),
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setStatus('success');
        setContent('');
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mb-16">
      <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 shadow-2xl">
        {/* Input Type Toggle */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-900/50 p-1 rounded-xl border border-gray-700/50">
            <button
              onClick={() => setInputType('idea')}
              className={`flex items-center px-6 py-3 rounded-lg transition-all duration-300 ${
                inputType === 'idea'
                  ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
              }`}
            >
              <Lightbulb className="w-5 h-5 mr-2" />
              Idea
            </button>
            <button
              onClick={() => setInputType('url')}
              className={`flex items-center px-6 py-3 rounded-lg transition-all duration-300 ${
                inputType === 'url'
                  ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
              }`}
            >
              <Link className="w-5 h-5 mr-2" />
              URL
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="inline-flex items-center text-lg font-medium text-gray-200 mb-4">
              {inputType === 'url' ? (
                <>
                  <Link className="w-5 h-5 mr-2 text-red-500" />
                  Enter URL to generate article from
                </>
              ) : (
                <>
                  <Lightbulb className="w-5 h-5 mr-2 text-red-500" />
                  Enter your article idea
                </>
              )}
            </label>
            
            <div className="relative">
              {inputType === 'url' ? (
                <input
                  type="url"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="https://example.com/article-to-analyze"
                  className="w-full px-6 py-4 bg-gray-900/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 focus:outline-none transition-all duration-300 text-lg"
                  disabled={isLoading}
                />
              ) : (
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Describe your article idea here... For example: 'The future of artificial intelligence in healthcare' or 'Best practices for remote team management'"
                  rows={4}
                  className="w-full px-6 py-4 bg-gray-900/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 focus:outline-none transition-all duration-300 resize-none text-lg"
                  disabled={isLoading}
                />
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex flex-col items-center space-y-4">
            <button
              type="submit"
              disabled={!content.trim() || isLoading}
              className="flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:transform-none disabled:shadow-none disabled:cursor-not-allowed text-lg"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Generating Article...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Generate Article
                </>
              )}
            </button>

            {/* Status Messages */}
            {status === 'success' && (
              <div className="flex items-center text-green-400 bg-green-400/10 px-6 py-3 rounded-lg border border-green-400/20">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                Article generation request submitted successfully!
              </div>
            )}
            
            {status === 'error' && (
              <div className="flex items-center text-red-400 bg-red-400/10 px-6 py-3 rounded-lg border border-red-400/20">
                <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                Failed to submit request. Please try again.
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ArticleForm;