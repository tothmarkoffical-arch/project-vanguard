# TothMark | AI Ideas, Prototypes & Evidence

[Magyar bemutato](README.hu.md)

I develop ideas about how AI systems could become more reliable, safer, and more useful. My focus is problem framing, system concepts, and deciding what evidence would justify an idea. I use AI assistance for implementation and testing; this portfolio does not present that assistance as independent engineering work by me.

## Projects

| Project | Question | Status | Evidence |
| --- | --- | --- | --- |
| [RED/BLUE answer pipeline](projects/red-blue-team/README.md) | Can independent drafting, criticism, and auditing reduce answer errors? | Tested exploratory prototype; development paused | Two live code tasks: ties with Single AI, at higher cost |
| [Pre-action AI safety review](projects/ai-safety/README.md) | Can proposed answers and actions be reviewed for risk before execution? | Early concept | No implemented safety system or measured results yet |
| [Prompt-driven image workflows](projects/image-workflows/README.md) | Can repeatable prompt workflows improve image editing and upscale results? | Early concept | Visual examples and comparisons have not been published yet |

## Featured case: RED/BLUE

The first concept became a working, AI-assisted prototype with a visible pipeline and executable evaluation. The result did not establish superiority, and that result is preserved.

| Held-out functional checks | Single AI | Full RED/BLUE |
| --- | ---: | ---: |
| Dependency scheduler | 48/49 | 48/49 |
| Idempotent transaction processor | 49/49 | 49/49 |

**Finding:** no quality gain on these two tasks. The full pipeline used about 7.5 times the model-call time and 5.9 times the estimated method cost of the Single baseline. Two tasks are not a general verdict on multi-agent systems.

[Read the case study](projects/red-blue-team/README.md) · [Inspect the recorded results](evidence/red-blue-v11.json) · [Check summary consistency without an API](repro/README.md)

The public archive contains reviewed summaries, stage timing, recorded totals, and fingerprints of privately archived answers. Raw answers, code, detailed logs, held-out tests, and reference solutions remain private, so these grades cannot be independently re-scored from this package. This is a documented exploratory result, not independent proof of performance.

## My Contribution

The original problem, RED/BLUE concept, reliability goals, and direction of exploration came from me. Coding, test construction, debugging, and documentation were AI-assisted. The safety and image-workflow entries are proposed directions, not completed products or demonstrated inventions.

See [contributions and boundaries](docs/contributions.md) and [evaluation methodology](docs/methodology.md).

## Evidence Standard

I distinguish ideas, prototypes, and measured findings. I keep ties, failures, cost, and limitations visible. Improvements on development examples are not treated as proof on new tasks. A concept stays a hypothesis until its tests support it.

## Contact

Questions and constructive feedback are welcome through [GitHub issues](https://github.com/tothmarkoffical-arch/project-vanguard/issues). My public profile is [tothmarkoffical-arch](https://github.com/tothmarkoffical-arch).
