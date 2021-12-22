const quotes = [
  { quote: "먹는 것을 줄여야 맞는 옷이 늘지요.", author: "이민호" },
  { quote: "인생을 걸고 다이어트를 하라.", author: "이민호" },
  { quote: "살을 빼고나면 살쪘던 것을 후회하게 된다.", author: "이민호" },
  {
    quote: "물 밖에 안 먹었다고 할 때 내가 뭘 물처럼 먹었을까 생각하자.",
    author: "이민호",
  },
  { quote: "세상의 변화된 시선과 대우를 꿈꿔라", author: "이민호" },
  { quote: "인생은 살이 쪘을 때와 안 쪘을 때로 나눠진다.", author: "이민호" },
  { quote: "음식은 맛있을수록 칼로리도 높아지는 것이다.", author: "이민호" },
  { quote: "냉철한 자기관리의 시간을 가져라.", author: "이민호" },
  { quote: "먹어봤자 내가 아는 그 맛", author: "이민호" },
  { quote: "운동은 입과 머리가 아니라 몸으로", author: "이민호" },
  { quote: "먹는데 1분 빼는데 1시간", author: "이민호" },
  { quote: "체중조절은 최고의 자기관리", author: "이민호" },
  { quote: "날씬한 것보다 달콤한 것은 없다.", author: "이민호" },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuotes.quote;
author.innerText = todaysQuotes.author;
