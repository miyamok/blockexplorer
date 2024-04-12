import { useEffect, useState } from 'react';
import { alchemy } from '../Alchemy';
import { ethers } from "ethers";
import { useParams } from 'react-router-dom';

export default function Balance() {
    const { address } = useParams();
    const [balance, setState] = useState(undefined);
    useEffect(() => {
        (async function getState() {
          const b =  await alchemy.core.getBalance(address);
          setState(b);
        })();
      }, []);

    return (
        <>
        {balance === null || balance === undefined ?
        "... loading infornation ..."
        :
        ethers.formatUnits(parseInt(balance).toString(), "ether")
        }
        </>
    )
}