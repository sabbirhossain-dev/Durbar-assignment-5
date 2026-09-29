function generateProfileCard(user) {
  return `${user?.name ?? "Anonymous"} | ${user?.address?.city ?? "Unknown"} | followers: ${user?.social?.followers ?? 0}`;
}

console.log(
  generateProfileCard({
    address: { city: "Dhaka" },
    name: "Rafi",
    social: { followers: 0 },
  }),
);
console.log(generateProfileCard({ name: "Alice", social: { followers: 120 } }));
console.log(generateProfileCard({}));
console.log(
  generateProfileCard({
    address: { city: "" },
    name: "",
    social: { followers: 999 },
  }),
);
console.log(
  generateProfileCard({
    address: { city: null },
    name: null,
    social: { followers: null },
  }),
);
