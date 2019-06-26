package client

import (
	"github.com/cosmos/cosmos-sdk/client/context"
	"github.com/cosmos/cosmos-sdk/codec"

	"github.com/cosmos/cosmos-sdk/x/ibc/23-commitment/merkle"
)

// CLIObject stores the key for each object fields
type CLIObject struct {
	ID                string
	ConsensusStateKey []byte
	FrozenKey         []byte

	Root merkle.Root
	Cdc  *codec.Codec
}

func (obj Object) CLI(root merkle.Root) CLIObject {
	return CLIObject{
		ID:                obj.id,
		ConsensusStateKey: obj.consensusState.Key(),
		FrozenKey:         obj.frozen.Key(),

		Root: root,
		Cdc:  obj.consensusState.Cdc(),
	}
}

func (obj CLIObject) query(ctx context.CLIContext, key []byte, ptr interface{}) (merkle.Proof, error) {
	resp, err := ctx.QueryABCI(obj.Root.RequestQuery(key))
	if err != nil {
		return merkle.Proof{}, err
	}
	proof := merkle.Proof{
		Key:   key,
		Proof: resp.Proof,
	}
	err = obj.Cdc.UnmarshalBinaryBare(resp.Value, ptr)
	return proof, err

}

func (obj CLIObject) ConsensusState(ctx context.CLIContext, root merkle.Root) (res ConsensusState, proof merkle.Proof, err error) {
	proof, err = obj.query(ctx, obj.ConsensusStateKey, &res)
	return
}

func (obj CLIObject) Frozen(ctx context.CLIContext, root merkle.Root) (res bool, proof merkle.Proof, err error) {
	proof, err = obj.query(ctx, obj.FrozenKey, &res)
	return
}

func query(ctx context.CLIContext, root merkle.Root, key []byte) ([]byte, merkle.Proof, error) {
	resp, err := ctx.QueryABCI(root.RequestQuery(key))
	if err != nil {
		return nil, merkle.Proof{}, err
	}
	proof := merkle.Proof{
		Key:   key,
		Proof: resp.Proof,
	}
	return resp.Value, proof, nil

}

func (obj CLIObject) ConsensusState(ctx context.CLIContext, root merkle.Root) (res ConsensusState, proof merkle.Proof, err error) {
	val, proof, err := query(ctx, root, obj.ConsensusStateKey)
	obj.Cdc.MustUnmarshalBinaryBare(val, &res)
	return
}

func (obj CLIObject) Frozen(ctx context.CLIContext, root merkle.Root) (res bool, proof merkle.Proof, err error) {
	val, tmproof, _, err := ctx.QueryProof(obj.FrozenKey, "ibc") // TODO
	if err != nil {
		return
	}
	proof = merkle.Proof{
		Key:   obj.FrozenKey,
		Proof: tmproof,
	}
	obj.Cdc.MustUnmarshalBinaryBare(val, &res)
	return
}
