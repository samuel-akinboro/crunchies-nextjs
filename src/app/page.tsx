import HomeHeader from '@/components/home/HomeHeader';
import BannerCarousel from '@/components/home/BannerCarousel';
import Recommendations from '@/components/home/Recommendations';
import Categories from '@/components/home/Categories';
import FoodMenu from '@/components/home/FoodMenu';
import HotDealsCarousel from '@/components/home/HotDealsCarousel';
import TrendingPlatters from '@/components/home/TrendingPlatters';
import RecommendedSection from '@/components/home/RecommendedSection';
import AllInCrunchies from '@/components/home/AllInCrunchies';
import CurrentLocation from '@/components/home/CurrentLocation';

export default function HomeScreen() {
  return (
    <div className='hide-scrollbar'>
      <div className="flex flex-col min-h-screen max-w-md mx-auto bg-white dark:bg-black hide-scrollbar">
        <HomeHeader />
        <main className="flex-1 overflow-y-auto hide-scrollbar">
          <div className='h-2' />
          <div className="px-5">
            <CurrentLocation location="3 Ajayi Street Lekki Phase 1 Lagos" />
            <div className="h-4" /> {/* Equivalent to SizedBox height={15} */}
            <BannerCarousel />
            <Recommendations />
          </div>
          <Categories />
          <FoodMenu />
          <HotDealsCarousel />
          <TrendingPlatters />
          <RecommendedSection />
          <AllInCrunchies />
          <div className="h-24" /> {/* Equivalent to SizedBox height={90} */}
        </main>
      </div>
    </div>
  );
}