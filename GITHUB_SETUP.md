# GitHub Setup Instructions

## Step 1: Create a GitHub Repository

1. Go to https://github.com/new
2. Create a new repository named `fouryou` (or your preferred name)
3. Choose **Public** for GitHub Pages to work
4. Do NOT initialize with README (we already have one)
5. Click **Create repository**

## Step 2: Push Code to GitHub

After creating the repository, you'll see instructions. Follow these commands:

```bash
# Navigate to project folder
cd path/to/fouryou

# Initialize git
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: FourYou portfolio website with contact form and project showcase"

# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/fouryou.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Settings → Pages (left sidebar)
3. Under "Build and deployment":
   - Source: Deploy from a branch
   - Branch: main
   - Folder: / (root)
4. Click Save
5. Wait 1-2 minutes for deployment

Your site will be live at: `https://YOUR_USERNAME.github.io/fouryou`

## Step 4: Custom Domain (Optional)

To use a custom domain:
1. Purchase domain from GoDaddy, Namecheap, etc.
2. In GitHub Pages settings, add custom domain
3. Update DNS records at your domain provider

Contact us at **hellofouryou.in@gmail.com** for hosting consultation!

---

**Questions?** Email: hellofouryou.in@gmail.com
