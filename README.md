# Stock Price Checker

## Description

Simply enter the stock symbol (e.g., AAPL) and get instant access to the latest stock information. Designed with a sleek user interface using TailwindCSS, this tool helps you stay updated with stock market trends effortlessly.

## Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/nexuslifeline/stock-price-app.git
   cd stock-price-app
   ```

2. Install Dependencies

Use npm or yarn to install the project dependencies:

```bash
npm install
```

or

```bash
yarn install
```

## Configuration

To configure environment variables for your Next.js app, follow these steps:

### 1. Create a `.env.local` File

In the root of your project, create a file named `.env.local`. This file is used to store environment-specific variables that should not be committed to version control.

**Note:** Ensure that this file is added to your `.gitignore` to prevent it from being tracked by Git.

### 2. Add Environment Variables

Open the `.env.local` file and add the following line:

```env
NEXT_PUBLIC_FINNHUB_API_KEY=your_finnhub_api_key_here
```

### 3. Obtain an API Key from Finnhub.io

To use the Stock Price Checker, you will need an API key from Finnhub.io. Follow these steps to obtain your API key:

1. **Visit Finnhub.io**

   Go to [Finnhub.io](https://finnhub.io/).

2. **Sign Up or Log In**

   - Click on the **Sign Up** button to create a free account if you don't already have one.
   - If you have an existing account, click **Log In** to access your account.

3. **Navigate to the API Dashboard**

   After logging in, go to your API dashboard by clicking on your profile icon at the top right corner and selecting **API Dashboard** from the dropdown menu.

4. **Generate Your API Key**

   - In the API Dashboard, locate the **API Key** section.
   - Your API key will be listed here. If an API key is not already generated, click the button to generate one.

5. **Copy Your API Key**

   - Copy the provided API key by clicking the copy icon next to it.

6. **Add Your API Key to Your Project**

   - Open your project’s `.env.local` file.
   - Add the following line, replacing `your_finnhub_api_key_here` with the API key you copied:

   ```env
   NEXT_PUBLIC_FINNHUB_API_KEY=your_finnhub_api_key_here
   ```

7. **Save the File**

   Save your changes to the .env.local file. Your application is now configured to use the Finnhub.io API.

## Running the Application Locally

To run the application locally, follow these steps:

1. **Start the Development Server**

   After installing dependencies and configuring the environment variables, start the development server using one of the following commands:

   ```bash
   npm run dev
   ```

   or

   ```bash
   yarn dev
   ```

2. **Access the Application**

   Once the server is running, you can access the application by opening your browser and navigating to:

   ```
   http://localhost:3000
   ```

   This URL will direct you to the local instance of the Stock Price Checker, where you can enter stock symbols and view the latest stock information.

## Building for Production

To build the application for production, follow these steps:

1. **Build the Application**

   Use the following command to compile the application for production:

   ```bash
   npm run build
   ```

   or

   ```bash
   yarn build
   ```

   This command generates optimized static files for production use. The output will be placed in the .next folder, ready for deployment to a production environment.

2. **Start the Production Server**

   After building the application, you can start the production server with:

 ```bash
   npm run start
   ```

   or

   ```bash
   yarn start
   ```

   This command will launch the application in production mode. The server will be accessible at:

   ```
   http://localhost:3000
   ```