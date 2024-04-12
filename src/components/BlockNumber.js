import { useEffect, useState } from 'react';
import { alchemy } from '../Alchemy';
import { NavLink } from 'react-router-dom';


export default function BlockNumber() {
    const [blockNumber, setState] = useState(undefined);

    useEffect(() => {
        (async function getState() {
          const bn = await alchemy.core.getBlockNumber();
          setState(bn);
        })();
      }, []);
    return (<>
        {blockNumber === undefined ?
        "... now loading information."
        :
        <NavLink to={"/block/"+blockNumber}>{blockNumber}</NavLink>}
        </>);

}
