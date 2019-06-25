import React from "react";

const mockTypes = [
  {
    name: "Anusara",
    typeId: 9,
    propsUsed: true,
    commonPoses: [
      "Ardha Chandrasana",
      "Vakrasana",
      "Virbhadrasana",
      "Garudasana"
    ],
    beginnerFriendly: true,
    purpose:
      "To align with the Divine. This is achieved by practicing the 3 As: Attitude, Alignment, Action.",
    image: "/static/media/ANUSARA.1d0f525f.png"
  },
  {
    name: "Ashtanga",
    typeId: 4,
    propsUsed: false,
    commonPoses: [
      "Trikonasana",
      "Parivritta Trikonasana",
      "Utthita Hasta Padangushtasana",
      "Marichyasana A",
      "Prasarita Padottanasana",
      "Virabhadrasana I",
      "Paschimottanasana"
    ],
    beginnerFriendly: false,
    purpose:
      "To synchronize breath and movement to produce an internal heat designed to purify the body,it is also great for building core strength and toning the body.",
    image: "/static/media/ASHTANGA.2698a632.png"
  },
  {
    name: "Bikram",
    typeId: 6,
    propsUsed: true,
    commonPoses: [
      "Ardha Chandrasana with Pada Hastasana",
      "Dandayamana Dhanurasana",
      "Utkatasana",
      "Garurasana",
      "Dandayamana Janushirasana"
    ],
    beginnerFriendly: false,
    purpose:
      "Also referred to as hot yoga, the purpose of Bikram is to invigorate all of the body by stimulating its glands, nerves, and organs and by improving circulation of oxygen throughout the body.",
    image: "/static/media/BIKRAM.356ee4cb.png"
  },
  {
    name: "Hatha",
    typeId: 1,
    propsUsed: false,
    commonPoses: [
      "Vrikshasana",
      "Salabhasana",
      "Tadasana",
      "Uttanasana",
      "Adho Mukha Svanasana",
      "Setu Bandhasana"
    ],
    beginnerFriendly: true,
    purpose:
      "To align and calm your body, mind, and spirit in preparation for meditation.",
    image: "/static/media/HATHA.2da4b764.png"
  },
  {
    name: "Iyengar",
    typeId: 2,
    propsUsed: true,
    commonPoses: [
      "Tadasana",
      "Paripurna Navasana",
      "Adho Mukha Virasana",
      "Ustrasana",
      "Utthita Marichyasana",
      "Gomukhasana"
    ],
    beginnerFriendly: true,
    purpose: "To improve strength, awareness, mobility and stability.",
    image: "/static/media/IYENGAR.8f6164b0.png"
  },
  {
    name: "Jivamukti",
    typeId: 10,
    propsUsed: true,
    commonPoses: [
      "Surya Namaskar",
      "Trikonasana",
      "Virabhadrasana II",
      "Paschimottanasana",
      "Ardha urdhva dhanurasana"
    ],
    beginnerFriendly: true,
    purpose:
      "To improve ones relationship to all others and thus lead to enlightenment – the dissolution of the sense of separateness, the realization of the oneness of being, the discovery of lasting happiness.",
    image: "/static/media/JIVAMUKTI.41aa6479.png"
  },
  {
    name: "Kundalini",
    typeId: 3,
    propsUsed: false,
    commonPoses: [
      "Adho Mukha Svanasana",
      "Bhujangasana",
      "Dhanurasana",
      "Balasana"
    ],
    beginnerFriendly: true,
    purpose:
      "To provide a modality by which people can achieve their maximum creative potential, free themselves from Karma (the lasting effects of past actions) and realize their Life Purpose.",
    image: "/static/media/KUNDALINI.28604c74.png"
  },
  {
    name: "Restorative",
    typeId: 8,
    propsUsed: true,
    commonPoses: [
      "Savasana",
      "Ananda Balasana",
      "Balasana",
      "Viparita Karani",
      "Supta Virasana",
      "Siddhasana"
    ],
    beginnerFriendly: true,
    purpose:
      "To center your breath and body - aligning the physical and mental by practicing stillness or gentle movement for extended periods of time.",
    image: "/static/media/RESTORATIVE.97221bbf.png"
  },
  {
    name: "Vinyasa",
    typeId: 5,
    propsUsed: true,
    commonPoses: ["Surya Namaskar", "Bidalasana", "Vasisthasana", "Uttanasana"],
    beginnerFriendly: true,
    purpose:
      "To coordinate movement with breath in order to flow from one pose to the next.",
    image: "/static/media/VINYASA.b04f38d7.png"
  },
  {
    name: "Yin",
    typeId: 7,
    propsUsed: true,
    commonPoses: [
      "Balasana",
      "Savasana",
      "Bhujangasana",
      "Virasana",
      "Sukhasana",
      "Jathara Parivartanasana"
    ],
    beginnerFriendly: true,
    purpose:
      "To heal and fully inhabit ourselves, developing an attitude of attentiveness and kindness within us.",
    image: "/static/media/YIN.482816d6.png"
  }
];

const mockStudios = [
  {
    name: "Whole Yoga",
    mainTypeOffered: 5,
    address: "1735 E 17th Ave, Denver, CO 80218",
    phoneNum: "(303)333-9642",
    openEveryday: true,
    mission: "Where body and mind become whole.",
    googleRating: 4.8,
    dropInFee: "$17.00",
    teacherTraining: true,
    link: "https://wholeyoga.com",
    img: "https://i.imgur.com/w7KfQWv.jpg"
  },
  {
    name: "Rino Yoga Social",
    mainTypeOffered: 8,
    address: "3101 Walnut St, Denver, CO 80205",
    phoneNum: "(720)724-8393",
    openEveryday: true,
    mission: "At RYS, our mission is simple: make yoga accessible for all.",
    googleRating: 5,
    dropInFee: "Suggested donation",
    teacherTraining: false,
    link: "https://www.rinoyogasocial.com/",
    img: "https://i.imgur.com/nKIbWP2.jpg"
  },
  {
    name: "Samadhi Yoga",
    mainTypeOffered: 5,
    address: "639 E 19th Ave, Denver, CO 80203",
    phoneNum: "(303)860-9642",
    openEveryday: true,
    mission:
      "To honor the science of yoga as a methodical process to create a lifestyle of health, happiness, and abundance.",
    googleRating: 4.7,
    dropInFee: "$20.00",
    teacherTraining: true,
    link: "https://samadhiyoga.net",
    img: "https://i.imgur.com/fkUvUxr.jpg"
  }
];

module.exports = {
  mockStudios,
  mockTypes
};
