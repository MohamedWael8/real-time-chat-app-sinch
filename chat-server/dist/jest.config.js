const config = {
    preset: "ts-jest/presets/default-esm", // Use ESM preset for compatibility
    testEnvironment: "node",
    transform: {
        "^.+\\.tsx?$": ["ts-jest", { useESM: true }],
    },
    extensionsToTreatAsEsm: [".ts"],
};
export default config;
