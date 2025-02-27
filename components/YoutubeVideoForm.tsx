import Form from "next/form";
import AnalyzeButton from "./AnalyzeButton";
import { analyzeYoutubeVideo } from "@/actions/analyzeYoutubeVideo";

function YoutubeVideoForm() {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <Form
        action={analyzeYoutubeVideo}
        className="flex flex-col sm:flex-row gap-2 items-center"
      >
        <input
          name="url"
          type="text"
          placeholder="Enter YouTube URL"
          className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
        />
        <AnalyzeButton />
      </Form>
    </div>
  );
}

export default YoutubeVideoForm;
