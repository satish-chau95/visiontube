This project is a simplified version of YouTube, developed during Akshay Saini's Namaste React course. Built with modern web technologies, including React, Redux Toolkit, and TailwindCSS, it replicates the core functionalities and UI of the popular platform.

Features
Video Listing: Displays a paginated list of videos fetched via the YouTube API with lazy loading.
Video Preview: Opens detailed video previews with title, description, and view count.
Search Suggestions: Provides dynamic search suggestions with debouncing and caching for faster results.
Optimized API Calls: Reduces redundant API requests using techniques like debouncing.
Comments Section: Shows threaded comments fetched from the API.
Live Chat: Offers real-time chat functionality using API polling.
Setup
Clone the repository.
Install dependencies with npm install.
Replace the placeholder API key in the source code with your YouTube API key as GOOGLE_API_KEY=<YOUR_API_KEY>.
Start the server with npm start and access the app at http://localhost:3000.
Dependencies
Key dependencies include:

React
Redux Toolkit
React Router DOM
TailwindCSS
Moment.js
React Icons
This project showcases techniques for building responsive, feature-rich web applications and serves as a foundation for further development or learning advanced React concepts.


Special Thanks to Akshay Saini sir for helping to build this site

Key Learnings during lecture
{
    Debouncing:

typing slow = 200ms
typing fast = 30ms

Performance:
 - iphone pro max = 14 letter * 1000 = 14000
 - with Debouncing = 3 API calls * 1000 = 3000

 Debouncing wuth 200ms
 - if difference b/w 2 key strokes is < 200ms DECLINE API calls
 . 200ms make an API call

 catche:
 time complexity to search in array = O(n)
 time complexity to search in object = O(1)

[i, ip, iph, iphone]
{
    i:
    ip:
    iphone:
}
new Map();

 watched - 6:03:25
 
 Web sochet vs Api Polling
}# visiontube
