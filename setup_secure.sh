#!/bin/bash

echo "🔐 AssisMonter Secure Setup Script"
echo "=================================="
echo ""

# Check if config.js exists
if [ -f "web-app/config.js" ]; then
    echo "⚠️  config.js already exists. Backing up..."
    cp web-app/config.js web-app/config.js.backup
fi

# Create config.js from template
echo "📝 Creating config.js from template..."
cp web-app/config.template.js web-app/config.js

echo ""
echo "✅ Configuration file created!"
echo ""
echo "🔑 Next Steps:"
echo "1. Edit web-app/config.js"
echo "2. Replace 'YOUR_REAL_API_KEY_HERE' with your actual API key:"
echo "   AIzaSyBhrtJI_Dio-5vOsSyjFf_58cE34K3rKDE"
echo "3. Save the file"
echo "4. Test the app locally"
echo ""
echo "🚨 IMPORTANT:"
echo "- Never commit config.js with real keys to git"
echo "- Use environment variables in production"
echo "- Check SECURE_DEPLOYMENT.md for deployment options"
echo ""

# Ask if user wants to edit the file now
read -p "Would you like to edit config.js now? (y/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    if command -v code &> /dev/null; then
        code web-app/config.js
    elif command -v nano &> /dev/null; then
        nano web-app/config.js
    elif command -v vim &> /dev/null; then
        vim web-app/config.js
    else
        echo "Please edit web-app/config.js manually with your preferred editor"
    fi
fi

echo ""
echo "🎯 To test the app:"
echo "cd web-app"
echo "GOOGLE_MAPS_API_KEY=AIzaSyBhrtJI_Dio-5vOsSyjFf_58cE34K3rKDE python3 -m http.server 8000"
echo ""
echo "🌐 Then visit: http://localhost:8000/"
