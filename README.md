# RepTrack

**RepTrack** is a cutting-edge fitness app that uses computer vision to track and count your push-ups in real-time. The backend is powered by Python with OpenCV and MediaPipe, while the frontend is crafted using React Native with Expo. RepTrack helps you perfect your form and keep count effortlessly as you work out.

## Features

- Real-time push-up detection and counting
- Intuitive mobile interface built with React Native
- Backend powered by Python, OpenCV, and MediaPipe
- Provides visual feedback on your form

## Prerequisites

- Python 3.x
- Node.js and npm
- Expo CLI
- Flask (Python library)
- OpenCV and MediaPipe (Python libraries)

## Installation

### Backend (Python)
1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/reptrack.git
    cd reptrack/backend
    ```

2. Install the required Python libraries:
    ```bash
    pip install -r requirements.txt
    ```

3. Run the Flask server:
    ```bash
    python app.py
    ```

### Frontend (React Native)
1. Navigate to the `frontend` directory:
    ```bash
    cd ../frontend
    ```

2. Install the required npm packages:
    ```bash
    npm install
    ```

3. Start the Expo project:
    ```bash
    expo start
    ```

## Usage

1. Ensure your Python backend server is running:
    ```bash
    python app.py
    ```

2. Start the Expo development server:
    ```bash
    expo start
    ```

3. Open the Expo Go app on your mobile device and scan the QR code to load the app.

4. The app will display the real-time count of push-ups and the current stage (either "up" or "down").

## How It Works

- The Python backend uses OpenCV to access the webcam and MediaPipe to detect body landmarks.
- The angle between the shoulder, elbow, and wrist is calculated to determine the stage of the push-up.
- The Flask API sends the real-time count and stage to the React Native frontend.
- The React Native frontend periodically fetches data from the Flask API and displays it to the user.

## Project Structure
reptrack/
│
├── backend/ # Python backend files
│ ├── app.py # Flask API server
│ └── requirements.txt # Python dependencies
│
└── fitTrack/ # React Native frontend files
├── App.js # Main React Native component
├── package.json # Node.js dependencies
└── ...


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments
- [OpenCV](https://opencv.org/)
- [MediaPipe](https://mediapipe.dev/)
- [Expo](https://expo.dev/)
- [Flask](https://flask.palletsprojects.com/)
