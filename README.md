See [index.js](index.js), which uses [PerfTrack
data](https://github.com/GoogleChromeLabs/perf-track) to understand the
distribution of bundle sizes for various JS frameworks.

The output is below:
```none
{
  AMP: {
    '0-200 kB': '37.29%',
    '200-400 kB': '42.84%',
    '400-600 kB': '8.63%',
    '600-800 kB': '4.84%',
    '800-1000 kB': '2.35%',
    '1000-Infinity kB': '4.05%'
  },
  Angular: {
    '0-200 kB': '0.94%',
    '200-400 kB': '5.93%',
    '400-600 kB': '10.02%',
    '600-800 kB': '12.85%',
    '800-1000 kB': '12.88%',
    '1000-Infinity kB': '57.37%'
  },
  Ember: {
    '0-200 kB': '0.05%',
    '200-400 kB': '0.59%',
    '400-600 kB': '1.29%',
    '600-800 kB': '14.31%',
    '800-1000 kB': '5.45%',
    '1000-Infinity kB': '78.31%'
  },
  Polymer: {
    '0-200 kB': '25.36%',
    '200-400 kB': '19.61%',
    '400-600 kB': '17.12%',
    '600-800 kB': '13.46%',
    '800-1000 kB': '6.93%',
    '1000-Infinity kB': '17.52%'
  },
  Preact: {
    '0-200 kB': '1.5%',
    '200-400 kB': '6.75%',
    '400-600 kB': '17.1%',
    '600-800 kB': '17.7%',
    '800-1000 kB': '15.37%',
    '1000-Infinity kB': '41.58%'
  },
  React: {
    '0-200 kB': '1.62%',
    '200-400 kB': '5.9%',
    '400-600 kB': '10.53%',
    '600-800 kB': '10.97%',
    '800-1000 kB': '12.35%',
    '1000-Infinity kB': '58.63%'
  },
  'Next.js': {
    '0-200 kB': '2.89%',
    '200-400 kB': '8.45%',
    '400-600 kB': '14.35%',
    '600-800 kB': '12.94%',
    '800-1000 kB': '27.81%',
    '1000-Infinity kB': '33.56%'
  },
  Gatsby: {
    '0-200 kB': '9.09%',
    '200-400 kB': '19.44%',
    '400-600 kB': '18.48%',
    '600-800 kB': '14.54%',
    '800-1000 kB': '11.47%',
    '1000-Infinity kB': '26.98%'
  },
  'Create React App': {
    '0-200 kB': '5.38%',
    '200-400 kB': '10.84%',
    '400-600 kB': '14%',
    '600-800 kB': '13.41%',
    '800-1000 kB': '11.32%',
    '1000-Infinity kB': '45.04%'
  },
  Svelte: {
    '0-200 kB': '20.41%',
    '200-400 kB': '21.96%',
    '400-600 kB': '11.89%',
    '600-800 kB': '16.8%',
    '800-1000 kB': '6.72%',
    '1000-Infinity kB': '22.22%'
  },
  Sapper: {
    '0-200 kB': '40.91%',
    '200-400 kB': '20.45%',
    '400-600 kB': '10.23%',
    '600-800 kB': '9.09%',
    '800-1000 kB': '6.82%',
    '1000-Infinity kB': '12.5%'
  },
  Vue: {
    '0-200 kB': '5.66%',
    '200-400 kB': '17.02%',
    '400-600 kB': '16.91%',
    '600-800 kB': '14.66%',
    '800-1000 kB': '14.01%',
    '1000-Infinity kB': '31.74%'
  },
  'Nuxt.js': {
    '0-200 kB': '5.81%',
    '200-400 kB': '16.25%',
    '400-600 kB': '17.73%',
    '600-800 kB': '16.28%',
    '800-1000 kB': '13.88%',
    '1000-Infinity kB': '30.05%'
  }
} 

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