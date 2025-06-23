import Pune from './Pune.jpg';
import Mumbai from './mumbai.jpg';
import MainBanner from './main-banner.png';
import Logo from './logo.png';
import DefUser from './def-user.png';
import DefOpr from './def-opr.png';
import Banglore from './banglore.jpg';
import Flogo from './flogo.png';
import newBanner from './highway.jpg';
import newnewBanner from './highway2.jpg';
import Carousel1 from './carousel/carousel1.jpg';
import Carousel2 from './carousel/carousel2.jpeg';
import Carousel3 from './carousel/carousel3.jpg';
import Carousel4 from './carousel/carousel4.jpg';
import Carousel5 from './carousel/carousel5.jpg';

//Carousel Images 
export const carousal = [
  {src: Carousel1, author: "John Smith", date: "15 Oct 2023", location: "Mumbai Beach"},
  {src: Carousel2, author: "Priya Sharma", date: "22 Sep 2023", location: "Pune Hills"},
  {src: Carousel3, author: "Rajesh Kumar", date: "10 Nov 2023", location: "Banglore Gardens"},
  {src: Carousel4, author: "Meera Patel", date: "5 Dec 2023", location: "Nashik Vineyards"},
  {src: Carousel5, author: "Vikram Singh", date: "30 Aug 2023", location: "Lonavala Valley"}
]


export const images = {
  Pune,
  Mumbai,
  MainBanner,
  Logo,
  DefUser,
  DefOpr,
  Banglore,
  Flogo,
  newBanner,
  newnewBanner,
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
    amenities: ['A/c',],
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
    rating: 3.2,
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
    rating: 1,
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
    rating: 2.5,
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

export const seats = [
  { _id: 1, pos: 'L', window: true, price: 950, isBooked: false, bookingDetails: {} },
  { _id: 2, pos: 'L', window: true, price: 950, isBooked: true, bookingDetails: { bookedBy: 'Amit Shah', gender: 'Male', inPrice: 1050, bookedTime: '2023-10-15T14:30:00Z' } },
  { _id: 3, pos: 'L', window: false, price: 900, isBooked: false, bookingDetails: {} },
  { _id: 4, pos: 'L', window: true, price: 950, isBooked: false, bookingDetails: {} },
  { _id: 5, pos: 'L', window: true, price: 950, isBooked: true, bookingDetails: { bookedBy: 'Priya Verma', gender: 'Male', inPrice: 975, bookedTime: '2023-10-14T18:45:00Z' } },
  { _id: 6, pos: 'L', window: false, price: 900, isBooked: false, bookingDetails: {} },
  { _id: 7, pos: 'L', window: true, price: 950, isBooked: false, bookingDetails: {} },
  { _id: 8, pos: 'L', window: false, price: 900, isBooked: true, bookingDetails: { bookedBy: 'Rahul Joshi', gender: 'Male', inPrice: 925, bookedTime: '2023-10-16T09:20:00Z' } },
  { _id: 9, pos: 'L', window: true, price: 950, isBooked: false, bookingDetails: {} },
  { _id: 10, pos: 'L', window: false, price: 900, isBooked: false, bookingDetails: {} },
  { _id: 11, pos: 'L', window: true, price: 950, isBooked: true, bookingDetails: { bookedBy: 'Neha Singh', gender: 'Female', inPrice: 1000, bookedTime: '2023-10-15T12:15:00Z' } },
  { _id: 12, pos: 'L', window: false, price: 900, isBooked: false, bookingDetails: {} },
  { _id: 13, pos: 'L', window: true, price: 950, isBooked: false, bookingDetails: {} },
  { _id: 14, pos: 'L', window: false, price: 900, isBooked: true, bookingDetails: { bookedBy: 'Vikram Patel', gender: 'Male', inPrice: 950, bookedTime: '2023-10-14T20:30:00Z' } },
  { _id: 15, pos: 'L', window: true, price: 950, isBooked: false, bookingDetails: {} },
  { _id: 16, pos: 'L', window: false, price: 900, isBooked: false, bookingDetails: {} },
  { _id: 17, pos: 'L', window: true, price: 950, isBooked: true, bookingDetails: { bookedBy: 'Deepika Sharma', gender: 'Female', inPrice: 975, bookedTime: '2023-10-16T11:05:00Z' } },
  { _id: 18, pos: 'L', window: false, price: 900, isBooked: false, bookingDetails: {} },
  { _id: 19, pos: 'U', window: true, price: 1050, isBooked: true, bookingDetails: { bookedBy: 'Rajesh Kumar', gender: 'Male', inPrice: 1100, bookedTime: '2023-10-15T16:40:00Z' } },
  { _id: 20, pos: 'U', window: false, price: 1000, isBooked: false, bookingDetails: {} },
  { _id: 21, pos: 'U', window: true, price: 1050, isBooked: false, bookingDetails: {} },
  { _id: 22, pos: 'U', window: false, price: 1000, isBooked: true, bookingDetails: { bookedBy: 'Ananya Mishra', gender: 'Female', inPrice: 1050, bookedTime: '2023-10-14T15:25:00Z' } },
  { _id: 23, pos: 'U', window: true, price: 1050, isBooked: false, bookingDetails: {} },
  { _id: 24, pos: 'U', window: true, price: 1050, isBooked: true, bookingDetails: { bookedBy: 'Sanjay Gupta', gender: 'Male', inPrice: 1075, bookedTime: '2023-10-16T10:50:00Z' } },
  { _id: 25, pos: 'U', window: false, price: 1000, isBooked: false, bookingDetails: {} },
  { _id: 26, pos: 'U', window: true, price: 1050, isBooked: false, bookingDetails: {} },
  { _id: 27, pos: 'U', window: false, price: 1000, isBooked: true, bookingDetails: { bookedBy: 'Kavita Reddy', gender: 'Female', inPrice: 1025, bookedTime: '2023-10-15T13:10:00Z' } },
  { _id: 28, pos: 'U', window: true, price: 1050, isBooked: false, bookingDetails: {} },
  { _id: 29, pos: 'U', window: false, price: 1000, isBooked: false, bookingDetails: {} },
  { _id: 30, pos: 'U', window: true, price: 1050, isBooked: true, bookingDetails: { bookedBy: 'Arjun Malhotra', gender: 'Male', inPrice: 1100, bookedTime: '2023-10-14T19:35:00Z' } },
  { _id: 31, pos: 'U', window: true, price: 1050, isBooked: false, bookingDetails: {} },
  { _id: 32, pos: 'U', window: false, price: 1000, isBooked: true, bookingDetails: { bookedBy: 'Meera Kapoor', gender: 'Female', inPrice: 1050, bookedTime: '2023-10-16T08:15:00Z' } },
  { _id: 33, pos: 'U', window: true, price: 1050, isBooked: false, bookingDetails: {} },
  { _id: 34, pos: 'U', window: true, price: 1050, isBooked: true, bookingDetails: { bookedBy: 'Aditya Desai', gender: 'Male', inPrice: 1075, bookedTime: '2023-10-15T17:55:00Z' } },
  { _id: 35, pos: 'U', window: false, price: 1000, isBooked: false, bookingDetails: {} },
  { _id: 36, pos: 'U', window: true, price: 1050, isBooked: true, bookingDetails: { bookedBy: 'Sunita Patil', gender: 'Female', inPrice: 1100, bookedTime: '2023-10-14T21:40:00Z' } }
]

