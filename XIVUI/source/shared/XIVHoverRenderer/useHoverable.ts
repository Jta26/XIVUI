
import react, {useEffect, useState} from 'react';





export default function useHoverable(hoverRef: React.RefObject<HTMLElement>, renderedHoverRef: React.RefObject<HTMLElement>) {
    const [isHovered, setIsHovered] = useState(false);
    useEffect(() => {
        if (hoverRef.current == null || renderedHoverRef.current == null) {
            return;
        }

        const hoverElement = hoverRef.current;
        const renderedHoverElement = renderedHoverRef.current;

        const onMouseEnter = () => {
            setIsHovered(true);
        }
        const onMouseLeave = () => {
            setIsHovered(false);
        }

        hoverElement.addEventListener('mouseenter', onMouseEnter);
        hoverElement.addEventListener('mouseleave', onMouseLeave);

        return () => {
            hoverElement.removeEventListener('mouseenter', onMouseEnter);
            hoverElement.removeEventListener('mouseleave', onMouseLeave);
        }

    },[hoverRef, renderedHoverRef, isHovered, setIsHovered]);


    return [isHovered];
}