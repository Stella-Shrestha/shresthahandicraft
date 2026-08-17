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
let inMemoryCart = [];
let inMemoryTheme = 'dark';

function safeGetStorage(key, fallback) {
  try {
    const val = localStorage.getItem(key);
    return val !== null ? val : fallback;
  } catch (e) {
    if (key === 'sh_theme') return inMemoryTheme;
    return fallback;
  }
}

function safeSetStorage(key, val) {
  try {
    localStorage.setItem(key, val);
  } catch (e) {
    if (key === 'sh_theme') inMemoryTheme = val;
  }
}

function initTheme() {
  const savedTheme = safeGetStorage('sh_theme', 'dark');
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
  safeSetStorage('sh_theme', theme);

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
  renderIcons();
}

// 4. PERSISTENT ACQUISITION CART STATE
function getCart() {
  try {
    const raw = localStorage.getItem('sh_cart');
    if (raw) return JSON.parse(raw);
    return inMemoryCart;
  } catch (e) {
    return inMemoryCart;
  }
}

function saveCart(cart) {
  inMemoryCart = cart;
  safeSetStorage('sh_cart', JSON.stringify(cart));
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

  const overlay = document.getElementById('cartOverlay');
  if (overlay) {
    overlay.classList.remove('hidden');
    overlay.classList.add('flex');
  }
}

function removeFromCart(id) {
  let cart = getCart();
  cart = cart.filter(item => item.id !== id);
  saveCart(cart);
}

function increaseQty(id) {
  const cart = getCart();
  const item = cart.find(x => x.id === id);
  if (item) {
    item.qty += 1;
    saveCart(cart);
  }
}

function decreaseQty(id) {
  let cart = getCart();
  const item = cart.find(x => x.id === id);
  if (item) {
    if (item.qty > 1) {
      item.qty -= 1;
    } else {
      cart = cart.filter(x => x.id !== id);
    }
    saveCart(cart);
  }
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
    renderIcons();
  }
}

function closeCartOnOverlay(e) {
  if (e.target.id === 'cartOverlay') {
    toggleCartDrawer();
  }
}

function closeSpecimenOnOverlay(e) {
  if (e.target.id === 'specimenModal') {
    closeSpecimenModal();
  }
}

