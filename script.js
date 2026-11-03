document.addEventListener("DOMContentLoaded", () => {
  const first = films[0];
  document.getElementById("featured-title").textContent = first.title;
  document.getElementById("featured-poster-title").innerHTML = first.posterTitle;
  document.getElementById("featured-genre").textContent = first.genre.toUpperCase();
  document.getElementById("featured-description").textContent = first.description;
  document.getElementById("featured-date").textContent = first.date;
  document.getElementById("featured-time").textContent = first.time;
  document.getElementById("featured-venue").textContent = first.venue;
  document.getElementById("featured-address").textContent = first.address;
  const featuredPoster = document.getElementById("featured-poster");
  featuredPoster.classList.add("poster-" + first.color);
  if (first.poster) {
    const img = new Image();
    img.className = "poster-img";
    img.alt = "Locandina di " + first.title;
    img.onload = () => {
      featuredPoster.prepend(img);
      featuredPoster.classList.add("poster-has-image");
    };
    img.src = first.poster; // se l'immagine non si carica resta la locandina tipografica
  }

  const list = document.getElementById("schedule-list");
  const select = document.getElementById("film");
  films.forEach((film, i) => {
    const option = document.createElement("option");
    option.value = `${film.title} — ${film.date}`;
    option.textContent = `${film.title} · ${film.date}`;
    select.appendChild(option);
    const row = document.createElement("article");
    row.className = "schedule-item";
    row.innerHTML = `<span class="schedule-number">${String(i + 1).padStart(2, "0")}</span>
      <div class="schedule-thumb poster-${film.color}">${film.poster ? `<img src="${film.poster}" alt="Locandina di ${film.title}" loading="lazy" onerror="this.remove()">` : ""}</div>
      <div class="schedule-date">${film.date}<small>${film.time}</small></div>
      <div class="schedule-film"><h3>${film.title}</h3><span>${film.genre}</span></div>
      <div class="schedule-place">${film.venue}<small>${film.address}</small></div>
      <a class="schedule-book" href="#prenota" aria-label="Prenota ${film.title}">↗</a>`;
    list.appendChild(row);
  });
  document.getElementById("year").textContent = new Date().getFullYear();
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("nav-open")));
});