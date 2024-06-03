import type { CustomThemeConfig } from "@skeletonlabs/tw-plugin";

export const ZappyDocTheme: CustomThemeConfig = {
    name: "zappy-doc-theme",
    properties: {
        // =~= Theme Properties =~=
        "--theme-font-family-base": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
        "--theme-font-family-heading": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
        "--theme-font-color-base": "0 0 0",
        "--theme-font-color-dark": "255 255 255",
        "--theme-rounded-base": "9999px",
        "--theme-rounded-container": "8px",
        "--theme-border-base": "2px",
        // =~= Theme On-X Colors =~=
        "--on-primary": "255 255 255",
        "--on-secondary": "255 255 255",
        "--on-tertiary": "0 0 0",
        "--on-success": "0 0 0",
        "--on-warning": "0 0 0",
        "--on-error": "255 255 255",
        "--on-surface": "255 255 255",
        // =~= Theme Colors  =~=
        // primary | #0091d3
        "--color-primary-50": "217 239 248", // #d9eff8
        "--color-primary-100": "204 233 246", // #cce9f6
        "--color-primary-200": "191 228 244", // #bfe4f4
        "--color-primary-300": "153 211 237", // #99d3ed
        "--color-primary-400": "77 178 224", // #4db2e0
        "--color-primary-500": "0 145 211", // #0091d3
        "--color-primary-600": "0 131 190", // #0083be
        "--color-primary-700": "0 109 158", // #006d9e
        "--color-primary-800": "0 87 127", // #00577f
        "--color-primary-900": "0 71 103", // #004767
        // secondary | #1f485e
        "--color-secondary-50": "221 228 231", // #dde4e7
        "--color-secondary-100": "210 218 223", // #d2dadf
        "--color-secondary-200": "199 209 215", // #c7d1d7
        "--color-secondary-300": "165 182 191", // #a5b6bf
        "--color-secondary-400": "98 127 142", // #627f8e
        "--color-secondary-500": "31 72 94", // #1f485e
        "--color-secondary-600": "28 65 85", // #1c4155
        "--color-secondary-700": "23 54 71", // #173647
        "--color-secondary-800": "19 43 56", // #132b38
        "--color-secondary-900": "15 35 46", // #0f232e
        // tertiary | #fffc9a
        "--color-tertiary-50": "255 255 240", // #fffff0
        "--color-tertiary-100": "255 254 235", // #fffeeb
        "--color-tertiary-200": "255 254 230", // #fffee6
        "--color-tertiary-300": "255 254 215", // #fffed7
        "--color-tertiary-400": "255 253 184", // #fffdb8
        "--color-tertiary-500": "255 252 154", // #fffc9a
        "--color-tertiary-600": "230 227 139", // #e6e38b
        "--color-tertiary-700": "191 189 116", // #bfbd74
        "--color-tertiary-800": "153 151 92", // #99975c
        "--color-tertiary-900": "125 123 75", // #7d7b4b
        // success | #91e316
        "--color-success-50": "239 251 220", // #effbdc
        "--color-success-100": "233 249 208", // #e9f9d0
        "--color-success-200": "228 248 197", // #e4f8c5
        "--color-success-300": "211 244 162", // #d3f4a2
        "--color-success-400": "178 235 92", // #b2eb5c
        "--color-success-500": "145 227 22", // #91e316
        "--color-success-600": "131 204 20", // #83cc14
        "--color-success-700": "109 170 17", // #6daa11
        "--color-success-800": "87 136 13", // #57880d
        "--color-success-900": "71 111 11", // #476f0b
        // warning | #EAB308
        "--color-warning-50": "252 244 218", // #fcf4da
        "--color-warning-100": "251 240 206", // #fbf0ce
        "--color-warning-200": "250 236 193", // #faecc1
        "--color-warning-300": "247 225 156", // #f7e19c
        "--color-warning-400": "240 202 82", // #f0ca52
        "--color-warning-500": "234 179 8", // #EAB308
        "--color-warning-600": "211 161 7", // #d3a107
        "--color-warning-700": "176 134 6", // #b08606
        "--color-warning-800": "140 107 5", // #8c6b05
        "--color-warning-900": "115 88 4", // #735804
        // error | #D41976
        "--color-error-50": "249 221 234", // #f9ddea
        "--color-error-100": "246 209 228", // #f6d1e4
        "--color-error-200": "244 198 221", // #f4c6dd
        "--color-error-300": "238 163 200", // #eea3c8
        "--color-error-400": "225 94 159", // #e15e9f
        "--color-error-500": "212 25 118", // #D41976
        "--color-error-600": "191 23 106", // #bf176a
        "--color-error-700": "159 19 89", // #9f1359
        "--color-error-800": "127 15 71", // #7f0f47
        "--color-error-900": "104 12 58", // #680c3a
        // surface | #374368
        "--color-surface-50": "225 227 232", // #e1e3e8
        "--color-surface-100": "215 217 225", // #d7d9e1
        "--color-surface-200": "205 208 217", // #cdd0d9
        "--color-surface-300": "175 180 195", // #afb4c3
        "--color-surface-400": "115 123 149", // #737b95
        "--color-surface-500": "55 67 104", // #374368
        "--color-surface-600": "50 60 94", // #323c5e
        "--color-surface-700": "41 50 78", // #29324e
        "--color-surface-800": "33 40 62", // #21283e
        "--color-surface-900": "27 33 51", // #1b2133
    },
};
