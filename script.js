// Waste Items Database
const wasteData = [
    {
        id: 1,
        name: "투명 페트병",
        category: "plastic",
        catName: "플라스틱",
        keywords: ["페트병", "생수병", "음료수병", "투명페트"],
        steps: [
            "내용물을 깨끗이 비우고 물로 헹굽니다.",
            "부착된 비닐 라벨을 완전히 제거합니다.",
            "용기를 찌그러뜨린 후 뚜껑을 닫아서 투명 페트병 전용 수거함에 배출합니다."
        ],
        tip: "유색 페트병(사이다, 맥주병 등)은 일반 플라스틱으로 구분하여 따로 배출해야 합니다."
    },
    {
        id: 2,
        name: "택배 종이상자",
        category: "paper",
        catName: "종이류",
        keywords: ["택배박스", "박스", "종이박스", "상자"],
        steps: [
            "상자에 붙어있는 비닐 테이프와 운송장 스티커를 깨끗이 제거합니다.",
            "상자를 접어서 납작하게 만듭니다.",
            "종이류 수거함에 모아서 배출합니다."
        ],
        tip: "테이프나 철심 등 이물질이 섞이지 않도록 완벽히 제거해야 재활용이 가능합니다."
    },
    {
        id: 3,
        name: "우유팩 / 두유팩",
        category: "paper",
        catName: "종이팩",
        keywords: ["우유팩", "종이팩", "두유팩", "주스팩"],
        steps: [
            "내용물을 비우고 물로 깨끗이 헹굽니다.",
            "가위로 펼쳐서 완전히 건조시킵니다.",
            "일반 종이류와 섞이지 않도록 '종이팩 전용 수거함'에 배출합니다."
        ],
        tip: "주민센터에서 휴지나 종량제 봉투로 교환해주는 경우가 많으니 지자체 혜택을 확인해보세요."
    },
    {
        id: 4,
        name: "계란 껍질",
        category: "general",
        catName: "일반종량제",
        keywords: ["달걀껍질", "계란껍질", "계란", "달걀"],
        steps: [
            "물기를 잘 말려 일반 종량제 봉투에 버립니다."
        ],
        tip: "계란 껍질, 조개 껍데기, 동물 뼈 등은 동물이 사료로 먹을 수 없으므로 음식물이 아닌 일반쓰레기입니다."
    },
    {
        id: 5,
        name: "유리 음료수병",
        category: "glass",
        catName: "유리병",
        keywords: ["유리병", "콜라병", "박카스병", "맥주병", "소주병"],
        steps: [
            "내용물을 비우고 물로 헹굽니다.",
            "담배꽁초 등 이물질을 넣지 않습니다.",
            "플라스틱이나 금속 뚜껑을 분리한 뒤 유리병 수거함에 버립니다."
        ],
        tip: "소주병, 맥주병 등 빈용기보증금 대상 병은 마트에 반납하면 보증금을 환급받을 수 있습니다."
    },
    {
        id: 6,
        name: "음료수 캔 / 통조림 캔",
        category: "can",
        catName: "캔/고철",
        keywords: ["캔", "맥주캔", "통조림", "부탄가스", "골뱅이캔"],
        steps: [
            "내용물을 비우고 헹군 후 가급적 발로 찌그러뜨립니다.",
            "플라스틱 뚜껑 등이 있다면 따로 분리합니다.",
            "캔/고철류 수거함에 배출합니다."
        ],
        tip: "부탄가스나 스프레이 캔은 구멍을 뚫어 내부 가스를 완전히 뺀 후 배출해야 폭발 위험이 없습니다."
    },
    {
        id: 7,
        name: "비닐봉지 및 과자봉지",
        category: "vinyl",
        catName: "비닐류",
        keywords: ["비닐", "과자봉지", "라면봉지", "에어캡", "뽁뽁이"],
        steps: [
            "내용물을 비우고 이물질이 없도록 합니다.",
            "흩날리지 않도록 모아서 비닐류 수거함에 배출합니다."
        ],
        tip: "이물질(음식물, 양념 등)이 묻은 비닐은 씻어서 배출하거나, 씻기지 않는 경우 일반 종량제 봉투에 버려야 합니다."
    },
    {
        id: 8,
        name: "스티로폼 상자",
        category: "styrofoam",
        catName: "스티로폼",
        keywords: ["스티로폼", "신선식품상자", "스티로폴"],
        steps: [
            "상자에 붙은 테이프, 운송장, 택배 스티커를 완전히 제거합니다.",
            "내용물을 비우고 깨끗이 씻은 후 스티로폼 수거함에 배출합니다."
        ],
        tip: "컵라면 용기나 색상이 있는 스티로폼, 이물질이 많이 묻은 경우 일반 종량제 봉투로 배출합니다."
    },
    {
        id: 9,
        name: "폐형광등",
        category: "special",
        catName: "대형/특수",
        keywords: ["형광등", "전구", "폐형광등"],
        steps: [
            "깨지지 않도록 주의하여 전용 수거함에 배출합니다.",
            "아파트 단지 내 전용 수거함이나 주민센터 수거함을 이용합니다."
        ],
        tip: "깨진 형광등은 수은 중독 위험이 있으므로 신문지 등으로 잘 싸서 일반 종량제 봉투에 버려야 합니다."
    },
    {
        id: 10,
        name: "폐건전지",
        category: "special",
        catName: "대형/특수",
        keywords: ["건전지", "보조배터리", "배터리"],
        steps: [
            "폐건전지 전용 수거함에 배출합니다.",
            "주민센터, 아파트 관리사무소, 지하철역 수거함 등을 활용합니다."
        ],
        tip: "보조배터리나 니켈-수소, 리튬이온 배터리도 전용 수거함에 배출해주세요."
    },
    {
        id: 11,
        name: "음식물 쓰레기 (채소 뿌리, 과일 씨앗 제외)",
        category: "food",
        catName: "음식물",
        keywords: ["음식물", "남은음식", "반찬", "과일껍질"],
        steps: [
            "물기를 최대한 짜서 제거합니다.",
            "음식물 쓰레기 전용 봉투나 RFID 수거함에 배출합니다."
        ],
        tip: "복숭아/감 씨앗, 파/마늘 뿌리, 닭뼈, 패류 껍데기는 음식물이 아니므로 일반쓰레기로 버리세요."
    },
    {
        id: 12,
        name: "깨진 유리 / 도자기",
        category: "general",
        catName: "일반종량제",
        keywords: ["깨진유리", "사기그릇", "도자기", "화분", "거울"],
        steps: [
            "수거 기사님이 다치지 않도록 신문지나 두꺼운 종이로 잘 싸서 버립니다.",
            "양이 적으면 일반 종량제 봉투, 양이 많으면 불연성 쓰레기 자루(마대)를 구입해 배출합니다."
        ],
        tip: "깨진 유리는 재활용이 불가능하므로 유리병 수거함에 넣으면 안 됩니다."
    }
];

