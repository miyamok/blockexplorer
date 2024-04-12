// This is a page for the chain.
// Providing infornmation such as the number of blocks, the latest blocks, the current gas price, etc.

import BlockNumber, { blockNumber } from '../components/BlockNumber'
import GasPrice from '../components/GasPrice';
import CurrentTime from '../components/CurrentTime';
import ETHPrice from '../components/ETHPrice';

export default function Chain() {
    return (<div className="App">
      <b>Current time:</b>&nbsp;<CurrentTime /><br />
      <b>ETH market price</b>:&nbsp;USD&nbsp;<ETHPrice /><br />
      <b>Gas price:</b>&nbsp;<GasPrice /><br />
      <b>Latest block number:</b>&nbsp;<BlockNumber /><br />
    </div>);
}