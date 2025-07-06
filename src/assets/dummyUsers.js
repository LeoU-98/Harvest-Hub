// Placeholder "database" for demonstration
export const dummyUsers = [
  {
    email: "merchant@harvesthub.com",
    // password: "merchant123",
    name: "Hasan",
    image: `${import.meta.env.BASE_URL}users/merchant.jpg`,
    phone: "0100-123-4567",
    location: "Giza, Egypt",
    role: "merchant",
    bio: "Passionate about agriculture and quality produce. Helping local farmers reach more customers through Harvest Hub.",
  },
  {
    email: "customer@harvesthub.com",
    // password: "customer123",
    name: "Laila",
    image: `${import.meta.env.BASE_URL}users/customer.jpg`,
    phone: "0100-555-9999",
    location: "Cairo, Egypt",
    role: "customer",
    bio: "Lover of fresh, organic food. Always on the lookout for the best local products for my family.",
  },
  {
    email: "admin@harvesthub.com",
    // password: "admin123",
    name: "Mohamed",
    image: `${import.meta.env.BASE_URL}users/admin.jpg`,
    phone: "0100-888-4444",
    location: "Alexandria, Egypt",
    role: "admin",
    bio: "Tech enthusiast and platform manager. I keep Harvest Hub running smoothly and securely for everyone.",
  },
];
