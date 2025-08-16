@echo off
REM Sly's Chronicles Website Deployment Script for Windows
REM This script builds and deploys the website to Firebase Hosting

echo 🚀 Starting deployment of Sly's Chronicles Website...

REM Check if Firebase CLI is installed
firebase --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Firebase CLI is not installed. Please install it first:
    echo    npm install -g firebase-tools
    pause
    exit /b 1
)

REM Check if user is logged in to Firebase
firebase projects:list >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Not logged in to Firebase. Please login first:
    echo    firebase login
    pause
    exit /b 1
)

echo ✅ Firebase CLI is ready

REM Install dependencies
echo 📦 Installing dependencies...
call npm install

if %errorlevel% neq 0 (
    echo ❌ Failed to install dependencies
    pause
    exit /b 1
)

REM Build the project
echo 🔨 Building the project...
call npm run build

if %errorlevel% neq 0 (
    echo ❌ Build failed
    pause
    exit /b 1
)

echo ✅ Build completed successfully

REM Deploy to Firebase
echo 🚀 Deploying to Firebase Hosting...
call firebase deploy --only hosting

if %errorlevel% neq 0 (
    echo ❌ Deployment failed
    pause
    exit /b 1
)

echo 🎉 Deployment completed successfully!
echo 🌐 Your website is now live on Firebase Hosting
echo 📱 Check the Firebase console for your hosting URL

pause

