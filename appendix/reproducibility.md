---
layout: default
title: Reproducibility
---

# Reproducibility

이 페이지는 공개된 코드와 데이터가 프로젝트의 어느 단계에 연결되는지 정리합니다.

## 실행 환경

| Item | Value |
|---|---|
| TCAD version | Synopsys Sentaurus T-2022.03 |
| Workflow | Sentaurus Workbench → SProcess → SDevice → SVisual |
| Device | 2D planar enhancement-mode pMOSFET |
| Main bias | Vg = -2.5 V, Vd = -1.0 V |
| Comparison | Workbench split and DOE result table |

## 재현 순서

1. SimpleMOS 기반 공정에서 body를 NWell/Phosphorus로 변경합니다.
2. LDD와 Source/Drain implant를 BF2 기반 p-type 조건으로 변경합니다.
3. RTA와 Spacer를 Workbench parameter로 연결합니다.
4. 주요 공정 단계 직후 TDR checkpoint를 저장해 구조를 확인합니다.
5. SDevice에서 negative drain/gate bias sweep을 수행합니다.
6. SVisual에서 drain current magnitude를 사용해 Vtgm, SS, gm, Ion과 Ioff를 추출합니다.
7. Workbench split 결과를 수치 비교와 Ion/Ioff–SS plot 방식으로 평가합니다.

## 코드 매핑

| Stage | Public File | Purpose |
|---|---|---|
| Process conversion | `source/sprocess/pmos_process_modifications.cmd` | NWell·BF2 implant·RTA·Spacer 변경 |
| Structure verification | `source/sprocess/tdr_checkpoints.cmd` | 13단계 TDR 저장 |
| Electrical sweep | `source/sdevice/pmos_bias_sweep.cmd` | pMOS negative bias goal |
| Metric extraction | `source/svisual/pmos_metric_extraction.tcl` | `|Id|`, Vtgm, SS, gm, Ion, Ioff |
| Preliminary practice | `source/coursework/tdr_checkpoint_example.cmd` | 선행 실습 checkpoint 예시 |

## 데이터 매핑

| Data | Location | Description |
|---|---|---|
| Final candidate comparison | `results/final_results.csv` | Numerical and plot-based final candidates |
| Final report | `report/pmos_process_optimization_report.pdf` | 개인정보를 제거한 공개 보고서 |
| Process images | `figures/overview/` | 13-step flow, final structure, transfer curve |
| Optimization images | `figures/method1/`, `figures/method2/` | 각 split과 최종 후보 비교 |

## 공개 범위

현재 `source/`에는 최종 보고서에 제시된 수정·추출 command를 기능별로 정리했습니다. 전체 mesh, physics, electrode, solve block을 포함한 원본 Workbench project command는 포함하지 않습니다.

따라서 현재 공개 자료는 다음 작업을 재현하는 데 초점을 둡니다.

- nMOS-to-pMOS 변환 논리
- 주요 공정 parameterization
- pMOS bias 방향
- current magnitude 처리
- metric extraction 기준
- 최종 후보 데이터 비교

- [TCAD 코드 확인](../source/)
- [연구 진행 Data](../results/)
- [연구 상세보기](../study/)
