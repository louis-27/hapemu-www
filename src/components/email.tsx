"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { Button, Card, TextInput } from "flowbite-react";
import { ThumbsUp } from "lucide-react";
import { fetcher } from "~/lib/fetcher";

const toggleLikes = async (name: string, increment: boolean) => {
  try {
    const updateLikes = await fetcher(`like`, {
      name,
      increment,
    });

    const res = await updateLikes.json();
  } catch {
    console.error(`Caught error while updating like for smartphone ${name}`);
  }
};

export default function EmailForm() {
  const [email, setEmail] = useState("");
  const searchParams = useSearchParams();
  const recommendationsParam = searchParams.get("recommendations");

  const parseRecommendations = recommendationsParam
    ? JSON.parse(decodeURIComponent(recommendationsParam))
    : [];
  const [recommendations, setRecommendations] = useState(
    parseRecommendations.recommendations.map((item: any) => ({
      name: String(item),
      liked: false,
    }))
  );

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLike = async (index: number) => {
    setRecommendations((prevRecommendations: { liked: boolean }[]) =>
      prevRecommendations.map((item, i) =>
        i === index ? { ...item, liked: !item.liked } : item
      )
    );

    await toggleLikes(
      recommendations[index].name,
      !recommendations[index].liked
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch(
        "https://walrus-app-idqg4.ondigitalocean.app/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, recommendations }),
        }
      );

      if (response.ok) {
        console.log("Email sent successfully");
        router.push("/");
      } else {
        const errorData = await response.text();
        setError(
          `Failed to send email: ${response.status} ${response.statusText}. ${errorData}`
        );
      }
    } catch (error) {
      setError(
        `An error occurred: ${
          error instanceof Error ? error.message : String(error)
        }`
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mx-5 mt-5 flex flex-wrap justify-center gap-4">
      <Card
        id="resultCard"
        className="rounded-3xl bg-blue-500 max-w-screen-sm lg:max-w-screen-lg"
      >
        <h5 className="text-center mt-5 p-2 text-3xl md:text-5xl font-bold bg-blue-500 text-white">
          Hapemu adalah
        </h5>
        <img src="/wave-haikei.svg" alt="" className="bg-white" />

        <div className="bg-white border-b-2 px-6 pb-6 sm:flex sm:space-x-4 sm:space-y-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="stroke-blue-500 max-w-48 lg:min-w-xs lg:max-w-xs mx-auto animate__animated animate__tada"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
            />
          </svg>

          <div className="flex flex-col justify-center px-2 md:px-5">
            {recommendations.map((recommendation, index) => (
              <li key={index} className="flex items-center space-x-2">
                <Button
                  color="blue"
                  size="icon"
                  onClick={() => handleLike(index)}
                  className={`w-8 h-8 items-center ${
                    recommendation.liked ? "text-green-500" : "text-gray-500"
                  }`}
                >
                  <ThumbsUp className="h-4 w-4" />
                  <span className="sr-only">Like</span>
                </Button>
                <p className="text-xl sm:text-xl">{recommendation.name}</p>
              </li>
            ))}
            <p className="my-2 text-xl sm:text-2xl">Terima kasih.</p>
          </div>
        </div>
        <div className="bg-white rounded-b-3xl items-center justify-center p-4 space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center gap-4"
          >
            <div>
              <TextInput
                id="email"
                sizing="lg"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="nama@gmail.com"
                required
              />
            </div>
            <Button
              id="button"
              type="submit"
              className="bg-blue-500 lg:p-2 rounded-full"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Email Hasilku"}
            </Button>
            {error && <p className="text-red-500">{error}</p>}
          </form>
        </div>
      </Card>

      {/* <PostData /> */}

      <div className="flex flex-col w-4/5 mx-auto block rounded-lg bg-slate-200 p-5 text-surface shadow-secondary-1">
        {/*
                    Aku agak buntu dengan margin top, karena setiap kali
                    dibuat pasti ada ruang hitam kosong, jadi aku pakai div
                    ini sebagai margin top
                */}
      </div>
    </div>
  );
}
