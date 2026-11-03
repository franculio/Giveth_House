export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

// How many testimonials the homepage shows per page load, picked at random.
export const TESTIMONIALS_VISIBLE = 4;

// Add new testimonials at the end. Only publish with the person's OK.
export const testimonials: Testimonial[] = [
  {
    quote:
      "80% of what I know about web3, Ethereum, and the history of everything — I learned inside the walls of the Giveth House, from people who were there coding, supporting, creating, and building.",
    name: "Mafer",
    role: "Trusted Seed / Commons Stack contributor",
  },
  {
    quote:
      "It's not exactly a home, it's not exactly work — but it's like this third space.",
    name: "Jess",
    role: "Co-organiser, ETH Gathering",
  },
  {
    quote:
      "The best thing you can do is come to the Giveth House and enjoy yourself. It's about building community, building friendships, connecting people in real life.",
    name: "Griff Green",
    role: "Co-founder of Giveth, founder of the house",
  },
  {
    quote:
      "Every person who comes also contributes and puts their own thing into the house. It has a really homey feeling.",
    name: "Franco Ruiz",
    role: "Steward, Giveth House",
  },
  {
    quote:
      "Sometimes the nicest surprises happen when you're not looking for them. I was recommended to visit the Giveth House as I was hosting an event nearby. I was looking for a bed, and instead I found warmth, intriguing conversations with veterans of my industry, a place of productivity, comfort and some newfound friends who I'll meet at next conferences around the globe. Support Giveth, so Franco can continue to build out this little magical oasis in the vast desert of today's commercialized world.",
    name: "Robert",
    role: "Web3Privacy Now",
  },
];
