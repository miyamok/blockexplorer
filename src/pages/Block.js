// This is a page for the block.
// Providing infornmation such as the contained transactions, the timestamp, the gas limit, etc.

import Block from '../components/Block';
import { useParams } from 'react-router-dom';

export default function BlockPage() {
    const { blockNumber } = useParams();
    return (<div className="App">
      <Block blockNumber={blockNumber} />
    </div>);
}