// Data Arrays
const activities = [
    // Gastronomia
    {
        name: 'Bela Vista Café Colonial',
        category: 'Gastronomia',
        address: 'Av. das Hortênsias, 4665 - Gramado, RS',
        description: 'Café colonial tradicional com uma grande variedade de pratos doces e salgados.',
        cost: 85.00
    },
    {
        name: 'Caracol Chocolates',
        category: 'Gastronomia',
        address: 'Av. Borges de Medeiros, 2559 - Gramado, RS',
        description: 'Chocolaterias famosas pela qualidade e variedade de chocolates artesanais.',
        cost: 20.00
    },
    {
        name: 'Chateau de La Fondue',
        category: 'Gastronomia',
        address: 'Rua Coronel João Corrêa, 432 - Gramado, RS',
        description: 'Restaurante especializado em fondues na sequência: queijo, carne e chocolate.',
        cost: 120.00
    },
    {
        name: 'Rasen Bier',
        category: 'Gastronomia',
        address: 'Rua Cândido Godói, 82 - Gramado, RS',
        description: 'Cervejaria artesanal local com uma ampla gama de cervejas de alta qualidade.',
        cost: 50.00
    },

    // Pontos Turísticos
    {
        name: 'Rua Coberta',
        category: 'Pontos Turísticos',
        address: 'Av. Borges de Medeiros, 2715 - Centro, Gramado, RS',
        description: 'Rua charmosa com lojas, cafés e restaurantes, ótima para passeios e compras.',
        cost: 0.00
    },
    {
        name: 'Palácio dos Festivais',
        category: 'Pontos Turísticos',
        address: 'Av. Borges de Medeiros, 2697 - Centro, Gramado, RS',
        description: 'Local do famoso Festival de Cinema de Gramado.',
        cost: 0.00
    },
    {
        name: 'Igreja Matriz São Pedro Apóstolo',
        category: 'Pontos Turísticos',
        address: 'Av. Borges de Medeiros, 2659 - Centro, Gramado, RS',
        description: 'Igreja de pedra com belos vitrais localizada no coração de Gramado.',
        cost: 0.00
    },
    {
        name: 'Rua Torta',
        category: 'Pontos Turísticos',
        address: 'Rua Emílio Sorgetz - Centro, Gramado, RS',
        description: 'Rua sinuosa que é um dos principais cartões-postais da cidade.',
        cost: 0.00
    },

    // Arte e Cultura
    {
        name: 'Mini Mundo',
        category: 'Arte e Cultura',
        address: 'Rua Horácio Cardoso, 291 - Gramado, RS',
        description: 'Parque de miniaturas que reproduz cenários e construções famosas do mundo.',
        cost: 60.00
    },
    {
        name: 'Museu de Cera Dreamland',
        category: 'Arte e Cultura',
        address: 'Av. das Hortênsias, 5507 - Gramado, RS',
        description: 'Estátuas de cera de celebridades e personagens famosos.',
        cost: 80.00
    },
    {
        name: 'Hollywood Dream Cars',
        category: 'Arte e Cultura',
        address: 'Av. das Hortênsias, 4151 - Gramado, RS',
        description: 'Museu de carros clássicos e antigos.',
        cost: 50.00
    },

    // Natureza
    {
        name: 'Lago Negro',
        category: 'Natureza',
        address: 'Rua A. J. Renner, Gramado, RS',
        description: 'Lago rodeado por árvores e flores, ideal para caminhadas e passeios de pedalinho.',
        cost: 30.00
    },
    {
        name: 'Le Jardin Parque de Lavandas',
        category: 'Natureza',
        address: 'RS-115, Km 38, Gramado, RS',
        description: 'Jardim com diversas espécies de lavandas e outras flores.',
        cost: 40.00
    },
    {
        name: 'Parque do Caracol',
        category: 'Natureza',
        address: 'Rodovia RS 466, Canela, RS',
        description: 'Local com trilhas e a famosa Cascata do Caracol.',
        cost: 20.00
    },

    // Parques Temáticos
    {
        name: 'Snowland',
        category: 'Parques Temáticos',
        address: 'RS-235, 9009 - Gramado, RS',
        description: 'Parque de neve indoor com diversas atividades.',
        cost: 200.00
    },
    {
        name: 'Aldeia do Papai Noel',
        category: 'Parques Temáticos',
        address: 'Rua Bela Vista, 353 - Gramado, RS',
        description: 'Parque natalino aberto o ano todo.',
        cost: 50.00
    },
    {
        name: 'Mundo a Vapor',
        category: 'Parques Temáticos',
        address: 'Av. Don Luiz Guanella, 1247 - Canela, RS',
        description: 'Parque com miniaturas de máquinas a vapor em funcionamento.',
        cost: 60.00
    },

    // Compras e Artesanato
    {
        name: 'Praça das Etnias',
        category: 'Compras e Artesanato',
        address: 'Av. Borges de Medeiros, 1848 - Centro, Gramado, RS',
        description: 'Feirinha com produtos artesanais e pães assados em forno a lenha.',
        cost: 0.00
    },
    {
        name: 'Casa do Colono',
        category: 'Compras e Artesanato',
        address: 'Av. Borges de Medeiros, 3434 - Centro, Gramado, RS',
        description: 'Venda de produtos coloniais típicos da região.',
        cost: 0.00
    }
];

