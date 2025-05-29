import { useState, useEffect } from "react";

const quotes = [
  "나락도 락이다.",
  "매년 늘어나는 것은 나이뿐만이 아니다, 뱃살도 다.",
  "징징거리지마라, 나도 힘들다",
  "시작은 시작일 뿐이다.",
  "인생의 지름길 따윈 없다.",
  "하늘은 스스로 책임지는 자를 책임진다.",
];

function RandomQuote() {
  const [quote, SetQuote] = useState("");

  useEffect(() => {
    const randomNum = Math.floor(Math.random() * quotes.length);
    //SetQuote로 quotes
    SetQuote(quotes[randomNum]);
  }, []);
  return <div>{quote}</div>;
}

export default RandomQuote;
