/**
 * Comparison Engine for FreidorasDobleCesta.es
 * Side-by-Side Matrix, Diff Highlighter, Feature Filtering & Dual Radar Chart
 * Cache-buster: 20260820
 */

const PRODUCTS_DATA = [
  {
    asin: "B08GC1QZ5W",
    slug: "ninja-foodi-dualzone-af300eu",
    name: "Ninja Foodi DualZone 7.6L [AF300EU]",
    brand: "Ninja",
    price: "99,99 €",
    rating: 4.6,
    reviews: 28450,
    capacity: "7.6 Litros (2x 3.8L)",
    capacity_num: 7.6,
    power: "2400 W",
    temp_range: "40°C - 240°C (Max Crisp)",
    sync_tech: "DualZone (SYNC + MATCH)",
    dimensions: "31.5 x 38 x 26.5 cm",
    weight: "8.2 kg",
    material: "Cerámica Antiadherente PTFE/BPA Free",
    dishwasher: "Sí (cestas y rejillas)",
    visor: "No",
    special: "Max Crisp 240°C ultrarrápido",
    img: "assets/img/ninja-foodi-dualzone-af300eu.jpg",
    affiliate_url: "https://www.amazon.es/dp/B08GC1QZ5W?tag=tunicho-21",
    radar: {
      potencia: 9.4,
      capacidad: 8.8,
      limpieza: 9.2,
      funciones: 9.6,
      calidad_precio: 9.5
    }
  },
  {
    asin: "B08TRF2978",
    slug: "ninja-foodi-max-dualzone-af400eu",
    name: "Ninja Foodi MAX DualZone 9.5L [AF400EU]",
    brand: "Ninja",
    price: "179,99 €",
    rating: 4.7,
    reviews: 34200,
    capacity: "9.5 Litros (2x 4.75L)",
    capacity_num: 9.5,
    power: "2470 W",
    temp_range: "40°C - 240°C (Max Crisp)",
    sync_tech: "DualZone (SYNC + MATCH)",
    dimensions: "32.5 x 41.5 x 27 cm",
    weight: "8.8 kg",
    material: "Cerámica Antiadherente Profesional",
    dishwasher: "Sí (apto completo)",
    visor: "No",
    special: "Capacidad para pollo asado 2kg en 1 cesta",
    img: "assets/img/ninja-foodi-dualzone-af300eu.jpg",
    affiliate_url: "https://www.amazon.es/dp/B08TRF2978?tag=tunicho-21",
    radar: {
      potencia: 9.7,
      capacidad: 9.8,
      limpieza: 9.0,
      funciones: 9.7,
      calidad_precio: 8.9
    }
  },
  {
    asin: "B0D1YF8W2N",
    slug: "ninja-double-stack-xl-sl400eu",
    name: "Ninja Double Stack XL Vertical 9.5L [SL400EU]",
    brand: "Ninja",
    price: "229,99 €",
    rating: 4.6,
    reviews: 1850,
    capacity: "9.5 Litros (2x 4.75L Apilados)",
    capacity_num: 9.5,
    power: "2470 W",
    temp_range: "40°C - 240°C",
    sync_tech: "DoubleStack SYNC + MATCH (4 alturas)",
    dimensions: "38.5 x 28 x 47 cm (Estrecha)",
    weight: "10.3 kg",
    material: "Cerámica Antiadherente",
    dishwasher: "Sí (cajones y rejillas)",
    visor: "No",
    special: "30% menos anchura + 4 niveles simultáneos",
    img: "assets/img/ninja-foodi-dualzone-af300eu.jpg",
    affiliate_url: "https://www.amazon.es/dp/B0D1YF8W2N?tag=tunicho-21",
    radar: {
      potencia: 9.6,
      capacidad: 9.5,
      limpieza: 8.7,
      funciones: 9.8,
      calidad_precio: 8.4
    }
  },
  {
    asin: "B0CHB7TNWH",
    slug: "cosori-dual-basket-caf-r901",
    name: "COSORI Dual Basket 8.5L [CAF-R901]",
    brand: "COSORI",
    price: "129,99 €",
    rating: 4.6,
    reviews: 4920,
    capacity: "8.5 Litros (2x 4.25L)",
    capacity_num: 8.5,
    power: "2800 W",
    temp_range: "35°C - 205°C",
    sync_tech: "SyncCook + SyncFinish",
    dimensions: "39.1 x 44 x 30.3 cm",
    weight: "9.0 kg",
    material: "Antiadherente libre de BPA/PFOA",
    dishwasher: "Sí",
    visor: "Sí (Ventanas ClearCook con luz)",
    special: "Supervisión visual sin abrir cestas",
    img: "assets/img/ninja-foodi-dualzone-af300eu.jpg",
    affiliate_url: "https://www.amazon.es/dp/B0CHB7TNWH?tag=tunicho-21",
    radar: {
      potencia: 9.5,
      capacidad: 9.0,
      limpieza: 9.1,
      funciones: 9.3,
      calidad_precio: 9.4
    }
  },
  {
    asin: "B0CG6CK5FZ",
    slug: "moulinex-dual-easy-fry-grill-ez901820",
    name: "Moulinex Dual Easy Fry & Grill 8.3L",
    brand: "Moulinex",
    price: "119,99 €",
    rating: 4.5,
    reviews: 2150,
    capacity: "8.3 Litros (Asimétrica 5.2L + 3.1L)",
    capacity_num: 8.3,
    power: "2700 W",
    temp_range: "40°C - 220°C",
    sync_tech: "Sincronización Dual Inteligente",
    dimensions: "41.8 x 40.5 x 30.5 cm",
    weight: "7.8 kg",
    material: "Aluminio fundido antiadherente",
    dishwasher: "Sí",
    visor: "No",
    special: "Parrilla Grill Die-Cast para carnes",
    img: "assets/img/ninja-foodi-dualzone-af300eu.jpg",
    affiliate_url: "https://www.amazon.es/dp/B0CG6CK5FZ?tag=tunicho-21",
    radar: {
      potencia: 9.1,
      capacidad: 8.6,
      limpieza: 9.3,
      funciones: 9.2,
      calidad_precio: 9.0
    }
  },
  {
    asin: "B0BQ1XYKHC",
    slug: "cecotec-cecofry-dual-9000",
    name: "Cecotec Cecofry Dual 9000 9L",
    brand: "Cecotec",
    price: "79,90 €",
    rating: 4.3,
    reviews: 3680,
    capacity: "9 Litros (Convertible 9L o 2x 4.5L)",
    capacity_num: 9.0,
    power: "2850 W",
    temp_range: "80°C - 200°C",
    sync_tech: "Control de Doble Temperatura",
    dimensions: "37 x 40 x 32 cm",
    weight: "7.1 kg",
    material: "Antiadherente con tecnología PerfectCook",
    dishwasher: "Sí",
    visor: "No",
    special: "Pared divisoria extraíble convertible",
    img: "assets/img/ninja-foodi-dualzone-af300eu.jpg",
    affiliate_url: "https://www.amazon.es/dp/B0BQ1XYKHC?tag=tunicho-21",
    radar: {
      potencia: 8.8,
      capacidad: 9.4,
      limpieza: 8.5,
      funciones: 9.0,
      calidad_precio: 9.6
    }
  }
];