function closeReviewOnOverlay(e) {
  if (e.target.id === 'reviewModal') {
    closeReviewModal();
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
    if (bodyEl) {
      bodyEl.innerHTML = `
        <div class="text-center py-12 px-4 text-slate-400 dark:text-slate-500 font-mono text-sm">
          NO STATUARY SPECIMENS IN ACQUISITION DRAWER.
        </div>
      `;
    }
    if (subtotalEl) subtotalEl.innerText = '$0 USD';
    if (totalEl) totalEl.innerText = '$0 USD';
    return;
  }

  let subtotal = 0;
  if (bodyEl) {
    bodyEl.innerHTML = cart.map(item => {
      const itemTotal = item.price * item.qty;
      subtotal += itemTotal;
      return `
        <div class="flex items-center gap-4 p-3 bg-white dark:bg-patina-900 border border-slate-200 dark:border-slate-800 rounded-lg relative">
          <img class="w-16 h-16 object-cover rounded bg-black" src="${item.img}" alt="${item.name}" />
          <div class="flex-1 flex flex-col gap-1">
            <div class="font-display font-semibold text-sm text-slate-900 dark:text-parchment">${item.name}</div>
            <div class="font-mono text-xs text-slate-500 dark:text-slate-400">${item.alloy}</div>
            <div class="flex items-center justify-between mt-1">
              <div class="flex items-center border border-slate-200 dark:border-slate-700 rounded bg-slate-50 dark:bg-patina-950">
                <button onclick="decreaseQty('${item.id}')" class="px-2.5 py-0.5 text-xs text-slate-600 dark:text-slate-300 hover:text-gold font-bold">-</button>
                <span class="px-2 text-xs font-mono font-bold text-slate-900 dark:text-parchment">${item.qty}</span>
                <button onclick="increaseQty('${item.id}')" class="px-2.5 py-0.5 text-xs text-slate-600 dark:text-slate-300 hover:text-gold font-bold">+</button>
              </div>
              <div class="font-mono font-bold text-sm text-gold-dark dark:text-gold">$${itemTotal.toLocaleString()} USD</div>
            </div>
          </div>
          <button onclick="removeFromCart('${item.id}')" class="text-slate-400 hover:text-red-500 text-xs p-1 transition-colors" title="Remove">
            <i data-lucide="x" class="w-4 h-4"></i>
          </button>
        </div>
      `;
    }).join('');
  }

  if (subtotalEl) subtotalEl.innerText = `$${subtotal.toLocaleString()} USD`;
  if (totalEl) totalEl.innerText = `$${subtotal.toLocaleString()} USD`;
  renderIcons();
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

// 7. PATRON REVIEWS SLIDER ENGINE
let reviewCurrentIndex = 0;
let reviewAutoplayInterval = null;

function initReviewsSlider() {
  const track = document.getElementById('reviewsTrack');
  if (!track) return;

  const cards = track.children;
  const totalCards = cards.length;
  if (totalCards === 0) return;

  const prevBtn = document.getElementById('prevReviewBtn');
  const nextBtn = document.getElementById('nextReviewBtn');
  const dotsContainer = document.getElementById('reviewDots');
  const counterEl = document.getElementById('reviewCounter');
  const autoplayBtn = document.getElementById('autoplayReviewBtn');

  function getCardsPerView() {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  }

  function getMaxIndex() {
    const cardsPerView = getCardsPerView();
    return Math.max(0, totalCards - cardsPerView);
  }

  function updateSliderPosition() {
    const cardsPerView = getCardsPerView();
    const maxIdx = getMaxIndex();
    if (reviewCurrentIndex > maxIdx) reviewCurrentIndex = maxIdx;
    if (reviewCurrentIndex < 0) reviewCurrentIndex = 0;

    const percentage = (100 / cardsPerView) * reviewCurrentIndex;
    track.style.transform = `translateX(-${percentage}%)`;

    if (counterEl) {
      const currentFormatted = String(reviewCurrentIndex + 1).padStart(2, '0');
      const totalFormatted = String(totalCards).padStart(2, '0');
      counterEl.innerText = `${currentFormatted} / ${totalFormatted}`;
    }

    if (prevBtn) {
      prevBtn.style.opacity = (reviewCurrentIndex === 0) ? '0.6' : '1';
    }
    if (nextBtn) {
      nextBtn.style.opacity = (reviewCurrentIndex >= maxIdx) ? '0.6' : '1';
    }

    if (dotsContainer) {
      dotsContainer.innerHTML = '';
      const numDots = maxIdx + 1;
      for (let i = 0; i < numDots; i++) {
        const dot = document.createElement('button');
        dot.className = `h-2 rounded-full transition-all duration-300 ${i === reviewCurrentIndex
            ? 'w-7 bg-gold shadow-sm'
            : 'w-2 bg-slate-300 dark:bg-slate-700 hover:bg-gold/50'
          }`;
        dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
        dot.onclick = () => {
          reviewCurrentIndex = i;
          updateSliderPosition();
        };
        dotsContainer.appendChild(dot);
      }
    }
  }

  if (prevBtn) {
    prevBtn.onclick = () => {
      if (reviewCurrentIndex > 0) {
        reviewCurrentIndex--;
      } else {
        reviewCurrentIndex = getMaxIndex();
      }
      updateSliderPosition();
    };
  }

  if (nextBtn) {
    nextBtn.onclick = () => {
      const maxIdx = getMaxIndex();
      if (reviewCurrentIndex < maxIdx) {
        reviewCurrentIndex++;
      } else {
        reviewCurrentIndex = 0;
      }
      updateSliderPosition();
    };
  }

  let isAutoplay = true;
  function startAutoplay() {
    stopAutoplay();
    reviewAutoplayInterval = setInterval(() => {
      const maxIdx = getMaxIndex();
      reviewCurrentIndex = (reviewCurrentIndex >= maxIdx) ? 0 : reviewCurrentIndex + 1;
      updateSliderPosition();
    }, 4500);
  }

  function stopAutoplay() {
    if (reviewAutoplayInterval) clearInterval(reviewAutoplayInterval);
  }

  if (autoplayBtn) {
    autoplayBtn.onclick = () => {
      isAutoplay = !isAutoplay;
      if (isAutoplay) {
        startAutoplay();
        autoplayBtn.innerHTML = `<i data-lucide="pause" class="w-4 h-4"></i>`;
        autoplayBtn.setAttribute('title', 'Pause Autoplay');
      } else {
        stopAutoplay();
        autoplayBtn.innerHTML = `<i data-lucide="play" class="w-4 h-4"></i>`;
        autoplayBtn.setAttribute('title', 'Start Autoplay');
      }
      renderIcons();
    };
  }

  // Touch Swipe Support
  let startX = 0;
  let isDragging = false;

  track.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
    stopAutoplay();
  }, { passive: true });

  track.addEventListener('touchend', (e) => {
    if (!isDragging) return;
    isDragging = false;
    const endX = e.changedTouches[0].clientX;
    const diffX = startX - endX;

    if (Math.abs(diffX) > 40) {
      if (diffX > 0) {
        const maxIdx = getMaxIndex();
        if (reviewCurrentIndex < maxIdx) reviewCurrentIndex++;
      } else {
        if (reviewCurrentIndex > 0) reviewCurrentIndex--;
      }
      updateSliderPosition();
    }
    if (isAutoplay) startAutoplay();
  }, { passive: true });

  const sliderContainer = document.getElementById('reviewsSliderContainer');
  if (sliderContainer) {
    sliderContainer.addEventListener('mouseenter', stopAutoplay);
    sliderContainer.addEventListener('mouseleave', () => {
      if (isAutoplay) startAutoplay();
    });
  }

  window.addEventListener('resize', updateSliderPosition);
  updateSliderPosition();
  if (isAutoplay) startAutoplay();
}

