'use client';

import { useRouter } from "next/navigation"; // Correct import
import { useEffect, useState } from "react";

const Home: React.FC = () => {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      // Redirect to another page based on a condition
      router.push("/website/home");
    }
  }, [isMounted, router]);

  return null; // Optionally display a loading state here
};

export default Home;
