const yoga = {
  types: [
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
      purpose: "To align and calm your body, mind, and spirit in preparation for meditation."
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
      purpose: "To provide a modality by which people can achieve their maximum creative potential, free themselves from Karma (the lasting effects of past actions) and realize their Life Purpose."
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
      purpose: "To synchronize breath and movement to produce an internal heat designed to purify the body,it is also great for building core strength and toning the body."
    },
    {
      name: "Vinyasa",
      typeId: 5,
      propsUsed: true,
      commonPoses: [
        "Surya Namaskar",
        "Bidalasana",
        "Vasisthasana",
        "Uttanasana"
      ],
      beginnerFriendly: true,
      purpose: "To coordinate movement with breath in order to flow from one pose to the next."
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
      purpose: "Also referred to as hot yoga, the purpose of Bikram is to invigorate all of the body by stimulating its glands, nerves, and organs and by improving circulation of oxygen throughout the body."
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
      purpose: "To heal and fully inhabit ourselves, developing an attitude of attentiveness and kindness within us."
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
      purpose: "To center your breath and body - aligning the physical and mental by practicing stillness or gentle movement for extended periods of time."
    },
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
      purpose: "To align with the Divine. This is achieved by practicing the 3 As: Attitude, Alignment, Action."
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
      purpose: "To improve ones relationship to all others and thus lead to enlightenment – the dissolution of the sense of separateness, the realization of the oneness of being, the discovery of lasting happiness."
    }
  ]
};

