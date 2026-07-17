import type { FireflyConfig } from "../types/config";

export const fireflyConfig: FireflyConfig = {
	// 是否启用萤火虫特效（呼应 Firefly 主题）
	enable: true,

	// 萤火虫数量
	count: 24,

	// 是否仅在暗色模式显示（亮色背景下萤光不明显，建议保持 true）
	darkModeOnly: true,

	// 萤光颜色（RGB 分量），默认暖黄绿色
	color: "255, 233, 138",

	// 光点半径范围（px）
	size: {
		min: 1,
		max: 2.4,
	},

	// 移动速度范围（px/秒）
	speed: {
		min: 8,
		max: 26,
	},

	// 画布层级，低于导航栏和弹层，高于背景
	zIndex: 40,
};
