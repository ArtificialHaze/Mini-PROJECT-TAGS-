// VARIABLES

const tagElement = document.querySelector("#tags");
const textarea = document.getElementById("textarea");

// FOCUS

textarea.focus();

// EVENT LISTENER FOR KEY PRESS

textarea.addEventListener("keydown", (e) => {
  addTags(e.target.value);
  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = "";
    }, 25);
    randomize();
  }
});

const addTags = (tag) => {
  const tags = tag
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());
  tagElement.innerHTML = "";
  tags.forEach((tag) => {
    const element = document.createElement("span");
    element.classList.add("tag");
    element.innerHTML = tag;
    tagElement.appendChild(element);
  });
};

// RANDOM TAG GENERATOR

const randomize = () => {
  const howManyTimes = 30;
  const interval = setInterval(() => {
    const randomTag = pickOneTag();
    activateTag(randomTag);
    setTimeout(() => {
      removeActiveTag(randomTag);
    }, 150);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const randomTag = pickOneTag();
      activateTag(randomTag);
    }, 150);
  }, howManyTimes * 100);
};

// PICK ONE TAG

const pickOneTag = () => {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
};

// ADDING AND REMOVING ACTIVE TAG

const activateTag = (tag) => {
  tag.classList.add("active");
};

const removeActiveTag = (tag) => {
  tag.classList.remove("active");
};
