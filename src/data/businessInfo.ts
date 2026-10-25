/**
 * Verified public business information for How About Coffee, Jagatpura.
 * Keep location/contact facts here so every page section can share one source.
 */

export interface DayHours {
  day: string;
  hours: string;
}

export interface BusinessInfo {
  name: string;
  tagline: string;
  category: string;
  location: {
    area: string;
    city: string;
    state: string;
    country: string;
    pincode: string;
    coordinates: {
      latitude: number;
      longitude: number;
    };
    fullStreetAddress: string;
    shortAddress: string;
    landmarks: string;
    googleMapsSearchUrl: string;
  };
  contact: {
    phone: string;
    alternatePhone: string;
    phoneCallHref: string;
    alternatePhoneCallHref: string;
    whatsappHref: string;
    email: string;
    emailMailtoHref: string;
    website: string;
    instagram: string;
    instagramUrl: string;
    facebook: string;
    facebookUrl: string;
    zomatoUrl: string;
    swiggyUrl: string;
    magicpinUrl: string;
    tripadvisorUrl: string;
    restaurantGuruUrl: string;
  };
  dining: {
    estimatedSpend: string;
    dietary: string;
    options: string;
    amenities: string;
  };
  operatingHours: {
    statusNote: string;
    primaryHours: string;
    schedule: DayHours[];
    sources: { source: string; hours: string }[];
  };
}

const DAILY_HOURS = '9:00 AM – 11:59 PM';

export const BUSINESS_INFO: BusinessInfo = {
  name: 'How About Coffee',
  tagline: 'Brew · Bite · Belong',
  category: 'Pure Vegetarian Café · Coffee, Pizza, Sandwiches, Fast Food & Desserts',
  location: {
    area: 'Jagatpura',
    city: 'Jaipur',
    state: 'Rajasthan',
    country: 'India',
    pincode: '302017',
    coordinates: {
      latitude: 26.8467034,
      longitude: 75.8284926,
    },
    fullStreetAddress:
      'Shop No. 1–2, Plot No. 1, Aryaveer Nagar, Model Town B, Jagatpura Road, Jaipur, Rajasthan 302017, India',
    shortAddress: 'Shop 1–2, Plot 1, Aryaveer Nagar, Jagatpura, Jaipur 302017',
    landmarks: 'Aryaveer Nagar, Model Town B, on Jagatpura Road',
    googleMapsSearchUrl:
      'https://www.google.com/maps/place/HOW+ABOUT+COFFEE/@26.8467034,75.8284926,706m/data=!3m2!1e3!4b1!4m6!3m5!1s0x396db72daf8192fb:0x1122cbc07a67577f!8m2!3d26.8467034!4d75.8284926!16s%2Fg%2F11m59q7t5d',
  },
  contact: {
    phone: '+91 90579 99922',
    alternatePhone: '+91 97825 19942',
    phoneCallHref: 'tel:+919057999922',
    alternatePhoneCallHref: 'tel:+919782519942',
    whatsappHref:
      'https://wa.me/919057999922?text=Hi%20How%20About%20Coffee%2C%20I%20would%20like%20to%20know%20more.',
    // No public email was found; the demo prioritises phone and WhatsApp.
    email: 'Call or WhatsApp us',
    emailMailtoHref:
      'https://wa.me/919057999922?text=Hi%20How%20About%20Coffee%2C%20I%20would%20like%20to%20know%20more.',
    website: 'https://howaboutcoffee.in/',
    instagram: 'howaboutcoffee',
    instagramUrl: 'https://www.instagram.com/howaboutcoffee/',
    facebook: 'howaboutcoffee',
    facebookUrl: 'https://www.facebook.com/howaboutcoffee',
    zomatoUrl: 'https://www.zomato.com/jaipur/how-about-coffee-jagatpura',
    swiggyUrl: 'https://www.swiggy.com/restaurants/jaipur/jagatpura/how-about-coffee-1067019/dineout',
    magicpinUrl: 'https://magicpin.in/Jaipur/Model-Town/Restaurant/How-About-Coffee/store/4a1105',
    tripadvisorUrl: '#',
    restaurantGuruUrl: '#',
  },
  dining: {
    estimatedSpend: '₹500–₹700 for two (approx.)',
    dietary: 'Pure Vegetarian · Jain & Vegan options available',
    options: 'Dine-in · Takeaway · Delivery · Reservations',
    amenities: 'Work friendly · Free Wi-Fi · Books · Parking · Pet friendly',
  },
  operatingHours: {
    statusNote:
      'Public listings currently show daily opening from 9:00 AM until approximately midnight. Please call before visiting on public holidays.',
    primaryHours: DAILY_HOURS,
    schedule: [
      { day: 'Monday', hours: DAILY_HOURS },
      { day: 'Tuesday', hours: DAILY_HOURS },
      { day: 'Wednesday', hours: DAILY_HOURS },
      { day: 'Thursday', hours: DAILY_HOURS },
      { day: 'Friday', hours: DAILY_HOURS },
      { day: 'Saturday', hours: DAILY_HOURS },
      { day: 'Sunday', hours: DAILY_HOURS },
    ],
    sources: [
      { source: 'Magicpin', hours: DAILY_HOURS },
      { source: 'Zomato / District', hours: 'Opens daily at 9:00 AM' },
      { source: 'Swiggy Dineout', hours: 'Open until 11:59 PM' },
    ],
  },
};

// Compatibility alias while the remaining template sections are migrated phase-by-phase.
export const FOOGLE_BUSINESS_INFO = BUSINESS_INFO;
