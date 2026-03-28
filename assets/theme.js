function initSidebar() {
  const openBtn = document.getElementById("open-sidebar");
  const closeBtn = document.getElementById("close-sidebar");
  const sidebar = document.getElementById("sidebar-menu");
  const mobileSidebar = document.getElementById("mobile-sidebar");

  if (!openBtn || !sidebar) return;

  openBtn.addEventListener("click", () => {
    mobileSidebar.classList.remove("hidden");

    requestAnimationFrame(() => {
      sidebar.classList.remove("-translate-x-full");
    });
  });

  closeBtn?.addEventListener("click", () => {
    sidebar.classList.add("-translate-x-full");

    setTimeout(() => {
      mobileSidebar.classList.add("hidden");
    }, 300);
  });

  mobileSidebar.addEventListener("click", (e) => {
    if (e.target === mobileSidebar) {
      sidebar.classList.add("-translate-x-full");
    }
    setTimeout(() => {
      mobileSidebar.classList.add("hidden");
    }, 300);
  });
}

function initBackToTop() {
  const btn = document.getElementById("back-to-top");
  if (!btn) return;

  // hiện khi scroll xuống
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      btn.classList.remove("opacity-0", "invisible");
    } else {
      btn.classList.add("opacity-0", "invisible");
    }
  });

  // click thì scroll lên đầu trang
  btn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// chạy lần đầu khi page load
initSidebar();
initBackToTop();

// chạy lại khi Shopify reload section
document.addEventListener("shopify:section:load", () => {
  initSidebar();
  initBackToTop();
});
