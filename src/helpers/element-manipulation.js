import {cloneElement} from 'react';

export const addProps = (element, props, overwrite = false) => {
	var newProps = {};
	Object.entries(props).forEach(([key, value]) => {
		if (!element.props.hasOwnProperty(key)) {
			newProps[key] = value;
		}
	})

	if (Object.keys(newProps).length <= 0) return element;
	return cloneElement(element, newProps);
}
