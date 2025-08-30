Weather Status App
This is a simple web application that displays the current weather status for a user-specified city. It's built using HTML, CSS, and JavaScript and consumes a third-party weather API.
Features
 * Search for weather by city name 🏙️
 * Displays temperature and current weather status.
 * Provides a brief description of current weather conditions (e.g., "sunny," "cloudy")
 * Dynamically updates the user interface based on the retrieved data
Getting Started
Prerequisites
You'll need a modern web browser to run this application.
Installation
 * Clone the repository
 * Navigate to the project directory
 * Run a local server in the base directory (using vscode live-server etc)
API Key Setup
This project uses the OpenWeatherMap API. To make it work, you need to get your own API key.
 * Sign up for a free account at OpenWeatherMap.
 * Go to the "API keys" tab to find your personal key.
 * Open the script.js file in a text editor.
 * Replace the placeholder YOUR_API_KEY_HERE with your actual API key:
   const apiKey = "YOUR_API_KEY_HERE";
Usage
Once the page is loaded, simply enter the name of a city in the search bar and press Enter or click the search button to see the current weather.
Project Structure
 * index.html: The main HTML file that provides the structure of the web page.
 * style.css: The CSS file for styling the application.
 * script.js: The main driver script.
 * weather.js: Includes fetching data from the API and manipulates the DOM.
Contributing
Feel free to fork the repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.
License
This project is licensed under the MIT License - see the LICENSE.md file for details.
