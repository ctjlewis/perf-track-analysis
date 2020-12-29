See [index.js](index.js), which uses [PerfTrack
data](https://github.com/GoogleChromeLabs/perf-track) to understand the
distribution of bundle sizes for various JS frameworks.

The output is below:
```none
% of observed samples with JS >= 400kB, by framework 
 [
  [ 'Ember', 99.36 ],
  [ 'Angular', 93.12 ],
  [ 'React', 92.48 ],
  [ 'Preact', 91.75 ],
  [ 'Next.js', 88.66 ],
  [ 'Create React App', 83.77 ],
  [ 'Nuxt.js', 77.94 ],
  [ 'Vue', 77.32 ],
  [ 'Gatsby', 71.47 ],
  [ 'Svelte', 57.63 ],
  [ 'Polymer', 55.03 ],
  [ 'Sapper', 38.64 ],
  [ 'AMP', 19.87 ]
] 
 avg JS kB, by framework (lower bound) 
 [
  [ 'Ember', 918.9 ],
  [ 'Angular', 805.78 ],
  [ 'React', 804.84 ],
  [ 'Preact', 726.86 ],
  [ 'Next.js', 710.02 ],
  [ 'Create React App', 699.1 ],
  [ 'Vue', 619.12 ],
  [ 'Nuxt.js', 612.64 ],
  [ 'Gatsby', 561.6 ],
  [ 'Svelte', 468.24 ],
  [ 'Polymer', 419.1 ],
  [ 'Sapper', 315.92 ],
  [ 'AMP', 208.54 ]
] 
 total JS GB, by framework (lower bound) 
 [
  [ 'React', 225.59 ],
  [ 'Preact', 74.97 ],
  [ 'Vue', 57.03 ],
  [ 'Angular', 17.43 ],
  [ 'Ember', 11.99 ],
  [ 'Next.js', 9.09 ],
  [ 'Create React App', 8.17 ],
  [ 'Nuxt.js', 4.68 ],
  [ 'Gatsby', 2.69 ],
  [ 'AMP', 2.06 ],
  [ 'Polymer', 0.32 ],
  [ 'Svelte', 0.18 ],
  [ 'Sapper', 0.03 ]
] 

Total React JS in sample (lower bound): 225.59GB 

Total JS GB in sample (lower bound): 414.23GB 
```