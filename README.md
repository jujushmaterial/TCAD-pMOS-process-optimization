# P-type MOSFET Process Optimization using Sentaurus TCAD

기존 Sentaurus SimpleMOS nMOS 예제를 pMOS 공정으로 변환하고, LDD, Source/Drain, RTA, Spacer 조건을 최적화한 프로젝트입니다.

개별 지표를 비교하는 방법과 `Ion/Ioff–SS` 그래프를 이용하는 방법을 각각 적용했습니다. 두 결과를 비교한 뒤, 누설전류와 SS를 낮추면서 목표 Ion을 만족한 그래프 기반 조건을 최종 소자로 선정했습니다.

**Summary:**  
This project converts a Sentaurus SimpleMOS nMOS process into a pMOS flow and optimizes LDD, source/drain, RTA, and spacer conditions. Numerical comparison and `Ion/Ioff–SS` plot-based selection are compared to identify a balanced final device.

---

## Project Information

| Item | Description |
|---|---|
| Course | Semiconductor Integrated Process |
| Period | 2026.03–2026.06 |
| Tool | Synopsys Sentaurus TCAD T-2022.03 |
| Modules | Sentaurus Workbench, SProcess, SDevice, SVisual |
| Device | Planar pMOSFET |
| Status | Completed |

---

## Project Objectives

- Convert the SimpleMOS nMOS flow into a pMOS process
- Visualize the structure through the process sequence
- Extract `Vtgm`, `Ion`, `Ioff`, `SS`, and `gm`
- Compare numerical and plot-based optimization methods
- Select a balanced device within the target range

---

## Core Engineering Modifications

- PWell/Boron to NWell/Phosphorus
- n-type LDD and S/D implants to BF2-based p-type implants
- Negative gate and drain bias for pMOS operation
- Absolute-current processing for pMOS transfer curves
- Automatic extraction of `Ion`, `Ioff`, `Vg0_actual`, and `VgIon_actual`
- Parameterization of LDD, S/D, RTA, and spacer conditions

---

## Final Device

The final condition was selected through the `Ion/Ioff–SS` plot-based method.

| Parameter | Value |
|---|---:|
| Lg | 0.25 |
| GOxTime | 10 |
| NWell | `1e17 cm⁻³` |
| LDD_Dose | `3e13 cm⁻²` |
| LDD_E | 3 keV |
| SD_Dose | `5e16 cm⁻²` |
| SD_E | 10 keV |
| RTA | 3 s |
| Spacer_Dep | 0.30 |

| Metric at Vd = -1.0 V | Result |
|---|---:|
| Vtgm | -1.1421 V |
| Ion | `1.35e-04 A/µm` |
| Ioff | `4.93e-16 A/µm` |
| SS | 85.181 mV/dec |
| gm | `9.91e-05` |

---

## Project Page

[View Project Page](https://jujushmaterial.github.io/sentaurus-pmos-process-optimization/)

---

## Detailed Documents

| Document | Description |
|---|---|
| [01. Project Overview](./docs/01_project_overview.md) | Project scope and workflow |
| [02. Preliminary Coursework](./docs/02_preliminary_coursework.md) | Early Sentaurus practice |
| [03. nMOS-to-pMOS Conversion](./docs/03_nmos_to_pmos_conversion.md) | Device and process polarity conversion |
| [04. SProcess Modifications](./docs/04_sprocess_modifications.md) | Implant, RTA, spacer, and TDR changes |
| [05. SDevice Bias Setup](./docs/05_sdevice_bias_setup.md) | pMOS bias and sweep configuration |
| [06. SVisual Metric Extraction](./docs/06_svisual_metric_extraction.md) | Current processing and metric extraction |
| [07. Process Flow Visualization](./docs/07_process_flow_visualization.md) | Thirteen process checkpoints |
| [08. Optimization Targets and Strategy](./docs/08_optimization_targets_and_strategy.md) | Targets, variables, and search sequence |
| [09. Method 1 – Numerical Optimization](./docs/09_method1_numerical_optimization.md) | Stepwise selection using extracted values |
| [10. Method 2 – Ion/Ioff–SS Optimization](./docs/10_method2_ion_ioff_ss_optimization.md) | Multi-objective candidate selection |
| [11. Method Comparison](./docs/11_optimization_method_comparison.md) | Comparison of the two selected devices |
| [12. Final Device and Results](./docs/12_final_device_and_results.md) | Final condition and target verification |
| [13. Limitations and Next Steps](./docs/13_limitations_and_next_steps.md) | Search-space limitations and future work |

---

## Report

The public PDF report will be uploaded later to:

```text
report/pmos_process_optimization_report.pdf
```

Upload guidance is provided in [`report/README.md`](./report/README.md).

---

## Repository Structure

```text
sentaurus-pmos-process-optimization/
├── README.md
├── index.md
├── docs/
├── figures/
├── results/
├── report/
└── src/
```
