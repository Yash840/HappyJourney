import Pune from './Pune.jpg';
import Mumbai from './mumbai.jpg';
import MainBanner from './main-banner.png';
import Logo from './logo.png';
import DefUser from './def-user.png';
import DefOpr from './def-opr.png';
import Banglore from './banglore.jpg';
import Flogo from './flogo.png';


export const images = {
  Pune,
  Mumbai,
  MainBanner,
  Logo,
  DefUser,
  DefOpr,
  Banglore,
  Flogo
};

export const footerLinks = [
  {
    title: "Quick Links",
    links: [
      {text: "Home", path: "/"},
      {text: "Routes", path: "/routes"},
      {text: "My Bookings", path: "/bookings"},
      {text: "Account", path: "/account"},
      {text: "Help", path: "/help"}
    ]
  },
  {
    title: "Company",
    links: [
      {text: "About Us", path: "/about"},
      {text: "Careers", path: "/careers"},
      {text: "Press", path: "/press"},
      {text: "Investors", path: "/investors"},
      {text: "Partners", path: "/partners"}
    ]
  },
  {
    title: "Connect with Us",
    links: [
      {text: "LinkedIn", path: "#"},
      {text: "Instagram", path: "#"},
      {text: "E-Mail", path: "#"},
      {text: "Contact Us", path: "#"}
    ]
  }
];

export const popLocations = [
  { name : 'Pune',img : Pune, id : 1 },
  { name : 'Mumbai', img : Mumbai, id : 2},
  { name : 'Banglore', img : Banglore, id : 3}
]


export const buses = [
  {
    operator: 'Batli Travels',
    model: 'Benz A/c sleeper (2+1)',
    source: 'Pune',
    destination: 'Mumbai',
    departure: '20:30',
    arrival: '06:00',
    duration: '10',
    isNew: true,
    rating: 4.9,
    reviews: 300,
    amenities: {
      ac: true,
      tv: true,
      chargingPort: true
    },
    singleSeats: 10,
    doubleSeats: 10,
    minPrice: 950
  },
  {
    operator: 'Sharma Travels',
    model: 'Volvo A/c sleeper (2+1)',
    source: 'Mumbai',
    destination: 'Nagpur',
    departure: '18:00',
    arrival: '08:30',
    duration: '14.5',
    isNew: false,
    rating: 4.5,
    reviews: 420,
    amenities: {
      ac: true,
      tv: true,
      chargingPort: true
    },
    singleSeats: 12,
    doubleSeats: 8,
    minPrice: 1200
  },
  {
    operator: 'Royal Travels',
    model: 'Scania Semi-sleeper (2+2)',
    source: 'Nagpur',
    destination: 'Aurangabad',
    departure: '21:15',
    arrival: '09:45',
    duration: '12.5',
    isNew: true,
    rating: 4.7,
    reviews: 280,
    amenities: {
      ac: true,
      tv: false,
      chargingPort: true
    },
    singleSeats: 0,
    doubleSeats: 20,
    minPrice: 850
  },
  {
    operator: 'Comfort Line',
    model: 'Tata A/c sleeper (2+1)',
    source: 'Pune',
    destination: 'Nashik',
    departure: '23:00',
    arrival: '04:30',
    duration: '5.5',
    isNew: false,
    rating: 4.2,
    reviews: 190,
    amenities: {
      ac: true,
      tv: false,
      chargingPort: true
    },
    singleSeats: 8,
    doubleSeats: 10,
    minPrice: 550
  },
  {
    operator: 'Highway Kings',
    model: 'Volvo A/c sleeper (2+1)',
    source: 'Mumbai',
    destination: 'Pune',
    departure: '06:30',
    arrival: '09:30',
    duration: '3',
    isNew: false,
    rating: 4.8,
    reviews: 510,
    amenities: {
      ac: true,
      tv: true,
      chargingPort: true
    },
    singleSeats: 10,
    doubleSeats: 12,
    minPrice: 400
  },
  {
    operator: 'Shivneri Express',
    model: 'Mercedes Seater (2+2)',
    source: 'Aurangabad',
    destination: 'Mumbai',
    departure: '19:45',
    arrival: '05:15',
    duration: '9.5',
    isNew: true,
    rating: 4.6,
    reviews: 320,
    amenities: {
      ac: true,
      tv: true,
      chargingPort: true
    },
    singleSeats: 0,
    doubleSeats: 22,
    minPrice: 780
  },
  {
    operator: 'Sahyadri Travels',
    model: 'Ashok Leyland sleeper (2+1)',
    source: 'Nashik',
    destination: 'Kolhapur',
    departure: '20:00',
    arrival: '07:30',
    duration: '11.5',
    isNew: false,
    rating: 4.0,
    reviews: 150,
    amenities: {
      ac: true,
      tv: false,
      chargingPort: false
    },
    singleSeats: 12,
    doubleSeats: 8,
    minPrice: 700
  },
  {
    operator: 'Konkan Express',
    model: 'Volvo A/c sleeper (2+1)',
    source: 'Mumbai',
    destination: 'Ratnagiri',
    departure: '22:30',
    arrival: '06:15',
    duration: '7.75',
    isNew: true,
    rating: 4.4,
    reviews: 210,
    amenities: {
      ac: true,
      tv: true,
      chargingPort: true
    },
    singleSeats: 10,
    doubleSeats: 10,
    minPrice: 650
  },
  {
    operator: 'City Connect',
    model: 'Bharat Benz Semi-sleeper (2+2)',
    source: 'Pune',
    destination: 'Aurangabad',
    departure: '17:00',
    arrival: '23:30',
    duration: '6.5',
    isNew: false,
    rating: 4.3,
    reviews: 275,
    amenities: {
      ac: true,
      tv: false,
      chargingPort: true
    },
    singleSeats: 0,
    doubleSeats: 20,
    minPrice: 600
  },
  {
    operator: 'Maharashtra Travels',
    model: 'Scania A/c sleeper (2+1)',
    source: 'Nagpur',
    destination: 'Pune',
    departure: '16:45',
    arrival: '09:15',
    duration: '16.5',
    isNew: true,
    rating: 4.7,
    reviews: 340,
    amenities: {
      ac: true,
      tv: true,
      chargingPort: true
    },
    singleSeats: 12,
    doubleSeats: 10,
    minPrice: 1500
  }
]