// DOM Elements
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const autocompleteList = document.getElementById('autocompleteList');
const itemGrid = document.getElementById('itemGrid');
const resultTitle = document.getElementById('resultTitle');
const resultCount = document.getElementById('resultCount');
const noResult = document.getElementById('noResult');
const categoryBtns = document.querySelectorAll('.cat-btn');

// Modal Elements
const detailModal = document.getElementById('detailModal');
const modalCategory = document.getElementById('modalCategory');
const modalTitle = document.getElementById('modalTitle');
const modalSteps = document.getElementById('modalSteps');
const modalTip = document.getElementById('modalTip');
const modalClose = document.querySelector('.modal-close');
const modalOverlay = document.querySelector('.modal-overlay');

let currentCategory = 'all';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderItems(wasteData);

    // Event Listeners
    searchBtn.addEventListener('click', handleSearch);
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            handleSearch();
            autocompleteList.innerHTML = '';
        } else {
            showAutocomplete();
        }
    });

    // Close Autocomplete on outside click
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-section')) {
            autocompleteList.innerHTML = '';
        }
    });

    // Category Click Event
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            currentCategory = btn.dataset.cat;
            searchInput.value = '';
            filterAndRender();
        });
    });

    // Modal Close Events
    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);
});

// Render Items
function renderItems(items) {
    itemGrid.innerHTML = '';
    
    if (items.length === 0) {
        noResult.classList.remove('hidden');
        resultCount.textContent = '0개 항목';
        return;
    }

    noResult.classList.add('hidden');
    resultCount.textContent = `${items.length}개 항목`;

    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-header">
                <span class="card-title">${item.name}</span>
                <span class="badge badge-${item.category}">${item.catName}</span>
            </div>
            <div class="card-body">
                <p>${item.steps[0]}</p>
            </div>
            <div class="card-footer">
                자세히 보기 <i class="fa-solid fa-chevron-right"></i>
            </div>
        `;
        card.addEventListener('click', () => openModal(item));
        itemGrid.appendChild(card);
    });
}

// Search Logic
function handleSearch() {
    const query = searchInput.value.trim().toLowerCase();
    autocompleteList.innerHTML = '';

    if (!query) {
        filterAndRender();
        return;
    }

    const filtered = wasteData.filter(item => {
        const matchName = item.name.toLowerCase().includes(query);
        const matchKeyword = item.keywords.some(k => k.toLowerCase().includes(query));
        const matchCategory = item.catName.includes(query);
        return matchName || matchKeyword || matchCategory;
    });

    resultTitle.textContent = `'${query}' 검색 결과`;
    renderItems(filtered);
}

// Autocomplete Logic
function showAutocomplete() {
    const query = searchInput.value.trim().toLowerCase();
    autocompleteList.innerHTML = '';

    if (!query) return;

    const matches = wasteData.filter(item => {
        return item.name.toLowerCase().includes(query) ||
               item.keywords.some(k => k.toLowerCase().includes(query));
    }).slice(0, 5);

    matches.forEach(item => {
        const div = document.createElement('div');
        div.className = 'autocomplete-item';
        div.innerHTML = `
            <span>${item.name}</span>
            <span class="cat-tag">${item.catName}</span>
        `;
        div.addEventListener('click', () => {
            searchInput.value = item.name;
            autocompleteList.innerHTML = '';
            openModal(item);
        });
        autocompleteList.appendChild(div);
    });
}

// Filter Logic based on Category
function filterAndRender() {
    let filtered = wasteData;

    if (currentCategory !== 'all') {
        filtered = wasteData.filter(item => item.category === currentCategory);
        const catName = document.querySelector(`.cat-btn[data-cat="${currentCategory}"]`).innerText.trim();
        resultTitle.textContent = `${catName} 분리배출 항목`;
    } else {
        resultTitle.textContent = '전체 배출 항목';
    }

    renderItems(filtered);
}

// Modal Functions
function openModal(item) {
    modalCategory.textContent = item.catName;
    modalCategory.className = `badge badge-${item.category}`;
    modalTitle.textContent = item.name;
    
    modalSteps.innerHTML = '';
    item.steps.forEach(step => {
        const li = document.createElement('li');
        li.textContent = step;
        modalSteps.appendChild(li);
    });

    modalTip.textContent = item.tip;
    detailModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    detailModal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}
