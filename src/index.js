const ids = ["about", "projects", "links"];

window.addEventListener("scroll", () => {
  const d = document.documentElement;
  const offset = d.scrollTop + window.innerHeight;
  const height = d.offsetHeight;

  ids.forEach((id) => {
    const header = document.getElementById(id);
    const distanceToTop = header.getBoundingClientRect().top;
    if (distanceToTop < 250 && distanceToTop > -50) {
      const cursor = document.getElementById(`${id}-cursor`);
      cursor.classList.add("active-cursor");
    } else {
      const cursor = document.getElementById(`${id}-cursor`);
      cursor.classList.remove("active-cursor");
    }
  });

  // if at the bottom of the page just apply blinking cursor to links section
  if (offset >= height) {
    console.log("bottom of page");
    const cursor = document.getElementById(`links-cursor`);
    cursor.classList.add("active-cursor");
  } else {
    const cursor = document.getElementById(`links-cursor`);
    cursor.classList.remove("active-cursor");
  }
});
