const __top = 0x0001;
const __bottom = 0x0010;
const __left = 0x0100;
const __right = 0x1000;
const __middle = 0x10000;

const OBJ_ALIGN = {
	TOP_LEFT: __top + __left,
	TOP: __top,
	TOP_RIGHT: __top + __right,
	LEFT: __left,
	MIDDLE: __middle,
	RIGHT: __right,
	BOTTOM_LEFT: __bottom + __left,
	BOTTOM: __bottom,
	BOTTOM_RIGHT: __bottom + __right,
};
