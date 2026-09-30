function commonSkills(skills1, skills2) {
  const skills = new Set();

  for (let i = 0; i < skills1.length; i++) {
    skills.add(skills1[i].toLowerCase());
  }

  const common = [];

  for (let i = 0; i < skills2.length; i++) {
    const lowerCaseSkills = skills2[i].toLowerCase();
    if (skills.has(lowerCaseSkills)) {
      common.push(lowerCaseSkills);
    }
  }
  return [...new Set(common)].sort();
}

console.log(commonSkills(["JS", "React", "Node"], ["react", "css", "js"])); // ["js", "react"]
console.log(commonSkills(["Python", "SQL"], ["Java", "C++"]));
