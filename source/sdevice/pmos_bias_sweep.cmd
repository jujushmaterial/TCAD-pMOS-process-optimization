# Report-derived pMOS bias goals.
# Workbench parameters:
#   @Vd@ = -0.05 or -1.0 V
#   @Vg@ = -2.5 V

Goal { Name="drain" Voltage=@Vd@ }
Goal { Name="gate" Voltage=@Vg@ }

# The final report also reduced InitialStep, Increment, and MaxStep
# in the Quasistationary gate sweep so that Vg=0 V and Vg=-2.5 V
# were represented accurately in the generated data.
