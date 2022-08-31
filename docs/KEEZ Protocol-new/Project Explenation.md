

KEEZ Protocol, powered by KEEZ DAO, allows individuals to create a DAO using a Universal Profile (UP). Through the smart contract based tools provided by LUKSO, we are able to entirely reinvent how DAOs onboard members, participate in governance, and manage their operation. Our mission is to create DAOs built on UPs that are viable as organizations of the future.




## Expanded Project Explanation
By Sage Bray  

This hackathon has been very valuable for the KEEZ Protocol Team and the KEEZ community. Building with LUSKO standards, interacting with the LUKSO team and community, and creating a dApp has strengthened us. At this time, our team has produced a site that allows a blockchain-based identity to create a DAO using LSP0, the Universal Profile (UP). With the UP, the DAO can onboard members through the LSP6 (key manager), create a vault (LSP9) for data and asset management, and govern the DAO. These ideas can be further developed to make a full DAO stack run through a single UP. For now, our Minimum Viable Product (MVP) allows for essential DAO functions. This doc will highlight what we have accomplished in these six weeks and what we would like to improve/add moving forward. 

We have created a protocol that enables an individual to create a DAO as a Universal Profile. The creation process is as follows: 

In the Navbar, go to the Get Started tab, and click the Create tab to begin creating an UP for a DAO:

### Step One: Add name, description, categories, and image for the DAO 
- Here you give it a name, description, category, and image. Add a category so people can sort and filter for the DAO, a description so individuals can learn what the DAO does, and an image + name to represent the DAO. 

### Step Two: Add individual UP addresses to the member list with selected permissions. 

Step two is onboarding members using LSP6 (Key Management) permissions. Permissions currently include: 

* Add Permission and Revoke
  * The add and revoke permissions allow an individual to add/revoke permissions of another.
  * We also included a proposal template to democratically remove someone from the DAO, as this permission is intended for addition and seldom subtraction.

* Vote and Propose
  * Vote and Propose permissions allow you to vote and propose. If you have the Vote permission, your UP can submit votes on proposals within the DAO. The same thing with proposals; the permissioned member can create proposals for that DAO.

* Send Delegate and Receive Delegate. 
  * Send Delegate and Receive Delegate allow you to delegate votes. If an UP has SendDelegate permission, they can delegate their vote to anyone who has RecieveDelegate permission. Anyone who has RecieveDelegate permission will be able to accept or decline an individual's delegation.

We hope to create the ability for any DAO to add their own permissions in the future. 

### Step Three: Create a multisig and a vault for the UP
Step three: you insert the name of the DAOs first vault.
* This vault is in place to hold the DAOs treasury and any data.  
  * In the future, we will make It so you can create more vaults.

The following section is adding members to the multisig. The multisig is in place to add security to the DAOs UP. In this step, the creator of the DAO can give multisig permission to any of the member UPs that were added in step two. The permissions are:

* Vote and Propose
  * These will allow the member to vote and propose on multisig matters once the interface is available. 

* Add permission and Remove permission
  * These will allow permissions to be added and removed from other multisigners.

* Register Votes 
  * These allow the holder to gather all signatures from multisig voting and tally them up. 

* Execute Proposal
  * Execute Proposal allows the holder to execute the proposal based on the registered signatures.

**For the hackathon, anyone added to the multisig will be given all of the permissions at once.**

### Step Four: Establish voting parameters for the DAOs governance process
Step four is establishing voting parameters. Upon creation, all of these are set by the DAO and changeable through a proposal. These parameters are used for every proposal in the DAO and can change through a proposal template. These parameters are currently:

* Voting Delay
  * Voting delay is the time before the proposal is open for voting. During this period, voters should spend time learning about the context of the proposal.

* Voting Period
  * The voting period is the time the proposal is open for voting.

* Execution Delay.
  * The execution delay is the amount of time after the voting period until the result executes. 

* Participation Rate 
  * The participation rate is the percentage of all members that are needed for the proposal to be. 

* Majority
  * The majority is the minimum percentage of total votes received that is used to determine the proposal decision. 


* There is also a vote registration period open for 24 hours post voting period and before execution delay. This period is where signatures representing votes will be collected, verified, and counted with the register votes permission through our smart contracts.

* From there, multisig members with the execute votes permission can push the vote through after the execution delay. 

The last step brings you to the summary page, where you can make any last-minute changes. Once those are settled, the UP is created for the DAO. This concludes the DAO creation process, all permissions are active, and the UPs that have them can begin to use them. 

One way they can use the permissions is by making proposals. We have created templates for proposals that allow you to execute basic DAO needs. The results of all templates except the general template are executable after the execution delay. There are currently four templates:

* Voting Parameters
  * This template allows you to propose changes to the voting parameters established in the DAO creation process. 

* Send Tokens
  * This template allows you to input the vault from which you would like to send tokens, the token type, and the receiving address. If a DAO is looking to pay an individual for their work, move assets into another vault, or move assets for any other reason, they may use this template to propose It. 

* Add/Revoke
  * This template allows you to enter an UP address and choose the permissions you want to add or remove from them. Ideally, this template will add new member permissions or add/revoke permissions of current members. This template is currently the only way to add another member to a DAO, as we have not yet made the user interface (UI) that allows the add/revoke permissions to be usable. 

* General Template 
  * This template allows for general, non-executable proposals. These proposals are more like polls; they ask a question and earn a response, but nothing happens on the backside. 

In the future, more templates can be added as needed, and we hope to implement the ability for individuals/DAOs to create other executable proposals. Similar to how snapshot allows individuals to develop voting strategies, we would love to provide the opportunity for DAOs to add more template options. 

We have also added profile pages for the DAOs. The DAO profile page is a place for their proposals to live and a homepage for their operation. Individuals with proper permissions can go onto the DAO page and participate in the governance process. They can make proposals, vote, register votes, and execute if they are permissioned to do so. On top of that, a profile page for individuals. These individual pages show the DAOs for which the UP has permissions and any activity they have done.