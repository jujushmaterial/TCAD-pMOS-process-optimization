---
layout: default
title: TCAD Source Code
---

# TCAD Source Code

최종 보고서에 포함된 Sentaurus command를 기능별로 정리한 코드입니다. 아래 버튼을 누르면 페이지 이동 없이 VS Code형 창에서 전체 파일을 확인할 수 있습니다.

> 현재 공개된 코드는 보고서에 제시된 수정·추출 command입니다. 전체 mesh, physics, electrode, solve block을 포함한 원본 Workbench project command는 아닙니다.

## pMOS 공정 변환

<div class="code-action-grid">
  <button class="code-open-button" type="button" data-code-file="source/sprocess/pmos_process_modifications.cmd" data-code-title="pMOS SProcess modifications">
    <strong>SProcess modifications</strong>
    <span>NWell·BF2 LDD/S-D·RTA·Spacer parameterization</span>
  </button>
  <button class="code-open-button" type="button" data-code-file="source/sprocess/tdr_checkpoints.cmd" data-code-title="pMOS TDR checkpoints">
    <strong>TDR checkpoints</strong>
    <span>wafer initialization부터 final device까지 13단계 저장</span>
  </button>
</div>

## 전기적 해석

<div class="code-action-grid">
  <button class="code-open-button" type="button" data-code-file="source/sdevice/pmos_bias_sweep.cmd" data-code-title="pMOS SDevice bias sweep">
    <strong>SDevice bias sweep</strong>
    <span>negative drain and gate bias goal</span>
  </button>
  <button class="code-open-button" type="button" data-code-file="source/svisual/pmos_metric_extraction.tcl" data-code-title="pMOS SVisual metric extraction">
    <strong>SVisual metric extraction</strong>
    <span>|Id| 처리와 Vtgm·SS·gm·Ion·Ioff 자동 추출</span>
  </button>
</div>

## 선행 실습 코드

<div class="code-action-grid">
  <button class="code-open-button" type="button" data-code-file="source/coursework/tdr_checkpoint_example.cmd" data-code-title="Preliminary TDR checkpoint example">
    <strong>Preliminary TDR example</strong>
    <span>선행 TCAD 실습에서 사용한 checkpoint 예시</span>
  </button>
</div>

## 코드 흐름

```text
SProcess modifications
→ TDR structure verification
→ SDevice negative-bias Id–Vg sweep
→ SVisual metric extraction
→ Workbench DOE comparison
```

- [SProcess 구현 설명](../guide/04_sprocess_implementation.html)
- [SDevice bias 설명](../guide/05_sdevice_bias_setup.html)
- [SVisual extraction 설명](../guide/06_svisual_metric_extraction.html)
- [공정 구조 검증](../guide/07_process_flow_visualization.html)
