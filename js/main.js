/* ==========================================================================
   SHRESTHA HANDICRAFT — SACRED METALLURGY ATELIER (PATAN, NEPAL)
   Shared JavaScript Engine (Tailwind & Lucide Icons Integrated)
   ========================================================================== */

// 1. SPECIMEN PRODUCTS CATALOG DATA
const PRODUCTS = [
  {
    id: 'SH-001',
    name: 'Green Tara — Mother of Liberation',
    alloy: 'Ashtadhatu (8-Metal) & 24K Gold Leaf',
    category: '24K Gold',
    height: '22.5 in (57.1 cm)',
    angula: '124 Angulas',
    weight: '14.2 kg',
    price: 14800,
    status: 'AVAILABLE FOR ESCROW',
    img: 'assets/green_tara.jpg',
    desc: 'Seated gracefully on a double-lotus throne with right leg extended ready to leap to the aid of all beings. Adorned with turquoise and coral inlays, featuring cold-gold painted face.'
  },
  {
    id: 'SH-108',
    name: 'Mahakala Six-Armed Wrathful Protector',
    alloy: 'Ashtadhatu (8-Metal)',
    category: 'Ashtadhatu',
    height: '18.0 in (45.7 cm)',
    angula: '108 Angulas',
    weight: '18.6 kg',
    price: 19500,
    status: 'FOUNDRY CRUCIBLE ACTIVE',
    img: 'assets/mahakala.jpg',
    desc: 'Wrathful guardian standing upon Ganesha, holding kapala skull cup, trident, and damaru drum. Flaming aura ring with master hand chiseling.'
  },
  {
    id: 'SH-204',
    name: 'Shakyamuni Buddha Bhumisparsha',
    alloy: 'Patina Bronze',
    category: 'Patina Bronze',
    height: '24.0 in (60.9 cm)',
    angula: '128 Angulas',
    weight: '21.0 kg',
    price: 12400,
    status: 'AVAILABLE FOR ESCROW',
    img: 'assets/shakyamuni.jpg',
    desc: 'Seated in earth-touching mudra at Bodh Gaya. Antique dark patina bronze finish with fire-gilded gold face and incised monastic robes.'
  },
  {
    id: 'SH-305',
    name: 'Vajrasattva — Primordial Purity',
    alloy: '24K Pure Gold Gilded',
    category: '24K Gold',
    height: '16.5 in (41.9 cm)',
    angula: '96 Angulas',
    weight: '11.8 kg',
    price: 16200,
    status: 'AVAILABLE FOR ESCROW',
    img: 'assets/green_tara.jpg',
    desc: 'Holding five-pointed vajra at heart and ghanta bell at hip. Full mercury fire gilding with burnished agate highlights.'
  },
  {
    id: 'SH-412',
    name: 'Chenrezig 1000-Armed Avalokiteshvara',
    alloy: 'Ashtadhatu (8-Metal)',
    category: 'Ashtadhatu',
    height: '28.0 in (71.1 cm)',
    angula: '144 Angulas',
    weight: '26.5 kg',
    price: 28900,
    status: 'AVAILABLE FOR ESCROW',
    img: 'assets/mahakala.jpg',
    desc: 'Multi-headed deity of boundless compassion. 1000 arms radiating in a lotus circle, hand-cast using modular lost-wax clay pins.'
  },
  {
    id: 'SH-509',
    name: 'Manjushri Flame Sword of Wisdom',
    alloy: 'Patina Bronze',
    category: 'Patina Bronze',
    height: '14.0 in (35.5 cm)',
    angula: '84 Angulas',
    weight: '8.4 kg',
    price: 9800,
    status: 'AVAILABLE FOR ESCROW',
    img: 'assets/shakyamuni.jpg',
    desc: 'Wielding the flaming sword of discriminating wisdom to sever ignorance, holding the Prajnaparamita sutra text on a lotus.'
  }
];

