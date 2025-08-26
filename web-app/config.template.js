<<<<<<< HEAD
// 🔐 assismonter Configuration Template
// Copy this file to config.js and add your real API keys
// NEVER commit config.js with real keys to the repository!

window.assismonterConfig = {
=======
// 🔐 AssisMonter Configuration Template
// Copy this file to config.js and add your real API keys
// NEVER commit config.js with real keys to the repository!

window.AssisMonterConfig = {
>>>>>>> 9dc304a025d0bf816864f4336d0878bcad04fd79
  // Google Maps API Key - Replace with your real key
  googleMapsApiKey: 'YOUR_REAL_API_KEY_HERE',
  
  // Firebase configuration
  firebase: {
    projectId: 'asissmonter',
    // Add other Firebase config here
  },
  
  // App configuration
  app: {
<<<<<<< HEAD
    name: 'assismonter',
=======
    name: 'AssisMonter',
>>>>>>> 9dc304a025d0bf816864f4336d0878bcad04fd79
    version: '1.0.0',
    environment: 'production'
  }
};

// Log configuration status
<<<<<<< HEAD
console.log('🔧 assismonter Configuration Template Loaded');
console.log('📍 Google Maps API Key:', 
  window.assismonterConfig.googleMapsApiKey === 'YOUR_REAL_API_KEY_HERE' 
    ? '⚠️ Template - Replace with real key' 
    : '✅ Configured');
console.log('🌐 Environment:', window.assismonterConfig.app.environment);
=======
console.log('🔧 AssisMonter Configuration Template Loaded');
console.log('📍 Google Maps API Key:', 
  window.AssisMonterConfig.googleMapsApiKey === 'YOUR_REAL_API_KEY_HERE' 
    ? '⚠️ Template - Replace with real key' 
    : '✅ Configured');
console.log('🌐 Environment:', window.AssisMonterConfig.app.environment);
>>>>>>> 9dc304a025d0bf816864f4336d0878bcad04fd79
