import { Post } from "../components/types";

const POSTS: Array<Post> = [
  {
    id: "1",
    userId: "user1",
    content:
      "Harvard university is offering FREE world class education in Data Science!\nCourses cover:\n- Python\n- Data Visualization\n- Probability\n- Statistics\n- Machine Learning\n-Data Science: Capstone\n\nA project-based pedagogy that allows you to learn while building!\n\n1. CS50p: Python\n\nIf you are new to programming and just getting started\n\nThere isn't a better place to learn Python than @davidjmalans CS50p.\n\nBeautiful explanation and great projects. It's a complete package.\n\nCheck this out\n\nhttps://lnkd.in/dv-jYHJ6\n\n2. Data Visualization\n\nLearn basic data visualization principles and how to apply them using ggplot2.\n\nCheck this out\n\nhttps://lnkd.in/dxK3mHqb\n\n3. Probability",
    likesCount: 48,
    commentsCount: 11,
    repostsCount: 8,
  },
  {
    id: "2",
    userId: "user2",
    content:
      'Manager Trying to retain an employee...!!\n\nManager: What is better there, which is not here?\n\nEmployee: Everything..!!\n\nManager: "Yaha, tumhe 30% increment milega, next month..!!"\n\nEmployee: "waha 100% mil raha hai..!!"\n\nManager: "Yaha sirf 2 din office ana rehta hai..!!"\n\nEmployee: "waha WFH hai..!!"\n\nManager: "Yaha tum next year manager ban jaaoge..!!"\n\nEmployee: "Waha manager hi role, offer hua hai..!!"\n\nManager: "Yeh lo document..!!"\n\nEmployee: "Kya hai ye..??"\n\nManager: "Mera CV hai.. mujhe refer kardo..!!"',
    likesCount: 2164,
    commentsCount: 22,
    repostsCount: 7,
    tags: [
      { id: "tag1", tag: "linkedin" },
      { id: "tag2", tag: "linkedinglobal" },
      { id: "tag3", tag: "life" },
      { id: "tag4", tag: "experience" },
      { id: "tag5", tag: "success" },
      { id: "tag6", tag: "success2" },
    ],
  },
  {
    id: "3",
    userId: "user4",
    content:
      "Saurabh Naresh Netravalkar takes a bow!\nProving what all wonders engineers can do\n\nTo Take out Rohit and Virat both in T20 World Cup.\nAmazing",
    likesCount: 0,
    commentsCount: 3,
    repostsCount: 0,
    tags: [
      { id: "tag1", tag: "softwareengineer" },
      { id: "tag2", tag: "cricketer" },
    ],
    connection: {
      userId: "user3",
      type: "liked",
    },
    image:
      "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg",
  },
];

export default POSTS;
