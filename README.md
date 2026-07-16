# P-type MOSFET Process Optimization using Sentaurus TCAD

기존 Sentaurus `SimpleMOS` nMOS 예제를 **pMOS 공정으로 변환**하고, LDD, Source/Drain, RTA, Spacer 조건을 조정해 전기적 특성을 최적화한 프로젝트입니다.

SProcess, SDevice, SVisual command를 직접 수정했으며, 다음 두 방식으로 후보를 비교했습니다.

1. `Ion`, `Ioff`, `SS`, `Vtgm`의 수치와 변화율을 단계적으로 비교
2. `Ion/Ioff–SS` 평면에서 후보 분포와 trade-off를 비교

최종적으로 두 번째 방법에서 선택한 조건이 목표 Ion을 만족하면서 Ioff와 SS를 더 낮게 유지해 최종 소자로 선정되었습니다.

**Summary:**  
This project converts a Sentaurus SimpleMOS nMOS example into a pMOS process and compares numerical and `Ion/Ioff–SS` plot-based optimization methods. The final condition was selected for its balanced drive current, leakage, and subthreshold performance.

---

## Results at a Glance

| Item | Final Result |
|---|---:|
| Final method | `Ion/Ioff–SS` plot-based selection |
| LDD | `3e13 cm^-2`, 3 keV |
| Source/Drain | `5e16 cm^-2`, 10 keV |
| RTA | 3 s at 1000 °C |
| Spacer_Dep | 0.30 |
| Ion | `1.35e-04 A/µm` |
| Ioff | `4.93e-16 A/µm` |
| SS | 85.181 mV/dec |
| Vtgm | -1.1421 V |

![Final comparison](./figures/overview/final_method_comparison.png)

*Figure. 수치 비교 방식과 `Ion/Ioff–SS` 방식에서 선택한 최종 후보의 조건과 성능 비교.*

---

## What Was Implemented

- PWell/Boron 기반 nMOS 초기 구조를 NWell/Phosphorus 기반 pMOS 구조로 변경
- Arsenic/Phosphorus implant를 BF2 기반 LDD와 p+ Source/Drain implant로 변경
- `LDD_E`, `SD_Dose`, `SD_E`, `RTA`, `Spacer_Dep` parameter 추가
- pMOS용 음전압 gate/drain sweep 구성
- pMOS drain current 절대값 처리
- `Vtgm`, `Id`, `SS`, `gm`, `Ion`, `Ioff`, 실제 추출 gate voltage 자동 출력
- 13개 TDR checkpoint를 이용한 공정 구조 확인
- 수치 비교와 `Ion/Ioff–SS` 그래프 기반 최적화 결과 비교

---

## Read the Project

| Page | Description |
|---|---|
| [Project Page](https://jujushmaterial.github.io/sentaurus-pmos-process-optimization/) | 프로젝트 목적, 구현 내용, 최종 결과를 한눈에 확인 |
| [Detailed Navigation](./guide/00_navigation.md) | 모든 과정 문서와 source code 안내 |
| [Preliminary Coursework](./guide/02_preliminary_coursework.md) | 최종 과제 전 TCAD 실습 |
| [nMOS-to-pMOS Conversion](./guide/03_nmos_to_pmos_conversion.md) | 구조, dopant, bias 변경 이유 |
| [SProcess Implementation](./guide/04_sprocess_implementation.md) | well, implant, RTA, spacer command |
| [SDevice Bias Setup](./guide/05_sdevice_bias_setup.md) | pMOS bias와 transfer curve 검증 |
| [SVisual Metric Extraction](./guide/06_svisual_metric_extraction.md) | 전류 처리와 Ion/Ioff 추출 코드 |
| [Process Flow Visualization](./guide/07_process_flow_visualization.md) | 13단계 TDR 공정 검증 |
| [Optimization Method 1](./guide/08_method1_numerical_optimization.md) | 수치 비교 기반 단계적 최적화 |
| [Optimization Method 2](./guide/09_method2_plot_optimization.md) | `Ion/Ioff–SS` 그래프 기반 최적화 |
| [Final Comparison](./guide/10_method_comparison_and_final.md) | 두 방법 비교와 최종 소자 |
| [Limitations](./guide/11_limitations_and_next_steps.md) | 탐색 범위의 한계와 개선 방향 |
| [Public Report](./report/pmos_process_optimization_report.pdf) | 개인정보 제거 최종 보고서 |

---

## Source Code

| File | Description |
|---|---|
| [`source/sprocess/pmos_process_modifications.cmd`](./source/sprocess/pmos_process_modifications.cmd) | 보고서에서 변경한 SProcess 핵심 command |
| [`source/sprocess/tdr_checkpoints.cmd`](./source/sprocess/tdr_checkpoints.cmd) | 13단계 TDR 저장 command |
| [`source/sdevice/pmos_bias_sweep.cmd`](./source/sdevice/pmos_bias_sweep.cmd) | pMOS drain/gate sweep 설정 |
| [`source/svisual/pmos_metric_extraction.tcl`](./source/svisual/pmos_metric_extraction.tcl) | pMOS 전류 처리와 성능 지표 자동 추출 |
| [`source/coursework/tdr_checkpoint_example.cmd`](./source/coursework/tdr_checkpoint_example.cmd) | 선행 실습에서 사용한 TDR 저장 예시 |

> `source/`의 코드는 최종 보고서에 제시된 수정·추출 command를 기능별로 정리한 것입니다. 전체 mesh, physics, electrode, solve block을 포함한 원본 project command는 아닙니다.

---

## Repository Structure

```text
sentaurus-pmos-process-optimization/
├── README.md
├── index.md
├── guide/
│   ├── 00_navigation.md
│   ├── 01_project_overview.md
│   ├── 02_preliminary_coursework.md
│   ├── 03_nmos_to_pmos_conversion.md
│   ├── 04_sprocess_implementation.md
│   ├── 05_sdevice_bias_setup.md
│   ├── 06_svisual_metric_extraction.md
│   ├── 07_process_flow_visualization.md
│   ├── 08_method1_numerical_optimization.md
│   ├── 09_method2_plot_optimization.md
│   ├── 10_method_comparison_and_final.md
│   └── 11_limitations_and_next_steps.md
├── figures/
│   ├── overview/
│   ├── preliminary/
│   ├── method1/
│   ├── method2/
│   └── code/
├── source/
│   ├── coursework/
│   ├── sprocess/
│   ├── sdevice/
│   └── svisual/
├── results/
│   └── final_results.csv
└── report/
    └── pmos_process_optimization_report.pdf
```
