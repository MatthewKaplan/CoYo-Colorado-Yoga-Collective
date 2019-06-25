const mockTypes = [
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
      "To align and calm your body, mind, and spirit in preparation for meditation."
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
    purpose: "To improve strength, awareness, mobility and stability."
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
