import Head from "next/head";
import StockPrice from "@/app/components/StockPrice";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Head>
        <title>Stock Price Checker</title>
        <meta name="description" content="Check real-time stock prices" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StockPrice />
    </div>
  );
}
