# Stock Price Checker

## Description

Simply enter the stock symbol (e.g., AAPL) and get instant access to the latest stock information. Designed with a sleek user interface using TailwindCSS, this tool helps you stay updated with stock market trends effortlessly.

## Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

## Installation

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   cd <repository-name>
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
