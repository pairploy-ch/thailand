'use client';

import { useState } from 'react';
import { Home, Bed, Bath, Maximize, Calendar, MapPin, Phone, Mail, Share2, Heart } from 'lucide-react';
import { Header } from "@/components/headerDark"

export default function PropertyListing() {
  const [currentImage, setCurrentImage] = useState(0);
  const [liked, setLiked] = useState(false);

  const images = [
     "/assests/as_4.jpg",
    "/assests/as_1.jpg",
     "/assests/as_2.jpg",
      "/assests/as_3.jpg",
      
        "/assests/as_5.jpg",
         "/assests/as_6.jpg",
          "/assests/as_7.jpg",
           "/assests/as_8.jpg",
            "/assests/as_9.jpg",
             "/assests/as_10.jpg",
              "/assests/as_11.jpg",
               "/assests/as_12.jpg",
                "/assests/as_13.jpg",
                 "/assests/as_14.jpg",
                  "/assests/as_15.jpg",
                   "/assests/as_16.jpg",
                    "/assests/as_17.jpg",
                     "/assests/as_18.jpg",
                      "/assests/as_19.jpg",
                       "/assests/as_20.jpg",
                        "/assests/as_21.jpg",
   
  ];

  return (
    
    <div className="">
   
 <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <span>Home</span>
          <span>/</span>
          <span className="text-gray-900">Thamber by Spaceperfect</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
           {/* Image Gallery */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative bg-gray-900">
                <img 
                  src={images[currentImage]} 
                  alt="Property" 
                  className="w-full h-full object-cover"
                />
                
                {/* Previous Button */}
                <button 
                  onClick={() => setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1)}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 rounded-full p-3 shadow-lg hover:bg-white transition"
                >
                  <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                {/* Next Button */}
                <button 
                  onClick={() => setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 rounded-full p-3 shadow-lg hover:bg-white transition"
                >
                  <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                
                {/* Like Button */}
                <button 
                  onClick={() => setLiked(!liked)}
                  className="absolute top-4 right-4 bg-white rounded-full p-3 shadow-lg hover:scale-110 transition"
                >
                  <Heart className={`w-6 h-6 ${liked ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
                </button>
                
                {/* Image Counter */}
                <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                  {currentImage + 1} / {images.length}
                </div>
                
                {/* Dot Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImage(idx)}
                      className={`w-2 h-2 rounded-full transition ${
                        currentImage === idx ? 'bg-white w-8' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              {/* Thumbnail Strip - First Row Only */}
              <div className="grid grid-cols-6 gap-2 p-4">
                {images.slice(0, 6).map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImage(idx)}
                    className={`relative h-20 rounded-lg overflow-hidden border-2 transition hover:border-accent-400 ${
                      currentImage === idx ? 'border-accent-600' : 'border-transparent'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Property Details */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    Thamber by Spaceperfect
                  </h1>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>ห้วยใหญ่-จอมเทียน พัทยา Huay Yai pattaya</span>
                  </div>
                </div>
                <button className="p-3 rounded-full hover:bg-gray-100 transition">
                  <Share2 className="w-6 h-6 text-gray-600" />
                </button>
              </div>

              <div className="flex items-center space-x-6 mb-8 pb-8 border-b">
                <div className="flex items-center space-x-2">
                  <Bed className="w-6 h-6 text-accent-600" />
                  <span className="text-lg font-semibold">4-5 Beds</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Bath className="w-6 h-6 text-accent-600" />
                  <span className="text-lg font-semibold">4-5 Baths</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Maximize className="w-6 h-6 text-accent-600" />
                  <span className="text-lg font-semibold">367 – 425 sqm</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6">
                {/* <div className="text-center p-6 bg-gradient-to-br from-accent-50 to-accent-100 rounded-xl">
                  <Calendar className="w-8 h-8 text-accent-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 mb-1">Built in</p>
                  <p className="text-xl font-bold text-gray-900">2024</p>
                </div> */}
                <div className="text-center p-6 bg-gray-100 rounded-xl">
                  <Maximize className="w-8 h-8 text-accent-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 mb-1">Property size</p>
                  <p className="text-xl font-bold text-gray-900">73 – 103 sqm</p>
                </div>
                <div className="text-center p-6 bg-gray-100 rounded-xl">
                  <Home className="w-8 h-8 text-accent-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 mb-1">Property type</p>
                  <p className="text-xl font-bold text-gray-900">Private Poolvilla</p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Description</h3>
                <p className="text-gray-700 leading-relaxed">
                 Private poovilla สไตล์ Modern Luxury <br />
4 ห้องนอน 4 ห้องน้ำ พร้อมสระว่ายน้ำส่วนตัว <br />
ในโครงการ 𝙏𝙃𝘼𝙈𝘽𝙀𝙍 𝘽𝙮 𝙎𝙥𝙖𝙘𝙚𝙋𝙚𝙧𝙛𝙚𝙘𝙩 พัทยา <br /><br />


🏡 พูลวิลล่าหรู 4 ห้องนอน 4 ห้องน้ำ  <br />
พร้อมสระว่ายน้ำส่วนตัว <br />
ที่ดิน 73–103 ตร.ว.  <br />
พื้นที่ใช้สอย 367–425 ตารางวา <br />
Fully Furnished พร้อมตกแต่งทั้งหลัง <br />

<br /><br />
💰เริ่มต้น 17.5- 24 ล้าน* <br />
| ส่วนลดสูงสุดมูลค่า 2,000,000 บาท* ฟรีบิ้วอิน เฟอร์นิเจอร์ทั้งหลัง <br />
<br /><br />
🛍️ ความเป็นส่วนตัวสูง พื้นที่ขายเพียง 8 ยูนิต<br />
🛍️ เหมาะทั้งพักอาศัยและลงทุนปล่อยเช่า<br />
<br /><br />
📍พิกัด : ห้วยใหญ่-จอมเทียน พัทยา Huay Yai pattaya <br />
แผนที่ bit.ly/4aODenKbr <br /><br />

🚗ทำเลดี ใกล้ Motorway 7  <br />
🛣 10 นาทีจากหาดจอมเทียน <br />
⛳15 นาทีจาก Siam Country Club <br />
🏫20 นาทีจากโรงเรียนนานาชาติ Regent <br />
🛍️10-25 นาทีจากแหล่งช้อปปิ้ง <br /> <br />

💎บ้านพร้อมอยู่ type A 1 หลัง <br />
💎บ้าน type B กำหนดเสร็จธันวาคม <br />

                </p>
              </div>
            </div>
            {/* Maps */}
                 <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.961523297317!2d100.96166640000001!3d12.845761699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3102eda80cd58a9d%3A0x2dc8ad7ed57593e5!2sThamber%20by%20Spaceperfect!5e0!3m2!1sth!2sth!4v1762920137956!5m2!1sth!2sth" 
                width="100%" 
                height="450" 
                style={{border: 0}} 
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Price Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-24">
              <div className="mb-6">
                <p className="text-sm text-gray-600 mb-2">Price Starting</p>
                <p className="text-4xl font-bold text-gray-900">฿17,500,000</p>
              </div>

              <button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-4 rounded-xl font-semibold text-lg hover:from-accent-700 hover:to-accent-800 transition shadow-lg hover:shadow-xl">
                Contact Us
              </button>

              <div className="mt-6 space-y-4">
                <div className="flex items-center space-x-3 text-gray-700">
                  <Phone className="w-5 h-5 text-accent-600" />
                  <span>+66 2 xxx xxxx</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <Mail className="w-5 h-5 text-accent-600" />
                  <span>Thailandprestige6@gmail.com</span>
                </div>
              </div>

              {/* <div className="mt-8 pt-6 border-t">
                <h4 className="font-semibold text-gray-900 mb-4">Request a viewing</h4>
                <input 
                  type="text" 
                  placeholder="Your name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-3 focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                />
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-3 focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                />
                <input 
                  type="tel" 
                  placeholder="Your phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                />
                <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
                  Send Request
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}