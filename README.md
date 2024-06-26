# San Diego Coastal Paradise

Welcome to San Diego Coastal Paradise! Our app is your ultimate guide to exploring the breathtaking beaches of San Diego. Whether you're a new beach enthusiast or a seasoned beachcomber, our app provides you with all the tools you need to discover and enjoy the stunning coastline of San Diego.

## Features

- **User Authentication**: Sign up and sign in to your account to access personalized features and save your favorite beaches.
- **Remember Me**: The app remembers your login credentials, so you can seamlessly access your account every time you use the app.
- **Beach Exploration**: Explore detailed information about each beach in San Diego, including facilities, amenities, attractions, and dog-friendly policies.
- **Community Engagement**: Join our vibrant community of beach buddies to share experiences, tips, and recommendations.
- **Easy Navigation**: Use the intuitive interface to navigate between beaches and access additional features like the about us and contact pages.

## Installation

To install San Diego Coastal Paradise, follow these steps:

1. Clone this repository to your local machine: `git clone https://github.com/your-username/san-diego-coastal-paradise.git`
2. Navigate to the project directory: `cd san-diego-coastal-paradise`
3. Navigate to the backend directory: `cd backend`
4. Run the backend server: `npm run dev`
5. Open a new terminal window/tab.
6. Navigate to the frontend directory: `cd frontend`
7. Run the frontend server: `npm start`

## Usage

1. Open the app in your web browser.
2. Click on the "Join the Wave" dropdown menu.
3. If you're a new user, select "Become a Beach Buddy" and fill out the required information to join the community.
4. If you're an existing user, select "Begin Beachcombing" and enter your login credentials.
5. Explore the beaches by clicking on the "Dive In" button for detailed information about each beach.
6. Use the navigation buttons to explore other features like the about us and contact pages.

## API Endpoints

### 1. Get All login information
- **Method:** `POST`
- **Endpoint:** `/api/login`
- **Description:** Submits a match between an email and password.
- **Response:**
  ```json
  {
    "status": "success",
    "data": [
      {
        "email": "user email"
      },
      {
        "password": "user password"
      }
    ]
  }

  ### 2. Get All Items
- **Method:** `POST`
- **Endpoint:** `/api/register`
- **Description:** Submit a match between an email and password.
- **Response:**
  ```json
  {
    "status": "success",
    "data": [
      {
        "firsName": "user first name"
      },
      {
        "lastName": "user last name"
      }
      {
        "email": "user email"
      },
      {
        "password": "user password"
      }
    ]
  }

## Dependencies

```json
{
  "dependencies": {
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^1.6.8",
    "bootstrap": "^5.3.3",
    "react": "^18.2.0",
    "react-bootstrap": "^2.10.2",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.22.3",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  }
}
## Contributing

We welcome contributions from the community! If you'd like to contribute to San Diego Coastal Paradise, please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and ensure that tests pass.
4. Submit a pull request with a clear description of your changes.

## Future Goals

As we continue to develop San Diego Coastal Paradise, we have several goals in mind to enhance the user experience and functionality of the app. Here are some of our future goals:

### User Rating and Comments

We plan to implement a feature that allows users to rate and leave comments on their experiences at each beach. This will provide valuable feedback for other users and help enhance the community engagement aspect of the app.

### Enhanced Community Interaction

In addition to rating and comments, we aim to introduce features that facilitate interactions among community members, such as forums, event postings, and user-generated content sharing.

### Personalized Recommendations

We aspire to provide personalized beach recommendations based on user preferences, previous interactions with the app, and community feedback. This will make the app even more tailored to each user's interests and preferences.

### Accessibility Improvements

To ensure inclusivity, we are committed to improving the accessibility of the app for users with disabilities. This includes optimizing the app for screen readers, improving keyboard navigation, and providing alternative text for images.

### Performance Optimization

Continuously optimizing the performance of the app is one of our priorities. We aim to reduce loading times, improve server response times, and optimize resource usage to provide a seamless and responsive user experience.

We are excited about these future developments and are committed to making San Diego Coastal Paradise the ultimate guide for exploring the beautiful beaches of San Diego.


Contributors:
  Carlos Hernandez - frontend, backend contributions, UX/UI
  Lucia Sotelo - frontend, backend contributions, UX/UI

## License

This project is licensed under the MIT License.

## Contact

If you have any questions, feedback, or suggestions, feel free to contact us at [info@sdcoastalparadise.com](mailto:info@sdcoastalparadise.com).

## About

San Diego Coastal Paradise was created with the aim of providing beach enthusiasts with a comprehensive guide to the stunning beaches of San Diego. Our goal is to make it easy for both locals and visitors to discover, explore, and enjoy the beauty of San Diego's coastline.



