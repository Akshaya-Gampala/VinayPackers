import {
  Home,
  Building2,
  MapPin,
  Truck,
  Car,
  Bike,
  Package,
  PackageCheck,
  Sofa,
  Warehouse,
  ShieldCheck,
  Clock,
  IndianRupee,
  DoorOpen,
  Headphones,
  Route,
  type LucideIcon,
} from 'lucide-react';

export const BUSINESS = {
  name: 'Vinay Packers and Movers',
  phone: '+91 9014810179',
  phoneRaw: '+919014810179',
  whatsapp: '919014810179',
  whatsappDisplay: '+91 9014810179',
  primaryLocations: ['Hanumakonda', 'Warangal'],
  state: 'Telangana',
  hours: '24/7 – All Days',
  tagline: 'Your Trusted Moving Partner – From Hanumakonda & Warangal to Anywhere in India!',
  about:
    'Vinay Packers and Movers is committed to making relocation simple, safe, and convenient. Based in the Hanumakonda and Warangal region of Telangana, we provide packing, loading, transportation, unloading, and relocation services for households, offices, and vehicles. Our goal is to provide reliable moving solutions from our local region to destinations across India.',
};

export const WHATSAPP_DEFAULT_MSG =
  'Hello Vinay Packers and Movers, I need information about your packing and moving services. Please contact me.';

