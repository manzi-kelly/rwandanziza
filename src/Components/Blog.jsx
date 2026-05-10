import React, { useState } from "react";

import {
  FaArrowRight,
  FaArrowLeft,
  FaUser,
  FaClock,
  FaCalendarAlt,
} from "react-icons/fa";

const Blog = () => {
  const [activePost, setActivePost] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const posts = [
    {
      id: 1,
      category: "Untold Encounters",
      title:
        "The Lions Of Akagera National Park Are A Conservation Success Story",
      description:
        "Reintroduced in 2015, Akagera’s lions now thrive across Rwanda’s only Big Five park.",
      author: "Marie",
      date: "December 15",
      readTime: "5 min read",
      image: "Akagera.PNG",
      fullContent: [
        {
          type: "paragraph",
          content:
            "Akagera National Park stands today as one of Africa’s greatest conservation achievements. Once depleted of wildlife, the park has become home again to thriving lion populations and remarkable biodiversity.",
        },
        {
          type: "heading",
          content: "Why Akagera Matters",
        },
        {
          type: "list",
          content: [
            "Successful lion reintroduction",
            "Community-based conservation",
            "Luxury eco-tourism experiences",
            "Rwanda’s only Big Five destination",
          ],
        },
      ],
    },

    {
      id: 2,
      category: "Untold Experiences",
      title:
        "Gorilla Trekking Through Rwanda’s Misty Volcanoes",
      description:
        "An unforgettable encounter with mountain gorillas deep inside Volcanoes National Park.",
      author: "James",
      date: "December 12",
      readTime: "7 min read",
      image: "ingajyi (2).PNG",
      fullContent: [
        {
          type: "paragraph",
          content:
            "Gorilla trekking offers one of the world’s most emotional wildlife encounters. Travelers hike through lush rainforest before meeting a gorilla family in their natural habitat.",
        },
      ],
    },

    {
      id: 3,
      category: "Untold Nature",
      title:
        "Gishwati Mukura Is Becoming Rwanda’s Eco-Tourism Gem",
      description:
        "A hidden rainforest destination focused on conservation and sustainable tourism.",
      author: "Sarah",
      date: "December 10",
      readTime: "6 min read",
      image: "mukuragishwatii.PNG",
      fullContent: [
        {
          type: "paragraph",
          content:
            "Gishwati Mukura National Park is redefining eco-tourism through forest restoration, biodiversity protection, and community partnerships.",
        },
      ],
    },

    {
      id: 4,
      category: "Untold Heritage",
      title:
        "Nyandungu Eco Park Is Kigali’s Urban Nature Escape",
      description:
        "A restored wetland transformed into one of Rwanda’s most beautiful green spaces.",
      author: "Jean",
      date: "December 8",
      readTime: "4 min read",
      image: "nyandungu 1.PNG",
      fullContent: [
        {
          type: "paragraph",
          content:
            "Nyandungu Eco Park combines sustainability, recreation, and biodiversity in the heart of Kigali.",
        },
      ],
    },

    {
      id: 5,
      category: "Untold Safari",
      title:
        "Luxury Safari Experiences Across Rwanda",
      description:
        "Discover exclusive lodges, wildlife adventures, and unforgettable journeys through Rwanda.",
      author: "Alice",
      date: "December 6",
      readTime: "5 min read",
      image: "Nyungwe.PNG",
      fullContent: [
        {
          type: "paragraph",
          content:
            "Luxury safaris in Rwanda combine premium hospitality with extraordinary wildlife experiences.",
        },
      ],
    },

    {
      id: 6,
      category: "Untold Culture",
      title:
        "Discover Rwanda’s Rich Cultural Heritage",
      description:
        "Traditional dance, local communities, and authentic experiences beyond safari adventures.",
      author: "Eric",
      date: "December 4",
      readTime: "6 min read",
      image: "Nyandungu.PNG",
      fullContent: [
        {
          type: "paragraph",
          content:
            "Rwanda’s culture is deeply rooted in storytelling, music, traditional values, and community spirit.",
        },
      ],
    },

    {
      id: 7,
      category: "Untold Wildlife",
      title:
        "The Beauty Of Nyungwe Forest National Park",
      description:
        "Explore one of Africa’s oldest rainforests filled with primates and breathtaking canopy walks.",
      author: "Patrick",
      date: "December 1",
      readTime: "5 min read",
      image: "Nyungwe.PNG",
      fullContent: [
        {
          type: "paragraph",
          content:
            "Nyungwe Forest offers a magical blend of biodiversity, adventure, and tranquility.",
        },
      ],
    },
  ];

  const visiblePosts = showAll
    ? posts
    : posts.slice(0, 6);

  const activePostData = activePost
    ? posts.find((item) => item.id === activePost)
    : null;

  return (
    <section
      id="blog"
      className="relative overflow-hidden bg-white py-24"
    >
      {/* Background Effects */}
      <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-green-100/60 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-emerald-100/60 blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8">

        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-24">

          <p className="uppercase tracking-[0.35em] text-green-700 text-sm font-semibold mb-5">
            Travel Journal
          </p>

          <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-6">
            Stories Beyond The Journey
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            Discover Rwanda through wildlife encounters,
            luxury adventures, conservation stories,
            and unforgettable safari experiences.
          </p>
        </div>

        {/* BLOG GRID */}
        {!activePostData && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-20">

              {visiblePosts.map((post) => (
                <article
                  key={post.id}
                  onClick={() => setActivePost(post.id)}
                  className="group cursor-pointer"
                >

                  {/* Image */}
                  <div className="relative overflow-hidden rounded-[35px] h-[350px] mb-8">

                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

                    <div className="absolute top-6 left-6">

                      <span className="bg-white/90 backdrop-blur-xl text-green-700 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em]">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div>

                    <div className="flex flex-wrap items-center gap-5 text-sm text-gray-500 mb-5">

                      <div className="flex items-center gap-2">
                        <FaUser className="text-green-700" />
                        <span>{post.author}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <FaCalendarAlt className="text-green-700" />
                        <span>{post.date}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <FaClock className="text-green-700" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-3xl font-black text-gray-900 leading-tight mb-5 group-hover:text-green-700 transition duration-300">

                      {post.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed mb-7">
                      {post.description}
                    </p>

                    <button className="flex items-center gap-3 text-green-700 font-bold group-hover:gap-5 transition-all duration-300">

                      Read Story

                      <FaArrowRight />
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {/* Show More */}
            {posts.length > 6 && (
              <div className="flex justify-center mt-24">

                <button
                  onClick={() => setShowAll(!showAll)}
                  className="group bg-green-700 hover:bg-green-800 text-white px-10 py-5 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl flex items-center gap-4"
                >
                  {showAll
                    ? "Show Less Stories"
                    : "Show More Stories"}

                  <FaArrowRight className="group-hover:translate-x-1 transition duration-300" />
                </button>
              </div>
            )}
          </>
        )}

        {/* ARTICLE VIEW */}
        {activePostData && (
          <div className="max-w-6xl mx-auto">

            {/* Back */}
            <button
              onClick={() => setActivePost(null)}
              className="flex items-center gap-3 text-green-700 font-semibold mb-10 hover:gap-5 transition-all duration-300"
            >
              <FaArrowLeft />

              Back To Stories
            </button>

            {/* Hero */}
            <div className="relative overflow-hidden rounded-[45px] h-[400px] md:h-[700px] mb-20">

              <img
                src={activePostData.image}
                alt={activePostData.title}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

              <div className="absolute bottom-0 left-0 p-8 md:p-14 text-white max-w-5xl">

                <span className="bg-green-600 px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
                  {activePostData.category}
                </span>

                <h1 className="text-4xl md:text-7xl font-black leading-tight mt-8 mb-8">

                  {activePostData.title}
                </h1>

                <div className="flex flex-wrap items-center gap-6 text-gray-200">

                  <div className="flex items-center gap-2">
                    <FaUser />
                    <span>{activePostData.author}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <FaCalendarAlt />
                    <span>{activePostData.date}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <FaClock />
                    <span>{activePostData.readTime}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto">

              <div className="space-y-10">

                {activePostData.fullContent.map(
                  (content, index) => (
                    <div key={index}>

                      {content.type === "heading" && (
                        <h2 className="text-4xl font-black text-gray-900 mb-6">
                          {content.content}
                        </h2>
                      )}

                      {content.type === "paragraph" && (
                        <p className="text-xl leading-[2] text-gray-600">
                          {content.content}
                        </p>
                      )}

                      {content.type === "list" && (
                        <div className="space-y-5">

                          {content.content.map(
                            (item, itemIndex) => (
                              <div
                                key={itemIndex}
                                className="flex items-center gap-5"
                              >
                                <div className="w-3 h-3 rounded-full bg-green-600"></div>

                                <p className="text-lg text-gray-700">
                                  {item}
                                </p>
                              </div>
                            )
                          )}
                        </div>
                      )}
                    </div>
                  )
                )}
              </div>

              {/* Bottom CTA */}
              <div className="mt-24 pt-12 border-t border-gray-100 text-center">

                <h3 className="text-4xl font-black text-gray-900 mb-5">
                  Continue Exploring Rwanda
                </h3>

                <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10">
                  Discover more safari stories,
                  eco-tourism experiences,
                  and luxury adventures across East Africa.
                </p>

                <button
                  onClick={() => setActivePost(null)}
                  className="bg-green-700 hover:bg-green-800 text-white px-10 py-5 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-xl"
                >
                  Back To Journal
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;