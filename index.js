import * as perfData from './perf-track/src/page-data/may-2020/index.js';

const log = (...msgs) => console.log(
    ...msgs.map(
        (msg) => [msg, '\n'],
    ).flat(),
);

const ranges = [
    [0, 200],
    [200, 400],
    [400, 600],
    [600, 800],
    [800, 1000],
    [1000, Infinity]
];

/**
 * Modifying prototypes is useful, forget what grandpa told you.
 */
Array.prototype.sum = function() {
    return Number(
        this.reduce(
            (a, b) => a + b
        )
    );
}

Array.prototype.sortIndex = function(index = 0) {
    return this.sort(
        (a, b) => b[index] - a[index],
    );
}

/**
 * Compile all framework data into one data structure.
 */
const sourceData = {};
for (const [category, frameworkData] of Object.entries(perfData))
    Object.assign(sourceData, frameworkData);

/**
 * Simplified structure. Form:
 * 
 * {
 *  React: [...],
 *  Gatsby: [...],
 *  ...
 * }
 */
const dataTable = {};

/**
 * Pre-process data into `dataTable`.
 */
for (
    const [
            framework, 
            { jsBytesBreakdown: { data: { datasets } } },
        ] of Object.entries(sourceData)
    ) {
    
    dataTable[framework] = datasets[0].data;
}

const iterateOverData = (fn) => Object.entries(dataTable).map(
    ([framework, dataSeries]) => [framework, fn(dataSeries)]
);

/**
 * Get the percent of framework observations which *definitely* contain more
 * than ${threshold} kB in JS. The lower bound is used for this reason.
 */
const pctAboveKilobyteThreshold = (threshold = 0) => iterateOverData(
    (values) => {
        const included = ranges.filter(
            ([lower, upper]) =>  lower >= threshold
        );

        const sliceIndex = ranges.length - included.length;
        return Number(
            values.slice(sliceIndex).sum().toFixed(2)
        );
    }
);

/**
 * Get the lower bound on the JS size averages by framework (kB)
 */
const avgJSKilobytes = () => iterateOverData(
    (percentages) => {
        let i = 0;
        const weights = [];
    
        for (const [lower, upper] of ranges)
            weights.push(lower * percentages[i++] / 100);
        
        return Number(weights.sum().toFixed(2));
    }
);

/**
 * Get the lower bounds on the total JS size by framework (GB) 
 */
const totalJSGigabytes = () => {
    let i = 0;
    const avgs = avgJSKilobytes().map(
        ([framework, average]) => {
            const { sampleSize } = sourceData[framework];      
            return average * sampleSize.framework / 1e6;
        }
    );

    return iterateOverData(
        (values) => Number(avgs[i++].toFixed(2)),
    );
};

const gigabytesSorted = totalJSGigabytes().sortIndex(1);

log(
    `% of observed samples with JS >= 400kB, by framework`,
    pctAboveKilobyteThreshold(400).sortIndex(1),

    `avg JS kB, by framework (lower bound)`,
    avgJSKilobytes().sortIndex(1),
    
    `total JS GB, by framework (lower bound)`,
    gigabytesSorted
);

/** Read JS GB for React from table. */
const reactGigabytes = gigabytesSorted[0][1];

/** Compute total JS GB from table. */
let totalGigabytes = 0;
for (const [framework, gigabytes] of gigabytesSorted)
    totalGigabytes += gigabytes;

log(`Total React JS in sample (lower bound): ${reactGigabytes}GB`);
log(`Total JS GB in sample (lower bound): ${totalGigabytes}GB`);