import { faBaseball, faPenNib, faFire, faBaseballBatBall, faTree, faBusSimple, faChalkboardUser, faSchool, faUserNinja} from "@fortawesome/free-solid-svg-icons";
import stem from "../images/stem.jpg"
import tech from "../images/tech.jpg"

import winter from "../images/winter.jpg"
import gallery2 from "../images/gallery2.jpg"
import gallery3 from "../images/gallery3.jpg"

import accadem from "../images/accadem.jpg"
import advance from "../images/advance.jpg"
import intermediate from "../images/intermediate.jpg"
import perksimg from "../images/perksimg.jpg"
import sign from "../images/sign.png"

import basic from "../images/basic.jpg"
import perkss from "../images/perks.jpg"

function alto(){

  return 100 + 50 *(Math.floor( Math.random() *6 ) );
}

export let gallerypage = [
  {css: stem, height: alto()},
  {css: tech, height: alto()},
  {css: winter, height: alto()},

  {css: gallery2, height: alto()},
  {css: gallery3, height: alto()},
  {css: accadem, height: alto()},
  
  {css: advance, height: alto()},
  {css: intermediate, height: alto()},
  {css: perksimg, height: alto()},

  {css: sign, height: alto()},
  {css: perkss, height: alto()},
  {css: basic, height: alto()}
]

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

export let perks = [
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

//import stem from "../images/stem.jpg"

export let courses = [
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
    img: stem,
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
    img: tech,
    type: "tech",
    icona: faBaseball
  },
  {
    name: "Middle level Tect",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    subject: `The lacklustre outlook for economic growth, combined with 
    the need to manage capricious autocratic leadership at home and 
    uncertain relations with big trading partners, makes for a miserable financial climate.`,
    img: tech,
    type: "tech",
    icona: faPenNib
  },
  {
    name: "Intermidiate Stem",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    subject: `The lacklustre outlook for economic growth, combined with 
    the need to manage capricious autocratic leadership at home and 
    uncertain relations with big trading partners, makes for a miserable financial climate.`,
    img: stem,
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
    img: stem,
    type: "stem",
    icona: faFire
  },
  {
    name: "Supplementary Tect level",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    subject: `if Mr Biden were to win he would probably have to rely on executive 
    orders and the regulatory state to push America’s green transition forward.`,
    img: tech,
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
    img: tech,
    type: "tech",
    icona: faFire
  },
]


export let gallery = [
  {
    img: winter,
    name: "Check our Winter Season Image gallery",
  },
  {
    img: gallery2,
    name: "Check our Middle Season Image gallery",
  },
  {
    img: gallery3,
    name: "Check our Open Season Image gallery",
  },
]

