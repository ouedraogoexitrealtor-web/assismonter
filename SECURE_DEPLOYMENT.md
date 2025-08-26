# 🔐 Secure Deployment Guide for AssisMonter

## 🚨 **IMPORTANT: Never Commit API Keys to Public Repository!**

This guide shows you how to deploy AssisMonter with real API keys while keeping them secure.

## 🛡️ **Security Solutions**

### **Solution 1: Environment Variables (Recommended)**

#### For Local Development:
```bash
# Create a .env file (NEVER commit this!)
echo "GOOGLE_MAPS_API_KEY=AIzaSyBhrtJI_Dio-5vOsSyjFf_58cE34K3rKDE" > .env

# Start server with environment variables
GOOGLE_MAPS_API_KEY=AIzaSyBhrtJI_Dio-5vOsSyjFf_58cE34K3rKDE python3 -m http.server 8000 --directory web-app
```

#### For Production Deployment:
```bash
# Set environment variable before starting server
export GOOGLE_MAPS_API_KEY=AIzaSyBhrtJI_Dio-5vOsSyjFf_58cE34K3rKDE
python3 -m http.server 8000 --directory web-app
```

### **Solution 2: URL Parameters (For Testing)**

You can test the app by passing the API key as a URL parameter:

```
http://localhost:8000/?api_key=AIzaSyBhrtJI_Dio-5vOsSyjFf_58cE34K3rKDE
```

**⚠️ Warning**: This method exposes the key in the URL and should only be used for testing.

### **Solution 3: Build-Time Configuration**

Rebuild the Flutter app with your API key:

```bash
flutter build web --release \
  --base-href "/web-app/" \
  --dart-define=ENVIRONMENT=production \
  --dart-define=GOOGLE_MAPS_API_KEY=AIzaSyBhrtJI_Dio-5vOsSyjFf_58cE34K3rKDE
```

**⚠️ Warning**: This embeds the key in the build, but since you're deploying to a public repo, it will still be exposed.

## 🌐 **Deployment Options**

### **Option 1: GitHub Pages (Public Repo - Use Solution 1)**
1. Set up GitHub Actions to build with environment variables
2. Use GitHub Secrets to store your API key
3. Build and deploy automatically

### **Option 2: Netlify (Public Repo - Use Solution 1)**
1. Connect your GitHub repository
2. Set environment variables in Netlify dashboard
3. Deploy automatically

### **Option 3: Vercel (Public Repo - Use Solution 1)**
1. Connect your GitHub repository
2. Set environment variables in Vercel dashboard
3. Deploy automatically

### **Option 4: Private Repository (Safest)**
1. Make your repository private
2. Use any of the solutions above
3. API keys will never be exposed

## 🚀 **Quick Setup for Your API Key**

### **Step 1: Test Locally with Your Key**
```bash
cd assismonter/web-app
GOOGLE_MAPS_API_KEY=AIzaSyBhrtJI_Dio-5vOsSyjFf_58cE34K3rKDE python3 -m http.server 8000
```

### **Step 2: Visit the App**
Open: http://localhost:8000/

### **Step 3: Check Console**
Open browser console to see:
- ✅ Configuration loaded
- ✅ Google Maps API loaded with configured key

## 🔒 **Security Best Practices**

1. **Never commit `.env` files**
2. **Use environment variables in production**
3. **Restrict API key usage by domain**
4. **Monitor API usage regularly**
5. **Rotate keys periodically**

## 📋 **Environment Variables Reference**

| Variable | Description | Example |
|----------|-------------|---------|
| `GOOGLE_MAPS_API_KEY` | Google Maps JavaScript API key | `AIzaSyBhrtJI_Dio-5vOsSyjFf_58cE34K3rKDE` |
| `FIREBASE_PROJECT_ID` | Firebase project identifier | `asissmonter` |

## 🆘 **Troubleshooting**

### **API Key Not Working?**
- Check if environment variable is set: `echo $GOOGLE_MAPS_API_KEY`
- Verify key is valid in Google Cloud Console
- Check browser console for errors

### **Maps Still Not Loading?**
- Ensure Maps JavaScript API is enabled
- Check API key restrictions
- Verify billing is set up

---

**Remember**: Your API key `AIzaSyBhrtJI_Dio-5vOsSyjFf_58cE34K3rKDE` should never appear in the public repository code!
