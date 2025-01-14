const questions = [
    {
        question: "Zengin misin?",
        options: [
            { text: "Fakirim", score: 2 },
            { text: "Orta Kesim", score: 3 },
            { text: "Para sıçıyorum", score: 4 },
            { text: "Ulu önderimiz çok yaşa", score: 1 }
        ]
    },
    {
        question: "Aşağıdakilerden hangisi daha değerlidir?",
        options: [
            { text: "Altın bilezik", score: 3 },
            { text: "50 kuruş", score: 3 },
            { text: "M3 Benelli", score: 1 },
            { text: "Aşiret paket passat", score: 4 }
        ]
    },
    {
        question: "Kemal Kılıçdaroğlu'nun en sevdiği lolicon türünün yapımcısı kimdir?",
        options: [
            { text: "Hideo Kojima", score: 1 },
            { text: "Bizim Alt komşu Ugandi bin Nigari", score: 2 },
            { text: "Linkin Park", score: 1 },
            { text: "Sadri Alışık", score: 2 }
        ]
    },
    {
        question: "Aşağıdakilerin hangisi daha zevklidir?",
        options: [
            { text: "Davullu zurnalı cingene düğünü", score: 4 },
            { text: "Akraba evliliği", score: 4 },
            { text: "PUBG Mobilede 1. olmak", score: 4 },
            { text: "Maklube", score: 1 }
        ]
    },
    {
        question: "Saddam Hüseyin'in gizlenme bölgesindeki en önemli bölge hangisidir?",
        options: [
            { text: "Tuğla ve yıkıntılar", score: 4 },
            { text: "Fan", score: 1 },
            { text: "Hava kanalı", score: 3 },
            { text: "Oyun odası", score: 2 }
        ]
    },
    {
        question: "Amerika'nın en büyük korkusu nedir?",
        options: [
            { text: "Türkiye", score: 4 },
            { text: "Yapay Zeka", score: 1 },
            { text: "Rusya", score: 2 },
            { text: "Erdoğan", score: 4 }
        ]
    },
    {
        question: '"Acaba en yakındaki fırın nerededir" diye soran birine nasıl cevap verirsiniz',
        options: [
            { text: "+9 Dolunayım var ikile beta", score: 2 },
            { text: "Valahi ezi cia tenima kuzu keri", score: 4 },
            { text: "Eşeğime dokunma", score: 4 },
            { text: "hemen ileride sağda kalıyor", score: 1 }
        ]
    },
    {
        question: "Biri ile tartışırken sorunu nasıl çözersiniz?",
        options: [
            { text: "Hakem olması için tarafsız biriyle konuşurum", score: 1 },
            { text: "Mitoz bölünme geçirip 40 kişi olurum", score: 4 },
            { text: "Baba yadigarı keleşi kullanırım", score: 3 },
            { text: "Kuzu serri tennum corno covanna kürdo kırimizon", score: 4 }
        ]
    }
]

let currentQuestionIndex = 0
let totalScore = 0

shuffle(questions);

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function loadQuestion() {
    const questionElement = document.getElementById("soru")
    const optionsContainer = document.getElementById("siklar")

    const currentQuestion = questions[currentQuestionIndex]
    questionElement.textContent = currentQuestion.question
    optionsContainer.innerHTML = ""


    shuffle(currentQuestion.options)

    currentQuestion.options.forEach(option => {
        const optionElement = document.createElement("a")
        optionElement.textContent = option.text
        optionElement.addEventListener("click", () => {
            totalScore += option.score
            currentQuestionIndex++
            if (currentQuestionIndex < questions.length) {
                loadQuestion()
            } else {
                showResult()
            }
        })
        optionsContainer.appendChild(optionElement)
    })
}

function showResult() {
    const questionContainer = document.querySelector(".soru-container")
    const optionsContainer = document.querySelector(".button-container")
    let oran;
    if(totalScore <= 8){
            questionContainer.innerHTML = `<div class="custom-title">Kürt Değilsiniz🎉🥳</div>`
            optionsContainer.innerHTML = ""
    }else{
    oran = Math.ceil((totalScore * 100) / 32)

    questionContainer.innerHTML = `<div class="custom-title">Yüzde ${oran} Kürtsünüz</div>`
    optionsContainer.innerHTML = ""
    }
}

loadQuestion()

