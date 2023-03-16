interface GradientButtonProps {
    onClick: () => void;
    children: React.ReactNode;
    className?: string;
    level?: string;
    targetLevel?: string;
}

const GradientButton: React.FC<GradientButtonProps> = ({
    onClick,
    children,
    className = '',
    level,
    targetLevel,
}) => {
    return (
        <button
            onClick={onClick}
            className={`w-20 h-12 m-1 flex items-center justify-center bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 text-white rounded-md ${level === targetLevel && 'ring-2 ring-offset-2 ring-offset-white ring-red-300'
                } hover:bg-gradient-to-r hover:from-yellow-500 hover:via-orange-500 hover:to-red-600 active:scale-95 ${className}`}
        >
            {children}
        </button>
    );
};

export default GradientButton;