---
title: DAO
---

## Public methods

### getNewPermissionHash

```solidity
function getNewPermissionHash(
  address _from,
  address _to,
  bytes32 _permissions
) external view returns(bytes32 _hash)
```

Get the message needed to be signed for awarding a set of permissions.

#### Parameters:

| Name           | Type    | Description |
| :------------- | :------ | :---------- |
| `_from`        | address | The address that awards a set of permissions.   |
| `_to`          | address | The address that receives a set of permissions. |
| `_permissions` | bytes32 | The set of permissions that are awarded.        |

#### Return Values:

| Name     | Type    | Description |
| :------- | :------ | :---------- |
| `_hash`  | bytes32 | The message neede to be signed for awarding a new permission. |

### claimPermission

```solidity
function claimPermission(
  address _from,
  bytes32 _permissions,
  bytes memory _signature
) external
```

Claim a permission using a signature.

#### Parameters:

| Name           | Type    | Description |
| :------------- | :------ | :---------- |
| `_from`        | address | The address that has awarded the set of permissions. |
| `_permissions` | bytes32 | The set of permissions that are awarded. |
| `_signature`   | bytes   | The signature needed for claiming the set of permissions. |

:::note

#### Requirements:

- `_from` must have the ADD_PERMISSION permission.
- The signer of `_signature` must be `_from`.

:::

### addPermissions

```solidity
function addPermissions(
  address _to,
  bytes32 _permissions
) external
```

Add a permission.

#### Parameters:

| Name           | Type    | Description |
| :------------- | :------ | :---------- |
| `_to`          | address | The address that will receive new permissions. |
| `_permissions` | bytes32 | The permissions that will be given to `_to`. |

:::note

#### Requirements:

- `msg.sender` must have ADD_PERMISSION permission

:::

### removePermissions

```solidity
function removePermissions(
  address _to,
  bytes32 _permissions
) external
```

Add a permission.

#### Parameters:

| Name           | Type    | Description |
| :------------- | :------ | :---------- |
| `_to`          | address | The address that will permissions removed. |
| `_permissions` | bytes32 | The permissions that will be removed from `_to`. |

:::note

#### Requirements:

- `msg.sender` must have REMOVE_PERMISSION permission

:::

### delegate

```solidity
function delegate(
  address delegatee
) external
```

Delegate a vote.

#### Parameters:

| Name        | Type    | Description |
| :---------- | :------ | :---------- |
| `delegatee` | address | The address of the delegatee to be set for `msg.sender`. |

:::note

#### Requirements:

- `msg.sender` must have SEND_DELEGATE permission.
- `delegatee` must have RECEIVE_DELEGATE permission.
- `msg.sender` must have no delegatee set.

:::

### changeDelegate

```solidity
function changeDelegate(
  address newDelegatee
) external
```

Change a delegatee.

#### Parameters:

| Name           | Type    | Description |
| :------------- | :------ | :---------- |
| `newDelegatee` | address | The address of the new delegatee to be set for `msg.sender`. |

:::note

#### Requirements:

- `msg.sender` must have SEND_DELEGATE permission.
- `newDelegatee` must have RECEIVE_DELEGATE permission.
- `msg.sender` must have a delegatee set.
- `newDelegatee` must be different from the current delegatee of `msg.sender`.

:::

### undelegate

```solidity
function undelegate() external
```

Remove a delegatee.

:::note

#### Requirements:

- `msg.sender` must have SEND_DELEGATE permission.
- `msg.sender` must have a delegatee set.

:::

### createProposal

```solidity
function createProposal(
  string calldata _title,
  string calldata _metadataLink,
  bytes32 _votingDelay,
  bytes32 _votingPeriod,
  bytes32 _executionDelay,
  bytes[] calldata _payloads,
  bytes32 _choices,
  bytes32 _choicesPerVote
) external
```

Create a proposal.

#### Parameters:

| Name              | Type    | Description |
| :---------------- | :------ | :---------- |
| `_title`          | string  | Title of the proposal. Used to create the proposal signature. |
| `_metadataLink`   | string  | Link to the metadata JSON file. |
| `_votingDelay`    | bytes32 | Period before voting can start. Must be >= with the minimum voting delay set in dao settings. |
| `_votingPeriod`   | bytes32 | Period one could register votes for the proposal. Must be >= with the minimum voting period set in dao settings. |
| `_executionDelay` | bytes32 | Period after which one could execute the proposal. Must be >= with the minimum execution delay set in dao settings. |
| `_payloads`       | bytes[] | An array of payloads which will be executed if the proposal is successful. |
| `_choices`        | bytes32 | Number of choices allowed for the proposal. Choice name and description must be stored inside `_metadataLink`. |
| `_choicesPerVote` | bytes32 | Maximum number of choices allowed for each voter. |

:::note

#### Requirements:

- `_choicesPerVote` miust be smaller or equal to `_choices`.
- `_votingDelay` must be bigger or equal to the minimum value set in the dao's settings.
- `_votingPeriod` must be bigger or equal to the minimum value set in the dao's settings.
- `_executionDelay` must be bigger or equal to the minimum value set in the dao's settings.

:::

### getProposalHash

```solidity
function getProposalHash(
  address _signer,
  bytes10 _proposalSignature,
  bytes32 _choicesBitArray
) external view returns(bytes32 _hash)
```

Get the hash needed to be signed by the proposal voters.

#### Parameters:

| Name                 | Type    | Description |
| :------------------- | :------ | :---------- |
| `_signer`            | address | The address of the voter. |
| `_proposalSignature` | bytes10 | The unique identifier of a proposal. |
| `_choicesBitArray`   | bytes32 | The choices of the voter. |

#### Return values:

| Name     | Type    | Description |
| :------- | :------ | :---------- |
| `_hash`  | bytes32 | The message neede to be signed for voting on a proposal. |

:::note

#### Requirements

- `msg.sender` must have PROPOSE permission.
- `_signer` must be the same as the address that will sign the message.

:::

### registerVotes

```solidity
function registerVotes(
  bytes10 _proposalSignature,
  bytes[] memory _signatures,
  address[] memory _signers,
  bytes32[] memory _choicesBitArray
) external
```

Register the participants with its choices and signed vote.

#### Parameters:

| Name                 | Type      | Description |
| :------------------- | :-------- | :---------- |
| `_proposalSignature` | bytes10   | The unique identifier of a proposal. |
| `_signatures`        | bytes[]   | An array of signatures, generated by `getProposalHash(...)`. |
| `_signers`           | address[] | An array of addresses that signed the `_signatures`. |
| `_choicesBitArray`   | bytes32[] | An array of BitArrays representing the choices of `_signers`. |

:::note

#### Requirements

- `msg.sender` must have REGISTER_VOTES permission.
- `_signatures.length` must be equal to `_signers.length` and to `_choicesBitArray.length`.
- Voting delay period must be over.
- Voting period must not be over.

:::

### executeProposal

```solidity
function executeProposal(
  bytes10 proposalSignature
) external returns(uint256[] memory)
```

Execute the proposal by signature.

#### Parameters:

| Name                 | Type    | Description |
| :------------------- | :------ | :---------- |
| `_proposalSignature` | bytes10 | The unique identifier of a proposal. |

#### Return values:

| Name                    | Type      | Description |
| :---------------------- | :-------- | :---------- |
| `arrayOfVotesPerChoice` | uint256[] | An arra of votes where each index is a different choice. |

:::note

#### Requirements

- `msg.sender` must have EXECUTE permission.
- Votes must be registered before executing the proposal.
- Voting delay, voting period and execute delay phases must be over.

:::