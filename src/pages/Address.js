// This is a page for an address.
// It is going to provide information such as the list of transactions, the account balance, the NFT assets, etc.
import { useParams } from 'react-router-dom';
import Balance from '../components/Balance';
import NFT from '../components/NFT';
import { NavLink } from 'react-router-dom';

export default function AddressPage() {
    const { address } = useParams();

    return (
        <>
        <div className="App">
        <div><b>Account details of</b> {address}</div>
        <b>Blockchain:</b>&nbsp;<NavLink to={"/"}>Ethereum mainnet</NavLink><br />
        <div><b>ETH Balance:</b>&nbsp;<Balance address={address}/></div>
        <div><b>NFTs:</b>&nbsp;<NFT address={address}/></div>
    </div>
    </>);
}