// 2. DIGITAL LEDGER ORDERS DATABASE
const ORDERS_DB = {
  'SH-108': {
    orderId: 'SH-108',
    client: 'Sacred Art Institute of Kyoto',
    deity: 'Mahakala Six-Armed Wrathful Protector',
    sculptor: 'Master Rajan Tamrakar (42nd Gen)',
    targetDate: 'Sept 18, 2026',
    currentStage: 4,
    stages: [
      {
        num: 1,
        title: 'Beeswax Sculpting & Iconometry',
        desc: 'Formulation of sal resin and beeswax model according to 108 Angula proportion grid.',
        status: 'completed',
        stamp: 'VERIFIED - 108 ANGULAS PASS (May 12, 2026)'
      },
      {
        num: 2,
        title: 'Multi-Layer Clay Shelling',
        desc: '6 layers of Kathmandu red clay & rice husk binder applied over 45 days.',
        status: 'completed',
        stamp: 'PASSED - PATAN CLAY SHELL SEALED (June 28, 2026)'
      },
      {
        num: 3,
        title: 'Molten Ashtadhatu Pouring',
        desc: 'Wax melted out and molten 8-metal alloy poured at 1,080°C crucible temperature.',
        status: 'completed',
        stamp: 'CRUCIBLE TEMP 1,080°C CONFIRMED (July 15, 2026)'
      },
      {
        num: 4,
        title: 'Chiseling & Hand Detailing',
        desc: 'Cold chiseling of facial features, flame halo, and skull crown using 0.5mm tungsten steel punches.',
        status: 'current',
        stamp: 'IN PROGRESS - 82% COMPLETED (Aug 14, 2026)'
      },
      {
        num: 5,
        title: '24K Gold Leaf Gilding & Consecration',
        desc: 'Mercury fire gilding, agate stone burnishing, and monastic scroll sealing ritual.',
        status: 'pending',
        stamp: 'SCHEDULED - SEPT 10, 2026 RITUAL'
      }
    ]
  },
  'SH-109': {
    orderId: 'SH-109',
    client: 'Private Collection, Geneva',
    deity: 'Green Tara — Divine Mother',
    sculptor: 'Master Suresh Tamrakar',
    targetDate: 'Oct 05, 2026',
    currentStage: 2,
    stages: [
      {
        num: 1,
        title: 'Beeswax Sculpting & Iconometry',
        desc: 'Hand-sculpted beeswax model with delicate lotus flower stems.',
        status: 'completed',
        stamp: 'VERIFIED - ANGULA TENSION OK (June 01, 2026)'
      },
      {
        num: 2,
        title: 'Multi-Layer Clay Shelling',
        desc: 'Applying 4th layer of Patan silt and husk slurry.',
        status: 'current',
        stamp: 'IN PROGRESS - LAYER 4 DRYING (Aug 10, 2026)'
      },
      {
        num: 3,
        title: 'Molten Ashtadhatu Pouring',
        desc: 'Crucible casting scheduled.',
        status: 'pending',
        stamp: 'FOUNDRY SLOT #2'
      },
      {
        num: 4,
        title: 'Chiseling & Hand Detailing',
        desc: 'Cold chiseling.',
        status: 'pending',
        stamp: 'PENDING'
      },
      {
        num: 5,
        title: '24K Gold Leaf Gilding & Consecration',
        desc: 'Fire gilding & consecration.',
        status: 'pending',
        stamp: 'PENDING'
      }
    ]
  },
  'SH-204': {
    orderId: 'SH-204',
    client: 'Bodh Gaya Heritage Foundation',
    deity: 'Shakyamuni Buddha Bhumisparsha',
    sculptor: 'Master Rajan Tamrakar',
    targetDate: 'Completed',
    currentStage: 5,
    stages: [
      {
        num: 1,
        title: 'Beeswax Sculpting & Iconometry',
        desc: 'Beeswax modeling.',
        status: 'completed',
        stamp: 'VERIFIED'
      },
      {
        num: 2,
        title: 'Multi-Layer Clay Shelling',
        desc: 'Clay shelling.',
        status: 'completed',
        stamp: 'PASSED'
      },
      {
        num: 3,
        title: 'Molten Ashtadhatu Pouring',
        desc: 'Ashtadhatu pouring.',
        status: 'completed',
        stamp: 'PASSED'
      },
      {
        num: 4,
        title: 'Chiseling & Hand Detailing',
        desc: 'Hand chiseling.',
        status: 'completed',
        stamp: 'PASSED'
      },
      {
        num: 5,
        title: '24K Gold Leaf Gilding & Consecration',
        desc: 'Full consecration completed.',
        status: 'completed',
        stamp: 'CONSECRATED & SEALED'
      }
    ]
  }
};

// 3. LIGHT / DARK THEME SYSTEM (TAILWIND CLASS TOGGLE)
function initTheme() {
  const savedTheme = localStorage.getItem('sh_theme') || 'dark';
  setTheme(savedTheme);
}

function toggleTheme() {
  const isDark = document.documentElement.classList.contains('dark');
  const newTheme = isDark ? 'light' : 'dark';
  setTheme(newTheme);
}

function setTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  localStorage.setItem('sh_theme', theme);
  
  const iconEls = document.querySelectorAll('#themeToggleIcon, #mobileThemeToggleIcon, .themeToggleBtn');
  iconEls.forEach(iconEl => {
    if (theme === 'light') {
      iconEl.innerHTML = `<i data-lucide="moon" class="w-5 h-5 text-gold-dark"></i>`;
      iconEl.setAttribute('title', 'Switch to Dark Mode');
    } else {
      iconEl.innerHTML = `<i data-lucide="sun" class="w-5 h-5 text-gold"></i>`;
      iconEl.setAttribute('title', 'Switch to Light Mode');
    }
  });
  if (window.lucide) lucide.createIcons();
}

// 4. PERSISTENT ACQUISITION CART STATE
function getCart() {
  try {
    return JSON.parse(localStorage.getItem('sh_cart')) || [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem('sh_cart', JSON.stringify(cart));
  updateCartUI();
}

function addToCartByProdId(prodId) {
  const p = PRODUCTS.find(x => x.id === prodId);
  if (!p) return;

  const cart = getCart();
  const existing = cart.find(ci => ci.id === p.id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      id: p.id,
      name: p.name,
      alloy: p.alloy,
      price: p.price,
      img: p.img,
      qty: 1
    });
  }

  saveCart(cart);
  toggleCartDrawer();
}

