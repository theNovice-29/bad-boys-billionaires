# BullsEye - Live Market Dashboard

BullsEye is a dynamic web application designed for tracking real-time financial market data. Leveraging APIs from TradingView and MarketAux, it provides users with up-to-date information on stock prices, market trends, and relevant news articles.

# Features

Real-time Market Data: Display live prices and trends for major indices like NASDAQ, S&P 500, Dow Jones, Nikkei, and more.
Stock Specific Data: Access detailed price information for popular stocks such as Apple, Google, Microsoft, Amazon, and others.
News Feed: Stay informed with the latest financial news and top stories directly relevant to your stocks of interest.
Interactive Charts: Analyze stock performance with customizable charts provided by TradingView.
User-Friendly Interface: A sleek, responsive design ensures that all information is accessible on a variety of devices.
Technology Stack

React: Used for building the user interface.
TradingView API: Integrates financial charts and market data.
MarketAux API: Fetches and displays news and stock data.
CSS: For styling the application.
Netlify/Heroku: Recommended platforms for deployment.
Getting Started

# Prerequisites
 
Ensure you have Node.js and npm installed:

bash
node --version
npm --version

#Installation
Clone the repository and install the dependencies:


git clone https://github.com/theNovice-29/bullseye-market-dashboard.git
cd bullseye-market-dashboard
npm install
API Keys
You will need to obtain API keys from TradingView and MarketAux. Place these keys in a .env file at the root of your project:

plaintext
REACT_APP_TRADINGVIEW_KEY=your_tradingview_api_key
REACT_APP_MARKETAUX_KEY=your_marketaux_api_key
Running the Application
Start the development server:

bash
npm start
The application will be available at http://localhost:3000.


# Contributing

Contributions are welcome! For major changes, please open an issue first to discuss what you would like to change.


Project Link: https://github.com/theNovice-29/bullseye-market-dashboard