let selectedAsins = ["B08GC1QZ5W", "B0CHB7TNWH", "B08TRF2978"];
let showOnlyDiffs = false;

document.addEventListener('DOMContentLoaded', () => {
  initComparator();
});

function initComparator() {
  renderPickerChips();
  renderComparisonTable();
  drawDualRadar();

  const diffCheckbox = document.getElementById('diffToggle');
  if (diffCheckbox) {
    diffCheckbox.addEventListener('change', (e) => {
      showOnlyDiffs = e.target.checked;
      renderComparisonTable();
    });
  }

  const capacityFilter = document.getElementById('capacityFilter');
  if (capacityFilter) {
    capacityFilter.addEventListener('change', () => {
      filterByCapacity(capacityFilter.value);
    });
  }
}

function renderPickerChips() {
  const container = document.getElementById('productChips');
  if (!container) return;

  container.innerHTML = PRODUCTS_DATA.map(p => {
    const isSelected = selectedAsins.includes(p.asin);
    return `
      <div class="picker-chip ${isSelected ? 'selected' : ''}" data-asin="${p.asin}">
        <input type="checkbox" ${isSelected ? 'checked' : ''} style="display:none;">
        <span>${isSelected ? '✓ ' : '+ '}${p.name}</span>
      </div>
    `;
  }).join('');

  container.querySelectorAll('.picker-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const asin = chip.getAttribute('data-asin');
      if (selectedAsins.includes(asin)) {
        if (selectedAsins.length > 1) {
          selectedAsins = selectedAsins.filter(a => a !== asin);
        } else {
          alert('Debes mantener al menos 1 modelo seleccionado para comparar.');
          return;
        }
      } else {
        if (selectedAsins.length >= 4) {
          alert('Puedes comparar hasta un máximo de 4 modelos simultáneamente.');
          return;
        }
        selectedAsins.push(asin);
      }
      renderPickerChips();
      renderComparisonTable();
      drawDualRadar();
    });
  });
}

