---
sidebar_position: 1
slug: /
---

# KEEZ Protocol

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

## Project Outlook

In this short amount of time we have created an MVP for DAO governance on LUKSO, but we intend to continue development and make improvements in the following areas:

### Usability

* Addition of delegate execution 
  * We give out permissions for delegation, yet there is no way for it to happen.

* Adding and removing members to the multisig
  * The multisig is created when the DAO creation process happens, but after that, there is no way to add/remove members to the multisig.
  * There is also no way to manage the permissions of the multisig.

* Adding the ability to create new vaults 
  * You can create one vault during the DAO creation process, but there is no way to make another or manage the permissions of the initial one.

* Custom voting options
  * Right now, we only offer approve, reject, and abstain for voting choices; there is no way to customize them.

* The ability for members with Add/Revoke permissions to add or remove without a proposal
  * Permissions have been created to allow individual DAO members to add/revoke the permissions of others, yet there is no UI for them to do so.
 
* The ability for members to view current permissions 
  * The DAO gives out permissions during the creation process, and there isn't an easy way to view which permissions an individual has received. 

### Manually assigning permissions 
* For now, all members to whom a DAO wishes to give permissions must be manually added in the DAO creation process or through a proposal. 
* This is highly inefficient. There must be a way to "mass add" members to basic permissions levels—some distribution model to onboard communities. We have several ideas for solving this issue. One would be an "HR" team. A team for the DAO that is in charge of onboarding, educating, and adequately allocating DAO members to their respective departments. This team would still have to add each member's permissions one by one potentially, but at least they are going through an onboarding process. 
* Another solution might be a distribution model like token distribution. Attaching key permissions to a token so that when people hold it, their wallet automatically enters the Key Manager logic, and they can execute whatever permissions correlate to the token. 
* There is also currently no way for a non-member to join a DAO. There must be applications to join, socials linked for inquiries, etc. There are proposal templates in place for adding member permissions, but some way for people to join when they want would be ideal.

### Governance 
* Our governance process has been made to avoid financially gated voting and improper weighing scales. We have implemented one-to-one voting with delegation. Similar to the proposals and permissions, we hope to create the option for more voting schemes to be added down the line. We want DAOs to have a choice in how their community votes, but we at KEEZ prefer the most democratic and fair option, which is currently one-to-one with delegation.
* KEEZ Protocol will aim to create departmentalized DAOs with specific pockets of people trained to accomplish certain tasks with their particular governance process attached. For example, the devs have a department of all devs. Any developer-related proposal is proposed to that group and voted on by that group. Ideally, this group can create its voting parameters and weight system. This creates a situation where only people who are educated and relevant to the proposal are the ones voting on it. This can lead to increased participation rates on proposals and effectiveness of decision-making. 

### Organizational Structure 
* Our MVP has demonstrated how key permissions can be used to segment positions and roles within a DAO. Individuals can earn certain permissions to perform specific tasks, and using the smart contract-based nature of the Universal Profiles; we can continue adding permissions and segmenting roles. Research is needed on properly and effectively departmentalizing workers in a DAO. 
* The individual structure of a DAO will be determined by its needs and goals, but enabling them the tools to do so is where we come in. With the help of identity systems, these DAOs could identify an individual member's strengths and segment them wherever needed to best accomplish their task. From there, permissions allow that subgroup of like-minded workers to propose, vote, and work within a specific group to achieve those tasks. This will lead to improved voting structures, more accurate and accountable decisions, and a level of efficiency that DAOs have never experienced. 
* Again, significant research is required around the best course of action to enable this. However, we deem this an essential addition moving forward. With proper organization, we can knock off several issues around DAOs, including disorganization of operation, financially gated access, inadequate compensations, and flawed governance systems–that is quite the claim. These issues are not present in most successful web2 organizations, which can be attributed to their ability to coordinate humans more effectively than DAOs. 

### Identity 
* An identity system will be needed moving forward. At KEEZ protocol, researching identity solutions and how they can assist us in our key permission distribution, organization, and improvement of the overall DAO experience is the highest priority. Implementing an identity system that allows us to correctly identify the strengths and knowledge of workers, fill them into their roles, and compensate them accordingly will move us towards our goal of creating the organizations of the future. It will create a higher functioning organization and benefit the DAO members, as they will begin building reputation and recognition for their skills and achievements. 
* Our identity system needs to be flexible enough to accept identity systems from outside our ecosystem and also address common issues like revocability, proper storage, and account recovery. Thankfully, we are building with the LUKSO suite of standards that intrinsically enables flexibility and solutions to problems around identity. Further researching how we can use LUKSOs standards to create an identity system will be useful in our DAO stack. 
	
Building has been a fun experience for this KEEZ team, and the research that has been done to bring forth this project has led us down many paths. We have much work ahead of us if we want to enable DAOs to be the organizations of the future. Identity/reputation systems are on the cutting edge of this already sharp industry, and we look forward to continuing our research into how they can help DAOs. Thanks to LUKSOs suite of standards, these possibilities are becoming more and more of a reality.
