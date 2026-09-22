export function setupNavigation() {
  const toggle = document.querySelector(".menu-toggle");
  const navigation = document.querySelector("#site-navigation");

  if (!(toggle instanceof HTMLButtonElement) || !(navigation instanceof HTMLElement)) {
    return;
  }

  toggle.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("is-open");

    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  navigation.addEventListener("click", (event) => {
    if (!(event.target instanceof HTMLAnchorElement)) {
      return;
    }

    navigation.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  });
}