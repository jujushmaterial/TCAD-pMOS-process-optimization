# 04. SProcess Modifications

## Main Changes

| Process Block | Modification |
|---|---|
| Well initialization | `Boron` to `Phosphorus` |
| LDD implant | `Arsenic` to `BF2` |
| S/D implant | `Phosphorus` to `BF2` |
| LDD energy | Fixed value to `@LDD_E@` |
| S/D dose | Fixed value to `@SD_Dose@` |
| S/D energy | Fixed value to `@SD_E@` |
| RTA time | Fixed value to `@RTA@` |
| Spacer deposition | Fixed value to `@Spacer_Dep@` |
| Spacer etch | Linked to spacer deposition |

## Spacer Parameterization

```text
deposit thickness = Spacer_Dep × Lg
etch thickness = (Spacer_Dep + 0.05) × Lg
```

The deposition and etch values were linked to prevent unstable spacer structures when the parameter changed.

## TDR Checkpoints

Thirteen checkpoints were added to inspect the structure from NWell formation to the final contact definition.

**Summary:**  
SProcess was parameterized so the main junction, anneal, and spacer conditions could be compared in Workbench.
