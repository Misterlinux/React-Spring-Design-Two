import { faBaseballBatBall, faTree, faBusSimple} from "@fortawesome/free-solid-svg-icons";

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
    img: "https://i.pinimg.com/236x/4f/15/20/4f1520d4c04ddc4632821ba6621c806e.jpg",
    type: "stem"
  },
  {
    name: "Basic Tect",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    img: "https://i.pinimg.com/236x/aa/3d/9d/aa3d9d54941fbd3a50c21ecf73ce74ff.jpg",
    type: "tect"
  },
  {
    name: "Middle level Tect",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    img: "https://i.pinimg.com/236x/aa/3d/9d/aa3d9d54941fbd3a50c21ecf73ce74ff.jpg",
    type: "tect"
  },
  {
    name: "Intermidiate Stem",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    img: "https://i.pinimg.com/236x/4f/15/20/4f1520d4c04ddc4632821ba6621c806e.jpg",
    type: "stem"
  },
  {
    name: "Advanced Stem",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    img: "https://i.pinimg.com/236x/4f/15/20/4f1520d4c04ddc4632821ba6621c806e.jpg",
    type: "stem"
  },
  {
    name: "Supplementary Tect level",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    img: "https://i.pinimg.com/236x/aa/3d/9d/aa3d9d54941fbd3a50c21ecf73ce74ff.jpg",
    type: "tect"
  },
  {
    name: "Advanced Tect",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    img: "https://i.pinimg.com/236x/aa/3d/9d/aa3d9d54941fbd3a50c21ecf73ce74ff.jpg",
    type: "tect"
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
