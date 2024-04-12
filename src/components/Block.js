import { useEffect, useState } from 'react';
import { alchemy } from '../Alchemy';
import { provider } from '../Ethers';
import { ethers } from "ethers";
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { truncateHash } from '../Utils';

function Transactions(txs) {
    return (
        <table>
            <tr>
                <th>
                    txHash
                </th>
                <th>
                    from
                </th>
                <th>
                    to (* created contract)
                </th>
                <th>
                    value
                </th>
            </tr>
        {txs.map(tx => (
            <tr>
                <td>
                    <NavLink to={"/tx/"+tx.hash}>{truncateHash(tx.hash)}</NavLink>
                </td>
                <td>
                    <NavLink to={"/address/"+tx.from}>{truncateHash(tx.from)}</NavLink>
                </td>
                <td>
                    {toLink(tx.to, tx.creates)}
                    {/* <NavLink to={"/address/"+tx.to}>{tx.to === null ? "?" : truncateHash(tx.to)}</NavLink> */}
                </td>
                <td>
                    {ethers.formatUnits(tx.value.toString(), "ether") + " ETH"}
                </td>
            </tr>
        ))}
        </table>
    )
}

function toLink(to, creates) {
    if (to != null) {
        return (
            <>
            <NavLink to={"/address/"+to}>{truncateHash(to)}</NavLink>
            </>
        )
    }
    if (creates != null) {
        return (
            <>
            <NavLink to={"/address/"+creates}>*{truncateHash(creates)}</NavLink>
            </>
        )
    }
    return (<span>information not available</span>)
}

export default function Block() {
    const { blockNumber } = useParams();
    const [block, setState] = useState(undefined);

    useEffect(() => {
        (async function getState() {
          const bwtxs = await alchemy.core.getBlockWithTransactions(parseInt(blockNumber));
          setState(bwtxs);
        })();
      }, []);
    return (<>
        <b>Blockchain:</b>&nbsp;<NavLink to={"/"}>Ethereum mainnet</NavLink><br />
        {block === undefined || block === null ?
        <span>&nbsp;&nbsp;... loading details of the latest block (may take several seconds) ...</span>
        :
        <>
        <b>Block number:</b>&nbsp;{block.number}<br />
        <b>Transactions:</b>&nbsp;({block.transactions.length} transactions in total)<br />
            {Transactions(block.transactions)}
        </>
        }
        </>);

}
