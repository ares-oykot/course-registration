
# Questions
- Add at least 3 Project features
- Discuss how you managed the state in your assignment project.

### Three features of my project

- I used the Tailwind CSS framework instead of vanilla CSS for my web pages, which allowed me to do all my design-related tasks without any problems. As a result I have been able to give many attractive designs to my web page.

- I used ReactJS instead of pure JavaScript to design my website, so I had to write much less code and my project turned out much more perfect.

- I have made my website responsive for all types of devices, so my website will look good on all devices.




### How I managed the state in my assignment project.

- I used five useState in my assignment project code. After first fetching the data from the API, I put that data inside a state called cards. And I kept an empty array as the initial value of that State.
- Then I took another state called selectedCard, there will be selected data. And I took an empty array as the initial value of that state.
- Then take another state called remaining, there will be the remaining time credits. And I took 20 as the initial value of that state.
- Then I took another state called totalCredit, there will be the amount of credit accumulated. And I took 0 as the initial value of that state.
- And lastly I took another state called totalPrice, the amount of money that I have to pay will be calculated there. And I took 0 as the initial value of that state.

This is how I managed state in my code.
## Usage/Examples

```javascript
import { useEffect } from "react";
import { useState } from "react";

const Cards = () => {
  const [cards, setCards] = useState([]);
  const [selectCard, setSelectCard] = useState([]);
  const [remaining, setRemaining] = useState(20);
  const [totalCredit, setTotalCredit] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    fetch("api.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
}
```
## 🔗 My project live link
You can also check my website by following the link below.

https://capable-spy.surge.sh/