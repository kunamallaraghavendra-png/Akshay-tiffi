
const whatsappNumber = "919160047022";

// Sample items: replace these with the shop's actual menu.
const menu = [
  { name: "Idli", icon: "🍽️" },
  { name: "Dosa", icon: "🥞" },
  { name: "Masala Dosa", icon: "🫓" },
  { name: "Vada", icon: "🍩" },
  { name: "Poori", icon: "🫓" },
  { name: "Upma", icon: "🥣" }
];

const menuContainer = document.getElementById("menu-items");

menu.forEach((item) => {
  const card = document.createElement("div");
  card.className = "menu-card";

  const icon = document.createElement("div");
  icon.className = "food-icon";
  icon.textContent = item.icon;

  const title = document.createElement("h3");
  title.textContent = item.name;

  const button = document.createElement("button");
  button.className = "order-btn";
  button.textContent = "WhatsApp Order";
  button.addEventListener("click", () => orderItem(item.name));

  card.append(icon, title, button);
  menuContainer.appendChild(card);
});

function openWhatsApp(message) {
  const url =
    "https://wa.me/" + whatsappNumber +
    "?text=" + encodeURIComponent(message);

  window.open(url, "_blank");
}

function orderItem(itemName) {
  const message =
    "Hello Akshay Tiffin Center! I would like to order: " +
    itemName + ". Please confirm availability.";

  openWhatsApp(message);
}

function orderGeneral() {
  const message =
    "Hello Akshay Tiffin Center! Please share the available tiffin items. I would like to place an order.";

  openWhatsApp(message);
}
