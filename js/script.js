// ===== Artefact Products — script.js =====

document.addEventListener("DOMContentLoaded", () => {
  // Menu mobile
  const toggle = document.querySelector(".nav-toggle");
  const mobileNav = document.querySelector(".mobile-nav");
  if (toggle && mobileNav) {
    toggle.addEventListener("click", () => {
      mobileNav.classList.toggle("open");
      toggle.textContent = mobileNav.classList.contains("open") ? "✕" : "☰";
    });
  }

  // Mark the current navigation link as active
  const current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a, .mobile-nav a").forEach((a) => {
    if (a.getAttribute("href") === current) a.classList.add("active");
  });

  // Generate the sky stars on the homepage
  const sky = document.querySelector(".hero-sky");
  if (sky) {
    for (let i = 0; i < 60; i++) {
      const star = document.createElement("span");
      star.className = "star";
      star.style.left = Math.random() * 100 + "%";
      star.style.top = Math.random() * 70 + "%";
      star.style.animationDelay = Math.random() * 4 + "s";
      sky.appendChild(star);
    }
  }

  // Product gallery
  const thumbs = document.querySelectorAll(".thumb");
  const mainImg = document.querySelector(".product-gallery-main img");
  thumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      thumbs.forEach((t) => t.classList.remove("active"));
      thumb.classList.add("active");
      if (mainImg) mainImg.src = thumb.querySelector("img").src;
    });
  });

  // FAQ accordion
  document.querySelectorAll(".faq-item").forEach((item) => {
    const q = item.querySelector(".faq-q");
    q.addEventListener("click", () => {
      const wasOpen = item.classList.contains("open");
      document.querySelectorAll(".faq-item").forEach((i) => i.classList.remove("open"));
      if (!wasOpen) item.classList.add("open");
    });
  });

  // Contact form demo; no message is sent without a backend
  const form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      document.querySelector(".form-success").classList.add("show");
      form.reset();
    });
  }

  // ===== Journals (Centering / Introspection / Compossible) — Supabase storage =====
  const journalText = document.querySelector(".journal-text[data-slug]");
  if (journalText && window.supabase) {
    const SUPABASE_URL = "https://ajeqdehbmxyxwyzwkvfv.supabase.co";
    const SUPABASE_KEY = "sb_publishable_YT34QOad86ViUvFZAzplNw_ewhMJ4Lt";
    const client = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
    const slug = journalText.dataset.slug;
    const saveBtn = document.querySelector(".save-story-btn");
    const statusEl = document.querySelector(".save-status");

    // Load previously saved text
    client
      .from("story_content")
      .select("content")
      .eq("page_slug", slug)
      .single()
      .then(({ data, error }) => {
        if (!error && data && data.content) {
          journalText.innerText = data.content;
        }
      });

    // Save the text when the button is clicked
    if (saveBtn) {
      saveBtn.addEventListener("click", async () => {
        statusEl.textContent = "Saving...";
        statusEl.classList.remove("error");
        const { error } = await client
          .from("story_content")
          .update({ content: journalText.innerText, updated_at: new Date().toISOString() })
          .eq("page_slug", slug);
        if (error) {
          statusEl.textContent = "Error: please try again.";
          statusEl.classList.add("error");
        } else {
          statusEl.textContent = "Saved ✓";
          setTimeout(() => { statusEl.textContent = ""; }, 3000);
        }
      });
    }
  }
});
