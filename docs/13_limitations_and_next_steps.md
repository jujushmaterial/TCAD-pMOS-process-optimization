# 13. Limitations and Next Steps

## Limitations

### Sequential Search

The variables were not swept in one full-factorial search. Candidate elimination reduced the number of simulations but could remove combinations that become strong after later parameter changes.

### Limited Search Space

The final result is the best condition within the evaluated split path, not a guaranteed global optimum.

### Visual Selection

The `Ion/Ioff–SS` method depends on axis range and the selected candidate region. Final decisions should be checked against the raw numerical values.

## Next Steps

- Build a structured CSV of all DOE results
- Compare valid cases using Pareto-front analysis
- Add automated ranking with target constraints
- Run a broader joint split around the strongest candidates
- Add DIBL, junction-depth, and electric-field analysis
- Upload the organized SProcess, SDevice, and SVisual source files

**Summary:**  
The current workflow is efficient and interpretable, but a broader joint search is needed to approach the global optimum.
