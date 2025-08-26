# 🔐 Secure Setup Guide for AssisMonter

## ⚠️ Important Security Notice

This repository is designed to be **publicly accessible** while maintaining security. Follow these steps to set up your project safely.

## 🚀 Quick Setup

### 1. Clone the Repository
```bash
git clone https://github.com/ouedraogoexitrealtor-web/assismonter.git
cd assismonter
```

### 2. Configure Firebase (Required)
1. Go to [Firebase Console](https://console.firebase.google.com)
2. Create a new project or select existing one
3. Go to **Project Settings** → **Service Accounts**
4. Click **"Generate New Private Key"**
5. Download the JSON file
6. **Rename it to** `service-account.json`
7. **Place it in** `web-app/assets/assets/` directory

### 3. Update Google Maps API Key
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Enable Maps JavaScript API
3. Create credentials (API Key)
4. Open `web-app/index.html`
5. Replace `YOUR_API_KEY_HERE` with your actual API key

### 4. Configure Environment Variables
Create a `.env` file in the root directory:
```env
FIREBASE_PROJECT_ID=your-project-id
GOOGLE_MAPS_API_KEY=your-maps-api-key
```

## 🔒 Security Features

- ✅ **No hardcoded credentials** in source code
- ✅ **Template files** for configuration
- ✅ **Comprehensive .gitignore** protection
- ✅ **Environment variable support**
- ✅ **Secure deployment ready**

## 🌐 Deployment

### Option 1: GitHub Pages (Free)
1. Make repository public
2. Go to Settings → Pages
3. Select source branch (main)
4. Set custom domain if needed

### Option 2: Netlify (Free)
1. Connect GitHub account
2. Import repository
3. Deploy automatically
4. Set custom domain

### Option 3: Vercel (Free)
1. Connect GitHub account
2. Import repository
3. Deploy automatically
4. Set custom domain

## 📱 Customization

- **Colors**: Edit `styles.css` variables
- **Content**: Modify `index.html`
- **Functionality**: Update `script.js`
- **Branding**: Replace logos and images

## 🆘 Troubleshooting

### Website Not Loading
- Check if `service-account.json` exists
- Verify Google Maps API key is set
- Ensure all files are in correct locations

### Firebase Errors
- Verify service account credentials
- Check Firebase project settings
- Ensure APIs are enabled

### API Key Issues
- Verify Google Cloud Console settings
- Check API quotas and billing
- Ensure domain restrictions are correct

## 📞 Support

For issues or questions:
- Check [Firebase Documentation](https://firebase.google.com/docs)
- Review [Google Maps API Docs](https://developers.google.com/maps/documentation)
- Open an issue in this repository

---

**Remember**: Never commit `service-account.json` or any files with real credentials to version control!
