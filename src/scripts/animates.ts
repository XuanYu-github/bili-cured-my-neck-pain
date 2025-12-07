

// 触发按钮的组合式动画
export const rotateToggleKeyframes = [
    // 0%
    {
        '@all': {
            scale: '1',
        },
        '#bcmnp-toggle-icon-dot': {
            opacity: '1',
        }
    },
    // 25%
    {
        '@all': {
            scale: '0.9',
        },
        '#bcmnp-toggle-icon-dot': {
            opacity: '0',
        }
    },
    // 75%
    {
        '@all': {
            scale: '0.9',
        },
        '#bcmnp-toggle-icon-dot': {
            opacity: '0',
        }
    },
    // 100%
    {
        '@all': {
            scale: '1',
        },
        '#bcmnp-toggle-icon-dot': {
            opacity: '1',
        }
    }
];