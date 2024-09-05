/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  BASECOLORS,
  BASECOLORS_Approval,
  BASECOLORS_ApprovalForAll,
  BASECOLORS_AttributeRemoved,
  BASECOLORS_ConsecutiveTransfer,
  BASECOLORS_MetadataUpdate,
  BASECOLORS_MintPriceChanged,
  BASECOLORS_NameChanged,
  BASECOLORS_OwnershipTransferred,
  BASECOLORS_TokenAttributesUpdated,
  BASECOLORS_TokenMinted,
  BASECOLORS_TokensMinted,
  BASECOLORS_Transfer,
} from "generated";

BASECOLORS.Approval.handler(async ({ event, context }) => {
  const entity: BASECOLORS_Approval = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    approved: event.params.approved,
    tokenId: event.params.tokenId,
  };

  context.BASECOLORS_Approval.set(entity);
});


BASECOLORS.ApprovalForAll.handler(async ({ event, context }) => {
  const entity: BASECOLORS_ApprovalForAll = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    operator: event.params.operator,
    approved: event.params.approved,
  };

  context.BASECOLORS_ApprovalForAll.set(entity);
});


BASECOLORS.AttributeRemoved.handler(async ({ event, context }) => {
  const entity: BASECOLORS_AttributeRemoved = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    _tokenId: event.params._tokenId,
    traitType: event.params.traitType,
  };

  context.BASECOLORS_AttributeRemoved.set(entity);
});


BASECOLORS.ConsecutiveTransfer.handler(async ({ event, context }) => {
  const entity: BASECOLORS_ConsecutiveTransfer = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    fromTokenId: event.params.fromTokenId,
    toTokenId: event.params.toTokenId,
    from: event.params.from,
    to: event.params.to,
  };

  context.BASECOLORS_ConsecutiveTransfer.set(entity);
});


BASECOLORS.MetadataUpdate.handler(async ({ event, context }) => {
  const entity: BASECOLORS_MetadataUpdate = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    _token: event.params._token,
  };

  context.BASECOLORS_MetadataUpdate.set(entity);
});


BASECOLORS.MintPriceChanged.handler(async ({ event, context }) => {
  const entity: BASECOLORS_MintPriceChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    newMintPrice: event.params.newMintPrice,
  };

  context.BASECOLORS_MintPriceChanged.set(entity);
});


BASECOLORS.NameChanged.handler(async ({ event, context }) => {
  const entity: BASECOLORS_NameChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    _tokenId: event.params._tokenId,
    color: event.params.color,
    name: event.params.name,
  };

  context.BASECOLORS_NameChanged.set(entity);
});


BASECOLORS.OwnershipTransferred.handler(async ({ event, context }) => {
  const entity: BASECOLORS_OwnershipTransferred = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousOwner: event.params.previousOwner,
    newOwner: event.params.newOwner,
  };

  context.BASECOLORS_OwnershipTransferred.set(entity);
});


BASECOLORS.TokenAttributesUpdated.handler(async ({ event, context }) => {
  const entity: BASECOLORS_TokenAttributesUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    _tokenId: event.params._tokenId,
    keys: event.params.keys,
    values: event.params.values,
  };

  context.BASECOLORS_TokenAttributesUpdated.set(entity);
});


BASECOLORS.TokenMinted.handler(async ({ event, context }) => {
  const entity: BASECOLORS_TokenMinted = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    recipient: event.params.recipient,
    _tokenId: event.params._tokenId,
    color: event.params.color,
    name: event.params.name,
  };

  context.BASECOLORS_TokenMinted.set(entity);
});


BASECOLORS.TokensMinted.handler(async ({ event, context }) => {
  const entity: BASECOLORS_TokensMinted = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    recipient: event.params.recipient,
    colors: event.params.colors,
    names: event.params.names,
  };

  context.BASECOLORS_TokensMinted.set(entity);
});


BASECOLORS.Transfer.handler(async ({ event, context }) => {
  const entity: BASECOLORS_Transfer = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    from: event.params.from,
    to: event.params.to,
    tokenId: event.params.tokenId,
  };

  context.BASECOLORS_Transfer.set(entity);
});

