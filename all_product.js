import p1_img from "./b1.png";
import p2_img from "./b2.png";
import p3_img from "./b3.png";
import p4_img from "./b4.png";

import p5_img from "./ks1.png";
import p6_img from "./ks2.png";
import p7_img from "./ks3.png";
import p8_img from "./ks4.png";
import p9_img from "./ks5.png";
import p10_img from "./ks6.png";
import p11_img from "./ks7.png";
import p12_img from "./ks8.png";

import p13_img from "./nc1.png";
import p14_img from "./nc2.png";
import p15_img from "./nc3.png";
import p16_img from "./nc4.png";
import p17_img from "./nc5.png";
import p18_img from "./nc6.png";
import p19_img from "./nc7.png";
import p20_img from "./nc8.png";
import p21_img from "./nc9.png";
import p22_img from "./nc10.png";
import p23_img from "./nc11.png";
import p24_img from "./nc12.png";

import p25_img from "./m1.png";
import p26_img from "./m2.png";
import p27_img from "./m3.png";
import p28_img from "./m4.png";
import p29_img from "./m5.png";
import p30_img from "./m6.png";
import p31_img from "./m7.png";
import p32_img from "./m8.png";
import p33_img from "./m9.png";
import p34_img from "./m10.png";

let all_product = [

  // ================= WOMEN =================
  {
    id: 1,
    name: "Serica Cardigan",
    category: 2,
    image: p1_img,
    new_price: 1500,
    old_price: 2000,
  },

  {
    id: 2,
    name: "Mira Kit",
    category: 2,
    image: p2_img,
    new_price: 2500,
    old_price: 2800,
  },

  {
    id: 3,
    name: "Woven Handbag",
    category: 2,
    image: p3_img,
    new_price: 1800,
    old_price: 2000,
  },

  {
    id: 4,
    name: "Pixel Check Blouse",
    category: 2,
    image: p4_img,
    new_price: 2800,
    old_price: 3600,
  },

  // ================= KIDS =================
  {
    id: 5,
    name: "Kids Hoodie",
    category: 3,
    image: p5_img,
    new_price: 1200,
    old_price: 2000,
  },

  {
    id: 6,
    name: "Kids Hoodie",
    category: 3,
    image: p6_img,
    new_price: 1500,
    old_price: 2000,
  },

  {
    id: 7,
    name: "Kids Hoodie",
    category: 3,
    image: p7_img,
    new_price: 2200,
    old_price: 3000,
  },

  {
    id: 8,
    name: "Kids Hoodie",
    category: 3,
    image: p8_img,
    new_price: 1700,
    old_price: 2000,
  },

  {
    id: 9,
    name: "Kids Hoodie",
    category: 3,
    image: p9_img,
    new_price: 1350,
    old_price: 2000,
  },

  {
    id: 10,
    name: "Kids Hoodie",
    category: 3,
    image: p10_img,
    new_price: 1600,
    old_price: 2000,
  },

  {
    id: 11,
    name: "Kids Hoodie",
    category: 3,
    image: p11_img,
    new_price: 1200,
    old_price: 2000,
  },

  {
    id: 12,
    name: "Kids Hoodie",
    category: 3,
    image: p12_img,
    new_price: 1900,
    old_price: 3200,
  },

  // ================= NEW COLLECTION =================
  {
    id: 13,
    name: "Drape Bow Skirt",
    category: 4,
    image: p13_img,
    new_price: 1890,
    old_price: 2000,
  },

  {
    id: 14,
    name: "Perfume",
    category: 4,
    image: p14_img,
    new_price: 4500,
    old_price: 5590,
  },

  {
    id: 15,
    name: "Crop Top",
    category: 4,
    image: p15_img,
    new_price: 2990,
    old_price: 3500,
  },

  {
    id: 16,
    name: "Midi Dress",
    category: 4,
    image: p16_img,
    new_price: 3800,
    old_price: 4000,
  },

  {
    id: 17,
    name: "Tom Carter Polo",
    category: 4,
    image: p17_img,
    new_price: 1800,
    old_price: 2200,
  },

  {
    id: 18,
    name: "Kids Full Kit",
    category: 4,
    image: p18_img,
    new_price: 1600,
    old_price: 2100,
  },

  {
    id: 19,
    name: "Kids Dress",
    category: 4,
    image: p19_img,
    new_price: 1890,
    old_price: 2500,
  },

  {
    id: 20,
    name: "Kids Fashion Dress",
    category: 4,
    image: p20_img,
    new_price: 2500,
    old_price: 3590,
  },

  {
    id: 21,
    name: "Shoreline Top",
    category: 4,
    image: p21_img,
    new_price: 1490,
    old_price: 2990,
  },

  {
    id: 22,
    name: "Formal Kit",
    category: 4,
    image: p22_img,
    new_price: 4590,
    old_price: 5000,
  },

  {
    id: 23,
    name: "Shoulder Stripe Polo",
    category: 4,
    image: p23_img,
    new_price: 2800,
    old_price: 3400,
  },

  {
    id: 24,
    name: "Milano Perfume",
    category: 4,
    image: p24_img,
    new_price: 5990,
    old_price: 6100,
  },

  // ================= MEN =================
  {
    id: 25,
    name: "Sky Blue Polo",
    category: 1,
    image: p25_img,
    new_price: 3590,
    old_price: 4000,
  },

  {
    id: 26,
    name: "Red Polo",
    category: 1,
    image: p26_img,
    new_price: 3790,
    old_price: 4800,
  },

  {
    id: 27,
    name: "Beige Polo",
    category: 1,
    image: p27_img,
    new_price: 3490,
    old_price: 4000,
  },

  {
    id: 28,
    name: "Stripe Polo",
    category: 1,
    image: p28_img,
    new_price: 2800,
    old_price: 3600,
  },

  {
    id: 29,
    name: "Mint Polo",
    category: 1,
    image: p29_img,
    new_price: 2490,
    old_price: 3000,
  },

  {
    id: 30,
    name: "Casual Polo",
    category: 1,
    image: p30_img,
    new_price: 2200,
    old_price: 2800,
  },

  {
    id: 31,
    name: "Oversized Tee",
    category: 1,
    image: p31_img,
    new_price: 2200,
    old_price: 3000,
  },

  {
    id: 32,
    name: "Turtle Neck",
    category: 1,
    image: p32_img,
    new_price: 1700,
    old_price: 2000,
  },

  {
    id: 33,
    name: "Maroon Polo",
    category: 1,
    image: p33_img,
    new_price: 1350,
    old_price: 2000,
  },

  {
    id: 34,
    name: "Peach Polo",
    category: 1,
    image: p34_img,
    new_price: 1600,
    old_price: 2000,
  },

];

export default all_product;