// Itinerário Padrão baseado no roteiro que você forneceu
const defaultItinerary = {
    1: [
        { name: 'Lago Negro', time: '08:00' },
        { name: 'Mini Mundo', time: '09:45' },
        { name: 'Rua Coberta', time: '11:00' },
        { name: 'Chateau de La Fondue', time: '12:45' },
        { name: 'Hollywood Dream Cars', time: '14:15' },
        { name: 'Museu de Cera Dreamland', time: '15:30' },
        { name: 'Le Jardin Parque de Lavandas', time: '16:45' }
    ],
    2: [
        { name: 'Snowland', time: '08:00' },
        { name: 'Parque do Caracol', time: '09:45' },
        { name: 'Aldeia do Papai Noel', time: '11:00' },
        { name: 'Rasen Bier', time: '12:15' },
        { name: 'Casa do Colono', time: '13:45' },
        { name: 'Praça das Etnias', time: '14:30' },
        { name: 'Rua Torta', time: '15:15' }
    ]
};

// Variáveis
let itinerary = {
    1: [],
    2: []
};
let totalCost = 0.00;

// Elementos do DOM
const activityList = document.getElementById('activityList');
const itineraryDay1 = document.getElementById('itineraryDay1');
const itineraryDay2 = document.getElementById('itineraryDay2');
const totalCostDisplay = document.getElementById('totalCost');
const resetButton = document.getElementById('resetButton'); // Adicione este botão no seu HTML

// Elementos do Modal
let selectedActivityIndex = null;
const timeModal = document.getElementById('timeModal');
const modalForm = document.getElementById('modalForm');
const modalDaySelect = document.getElementById('modalDaySelect');
const modalTimeInput = document.getElementById('modalTimeInput');
const confirmBtn = document.getElementById('confirmBtn');
const closeModalBtn = document.querySelector('.close');

// Eventos para o Modal
closeModalBtn.addEventListener('click', closeModal);
confirmBtn.addEventListener('click', confirmModal);
window.addEventListener('click', (event) => {
    if (event.target == timeModal) {
        closeModal();
    }
});

// Evento para o Botão de Reset
resetButton.addEventListener('click', () => {
    resetToDefaultItinerary();
});

// Funções
function displayActivities() {
    activityList.innerHTML = '';
    activities.forEach((activity, index) => {
        const activityItem = document.createElement('div');
        activityItem.classList.add('activity-item');
        activityItem.setAttribute('data-index', index);

        activityItem.innerHTML = `
            <h4>${activity.name}</h4>
            <p>${activity.description}</p>
            <span class="cost">Custo: R$${activity.cost.toFixed(2)}</span>
        `;

        // Verificar se a atividade está selecionada
        if (isActivityInItinerary(activity.name)) {
            activityItem.classList.add('selected');
        }

        // Evento para abrir o modal
        activityItem.addEventListener('click', () => {
            openModal(index);
        });

        activityList.appendChild(activityItem);
    });
}

function isActivityInItinerary(activityName) {
    return Object.values(itinerary).some(dayActivities =>
        dayActivities.some(activity => activity.name === activityName)
    );
}

function openModal(activityIndex) {
    selectedActivityIndex = activityIndex;
    timeModal.style.display = 'block';
}

function closeModal() {
    timeModal.style.display = 'none';
    selectedActivityIndex = null;
}

function confirmModal() {
    const selectedDay = parseInt(modalDaySelect.value);
    const selectedTime = modalTimeInput.value;
    if (selectedActivityIndex !== null) {
        addActivityToItinerary(selectedActivityIndex, selectedDay, selectedTime);

        closeModal();
    }
}

function addActivityToItinerary(activityIndex, day, time) {
    const activity = activities[activityIndex];

    // Verificar se a atividade já está no itinerário daquele dia
    if (!itinerary[day].some(item => item.name === activity.name)) {
        itinerary[day].push({
            ...activity,
            time: time
        });

        totalCost += activity.cost;
        updateItineraryDisplay();
        updateTotalCost();
        saveItineraryToLocalStorage();
    }
    updateActivitySelectionVisual(activity.name);
}

