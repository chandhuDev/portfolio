import testimonial from '../assets/testimonial1.png'
import aws from '../assets/skills/aws.svg'
import css from '../assets/skills/css.svg'
import docker from '../assets/skills/docker.svg'
import check from '../assets/check.svg'
import git from '../assets/skills/git.svg'
import gitlab from '../assets/skills/gitlab.svg'
import html from '../assets/skills/html.svg'
import javascript from '../assets/skills/javascript.svg'
import mongo from '../assets/skills/mongo.svg'
import node from '../assets/skills/node.svg'
import react from '../assets/skills/react.svg'
import tailwind from '../assets/skills/tailwind.svg'
// images for navbar items
import blog from '../assets/navItems/blogs.svg'
import contact from '../assets/navItems/contact.svg'
import home from '../assets/navItems/home.svg'
import portfolio from '../assets/navItems/portfolio.svg'
import skill from '../assets/navItems/skills.svg'
import user from '../assets/navItems/user.svg'

export const navbar_items=[
  {
    name:'Home',
    class:'estate'
  },
  {
    name:'About',
    class:'user-square'
  },
  {
    name:'Skills',
    class:'file-alt'
  } ,
  {
    name:'Portfolio',
    class:'scenery'
  },
  {
    name:'Blogs',
    class:'blogger-alt'
  },
  {
    name:'Contact',
    class:'message'
  },
]

export const about_items=[
  {
    name:'Experience',
    class:'award-alt',
    number:'9+ months',
  },
  {
    name:'Completed',
    class:'award-alt',
    number:'7+',
  },
  {
    name:'Support',
    class:'award-alt',
    number:'Online 24/7',
  },
]


export const Skills_items_frontend=[
  {
    skill:'HTML',
    level:'Intermediate',
    name:html
  },
  {
    skill:'CSS3',
    level:'Intermediate',
    name:css
  },
  {
    skill:'Javascript',
    level:'Intermediate',
    name:javascript
  },
  {
    skill:'React Js',
    level:'Intermediate',
    name:react
  },
  {
    skill:'Next Js',
    level:'Basic',
    name:react
  },
  {
    skill:'Tailwind',
    level:'Intermediate',
    name:tailwind
  },
]

export const Skills_items_backend=[
  {
    skill:'Node Js',
    level:'Intermediate',
    name:node
  },
  {
    skill:'MongoDB',
    level:'Basic',
    name:mongo
  },
  {
    skill:'Docker',
    level:'Intermediate',
    name:docker
  },
  {
    skill:'CI-CD',
    level:'Intermediate',
    name:gitlab
  },
  {
    skill:'AWS',
    level:'Basic',
    name:aws
  },
]

export const Skills_items_tools=[
  {
    skill:'Git',
    level:'Intermediate',
    name:git
  },
  {
    skill:'Retool',
    level:'Intermediate',
    name:check
  },
  {
    skill:'Strapi',
    level:'Intermediate',
    name:check
  },
]

export const projects=[
   {
   image:testimonial,
   demo:'project',
   code:'project',
   id:1
   },
  {
    image:testimonial,
   demo:'project',
   code:'project',
   id:2
  },
   {
    image:testimonial,
    demo:'project',
    code:'project',
    id:3
   },
   {
    image:testimonial,
    demo:'project',
    code:'project',
    id:4
   },
   {
    image:testimonial,
    demo:'project',
    code:'project',
    id:5
   },
]


export const Blogs=[
  {
    image:testimonial,
  },
  {
    image:testimonial
  },
  {
    image:testimonial
  },
]

export const contact_type=[
  {
    class:'envelope-edit',
    social_name:'Email',
    value:'chandhudev0@gmail.com',
    url:'https://mail.google.com/mail/?view=cm&fs=1&to=chandhudev0@gmail.com&su=Hello%20Chandhu%20,%20we%20have%20an%20Offer%20for%20You!'
  },
  {
    class:'whatsapp-alt',
    social_name:'Whatsapp',
    value:'+91-6303333646',
    url:'https://wa.me/6303333646'
  },
  {
    class:'slack-alt',
    social_name:'Slack',
    value:'slack.com',
    url:'https://a1marketing.slack.com/team/U04DAUYDRQB'
  },
]