function removeFromCart(id) {
  let cart = getCart();
  cart = cart.filter(item => item.id !== id);
  saveCart(cart);
}

function toggleCartDrawer() {
  const overlay = document.getElementById('cartOverlay');
  if (overlay) {
    overlay.classList.toggle('hidden');
    overlay.classList.toggle('flex');
  }
}

function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  const icon = document.getElementById('hamburgerIcon');
  if (menu) {
    const isHidden = menu.classList.contains('hidden');
    if (isHidden) {
      menu.classList.remove('hidden');
      if (icon) icon.setAttribute('data-lucide', 'x');
    } else {
      menu.classList.add('hidden');
      if (icon) icon.setAttribute('data-lucide', 'menu');
    }
    if (window.lucide) lucide.createIcons();
  }
}

function closeCartOnOverlay(e) {
  if (e.target.id === 'cartOverlay') {
    toggleCartDrawer();
  }
}

function updateCartUI() {
  const cart = getCart();
  const countEls = document.querySelectorAll('#cartCount, #mobileCartCount, .cartCount');
  const totalQty = cart.reduce((acc, i) => acc + i.qty, 0);
  countEls.forEach(countEl => {
    countEl.innerText = totalQty;
  });

  const bodyEl = document.getElementById('cartBody');
  const subtotalEl = document.getElementById('cartSubtotal');
  const totalEl = document.getElementById('cartTotal');

  if (cart.length === 0) {
    bodyEl.innerHTML = `
      <div class="text-center py-12 px-4 text-slate-400 dark:text-slate-500 font-mono text-sm">
        NO STATUARY SPECIMENS IN ACQUISITION DRAWER.
      </div>
    `;
    if (subtotalEl) subtotalEl.innerText = '$0 USD';
    if (totalEl) totalEl.innerText = '$0 USD';
    return;
  }

  let subtotal = 0;
  bodyEl.innerHTML = cart.map(item => {
    const itemTotal = item.price * item.qty;
    subtotal += itemTotal;
    return `
      <div class="flex items-center gap-4 p-3 bg-white dark:bg-patina-900 border border-slate-200 dark:border-slate-800 rounded-lg relative">
        <img class="w-16 h-16 object-cover rounded bg-black" src="${item.img}" alt="${item.name}" />
        <div class="flex-1 flex flex-col gap-1">
          <div class="font-display font-semibold text-sm text-slate-900 dark:text-parchment">${item.name}</div>
          <div class="font-mono text-xs text-slate-500 dark:text-slate-400">${item.alloy} • Qty: ${item.qty}</div>
          <div class="font-mono font-bold text-sm text-gold-dark dark:text-gold">$${itemTotal.toLocaleString()} USD</div>
        </div>
        <button onclick="removeFromCart('${item.id}')" class="text-red-500 hover:text-red-700 text-xs p-1" title="Remove">
          <i data-lucide="x" class="w-4 h-4"></i>
        </button>
      </div>
    `;
  }).join('');

  if (subtotalEl) subtotalEl.innerText = `$${subtotal.toLocaleString()} USD`;
  if (totalEl) totalEl.innerText = `$${subtotal.toLocaleString()} USD`;
  if (window.lucide) lucide.createIcons();
}

// 5. SPECIMEN INSPECTION MODAL
function openSpecimenModalByProdId(prodId) {
  const p = PRODUCTS.find(x => x.id === prodId);
  if (!p) return;

  const modal = document.getElementById('specimenModal');
  if (!modal) return;

  document.getElementById('modalImg').src = p.img;
  document.getElementById('modalSpecTag').innerText = `SPECIMEN #${p.id}`;
  document.getElementById('modalTitle').innerText = p.name;
  document.getElementById('modalDesc').innerText = p.desc;
  document.getElementById('modalAlloy').innerText = p.alloy;
  document.getElementById('modalHeight').innerText = `${p.height} (${p.angula})`;
  document.getElementById('modalWeight').innerText = p.weight;
  document.getElementById('modalPrice').innerText = `$${p.price.toLocaleString()} USD`;

  const acquireBtn = document.getElementById('modalAcquireBtn');
  acquireBtn.onclick = () => {
    addToCartByProdId(p.id);
    closeSpecimenModal();
  };

  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeSpecimenModal() {
  const modal = document.getElementById('specimenModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

// 6. CHECKOUT MODAL MOCK
function triggerCheckoutModal() {
  const cart = getCart();
  if (cart.length === 0) {
    alert('Your acquisition drawer is empty.');
    return;
  }
  const total = document.getElementById('cartTotal').innerText;
  alert(`Escrow Protocol Initiated for total of ${total}.\n\nA Patan Atelier Concierge will issue your bank wire escrow contract & certified SPECTROMETRY assay via email.`);
  saveCart([]);
  toggleCartDrawer();
}

// INITIALIZE THEME AND CART UI ON LOAD
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  updateCartUI();
  if (window.lucide) lucide.createIcons();
});
