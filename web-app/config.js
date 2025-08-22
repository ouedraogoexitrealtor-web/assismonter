// 🔐 AssisMonter Configuration Template
// Copy this file to config.js and add your real API keys
// NEVER commit config.js with real keys to the repository!

window.AssisMonterConfig = {
  // Google Maps API Key - Replace with your real key
  googleMapsApiKey: 'AIzaSyBhrtJI_Dio-5vOsSyjFf_58cE34K3rKDE',
  
  // Firebase configuration
  firebase: {
    projectId: 'asissmonter',
    // Add other Firebase config here
  },
  
  // App configuration
  app: {
    name: 'AssisMonter',
    version: '1.0.0',
    environment: 'production'
  }
};

// Log configuration status
console.log('🔧 AssisMonter Configuration Template Loaded');
console.log('📍 Google Maps API Key:', 
  window.AssisMonterConfig.googleMapsApiKey === 'YOUR_REAL_API_KEY_HERE' 
    ? '⚠️ Template - Replace with real key' 
    : '✅ Configured');
console.log('🌐 Environment:', window.AssisMonterConfig.app.environment);
