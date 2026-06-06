import React, { useState } from "react";
import Home from "./components/Home";
import { FaArrowLeftLong } from "react-icons/fa6";

function Works() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div>
      {activeTab === "home" && <Home setActiveTab={setActiveTab} />}

      <div className="">
        {activeTab === "cms" && (
          <div className="p-5 space-y-5 h-100 overflow-y-scroll project">
            <div
              onClick={() => setActiveTab("home")}
              className="w-fit cursor-pointer"
            >
              <FaArrowLeftLong />
            </div>

            <h3 className="font-semibold text-white">Project Name: CMS</h3>
            <p className="text-sm">
              A modern content management system with authentication, dashboard
              analytics, and content management features.
            </p>
            <p className="text-sm">
              Technologies: JavaScript, React.js, TailwindCss, React-Router, SPA
            </p>
            <div className="grid grid-cols-2 gap-2">
              <div className="w-full h-29 rounded-lg overflow-hidden">
                <img src="/public/projects_images/1.jpg" alt="" />
              </div>
              <div className="w-full h-29 rounded-lg overflow-hidden">
                <img src="/public/projects_images/2.jpg" alt="" />
              </div>
              <div className="w-full h-29 rounded-lg overflow-hidden">
                <img src="/public/projects_images/3.jpg" alt="" />
              </div>
              <div className="w-full h-29 rounded-lg overflow-hidden">
                <img src="/public/projects_images/4.jpg" alt="" />
              </div>
              <div className="w-full h-29 rounded-lg overflow-hidden">
                <img src="/public/projects_images/1.jpg" alt="" />
              </div>
              <div className="w-full h-29 rounded-lg overflow-hidden">
                <img src="/public/projects_images/2.jpg" alt="" />
              </div>
            </div>
          </div>
        )}

        {activeTab === "cms2" && (
          <div className="p-5 space-y-5 h-100 overflow-y-scroll project">
            <div
              onClick={() => setActiveTab("home")}
              className="w-fit cursor-pointer"
            >
              <FaArrowLeftLong />
            </div>

            <h3 className="font-semibold text-white">
              Project Name: CMS Admin Panel
            </h3>
            <p className="text-sm">
              An advanced admin dashboard for managing users, posts, categories,
              and website settings with responsive design.
            </p>
            <p className="text-sm">
              Technologies: JavaScript, React.js, TailwindCss, React-Router, SPA
            </p>
            <div className="grid grid-cols-2 gap-2">
              <div className="w-full h-29 rounded-lg overflow-hidden">
                <img src="/public/projects_images/1.jpg" alt="" />
              </div>
              <div className="w-full h-29 rounded-lg overflow-hidden">
                <img src="/public/projects_images/2.jpg" alt="" />
              </div>
              <div className="w-full h-29 rounded-lg overflow-hidden">
                <img src="/public/projects_images/3.jpg" alt="" />
              </div>
              <div className="w-full h-29 rounded-lg overflow-hidden">
                <img src="/public/projects_images/4.jpg" alt="" />
              </div>
              <div className="w-full h-29 rounded-lg overflow-hidden">
                <img src="/public/projects_images/1.jpg" alt="" />
              </div>
              <div className="w-full h-29 rounded-lg overflow-hidden">
                <img src="/public/projects_images/2.jpg" alt="" />
              </div>
            </div>
          </div>
        )}

        {activeTab === "news_magazine" && (
          <div className="p-5 space-y-5 h-100 overflow-y-scroll project">
            <div
              onClick={() => setActiveTab("home")}
              className="w-fit cursor-pointer"
            >
              <FaArrowLeftLong />
            </div>

            <h3 className="font-semibold text-white">
              Project Name: News Magazine Landing Page
            </h3>
            <p className="text-sm">
              A responsive landing page for an online news and magazine platform
              with featured articles and modern UI sections.
            </p>
            <p className="text-sm">
              Technologies: JavaScript, React.js, TailwindCss, React-Router, SPA
            </p>
            <div className="grid grid-cols-2 gap-2">
              <div className="w-full h-29 rounded-lg overflow-hidden">
                <img src="/public/projects_images/1.jpg" alt="" />
              </div>
              <div className="w-full h-29 rounded-lg overflow-hidden">
                <img src="/public/projects_images/2.jpg" alt="" />
              </div>
              <div className="w-full h-29 rounded-lg overflow-hidden">
                <img src="/public/projects_images/3.jpg" alt="" />
              </div>
              <div className="w-full h-29 rounded-lg overflow-hidden">
                <img src="/public/projects_images/4.jpg" alt="" />
              </div>
              <div className="w-full h-29 rounded-lg overflow-hidden">
                <img src="/public/projects_images/1.jpg" alt="" />
              </div>
              <div className="w-full h-29 rounded-lg overflow-hidden">
                <img src="/public/projects_images/2.jpg" alt="" />
              </div>
            </div>
          </div>
        )}

        {activeTab === "personal_website" && (
          <div className="p-5 space-y-5 h-100 overflow-y-scroll project">
            <div
              onClick={() => setActiveTab("home")}
              className="w-fit cursor-pointer"
            >
              <FaArrowLeftLong />
            </div>

            <h3 className="font-semibold text-white">
              Project Name: Personal Website
            </h3>
            <p className="text-sm">
              A minimalist personal portfolio website showcasing projects,
              skills, and contact information.
            </p>
            <p className="text-sm">
              Technologies: JavaScript, React.js, TailwindCss, React-Router, SPA
            </p>
            <div className="grid grid-cols-2 gap-2">
              <div className="w-full h-29 rounded-lg overflow-hidden">
                <img src="/public/projects_images/1.jpg" alt="" />
              </div>
              <div className="w-full h-29 rounded-lg overflow-hidden">
                <img src="/public/projects_images/2.jpg" alt="" />
              </div>
              <div className="w-full h-29 rounded-lg overflow-hidden">
                <img src="/public/projects_images/3.jpg" alt="" />
              </div>
              <div className="w-full h-29 rounded-lg overflow-hidden">
                <img src="/public/projects_images/4.jpg" alt="" />
              </div>
              <div className="w-full h-29 rounded-lg overflow-hidden">
                <img src="/public/projects_images/1.jpg" alt="" />
              </div>
              <div className="w-full h-29 rounded-lg overflow-hidden">
                <img src="/public/projects_images/2.jpg" alt="" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Works;
