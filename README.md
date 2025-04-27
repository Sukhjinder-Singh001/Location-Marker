📍 React Native Google Maps with Firebase Integration
This project is a React Native application that integrates Google Maps with Firebase Firestore.

Users can:

Drop markers on the map by tapping.

Save marker location and label(Labels you need to add because location from lat long feature is PAID) in Firebase Firestore.


Fetch and display saved markers even after app reload.

Delete markers by tapping (and remove from Firestore).

Bonus: Search for markers using coordinates or label names.

Security Note: All sensitive keys (Google Maps API Key, Firebase config) are safely stored in .env file.
.env file is NOT uploaded to GitHub (as per security best practices).

✨ Features
🔵 Add markers by tapping on map.

🔵 Save marker's latitude, longitude, and label to Firestore.

🔵 Fetch markers automatically on app start.

🔵 Delete markers on tap.

🔎 Bonus: Search markers by coordinates or labels.

🎨 Custom App Icon and App Name.

✅ Validations and clean reusable components.

🔒 Environment variables used for security (.env).

🚀 Setup Instructions
Clone the Repository

git clone https://github.com/Sukhjinder-Singh001/Location-Marker.git
cd Location-Marker

Install Dependencies
npm install

Set up Environment Variables

Create a .env file at the root of the project with your keys:

FIREBASE_API_KEY=AIzaSyCpzuO4L_fJe-KjsXAjrKw-4CjUyK2e9PI
FIREBASE_AUTH_DOMAIN=mapmarker-fa0ea.firebaseapp.com
FIREBASE_PROJECT_ID=mapmarker-fa0ea
FIREBASE_STORAGE_BUCKET=mapmarker-fa0ea.firebasestorage.app
FIREBASE_MESSAGING_SENDER_ID=598299853521
FIREBASE_APP_ID=1:598299853521:web:13b37d58c278711e7dbbf0
FIREBASE_MEASUREMENT_ID=G-SW3WFN09C1
FIREBASE_MESSAGING_SENDER_ID=598299853521
GOOGLE_MAPS_API_KEY=AIzaSyAujUnBSCOPa_jyoKXCvOGpd-_awjUjelo

⚡ Important:
.env file is NOT committed to GitHub.
Make sure to manually create it before running the app.

Run the Project

npx react-native run-android

🛠 Technology Stack
React Native (CLI)

Firebase Firestore

react-native-maps

@react-native-community/geolocation

dotenv for React Native (react-native-dotenv)

TypeScript 

🔥 Bonus Features Included
Search markers by label name or coordinates.

Label input during marker creation.

App icon and app name updated for production feel.

Complete coding standards: reusability, clean code, validation.

