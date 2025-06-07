import { nanoid } from "nanoid"
import { CiHeart,CiUser,CiShoppingCart } from "react-icons/ci";
import { AiOutlineMail,AiOutlineWhatsApp, AiOutlinePhone } from "react-icons/ai";
import { Link } from "react-router-dom";
import ReactWhatsapp from "react-whatsapp";
import axios from "axios";
import { FaXTwitter,FaInstagram,FaFacebook,FaTiktok } from "react-icons/fa6";
import { logoutUser } from "../features/auth/authSlice";


const appUrl = 'http://localhost:5000/api/v2';


export const customAPI = axios.create({
  baseURL:appUrl,
  headers: {
    "Content-Type": "application/json"
},
  withCredentials: true
})

 const axiosInterceptor = (store) => {
  
  customAPI.interceptors.response.use((res) => res, (error) =>{
    if(error?.response?.status === 401 || null){
      window.location.reload()
      store.dispatch(logoutUser())
      
      document.cookie = 'session_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'; 
      
    }
    return Promise.reject(error)
  })
}

export default axiosInterceptor
//  export const config = {
//         // headers: {
//         //     "Content-Type": "application/json"
//         // },
//         // withCredentials: true
//     };

export const formatPrice = (price) => {
  const dollarAmount = new Intl.NumberFormat('en-US',{
    style:'currency',
    currency:'USD'
  }).format((price))

  return dollarAmount
}

export const Socials = [
  {
    id:nanoid(),
    socialLink:<FaXTwitter/>
  },
   {
    id:nanoid(),
    socialLink:<FaInstagram/>
  },
   {
    id:nanoid(),
    socialLink:<FaFacebook/>
  },
   {
    id:nanoid(),
    socialLink:<FaTiktok/>
  },
]

export const NavLinkOne = [
   
    {
      id:nanoid(),
      text:'FAQ',
      link:'/faq'
    
    },
      {
      id:nanoid(),
      text:'Contact Us',
      link:'/contact'
    },

      {
      id:nanoid(),
      text:'Admin',
      link:'/admin'
    
    }
]

export const NavLinkTwo = [
      {
      id:nanoid(),
      text:'Explore All',
      link:'/explore'
    
    },
    {
      id:nanoid(),
      text:'Bracelets',
      link:'/bracelets'
    
    },
      {
      id:nanoid(),
      text:'Earrings',
      link:'/earrings'
    },

      {
      id:nanoid(),
      text:'NeckLaces',
      link:'/necklaces'
    
    },

      {
      id:nanoid(),
      text:'Rings',
      link:'/rings'
    
    },
    
]

export const AdminLink = [
    {
      id:nanoid(),
      text:'Orders',
      link:'/admin'
    
    },
      {
      id:nanoid(),
      text:'Users',
      link:'admin-users'
    },

      {
      id:nanoid(),
      text:'Reviews',
      link:'admin-reviews'
    
    },

     {
      id:nanoid(),
      text:'Products',
      link:'admin-products'
    
    }
]

export const NavIcons = [

  //  {
  //     id:nanoid(),
  //     icon:<CiSearch className="icon"/>,
  //     link:'/search'
    
  //   },

      {
      id:nanoid(),
      icon:<CiUser className="icon"/>,
      // link:'/account'
    
    },

      {
      id:nanoid(),
      icon:<CiHeart className="icon"/>,
      link:'/wishlist'
    
    },

      {
      id:nanoid(),
      icon:<CiShoppingCart className="icon"/>,
      link:'/cart'
    
    },

]