function filterByCapacity(val) {
  if (val === 'all') {
    selectedAsins = PRODUCTS_DATA.map(p => p.asin).slice(0, 3);
  } else if (val === 'large') {
    selectedAsins = PRODUCTS_DATA.filter(p => p.capacity_num >= 9.0).map(p => p.asin);
  } else if (val === 'mid') {
    selectedAsins = PRODUCTS_DATA.filter(p => p.capacity_num < 9.0).map(p => p.asin);
  }
  renderPickerChips();
  renderComparisonTable();
  drawDualRadar();
}

function renderComparisonTable() {
  const container = document.getElementById('comparisonMatrix');
  if (!container) return;

  const currentProducts = PRODUCTS_DATA.filter(p => selectedAsins.includes(p.asin));
  if (currentProducts.length === 0) return;

  const rows = [
    { key: "capacity", label: "Capacidad y Reparto" },
    { key: "power", label: "Potencia Eléctrica" },
    { key: "temp_range", label: "Rango de Temperatura" },
    { key: "sync_tech", label: "Tecnología Sincronización" },
    { key: "visor", label: "Ventanas Visor Transparentes" },
    { key: "material", label: "Material y Revestimiento" },
    { key: "dimensions", label: "Dimensiones (Frontal x Fondo x Alto)" },
    { key: "weight", label: "Peso Neto" },
    { key: "dishwasher", label: "Apto para Lavavajillas" },
    { key: "special", label: "Ventaja Diferencial Clave" }
  ];

  let html = `
    <table class="comp-table">
      <thead>
        <tr>
          <th style="width: 220px;">Característica</th>
          ${currentProducts.map(p => `
            <th style="min-width: 240px;">
              <div style="text-align: center;">
                <img src="${p.img}" alt="${p.name}" style="width: 80px; height: 80px; object-fit: contain; margin: 0 auto 8px; background:#fff; border-radius: 6px; padding: 4px; border: 1px solid #e2e8f0;">
                <div style="font-weight: 700; font-size: 0.95rem; color: #0f172a; margin-bottom: 4px;">${p.name}</div>
                <div style="color: #ea580c; font-weight: 800; font-size: 1.1rem; margin-bottom: 8px;">${p.price}</div>
                <a href="${p.affiliate_url}" target="_blank" rel="nofollow sponsored noopener noreferrer" class="btn btn-sm btn-amazon" style="width: 100%; margin-bottom: 4px;">
                  Ver Oferta Amazon
                </a>
                <a href="fichas/${p.slug}.html" style="font-size: 0.78rem; font-weight: 600; color: #64748b; display: block; margin-top: 4px;">
                  Ver Análisis Completo →
                </a>
              </div>
            </th>
          `).join('')}
        </tr>
      </thead>
      <tbody>
  `;

  rows.forEach(r => {
    const values = currentProducts.map(p => p[r.key]);
    const hasDiff = new Set(values).size > 1;

    if (showOnlyDiffs && !hasDiff) {
      return;
    }

    html += `
      <tr class="${hasDiff ? 'has-difference' : ''}">
        <td style="font-weight: 700; background: #f8fafc; color: #334155;">${r.label}</td>
        ${currentProducts.map(p => `
          <td style="${hasDiff ? 'background: #fffdfa;' : ''}">${p[r.key]}</td>
        `).join('')}
      </tr>
    `;
  });

  html += `
      </tbody>
    </table>
  `;

  container.innerHTML = html;
}

