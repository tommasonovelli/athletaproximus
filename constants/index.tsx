import {
  FileChartLine,
  BicepsFlexed,
  Brain,
  Apple,
  Headset,
} from "lucide-react";

interface NavItem {
  title: string;
  href: string;
  items?: NavItem[];
}

export const navItems: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Services",
    href: "*",
    items: [
      { title: "Workshops for Teams", href: "/" },
      { title: "1-on-1 Coaching", href: "/" },
      { title: "Subscription Packages", href: "/" },
      { title: "Long-Term Packages", href: "/" },
    ],
  },
  {
    title: "Pricing",
    href: "/",
  },
  {
    title: "Research",
    href: "/",
  },
  {
    title: "Our Team",
    href: "#",
    items: [
      { title: "Ethan", href: "/team/ethan" },
      { title: "Serena", href: "/team/serena" },
      { title: "Giada", href: "/team/giada" },
    ],
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export const navServices: { title: string; href: string; description: string }[] = [
    {
      title: "Workshop for Team",
      href: "/",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
      title: "1-on-1 Coaching",
      href: "/",
      description:
        "For sighted users to preview content available behind a link.",
    },
    {
      title: "Subscription Packages",
      href: "/",
      description:
        "For sighted users to preview content available behind a link.",
    },
    {
      title: "Long-Term Packages",
      href: "/",
      description:
        "For sighted users to preview content available behind a link.",
    },
  ];

export const homeTestimonial = {
  description: "Really interesting and excited to apply this in the future!",
  author: "5th Year Student",
};

export const homeHeroLinks = [
  {
    title: "Smarter Nutrition",
    link: "/",
  },
  {
    title: "Mental Coaching",
    link: "/",
  },
  {
    title: "Personalized Workout",
    link: "/",
  },
];

export const homeOffers = [
  {
    title: "1-on-1 Mental Performance Coaching",
    description:
      "Personalized mental training sessions to help athletes develop resilience, enhance focus, and build confidence. Our expert coaches work directly with athletes to create tailored strategies for their specific sport and position.",
  },
  {
    title: "Sports Nutrition Guidance",
    description:
      "Custom nutrition plans and education designed for young athletes' unique needs. We provide practical advice on fueling for performance, recovery nutrition, and building healthy eating habits that support athletic development.",
  },
  {
    title: "Team Workshop Development",
    description:
      "Interactive team sessions focused on building mental toughness, team cohesion, and collective performance. Our workshops combine practical exercises with evidence-based strategies to create a strong team mindset.",
  },
  {
    title: "Leadership & Performance Psychology",
    description:
      "Specialized training in leadership skills, communication, and psychological resilience. We help athletes develop the mental tools needed to perform under pressure and lead effectively both on and off the field.",
  },
  {
    title: "Youth Athletic Development",
    description:
      "Comprehensive programs specifically designed for young athletes, focusing on building a strong foundation in both mental performance and nutrition. We understand the unique challenges faced by developing athletes and provide age-appropriate strategies for long-term success.",
  },
];

export const homeCoaching = [
  {
    button: "Programs",
    icon: <FileChartLine className="w-8 h-8" />,
    description:
      "Success in sports isn't just about natural talent - it's about structured development. Our programs combine mental training and nutrition guidance to transform potential into excellence. Whether through individual coaching or team workshops, we provide the expert support needed to elevate your game and achieve lasting results.",
  },
  {
    button: "Coaches",
    icon: <BicepsFlexed className="w-8 h-8" />,
    description:
      "Behind every great athlete stands a great coach. Our team of mental performance and nutrition specialists doesn't just teach - we guide, challenge, and inspire. We see your potential and know how to unlock it, providing the expertise and support that turns good athletes into champions.",
  },
  {
    button: "Mind",
    icon: <Brain className="w-8 h-8" />,
    description:
      "The mental game is often what separates champions from competitors. Our mental performance coaching builds the psychological skills essential for success - focus, confidence, and resilience under pressure. Learn to perform at your best when it matters most, with techniques proven to enhance competitive performance.",
  },
  {
    button: "Nutrition",
    icon: <Apple className="w-8 h-8" />,
    description:
      "Proper nutrition can improve your performance by up to 30%. Yet many athletes aren't sure how to fuel their bodies effectively. We remove the guesswork, providing clear, practical nutrition guidance that enhances your training, speeds recovery, and boosts performance. Turn food into your competitive advantage.",
  },
  {
    button: "Support",
    icon: <Headset className="w-8 h-8" />,
    description:
      "Your athletic journey shouldn't be traveled alone. We provide the ongoing guidance, accountability, and encouragement needed to reach your goals. From regular check-ins to performance tracking, our support system ensures you stay focused and motivated. When you succeed, we succeed.",
  },
];

export const homeTeam = [
  {
    link: "/",
    image: "ethan.png",
    name: "Ethan Levins",
    description: "Mental Performance Coach"
  },
  {
    link: "/",
    image: "serena.jpg",
    name: "Serena Ryan",
    description: "Sports Nutritionist"
  },
  {
    link: "/",
    image: "giada.jpg",
    name: "Giada Franzolini",
    description: "Mental Performance Coach"
  },
]