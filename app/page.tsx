import EvolvePulse from "@/components/EvolvePulse";
import {
  Brain,
  Image as ImageIcon,
  MessageSquare,
  Sparkles,
  Video,
} from "lucide-react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import YoutubeVideoForm from "@/components/YoutubeVideoForm";

const steps = [
  {
    title: "1. Connect Your Content",
    description: "Share Your Youtube Video URL and let your agent get to work",
    icon: Video,
  },
  {
    title: "2. AI Agent Analysis",
    description: "Your Personal agent analyzes every aspect of your content",
    icon: Brain,
  },
  {
    title: "3. Receive Intelligence",
    description: "Get actionable insights and stratergic recommendation",
    icon: MessageSquare,
  },
];

const features = [
  {
    title: "AI Analysis",
    description:
      "Unlock data-driven content strategies with AI. Gain deep insights into engagement, audience behavior, and performance metrics.",
    icon: Brain,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    title: "Smart Transciption",
    description:
      "Get Accurate Transciption of your videos . Perfect for creating subtitles and SEO friendly content.",
    icon: MessageSquare,
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
  },
  {
    title: "Thumb Nail Generator",
    description:
      "Generate Eyecatching thumbnails using AI . Boost your click through rate with AI crafted visuals.",
    icon: ImageIcon,
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
  {
    title: "Title Generation",
    description:
      "Create Attention grabbing , SEO Optimized titles for your videos using AI. Maximize your reach and engagement.",
    icon: MessageSquare,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    title: "Shot Script",
    description:
      "Get Detailed step by step instructions to recreate viral videos . Learn Shooting techniques , angles and editting tips from successful content ",
    icon: Video,
    iconBg: "bg-pink-100",
    iconColor: "text-pink-600",
  },
  {
    title: "Discuss with your AI-Agent",
    description:
      "Enagage in deep conversations with your AI Agent . Get insights , tips and tricks to grow your channel . Unlock new creative possibilities with your companion AI-Agent. ",
    icon: Sparkles,
    iconBg: "bg-pink-100",
    iconColor: "text-pink-600",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-to-b from-purple-100 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-10 text-center mb12">
            <EvolvePulse size="large" color="purple" />
            <h1 className="relative text-center text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-8 leading-tight tracking-wide drop-shadow-xl">
              Your Personal AI Genius
              <span className="inline-block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-400 bg-clip-text text-transparent animate-pulse before:content-['🚀'] after:content-['✨']">
                for a Smarter Tomorrow - EvolveX
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Revolutionizing the way you create, analyze, and innovate with
              AI-powered content generation. Get Results in Seconds .
            </p>

            <YoutubeVideoForm />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb12">
            Powerful Features for Content Creators
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Features Section */}
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl border border-gray-200 shadow-lg hover:shadow-2xl hover:border-blue-500 transition-all duration-300 transform hover:scale-105"
                >
                  <div
                    className={`w-16 h-16 rounded-lg flex items-center justify-center mb-4 ${feature.iconBg}`}
                  >
                    <Icon className={`w-8 h-8 ${feature.iconColor}`} />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-purple-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Meet Your AI Agent in 3 simple steps
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-all"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="bg-gradient-to-r from-purple-700 to-purple-500 text-purple-50 py-16 px-6">
        {/* Main Footer Content */}
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-4">
            Ready to Meet Your AI Content Agent?
          </h2>
          <p className="text-lg text-purple-200 max-w-2xl mx-auto">
            Join creators leveraging AI to unlock content insights and
            supercharge their creativity.
          </p>
        </div>

        {/* Footer Links & Contact */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-purple-300 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-300 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-300 transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-300 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-purplep-200">📧 pritblitz.work@gmail.com</p>
            <p className="text-purple-200">📞 +91 98013 34862</p>
            <p className="text-purple-200">📍 ITER , Bhubaneswar</p>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center space-x-6">
              <a
                href="https://x.com/PritBlitz"
                className="hover:scale-110 transition"
              >
                <i className="fab fa-twitter w-7 h-7 text-white hover:text-purple-300"></i>
              </a>
              <a
                href="https://www.instagram.com/pritish_biz24x7/"
                className="hover:scale-110 transition"
              >
                <i className="fab fa-instagram w-7 h-7 text-white hover:text-purple-300"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/pritish-biswas-pb24"
                className="hover:scale-110 transition"
              >
                <i className="fab fa-linkedin w-7 h-7 text-white hover:text-purple-300"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 text-center text-purple-300 border-t border-purple-400 pt-6">
          <p>&copy; 2025 EvolveX. All rights reserved.</p>
        </div>
      </section>
    </div>
  );
}
