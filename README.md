# VisionTube

This project is a simplified version of YouTube, developed during Akshay Saini's *Namaste React* course. Built with modern web technologies, including **React**, **Redux Toolkit**, and **TailwindCSS**, it replicates the core functionalities and UI of the popular platform.

## Features

- **Video Listing**: Displays a paginated list of videos fetched via the YouTube API with lazy loading.
- **Video Preview**: Opens detailed video previews with title, description, and view count.
- **Search Suggestions**: Provides dynamic search suggestions with debouncing and caching for faster results.
- **Optimized API Calls**: Reduces redundant API requests using techniques like debouncing.
- **Comments Section**: Shows threaded comments fetched from the API.
- **Live Chat**: Offers real-time chat functionality using API polling.

## Setup

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Replace the placeholder API key in the source code with your YouTube API key.
4. Start the server with `npm start` and access the app at `http://localhost:3000`.

## Dependencies

Key dependencies include:

- React
- Redux Toolkit
- React Router DOM
- TailwindCSS
- Moment.js
- React Icons

This project showcases techniques for building responsive, feature-rich web applications and serves as a foundation for further development or learning advanced React concepts.

## Special Thanks

Special thanks to **Akshay Saini sir** for his guidance and teachings in building this project.

## Key Learnings

### Debouncing

- **Typing speed**:
  - Slow typing: 200ms delay
  - Fast typing: 30ms delay

- **Performance impact**:
  - Without debouncing:
    - Example: iPhone Pro Max
    - 14 letters * 1000 users = 14,000 API calls
  - With debouncing (200ms):
    - 3 API calls * 1000 users = 3,000 API calls

- **Implementation**:
  - If the time difference between two keystrokes is less than 200ms, decline the API call.
  - Make an API call only after 200ms of inactivity.

### Caching

- **Search efficiency**:
  - Array search: Time complexity = O(n)
  - Object search: Time complexity = O(1)

- **Example**:
  - Search suggestions:
    - ["i", "ip", "iph", "iphone"]
    - Stored as:
      ```
      {
        i: "...",
        ip: "...",
        iphone: "..."
      }
      ```
  - Use `Map()` for efficient data management.

### WebSocket vs API Polling

- API polling involves making periodic API calls to fetch updates.
- WebSocket provides real-time communication without repeated requests.

---

**Lecture watched until:** 6:03:25

