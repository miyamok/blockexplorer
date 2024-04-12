import { useEffect, useState } from 'react';
import { alchemy } from '../Alchemy';
import { useParams } from 'react-router-dom';
import { truncateHash } from '../Utils';

function DisplayNFTList(nfts) {
    const msg = "Owns the following " + nfts.length + " NFTs"
    return (
        <>
        <span>{msg}</span>
        <table>
            <tr>
                <th>
                    Title
                </th>
                <th>
                    Description
                </th>
                <th>
                    Contract account
                </th>
                <th>
                    Type
                </th>
            </tr>
            {nfts.map(nft => (
                <tr>
                    <td>
                        {nft.title}
                    </td>
                    <td>
                        {nft.description}
                    </td>
                    <td>
                        <a href={"/address/"+nft.contract.address}>{truncateHash(nft.contract.address)}</a>
                    </td>
                    <td>
                        {nft.tokenType}
                    </td>
                </tr>))
            }
        </table>

        </>
    );
}

export default function NFT() {
    const { address } = useParams();
    const [NFTs, setState] = useState(undefined);
    useEffect(() => {
        (async function getState() {
          const nfts =  await alchemy.nft.getNftsForOwner(address);
          setState(nfts);
        })();
      }, []);

    return (
        <>
        {NFTs === null || NFTs === undefined ?
        "... loading infornation ..."
        :
            NFTs.totalCount === 0 ?
            "Owns no NFT" :
            DisplayNFTList(NFTs.ownedNfts)
        }
        </>
    )
}