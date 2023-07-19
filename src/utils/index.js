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
import kubernetes from '../assets/skills/kubernetes.svg'
import stripe from '../assets/skills/stripe.svg'

//blogs images
import blog_1 from '../assets/blog-1.png'
import blog_2 from '../assets/blog-2.png'
import blog_3 from '../assets/blog-3.png'
//projects image
import image from '../assets/image.png'
import virtual from '../assets/virtual.png'
import pack from '../assets/pack.png'
import movie from '../assets/movie.png'
import port from '../assets/port.png'

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
    class:'medal',
    number:'7+',
  },
  {
    name:'Support',
    class:'envelope-alt',
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
    level:'Intermediate',
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
    level:'Intermediate',
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
  {
    skill:'Kubernetes',
    level:'Basic',
    name:kubernetes
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
  {
    skill:'Stripe',
    level:'Basic',
    name:stripe
  },
]

export const projects=[
   {
   image:virtual,
   demo:'https://chartjs-seven.vercel.app/',
   code:'https://github.com/chandhuDev/chartjs',
   id:1
   },
  {
   image:image,
   demo:'https://image-ecommerce.onrender.com',
   code:'https://github.com/chandhuDev/image-ecommerce',
   id:2
  },
   {
    image:pack,
    demo:'https://travel-app-zeta-one.vercel.app/',
    code:'https://github.com/chandhuDev/pack-your-bags',
    id:3
   },
   {
    image:port,
    demo:'https://portfolio-theta-seven-10.vercel.app',
    code:'https://github.com/chandhuDev/portfolio',
    id:4
   },
   {
    image:movie,
    demo:'http://movie-ci-cd-env.eba-rqm42pe2.us-east-1.elasticbeanstalk.com/',
    code:'https://gitlab.com/chandhu/movie-booking-app',
    id:5
   },
]


export const Blogs=[
  {
    image:blog_1,
    url:'https://chandhu.hashnode.dev/mistakenly-pushed-env-file-to-remote-repo'
  },
  {
    image:blog_2,
    url:'https://chandhu.hashnode.dev/mistake-to-avoid-while-learning-react'
  },
  {
    image:blog_3,
    url:'https://chandhu.hashnode.dev/how-to-upload-media-files-to-strapi-backend-endpoint'
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