function removeActivityFromItinerary(day, activityIndex) {
    const activity = itinerary[day][activityIndex];
    if (activity) {
        totalCost -= activity.cost;
        itinerary[day].splice(activityIndex, 1);

        updateItineraryDisplay();
        updateTotalCost();
        saveItineraryToLocalStorage();

        updateActivitySelectionVisual(activity.name);
    }
}

function updateActivitySelectionVisual(activityName) {
    const activityIndex = activities.findIndex(activity => activity.name === activityName);
    const activityItem = document.querySelector(`.activity-item[data-index='${activityIndex}']`);

    if (activityItem) {
        if (isActivityInItinerary(activityName)) {
            activityItem.classList.add('selected');
        } else {
            activityItem.classList.remove('selected');
        }
    }
}

function updateItineraryDisplay() {
    // Limpar conteúdo anterior
    itineraryDay1.innerHTML = '<h3>Dia 1</h3>';
    itineraryDay2.innerHTML = '<h3>Dia 2</h3>';

    // Ordenar atividades por horário para cada dia
    for (let day = 1; day <= 2; day++) {
        itinerary[day].sort((a, b) => a.time.localeCompare(b.time));
    }

    // Exibir atividades para o Dia 1
    itinerary[1].forEach((activity, index) => {
        const activityDisplay = document.createElement('div');
        activityDisplay.classList.add('activity-display');

        activityDisplay.innerHTML = `
            <h4>${activity.name}</h4>
            <p>${activity.description}</p>
            <p class="time">Horário: <strong>${activity.time}</strong></p>
            <p class="cost">Custo: <strong>R$ ${activity.cost.toFixed(2)}</strong></p>
            <button class="remove-btn" data-day="1" data-index="${index}">Remover</button>
        `;

        itineraryDay1.appendChild(activityDisplay);
    });

    // Exibir atividades para o Dia 2
    itinerary[2].forEach((activity, index) => {
        const activityDisplay = document.createElement('div');
        activityDisplay.classList.add('activity-display');

        activityDisplay.innerHTML = `
            <h4>${activity.name}</h4>
            <p>${activity.description}</p>
            <p class="time">Horário: <strong>${activity.time}</strong></p>
            <p class="cost">Custo: <strong>R$ ${activity.cost.toFixed(2)}</strong></p>
            <button class="remove-btn" data-day="2" data-index="${index}">Remover</button>
        `;

        itineraryDay2.appendChild(activityDisplay);
    });

    // Adicionar eventos aos botões de remover
    const removeButtons = document.querySelectorAll('.remove-btn');
    removeButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const day = parseInt(button.getAttribute('data-day'));
            const index = parseInt(button.getAttribute('data-index'));
            removeActivityFromItinerary(day, index);
        });
    });
}

function updateTotalCost() {
    totalCost = 0.00;
    for (let day = 1; day <= 2; day++) {
        itinerary[day].forEach(activity => {
            totalCost += activity.cost;
        });
    }
    totalCostDisplay.innerHTML = `Custo Total Estimado por Pessoa: <strong>R$ ${totalCost.toFixed(2)}</strong>`;
}

// Funções para LocalStorage
function saveItineraryToLocalStorage() {
    localStorage.setItem('itinerary', JSON.stringify(itinerary));
}

function loadItineraryFromLocalStorage() {
    const storedItinerary = localStorage.getItem('itinerary');
    if (storedItinerary) {
        itinerary = JSON.parse(storedItinerary);
    } else {
        // Se não houver itinerário salvo, carregar o padrão
        resetToDefaultItinerary();
    }
    updateItineraryDisplay();
    updateTotalCost();
}

// Resetar para o Itinerário Padrão
function resetToDefaultItinerary() {
    // Limpar itinerário atual
    itinerary = {
        1: [],
        2: []
    };

    // Carregar atividades padrão
    for (let day in defaultItinerary) {
        defaultItinerary[day].forEach(defaultActivity => {
            const activityIndex = activities.findIndex(activity => activity.name === defaultActivity.name);
            if (activityIndex !== -1) {
                const activity = activities[activityIndex];
                itinerary[day].push({
                    ...activity,
                    time: defaultActivity.time
                });
            }
        });
    }

    // Salvar no LocalStorage
    saveItineraryToLocalStorage();

    // Atualizar UI
    updateItineraryDisplay();
    updateTotalCost();
    displayActivities(); // Atualizar visuais de seleção da lista de atividades
}

// Inicializar
window.addEventListener('load', () => {
    loadItineraryFromLocalStorage();
    displayActivities();
});