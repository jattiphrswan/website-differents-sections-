import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import {
  Star,
  Heart,
  MessageCircle,
  Share2,
  CheckCircle2,
  Sparkles,
  Plus,
  X,
  Search,
  Filter
} from 'lucide-react';
import { useIsMobile } from '../heroes/useIsMobile';

const REVIEWS_DATA = [
  {
    id: 'wall-1',
    name: 'Sarah Jenkins',
    handle: '@sarahj_tech',
    role: 'Lead Frontend Architect',
    avatar: './assets/skincare-serum-hand.jpg',
    content: 'Honestly blown away by the code cleanliness and Tailwind CSS modularity. Integrated these sections into our client portal in literally under 20 minutes.',
    stars: 5,
    likes: 142,
    date: '2h ago',
    tag: 'Productivity'
  },
  {
    id: 'wall-2',
    name: 'Liam Gallagher',
    handle: '@liam_dev',
    role: 'Product Designer',
    avatar: './assets/avatar-benjamin.jpg',
    content: 'The micro-animations and typography pairings are top tier. Usually UI kits look like template garbage, but this feels handcrafted by a high-end design agency.',
    stars: 5,
    likes: 89,
    date: '5h ago',
    tag: 'Design'
  },
  {
    id: 'wall-3',
    name: 'Dr. Wayne Chirisa',
    handle: '@waynechirisa',
    role: 'Clinic Director',
    avatar: './assets/avatar-matthew.jpg',
    content: 'Our patient consultation booking conversion skyrocketed after launching the wellness section. Patients specifically praise how clean and trustworthy the layout looks.',
    stars: 5,
    likes: 215,
    date: '1d ago',
    tag: 'Healthcare'
  },
  {
    id: 'wall-4',
    name: 'Amara Okafor',
    handle: '@amara_ux',
    role: 'Founder at Solace',
    avatar: './assets/avatar-sophia.jpg',
    content: 'Responsiveness on mobile is seamless. No weird horizontal scroll glitches, and the touch interactions feel native. Huge lifesaver for our MVP launch!',
    stars: 5,
    likes: 178,
    date: '2d ago',
    tag: 'Mobile UX'
  },
  {
    id: 'wall-5',
    name: 'Tariq Al-Mansoor',
    handle: '@tariq_solar',
    role: 'Energy Solutions Director',
    avatar: './assets/dentist-female-clinic.jpg',
    content: 'The solar ROI calculator section closed 3 commercial clients on day 1. Clients love being able to simulate real-time energy savings before requesting a site audit.',
    stars: 5,
    likes: 94,
    date: '3d ago',
    tag: 'Clean Energy'
  },
  {
    id: 'wall-6',
    name: 'Hannah Abbott',
    handle: '@hannah_abbott',
    role: 'E-commerce Director',
    avatar: './assets/shoppable-video-model.jpg',
    content: 'The shoppable video and product customization flow helped us increase average order value by 24%. Phenomenal attention to detail.',
    stars: 5,
    likes: 312,
    date: '4d ago',
    tag: 'E-Commerce'
  }
];

export const Testimonials_WallOfLove = ({ isMobile: forcedMobile = false }) => {
  const isMobile = useIsMobile(forcedMobile);
  const [likes, setLikes] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [newReview, setNewReview] = useState({ name: '', role: '', content: '' });

  const handleLike = (id) => {
    setLikes((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
  };

  const handleAddSubmit = (e) => {
    e.preventDefault();
    if (!newReview.name || !newReview.content) return;
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
    setShowAddModal(false);
    setNewReview({ name: '', role: '', content: '' });
  };

  const filtered = REVIEWS_DATA.filter((r) =>
    r.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.tag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="relative w-full rounded-3xl overflow-hidden font-sans border border-slate-200 bg-gradient-to-b from-slate-50 via-white to-slate-50 py-16 sm:py-24 px-4 sm:px-8 md:px-12 shadow-2xl">
      <div className="max-w-6xl mx-auto w-full space-y-12">
        {/* Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-600 text-xs font-bold">
            <Heart className="w-3.5 h-3.5 fill-current" />
            <span>WALL OF LOVE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Loved by 10,000+ builders worldwide
          </h2>
          <p className="text-sm text-slate-500 font-medium">
            Real feedback shared by designers, founders, and engineers on social channels.
          </p>

          {/* Search and Action Bar */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <div className="relative w-full max-w-xs">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search reviews or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-full text-xs bg-white border border-slate-200 focus:outline-none focus:border-rose-400 shadow-sm text-slate-800"
              />
            </div>

            <button
              onClick={() => setShowAddModal(true)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-extrabold bg-slate-900 hover:bg-slate-800 text-white transition shadow-md cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Share Your Story</span>
            </button>
          </div>
        </div>

        {/* Masonry Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, idx) => {
            const currentLikes = item.likes + (likes[item.id] || 0);
            const isLiked = Boolean(likes[item.id]);

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top: Avatar, Name, Handle, Stars */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="w-10 h-10 rounded-full object-cover border border-slate-100"
                      />
                      <div>
                        <div className="flex items-center gap-1">
                          <h4 className="text-sm font-bold text-slate-900 leading-tight">
                            {item.name}
                          </h4>
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 fill-blue-50" />
                        </div>
                        <p className="text-[11px] text-slate-400 font-medium">
                          {item.handle} • {item.role}
                        </p>
                      </div>
                    </div>

                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                      {item.tag}
                    </span>
                  </div>

                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(item.stars)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Tweet Content */}
                  <p className="text-slate-700 text-sm leading-relaxed mb-6 font-normal">
                    "{item.content}"
                  </p>
                </div>

                {/* Bottom Interactive Bar */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                  <span>{item.date}</span>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => handleLike(item.id)}
                      className={`inline-flex items-center gap-1 hover:text-rose-500 transition cursor-pointer ${
                        isLiked ? 'text-rose-500 font-bold' : ''
                      }`}
                    >
                      <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-current' : ''}`} />
                      <span>{currentLikes}</span>
                    </button>
                    <button className="hover:text-blue-500 transition cursor-pointer">
                      <Share2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Share Story Modal */}
      <AnimatePresence>
        {showAddModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100"
            >
              <button
                onClick={() => setShowAddModal(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-slate-200 transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <h3 className="text-xl font-black text-slate-900 mb-1">
                Share Your Experience
              </h3>
              <p className="text-xs text-slate-500 mb-5">
                Join 10,000+ creators who power their websites with these sections.
              </p>

              <form onSubmit={handleAddSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Rivera"
                    value={newReview.name}
                    onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl text-xs border border-slate-200 focus:outline-none focus:border-slate-800"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Your Role &amp; Company
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Product Lead at Acme Corp"
                    value={newReview.role}
                    onChange={(e) => setNewReview({ ...newReview, role: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl text-xs border border-slate-200 focus:outline-none focus:border-slate-800"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Your Review / Testimonial
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Tell us about the results or experience you had..."
                    value={newReview.content}
                    onChange={(e) => setNewReview({ ...newReview, content: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl text-xs border border-slate-200 focus:outline-none focus:border-slate-800 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl text-xs font-black bg-rose-600 hover:bg-rose-500 text-white transition shadow-lg shadow-rose-600/30 cursor-pointer"
                >
                  Publish Verified Testimonial 🎉
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
