"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useState } from "react";

const imageGallery = [
  { src: "/cnn-transformer1.png", caption: "WSI Processing Pipeline" },
  { src: "/cnn-transformer2.png", caption: "Hybrid CNN-Transformer Architecture" },
  { src: "/cnn-transformer3.png", caption: "Feature Extraction Workflow" },
  { src: "/cnn-transformer4.png", caption: "Attention-based Cancer Detection" },
  { src: "/cnn-transformer5.png", caption: "Evaluation Metrics and Performance" }
];

export default function HybridCNNTransformerProject() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <section className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-900 text-center">
          Hybrid CNN-Transformer for Cancer Detection
        </h1>

        {/* 📝 Large Introduction */}
        <div className="mt-6 max-w-screen-lg mx-auto text-xl text-gray-800 leading-relaxed font-semibold px-4 sm:px-0 text-justify">
          <p>
            Cancer detection in histopathology requires analyzing{" "}
            <span className="font-bold text-black">high-resolution Whole Slide Images (WSIs)</span>, 
            which pose challenges due to their large size, complex structures, and staining variability. 
            Traditional <span className="font-bold text-cmuRed">CNN-based models</span> effectively extract 
            local features but struggle with broader contextual understanding, while{" "}
            <span className="font-bold text-cmuRed">Vision Transformers</span> provide long-range dependencies 
            but require large datasets and high computational power.
          </p>
          <p className="mt-4">
            To address these limitations, we developed a{" "}
            <span className="font-bold text-black">Hybrid CNN-Transformer Model</span> that integrates the{" "}
            fine-grained feature extraction of CNNs with the contextual awareness of Transformers. 
            This hybrid approach allows for more accurate classification of cancerous regions in 
            histopathology images, improving diagnostic efficiency in medical imaging.
          </p>
        </div>

        {/* 🖼️ Grid Layout for Images with Click-to-Expand Feature */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-12 px-6">
          {imageGallery.map((item, index) => (
            <div key={index} className="flex flex-col items-center space-y-4">
              <div
                className="relative w-full h-[350px] max-w-[600px] rounded-lg overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => setSelectedImage(item.src)}
              >
                <Image 
                  src={item.src} 
                  alt={item.caption} 
                  width={600} 
                  height={350} 
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <p className="text-gray-700 text-md font-medium text-center w-4/5">
                {item.caption}
              </p>
            </div>
          ))}
        </div>

        {/* 📜 Embedded Poster PDF Viewer */}
        <div className="mt-16 max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-cmuRed mb-4">Research Poster</h2>
          <iframe
            src="/poster.pdf"
            width="100%"
            height="800px"
            className="rounded-lg shadow-lg border border-gray-300"
          ></iframe>
          <p className="mt-2 text-gray-600 text-sm">
            View the full research poster on Hybrid CNN-Transformer Model for Cancer Detection.
          </p>
        </div>

        {/* 🛠️ My Contributions Section */}
        <div className="mt-16 text-lg text-gray-900 font-semibold leading-relaxed max-w-4xl mx-auto text-left">
          <h2 className="text-2xl font-bold text-cmuRed text-center mb-4">My Contributions</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
              Developed a <span className="font-bold text-black">Hybrid CNN-Transformer model</span> to analyze 
              Whole Slide Images (WSIs) for cancer detection.
            </li>
            <li>
              Implemented <span className="font-bold text-cmuRed">Hierarchical Feature Fusion</span> to improve 
              accuracy in identifying cancerous tissues.
            </li>
            <li>
              Designed an <span className="font-bold text-black">efficient data processing pipeline</span> for extracting 
              cell, patch, and region-level features.
            </li>
            <li>
              Optimized the model training process, leveraging learning rate schedulers and auxiliary loss functions for stability.
            </li>
            <li>
              Conducted performance evaluation using <span className="font-bold text-cmuRed">
                precision, recall, F1 score, and AUC metrics</span>.
            </li>
          </ul>
        </div>

        {/* 📝 Conclusion */}
        <div className="mt-16 max-w-5xl mx-auto text-lg text-gray-700 leading-relaxed px-4 sm:px-0 text-justify">
          <p>
            The <span className="font-bold text-cmuRed">Hybrid CNN-Transformer Model</span> significantly enhances 
            the detection of cancerous regions by combining{" "}
            <span className="font-bold text-black">local feature extraction</span> from CNNs with{" "}
            <span className="font-bold text-black">global contextual understanding</span> from Transformers.
            This approach achieves a <span className="font-bold text-cmuRed">balanced trade-off</span> between 
            computational efficiency and diagnostic accuracy.
          </p>
          <p className="mt-4">
            Key evaluation metrics such as <span className="font-bold text-black">
              accuracy (0.9727), precision (0.9453), and recall (0.9208)</span> validate the effectiveness of this model 
              in large-scale histopathology data analysis. Performance improvements were achieved through{" "}
            <span className="font-bold text-cmuRed">stain normalization</span>,{" "}
            <span className="font-bold text-cmuRed">multi-resolution training</span>, and{" "}
            <span className="font-bold text-cmuRed">data augmentation techniques</span>.
          </p>
          <p className="mt-4">
            Future work will explore <span className="font-bold text-cmuRed">
              Transformer-based architectural enhancements</span> such as{" "}
            <span className="font-bold text-black">Swin Transformers</span> and{" "}
            <span className="font-bold text-cmuRed">self-supervised learning techniques</span> to further 
            improve cancer classification accuracy. The model is also being optimized for deployment on{" "}
            <span className="font-bold text-black">cloud-based medical imaging platforms</span> for 
            real-time clinical applications.
          </p>
        </div>

        {/* 📌 Image Modal - Expands Image to Fullscreen & Adjusts for Large Images */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-6"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-6xl w-full max-h-[90vh] overflow-auto bg-white p-4 rounded-lg shadow-lg flex justify-center items-center">
              <Image
                src={selectedImage}
                alt="Expanded View"
                width={1600} 
                height={900}
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
              />
              <button
                className="absolute top-4 right-6 text-white text-3xl font-bold cursor-pointer bg-black/50 px-3 py-1 rounded-full"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
