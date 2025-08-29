// import React, { useState } from 'react';
// import CandidateSignup from './CandidateSignup';
// import CompanySignup from './CompanySignup';

// const Selector = () => {
//   const [role, setRole] = useState('candidate');

//   return (
//     <div>
//       <button onClick={() => setRole('candidate')}>Candidate</button>
//       <button onClick={() => setRole('company')}>Company</button>
//       <hr />
//       {role === 'candidate' ? <CandidateSignup /> : <CompanySignup />}
//     </div>
//   );
// };

// export default Selector;


import React, { useState } from 'react';
import CandidateSignup from './CandidateSignup';
import CompanySignup from './CompanySignup';
import { Link } from 'react-router-dom';

const SignupSelector = () => {
  const [role, setRole] = useState('candidate');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      {/* Navigation Bar */}
      <nav className={`border-b transition-colors duration-300 ${
        isDarkMode 
          ? 'border-gray-700 bg-gray-900/95 backdrop-blur-sm' 
          : 'border-gray-200 bg-white/95 backdrop-blur-sm shadow-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center space-x-3">
              <div className={`w-10 h-10 border-2 rounded-lg flex items-center justify-center ${
                isDarkMode ? 'border-gray-300 bg-gray-800' : 'border-gray-700 bg-gray-100'
              }`}>
                <span className={`font-bold text-lg ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-800'
                }`}>R</span>
              </div>
              <span className={`text-2xl font-bold ${
                isDarkMode ? 'text-gray-100' : 'text-gray-900'
              }`}>ResumeExpert</span>
            </Link>

            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-colors duration-300 ${
                  isDarkMode
                    ? 'text-gray-300 hover:text-gray-100 hover:bg-gray-800'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {isDarkMode ? '☀️' : '🌙'}
              </button>
              <Link
                to="/login"
                className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                  isDarkMode 
                    ? 'text-gray-300 hover:text-gray-100' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex items-center justify-center px-6 py-12">
        <div className={`w-full max-w-2xl space-y-8 ${
          isDarkMode ? 'text-gray-100' : 'text-gray-900'
        }`}>
          {/* Header */}
          <div className="text-center">
            <div className={`w-20 h-20 mx-auto rounded-2xl flex items-center justify-center mb-6 ${
              isDarkMode ? 'bg-gray-800 border border-gray-600' : 'bg-gray-100 border border-gray-200'
            }`}>
              <span className="text-4xl">✨</span>
            </div>
            <h2 className="text-4xl font-bold mb-2">Join ResumeExpert</h2>
            <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Create your account and start your journey
            </p>
          </div>

          {/* Role Selection Card */}
          <div className={`rounded-2xl shadow-xl border p-8 transition-colors duration-300 ${
            isDarkMode 
              ? 'bg-gray-800 border-gray-600' 
              : 'bg-white border-gray-200'
          }`}>
            {/* Role Toggle Buttons */}
            <div className="mb-8">
              <h3 className={`text-lg font-semibold mb-4 text-center ${
                isDarkMode ? 'text-gray-200' : 'text-gray-700'
              }`}>
                I want to join as a...
              </h3>
              
              <div className={`flex rounded-xl p-1 transition-colors duration-300 ${
                isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
              }`}>
                <button
                  onClick={() => setRole('candidate')}
                  className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    role === 'candidate'
                      ? isDarkMode
                        ? 'bg-gray-200 text-gray-900 shadow-lg'
                        : 'bg-gray-900 text-white shadow-lg'
                      : isDarkMode
                      ? 'text-gray-300 hover:text-gray-100'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-xl">👨‍💻</span>
                    <span>Developer</span>
                  </div>
                </button>
                
                <button
                  onClick={() => setRole('company')}
                  className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    role === 'company'
                      ? isDarkMode
                        ? 'bg-gray-200 text-gray-900 shadow-lg'
                        : 'bg-gray-900 text-white shadow-lg'
                      : isDarkMode
                      ? 'text-gray-300 hover:text-gray-100'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-xl">🏢</span>
                    <span>Company</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Role Description */}
            <div className={`rounded-xl p-6 mb-6 transition-colors duration-300 ${
              isDarkMode ? 'bg-gray-700/50' : 'bg-gray-50'
            }`}>
              {role === 'candidate' ? (
                <div className="text-center">
                  <h4 className={`font-semibold text-lg mb-2 ${
                    isDarkMode ? 'text-gray-100' : 'text-gray-900'
                  }`}>
                    For Developers & Tech Professionals
                  </h4>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Connect your GitHub & LeetCode, get AI skill analysis, and discover perfect job opportunities.
                  </p>
                  <div className="flex justify-center space-x-6 mt-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <span>📊</span>
                      <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>AI Analysis</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span>🎯</span>
                      <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Smart Matching</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span>📝</span>
                      <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Auto Resume</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <h4 className={`font-semibold text-lg mb-2 ${
                    isDarkMode ? 'text-gray-100' : 'text-gray-900'
                  }`}>
                    For Companies & Recruiters
                  </h4>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Post jobs, access pre-screened candidates, and use AI-powered tools to hire the best talent.
                  </p>
                  <div className="flex justify-center space-x-6 mt-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <span>💼</span>
                      <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Post Jobs</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span>🔍</span>
                      <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>AI Screening</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span>⭐</span>
                      <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Top Talent</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Signup Component Container */}
            <div className={`rounded-xl border transition-colors duration-300 ${
              isDarkMode ? 'border-gray-600 bg-gray-700/30' : 'border-gray-200 bg-gray-50/50'
            }`}>
              {role === 'candidate' ? (
                <CandidateSignup isDarkMode={isDarkMode} />
              ) : (
                <CompanySignup isDarkMode={isDarkMode} />
              )}
            </div>
          </div>

          {/* Footer Links */}
          <div className="text-center space-y-4">
            <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Already have an account?
            </div>
            <Link
              to="/login"
              className={`inline-block px-6 py-2 rounded-lg font-medium transition-colors duration-200 ${
                isDarkMode 
                  ? 'text-gray-300 hover:text-gray-100 hover:bg-gray-800' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              Sign in here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupSelector;