const studios = [
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
    name: "Samadhi Yoga",
    mainTypeOffered: 5,
    address: "639 E 19th Ave, Denver, CO 80203",
    phoneNum: "(303)860-9642",
    openEveryday: true,
    mission: "To honor the science of yoga as a methodical process to create a lifestyle of health, happiness, and abundance.",
    googleRating: 4.7,
    dropInFee: "$20.00",
    teacherTraining: true,
    link: "https://samadhiyoga.net",
    img: "https://i.imgur.com/fkUvUxr.jpg"
  },
  {
    name: "Corepower Yoga",
    mainTypeOffered: 4,
    address: "1875 29th St, Denver, CO 80216",
    phoneNum: "(720)575-4174",
    openEveryday: true,
    mission: "Discover your most powerful self.",
    googleRating: 4.9,
    dropInFee: "$25.00",
    teacherTraining: true,
    link: "https://www.corepoweryoga.com/",
    img: "https://i.imgur.com/jrHg289.jpg"
  },
  {
    name: "The River Yoga",
    mainTypeOffered: 5,
    address: "2590 Welton Street Denver, CO 80205",
    phoneNum: "(720)242-9235",
    openEveryday: true,
    mission: " Together, we are creating something bigger than any one person or practice. You didnt end up here by accident. The River chose you...and me...and us. We Belong.",
    googleRating: 5.0,
    dropInFee: "$20.00",
    teacherTraining: true,
    link: "https://weseektheriver.com",
    img: "https://i.imgur.com/ncnJd6l.jpg"
  },
  {
    name: "Endorphin Yoga",
    mainTypeOffered: 5,
    address: "3210 Tejon St, Denver, CO 80211",
    phoneNum: "(303)993-4041",
    openEveryday: true,
    mission: "Deliver the best experience, by the best instructors, to the happiest community.",
    googleRating: 4.9,
    dropInFee: "$10.00",
    teacherTraining: true,
    link: "https://www.myendorphin.com/",
    img: "https://i.imgur.com/7e8Nzzn.jpg"
  }, 
  {
    name: "Kindness Yoga",
    mainTypeOffered: 5,
    address: "3563 Larimer St, Denver, CO 80205",
    phoneNum: "(720)281-9088",
    openEveryday: true,
    mission: "By making yoga, mindfulness, and community accessible to everyone, we can help support the creation of a kinder, more responsible planet.",
    googleRating: 4.7,
    dropInFee: "$20.00",
    teacherTraining: true,
    link: "https://www.kindnesscollective.com/",
    img: "https://i.imgur.com/lbc6o6r.jpg"
  },
  {
    name: "Yoga High",
    mainTypeOffered: 7,
    address: "800 18th St, Denver, CO 80202",
    phoneNum: "(720)446-6324",
    openEveryday: false,
    mission: "Yoga High is a studio that brings science and tradition together. Our mission is to provide a safe, friendly and light-hearted atmosphere for anyone in the downtown area.",
    googleRating: 5.0,
    dropInFee: "$15.00",
    teacherTraining: false,
    link: "http://www.yogahighdenver.com/",
    img: "https://i.imgur.com/IHhV8Bi.jpg"
  },
  {
    name: "Freyja Project",
    mainTypeOffered: 7,
    address: "3456 Tejon St, Denver, CO 80211",
    phoneNum: "(303)964-9642",
    openEveryday: true,
    mission: "At The Freyja Project, we strive to bring optimal mind-body fitness to the Highland Denver community. Our yoga and dance fitness classes and spa services are thoughtfully designed to help our clients live more vibrant and healthy lives.",
    googleRating: 5.0,
    dropInFee: "$22.00",
    teacherTraining: false,
    link: "https://www.thefreyjaproject.com/",
    img: "https://i.imgur.com/09Iz2w1.jpg"
  },
  {
    name: "Kula Yoga",
    mainTypeOffered: 8,
    address: "9112 6th Ave, Lakewood, CO 80215",
    phoneNum: "(720)335-6262",
    openEveryday: true,
    mission: "Building a growing community through collaboration.",
    googleRating: 4.1,
    dropInFee: "$17.00",
    teacherTraining: false,
    link: "http://www.kulayogacenter.org/",
    img: "https://i.imgur.com/04uAqXK.jpg"
  },
  {
    name: "Rino Yoga Social",
    mainTypeOffered: 8,
    address: "3101 Walnut St, Denver, CO 80205",
    phoneNum: "(720)724-8393",
    openEveryday: true,
    mission: "At RYS, our mission is simple: make yoga accessible for all.",
    googleRating: 5.0,
    dropInFee: "Suggested donation",
    teacherTraining: false,
    link: "https://www.rinoyogasocial.com/",
    img: "https://i.imgur.com/nKIbWP2.jpg"
  },
  {
    name: "One Yoga",
    mainTypeOffered: 3,
    address: "8101 E Belleview Ave, Denver, CO 80237",
    phoneNum: "(303)416-6601",
    openEveryday: true,
    mission: "Create an inclusive and welcoming community of students and teachers. Practice compassion, authenticity and kindness. Help our students build strength, flexibility, self-acceptance and peace in their bodies, minds and hearts.",
    googleRating: 4.9,
    dropInFee: "$24.00",
    teacherTraining: true,
    link: "http://oneyogadenver.com/",
    img: "https://i.imgur.com/gWGDA2z.jpg"
  },
  {
    name: "Mudra Yoga Studio",
    mainTypeOffered: 1,
    address: "560 S Holly St #15, Denver, CO 80246",
    phoneNum: "(303)388-8501",
    openEveryday: true,
    mission: "We believe yoga is a journey, not just a physical practice, but an opportunity to find your own truth and liight.",
    googleRating: 4.7,
    dropInFee: "$17.00",
    teacherTraining: true,
    link: "http://mudrayogastudio.com/",
    img: "https://i.imgur.com/fEGZfSY.jpg"
  },
  {
    name: "Bikram Yoga Mile High",
    mainTypeOffered: 6,
    address: "5019 E Colfax Ave, Denver, CO 80220",
    phoneNum: "(303)377-2227",
    openEveryday: true,
    mission: "Bikram Yoga Mile High is passionate and committed to bringing pure, clean, original Bikram Yoga to Denver.",
    googleRating: 3.9,
    dropInFee: "$21.00",
    teacherTraining: false,
    link: "http://bikramyogamilehigh.com/",
    img: "https://i.imgur.com/BAcva1X.jpg"
  },
  {
    name: "The Iyengar Yoga Center Of Denver",
    mainTypeOffered: 2,
    address: "770 S Broadway, Denver, CO 80209",
    phoneNum: "(720)570-9642",
    openEveryday: true,
    mission: "The Iyengar Yoga Center of Denver emphasizes precision in physical alignment to awaken and realign the whole body/mind complex.",
    googleRating: 4.8,
    dropInFee: "$20.00",
    teacherTraining: true,
    link: "http://www.iyengaryogacenter.com/",
    img: "https://i.imgur.com/wU3E6P0.jpg"
  },
  {
    name: "Ohana Yoga + Barre",
    mainTypeOffered: 8,
    address: "4342 Tennyson St, Denver, CO 80212",
    phoneNum: "(303)495-5260",
    openEveryday: true,
    mission: "Ohana is the Hawaiian word for family. From the moment you step through the doors of our newly renovated space, you will be welcomed as part of our community, part of our Ohana.",
    googleRating: 5.0,
    dropInFee: "$20.00",
    teacherTraining: true,
    link: "https://ohanayoga.com/",
    img: "https://i.imgur.com/DZyqPaQ.jpg"
  },
  {
    name: "Flex Yoga + Barre Studio",
    mainTypeOffered: 5,
    address: "2736 Welton St #200, Denver, CO 80205",
    phoneNum: "(303)386-3897",
    openEveryday: true,
    mission: "To bring people together and to inspire our community to find grace in the journey of falling, growing, and embracing imperfection while on the path to a healthier lifestyle.",
    googleRating: 5.0,
    dropInFee: "$18.00",
    teacherTraining: false,
    link: "https://www.flexyogabarre.com/",
    img: "https://i.imgur.com/gcICeiK.jpg"
  },
  {
    name: "Atherial Yoga, Barre, and Aerial Fitness Studio",
    mainTypeOffered: 4,
    address: "3905 Fox St, Denver, CO 80216",
    phoneNum: "(720)548-2198",
    openEveryday: true,
    mission: "Atherials mission is to facilitate an inspiring, inclusive, safe space for people to build connection with their bodies, the hammocks, our community and the world.",
    googleRating: 4.9,
    dropInFee: "$20.00",
    teacherTraining: true,
    link: "https://atherialfitness.com/",
    img: "https://i.imgur.com/lEqAnTZ.jpg"
  },
  {
    name: "Ashtanga Yoga Denver",
    mainTypeOffered: 4,
    address: "2501 Larimer St, Denver, CO 80205",
    phoneNum: "(720)308-9770",
    openEveryday: true,
    mission: "Practice mindfully with care and consideration for yourself and others.",
    googleRating: 4.6,
    dropInFee: "$20.00",
    teacherTraining: false,
    link: "https://denverashtangayoga.com/",
    img: "https://i.imgur.com/9OsC93K.png"
  },
  {
    name: "Elevate Yoga",
    mainTypeOffered: 8,
    address: "4926 E Colfax Ave, Denver, CO 80220",
    phoneNum: "(303)478-4763",
    openEveryday: true,
    mission: "Elevate Yoga Denver strives to make the world a better place, one om at a time.",
    googleRating: 5.0,
    dropInFee: "$17.50",
    teacherTraining: true,
    link: "https://elevateyogadenver.com/",
    img: "https://i.imgur.com/fMHnNOR.jpg"
  },
  {
    name: "Zenver Yoga",
    mainTypeOffered: 5,
    address: "3729 W 32nd Ave, Denver, CO 80211",
    phoneNum: "(303)416-2958",
    openEveryday: true,
    mission: "Welcome home to your sanctuary, your zen den, your safe place. Welcome home to the realization that you are absolutely perfect just the way you are. Come in for a class today and leave feeling calm, refreshed and centered as you walk back out into the world.",
    googleRating: 5.0,
    dropInFee: "$20.00",
    teacherTraining: true,
    link: "http://www.zenveryoga.com/",
    img: "https://i.imgur.com/2ojP0pa.jpg"
  },
  {
    name: "Karma Yoga Center",
    mainTypeOffered: 7,
    address: "1705 S Pearl St, Denver, CO 80210",
    phoneNum: "(303)284-8617",
    openEveryday: true,
    mission: "The more we practice being present, the more we can flow with our being, our spirit.",
    googleRating: 4.6,
    dropInFee: "$18.00",
    teacherTraining: true,
    link: "https://www.karmayogacenter.com/",
    img: "https://i.imgur.com/71aVAfb.jpg"
  },
  {
    name: "Living Yoga",
    mainTypeOffered: 2,
    address: "1776 S Jackson St #810, Denver, CO 80210",
    phoneNum: "(303)758-0780",
    openEveryday: true,
    mission: "Living Yoga is a yoga studio, wellness center, and community space created with the intention of integrating health on all levels.",
    googleRating: 4.7,
    dropInFee: "$16.00",
    teacherTraining: false,
    link: "http://www.livingyogadenver.com/",
    img: "https://i.imgur.com/UeaiPkx.jpg"
  },
  {
    name: "Better Buzz Yoga",
    mainTypeOffered: 5,
    address: "2714 W 44th Ave, Denver, CO 80211",
    phoneNum: "(303)862-5781",
    openEveryday: true,
    mission: "We respect and value the experiences that make each of us who we are, honoring that we likely havent lived that experience and so are committed to finding ways to discuss, embrace and possibly even grow through those ideas that may challenge us.",
    googleRating: 5.0,
    dropInFee: "$15.00",
    teacherTraining: true,
    link: "https://betterbuzzyoga.com/",
    img: "https://i.imgur.com/ob7wkby.jpg"
  },
  {
    name: "iBody",
    mainTypeOffered: 7,
    address: "1177 S Pennsylvania St, Denver, CO 80210",
    phoneNum: "(720)379-4978",
    openEveryday: true,
    mission: "Your body will thank you.",
    googleRating: 4.8,
    dropInFee: "$18.00",
    teacherTraining: false,
    link: "http://ibodydenver.com/",
    img: "https://i.imgur.com/jw1uNSh.jpg"
  },
  {
    name: "Passion Force: Yoga, Dance, Movement",
    mainTypeOffered: 5,
    address: "1735 E 17th Ave, Denver, CO 80218",
    phoneNum: "(773)977-9580",
    openEveryday: true,
    mission: "To provide an encouraging enviornment where every body is welcome.",
    googleRating: 5.0,
    dropInFee: "$18.00",
    teacherTraining: false,
    link: "https://passionforcedenver.com/",
    img: "https://i.imgur.com/8xXue1K.jpg"
  },
  {
    name: "the mama 'hood Denver",
    mainTypeOffered: 8,
    address: "2902 Zuni St, Denver, CO 80202",
    phoneNum: "(303)643-5662",
    openEveryday: true,
    mission: "Help families find joy from conception to 2 through expert instruction, community and the things they need.",
    googleRating: 4.3,
    dropInFee: "$20.00",
    teacherTraining: true,
    link: "http://www.themamahood.com/",
    img: "https://i.imgur.com/bT9HUeV.jpg"
  },
  {
    name: "Container Collective Yoga and Bikes",
    mainTypeOffered: 5,
    address: "1492 Ammons St, Lakewood, CO 80214",
    phoneNum: "(720)437-0638",
    openEveryday: true,
    mission: "Container Collective Yoga and Bikes offers community members a unique environment to practice Baptiste Power Yoga that inspires transformation.",
    googleRating: 4.9,
    dropInFee: "$16.00",
    teacherTraining: true,
    link: "https://www.cc360denver.com/",
    img: "https://i.imgur.com/RWjC8YY.jpg"
  },
  {
    name: "Asana Studio",
    mainTypeOffered: 3,
    address: "5701 Yukon St, Arvada, CO 80002",
    phoneNum: "(303)431-6311",
    openEveryday: true,
    mission: "Our mission is to support you in connecting to your true Self.",
    googleRating: 4.5,
    dropInFee: "$18.00",
    teacherTraining: true,
    link: "https://asanastudio.com/",
    img: "https://i.imgur.com/9UQY7o0.jpg"
  },
  {
    name: "Belly Bliss",
    mainTypeOffered: 8,
    address: "300 Josephine St #230, Denver, CO 80206",
    phoneNum: "(303)399-1191",
    openEveryday: false,
    mission: "Belly Bliss is a business dedicated to enhancing the lives of mothers and their families by empowering them and serving as a resource for health and education throughout pregnancy, birth and beyond.",
    googleRating: 4.7,
    dropInFee: "$15.00",
    teacherTraining: false,
    link: "https://www.bellybliss.org/",
    img: "https://i.imgur.com/g1MfXBY.jpg"
  },
  {
    name: "Tula Hot Yoga",
    mainTypeOffered: 6,
    address: "400 Corona St. #1131 Denver, CO 80218",
    phoneNum: "(303)777-7550",
    openEveryday: true,
    mission: "At Tula Hot Yoga Denver we are dedicated to helping you find your balance.",
    googleRating: 4.5,
    dropInFee: "$18.00",
    teacherTraining: false,
    link: "http://www.tulahotyogadenver.com/",
    img: "https://i.imgur.com/vADCdcd.jpg"
  },
  {
    name: "Maitri Yoga",
    mainTypeOffered: 1,
    address: "9000 W 88th Ave, Westminster, CO 80005",
    phoneNum: "(303)421-4131",
    openEveryday: true,
    mission: "Maitri is here to balance out the state of our world today by bringing people together as friends, fully loving and accepting ourselves and others just as we are in this moment while at the same time walking our paths to improve our lives.",
    googleRating: 5.0,
    dropInFee: "$18.00",
    teacherTraining: true,
    link: "https://maitri.yoga/",
    img: "https://i.imgur.com/g2M2tsY.jpg"
  },
  {
    name: "Denver MySore",
    mainTypeOffered: 4,
    address: "910 Santa Fe Dr, Denver, CO 80204",
    phoneNum: "(303)477-0370",
    openEveryday: false,
    mission: "Classes in the heart of Denver's Santa Fe Art District.",
    googleRating: 5.0,
    dropInFee: "$20.00",
    teacherTraining: false,
    link: "http://www.denvermysore.com/ashtanga-yoga-and-the-denver-mysore-community/practice-ashtanga-yoga/",
    img: "https://i.imgur.com/esQTB37.jpg"
  }
];

module.exports = {
  yoga,
  studios
};

