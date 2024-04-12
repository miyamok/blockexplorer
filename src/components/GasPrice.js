import { useEffect, useState } from 'react';
import { alchemy } from '../Alchemy';
import { ethers } from "ethers";

export default function GasPrice() {
    const [gasPrice, setState] = useState(undefined);

    useEffect(() => {
        (async function getState() {
          const gp = await alchemy.core.getGasPrice();
          setState(gp);
        })();
      }, []);
    return (<>
        {gasPrice === undefined ?
        "... now loading information."
        :
        ethers.formatUnits(parseInt(gasPrice._hex).toString(), "gwei") + " gwei"}
        </>);

}
