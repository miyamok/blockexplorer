import { useEffect, useState } from 'react';
import { alchemy } from '../Alchemy';
import { ethers } from "ethers";
import { NavLink } from 'react-router-dom';

function TransactionInfo(tx) {
    return (
        <>
        <span><b>from:</b>&nbsp;<NavLink to={"/address/"+tx.from}>{tx.from}</NavLink></span><br />
        <span><b>to:</b>&nbsp;<NavLink to={"/address/"+tx.to}>{tx.to}</NavLink></span><br />
        <span><b>value:</b>&nbsp;{ethers.formatEther(parseInt(tx.value._hex).toString())}&nbsp;ETH</span><br />
        <span><b>gas price:</b>&nbsp;{ethers.formatUnits(parseInt(tx.gasPrice._hex).toString(), "gwei")}&nbsp;gwei</span><br />
        <span><b>gas limit:</b>&nbsp;{tx.gasLimit.toString()}</span><br />
        <span><b>max fee per gas:</b>&nbsp;{tx.maxFeePerGas === undefined ? "information not available" : ethers.formatUnits(parseInt(tx.maxFeePerGas._hex).toString(), "gwei")+" gwei"}</span><br />
        <span><b>max priority fee per gas:</b>&nbsp;{tx.maxPriorityFeePerGas === undefined ? "information not available" : ethers.formatUnits(parseInt(tx.maxPriorityFeePerGas._hex).toString(), "gwei")+" gwei"}</span><br />
        </>
    )
}

export default function Transaction(txHash) {
    const [tx, setState] = useState(undefined);

    useEffect(() => {
        (async function getState() {
          const tx = await alchemy.core.getTransaction(txHash);
          setState(tx);
        })();
      }, []);
    return (<>
        {tx === undefined ?
        "... now loading information."
        :
        TransactionInfo(tx)}
        </>);

}
