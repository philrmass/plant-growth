# plant-lsystem
JavaScript React website to explore L-system descriptions of plant growth 

L-systems consist of three main components
* A set of module types (i.e. A for apice, I for internode)
* A set of rules for evolving the types over a given timestep (i.e. A -> I1[+A][-A]I1A, Ix -> I2x)
* The initial structure of the plant (i.e. I1A[+A][-A]I1A)

Each module in the L-system corresponds to a section of the plant body, so as you evolve
the L-system according to the rules, it determines the new shape of the plant body as it
grows
