import { useEffect, useState } from 'react';

const apiUrl = "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD";

export default function ETHPrice() {
    const [ethPrice, setState] = useState(undefined);

    useEffect(() => {
        (async function getState() {
          const ethp = await getETHPrice();
          setState(ethp);
        })();
      }, []);
    return (<>
        {ethPrice === undefined ?
        "... now loading data."
        :
        ethPrice}
        </>);

}

async function getETHPrice() {
    const response = await fetch(apiUrl);
    const json = await response.json();
    return json["USD"];
}