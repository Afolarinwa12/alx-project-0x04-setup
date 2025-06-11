import Button from "@/components/common/Button";
import { useRouter } from "next/router";
import { PageRouteProps } from "@/interface";
import Link from "next/link";

export default function Home() {
  const router = useRouter();

  // Imeperative routing with useRouter
  const routeToNextPage  = ({ pageRoute }: PageRouteProps) => {
    router.push(pageRoute, undefined, { shallow: false})
  }

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center text-center">
      {/* Welcome Message */}
 <h1> Welcome to Splash App </h1>
   {/* link to counter app */}
 <Link href="/counter-app">
 <button className="bg-blue-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-700 transition">
          Go to Counter App
        </button>
 </Link>
      <p className="text-lg text-gray-600 mb-8">
        Your one-stop platform for everything AI you need. Start exploring by
        navigating to our features below.
      </p>
      {/* Navigation Options */}
      <div className="flex gap-6">
        <Button action={() => routeToNextPage({ pageRoute: '/generate-text-ai' })} buttonLabel="Generate Text" buttonBackgroundColor="blue" />
        <Button action={() => routeToNextPage({ pageRoute: '/text-to-image'})} buttonLabel="Text to Image" buttonBackgroundColor="green" />
        <Button action={() => routeToNextPage({ pageRoute: '/counter-app'})} buttonLabel="Contact us" buttonBackgroundColor="orange" />
      </div>
    </div>
    </>
   
  );
}