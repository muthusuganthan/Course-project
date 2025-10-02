const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const dummyCourses = [
  {
    course_id: "1",
    course_name: "Web Development Bootcamp",
    course_description: "Learn full-stack web development from scratch",
    course_rating: "4.8",
    course_duration: "12 weeks",
    course_price: "$199",
    course_image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400"
  },
  {
    course_id: "2",
    course_name: "Data Science Fundamentals",
    course_description: "Master data analysis and machine learning",
    course_rating: "4.7",
    course_duration: "10 weeks",
    course_price: "$249",
    course_image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400"
  },
  {
    course_id: "3",
    course_name: "Mobile App Development",
    course_description: "Build iOS and Android apps with React Native",
    course_rating: "4.6",
    course_duration: "8 weeks",
    course_price: "$179",
    course_image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400"
  },
  {
    course_id: "4",
    course_name: "UI/UX Design Masterclass",
    course_description: "Learn professional design principles and tools",
    course_rating: "4.9",
    course_duration: "6 weeks",
    course_price: "$159",
    course_image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400"
  },
  {
    course_id: "5",
    course_name: "Python for Beginners",
    course_description: "Start your programming journey with Python",
    course_rating: "4.5",
    course_duration: "4 weeks",
    course_price: "$99",
    course_image: "https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?w=400"
  },
  {
    course_id: "6",
    course_name: "Digital Marketing Strategy",
    course_description: "Learn SEO, social media, and content marketing",
    course_rating: "4.4",
    course_duration: "5 weeks",
    course_price: "$129",
    course_image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400"
  },
  {
    course_id: "7",
    course_name: "Cloud Computing with AWS",
    course_description: "Master Amazon Web Services and cloud infrastructure",
    course_rating: "4.8",
    course_duration: "7 weeks",
    course_price: "$299",
    course_image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400"
  },
  {
    course_id: "8",
    course_name: "JavaScript Advanced Concepts",
    course_description: "Deep dive into modern JavaScript and frameworks",
    course_rating: "4.7",
    course_duration: "6 weeks",
    course_price: "$179",
    course_image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400"
  },
  {
    course_id: "9",
    course_name: "Cybersecurity Essentials",
    course_description: "Learn to protect systems and networks from threats",
    course_rating: "4.9",
    course_duration: "8 weeks",
    course_price: "$229",
    course_image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400"
  },
  {
    course_id: "10",
    course_name: "Graphic Design Fundamentals",
    course_description: "Create stunning visuals with design theory",
    course_rating: "4.6",
    course_duration: "5 weeks",
    course_price: "$139",
    course_image: "https://images.unsplash.com/photo-1563089145-599997674d42?w=400"
  },
  {
    course_id: "11",
    course_name: "Machine Learning Specialization",
    course_description: "Advanced AI and machine learning techniques",
    course_rating: "4.8",
    course_duration: "12 weeks",
    course_price: "$349",
    course_image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=400"
  },
  {
    course_id: "12",
    course_name: "Project Management Professional",
    course_description: "Become a certified project manager",
    course_rating: "4.5",
    course_duration: "6 weeks",
    course_price: "$199",
    course_image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400"
  },
  {
    course_id: "13",
    course_name: "React.js Complete Guide",
    course_description: "Build modern web applications with React",
    course_rating: "4.7",
    course_duration: "7 weeks",
    course_price: "$189",
    course_image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400"
  },
  {
    course_id: "14",
    course_name: "Blockchain Development",
    course_description: "Learn smart contracts and decentralized apps",
    course_rating: "4.6",
    course_duration: "9 weeks",
    course_price: "$279",
    course_image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400"
  },
  {
    course_id: "15",
    course_name: "DevOps Engineering",
    course_description: "Master CI/CD, Docker, and Kubernetes",
    course_rating: "4.8",
    course_duration: "8 weeks",
    course_price: "$259",
    course_image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400"
  },
  {
    course_id: "16",
    course_name: "Content Writing Mastery",
    course_description: "Become a professional content writer",
    course_rating: "4.4",
    course_duration: "4 weeks",
    course_price: "$119",
    course_image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400"
  },
  {
    course_id: "17",
    course_name: "iOS App Development with Swift",
    course_description: "Create native iOS applications",
    course_rating: "4.7",
    course_duration: "10 weeks",
    course_price: "$229",
    course_image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400"
  },
  {
    course_id: "18",
    course_name: "Digital Photography",
    course_description: "Learn professional photography techniques",
    course_rating: "4.5",
    course_duration: "5 weeks",
    course_price: "$149",
    course_image: "https://images.unsplash.com/photo-1506983705851-6c859727b48a?w=400"
  },
  {
    course_id: "19",
    course_name: "Business Analytics",
    course_description: "Data-driven decision making for business",
    course_rating: "4.6",
    course_duration: "6 weeks",
    course_price: "$199",
    course_image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400"
  },
  {
    course_id: "20",
    course_name: "Full Stack JavaScript",
    course_description: "End-to-end development with JavaScript stack",
    course_rating: "4.8",
    course_duration: "11 weeks",
    course_price: "$279",
    course_image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400"
  }
];

async function main() {
  console.log('Seeding database...');

  for (const course of dummyCourses) {
    await prisma.user.create({
      data: course
    });
  }

  console.log('Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
