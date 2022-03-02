import { useState, useEffect } from 'react';
import {ethers} from 'ethers'

import React from 'react';

const Interactions = ( props ) => {

    const [transferHash, setTransferHash] = useState(null) 

    const transferHandler = async (e) => {
        e.preventDefault();
        let transferAmount = e.target.sendAmount.value;
        let receiverAddress = e.target.receiverAddress.value;

        let txt = await props.contract.transfer(receiverAddress, transferAmount);
        setTransferHash(txt.hash);
    }

    return (
        <div>
            <form onSubmit={transferHandler}>
                 <h3> Transfer Coins</h3>
                 <p>Reciever Address</p>
                 <input type="text" id='receiverAddress'></input>

                 <p>Send Amount</p>
                 <input type='number' id='sendAmount' min='0'></input>
                  <button type='submit'>Send</button>
                  <div>
                      {transferHash}
                  </div>
            </form>
        </div>
    );
}

export default Interactions;
