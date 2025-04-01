#!/bin/bash

# Build the site
npm run build

# Create a deployment package
cd dist
echo "Creating deployment package..."
echo "This folder contains a static site that can be deployed to any static hosting provider like Netlify, Vercel, GitHub Pages, etc."
echo "To deploy, simply upload the contents of this folder to your hosting provider."

# Create a README with deployment instructions
cat > README.md << 'EOL'
# Julian Pineda Portfolio - Deployment Instructions

This folder contains all the static files needed to deploy Julian Pineda's portfolio website.

## Deployment Options

### Option 1: Netlify/Vercel
1. Connect your Netlify/Vercel account to your GitHub repository
2. Set the build command to `npm run build`
3. Set the publish directory to `dist`

### Option 2: GitHub Pages
1. Create a new repository named `username.github.io`
2. Push the contents of this folder to the repository
3. Go to Settings > Pages and enable GitHub Pages

### Option 3: Any Static Hosting
Simply upload all the files in this folder to your web server's public directory.

## Local Testing
To test locally, you can use any static file server:

```bash
# Using npx and serve (if you have Node.js installed)
npx serve

# Using Python
python -m http.server
```

Enjoy your new portfolio site!
EOL

echo "Deployment package created successfully!"