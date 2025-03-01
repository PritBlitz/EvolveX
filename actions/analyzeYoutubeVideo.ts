"use server";

import { redirect } from "next/navigation";
import { getVideoIdFromUrl } from "@/lib/getVideoIdFromUrl";

export async function analyzeYoutubeVideo(formData: FormData) {
  const url = formData.get("url")?.toString();
  if (!url) return;

  const videoId = getVideoIdFromUrl(url);
  if (!videoId) return;

  // Redirect to the video analysis page
  redirect(`/video/${videoId}/analysis`);
}
