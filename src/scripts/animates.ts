

// 触发按钮的组合式动画
export const rotateToggleKeyframes = [
    {
        '@current': {
            scale: '1',
        },
        '#bcmnp-toggle-icon-dot': {
            opacity: '1',
        }
    },
    {
        '@current': {
            scale: '0.9',
        },
        '#bcmnp-toggle-icon-dot': {
            opacity: '0',
        }
    },
    {
        '@current': {
            scale: '0.9',
        },
        '#bcmnp-toggle-icon-dot': {
            opacity: '0',
        }
    },
    {
        '@current': {
            scale: '1',
        },
        '#bcmnp-toggle-icon-dot': {
            opacity: '1',
        }
    }
];