function drawDualRadar() {
  const canvas = document.getElementById('dualRadarCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;
  const cx = w / 2;
  const cy = h / 2;
  const radius = Math.min(w, h) * 0.36;

  ctx.clearRect(0, 0, w, h);

  const categories = [
    { key: "potencia", label: "Potencia" },
    { key: "capacidad", label: "Capacidad" },
    { key: "limpieza", label: "Limpieza" },
    { key: "funciones", label: "Funciones" },
    { key: "calidad_precio", label: "Calidad/Precio" }
  ];
  const numAxes = categories.length;

  for (let level = 0.2; level <= 1.0; level += 0.2) {
    ctx.beginPath();
    for (let i = 0; i < numAxes; i++) {
      const angle = (Math.PI * 2 / numAxes) * i - (Math.PI / 2);
      const px = cx + Math.cos(angle) * (radius * level);
      const py = cy + Math.sin(angle) * (radius * level);
      if (i === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.strokeStyle = '#e2e8f0';
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  ctx.font = 'bold 11px system-ui, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = '#475569';

  for (let i = 0; i < numAxes; i++) {
    const angle = (Math.PI * 2 / numAxes) * i - (Math.PI / 2);
    const ax = cx + Math.cos(angle) * radius;
    const ay = cy + Math.sin(angle) * radius;

    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(ax, ay);
    ctx.strokeStyle = '#cbd5e1';
    ctx.setLineDash([2, 2]);
    ctx.stroke();
    ctx.setLineDash([]);

    const lx = cx + Math.cos(angle) * (radius + 24);
    const ly = cy + Math.sin(angle) * (radius + 24);
    ctx.fillText(categories[i].label, lx, ly);
  }

  const colors = [
    { fill: 'rgba(234, 88, 12, 0.3)', stroke: '#ea580c' },
    { fill: 'rgba(79, 70, 229, 0.25)', stroke: '#4f46e5' }
  ];

  const currentProducts = PRODUCTS_DATA.filter(p => selectedAsins.includes(p.asin)).slice(0, 2);

  currentProducts.forEach((prod, pIdx) => {
    ctx.beginPath();
    categories.forEach((cat, cIdx) => {
      const score = prod.radar[cat.key] || 8;
      const angle = (Math.PI * 2 / numAxes) * cIdx - (Math.PI / 2);
      const dist = (score / 10) * radius;
      const px = cx + Math.cos(angle) * dist;
      const py = cy + Math.sin(angle) * dist;

      if (cIdx === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    });
    ctx.closePath();
    ctx.fillStyle = colors[pIdx].fill;
    ctx.fill();
    ctx.strokeStyle = colors[pIdx].stroke;
    ctx.lineWidth = 2.5;
    ctx.stroke();
  });

  const legendDiv = document.getElementById('radarLegend');
  if (legendDiv) {
    legendDiv.innerHTML = currentProducts.map((p, idx) => `
      <div style="display: flex; align-items: center; gap: 8px; font-size: 0.85rem; font-weight: 700; color: ${colors[idx].stroke};">
        <span style="display: inline-block; width: 14px; height: 14px; background: ${colors[idx].fill}; border: 2px solid ${colors[idx].stroke}; border-radius: 3px;"></span>
        <span>${p.name}</span>
      </div>
    `).join('');
  }
}