export function whatsappUrl(message: string = WHATSAPP_DEFAULT_MSG): string {
  return `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const telUrl = `tel:${BUSINESS.phoneRaw}`;

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
}

export const SERVICES: Service[] = [
  {
    id: 'household-shifting',
    title: 'Household Shifting',
    description:
      'Complete home relocation with careful packing of all household items, secure loading, and safe delivery to your new home.',
    icon: Home,
    image:
      'https://images.pexels.com/photos/4246119/pexels-photo-4246119.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'office-relocation',
    title: 'Office Relocation',
    description:
      'Efficient office moving services — computers, furniture, files, and equipment relocated with minimal downtime.',
    icon: Building2,
    image:
      'https://images.pexels.com/photos/7217852/pexels-photo-7217852.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'local-shifting',
    title: 'Local Shifting',
    description:
      'Quick and affordable moving within Hanumakonda, Warangal, and nearby areas with same-day service options.',
    icon: MapPin,
    image:
      'https://images.pexels.com/photos/7464712/pexels-photo-7464712.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'domestic-relocation',
    title: 'Domestic Relocation',
    description:
      'Long-distance relocation across India with full tracking, insurance support, and door-to-door delivery.',
    icon: Truck,
    image:
      'https://images.pexels.com/photos/15084344/pexels-photo-15084344.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'car-transportation',
    title: 'Car Transportation',
    description:
      'Safe car carrier services with specialized vehicle carriers ensuring scratch-free and damage-free delivery.',
    icon: Car,
    image:
      'https://images.pexels.com/photos/34539243/pexels-photo-34539243.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'bike-transportation',
    title: 'Bike Transportation',
    description:
      'Secure two-wheeler transportation with proper packing and loading to keep your bike safe across long distances.',
    icon: Bike,
    image:
      'https://images.pexels.com/photos/1606957/pexels-photo-1606957.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'packing-unpacking',
    title: 'Packing and Unpacking',
    description:
      'Professional packing using high-quality bubble wrap, corrugated boxes, and protective materials — plus careful unpacking.',
    icon: Package,
    image:
      'https://images.pexels.com/photos/7217822/pexels-photo-7217822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'loading-unloading',
    title: 'Loading and Unloading',
    description:
      'Trained personnel handle loading and unloading with the right equipment to prevent any damage to your belongings.',
    icon: PackageCheck,
    image:
      'https://images.pexels.com/photos/5933476/pexels-photo-5933476.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'furniture-shifting',
    title: 'Furniture Shifting',
    description:
      'Specialized furniture moving with disassembly, protective wrapping, and reassembly at your destination.',
    icon: Sofa,
    image:
      'https://images.pexels.com/photos/7217801/pexels-photo-7217801.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'commercial-goods',
    title: 'Commercial Goods Transportation',
    description:
      'Reliable transport for commercial and industrial goods with secure packing and timely delivery.',
    icon: Warehouse,
    image:
      'https://images.pexels.com/photos/9115461/pexels-photo-9115461.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'storage-warehousing',
    title: 'Storage and Warehousing',
    description:
      'Safe short-term and long-term storage in clean, secure warehouses with 24/7 monitoring.',
    icon: Warehouse,
    image:
      'https://images.pexels.com/photos/4246106/pexels-photo-4246106.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export interface Destination {
  name: string;
  isPrimary?: boolean;
}

export const DESTINATIONS: Destination[] = [
  { name: 'Hyderabad' },
  { name: 'Secunderabad' },
  { name: 'Karimnagar' },
  { name: 'Khammam' },
  { name: 'Vijayawada' },
  { name: 'Visakhapatnam' },
  { name: 'Bengaluru' },
  { name: 'Chennai' },
  { name: 'Mumbai' },
  { name: 'Pune' },
  { name: 'Delhi' },
  { name: 'Kolkata' },
  { name: 'All India' },
];

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const FEATURES: Feature[] = [
  {
    title: 'Experienced Moving Professionals',
    description: 'Our trained team handles every item with the care and expertise it deserves.',
    icon: ShieldCheck,
  },
  {
    title: 'Safe Packing Materials',
    description: 'We use premium bubble wrap, corrugated boxes, and protective wraps for maximum safety.',
    icon: Package,
  },
  {
    title: 'Affordable & Transparent Pricing',
    description: 'No hidden charges. Clear, upfront quotes tailored to your moving needs.',
    icon: IndianRupee,
  },
  {
    title: 'On-Time Delivery',
    description: 'We respect your schedule and commit to timely pickup and delivery every time.',
    icon: Clock,
  },
  {
    title: 'Door-to-Door Relocation',
    description: 'Complete pickup and delivery service from your doorstep to your new destination.',
    icon: DoorOpen,
  },
  {
    title: 'Customer-Friendly Service',
    description: 'Friendly, responsive support that keeps you informed at every step of your move.',
    icon: Headphones,
  },
  {
    title: '24/7 Assistance',
    description: 'Round-the-clock customer support to address any questions or concerns.',
    icon: Clock,
  },
  {
    title: 'All India Transportation',
    description: 'Reliable relocation services connecting Hanumakonda & Warangal to all of India.',
    icon: Route,
  },
];

export interface GalleryItem {
  src: string;
  alt: string;
  label: string;
  description?: string;
}

export const GALLERY: GalleryItem[] = [
  {
    src: '/images/gallery/boxesforPacking.jpeg',
    alt: 'Multi-layer corrugated sheet and stretch film packing for household items',
    label: 'Secure Carton & Goods Packing',
    description: 'Multi-layer protective corrugated sheets and stretch film wrapping for safe transit.',
  },
  {
    src: '/images/gallery/diningTablepacking.jpeg',
    alt: 'Wooden dining table with protective top wrapping and individually padded legs',
    label: 'Dining Table Protective Packing',
    description: 'Custom corrugated wrapping with individual leg padding for wooden dining tables.',
  },
  {
    src: '/images/gallery/packing.jpeg',
    alt: 'Heavy appliance and household furniture safely packed with corrugated cardboard and film',
    label: 'Household Goods & Appliance Packing',
    description: 'Heavy-duty multi-layer wrapping for appliances and large furniture items.',
  },
  {
    src: '/images/gallery/SafePackaging.jpeg',
    alt: 'Specialized safe packaging for tall showcases, temple units, and delicate home goods',
    label: 'Safe & Delicate Item Packaging',
    description: 'Specialized protective packing for delicate furniture, showcases, and household goods.',
  },
  {
    src: '/images/gallery/sofapacking.jpeg',
    alt: 'Sofa armchair fully protected in thick moisture and dust-resistant wrapping',
    label: 'Sofa & Furniture Cushioning',
    description: 'Complete moisture and scratch-resistant protective cover for sofas and upholstery.',
  },
];

export const HERO_IMAGE = '/images/banner/home-banner.png';

export const ABOUT_IMAGE = '/images/about/about-vinay-packers.jpg';

export const CTA_IMAGE = '/images/about/about-vinay-packers.jpg';
