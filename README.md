# SolWin

> Alyra x Solana Foundation Training Review Project

![SOLWIN](./web/public/logo.png)

> This project is a lottery on the Solana blockchain where no one loses. The protocol places deposits on lending or staking protocols, the yield generated is the gain of the lottery.

<details>
  <summary>Table of Contents</summary>
  
- [Team](#team)
- [Project Summary](#project-summary)
- [Presentation Links](#presentation-links)
- [Problem Statement](#problem-statement)
- [Scenario](#scenario)
- [Tech Stack](#tech-stack)
  - [Studied but Not Implemented](#studied-but-not-implemented)
- [Commands to Launch the Project](#commands-to-launch-the-project)
- [Project Structure](#project-structure)
  - [Repository](#Repository)
  - [Program  (anchor folder)](#Program)
  - [Front-End Structure (web folder)](#front-end-structure)
- [Roadmap](#roadmap)
- [Challenges Encountered](#challenges-encountered)
  
</details>

## Team

- Anthony Consolaro / _6ZDmJvgVnZWZmv2ickKT2h6Emb7xd6cAZTYtYRAgy4VL_
- Igor Bournazel / _3qcwwUugaabkMbfmYKTsuZTqWuEsiWbZasK1zPeGscnz_
- ~~Mickael Sanches Loureiro~~

## Presentation Links

- [Vercel Link](https://solwin-murex.vercel.app/)
- [Last Devnet Contract Address](https://explorer.solana.com/address/G1ZkRWTyM46zZQjZ1U721iRtp7Rr14fBFhR5GHGcvHZB?cluster=devnet)
- [Demo video](https://youtu.be/TovOUtIZH10)

## Problem Statement

The goal is to attract users to the Solana ecosystem by providing a simple and user-friendly dApp. This dApp offers an enticing opportunity for users to earn rewards without locking their funds for extended periods.

This solution enables users to:

- Earn money without risk of loss.
- Serve as an introductory experience to the Solana blockchain.
- Act as a first step into decentralized finance (DeFi), with educational resources explaining the underlying mechanisms.
- Increase Total Value Locked (TVL) through staking and lending, helping used protocols become more attractive.
- Contribute to network security by staking SOL (if implemented)
- Utilize a liquid token that can be employed in other dApps while engaging with the game.

## Scenario

1. Lottery Configuration by Administrator:

- The administrator sets up a new lottery by configuring the following parameters:
  - Ticket Price: Determines the cost for entering the lottery.
  - Duration: Specifies how long the lottery will remain open for entries.
  - Deposit Protocol: Selects the protocol (such as Solend or MarginFi) to deposit funds and earn yield.

2. User Participation:

- Users can deposit SOL into the lottery contract.
- The deposited funds are placed in a specified protocol (e.g., Solend, MarginFi) to generate yield.
- Upon depositing SOL, users receive swSOL, which acts as a liquid version of SOL, and their credits are updated to reflect the amount deposited.

3. Spending Credits:

- Users with credits can spend them to purchase tickets for the lottery until the lottery closes.

4. Closing the Round:

- A user can close the round to claim rewards.
  - The closing process uses a duration and a closing window around the target time (start time + duration).
  - At the target time, the reward is at its maximum (e.g., 25% of the total reward).
  - This reward gradually decreases until the target time plus or minus half of the closing window, where it drops to around 10%.
  - If the round is not closed after this period, a minimum reward of 5% remains to incentivize someone to close the round.  
    A weighting mechanism can be applied to the closing window, allowing adjustments to the timing of future rounds based on user behavior in closing rounds before or after the target time.
- Selecting the Winning Ticket:
  - When a round is closed, a random number is used to draw a winning ticket, which indicates the reward assigned to the winner.
  - The user who closes the round sees their rewards credited to their lottery account.
  - A new round is then initiated, continuing the cycle.

5. Withdrawing Funds and Rewards:

- Users can withdraw their deposits and rewards. There will likely be a withdrawal delay to manage this at the vault level, depending on the protocols where the funds are invested.

6. External User Interaction:

- An external user can also use Solwin to swap swSOL purchased on a secondary market for SOL.

7. Protocol remuneration:

- The protocol will keep the rent of ticket and round accounts closed.
- It will also keep a small percentage of the rewards.

## Tech Stack

- **Blockchain**: Solana
- **Framework**: Create-Solana-Dapp (NX, Anchor, Next.js)
- **Languages**: Rust, TypeScript, JavaScript (for testing and front-end)

### Studied but Not Implemented

- Switchboard
- Clockwork

## Commands to Launch the Project

This project is generated with the [create-solana-dapp](https://github.com/solana-developers/create-solana-dapp) generator.

### Getting Started

#### Prerequisites

- Node v18.18.0 or higher

- Rust v1.77.2 or higher
- Anchor CLI 0.30.0 or higher
- Solana CLI 1.18.9 or higher

#### Installation

##### Clone the repo

```shell
git clone https://github.com/0xAnthony/solwin.git
cd solwin
```

##### Install Dependencies

```shell
npm install
```

##### Wallets configuration

Create a .env file in the anchor folder, following the structure of .env.example.
The owner wallet used for testing must correspond to the wallet JSON file specified in the Anchor.toml.

##### Start the web app

```
npm run dev
```

### Apps

#### anchor

This is a Solana program written in Rust using the Anchor framework.

##### Commands

You can use any normal anchor commands. Either move to the `anchor` directory and run the `anchor` command or prefix the command with `npm run`, eg: `npm run anchor`.

##### Sync the program id:

Running this command will create a new keypair in the `anchor/target/deploy` directory and save the address to the Anchor config file and update the `declare_id!` macro in the `./src/lib.rs` file of the program.

You will manually need to update the constant in `anchor/lib/counter-exports.ts` to match the new program id.

```shell
npm run anchor keys sync
```

##### Build the program:

```shell
npm run anchor-build
```

##### Start the test validator with the program deployed:

```shell
npm run anchor-localnet
```

##### Run the tests

```shell
npm run anchor-test
```

##### Deploy to Devnet

```shell
npm run anchor deploy --provider.cluster devnet
```

#### web

This is a React app that uses the Anchor generated client to interact with the Solana program.

##### Commands

Start the web app

```shell
npm run dev
```

Build the web app

```shell
npm run build
```

## Project Structure

### Repository

We use NX for managing our monorepo. It handles tasks such as organizing our projects, enabling efficient builds, and facilitating dependency management. Additionally, NX provides powerful tools for code sharing, testing, and optimizing the development workflow across multiple applications and libraries within the repository.

### Program (anchor folder)

/programs/solwin/src  
├── lib.rs # Main logic  
├── errors.rs # Errors handling  
├── constants.rs # Constants  
├── /instructions.rs # Transactions  
├── /state.rs # State management

PDAs (Program Derived Addresses): Used to derive program addresses and manage lottery state. They ensure the security and integrity of the data.

- masterLottery PDA: Manages the global state storing the current - - lottery index.
- lotteryPda: Manages the lottery state for each lottery.
- vaultPda: Manages the vault state, one by lottery.
- roundPda: Manages the round state for each round.
- ticketPda: Manages the ticket state for one ticket of one user.
- userDataPda: Manages the user data state of one user for one lottery.

### Front-End Structure (web folder)

The front-end uses Next.js to manage client-side rendering and user interactions.

We use the most recent app router.
/components hold every components of the project
We use DaisyUI for the design

## Roadmap (features to be implemented)

**logic:**

- Integration of Lending and Staking: Each lottery will have its yield strategy.
- Integration of Switchboard VRF: To ensure randomness in draws.
- Clockwork CRON: To automate the draws.

**user experience:**

- Blink: Allows easy integration of the dApp into any web platform.
- Mobile Version: Develop a mobile version for better accessibility.

**business:**

- Gamification: Enhance user experience with discounts and increased win percentages.
- Expansion of Winners: Make the system more attractive.
- User-Created Lotteries: Allow anyone to create their own lottery.
- Lottery Configuration: Ensure enough players and stakes for viability.
- Reward Counterbalance: Reduce winnings for users with a high number of tickets to avoid "whale" phenomena.

## Challenges Encountered

- Template Issues: Need to upgrade NX.
- Breaking Changes from Solana v2: causing issues with Anchor packages during development.
- Compilation Problems: Difficulties integrating Switchboard and Clockwork into the project.
- Lacking Documentation: Documentation on lending protocols often outdated or incomplete. Not same version on devnet and mainnet.

- Token Lending Issues: an idea was to deploy a lending protocol on Solana via CLI, then to deploy a program with its own config (anchor, solana..) to interact with the lending protocol and finally to use cpi to interact with the intermediate program. But we missed time to implement it.
