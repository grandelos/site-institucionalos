import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProductSection from '../components/ProductSection';
import HistorySection from '../components/HistorySection';
import TeamSection from '../components/TeamSection';
import InfluencerSection from '../components/InfluencerSection';
import PartnersSection from '../components/PartnersSection';
import MembershipSection from '../components/MembershipSection';
import VideoSection from '../components/VideoSection';
import SocialFeedSection from '../components/SocialFeedSection';
import NewsSection from '../components/NewsSection';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="bg-los-black min-h-screen">
      <main>
        <Hero />
        <PartnersSection />
        <ProductSection />
        <HistorySection />
        
        <TeamSection />
        <InfluencerSection />

        <MembershipSection />
        
        {/* Spacer to separate the sticky context of Membership from Video Section */}
        <div className="h-32 w-full bg-los-black relative z-10 border-t border-b border-white/10 flex items-center justify-center overflow-hidden">
           <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,61,0,0.05),transparent)]" />
           <div className="w-px h-full bg-white/5 absolute left-1/2 -translate-x-1/2" />
           <div className="w-px h-full bg-white/5 absolute left-1/4 -translate-x-1/2" />
           <div className="w-px h-full bg-white/5 absolute left-3/4 -translate-x-1/2" />
        </div>
        
        <VideoSection />
        <SocialFeedSection />
        <NewsSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;
