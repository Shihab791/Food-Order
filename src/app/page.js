import CategorySection from "./components/CategorySection";
import Home from "./components/Home";
import AboutSection from "./components/AboutSection";
import MenuSection from "./components/MenuSection";
import OfferSection from "./components/OfferSection";
import ShowcaseSection from "./components/ShowcaseSection";
import TimelineSection from "./components/TimelineSection";
import ChefsSection from "./components/ChefsSection";
import OpeningHours from "./components/OpeningHours";
import Testimonials from "./components/Testimonials";
import Reservation from "./components/Reservation";
import BlogPosts from "./components/BlogPosts";
import Newsletter from "./components/Newsletter";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
export default function Page() {
  return (
    <main>
      <Home />
      <CategorySection />
      <AboutSection />
      <MenuSection />
      <OfferSection />
      <ShowcaseSection />
      <TimelineSection />
      <ChefsSection />
      <OpeningHours />
      <Testimonials />
      <Reservation />
      <BlogPosts />
      <Newsletter />
      <ContactUs />
      <Footer />

    </main>
  );
}