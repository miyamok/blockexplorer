// This is a page for a transaction.
// This provides information such as the date time of the transaction,
// the identification to the block it belongs to, the content of the transaction, etc.
import { useParams } from 'react-router-dom';
import Transaction from '../components/Transacrtion';
import { NavLink } from 'react-router-dom';
export default function TransactionPage() {
    const { txHash } = useParams();
    return (
        <>
        <b>Blockchain:</b>&nbsp;<NavLink to={"/"}>Ethereum mainnet</NavLink><br />
        <span><b>Transaction hash:</b>&nbsp;{txHash}</span><br />
        {Transaction(txHash)}
        </>
    )
}
