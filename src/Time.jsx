import { useState, useEffect } from "react";

function CurrentTime() {
  //new Date함수이용해 현재시간을 기본값으로 지정해줌
  const [time, setTime] = useState(new Date());
  //useEffect를 이용해 처음에 마운트될때, 언마운트될때를 설정해줌.
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // 언마운트시 cleanUp해줘서 타이머 누적을 막아줌.
    return () => clearInterval(timer);
  }, []);
  return <div>{time.toLocaleDateString()}</div>;
}

export default CurrentTime;
