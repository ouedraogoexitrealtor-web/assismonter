# 🔧 AssisMonter Web App Configuration Guide

## 🚨 Current Issue: Empty Web App

The web app is currently showing as empty because it requires proper configuration of:
1. **Google Maps API Key** - For location services and maps
2. **Firebase Configuration** - For authentication and data storage
3. **Environment Variables** - For proper app initialization

## 🚀 Quick Fix Steps

### Step 1: Get Google Maps API Key
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project or select existing one
3. Enable **Maps JavaScript API**
4. Create credentials (API Key)
5. **Copy the API key**

### Step 2: Update the Web App
1. Open `web-app/index.html`
2. Find line 42: `<script src="https://maps.googleapis.com/maps/api/js?key=PLACEHOLDER_KEY_FOR_TESTING&libraries=places"></script>`
3. Replace `PLACEHOLDER_KEY_FOR_TESTING` with your actual API key

### Step 3: Configure Firebase (Optional but Recommended)
1. Go to [Firebase Console](https://console.firebase.google.com)
2. Create a new project or select existing one
3. Go to **Project Settings** → **Service Accounts**
4. Click **"Generate New Private Key"**
5. Download the JSON file
6. **Rename it to** `service-account.json`
7. **Place it in** `web-app/assets/assets/` directory

## 🔍 Why the App Was Empty

The Flutter web app requires:
- **Google Maps API** to load location services
- **Proper base href** configuration (now fixed: `/web-app/`)
- **Environment variables** for production mode

## ✅ What's Been Fixed

- ✅ **Base href** set to `/web-app/`
- ✅ **Flutter app** properly built and deployed
- ✅ **App landing page** configured correctly
- ✅ **Website integration** working properly

## 🧪 Testing the App

1. **Local Testing**: 
   ```bash
   cd assismonter/web-app
   python3 -m http.server 8000
   ```
   Then visit: http://localhost:8000/

2. **Website Integration**: 
   Visit the main website and click "Try Web App"

## 🚀 Next Steps

1. **Get a real Google Maps API key**
2. **Update the index.html file**
3. **Test the app functionality**
4. **Deploy to production**

## 📱 App Features Available

Once configured, the web app will provide:
- User authentication (login/signup)
- Driver and customer roles
- Location services and maps
- Ride booking and management
- Real-time notifications
- PWA capabilities

## 🆘 Troubleshooting

### App Still Empty?
- Check browser console for errors
- Verify API key is valid
- Ensure all files are loaded correctly
- Check network tab for failed requests

### Maps Not Loading?
- Verify Google Maps API is enabled
- Check API key restrictions
- Ensure billing is set up
- Check domain restrictions

### Firebase Errors?
- Verify service account credentials
- Check Firebase project settings
- Ensure APIs are enabled
- Check project ID configuration

---

**Need Help?** Check the main SETUP.md file or open an issue in the repository.
