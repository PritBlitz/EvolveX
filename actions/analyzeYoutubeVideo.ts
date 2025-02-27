"use server";

import { redirect } from "next/navigation";
// import { getVideoIdFromUrl } from "@/lib/youtube"; // Uncomment and use this function

export async function analyzeYoutubeVideo(formData: FormData) {
  const url = formData.get("url")?.toString();
  if (!url) return;

  const videoId = "abc"; // TODO: Fix this with actual extraction logic
  if (!videoId) return;

  // Redirect to the video analysis page
  redirect(`/video/${videoId}/analysis`);
}
