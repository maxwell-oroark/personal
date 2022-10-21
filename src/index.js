const ids = ["about", "projects", "links"];

window.addEventListener("scroll", () => {
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
});
