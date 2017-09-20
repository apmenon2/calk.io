export const boxShadow = (color) => {
	return {
	    webkitBoxShadow: `0px 6px 0px ${color}, 0px 2px 5px black`,
	 	mozBoxShadow: `0px 6px 0px ${color}, 0px 2px 5px black`,
		boxShadow: `0px 6px 0px ${color}, 0px 2px 5px black`,
	}
}

export const hoverShadow = (color) => {
	return {
    	webkitBoxShadow: `0px 2px 0px ${color}, 0px 2px 5px black`,
        mozBoxShadow: `0px 2px 0px ${color}, 0px 2px 5px black`,
        boxShadow: `0px 2px 0px ${color}, 0px 2px 5px black`,
        position: `relative`,
        top: `4px`,
	}
}

export const textShadow = (color) => {
	return {
		webkitTextShadow: `0px 8px 0px ${color}`,
	  	mozTextShadow: `0px 8px 0px ${color}`,
	 	textShadow: `0px 8px 0px ${color}`,
	}
}
