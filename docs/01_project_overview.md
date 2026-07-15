# 01. Project Overview

## Purpose

The project converts the Sentaurus SimpleMOS nMOS example into a pMOS process and optimizes its electrical characteristics.

## Main Tasks

- Rebuild the process for pMOS operation
- Verify the transfer curve
- Parameterize major process variables
- Extract performance metrics
- Compare two optimization methods
- Select a final device within the target range

## Main Workflow

```text
Preliminary Sentaurus practice
→ nMOS-to-pMOS conversion
→ process and bias verification
→ metric extraction
→ numerical optimization
→ Ion/Ioff–SS optimization
→ final device comparison
```

## Main Result

The plot-based condition was selected because it reduced Ioff and SS while maintaining sufficient Ion.

**Summary:**  
This project combines process conversion, DOE analysis, automated extraction, and multi-objective optimization.
