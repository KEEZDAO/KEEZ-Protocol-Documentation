# Multisig

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

Remove a permission.

#### Parameters:

| Name           | Type    | Description |
| :------------- | :------ | :---------- |
| `_to`          | address | The address that will permissions removed. |
| `_permissions` | bytes32 | The permissions that will be removed from `_to`. |

:::note

#### Requirements:

- `msg.sender` must have REMOVE_PERMISSION permission

:::



### proposeExecution

```solidity
function removePermissions(
    string calldata _title,
    bytes[] calldata _payloads
  ) external
```

Propose to execute methods on behalf of the multisig.

#### Parameters:

| Name           | Type    | Description |
| :------------- | :------ | :---------- |
| `_title`       | string  | Title of the proposal. Used to create the proposal signature. |
| `_payloads`    | bytes[] | An array of payloads that will be executed if the proposal is successful. |

:::note


:::

### getProposalHash

```solidity
function getProposalHash(
    address _signer,
    bytes10 _proposalSignature,
    bool _response
  ) external view returns(bytes32 _hash);
```

Create a unique hash for evert proposal which should be hashed.
Get the  hash needed to be signed by the proposal voters.

#### Parameters:

| Name           | Type    | Description |
| :------------- | :------ | :---------- |
| `_signer`      | address | The address of the voter. |
| `_proposalSignature` | bytes10 | Signature The unique identifier of a proposal. |
| `_response`    | bool    | The choice of the voter. (true || false). |

:::note

#### Requirements:

- `msg.sender` must have VOTE permission
- `_signer` must be the same as the address that will sign the message.

:::

### execute

```solidity
  function execute(
    bytes10 _proposalSignature,
    bytes[] calldata _signatures,
    address[] calldata _signers
  ) external;
```

Execute a proposal if you have all the necessary signatures.

#### Parameters:

| Name           | Type    | Description |
| :------------- | :------ | :---------- |
| `_proposalSignature` | bytes10 | The unique identifier of a proposal |
| `_signatures`  | bytes[] | An array of signatures representing votes. |
| `_signers`     |address[]| An array of addresses that are the signers of `_signatures`. |

:::note

#### Requirements:


:::

## Events


### ProposalCreated

```solidity
 event ProposalCreated(bytes10 proposalSignature);
 ```

 This event is emited every time a proposal is created.

 #### Parameters:

| Name           | Type    | Description |
| :------------- | :------ | :---------- |
| `proposalSignature` | bytes10 | The signature of the proposal that was created. |


### ProposalExecuted

```solidity
 event ProposalCreated(bytes10 proposalSignature);
 ```

 This event is emited every time a proposal is executed.

 #### Parameters:

| Name           | Type    | Description |
| :------------- | :------ | :---------- |
| `proposalSignature` | bytes10 | The signature of the proposal that was executed. |