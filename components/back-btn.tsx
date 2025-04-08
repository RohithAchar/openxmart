"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";

import { useEffect, useState } from "react";

const BackBtn = () => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <Button
      onClick={() => {
        router.back();
      }}
      variant="outline"
      className="mb-2"
    >
      <ArrowLeft className="w-4 h-4" />
    </Button>
  );
};

export default BackBtn;
