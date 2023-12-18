import { faBaseball, faPenNib, faFire, faBaseballBatBall, faTree, faBusSimple, faChalkboardUser, faSchool, faUserNinja} from "@fortawesome/free-solid-svg-icons";

//<FontAwesomeIcon icon={faChalkboardUser} />
//<FontAwesomeIcon icon={faSchool} />
//<FontAwesomeIcon icon={faUserNinja} />

export let profs = [
  {
    id: 1,
    name: "Louis Illinois",
    field: "Droid assistant",
    img: "https://i.pinimg.com/236x/4d/2c/09/4d2c094692f734dec8cc09fdc3c2b9dd.jpg",
    icon: faUserNinja,
    present: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Possimus quibusdam distinctio ea animi obcaecati enim dicta
      delectus ex fugit illo!
    `
  },
  {
    id: 1,
    name: "Marcus twane",
    field: "Chemestry inspector",
    img: "https://i.pinimg.com/236x/7a/18/83/7a188377bb6322beb5e0cae6101b6d96.jpg",
    icon: faChalkboardUser,
    present: `
      Kerala’s old trading port seems like an inspired setting: 
      for more than six centuries, Kochi has been a crucible of 
      cosmopolitanism, one of the few cities in India where pre-colonial 
      traditions of cultural pluralism continue to flourish, 
    `
  },
  {
    id: 2,
    name: "Sam alexis",
    field: "Design supervisor",
    img: "https://i.pinimg.com/236x/61/6a/08/616a080cc96d3d06cdb29abd68dc39e0.jpg",
    icon: faChalkboardUser,
    present: `
      study groups from schools, colleges, and organizations, 
      political leaders, dignitaries, celebrities, artists, curators, 
      and museum officials. Surely, I thought, the biennale will 
      find a way to make us all feel welcome.
    `
  },
  {
    id: 2,
    name: "Tuck Jhonson",
    field: "Droid assistant",
    img: "https://i.pinimg.com/236x/7a/18/83/7a188377bb6322beb5e0cae6101b6d96.jpg",
    icon: faUserNinja,
    present: `
      But if you are impressionable—if you are, like me, a first-time biennale 
      visitor—it’s hard to dismiss the jargon as ridiculous: it’s a barrier, 
    `
  }, 
  {
    id: 3,
    name: "Tamara Rohan",
    field: "Professional tester",
    img: "https://i.pinimg.com/236x/4d/2c/09/4d2c094692f734dec8cc09fdc3c2b9dd.jpg",
    icon: faSchool,
    present: `
      The jargon of Shubigi Rao’s statement could be found, unfortunately, 
      throughout the exhibition. Alongside the essential details of an 
      artwork (artist, title, date, materials, dimensions, owner) provided 
      in standard wall text labels, many art works were accompanied by statements 
    `
  }
]

export function profes(){
  return profs
}

let perks = [
  {
    perk: "Sport activities",
    icona: faBaseballBatBall
  },
  {
    perk: "Bus avaiables",
    icona: faBusSimple
  },
  {
    perk: "Green areas",
    icona: faTree
  },
  {
    perk: "Dinner area",
    icona: faTree
  },
  {
    perk: "Parking lot",
    icona: faBusSimple
  },
  {
    perk: "Theatre building",
    icona: faBaseballBatBall
  },
]

export function perki(){
  return perks;
}

let courses = [
  {
    name: "Introduction to Math",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    img: "https://i.pinimg.com/236x/83/68/56/836856c54b253b3ae707bb1911118c72.jpg",
    type: "basic"
  },
  {
    name: "First level Stem",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    subject: `if Mr Biden were to win he would probably have to rely on executive 
    orders and the regulatory state to push America’s green transition forward.`,
    img: "https://i.pinimg.com/236x/4f/15/20/4f1520d4c04ddc4632821ba6621c806e.jpg",
    type: "stem",
    icona: faBaseball
  },
  {
    name: "Basic Tect",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    subject: `The rule was announced at cop28 in Dubai and positions America with 
    154 other governments who pledge to reduce methane emissions by at least 30% 
    by 2030. The new rule will require oil and natural-gas operators to greatly 
    reduce emissions. The epa says this new rule should reduce projected emissions`,
    img: "https://i.pinimg.com/236x/aa/3d/9d/aa3d9d54941fbd3a50c21ecf73ce74ff.jpg",
    type: "tech",
    icona: faBaseball
  },
  {
    name: "Middle level Tect",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    subject: `The lacklustre outlook for economic growth, combined with 
    the need to manage capricious autocratic leadership at home and 
    uncertain relations with big trading partners, makes for a miserable financial climate.`,
    img: "https://i.pinimg.com/236x/aa/3d/9d/aa3d9d54941fbd3a50c21ecf73ce74ff.jpg",
    type: "tech",
    icona: faPenNib
  },
  {
    name: "Intermidiate Stem",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    subject: `The lacklustre outlook for economic growth, combined with 
    the need to manage capricious autocratic leadership at home and 
    uncertain relations with big trading partners, makes for a miserable financial climate.`,
    img: "https://i.pinimg.com/236x/4f/15/20/4f1520d4c04ddc4632821ba6621c806e.jpg",
    type: "stem",
    icona: faPenNib
  },
  {
    name: "Advanced Stem",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    subject: `The rule was announced at cop28 in Dubai and positions America with 
    154 other governments who pledge to reduce methane emissions by at least 30% 
    by 2030. The new rule will require oil and natural-gas operators to greatly 
    reduce emissions. The epa says this new rule should reduce projected emissions`,
    img: "https://i.pinimg.com/236x/4f/15/20/4f1520d4c04ddc4632821ba6621c806e.jpg",
    type: "stem",
    icona: faFire
  },
  {
    name: "Supplementary Tect level",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    subject: `if Mr Biden were to win he would probably have to rely on executive 
    orders and the regulatory state to push America’s green transition forward.`,
    img: "https://i.pinimg.com/236x/aa/3d/9d/aa3d9d54941fbd3a50c21ecf73ce74ff.jpg",
    type: "tech",
    icona: faTree
  },
  {
    name: "Advanced Tect",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    subject: `The rule was announced at cop28 in Dubai and positions America with 
    154 other governments who pledge to reduce methane emissions by at least 30% 
    by 2030. The new rule will require oil and natural-gas operators to greatly 
    reduce emissions. The epa says this new rule should reduce projected emissions`,
    img: "https://i.pinimg.com/236x/aa/3d/9d/aa3d9d54941fbd3a50c21ecf73ce74ff.jpg",
    type: "tech",
    icona: faFire
  },
]

export function corsi(){
  return courses;
}

let gallery = [
  {
    img: "https://i.pinimg.com/736x/2d/df/bb/2ddfbb94c62d51d3b0010b54adfd6b73.jpg",
    name: "Check our Winter Season Image gallery",
  },
  {
    img: "https://i.pinimg.com/236x/8d/37/d8/8d37d898d90333df93a5caf9fa4688c6.jpg",
    name: "Check our Middle Season Image gallery",
  },
  {
    img: "https://i.pinimg.com/236x/07/b5/b9/07b5b9f83d4dd557a93b31d1250c65f8.jpg",
    name: "Check our Open Season Image gallery",
  },
]

export function gallerie(){
  return gallery;
}
