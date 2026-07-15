# 03. nMOS-to-pMOS Conversion

## Conversion Requirements

A pMOS cannot be implemented by changing voltage signs only. The body, implant species, bias direction, and current interpretation must also change.

| Item | nMOS | pMOS |
|---|---|---|
| Body | P-type | N-type |
| Channel carrier | Electron | Hole |
| LDD | n-type | p-type |
| Source/Drain | n+ | p+ |
| Gate bias | Positive | Negative |
| Drain bias | Positive | Negative |

## Process Conversion

- Boron PWell was replaced by Phosphorus NWell.
- Arsenic LDD was replaced by BF2 LDD.
- Phosphorus S/D was replaced by BF2 S/D.
- Gate and drain sweeps were changed to negative voltage.
- Drain current was converted to absolute magnitude for comparison.

## Verification

The pMOS transfer curve showed low current near `Vg = 0 V` and increasing current as the gate voltage became more negative.

**Summary:**  
The conversion changed both physical process polarity and electrical simulation polarity.
