import Head from "next/head";
import StockPrice from "@components/StockPrice";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600">
      <Head>
        <title>Stock Price Checker</title>
        <meta name="description" content="Check real-time stock prices" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StockPrice />
    </div>
  );
}
