"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export type movie = {
  title: string;
  url: string;
  release_date: string;
};

export function MovieCard({ movie }: { movie: movie }) {
  function onfavoriteClick() {
    console.log("something was clicked");
  }

  return (
    <Card className="max-w-lg w-full flex flex-col md:flex-row overflow-hidden">
      <div className="md:w-1/3 shrink-0">
        <Image
          src={movie.url}
          alt={movie.title}
          width={150}
          height={150}
          className="w-full h-auto object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
        />
      </div>
      <div className="flex flex-col justify-between flex-1 p-4">
        <div>
          <CardHeader className="p-0">
            <CardTitle className="text-lg md:text-xl">{movie.title}</CardTitle>
          </CardHeader>
          <CardContent className="p-0 mt-2">
            <p className="text-sm text-muted-foreground">
              Release Date: {movie.release_date}
            </p>
          </CardContent>
        </div>
        <div className="mt-4">
          <Button
            onClick={onfavoriteClick}
            variant="outline"
            className="w-full md:w-auto"
          >
            Favorite
          </Button>
        </div>
      </div>
    </Card>
  );
}
