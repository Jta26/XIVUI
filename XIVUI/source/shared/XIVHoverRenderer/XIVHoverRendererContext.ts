import {createContext}from 'react';

interface HoverRendererContext {
 isHovered: boolean;
}

 const XIVHoverRendererContext = createContext<HoverRendererContext>({
    isHovered: false,
});

export default XIVHoverRendererContext;