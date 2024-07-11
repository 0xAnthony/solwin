'use client';

import {useConnection, useWallet} from '@solana/wallet-adapter-react';
import { AppHero, ellipsify } from '../ui/ui-layout';
import { ExplorerLink } from '../cluster/cluster-ui';
import {useSolwinProgram} from "@/components/solwin/solwin-data-access";
import {depositReserveLiquidityInstruction} from "@solana/spl-token-lending";
import {PublicKey} from "@solana/web3.js";
import splToken from "@solana/spl-token";

export default function SolwinFeature() {
  const { publicKey } = useWallet();
  const { programId } = useSolwinProgram();
  const {connection} = useConnection();

  const {getExchangeRate} = useSolwinProgram();

  const deposit = async () => {

  }

    return <div>
      <AppHero
        title="Solwin"
        subtitle={""}
      >
        <p className="mb-6">
          <ExplorerLink
            path={`account/${programId}`}
            label={ellipsify(programId.toString())}
          />
        </p>
          <p>
              {!!getExchangeRate.data && <span>Rate {getExchangeRate.data.toString()}</span>}
          </p>

        <button onClick={deposit} className="btn btn-secondary">Build deposit IX</button>
      </AppHero>
    </div>
}
