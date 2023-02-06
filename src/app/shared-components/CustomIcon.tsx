interface CustomIconProps {
    size?: number,
    color?: string,
    icon: string
}

const CustomIcon = (props: CustomIconProps) => {
    const {size, color, icon} = props;
    const defaultSize = 30;
    const defaultColor = "black";
    const alt = icon?.split('.')[0];

    return (
        <img {...props}
             width={size ?? defaultSize}
             height={size ?? defaultSize}
             color={color ?? defaultColor}
             src={icon}
             alt={alt}/>
    );
}

export default CustomIcon;