# 08. Optimization Targets and Strategy

## Targets

| Metric | Target |
|---|---:|
| Ion | `> 1e-5 A/µm` |
| Ioff | `< 1e-14 A/µm` |
| SS | `< 100 mV/dec` |
| Vtgm | Negative |

## Variables

- `LDD_Dose`
- `LDD_E`
- `SD_Dose`
- `SD_E`
- `RTA`
- `Spacer_Dep`

## Search Sequences

The two methods used different split orders.

```text
Method 1: LDD → RTA → Source/Drain → Spacer → Fine split
Method 2: LDD → Source/Drain → RTA → Spacer → Fine split
```

Both approaches narrowed the candidate set step by step. This reduced the number of simulations and made the effect of each process block easier to interpret.

## Two Selection Methods

### Method 1

Compare the extracted values and percentage changes directly.

### Method 2

Plot each case using:

```text
x = Ion/Ioff
y = SS
```

The preferred region is the lower-right area.

![Optimization workflow](../figures/optimization_workflow.svg)

**Summary:**  
The strategy compares two sequential search methods: direct numerical selection and multi-objective `Ion/Ioff–SS` selection.
