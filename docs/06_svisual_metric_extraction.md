# 06. SVisual Metric Extraction

## Absolute Current

pMOS drain current may appear with a negative sign. The current list was converted to absolute magnitude before extraction.

```tcl
set Ids {}
foreach i $IdsRaw {
    lappend Ids [expr {abs($i)}]
}
```

## Extracted Metrics

- `Vtgm`
- `Id`
- `SS`
- `gm`
- `Ioff`
- `Imin`
- `Ion`
- `Imax`
- `Vg0_actual`
- `VgIon_actual`

## Nearest-Point Search

The script searches the gate-voltage list for the points closest to:

```text
Vg = 0 V
Vg = -2.5 V
```

The current and actual voltage are printed to Workbench for verification.

**Summary:**  
SVisual was extended to extract pMOS metrics and verify the exact gate voltage used for Ion and Ioff.