export const FaqArray = [

  {
    id:nanoid(),
    title:'Payments',
    questionsArray:[
      {
        id:nanoid(),
        question:'How can I pay for my jewelry?',
        answer:'We gladly accept all major credit cards (i.e. Visa, Mastercard, etc.) or paypal. We may also accept additional payment methods depending on which country you are shopping from. Any available payment methods will be displayed on our checkout page.'
      },

        {
        id:nanoid(),
        question:"What should I do if my payment doesn’t work?",
        answer:"We’re sorry for the trouble! First, make sure that your shipping and billing details are correct. If that doesn’t work, try contacting your bank about the payment. If you’re still having an issue, drop us a message and we’ll do our best to help!"
      },

       {
        id:nanoid(),
        question:"Where do I enter my discount code?",
        answer:"During the first stage of checkout, look for a box beneath your order summary. Enter your code and click ‘apply,’ then watch the magic happen. Remember Pluto Child, only one discount code can be used per order!"
      },
      {
        id:nanoid(),
        question:"Can I use a discount code on a sale item?",
        answer:"Discount codes apply to most of our jewelry, with the exception of pieces currently on sale. Our sale items already have a larger discount than most of the codes ever available, which means you are getting the best possible deal on them!"
      },
      {
        id:nanoid(),
        question:"Minimum order value",
        answer:"The minimum order value is $250."
      },

    ]
  },
   {
    id:nanoid(),
    title:'Shipping',
    questionsArray:[
      {
        id:nanoid(),
        question:"What is Combined Shipping?",
        answer:"Combined shipping means that when you order items from both our made-to-order collection and our ready-to-ship selection, we will ship everything together.This helps us reduce our carbon footprint and is part of our commitment to becoming a more climate-positive company."
      },
       {
        id:nanoid(),
        question:"Can I Get My Items Sooner?",
        answer:"If you need your ready-to-ship items sooner, please place a separate order for those products. By placing separate orders, you can receive your ready-to-ship items without waiting for the made-to-order items to be completed."
      },
       {
        id:nanoid(),
        question:"How long will it take for my jewelry to arrive?",
        answer:"Standard Delivery: 3-8 Business Days. Express Shipping: 2-3 Business Days"
      },
       {
        id:nanoid(),
        question:"How much does shipping cost?",
        answer:"Shipping prices depend on the country of destination and will be shown at checkout.We are happy to offer the most competitive rates while still ensuring fast and trouble-free deliveries."
      },
       {
        id:nanoid(),
        question:"Can I have my order shipped as a gift?",
        answer:"Our magical pieces are the perfect gift for that special person in your life… great choice! All our jewelry is shipped in a beautiful jewelry box and without an invoice.We also offer beautiful gift bags and a perfect gift wrap set to add a touch of glam to your thoughtful present. No need to buy wrapping elsewhere - just add to your basket, pop the jewelry in when it arrives, and give that perfect gift!"
      },
    ]
  },
   {
    id:nanoid(),
    title:'Pre-Order',
    questionsArray:[
      {
        id:nanoid(),
        question:"How does a pre-order work?",
        answer:"Our team creates brand new designs to offer in a pre-order collection. During this time, every item is available for purchase. After the pre-order period ends, only the top selling items will join our permanent collection. That means your vote impacts the style of Pluto Magic jewelry for an entire season. And if you’ve got a unique eye and picked something that others did not, you’ll become the proud owner of something rare or even one of a kind."
      },
       {
        id:nanoid(),
        question:"When will my pre-ordered jewelry arrive?",
        answer:"Each pre-order collection has its own delivery timeline. Check out the pre-order collection page to find out when a specific item will ship. This is usually around 5-8 weeks from the collection launch if there are no production delays. Of course, we’ll email you with specific details on your order to keep you updated at all times."
      },
       {
        id:nanoid(),
        question:"When will I be charged for a pre-ordered item?",
        answer:"We charge your card for the item at time of checkout.But don’t worry, as with all other jewelry you’ll have the same rights for returns and exchanges in case you’re not happy with your jewelry."
      },
       {
        id:nanoid(),
        question:"Is pre-ordering jewelry sustainable?",
        answer:"While any piece of jewelry will have some impact on the planet, pre-ordering jewelry helps us cut down on waste. By only creating pieces that already have a home, we’re making our industry a little bit greener. Also, for every piece of jewelry we sell, we plant a tree!"
      },
       {
        id:nanoid(),
        question:"What if I buy an item from the pre-order collection and another collection together?",
        answer:"We're committed to sustainability. To minimize energy use and packaging waste, we wait until your entire order is ready before shipping. Rest assured, we will keep your in-stock items safe and reserved for you, even if they sell out online, until your entire order is ready to be sent."
      },
    ]
  },
   {
    id:nanoid(),
    title:'Returns',
    questionsArray:[
    
      {
        id:nanoid(),
        question:"Can I return my jewelry?",
        answer:"Yes! We want you to be head over heels for your new jewelry. If you’re not 100% satisfied,we want to make things right"
      },
      {
        id:nanoid(),
        question:"How do I return my jewelry?",
        answer:"Simply email us within 60 days from the day you receive your parcel to request a refund or exchange, and we’ll provide you with step-by-step return instructions."
      },
      {
        id:nanoid(),
        question:"How do I exchange my jewelry?",
        answer:"Exchanges are not available for international orders placed during site-wide promotions. Thank you for your understanding! If you need to return an item, we'll be more than happy to assist you in processing the return, and in return, we'll issue you a voucher. This voucher can be used towards your future purchases."
      },
      {
        id:nanoid(),
        question:"When will I receive my refund?",
        answer:"As soon as we receive your returned item(s), we will initiate a refund of the purchase price of your items (excl. the shipping fee in case you paid for shipping). Please note that for all countries taxes, duties and shipping costs are non-refundable."
      },
    ]
  },
   {
    id:nanoid(),
    title:'Warranty',
    questionsArray:[
     {
        id:nanoid(),
        question:"Do you offer a warranty?",
        answer:"Yes, of course.Enjoy our complimentary 2 Year Warranty on all jewelry pieces in our entire collection."
      },
      {
        id:nanoid(),
        question:"How do I make a warranty claim?",
        answer:"We are sorry to hear that your jewelry isn’t 100% perfect.If you experience faults with your jewelry outside of our normal returns & exchanges policy we mention in aboves' section we’ll review your enquiry as a warranty claim. Please contact us at contact@plutostore.com."
      },
   
    ]
  },
]


export const contactArray = [

  {
    id:nanoid(),
    icon:<AiOutlineMail className="icon"/>,
    title:"Email",
    text:"Let's sort out your sparkly needs",
    link:<Link to='/contact-form' className="link"> Get in touch</Link>,
  },
   {
    id:nanoid(),
    icon:<AiOutlinePhone className="icon"/>,
    title:"Phone",
    text:"Let's sort out your sparkly needs",
    link:<Link to="tel:+2349038951193" className="link">Call us today</Link>
  },
   {
    id:nanoid(),
    icon:<AiOutlineWhatsApp className="icon"/>,
    title:"WhatsApp",
    text:"Available: 24/7",
    link:<ReactWhatsapp number="+234 9038951193" message="Welcome to Pluto Store! How can we help you?" className="link">contact via whatsapp</ReactWhatsapp>,
  },
]

export const contactSelectArray = ['Return','Exchange','Broken/defective item','Question about shipping or delivery','Cancel my order','Change my order or shipping address','Collaboration','Wholesale','Other']