// 🔐 assismonter Configuration Template
// Copy this file to config.js and add your real API keys
// NEVER commit config.js with real keys to the repository!

window.assismonterConfig = {
  // Google Maps API Key - Replace with your real key
  googleMapsApiKey: 'AIzaSyBhrtJI_Dio-5vOsSyjFf_58cE34K3rKDE',
  
  // Firebase configuration
  firebase: {
    projectId: 'asissmonter',
    // Add other Firebase config here
  },
  
  // App configuration
  app: {
    name: 'assismonter',
    version: '1.0.0',
    environment: 'production'
  }
};

// Log configuration status
console.log('🔧 assismonter Configuration Template Loaded');
console.log('📍 Google Maps API Key:', 
  window.assismonterConfig.googleMapsApiKey === 'YOUR_REAL_API_KEY_HERE' 
    ? '⚠️ Template - Replace with real key' 
    : '✅ Configured');
console.log('🌐 Environment:', window.assismonterConfig.app.environment);
