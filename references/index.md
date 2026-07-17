---
layout: default
title: References
---

# References

이 페이지는 pMOS 공정 변환과 Sentaurus TCAD 구현을 이해하는 데 사용한 프로젝트 내부 자료와 공개 문서를 정리합니다.

## 프로젝트 내부 자료

- [최종 공개 보고서](../report/pmos_process_optimization_report.pdf)
- [연구 상세보기](../study/)
- [nMOS-to-pMOS Conversion](../guide/03_nmos_to_pmos_conversion.html)
- [SProcess Implementation](../guide/04_sprocess_implementation.html)
- [SDevice Bias Setup](../guide/05_sdevice_bias_setup.html)
- [SVisual Metric Extraction](../guide/06_svisual_metric_extraction.html)
- [Optimization Method Comparison](../guide/10_method_comparison_and_final.html)

## 기술 배경

- Synopsys Sentaurus Workbench, SProcess, SDevice, SVisual documentation
- Sentaurus SimpleMOS tutorial structure and process flow
- MOSFET body polarity, p-type implant, negative-bias pMOS transfer characteristics
- LDD, Source/Drain junction, RTA, spacer와 short-channel/leakage trade-off
- Ion, Ioff, SS, Vtgm, gm 및 Ion/Ioff 기반 성능 비교

## 이 프로젝트에서의 역할

| Reference Area | Project Role |
|---|---|
| SimpleMOS tutorial | nMOS baseline과 Workbench workflow의 출발점 |
| pMOS device physics | body·dopant·bias 방향 변환의 근거 |
| SProcess | NWell, BF2 implant, anneal, spacer parameterization |
| SDevice | negative drain/gate sweep 구성 |
| SVisual | current magnitude 처리와 metric extraction |
| Multi-metric comparison | numerical filtering과 Ion/Ioff–SS plot 비교 |

이 저장소는 외부 문서를 재배포하지 않고, 공개 보고서와 프로젝트 구현 결과를 중심으로 정리합니다.
