---
sidebar_position: 1
---

# DAO
## DaoConstants
### Permissions Keys

```solidity

// keccak256("AddressPermissions[]")
bytes32 constant _LSP6KEY_ADDRESSPERMISSIONS_ARRAY = 0xdf30dba06db6a30e65354d9a64c609861f089545ca58c6b4dbe31a5f338cb0e3;

// AddressPermissions[index]
bytes16 constant _LSP6KEY_ADDRESSPERMISSIONS_ARRAY_PREFIX = 0xdf30dba06db6a30e65354d9a64c60986;

// AddressPermissions:...
bytes6 constant _LSP6KEY_ADDRESSPERMISSIONS_PREFIX = 0x4b80742de2bf;

// bytes6(keccak256("AddressPermissions")) + bytes4(keccak256("DaoPermissions")) + bytes2(0)
// AddressPermissions:DaoPermissions:<address> --> bytes32
bytes12 constant _LSP6KEY_ADDRESSPERMISSIONS_DAOPERMISSIONS_PREFIX = 0x4b80742de2bfb3cc0e490000;
```
Here we are creating a new LSP6 key permission that will allow you to assign various DAO permissions to Universal Profile addresses. 