// 8. PATRON REVIEW MODAL HANDLERS
function openReviewModal() {
  const modal = document.getElementById('reviewModal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
}

function closeReviewModal() {
  const modal = document.getElementById('reviewModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

function handleReviewSubmit(e) {
  e.preventDefault();
  alert('Thank you! Your patron testimonial has been recorded and submitted for monastic verification into the Patan Atelier Ledger.');
  closeReviewModal();
  if (e.target) e.target.reset();
}

const LUCIDE_SVG_MAP = {
  'sparkles': '<path d="m12 3-1.9 5.8-5.8 1.9 5.8 1.9 1.9 5.8 1.9-5.8 5.8-1.9-5.8-1.9z"/><path d="M5 3v4M3 5h4M19 17v4M17 19h4"/>',
  'pause': '<rect width="4" height="16" x="6" y="4" rx="1"/><rect width="4" height="16" x="14" y="4" rx="1"/>',
  'play': '<polygon points="6 3 20 12 6 21 6 3"/>',
  'chevron-left': '<path d="m15 18-6-6 6-6"/>',
  'chevron-right': '<path d="m9 18 6-6-6-6"/>',
  'star': '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
  'flame': '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 3z"/>',
  'shield-check': '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
  'globe': '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
  'diamond': '<path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.4l8.6 8.6a2.41 2.41 0 0 0 3.4 0l8.6-8.6a2.41 2.41 0 0 0 0-3.4l-8.6-8.6a2.41 2.41 0 0 0-3.4 0Z"/>',
  'award': '<circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>',
  'badge-check': '<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.78 4.78 4 4 0 0 1-6.74 0 4 4 0 0 1-4.78-4.78 4 4 0 0 1 0-6.75Z"/><path d="m9 12 2 2 4-4"/>',
  'landmark': '<line x1="3" x2="21" y1="22" y2="22"/><line x1="6" x2="6" y1="18" y2="11"/><line x1="10" x2="10" y1="18" y2="11"/><line x1="14" x2="14" y1="18" y2="11"/><line x1="18" x2="18" y1="18" y2="11"/><polygon points="12 2 20 7 4 7 12 2"/>',
  'message-square': '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
  'x': '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  'menu': '<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>',
  'sun': '<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',
  'moon': '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
  'shopping-bag': '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>',
  'ruler': '<path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.4 2.4 0 0 1 0-3.4l2.6-2.6a2.4 2.4 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/>',
  'map-pin': '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  'arrow-right': '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  'user': '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  'check': '<path d="m5 12 5 5L20 7"/>',
  'search': '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  'scan': '<path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/>',
  'plus': '<path d="M5 12h14"/><path d="M12 5v14"/>',
  'message-square-plus': '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M12 7v6"/><path d="M9 10h6"/>',
  'scroll-text': '<path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4"/><path d="M19 17V5a2 2 0 0 0-2-2H4"/><path d="M15 8h-5"/><path d="M15 12h-5"/>',
  'users': '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  'clock': '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  'timer': '<line x1="10" x2="14" y1="2" y2="2"/><line x1="12" x2="15" y1="14" y2="11"/><circle cx="12" cy="14" r="8"/>',
  'feather': '<path d="M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.58 9.92a2 2 0 0 0-.58 1.42V19a2 2 0 0 0 2 2h7.67z"/><path d="m16 8-6 6"/><path d="M17.5 15H9"/>',
  'pen-tool': '<path d="m12 19 7-7 3 3-7 7-3-3z"/><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="m2 2 7.586 7.586"/><circle cx="11" cy="11" r="2"/>',
  'crosshair': '<circle cx="12" cy="12" r="10"/><line x1="22" x2="18" y1="12" y2="12"/><line x1="6" x2="2" y1="12" y2="12"/><line x1="12" x2="12" y1="6" y2="2"/><line x1="12" x2="12" y1="22" y2="18"/>',
  'target': '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  'compass': '<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>',
  'shapes': '<path d="M8.3 10a.7.7 0 0 1-.626-1.079l2.7-4.63a.7.7 0 0 1 1.252 0l2.7 4.63A.7.7 0 0 1 13.7 10Z"/><rect width="7" height="7" x="3" y="14" rx="1"/><circle cx="17.5" cy="17.5" r="3.5"/>',
  'layers': '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>'
};

function renderIcons() {
  document.querySelectorAll('[data-lucide]').forEach(el => {
    if (el.tagName.toLowerCase() === 'svg') return;

    const name = el.getAttribute('data-lucide');
    const pathContent = LUCIDE_SVG_MAP[name];
    if (!pathContent) return;

    const cls = el.getAttribute('class') || '';
    const isFill = cls.includes('fill-current') || cls.includes('fill-gold') || cls.includes('fill-amber');

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('fill', isFill ? 'currentColor' : 'none');
    svg.setAttribute('stroke', 'currentColor');
    svg.setAttribute('stroke-width', '2');
    svg.setAttribute('stroke-linecap', 'round');
    svg.setAttribute('stroke-linejoin', 'round');
    svg.setAttribute('class', `lucide lucide-${name} ${cls}`);
    svg.setAttribute('data-lucide', name);
    if (el.id) svg.id = el.id;

    try {
      if (typeof DOMParser !== 'undefined') {
        const parser = new DOMParser();
        const doc = parser.parseFromString(`<svg xmlns="http://www.w3.org/2000/svg">${pathContent}</svg>`, 'image/svg+xml');
        if (doc.documentElement && doc.documentElement.childNodes) {
          Array.from(doc.documentElement.childNodes).forEach(node => {
            if (node.nodeType === 1) { // Element node
              svg.appendChild(document.importNode(node, true));
            }
          });
        }
      } else {
        svg.innerHTML = pathContent;
      }
    } catch (e) {
      svg.innerHTML = pathContent;
    }

    if (el.parentNode) {
      el.parentNode.replaceChild(svg, el);
    }
  });

  if (window.lucide && typeof lucide.createIcons === 'function') {
    try {
      lucide.createIcons();
    } catch (e) {}
  }
}

// INITIALIZE THEME, CART & REVIEWS SLIDER UI ON LOAD
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  updateCartUI();
  initReviewsSlider();
  renderIcons();
  setTimeout(renderIcons, 50);
  setTimeout(renderIcons, 300);
});

window.addEventListener('load', renderIcons);


