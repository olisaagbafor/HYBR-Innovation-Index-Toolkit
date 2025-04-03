'use client';

import React, { useState } from 'react';
import InnovationForm from './components/InnovationForm';
import ResultsVisualization from './components/ResultsVisualization';

export default function Home() {
  const [scores, setScores] = useState<{ [key: string]: number } | null>(null);

  const handleFormSubmit = (data: { [key: string]: number }) => {
    setScores(data);
    // Smooth scroll to top when showing results
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto py-12 px-4">
        <header className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 relative">
              Innovation Index Toolkit
              <div className="absolute -right-8 -top-8 w-16 h-16 bg-blue-500/10 rounded-full blur-xl" />
              <div className="absolute -left-8 -bottom-8 w-16 h-16 bg-blue-500/10 rounded-full blur-xl" />
            </h1>
          </div>
          <p className="text-xl text-gray-600 mt-4 relative z-10">
            Assess and enhance your organization&apos;s innovation capabilities through our comprehensive evaluation tool.
          </p>
        </header>

        <div className="relative">
          {/* Background decorative elements */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply opacity-70 animate-blob" />
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply opacity-70 animate-blob animation-delay-2000" />
          </div>

          <div className="transition-all duration-500 ease-in-out">
            {!scores ? (
              <div className="transform transition-all duration-500 ease-in-out">
                <InnovationForm onSubmit={handleFormSubmit} />
              </div>
            ) : (
              <div className="transform transition-all duration-500 ease-in-out">
                <ResultsVisualization scores={scores} />
                <div className="text-center mt-12">
                  <button
                    onClick={() => setScores(null)}
                    className="inline-flex items-center px-6 py-3 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium transition-all duration-200 group"
                  >
                    <svg
                      className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                      />
                    </svg>
                    Take Assessment Again
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
