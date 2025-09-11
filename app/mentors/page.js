"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import Loader from "@/components/Loader";
import { useSession } from "next-auth/react";
import PhoneVerification from "@/components/PhoneVerification";

export default function MentorsPage() {
  const [mentors, setMentors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [sortBy, setSortBy] = useState("rating-desc");
  const [favorites, setFavorites] = useState(() => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("favoriteMentors") || "[]");
    }
    return [];
  });
  const [filters, setFilters] = useState({
    company: "",
    role: "",
    price: "",
  });

  const [showVerify, setShowVerify] = useState(false);
  const [pendingMentor, setPendingMentor] = useState(null);

  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const res = await fetch("/api/mentors");
        const data = await res.json();
        setMentors(data);
      } catch (err) {
        console.error("Failed to fetch mentors", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMentors();
  }, []);

  const filteredMentors = mentors
    .filter((mentor) => {
      const matchesSearch = mentor.name.toLowerCase().includes(search.toLowerCase()) ||
        mentor.skills.some((skill) => skill.toLowerCase().includes(search.toLowerCase()));
      const matchesCategory = categoryFilter === "All" || mentor.skills.includes(categoryFilter);
      const matchesFilters =
        (filters.company ? mentor.company === filters.company : true) &&
        (filters.role ? mentor.title === filters.role : true) &&
        (filters.price ? mentor.price <= parseInt(filters.price) : true);
      return matchesSearch && matchesCategory && matchesFilters;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "rating-desc":
          return (b.rating || 0) - (a.rating || 0);
        case "popularity":
          return (b.sessionsCompleted || 0) - (a.sessionsCompleted || 0);
        default:
          return 0;
      }
    });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("favoriteMentors", JSON.stringify(favorites));
    }
  }, [favorites]);

  const toggleFavorite = (mentorId) => {
    setFavorites((prev) =>
      prev.includes(mentorId)
        ? prev.filter((id) => id !== mentorId)
        : [...prev, mentorId]
    );
  };

  const isFavorite = (mentorId) => favorites.includes(mentorId);

  const handleBook = (mentorId) => {
    if (!session?.user) {
      router.push("/login");
      return;
    }

    if (!session?.user?.phoneVerified) {
      setPendingMentor(mentorId);
      setShowVerify(true);
      return;
    }

    router.push(`/book/${mentorId}`);
  };

  const handleVerifySuccess = () => {
    setShowVerify(false);
    if (pendingMentor) {
      router.push(`/book/${pendingMentor}`);
      setPendingMentor(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* TITLE & SEARCH */}
        <div className="mb-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          >
            Expert Mentors
          </motion.h1>
          <p className="text-xl text-gray-400 mb-6 max-w-2xl mx-auto">
            Discover top professionals ready to guide your tech journey. Personalized mentoring for success.
          </p>
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search by name, skill, or company"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-900/80 border border-gray-700 rounded-xl placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
            />
          </div>
        </div>

        {/* FILTERS & SORT */}
        <div className="flex flex-col lg:flex-row gap-6 mb-8 justify-between items-center">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
            {["All", "Web Dev", "Data Science", "AI/ML", "DevOps"].map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm transition ${
                  categoryFilter === cat
                    ? "bg-blue-600 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
          >
            <option value="rating-desc">Highest Rated</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="popularity">Most Popular</option>
          </select>
        </div>

        {/* EXISTING FILTERS */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          {/* your filter selects unchanged */}
        </div>

        {/* CONTENT */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={i}
                className="bg-gray-950 border border-gray-800 rounded-xl p-6 animate-pulse"
              >
                <div className="w-24 h-24 bg-gray-700 rounded-full mb-4 mx-auto"></div>
                <div className="h-6 bg-gray-700 rounded mb-2 w-3/4 mx-auto"></div>
                <div className="h-4 bg-gray-700 rounded mb-4 w-1/2 mx-auto"></div>
                <div className="flex gap-2 mb-4 justify-center">
                  <div className="h-4 bg-gray-700 rounded-full w-12"></div>
                  <div className="h-4 bg-gray-700 rounded-full w-16"></div>
                </div>
                <div className="h-8 bg-gray-700 rounded mb-4 w-20 mx-auto"></div>
                <div className="flex gap-3 justify-center">
                  <div className="h-10 bg-gray-700 rounded w-20"></div>
                  <div className="h-10 bg-gray-700 rounded w-16"></div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : filteredMentors.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-gray-400 text-lg mb-4">No mentors match your search. Try adjusting filters.</p>
            <button
              onClick={() => {
                setSearch("");
                setCategoryFilter("All");
                setSortBy("rating-desc");
              }}
              className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Clear All
            </button>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMentors.map((mentor) => (
              <motion.div
                key={mentor._id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, z: 10 }}
                className="bg-gray-950/80 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                role="button"
                tabIndex={0}
                onClick={() => handleBook(mentor._id)}
                onKeyDown={(e) => e.key === "Enter" && handleBook(mentor._id)}
              >
                {/* Availability Indicator */}
                <div
                  className={`absolute top-4 right-4 w-4 h-4 rounded-full ${
                    mentor.availability ? "bg-green-500" : "bg-yellow-500"
                  }`}
                  aria-label={mentor.availability ? "Available now" : "Busy"}
                ></div>

                {/* Favorite Heart */}
                <button
                  className="absolute top-4 left-4 p-2 text-gray-400 hover:text-red-500 transition"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(mentor._id);
                  }}
                  aria-label={isFavorite(mentor._id) ? "Remove from favorites" : "Add to favorites"}
                >
                  <Heart
                    fill={isFavorite(mentor._id) ? "red" : "none"}
                    className="w-5 h-5"
                  />
                </button>

                {/* Profile Image */}
                <div className="flex justify-center mb-4">
                  <img
                    src={mentor.profileImage || "https://via.placeholder.com/150?text=" + mentor.name.charAt(0)}
                    alt={mentor.name}
                    className="w-24 h-24 rounded-full border-2 border-gray-700/50 object-cover shadow-lg group-hover:border-blue-500 transition"
                  />
                </div>

                {/* Name and Tagline */}
                <h2 className="text-xl font-bold text-center mb-1">{mentor.name}</h2>
                {mentor.bio && (
                  <p className="text-sm text-gray-400 text-center mb-3 italic">{mentor.bio}</p>
                )}

                {/* Title and Company with Verification */}
                <p className="text-gray-400 text-center mb-3">
                  {mentor.title} at {mentor.company}
                  {mentor.verifiedCompany && <span className="ml-1 text-green-400">✓</span>}
                </p>

                {/* Rating and Reviews */}
                <div className="flex items-center justify-center gap-1 mb-3">
                  <span className="text-yellow-400">
                    ★★★★☆ {/* Placeholder; replace with dynamic based on rating */}
                  </span>
                  <span className="text-sm text-gray-400 ml-1">
                    ({mentor.reviewCount || 0} reviews)
                  </span>
                </div>

                {/* Experience Badge */}
                <div className="flex items-center justify-center gap-1 mb-3 text-sm text-gray-400">
                  <span>{mentor.experience || 0} years exp</span>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {mentor.skills.slice(0, 3).map((skill, i) => (
                    <span
                      key={i}
                      className="bg-gray-700/50 text-xs px-2 py-1 rounded-full backdrop-blur-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Price */}
                <p className="text-2xl font-bold text-center mb-4 text-green-400">
                  ₹{mentor.price}/session
                </p>

                {/* Trust Indicators */}
                <div className="flex items-center justify-center gap-2 mb-4 text-xs">
                  <span className="text-gray-500">{mentor.sessionsCompleted || 0}+ sessions</span>
                </div>

                {/* Actions */}
                <div className="flex gap-3 justify-center">
                  <a
                    href={mentor.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition flex items-center gap-1"
                    aria-label="View LinkedIn profile"
                  >
                    LinkedIn
                  </a>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleBook(mentor._id);
                    }}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center gap-1"
                    aria-label="Book session with mentor"
                  >
                    Book Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Phone Verification Modal */}
      <PhoneVerification
        show={showVerify}
        onClose={() => setShowVerify(false)}
        onVerified={handleVerifySuccess}
      />
    </div>
  );
}
